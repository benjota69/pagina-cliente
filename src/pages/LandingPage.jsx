import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import Procesos from "../components/Procesos";
import BeforeAfter from "../components/BeforeAfter";
import Presupuesto from "../components/PresupuestoWizard";
import Footer from "../components/Footer";
import Testimonios from "../components/Testimonios";
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
      <Testimonios />

      {/* COTIZACIÓN DE PRESUPUESTO */}
      <CotizarPresupuesto />

      {/* BOTÓN DE WHATSAPP */}
      <WhatsappButton />

      {/* FOOTER */}
      <Footer />


    </div>
  );
}
