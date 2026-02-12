export default function HeroSlider() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center text-white bg-slate-900 overflow-hidden">

      {/* Fondo con overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562259949-e8e7689d7828')] bg-cover bg-center opacity-40" />

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Pintura Profesional
        </h1>

        <p className="text-lg md:text-xl text-slate-200 mb-8">
          Interior · Exterior · Terminaciones finas · Trabajo limpio y garantizado
        </p>

        <a
          href="#presupuesto"
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
        >
          Solicitar evaluación gratuita
        </a>
      </div>
    </section>
  );
}
