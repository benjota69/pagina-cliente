
export default function CotizarPresupuesto({ onOpenPresupuesto }) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center md:text-left">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
          Hablemos de tu cotización
        </h1>

        <p className="mt-3 font-semibold text-base md:text-lg text-slate-700 text-center">
          ¿Estás preparado para hacer tu cotización? Cuéntanos tu proyecto y te enviamos
        </p>
        <p className="mt-3 font-semibold text-base md:text-lg text-slate-700 text-center">un presupuesto claro y sin compromiso.
      
        </p>
      </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 mt-6">

            <button
              onClick={() => (onOpenPresupuesto ? onOpenPresupuesto() : (window.location.hash = 'presupuesto'))}
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold text-white col-start-2"
            >
            Solicitar evaluación gratuita
            </button>

        </div>
       
    </section>
  );
}
