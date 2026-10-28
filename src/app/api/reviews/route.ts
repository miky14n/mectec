import { NextResponse } from "next/server";

export const revalidate = 86400; // Caché estática de Next.js por 24 horas

type Review = {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
};

type SerpApiReview = {
  user?: { name?: string; thumbnail?: string };
  snippet?: string;
  text?: string;
  rating?: number;
};

// Ficha de Google Maps del taller
const GOOGLE_MAPS_DATA_ID = "0x93e3750061d740d7:0x9604500c6f822ea4";

// Caché en memoria como respaldo si SerpApi falla puntualmente
let cachedReviews: Review[] | null = null;
let lastFetchDate = "";

export async function GET() {
  const SERPAPI_KEY = process.env.SERPAPI_KEY;

  if (!SERPAPI_KEY) {
    return NextResponse.json(
      { error: "SERPAPI_KEY no configurada" },
      { status: 500 },
    );
  }

  const today = new Date().toISOString().split("T")[0];

  if (cachedReviews && lastFetchDate === today) {
    return NextResponse.json(cachedReviews);
  }

  try {
    const url = `https://serpapi.com/search.json?engine=google_maps_reviews&data_id=${GOOGLE_MAPS_DATA_ID}&hl=es&api_key=${SERPAPI_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok || !Array.isArray(data.reviews)) {
      console.error("Error de SerpApi:", data?.error ?? res.status);
      if (cachedReviews) return NextResponse.json(cachedReviews);
      return NextResponse.json(
        { error: "No se encontraron reseñas" },
        { status: 404 },
      );
    }

    const reviews: Review[] = (data.reviews as SerpApiReview[])
      .map((review) => ({
        name: review.user?.name || "Cliente de Google",
        role: "Reseña en Google Maps",
        text: (review.snippet || review.text || "").trim(),
        rating: review.rating ?? 5,
        avatar: review.user?.thumbnail || "",
      }))
      .filter((r) => r.text.length > 0);

    cachedReviews = reviews;
    lastFetchDate = today;

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error al obtener reseñas:", error);
    if (cachedReviews) return NextResponse.json(cachedReviews);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
