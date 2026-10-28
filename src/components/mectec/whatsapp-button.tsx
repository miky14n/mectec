import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-black/30 hover:scale-110 transition-transform duration-300 group"
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle size={28} aria-hidden="true" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card border border-border text-foreground px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none hidden sm:block">
        ¿Dudas? Escríbenos
      </span>
    </a>
  );
}
