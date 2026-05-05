import { Link } from "react-router-dom";
import AnimatedTitle from "./AnimatedTitle";

export default function Services() {
  const servicios = [
    {
      img: "/trabajos/PHOTO-2026-03-18-20-27-07.webp",
      titulo: "Pintura Interior",
      desc: "Ambientes limpios, prolijos y con terminación pareja.",
      bullets: ["Protección de pisos y muebles", "Cortes limpios en esquinas", "Pinturas lavables (opcional)"],
    },
    {
      img: "/trabajos/PHOTO-2026-03-18-20-27-02 5.webp",
      titulo: "Pintura Exterior",
      desc: "Resistencia a sol, lluvia y humedad para durar más.",
      bullets: ["Preparación de superficie", "Sellado y protección", "Terminación uniforme"],
      imgPosition: "object-contain bg-zinc-100 p-1",
    },
    {
      img: "/trabajos/IMG_2781.webp",
      titulo: "Terminaciones Finas",
      desc: "Detalles que se notan: esquinas, marcos, puertas y zócalos.",
      bullets: ["Esmaltes al agua / sintéticos", "Barnices y lacas", "Reparación de imperfecciones"],
    },
    {
      img: "/trabajos/PHOTO-2026-03-18-20-27-06.webp",
      titulo: "Reparaciones Menores",
      desc: "Dejamos el muro listo antes de pintar.",
      bullets: ["Masillado y lijado", "Tapado de grietas", "Corrección de manchas"],
    },
    {
      img: "/trabajos/PHOTO-2026-03-18-20-27-03.webp",
      titulo: "Barnices",
      desc: "Protección y acabado para madera y superficies.",
      bullets: ["Brillante / satinado / mate", "Protección UV (opcional)", "Aplicación pareja"],
    },
    {
      img: "/trabajos/PHOTO-2026-03-18-20-27-08.webp",
      titulo: "Limpieza y Entrega",
      desc: "Trabajo ordenado y entrega final como corresponde.",
      bullets: ["Retiro de protecciones", "Limpieza del área", "Revisión final con cliente"],
    },
  ];

  return (
    <section id="servicios" className="py-20 text-center bg-[#F4F5F7]">
      <div className="max-w-6xl mx-auto px-6">

        <AnimatedTitle
          text="Servicios de pintura"
          className="text-5xl md:text-6xl font-extrabold"
        />
        <p className="text-center opacity-70 mt-4 mb-12 text-xl max-w-2xl mx-auto">
          Soluciones para casas, oficinas y edificios con terminaciones prolijas y garantía.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="group rounded-2xl border border-base-300 bg-base-100 overflow-hidden
                         transition-all duration-300 ease-out
                         hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10
                         hover:border-base-content/20 text-left"
            >
              {/* Foto */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.titulo}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${s.imgPosition ?? "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{s.titulo}</h3>
                <p className="opacity-60 text-sm mb-4 leading-relaxed">{s.desc}</p>

                <ul className="space-y-1.5 text-sm opacity-70">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2 items-start">
                      <span className="mt-0.5 text-xs">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link to="/trabajos">
            <button className="btn btn-neutral btn-lg gap-2 px-8 rounded-xl">
              Ver trabajos realizados
              <span>→</span>
            </button>
          </Link>
          <p className="mt-3 text-sm opacity-40">
            Fotos reales · Interior, exterior y terminaciones
          </p>
        </div>

      </div>
    </section>
  );
}
