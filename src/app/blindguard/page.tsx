import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, ChevronRight, Menu, MessageCircle, ShieldCheck } from "lucide-react";
import Contact from "@/components/mectec/contact";
import Footer from "@/components/mectec/footer";
import { BlindGuardEmblem } from "@/components/blindguard/blindguard-insignias";
import { BlindGuardRangeCard } from "@/components/blindguard/blindguard-range-card";
import revealStyles from "@/components/blindguard/blindguard-reveal.module.css";
import { BLINDGUARD_COPY, BLINDGUARD_MESSAGE, BLINDGUARD_RANGES, COMPARISON_ROWS, RANGE_STYLES } from "@/components/blindguard/data";
import { HOME_NAVIGATION } from "@/config/homepage";
import { SITE, whatsappLink } from "@/config/site";

const title = `BlindGuard | ${SITE.name}`;
const description = BLINDGUARD_COPY.heroSubtitle;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blindguard" },
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "/blindguard",
    siteName: SITE.name,
    title,
    description,
  },
};

export default function BlindGuardRoute() {
  return (
    <div className="min-h-screen overflow-clip bg-[#060E1A] text-white selection:bg-sky-400/30 selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/[.08] bg-[#060E1A]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-7 lg:px-10">
          <Link href="/" aria-label={`${SITE.name}, inicio`} className="flex shrink-0 items-center gap-2.5">
            <Image src="/brun-pwa-icon.svg" alt="" width={38} height={38} priority className="size-9 rounded-lg" />
            <span className="text-sm font-bold tracking-tight sm:text-base">{SITE.name}<span className="hidden text-white/45 sm:inline"> · Grupo Motriz</span></span>
          </Link>
          <nav aria-label="Navegación principal" className="hidden items-center gap-5 lg:flex xl:gap-7">
            {HOME_NAVIGATION.map((item) => (
              <Link key={item.href} href={item.href === "#contacto" ? "#contact" : item.href} aria-current={item.href === "/blindguard" ? "page" : undefined} className="whitespace-nowrap text-sm text-white/65 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">{item.label}</Link>
            ))}
            <button type="button" disabled aria-disabled="true" title="Disponible en la Etapa 2" className="cursor-not-allowed whitespace-nowrap text-sm text-white/35">Iniciar sesión</button>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a href={whatsappLink(BLINDGUARD_MESSAGE)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-sky-500 px-3 text-xs font-bold text-slate-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200 sm:px-4 sm:text-sm"><MessageCircle aria-hidden="true" className="size-4" /><span className="hidden sm:inline">{BLINDGUARD_COPY.inquire}</span><span className="sm:hidden">Consultar</span></a>
            <details className="group relative lg:hidden">
              <summary aria-label="Abrir menú" className="grid size-11 cursor-pointer list-none place-items-center rounded-lg border border-white/15 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 [&::-webkit-details-marker]:hidden"><Menu aria-hidden="true" className="size-5 group-open:hidden" /><span aria-hidden="true" className="hidden text-2xl leading-none group-open:inline">×</span></summary>
              <nav aria-label="Navegación móvil" className="absolute right-0 top-13 z-50 w-[min(19rem,calc(100vw-2rem))] rounded-xl border border-white/10 bg-[#0D1627] p-2 shadow-2xl">
                {HOME_NAVIGATION.map((item) => <Link key={item.href} href={item.href === "#contacto" ? "#contact" : item.href} className="block min-h-11 rounded-lg px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white">{item.label}</Link>)}
                <button type="button" disabled aria-disabled="true" title="Disponible en la Etapa 2" className="w-full cursor-not-allowed rounded-lg px-4 py-3 text-left text-sm text-white/35">Iniciar sesión · Etapa 2</button>
                <a href={whatsappLink(BLINDGUARD_MESSAGE)} target="_blank" rel="noopener noreferrer" className="mt-1 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-sky-500 px-4 py-3 text-sm font-bold text-slate-950"><MessageCircle aria-hidden="true" className="size-4" />{BLINDGUARD_COPY.inquire}</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden border-b border-white/[.08]">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(37,99,235,.2),transparent_40%),radial-gradient(ellipse_at_5%_80%,rgba(14,165,233,.1),transparent_35%),linear-gradient(135deg,#060E1A_20%,#09172a_55%,#060E1A)]" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[.12] [background-image:linear-gradient(rgba(148,163,184,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.16)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_.9fr] lg:px-10 lg:py-24">
            <div className="relative z-10 max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/[.06] px-3 py-1.5 text-xs font-semibold tracking-wide text-sky-200"><span className="size-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_#7dd3fc]" />{BLINDGUARD_COPY.heroLabel}</p>
              <h1 className="mt-6 text-6xl font-black tracking-[-.055em] text-white sm:text-7xl lg:text-8xl">BlindGuard<span className="text-sky-300">.</span></h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">{BLINDGUARD_COPY.heroSubtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink(BLINDGUARD_MESSAGE)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 font-bold text-slate-950 shadow-[0_10px_40px_rgba(56,189,248,.18)] transition hover:-translate-y-0.5 hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"><MessageCircle aria-hidden="true" className="size-5" />{BLINDGUARD_COPY.inquire}</a>
                <a href="#rangos" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[.025] px-6 font-semibold text-white transition hover:border-sky-200/50 hover:bg-white/[.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">{BLINDGUARD_COPY.seeRanges}<ArrowDown aria-hidden="true" className="size-4" /></a>
              </div>
            </div>
            <div className="relative mx-auto flex min-h-[300px] w-full max-w-lg items-center justify-center sm:min-h-[420px]">
              <div aria-hidden="true" className="absolute size-48 rounded-full bg-blue-500/15 blur-[80px] sm:size-72" />
              <div aria-hidden="true" className="absolute size-64 rounded-full border border-sky-200/[.08] sm:size-80" />
              <div aria-hidden="true" className="absolute size-52 rounded-full border border-dashed border-sky-100/[.12] sm:size-64" />
              <BlindGuardEmblem className="relative z-10 size-64 drop-shadow-[0_0_48px_rgba(59,130,246,.24)] sm:size-[25rem]" />
              <div className="absolute bottom-6 right-0 flex items-center gap-3 rounded-xl border border-white/10 bg-[#0a1424]/85 px-4 py-3 shadow-xl backdrop-blur"><span className="grid size-9 place-items-center rounded-lg bg-sky-300/10 text-sky-200"><ShieldCheck aria-hidden="true" className="size-5" /></span><span className="text-xs font-semibold leading-5 text-slate-200">{SITE.name}<br /><span className="font-normal text-slate-400">{BLINDGUARD_COPY.heroLabel}</span></span></div>
            </div>
          </div>
        </section>

        <section id="que-es" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:px-10">
            <div className={revealStyles.reveal}><p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">{BLINDGUARD_COPY.heroLabel}</p><h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">{BLINDGUARD_COPY.definitionTitle}</h2></div>
            <div className={revealStyles.reveal}>
              <p className="max-w-[68ch] text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">{BLINDGUARD_COPY.definition}</p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">{BLINDGUARD_COPY.highlights.map((point, index) => <div key={point} className="flex min-h-24 items-start gap-3 border-t border-sky-200/20 py-4"><span className="pt-0.5 text-xs font-bold text-sky-300">0{index + 1}</span><p className="text-sm font-semibold leading-6 text-slate-200">{point}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section id="rangos" className="scroll-mt-20 border-y border-white/[.08] bg-[radial-gradient(ellipse_at_50%_0%,rgba(30,64,175,.13),transparent_45%),#080f1b] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">{BLINDGUARD_RANGES.map((range, index) => <span key={range.key}>{index > 0 && <ChevronRight aria-hidden="true" className="inline size-3" />}{range.key}{" "}</span>)}</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{BLINDGUARD_COPY.rangesTitle}</h2></div>
            <nav aria-label="Seleccionar rango de garantía" className="sticky top-16 z-30 -mx-4 mt-8 border-y border-white/10 bg-[#060E1A]/95 px-4 py-2 backdrop-blur-xl lg:hidden"><div className="mx-auto grid max-w-md grid-cols-5 gap-2">{BLINDGUARD_RANGES.map((range) => { const style = RANGE_STYLES[range.color]; return <a key={range.key} href={`#rango-${range.key.toLowerCase()}`} aria-label={range.title} className={`grid min-h-11 place-items-center rounded-lg border bg-white/[.025] text-sm font-black ${style.border} ${style.text} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200`}>{range.key}</a>; })}</div></nav>
            <div className="relative mt-8 grid gap-4 lg:mt-14 lg:grid-cols-6 lg:gap-5"><div aria-hidden="true" className="pointer-events-none absolute left-[8%] right-[8%] top-[4.8rem] hidden h-px bg-gradient-to-r from-slate-300/30 via-sky-300/40 to-red-300/40 lg:block" />{BLINDGUARD_RANGES.map((range, index) => <BlindGuardRangeCard key={range.key} range={range} index={index} />)}</div>
          </div>
        </section>

        <section id="comparador" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-8 max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">D · C · B · A · S</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{BLINDGUARD_COPY.comparisonTitle}</h2></div>
            <p id="table-help" className="mb-3 text-sm text-slate-400">{BLINDGUARD_COPY.comparisonHint}</p>
            <div role="region" aria-label={BLINDGUARD_COPY.comparisonTitle} aria-describedby="table-help" tabIndex={0} className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0c1727] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead><tr className="border-b border-white/10 bg-white/[.025]"><th scope="col" className="w-[48%] px-5 py-4 font-semibold text-slate-300 sm:px-6">Cobertura descrita</th>{BLINDGUARD_RANGES.map((range) => <th scope="col" key={range.key} className={`px-4 py-4 text-center text-base font-black ${RANGE_STYLES[range.color].text}`}>{range.key}</th>)}</tr></thead>
                <tbody>{COMPARISON_ROWS.map((row) => <tr key={row.label} className="border-b border-white/[.07] last:border-0"><th scope="row" className="px-5 py-5 font-medium leading-6 text-slate-300 sm:px-6">{row.label}</th>{row.included.map((included, index) => <td key={BLINDGUARD_RANGES[index].key} className="px-4 py-5 text-center">{included ? <Check aria-label="Incluido" className={`mx-auto size-5 ${RANGE_STYLES[BLINDGUARD_RANGES[index].color].text}`} /> : <span aria-label="No indicado" className="text-slate-600">—</span>}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-400">{BLINDGUARD_COPY.comparisonNote}</p>
          </div>
        </section>

        <section id="contratar" className="scroll-mt-20 border-y border-white/[.08] bg-[#0c1727]/65 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10">
            <div className={revealStyles.reveal}><p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">BlindGuard</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{BLINDGUARD_COPY.contractTitle}</h2><p className="mt-5 max-w-[62ch] text-base leading-7 text-slate-300">{BLINDGUARD_COPY.contractDescription}</p><a href={whatsappLink(BLINDGUARD_MESSAGE)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-sky-400 px-5 font-bold text-slate-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"><MessageCircle aria-hidden="true" className="size-5" />{BLINDGUARD_COPY.inquire}</a></div>
            <ol className="grid gap-3 sm:grid-cols-2">{BLINDGUARD_COPY.contractSteps.map((step, index) => <li key={step} className={`${revealStyles.reveal} rounded-2xl border border-white/10 bg-[#060E1A] p-6 sm:min-h-52 sm:p-7`}><span className="grid size-11 place-items-center rounded-xl border border-sky-300/20 bg-sky-300/[.08] text-sm font-bold text-sky-200">0{index + 1}</span><p className="mt-8 text-lg font-semibold leading-7 text-white">{step}</p></li>)}</ol>
          </div>
        </section>

        <section className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_110%,rgba(37,99,235,.22),transparent_56%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center overflow-hidden rounded-3xl border border-sky-200/15 bg-gradient-to-br from-[#102442] via-[#0b1729] to-[#0b111d] px-5 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,.32)] sm:px-12 sm:py-16"><div aria-hidden="true" className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/15 blur-[90px]" /><BlindGuardEmblem className="relative size-40 drop-shadow-[0_0_36px_rgba(59,130,246,.25)] sm:size-48" /><h2 className="relative mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{BLINDGUARD_COPY.closingTitle}</h2><div className="relative mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"><a href={whatsappLink(BLINDGUARD_MESSAGE)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 font-bold text-slate-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"><MessageCircle aria-hidden="true" className="size-5" />{BLINDGUARD_COPY.inquire}</a><Link href="/mectec" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 font-semibold text-white transition hover:border-white/50 hover:bg-white/[.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">{BLINDGUARD_COPY.workshopLink}<ArrowRight aria-hidden="true" className="size-4" /></Link></div></div>
        </section>

        <div id="contacto"><Contact /></div>
      </main>
      <Footer />
      <div className="border-t border-white/10 bg-[#060E1A] px-5 py-5 text-center text-[11px] font-semibold leading-5 tracking-[.1em] text-slate-400 sm:px-8">{BLINDGUARD_COPY.brandLine}</div>
    </div>
  );
}
