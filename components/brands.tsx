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

// Estas marcas no existen en Simple Icons; sus SVG están en ./ui/icons/icon
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

const groups = [
  { title: "Japonesas", brands: japaneseBrands },
  { title: "Coreanas", brands: koreanBrands },
  { title: "Americanas", brands: americanBrands },
  { title: "Europeas", brands: europeanBrands },
  { title: "Chinas", brands: chineseBrands },
];

function BrandTile({ brand }: { brand: Brand }) {
  return (
    <div className="group flex h-20 items-center justify-center rounded-xl border border-border bg-card px-4 transition-colors duration-300 hover:border-accent/60">
      {brand.icon ? (
        <div
          role="img"
          aria-label={brand.name}
          title={brand.name}
          className="flex h-10 w-24 items-center justify-center text-foreground opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          dangerouslySetInnerHTML={{
            __html: brand.icon.svg.replace(
              "<svg",
              '<svg fill="currentColor" aria-hidden="true" class="w-full h-full"',
            ),
          }}
        />
      ) : (
        <span className="text-sm font-semibold tracking-wide text-foreground/70">
          {brand.name}
        </span>
      )}
    </div>
  );
}

export default function Brands() {
  return (
    <section
      id="brands"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/40 border-y border-border"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Marcas que atendemos
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Especialistas en las marcas más usadas en Bolivia
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-foreground/70 sm:text-xl">
            Diagnóstico, mantenimiento y reparación de vehículos japoneses,
            coreanos, americanos, europeos y de las principales marcas chinas.
          </p>
        </div>

        <div className="space-y-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground/60">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {group.brands.map((brand) => (
                  <BrandTile key={brand.name} brand={brand} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
