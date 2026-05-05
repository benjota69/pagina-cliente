import { Link } from "react-router-dom";

const ROMAN = ["I", "II", "III", "IV", "V"];

export default function Procesos({ compact = false }) {
  const steps = [
    { title: "Contacto inicial", desc: "Nos cuentas qué necesitas y en qué comuna." },
    { title: "Visita y diagnóstico", desc: "Revisamos superficie, humedad y detalles." },
    { title: "Presupuesto claro", desc: "Te damos precio, materiales y plazos definidos." },
    { title: "Ejecución del trabajo", desc: "Protección, preparación y pintura prolija." },
    { title: "Entrega garantizada", desc: "Limpieza final y revisión contigo." },
  ];
  const visibleSteps = compact ? steps.slice(0, 3) : steps;

  return (
    <section id="proceso" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-zinc-950">Cómo trabajamos</h2>
        <p className="text-center text-zinc-600 mt-3 max-w-xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
          {compact
            ? "Te mostramos el proceso en 3 pasos clave. En la página de detalle puedes ver el flujo completo."
            : "Un proceso simple, transparente y diseñado para cumplir plazos."}
        </p>

        <div className="mt-12 relative">
          {/* Línea horizontal decorativa (solo desktop) */}
          <div
            className="hidden md:block absolute left-10 right-10 top-9 h-px -z-10"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.35) 20%, rgba(201,168,76,0.35) 80%, transparent)" }}
          />

          <div className={`grid grid-cols-1 ${compact ? "md:grid-cols-3" : "md:grid-cols-5"} gap-6`}>
            {visibleSteps.map((s, i) => (
              <div
                key={i}
                className="text-center rounded-2xl bg-white border border-zinc-200/80 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Número romano */}
                <div
                  className="mx-auto w-14 h-14 rounded-full grid place-items-center"
                  style={{
                    background: "linear-gradient(145deg, #1c1608, #2e2008)",
                    border: "1.5px solid #C9A84C",
                    boxShadow: "0 0 18px rgba(201,168,76,0.22), inset 0 1px 1px rgba(255,255,255,0.05)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontWeight: 700,
                      fontSize: ROMAN[i].length > 2 ? "0.78rem" : "1rem",
                      letterSpacing: "0.06em",
                      background: "linear-gradient(160deg, #8B7320, #D4AF37, #F0D060, #D4AF37)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {ROMAN[i]}
                  </span>
                </div>

                {/* Paso label */}
                <p
                  className="mt-3 text-[10px] uppercase tracking-widest"
                  style={{ fontFamily: "'Cinzel', serif", color: "#C9A84C", letterSpacing: "0.18em" }}
                >
                  Paso {ROMAN[i]}
                </p>

                <h3 className="mt-1.5 font-semibold text-zinc-900 text-sm leading-snug">{s.title}</h3>
                <p className="mt-2 text-xs text-zinc-500 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {compact && (
          <div className="mt-10 text-center">
            <Link
              to="/detalle-servicio"
              className="btn rounded-xl px-8 border-0"
              style={{
                background: "linear-gradient(135deg, #E6B800, #C9A84C)",
                color: "#111111",
                fontFamily: "'Cinzel', serif",
                fontSize: "0.8rem",
                letterSpacing: "0.06em",
              }}
            >
              Ver proceso completo
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
