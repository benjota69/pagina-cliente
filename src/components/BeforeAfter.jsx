export default function BeforeAfter() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Antes y Después</h2>

      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-xl overflow-hidden shadow-lg">

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="w-full"
            alt="Después"
          />

          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            className="absolute top-0 left-0 w-1/2 h-full object-cover"
            alt="Antes"
          />

        </div>
      </div>
    </section>
  );
}
