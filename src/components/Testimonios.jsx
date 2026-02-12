export default function Testimonios() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Opiniones de clientes</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">

        <div className="bg-slate-50 p-6 rounded-xl shadow">
          ⭐⭐⭐⭐⭐ <br />
          Trabajo impecable, muy profesional.
        </div>

        <div className="bg-slate-50 p-6 rounded-xl shadow">
          ⭐⭐⭐⭐⭐ <br />
          Puntual, limpio y responsable.
        </div>

        <div className="bg-slate-50 p-6 rounded-xl shadow">
          ⭐⭐⭐⭐⭐ <br />
          Excelente resultado final.
        </div>

      </div>
    </section>
  );
}
