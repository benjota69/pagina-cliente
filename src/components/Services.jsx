import AnimatedTitle from "./AnimatedTitle";

export default function Services() {
  const servicios = [
    {
      icon: "🎨",
      titulo: "Pintura Interior",
      desc: "Ambientes limpios, prolijos y con terminación pareja.",
      bullets: ["Protección de pisos y muebles", "Cortes limpios en esquinas", "Pinturas lavables (opcional)"],
    },
    {
      icon: "🏠",
      titulo: "Pintura Exterior",
      desc: "Resistencia a sol, lluvia y humedad para durar más.",
      bullets: ["Preparación de superficie", "Sellado y protección", "Terminación uniforme"],
    },
    {
      icon: "✨",
      titulo: "Terminaciones Finas",
      desc: "Detalles que se notan: esquinas, marcos, puertas y zócalos.",
      bullets: ["Esmaltes al agua / sintéticos", "Barnices y lacas", "Reparación de imperfecciones"],
    },
    {
      icon: "🛠️",
      titulo: "Reparaciones Menores",
      desc: "Dejamos el muro listo antes de pintar.",
      bullets: ["Masillado y lijado", "Tapado de grietas", "Corrección de manchas"],
    },
    {
      icon: "🧴",
      titulo: "Barnices",
      desc: "Protección y acabado para madera y superficies.",
      bullets: ["Brillante / satinado / mate", "Protección UV (opcional)", "Aplicación pareja"],
    },
    {
      icon: "🧹",
      titulo: "Limpieza y Entrega",
      desc: "Trabajo ordenado y entrega final como corresponde.",
      bullets: ["Retiro de protecciones", "Limpieza del área", "Revisión final con cliente"],
    },
  ];

  return (
    <section className="text-black py-20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedTitle
          text="Lo que hacemos"
          className="text-4xl md:text-5xl font-bold"   
        />
        <p className="text-center opacity-70 mt-10 mb-12">
          Servicios profesionales de pintura para hogares y negocios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="rounded-2xl border border-white/10 bg-gray-700/5 p-6 
              transition-all duration-300 ease-out 
              hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 
              hover:bg-white/10"
            >
              {/* icon box */}
              <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 grid place-items-center text-2xl mb-5">
                {s.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{s.titulo}</h3>
              <p className="opacity-70 mb-4">{s.desc}</p>

              <ul className="space-y-2 text-sm opacity-80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
