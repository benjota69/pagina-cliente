import { X, Check } from "lucide-react";
import { Link } from "react-router-dom";

const filas = [
  { aspecto: "Tiempo de entrega", malo: "Retrasos / sin fecha clara",     bueno: "Plan de trabajo y fechas" },
  { aspecto: "Terminaciones",     malo: "Bordes irregulares",             bueno: "Cortes limpios y prolijos" },
  { aspecto: "Limpieza",          malo: "Manchas / desorden",             bueno: "Protección + limpieza final" },
  { aspecto: "Materiales",        malo: "Pintura barata / sin asesoría",  bueno: "Marcas recomendadas + asesoría" },
  { aspecto: "Garantía",          malo: "Sin respaldo",                   bueno: "Garantía por escrito" },
];

export default function TablaComparacion({ compact = false }) {
  const visibleRows = compact ? filas.slice(0, 3) : filas;

  return (
    <section id="tablacomparacion" className="py-24 px-4 md:px-6 bg-[#F4F5F7]">
      <div className="max-w-4xl mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#E6B800" }}
          >
            Comparación
          </p>
          <h2 className="text-4xl font-bold leading-tight">
            ¿Por qué elegirnos<br />
            <span style={{ color: "#E6B800" }}>a nosotros?</span>
          </h2>
          {compact && (
            <p className="mt-4 text-zinc-700">
              Resumen rápido de diferencias clave. Puedes ver la versión completa en la página de detalle.
            </p>
          )}
        </div>

        {/* ── TABLA ── */}
        <div
          className="rounded-2xl overflow-hidden border border-zinc-200 bg-white"
        >
          {/* Cabecera — oculta en mobile */}
          <div className="hidden sm:grid grid-cols-3 px-6 py-4"
            style={{ background: "#F8FAFC", borderBottom: "1px solid #E5E7EB" }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
              Aspecto
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
              Servicio común
            </span>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#B8932F" }}
            >
              Imperio Romano
            </span>
          </div>

          {/* Filas */}
          {visibleRows.map((f, i) => (
            <div
              key={i}
              className="transition-colors duration-200"
              style={{
                borderBottom: i < visibleRows.length - 1 ? "1px solid #EEF2F7" : "none",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#FAFBFD"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {/* Desktop: 3 columnas */}
              <div className="hidden sm:grid grid-cols-3 px-6 py-5">
                <span className="text-sm font-semibold self-center text-zinc-800">{f.aspecto}</span>
                <div className="flex items-center gap-2.5">
                  <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(220,80,80,0.12)", border: "1px solid rgba(220,80,80,0.3)" }}>
                    <X size={11} style={{ color: "rgba(220,100,100,0.9)" }} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-zinc-600">{f.malo}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(230,184,0,0.15)", border: "1px solid rgba(230,184,0,0.3)" }}>
                    <Check size={11} style={{ color: "#E6B800" }} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-zinc-900">{f.bueno}</span>
                </div>
              </div>

              {/* Mobile: apilado */}
              <div className="sm:hidden px-4 py-4 flex flex-col gap-2">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{f.aspecto}</span>
                <div className="flex items-start gap-2.5">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(220,80,80,0.12)", border: "1px solid rgba(220,80,80,0.3)" }}>
                    <X size={11} style={{ color: "rgba(220,100,100,0.9)" }} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-zinc-500">{f.malo}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(230,184,0,0.15)", border: "1px solid rgba(230,184,0,0.3)" }}>
                    <Check size={11} style={{ color: "#E6B800" }} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-semibold text-zinc-900">{f.bueno}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {compact && (
          <div className="mt-10 text-center">
            <Link
              to="/detalle-servicio"
              className="btn rounded-xl px-8 border border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-50"
            >
              Ver comparación completa
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
