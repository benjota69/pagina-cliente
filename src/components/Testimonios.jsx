export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 bg-base-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Opiniones de clientes</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">

        <div className="bg-base-200 p-6 rounded-xl border border-base-300">
          ⭐⭐⭐⭐⭐ <br />
          Trabajo impecable, muy profesional.
        </div>

        <div className="bg-base-200 p-6 rounded-xl border border-base-300">
          ⭐⭐⭐⭐⭐ <br />
          Puntual, limpio y responsable.
        </div>

        <div className="bg-base-200 p-6 rounded-xl border border-base-300">
          ⭐⭐⭐⭐⭐ <br />
          Excelente resultado final.
        </div>

      </div>
    </section>
  );
}
