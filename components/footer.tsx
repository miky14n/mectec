"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">MECTEC</h3>
            <p className="text-foreground/60 leading-relaxed">
              Tu distribuidor de confianza para vehículos europeos de calidad en
              Bolivia.
            </p>
            <a
              href="https://wa.me/+591 77924302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-accent hover:text-accent/80 transition-colors"
            >
              Contactar
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#why"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Por qué MECTEC
                </a>
              </li>
              <li>
                <a
                  href="#guarantee"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Garantía
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Venta de Vehículos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Financiamiento
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Mantenimiento
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-foreground/60 hover:text-foreground transition-colors"
                >
                  Reparaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Información</h4>
            <ul className="space-y-2">
              <li>
                <p className="text-foreground/60">
                  <strong>Teléfono:</strong> +591 77924302
                </p>
              </li>
              <li>
                <p className="text-foreground/60">
                  <strong>Email:</strong> info@mectec.bo
                </p>
              </li>
              <li>
                <p className="text-foreground/60">
                  <strong>Ubicación:</strong>Cochabamba, Bolivia
                </p>
              </li>
              <li>
                <p className="text-foreground/60">
                  <strong>Horario:</strong> Lunes a Sábado 9am-6pm
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © {currentYear} MECTEC. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              Términos
            </a>
            <a
              href="#"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
