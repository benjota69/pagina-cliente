import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";
import Services from "./Services";
import Procesos from "./Procesos";
import BeforeAfter from "./BeforeAfter";
import Presupuesto from "./PresupuestoWizard";
import Footer from "./Footer";
import Testimonios from "./Testimonios";
import WhatsappButton from "./WhatsappButton";

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

      {/* ANTES Y DESPUÉS */}
      <BeforeAfter />
      {/* BOTÓN DE TESTIMONIO */}
        <Testimonios />
      {/* PRESUPUESTO PRO */}
      <Presupuesto />
         {/* BOTÓN DE WHATSAPP */}
        <WhatsappButton />
      {/* FOOTER */}
      <Footer />


    </div>
  );
}
