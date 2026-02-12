export default function Services() {
  const servicios = [
    "Pintura interior",
    "Pintura exterior",
    "Terminaciones y esmaltes",
    "Barnices",
    "Reparaciones menores",
    "Mantención",
  ];

  return (
    <section className="py-20 bg-slate-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Servicios</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {servicios.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-semibold mb-2">{s}</h3>
            <p className="text-gray-500">
              Trabajo prolijo, materiales de calidad y resultados duraderos.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
