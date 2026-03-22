import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import Procesos from "../components/Procesos";
import BeforeAfter from "../components/BeforeAfter";
import Footer from "../components/Footer";
import Testimonios from "../components/Testimonios"; // DESACTIVADO POR AHORA.
import PreguntasFrecuentes from "../components/PreguntasFrecuentes"
import WhatsappButton from "../components/WhatsappButton";
import TablaComparacion from "../components/TablaComparacion";
import CotizarPresupuesto from "../components/CotizarPresupuesto";

export default function LandingPage() {
  return (
    <div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <HeroSlider />

      {/* SERVICIOS */}
      <Services />

      {/* PROCESO */}
      <Procesos />
      
      <TablaComparacion />

      {/* ANTES Y DESPUÉS */}
      <BeforeAfter />

      {/* BOTÓN DE TESTIMONIO */}
      <PreguntasFrecuentes />

      {/* COTIZACIÓN DE PRESUPUESTO */}
      <CotizarPresupuesto />

      {/* BOTÓN DE WHATSAPP */}
      <WhatsappButton />

      {/* FOOTER */}
      <Footer />


    </div>
  );
}
