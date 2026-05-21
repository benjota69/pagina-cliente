import { Link } from "react-router-dom";

export default function HeroSlider() {
  return (
    <section id="top" className="relative w-full bg-white overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-16 md:pt-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8 items-center">

          {/* ── TEXTO ── */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6B800]/15 border border-[#E6B800]/40 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6B800] animate-pulse" />
              <span className="text-[#A8892E] text-xs font-bold uppercase tracking-widest">
                Pintura profesional · V Región
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-zinc-950 mb-5">
              Pintamos tu hogar<br />
              con{" "}
              <span style={{ color: "#C9A84C" }}>calidad garantizada</span>
              <br />y presupuesto claro.
            </h1>

            <p className="text-base md:text-lg text-zinc-600 max-w-sm mb-8">
              Especialistas en pintura interior y exterior
              con terminaciones profesionales en la Quinta Región.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => window.dispatchEvent(new Event("abrirCotizador"))}
                className="btn rounded-xl border-0 px-10 w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #FFE14D 0%, #F5C400 60%, #D4A800 100%)",
                  color: "#0A0A0A",
                  boxShadow: "0 6px 28px rgba(245,196,0,0.52), 0 2px 8px rgba(0,0,0,0.12)",
                  minHeight: "3.25rem",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                Solicitar Presupuesto
              </button>
              <Link
                to="/trabajos"
                className="btn rounded-xl font-semibold px-7 text-sm border border-zinc-300 bg-transparent text-zinc-700 hover:bg-zinc-100 w-full sm:w-auto"
                style={{ minHeight: "3.25rem" }}
              >
                Ver trabajos
              </Link>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8 pt-7 border-t border-zinc-200 w-full">
              {["Trabajo garantizado", "Presupuesto sin cargo", "Sin costos extra"].map(
                (label) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-zinc-600">
                    <span
                      className="flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold flex-shrink-0"
                      style={{ background: "rgba(230,184,0,0.15)", color: "#A8892E" }}
                    >
                      ✓
                    </span>
                    {label}
                  </div>
                )
              )}
            </div>
          </div>

          {/* ── FOTOS ── */}
          <div className="lg:col-span-3">

            {/* Mobile: apilado */}
            <div className="grid grid-cols-2 gap-3 lg:hidden">
              <Link to="/trabajos?categoria=terminaciones" className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl group block">
                <img
                  src="/trabajos/IMG_2778.webp"
                  alt="Terminación decorativa 3D"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
                <div className="absolute bottom-3 left-3 translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="bg-[#E6B800] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Terminaciones 3D
                  </span>
                </div>
              </Link>
              <Link to="/trabajos?categoria=exterior" className="relative rounded-2xl overflow-hidden shadow-lg group block">
                <img
                  src="/trabajos/PHOTO-2026-03-18-20-26-59.webp"
                  alt="Pintura exterior"
                  className="w-full h-36 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 group-hover:from-black/65" />
                <div className="absolute bottom-2 left-2 translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="bg-[#E6B800] text-black text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                    Exterior
                  </span>
                </div>
              </Link>
              <Link to="/trabajos?categoria=interior" className="relative rounded-2xl overflow-hidden shadow-lg group block">
                <img
                  src="/trabajos/PHOTO-2026-03-18-20-27-04%203.webp"
                  alt="Pintura interior"
                  className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 group-hover:from-black/65" />
                <div className="absolute bottom-2 left-2 translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
                  <span className="bg-[#E6B800] text-black text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
                    Pintura interior
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop: mosaico */}
            <div
              className="hidden lg:grid grid-cols-2 gap-3"
              style={{ height: "500px" }}
            >
              {/* Foto grande izquierda — ocupa ambas filas */}
              <Link to="/trabajos?categoria=terminaciones" className="row-span-2 relative rounded-2xl overflow-hidden shadow-2xl group block">
                <img
                  src="/trabajos/IMG_2778.webp"
                  alt="Terminación decorativa 3D"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/75" />
                <div className="absolute bottom-5 left-4 translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="bg-[#E6B800] text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Terminaciones 3D
                  </span>
                </div>
              </Link>

              {/* Foto superior derecha */}
              <Link to="/trabajos?categoria=exterior" className="relative rounded-2xl overflow-hidden shadow-xl group block">
                <img
                  src="/trabajos/PHOTO-2026-03-18-20-26-59.webp"
                  alt="Pintura exterior"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/70" />
                <div className="absolute bottom-4 left-3 translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="bg-[#E6B800] text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Pintura exterior
                  </span>
                </div>
              </Link>

              {/* Foto inferior derecha */}
              <Link to="/trabajos?categoria=interior" className="relative rounded-2xl overflow-hidden shadow-xl group block">
                <img
                  src="/trabajos/PHOTO-2026-03-18-20-27-04%203.webp"
                  alt="Pintura interior"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/70" />
                <div className="absolute bottom-4 left-3 translate-y-0 transition-transform duration-300 group-hover:-translate-y-2">
                  <span className="bg-[#E6B800] text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Pintura interior
                  </span>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
