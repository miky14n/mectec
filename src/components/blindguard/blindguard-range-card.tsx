import { RangeInsignia } from "./blindguard-insignias";
import revealStyles from "./blindguard-reveal.module.css";
import { RANGE_STYLES } from "./data";
import type { BlindGuardRange } from "./data";

export function BlindGuardRangeCard({ range, index }: { range: BlindGuardRange; index: number }) {
  const style = RANGE_STYLES[range.color];
  const isFinal = range.key === "S";

  return (
    <article id={`rango-${range.key.toLowerCase()}`} className={`${revealStyles.reveal} group relative scroll-mt-36 overflow-hidden rounded-2xl border bg-[#0c1727]/90 p-5 shadow-[0_20px_70px_rgba(0,0,0,.2)] outline-none transition-all duration-300 focus-within:ring-2 focus-within:ring-sky-300/70 ${style.border} ${isFinal ? "lg:col-span-6 lg:grid lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-8" : "lg:col-span-3"}`}>
      <div aria-hidden="true" className={`pointer-events-none absolute -right-14 -top-14 size-44 rounded-full blur-3xl transition-opacity group-hover:opacity-100 ${style.aura}`} />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-bold uppercase tracking-[.18em] ${style.text}`}>Rango {range.key}</p>
          <h3 className="mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">{range.title}</h3>
        </div>
        <span className={`grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[.03] text-xs font-bold ${style.text}`}>0{index + 1}</span>
      </div>
      <div className={`relative my-5 flex min-h-32 items-center justify-center overflow-hidden rounded-xl border border-white/[.06] bg-gradient-to-br from-white/[.035] to-transparent ${isFinal ? "lg:my-0 lg:min-h-52" : ""}`}>
        <div aria-hidden="true" className={`absolute size-24 rounded-full blur-3xl ${style.aura}`} />
        <RangeInsignia letter={range.key} color={style.icon} accentColor={range.key === "S" ? "#fbbf24" : undefined} />
        <span aria-hidden="true" className={`absolute bottom-3 left-3 h-px w-16 bg-gradient-to-r ${style.line} to-transparent`} />
      </div>
      <p className="relative max-w-[72ch] text-[15px] leading-7 text-slate-300 sm:text-base sm:leading-8">{range.copy}</p>
    </article>
  );
}
