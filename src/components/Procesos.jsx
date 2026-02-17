export default function Procesos() {
  const steps = [
    { n: "1", title: "Contacto inicial", desc: "Nos cuentas qué necesitas y en qué comuna." },
    { n: "2", title: "Visita y diagnóstico", desc: "Revisamos superficie, humedad y detalles." },
    { n: "3", title: "Presupuesto claro", desc: "Te damos precio, materiales y plazos definidos." },
    { n: "4", title: "Ejecución del trabajo", desc: "Protección, preparación y pintura prolija." },
    { n: "5", title: "Entrega garantizada", desc: "Limpieza final y revisión contigo." },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Cómo trabajamos</h2>
        <p className="text-center opacity-70 mt-3">
          Un proceso simple, transparente y diseñado para cumplir plazos.
        </p>

        <div className="mt-12 relative">
          {/* Línea horizontal (solo en desktop) */}
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-base-300 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                {/* Número */}
                <div className="mx-auto w-14 h-14 rounded-full bg-base-100 border border-base-300 grid place-items-center text-xl font-bold text-primary">
                  {s.n}
                </div>

                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm opacity-70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
