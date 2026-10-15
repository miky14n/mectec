import Logo from "@/components/logo";
import { SITE, navLinks, whatsappLink } from "@/lib/site";

const services = [
  "Diagnóstico computarizado",
  "Mantenimiento preventivo",
  "Reparación especializada",
  "Inspección antes de comprar",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-foreground/60 leading-relaxed">
              Taller mecánico en {SITE.city}: diagnóstico profesional,
              mantenimiento y reparación con transparencia.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Información</h4>
            <ul className="space-y-2 text-foreground/60">
              <li>
                <span className="font-semibold text-foreground/80">
                  WhatsApp:
                </span>{" "}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="font-semibold text-foreground/80">
                  Ubicación:
                </span>{" "}
                <a
                  href={SITE.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {SITE.city}, {SITE.country}
                </a>
              </li>
              <li>
                <span className="font-semibold text-foreground/80">
                  Horario:
                </span>{" "}
                {SITE.hoursLabel}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-8 text-center sm:text-left">
          <p className="text-foreground/60 text-sm">
            © {currentYear} {SITE.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
