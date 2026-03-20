export default function CotizarPresupuesto() {
  return (
    <section className="bg-base-100 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center md:text-left">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
          Hablemos de tu cotización
        </h1>

        <p className="mt-3 font-semibold text-base md:text-lg opacity-60 text-center">
          ¿Estás preparado para hacer tu cotización? Cuéntanos tu proyecto y te enviamos
        </p>
        <p className="mt-3 font-semibold text-base md:text-lg opacity-60 text-center">un presupuesto claro y sin compromiso.</p>
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 mt-6">
        <a
          href="#presupuesto"
          className="px-10 py-4 rounded-xl font-semibold text-sm tracking-wide
             transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #E6B800, #C9A84C)",
            color: "#0A0A0A",
            boxShadow: "0 4px 24px rgba(230,184,0,0.3)",
          }}
        >
          Solicitar evaluación gratuita
        </a>
      </div>

    </section>
  );
}
