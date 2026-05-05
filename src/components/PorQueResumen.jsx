import { Link } from "react-router-dom";
import { ArrowRight, Clock, ShieldCheck, Sparkles, BadgeCheck } from "lucide-react";

export default function PorQueResumen() {
  const razones = [
    {
      Icon: Clock,
      title: "Fechas que se cumplen",
      desc: "Presupuesto con plazo definido. Sin retrasos ni excusas.",
    },
    {
      Icon: Sparkles,
      title: "Terminaciones impecables",
      desc: "Cortes limpios, esquinas perfectas. El detalle es nuestra firma.",
    },
    {
      Icon: ShieldCheck,
      title: "Garantía por escrito",
      desc: "3 meses de garantía. Si algo falla, lo resolvemos sin costo.",
    },
    {
      Icon: BadgeCheck,
      title: "Materiales de calidad",
      desc: "Marcas reconocidas y asesoría gratis para elegir lo mejor.",
    },
  ];

  return (
    <section id="tablacomparacion" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: "#E6B800" }}>
            Por qué elegirnos
          </p>
          <h2 className="text-4xl font-extrabold leading-tight">
            Lo que nos diferencia{" "}
            <span style={{ color: "#C9A84C" }}>del resto.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {razones.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-base-300 bg-base-100 p-6
                         hover:-translate-y-1 hover:shadow-lg hover:border-base-content/20
                         transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(230,184,0,0.12)",
                  border: "1px solid rgba(230,184,0,0.25)",
                }}
              >
                <Icon size={20} style={{ color: "#C9A84C" }} />
              </div>
              <h3 className="font-bold text-base mb-1.5">{title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/nosotros"
            className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-70 transition-opacity"
            style={{ color: "#C9A84C" }}
          >
            Ver comparación completa y garantías
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
