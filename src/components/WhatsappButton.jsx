import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsappButton() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      {/* Texto expandido — solo visible cuando se toca el ícono en móvil */}
      <a
        href="https://wa.me/56944235539"
        target="_blank"
        rel="noopener noreferrer"
        className={[
          "bg-green-500 text-white font-semibold rounded-full shadow-lg",
          "transition-all duration-300 ease-in-out whitespace-nowrap",
          // En desktop siempre visible con texto
          "hidden md:flex items-center gap-2 px-5 py-3 hover:bg-green-600 hover:scale-105",
        ].join(" ")}
      >
        <MessageCircle size={20} />
        WhatsApp
      </a>

      {/* Móvil: tooltip con link cuando está expandido */}
      {expanded && (
        <a
          href="https://wa.me/56944235539"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden bg-green-500 text-white text-sm font-semibold
                     rounded-full px-4 py-2.5 shadow-lg
                     animate-fade-in whitespace-nowrap
                     hover:bg-green-600 transition-colors"
        >
          Escríbenos 💬
        </a>
      )}

      {/* Móvil: botón ícono compacto */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={[
          "md:hidden flex items-center justify-center rounded-full shadow-lg",
          "transition-all duration-300",
          expanded
            ? "w-11 h-11 bg-base-300 text-base-content"
            : "w-12 h-12 bg-green-500 text-white hover:bg-green-600",
        ].join(" ")}
        aria-label="WhatsApp"
      >
        {expanded ? <X size={18} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
