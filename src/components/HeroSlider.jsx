import { useEffect, useState } from "react";

const slides = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];


export default function HeroSlider({ onOpenPresupuesto }) {
>>>>>>> f8c9a33 (Integración del PresupuestoWizard como modal y mejoras en interacción)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500); // tiempo entre cambios (ms)

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Fondo (slider) */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`slide ${i + 1}`}
            className={[
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out",
              i === index ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        ))}
      </div>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Texto centrado */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Pintura Profesional
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Interior · Exterior · Terminaciones finas · Trabajo limpio y garantizado
        </p>

        <button
          onClick={() => (onOpenPresupuesto ? onOpenPresupuesto() : (window.location.hash = 'presupuesto'))}
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
        >
          Solicitar evaluación gratuita
        </button>
      </div>
    </section>
  );
}
