import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMING_SOON } from "@/config/homepage";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: `Repuestos | ${SITE.name}`,
  description: COMING_SOON.description,
};

export default function RepuestosPage() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-background px-5 text-center text-foreground">
      <section className="max-w-xl">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-brand">{COMING_SOON.repuestosLabel}</p>
        <h1 className="mt-4 text-4xl font-bold">{COMING_SOON.title}</h1>
        <p className="mt-4 text-foreground/65">{COMING_SOON.description}</p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-accent px-5 font-semibold text-accent-foreground"><ArrowLeft aria-hidden="true" className="size-4" />{COMING_SOON.backAction}</Link>
      </section>
    </main>
  );
}
