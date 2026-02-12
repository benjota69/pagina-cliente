export default function Procesos() {
  const pasos = [
    "Contacto inicial",
    "Visita y diagnóstico",
    "Presupuesto claro",
    "Ejecución del trabajo",
    "Entrega garantizada",
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Cómo trabajamos</h2>

      <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">
        {pasos.map((p, i) => (
          <div key={i}>
            <div className="text-3xl font-bold text-blue-600 mb-2">{i + 1}</div>
            <p className="text-gray-600">{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
