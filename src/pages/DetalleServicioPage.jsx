import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Procesos from "../components/Procesos";
import TablaComparacion from "../components/TablaComparacion";
import CotizarPresupuesto from "../components/CotizarPresupuesto";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export default function DetalleServicioPage() {
  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar />

      <section className="pt-14 pb-10 px-6 bg-base-100 border-b border-base-300">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-3 text-[#B8932F]">
            Detalle del servicio
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950">
            Proceso completo y razones para elegirnos
          </h1>
          <p className="mt-4 text-zinc-700 max-w-2xl mx-auto">
            Aquí puedes revisar en detalle cómo trabajamos, qué incluye nuestro servicio y qué nos diferencia.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="btn btn-sm rounded-lg bg-white border border-zinc-300 text-zinc-800 hover:bg-zinc-50"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <Procesos />
      <TablaComparacion />
      <CotizarPresupuesto />
      <WhatsappButton />
      <Footer />
    </div>
  );
}
