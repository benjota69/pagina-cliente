import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProcesoResumen() {
  const pasos = [
    {
      n: "01",
      title: "Cotiza sin costo",
      desc: "Te visitamos, evaluamos la superficie y te entregamos precio, materiales y plazo exacto.",
    },
    {
      n: "02",
      title: "Trabajo prolijo",
      desc: "Protegemos muebles y pisos, preparamos bien la superficie y aplicamos con terminación impecable.",
    },
    {
      n: "03",
      title: "Entrega garantizada",
      desc: "Limpieza final, revisión contigo y 3 meses de garantía incluida sin costo extra.",
    },
  ];

  return (
    <section
      id="proceso"
      className="py-20 border-y border-[#D8DDE4]"
      style={{ background: "#F1F2F4" }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
            style={{ color: "#B8932F" }}
          >
            Cómo trabajamos
          </p>
          <h2 className="text-4xl font-extrabold leading-tight text-zinc-900">
            Simple, transparente<br />
            <span style={{ color: "#B8932F" }}>y sin sorpresas.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">

          {/* Línea de conexión desktop */}
          <div
            className="hidden md:block absolute top-[2.75rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{ background: "rgba(201,168,76,0.35)" }}
          />

          {pasos.map((p) => (
            <div
              key={p.n}
              className="bg-white border border-zinc-200 shadow-sm rounded-2xl p-6
                         flex flex-col items-center text-center gap-4
                         hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Número */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-base font-black relative z-10 flex-shrink-0"
                style={{
                  background: "rgba(230,184,0,0.12)",
                  border: "2px solid rgba(201,168,76,0.35)",
                  color: "#8A6A10",
                }}
              >
                {p.n}
              </div>

              {/* Texto */}
              <div>
                <h3 className="font-bold text-lg text-zinc-900 mb-1.5">{p.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-xs mx-auto">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/nosotros"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#B8932F" }}
          >
            Ver proceso completo paso a paso
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
