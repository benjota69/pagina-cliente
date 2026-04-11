import logoHorizontal from "../assets/logo-horizontal.webp";

export default function HeroSlider() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #1A1500 50%, #0A0A0A 100%)" }}
    >
      {/* Patrón sutil de fondo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #E6B800 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Resplandor dorado central */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(230,184,0,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Línea decorativa superior */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #E6B800, transparent)" }}
      />

      {/* Línea decorativa inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #E6B800, transparent)" }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12">
        {/* Logo */}
        <img
          src={logoHorizontal}
          alt="Logo Imperio Romano"
          className="w-full max-w-2xl mb-12 h-auto object-contain"
          style={{
            mixBlendMode: "lighten",
            filter: "drop-shadow(0 0 30px rgba(230,184,0,0.3))",
          }}
        />

        {/* Separador dorado */}
        <div className="flex items-center gap-4 mb-8">
          <div
            className="h-px w-16 md:w-24"
            style={{ background: "linear-gradient(90deg, transparent, #E6B800)" }}
          />
          <span className="text-sm tracking-[0.3em] uppercase" style={{ color: "#E6B800" }}>
            Servicios de Pintura
          </span>
          <div
            className="h-px w-16 md:w-24"
            style={{ background: "linear-gradient(90deg, #E6B800, transparent)" }}
          />
        </div>

        {/* Subtítulo */}
        <p
          className="text-base md:text-lg mb-10 tracking-wide max-w-lg"
          style={{ color: "rgba(245, 223, 160, 0.75)" }}
        >
          Interior · Exterior · Terminaciones finas · Trabajo limpio y garantizado
        </p>

        {/* CTA */}
        <button
          onClick={() => window.dispatchEvent(new Event("abrirCotizador"))}
          className="btn px-15 py-7.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #E6B800, #C9A84C)",
            color: "#0A0A0A",
            boxShadow: "0 4px 24px rgba(230,184,0,0.3)",
          }}
        >
          Solicitar evaluación gratuita
        </button>

        {/* Indicador de scroll */}
        <div className="mt-10 flex flex-col items-center gap-1 opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#E6B800"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
