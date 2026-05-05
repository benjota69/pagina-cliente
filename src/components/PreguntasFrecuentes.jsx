import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const preguntas = [
  {
    q: "¿Cuánto se demora la revisión de mi cotización?",
    a: "En 1-2 días hábiles tendrás tu cotización lista. Revisamos tu proyecto con detalle — ya sea por fotos o visita en terreno — y te enviamos un presupuesto claro y sin sorpresas.",
  },
  {
    q: "¿Hacen visita a terreno antes de cotizar?",
    a: "Sí, y es completamente gratis. La visita nos permite evaluar el estado real de las superficies, detectar humedad, grietas u otras condiciones que afecten el trabajo. Así la cotización es mucho más precisa.",
  },
  {
    q: "¿Los materiales están incluidos en el presupuesto?",
    a: "Depende de lo que necesites. Podemos cotizar con materiales incluidos o solo mano de obra si prefieres comprar tú mismo. En ambos casos te asesoramos para que elijas bien.",
  },
  {
    q: "¿En qué comunas trabajan?",
    a: "Cubrimos toda la V Región — Viña del Mar, Valparaíso, Quilpué, Villa Alemana, Concón y alrededores. Si tienes dudas sobre tu ubicación, consúltanos y coordinamos.",
  },
  {
    q: "¿Cuánto tiempo tarda el trabajo una vez iniciado?",
    a: "Un dormitorio puede estar listo en 1 a 2 días. Una casa completa con repintado toma entre 1 y 2 semanas. Siempre te damos un plazo estimado antes de comenzar para que puedas organizarte.",
  },
  {
    q: "¿Ofrecen garantía por el trabajo realizado?",
    a: "Sí, ofrecemos 3 meses de garantía. Si aparece algún problema relacionado con la aplicación — descascaramiento, burbujas, manchas — lo solucionamos sin costo adicional. Tu tranquilidad importa.",
  },
  {
    q: "¿Protegen los muebles y pisos durante el trabajo?",
    a: "Sí, nos hacemos cargo de proteger muebles, pisos y todo el espacio de trabajo antes de comenzar. Trabajamos de forma ordenada y dejamos todo limpio al finalizar. Tu hogar en buenas manos.",
  },
  {
    q: "¿Puedo elegir la marca y tipo de pintura?",
    a: "Totalmente libre. Además incluimos asesoría sin costo para orientarte según tu presupuesto, el tipo de superficie y el resultado que buscas. Trabajamos con las mejores marcas del mercado.",
  },
];

export default function PreguntasFrecuentes() {
  const [abierto, setAbierto] = useState(null);

  const toggle = (i) => setAbierto(prev => prev === i ? null : i);

  return (
    <section id="preguntasfrecuentes" className="py-24 px-4 md:px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center mb-14">
          {/* Eyebrow */}
          <p
            className="text-sm font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: "#B8932F", textShadow: "0 1px 2px rgba(0,0,0,0.08)" }}
          >
            Preguntas frecuentes
          </p>

          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Todo lo que necesitas<br />
            <span style={{ color: "#E6B800" }}>saber antes de llamar</span>
          </h2>

          <p className="text-sm text-zinc-600 max-w-sm mx-auto">
            Resolvemos tus dudas más comunes. Si no está aquí, escríbenos.
          </p>
        </div>

        {/* ── ACORDEÓN ── */}
        <div className="flex flex-col gap-2">
          {preguntas.map((p, i) => {
            const isOpen = abierto === i;
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  border: isOpen
                    ? "1px solid rgba(230,184,0,0.35)"
                    : "1px solid #E4E8EE",
                  background: isOpen
                    ? "#FFF8E1"
                    : "#FFFFFF",
                }}
              >
                {/* Pregunta */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  {/* Número + texto */}
                  <div className="flex items-center gap-4">
                    <span
                      className="text-xs font-bold tabular-nums shrink-0 w-5"
                      style={{ color: isOpen ? "#B8932F" : "#9CA3AF" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-semibold text-sm md:text-base transition-colors duration-200"
                      style={{ color: isOpen ? "#8A6A1F" : "#111827" }}
                    >
                      {p.q}
                    </span>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: isOpen ? "#B8932F" : "#94A3B8",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* Respuesta */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{
                      color: "#4B5563",
                      paddingLeft: "calc(1.5rem + 1.25rem + 1rem)", // alineado con el texto de la pregunta
                    }}
                  >
                    {p.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <div
          className="mt-12 rounded-2xl p-8 text-center flex flex-col items-center gap-5"
          style={{
            background: "#FFF9E8",
            border: "1px solid #F2D57A",
          }}
        >
          <div>
            <p className="font-semibold text-base mb-1">¿Tienes otra pregunta?</p>
            <p className="text-sm text-zinc-600">
              Escríbenos y te respondemos en minutos.
            </p>
          </div>

          <a
            href="https://wa.me/56944235539"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #E6B800, #C9A84C)",
              color: "#0A0A0A",
              boxShadow: "0 4px 20px rgba(230,184,0,0.25)",
            }}
          >
            <MessageCircle size={17} />
            Consultar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
