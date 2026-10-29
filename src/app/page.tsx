import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageSearch,
  Phone,
  Shield,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { BlindGuardEmblem, RangeInsignia } from "@/components/blindguard/blindguard-insignias";
import { RANGE_STYLES } from "@/components/blindguard/data";
import { SITE, whatsappLink } from "@/config/site";
import {
  HOME_BLINDGUARD,
  HOME_BRAND_LINE,
  HOME_CONTACT,
  HOME_COPY,
  HOME_FOOTER_LINE,
  HOME_NAVIGATION,
  HOME_SERVICES,
  HOME_TRUST_ITEMS,
} from "@/config/homepage";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10";
const rangeColorKey = { D: "silver", C: "blue", B: "amber", A: "green", S: "red" } as const;

const title = `${SITE.name} | Cochabamba`;
const description =
  "Planes de mantenimiento, venta de lubricantes y servicios mecánicos en Cochabamba, Bolivia. Taller mecánico, BlindGuard y catálogo digital de repuestos.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_BO",
    url: "/",
    siteName: SITE.name,
    title,
    description,
  },
};

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060E1A]/95 backdrop-blur-xl">
        <div className={`${container} flex min-h-16 items-center justify-between gap-3`}>
          <Link href="/" aria-label="Brun Grupo Motriz, inicio" className="flex shrink-0 items-center gap-2.5">
            <Image src="/brun-pwa-icon.svg" width={40} height={40} alt="" priority className="size-9 rounded-lg sm:size-10" />
            <span className="text-sm font-bold tracking-tight sm:text-base">{SITE.name}</span>
          </Link>
          <nav aria-label="Navegación principal" className="hidden items-center gap-5 lg:flex xl:gap-7">
            {HOME_NAVIGATION.map((item) => <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm text-white/65 transition hover:text-white">{item.label}</Link>)}
            <button type="button" disabled aria-disabled="true" title={HOME_COPY.menuLoginTitle} className="cursor-not-allowed whitespace-nowrap text-sm text-white/35">{HOME_COPY.menuLogin}</button>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-accent px-3 text-xs font-semibold text-accent-foreground transition hover:bg-accent/90 sm:px-4 sm:text-sm"><MessageCircle aria-hidden="true" className="size-4" /><span className="hidden sm:inline">Agendar servicio</span><span className="sm:hidden">Agendar</span></a>
            <details className="group relative lg:hidden">
              <summary aria-label={HOME_COPY.menuOpen} className="grid size-10 cursor-pointer list-none place-items-center rounded-lg border border-white/15 text-white [&::-webkit-details-marker]:hidden"><Menu aria-hidden="true" className="size-5 group-open:hidden" /><span className="hidden text-xl leading-none group-open:inline" aria-hidden="true">×</span><span className="sr-only group-open:hidden">{HOME_COPY.menuOpen}</span><span className="sr-only hidden group-open:inline">{HOME_COPY.menuClose}</span></summary>
              <nav aria-label="Navegación móvil" className="absolute right-0 top-12 z-50 w-[min(18rem,calc(100vw-2.5rem))] rounded-xl border border-white/10 bg-[#0D1627] p-2 shadow-2xl">
                {HOME_NAVIGATION.map((item) => <Link key={item.href} href={item.href} className="block rounded-lg px-4 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white">{item.label}</Link>)}
                <button type="button" disabled aria-disabled="true" title={HOME_COPY.menuLoginTitle} className="w-full cursor-not-allowed rounded-lg px-4 py-3 text-left text-sm text-white/35">{HOME_COPY.menuLoginStage}</button>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden border-b border-white/10">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(37,99,235,.2),transparent_40%),radial-gradient(ellipse_at_5%_80%,rgba(14,165,233,.1),transparent_35%),linear-gradient(135deg,#060E1A_20%,#09172a_55%,#060E1A)]" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-[.1] [background-image:linear-gradient(rgba(148,163,184,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.16)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
          <div className={`${container} grid min-h-[650px] items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24`}>
            <div className="relative z-10 max-w-2xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/[.06] px-3 py-2 text-xs font-bold uppercase tracking-[.16em] text-blue-200"><span className="size-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_#7dd3fc]" />{SITE.city}, {SITE.country} <span className="text-white/30">/</span> {HOME_COPY.heroEyebrow}</p>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-.05em] text-white sm:text-6xl lg:text-7xl">Brun Grupo Motriz<span className="text-blue-300">.</span></h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{HOME_COPY.heroExperience}</p>
              <p className="mt-5 max-w-2xl text-xs font-bold leading-6 tracking-[.12em] text-white/75 sm:text-sm">{HOME_BRAND_LINE}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#servicios" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-blue-400 px-6 font-bold text-slate-950 shadow-[0_10px_40px_rgba(56,189,248,.15)] transition hover:-translate-y-0.5 hover:bg-blue-300">{HOME_COPY.heroServicesAction}<ArrowDownRight aria-hidden="true" className="size-4" /></a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[.025] px-6 font-semibold text-white transition hover:border-white/50 hover:bg-white/5"><MessageCircle aria-hidden="true" className="size-4" />{HOME_COPY.heroWhatsAppAction}</a>
              </div>
            </div>
            <div className="relative mx-auto flex min-h-[340px] w-full max-w-lg items-center justify-center sm:min-h-[440px]">
              <div aria-hidden="true" className="absolute size-48 rounded-full bg-blue-500/15 blur-[80px] sm:size-72" /><div aria-hidden="true" className="absolute size-64 rounded-full border border-sky-200/[.08] sm:size-80" /><div aria-hidden="true" className="absolute size-52 rounded-full border border-dashed border-sky-100/[.12] sm:size-64" />
              <div className="relative flex size-56 items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[.09] to-white/[.015] shadow-[0_30px_100px_rgba(0,0,0,.35)] sm:size-72"><div aria-hidden="true" className="absolute inset-3 rounded-[1.5rem] border border-white/[.08]" /><Image src="/brun-pwa-icon.svg" width={180} height={180} alt="Símbolo de Brun Grupo Motriz" priority className="relative size-36 drop-shadow-[0_0_50px_rgba(59,130,246,.35)] sm:size-44" /><span aria-hidden="true" className="absolute -right-3 top-8 grid size-12 place-items-center rounded-2xl border border-sky-200/20 bg-[#0a1424] text-sky-200 shadow-xl"><Wrench className="size-5" /></span><span aria-hidden="true" className="absolute -bottom-3 -left-3 grid size-12 place-items-center rounded-2xl border border-blue-200/20 bg-[#0a1424] text-blue-200 shadow-xl"><Shield className="size-5" /></span></div>
              <div className="absolute bottom-2 right-0 rounded-xl border border-white/10 bg-[#0a1424]/90 px-4 py-3 shadow-xl backdrop-blur sm:bottom-5"><p className="text-xs font-semibold text-white">{SITE.name}</p><p className="mt-1 text-[11px] text-slate-400">{SITE.city} · {SITE.country}</p></div>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-20 py-20 sm:py-28">
          <div className={container}>
            <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">{HOME_COPY.servicesEyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{HOME_COPY.servicesTitle}</h2></div><p className="max-w-md text-sm leading-6 text-white/55">{HOME_BRAND_LINE}</p></div>
            <div className="grid gap-4 md:grid-cols-3">
              {HOME_SERVICES.map((service, index) => {
                const Icon = [Wrench, ShieldCheck, PackageSearch][index];
                return <Link key={service.href} href={service.href} className="group relative flex min-h-80 flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111d30] to-[#0a1321] p-6 transition-all hover:-translate-y-1 hover:border-sky-200/35 hover:shadow-[0_24px_80px_rgba(0,0,0,.25)] sm:p-7"><span aria-hidden="true" className="absolute -right-12 -top-12 size-40 rounded-full bg-blue-400/10 blur-3xl transition group-hover:bg-blue-300/20" /><div className="relative flex items-center justify-between"><span className="text-xs font-bold tracking-[.18em] text-sky-200">0{index + 1}</span><span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-sky-200"><Icon aria-hidden="true" className="size-5" /></span></div><h3 className="relative mt-9 text-xl font-bold leading-snug text-white">{service.title}</h3><p className="relative mt-3 flex-1 text-sm leading-6 text-slate-300/75">{service.description}</p><span className="relative mt-7 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-semibold text-white">{service.action}<ArrowRight aria-hidden="true" className="size-4 transition group-hover:translate-x-1" /></span></Link>;
              })}
            </div>
          </div>
        </section>

        <section id="asesoria-compra" className="scroll-mt-20 pb-20 sm:pb-28">
          <div className={container}>
            <div className="overflow-hidden rounded-3xl bg-sky-100 text-slate-950 lg:grid lg:grid-cols-[1fr_1.1fr]">
              <div className="p-7 sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-blue-700">Asesoría de compra</p>
                <h2 className="mt-4 max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">Compra tu próximo vehículo con seguridad</h2>
                <p className="mt-5 max-w-lg leading-7 text-slate-700">Inspeccionamos el vehículo antes de que inviertas tu dinero para ayudarte a tomar una decisión informada.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href={whatsappLink("Hola, quiero agendar una inspección antes de comprar un vehículo")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-blue-900"><MessageCircle aria-hidden="true" className="size-4" />Solicitar una inspección</a>
                  <Link href="/mectec#process" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-900/20 px-5 text-sm font-semibold transition hover:bg-slate-900/5">Conocer el proceso<ArrowRight aria-hidden="true" className="size-4" /></Link>
                </div>
              </div>
              <div className="bg-[#10233a] p-7 text-white sm:p-10 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">Antes de cerrar el trato</p>
                <ol className="mt-6 divide-y divide-white/15">
                  <li className="flex gap-4 py-4"><span className="font-bold text-sky-300">01</span><div><h3 className="font-semibold">Cuéntanos y coordinamos</h3><p className="mt-1 text-sm leading-6 text-slate-300">Comparte los datos del vehículo y acordamos la inspección con el propietario.</p></div></li>
                  <li className="flex gap-4 py-4"><span className="font-bold text-sky-300">02</span><div><h3 className="font-semibold">Revisamos el vehículo</h3><p className="mt-1 text-sm leading-6 text-slate-300">Evaluamos sus sistemas mecánicos y electrónicos, con diagnóstico computarizado cuando corresponde.</p></div></li>
                  <li className="flex gap-4 py-4"><span className="font-bold text-sky-300">03</span><div><h3 className="font-semibold">Decide con información</h3><p className="mt-1 text-sm leading-6 text-slate-300">Recibe un informe técnico y asesoría para negociar o decidir si te conviene comprar.</p></div></li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section id="blindguard" className="relative isolate scroll-mt-20 overflow-hidden border-y border-white/10 bg-[#080f1b] py-20 sm:py-28">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_50%,rgba(14,165,233,.1),transparent_38%),radial-gradient(ellipse_at_85%_30%,rgba(37,99,235,.15),transparent_40%)]" />
          <div className={`${container} grid items-center gap-12 lg:grid-cols-[1fr_1fr]`}>
            <div><p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-sky-300"><ShieldCheck aria-hidden="true" className="size-4" />{HOME_COPY.blindGuardProtection}</p><h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{HOME_BLINDGUARD.title}</h2><p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{HOME_BLINDGUARD.description}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/blindguard" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 font-bold text-slate-950 transition hover:bg-sky-300">{HOME_BLINDGUARD.primaryAction}<ArrowRight aria-hidden="true" className="size-4" /></Link><a href={whatsappLink(HOME_BLINDGUARD.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[.025] px-6 font-semibold text-white transition hover:border-white/50 hover:bg-white/5"><MessageCircle aria-hidden="true" className="size-4" />{HOME_BLINDGUARD.secondaryAction}</a></div></div>
            <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-sky-200/15 bg-gradient-to-br from-[#102442] via-[#0b1729] to-[#0b111d] p-5 shadow-[0_30px_100px_rgba(0,0,0,.3)] sm:p-8"><div aria-hidden="true" className="absolute -right-10 -top-12 size-48 rounded-full bg-blue-500/15 blur-[70px]" /><div className="relative flex items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-sky-200">{HOME_COPY.blindGuardName}</p><p className="mt-1 text-sm text-white/55">{HOME_BLINDGUARD.title}</p></div><BlindGuardEmblem className="size-16 shrink-0 sm:size-20" /></div><div className="relative mt-5 grid grid-cols-5 gap-1.5 sm:gap-3" aria-label="Insignias de rango D, C, B, A y S">{HOME_BLINDGUARD.ranges.map((range) => { const style = RANGE_STYLES[rangeColorKey[range as keyof typeof rangeColorKey]]; return <div key={range} className={`group grid aspect-[1.1/1] min-w-0 place-items-center overflow-hidden rounded-xl border bg-[#060E1A]/70 ${style.border}`}><RangeInsignia letter={range} color={style.icon} accentColor={range === "S" ? "#fbbf24" : undefined} className="h-16 w-[4.75rem] sm:h-20 sm:w-24" /></div>; })}</div></div>
          </div>
        </section>

        <section id="confianza" className="scroll-mt-20 py-20 sm:py-28"><div className={container}><div className="mb-10 max-w-2xl sm:mb-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">{HOME_COPY.trustEyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{HOME_COPY.trustTitle}</h2></div><div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">{HOME_TRUST_ITEMS.map((item, index) => <article key={item.title} className="group border-t border-white/15 py-5 transition-colors hover:border-sky-300/50 sm:py-6"><span className="text-xs font-semibold tracking-[.12em] text-sky-300">0{index + 1}</span><h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p></article>)}</div><Link href="/mectec" className="mt-7 inline-flex min-h-11 items-center gap-2 font-semibold text-white transition hover:text-blue-200">{HOME_COPY.trustAction}<ArrowRight aria-hidden="true" className="size-4" /></Link></div></section>

        <section id="contacto" className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#080f1b] py-20 sm:py-28"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,.1),transparent_45%)]" /><div className={`${container} relative`}><div className="mb-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">{HOME_COPY.contactEyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{HOME_COPY.contactTitle}</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#060E1A] p-5 transition hover:border-blue-300/40"><MessageCircle aria-hidden="true" className="size-5 text-blue-300" /><h3 className="mt-5 font-semibold text-white">{HOME_COPY.whatsappLabel}</h3><p className="mt-1 text-sm text-white/60">{SITE.phone}</p></a><a href={`tel:${HOME_CONTACT.secondaryPhone}`} className="rounded-2xl border border-white/10 bg-[#060E1A] p-5 transition hover:border-blue-300/40"><Phone aria-hidden="true" className="size-5 text-blue-300" /><h3 className="mt-5 font-semibold text-white">{HOME_COPY.phoneLabel}</h3><p className="mt-1 text-sm text-white/60">{HOME_CONTACT.secondaryPhone}</p></a><a href={`mailto:${HOME_CONTACT.email}`} className="rounded-2xl border border-white/10 bg-[#060E1A] p-5 transition hover:border-blue-300/40"><Mail aria-hidden="true" className="size-5 text-blue-300" /><h3 className="mt-5 font-semibold text-white">{HOME_COPY.emailLabel}</h3><p className="mt-1 break-all text-sm text-white/60">{HOME_CONTACT.email}</p></a><a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 bg-[#060E1A] p-5 transition hover:border-blue-300/40"><MapPin aria-hidden="true" className="size-5 text-blue-300" /><h3 className="mt-5 font-semibold text-white">{HOME_COPY.addressLabel}</h3><p className="mt-1 text-sm leading-5 text-white/60">{HOME_CONTACT.address}</p></a></div><div className="mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-[#060E1A] p-5"><Clock3 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-blue-300" /><div><h3 className="font-semibold text-white">{HOME_COPY.hoursLabel}</h3><p className="mt-1 text-sm text-white/60">{HOME_CONTACT.hours}</p></div></div></div></section>
      </main>

      <footer className="border-t border-white/10 py-10"><div className={`${container} flex flex-col gap-7`}><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start"><div><Link href="/" className="font-bold text-white">{SITE.name}</Link><p className="mt-2 max-w-xl text-xs leading-5 text-white/50">{HOME_BRAND_LINE}</p></div><nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">{HOME_NAVIGATION.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}<a href="#blindguard" className="hover:text-white">{HOME_COPY.footerBlindGuardLink}</a></nav></div><p className="border-t border-white/10 pt-5 text-xs text-white/40">{HOME_FOOTER_LINE}</p></div></footer>
    </>
  );
}
