export default function BeforeAfter() {
  return (
    <section className="py-20 bg-white text-center">
      <span className="text-rotate font-bold text-5xl leading-loose">
        <span className="justify-items-center">
          <span>Antes</span>
          <span>y</span>
          <span>Después</span>
        </span>
      </span>

      <div className="max-w-4xl mx-auto px-6">
        <div className="relative rounded-xl outline-blue-600 outline-2 overflow-hidden shadow-lg">

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
