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
  return (
    <section id="preguntasfrecuentes" className="py-20 px-6 bg-base-100">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Preguntas frecuentes
          </h2>
          <p
            className="text-sm md:text-base max-w-md mx-auto"
            style={{ color: "rgba(232,217,160,0.5)", letterSpacing: "0.04em" }}
          >
            Todo lo que necesitas saber antes de contactarnos
          </p>
        </div>

        {/* Acordeón */}
        <div className="flex flex-col gap-3">
          {preguntas.map((p, i) => (
            <div
              key={i}
              className="collapse collapse-arrow bg-base-200 border border-base-300 rounded-xl"
            >
              <input type="checkbox" />
              <div className="collapse-title font-semibold text-base pr-8">
                {p.q}
              </div>
              <div
                className="collapse-content text-sm leading-relaxed"
                style={{ color: "rgba(232,217,160,0.65)" }}
              >
                {p.a}
              </div>
            </div>
          ))}
        </div>

        {/* CTA abajo */}
        <div className="text-center mt-10">
          <p className="text-sm opacity-50 mb-4">
            ¿Tienes otra pregunta? Escríbenos directamente
          </p>
          <a
            href="https://wa.me/56944235539"
            target="_blank"
            rel="noreferrer"
            className="btn btn-md rounded-xl gap-2"
            style={{
              background: "linear-gradient(135deg, #E6B800, #C9A84C)",
              color: "#0A0A0A",
              border: "none",
            }}
          >
            Consultar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
