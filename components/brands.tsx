"use client";

import {
  siToyota,
  siSuzuki,
  siNissan,
  siMazda,
  siMitsubishi,
  siHonda,
  siHyundai,
  siKia,
  siChevrolet,
  siFord,
  siVolkswagen,
  siRenault,
  siPeugeot,
} from "simple-icons";
import {
  siChangan,
  siChery,
  siFoton,
  siGeely,
  siGwm,
  siHaval,
  siJac,
  siJetour,
} from "./ui/icons/icon";

type Brand = {
  name: string;
  icon?: {
    svg: string;
    title: string;
  };
};

export default function Brands() {
  const japaneseBrands: Brand[] = [
    { name: "Toyota", icon: siToyota },
    { name: "Suzuki", icon: siSuzuki },
    { name: "Nissan", icon: siNissan },
    { name: "Mazda", icon: siMazda },
    { name: "Mitsubishi", icon: siMitsubishi },
    { name: "Honda", icon: siHonda },
  ];

  const koreanBrands: Brand[] = [
    { name: "Hyundai", icon: siHyundai },
    { name: "Kia", icon: siKia },
  ];

  const americanBrands: Brand[] = [
    { name: "Chevrolet", icon: siChevrolet },
    { name: "Ford", icon: siFord },
  ];

  const europeanBrands: Brand[] = [
    { name: "Volkswagen", icon: siVolkswagen },
    { name: "Renault", icon: siRenault },
    { name: "Peugeot", icon: siPeugeot },
  ];

  // Estas marcas aún no existen en Simple Icons
  const chineseBrands: Brand[] = [
    { name: "Changan", icon: siChangan },
    { name: "JAC", icon: siJac },
    { name: "Jetour", icon: siJetour },
    { name: "Chery", icon: siChery },
    { name: "Geely", icon: siGeely },
    { name: "Foton", icon: siFoton },
    { name: "Haval", icon: siHaval },
    { name: "GWM", icon: siGwm },
  ];

  const BrandSection = ({
    title,
    brands,
    columns,
  }: {
    title: string;
    brands: Brand[];
    columns: string;
  }) => (
    <div className="mb-14">
      <h3 className="mb-6 text-lg font-semibold uppercase tracking-wide text-accent">
        {title}
      </h3>

      <div className={`grid ${columns} gap-6`}>
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="group flex h-28 items-center justify-center rounded-xl border border-border bg-card transition-all duration-300 hover:border-accent hover:bg-accent/5"
          >
            {brand.icon ? (
              <div
                title={brand.name}
                className="flex h-14 w-28 items-center justify-center opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                dangerouslySetInnerHTML={{
                  __html: brand.icon.svg.replace(
                    "<svg",
                    '<svg fill="currentColor" class="w-full h-full text-white"',
                  ),
                }}
              />
            ) : (
              <span className="text-sm font-semibold tracking-wide text-white/70 transition-colors group-hover:text-white">
                {brand.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="border-b border-border bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Marcas que Atendemos
          </p>

          <h2 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
            Servicio Especializado para las Marcas Más Utilizadas en Bolivia
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-foreground/70">
            Contamos con experiencia en diagnóstico, mantenimiento y reparación
            de vehículos japoneses, coreanos, americanos, europeos y de las
            principales marcas chinas presentes en el mercado boliviano.
          </p>
        </div>

        <BrandSection
          title="🇯🇵 Marcas Japonesas"
          brands={japaneseBrands}
          columns="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        />

        <BrandSection
          title="🇰🇷 Marcas Coreanas"
          brands={koreanBrands}
          columns="grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        />

        <BrandSection
          title="🇺🇸 Marcas Americanas"
          brands={americanBrands}
          columns="grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        />

        <BrandSection
          title="🇪🇺 Marcas Europeas"
          brands={europeanBrands}
          columns="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />

        <BrandSection
          title="🇨🇳 Marcas Chinas"
          brands={chineseBrands}
          columns="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        />
      </div>
    </section>
  );
}
