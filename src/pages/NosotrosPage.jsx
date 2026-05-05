import Navbar from "../components/Navbar";
import Procesos from "../components/Procesos";
import TablaComparacion from "../components/TablaComparacion";
import BeforeAfter from "../components/BeforeAfter";
import VideoRemodelacion from "../components/VideoRemodelacion";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";
import Testimonios from "../components/Testimonios";
import CotizarPresupuesto from "../components/CotizarPresupuesto";
import WhatsappButton from "../components/WhatsappButton";
import Footer from "../components/Footer";

export default function NosotrosPage() {
  return (
    <div>
      <Navbar />

      {/* Hero de página */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <p
          className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
          style={{ color: "#E6B800" }}
        >
          Imperio Romano · V Región
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-5">
          Proceso, garantías y{" "}
          <span style={{ color: "#C9A84C" }}>por qué confiar en nosotros.</span>
        </h1>
        <p className="text-lg opacity-60 max-w-xl mx-auto leading-relaxed">
          Todo lo que necesitas saber antes de contratar. Sin letra chica, sin sorpresas.
        </p>
      </div>

      <Procesos />
      <TablaComparacion />
      <BeforeAfter />
      <VideoRemodelacion />
      <PreguntasFrecuentes />
      <Testimonios />
      <CotizarPresupuesto />
      <WhatsappButton />
      <Footer />
    </div>
  );
}
