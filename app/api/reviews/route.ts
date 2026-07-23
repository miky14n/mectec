import { NextResponse } from "next/server";

export const revalidate = 86400; // Caché estática de Next.js por 24 horas

// Variables en memoria para control adicional por día
let cachedReviews: any = null;
let lastFetchDate: string = "";

export async function GET() {
  const SERPAPI_KEY = process.env.SERPAPI_KEY;

  if (!SERPAPI_KEY) {
    return NextResponse.json(
      { error: "SERPAPI_KEY no encontrada en .env.local" },
      { status: 500 },
    );
  }

  // Obtener la fecha actual en formato YYYY-MM-DD (ej: "2026-07-23")
  const today = new Date().toISOString().split("T")[0];

  // Si ya consultamos hoy, devolvemos lo que tenemos guardado (0 consumo extra a SerpApi)
  if (cachedReviews && lastFetchDate === today) {
    console.log(
      "⚡ [Cache Local]: Sirviendo reseñas del día sin consumir SerpApi.",
    );
    return NextResponse.json(cachedReviews);
  }

  try {
    const dataId = "0x93e3750061d740d7:0x9604500c6f822ea4";
    const url = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${dataId}&hl=es&api_key=${SERPAPI_KEY}`;

    console.log(
      "🌐 [SerpApi]: Realizando la única consulta permitida para el día:",
      today,
    );
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok || !data.reviews) {
      console.error("❌ Error de SerpApi con ID correcto:", data);

      // Si ya teníamos un caché viejo, lo devolvemos para no romper la web en caso de fallo puntual
      if (cachedReviews) return NextResponse.json(cachedReviews);

      return NextResponse.json(
        { error: "No se encontraron reseñas" },
        { status: 404 },
      );
    }

    const reviews = data.reviews
      .map((review: any) => ({
        name: review.user?.name || "Cliente de Google",
        role: "Cliente en Google Maps",
        text: review.snippet || review.text || "",
        rating: review.rating || 5,
        avatar: review.user?.thumbnail || "",
      }))
      .filter((r: any) => r.text.length > 0);

    // Actualizamos el caché con la fecha del día actual
    cachedReviews = reviews;
    lastFetchDate = today;

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("❌ Error en el servidor:", error);
    if (cachedReviews) return NextResponse.json(cachedReviews);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
