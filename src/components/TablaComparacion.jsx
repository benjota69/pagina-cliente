import { X, Check } from "lucide-react";

const filas = [
  { aspecto: "Tiempo de entrega", malo: "Retrasos / sin fecha clara",     bueno: "Plan de trabajo y fechas" },
  { aspecto: "Terminaciones",     malo: "Bordes irregulares",             bueno: "Cortes limpios y prolijos" },
  { aspecto: "Limpieza",          malo: "Manchas / desorden",             bueno: "Protección + limpieza final" },
  { aspecto: "Materiales",        malo: "Pintura barata / sin asesoría",  bueno: "Marcas recomendadas + asesoría" },
  { aspecto: "Garantía",          malo: "Sin respaldo",                   bueno: "Garantía por escrito" },
];

export default function TablaComparacion() {
  return (
    <section id="tablacomparacion" className="py-24 px-6 bg-base-100">
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
        </div>

        {/* ── TABLA ── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Cabecera */}
          <div className="grid grid-cols-3 px-6 py-4"
            style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase opacity-30">
              Aspecto
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase opacity-30">
              Servicio común
            </span>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: "#E6B800", opacity: 0.8 }}
            >
              Imperio Romano
            </span>
          </div>

          {/* Filas */}
          {filas.map((f, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 py-5 transition-colors duration-200"
              style={{
                borderBottom: i < filas.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                background: "transparent",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {/* Aspecto */}
              <span className="text-sm font-semibold self-center" style={{ color: "rgba(255,255,255,0.75)" }}>
                {f.aspecto}
              </span>

              {/* Malo */}
              <div className="flex items-center gap-2.5">
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(220,80,80,0.12)", border: "1px solid rgba(220,80,80,0.25)" }}
                >
                  <X size={11} style={{ color: "rgba(220,100,100,0.9)" }} strokeWidth={2.5} />
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {f.malo}
                </span>
              </div>

              {/* Bueno */}
              <div className="flex items-center gap-2.5">
                <span
                  className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(230,184,0,0.15)", border: "1px solid rgba(230,184,0,0.3)" }}
                >
                  <Check size={11} style={{ color: "#E6B800" }} strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {f.bueno}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
