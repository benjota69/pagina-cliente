import { useState, useEffect } from "react";
import PresupuestoModal from "./PresupuestoModal";

export default function CotizarPresupuesto() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener("abrirCotizador", handler);
    return () => window.removeEventListener("abrirCotizador", handler);
  }, []);

  return (
    <section className="bg-[#0F0A00] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
          Hablemos de tu cotización
        </h1>
        <p className="mt-3 font-semibold text-base md:text-lg text-white/50">
          ¿Estás preparado para hacer tu cotización? Cuéntanos tu proyecto y te enviamos
          un presupuesto claro y sin compromiso.
        </p>
        <div className="mt-8">
          <button
            onClick={() => setModalOpen(true)}
            className="px-12 py-5 rounded-xl font-bold text-base tracking-wide
                       transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #E6B800, #C9A84C)",
              color: "#0A0A0A",
              boxShadow: "0 4px 24px rgba(230,184,0,0.3)",
            }}
          >
            Solicitar presupuesto
          </button>
        </div>
      </div>
      <PresupuestoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}