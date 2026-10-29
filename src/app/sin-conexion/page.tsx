import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#f4f7fb] px-5 py-10 text-slate-950">
      <section className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-xl shadow-slate-950/[0.04] sm:p-10">
        <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-blue-50 text-xl font-black text-blue-800">
          B
        </div>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Brun Grupo Motriz</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight">Sin conexión a internet</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Vuelve a conectarte para abrir el sistema. Los borradores guardados en este dispositivo siguen disponibles al recuperar la conexión.
        </p>
        <Link
          href="/sistema/informes/nuevo"
          className="mt-7 inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-800 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        >
          Intentar nuevamente
        </Link>
      </section>
    </main>
  );
}
