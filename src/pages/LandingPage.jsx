
import { useState } from "react";
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

  const [openWizard, setOpenWizard] = useState(false);


  return (
    <div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}

      <HeroSlider onOpenPresupuesto={() => setOpenWizard(true)} />


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

      <CotizarPresupuesto onOpenPresupuesto={() => setOpenWizard(true)} />


      {/* BOTÓN DE WHATSAPP */}
      <WhatsappButton />

      {/* FOOTER */}
      <Footer />


      {/* Presupuesto modal */}
      {openWizard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-w-xl w-full">
            <Presupuesto onClose={() => setOpenWizard(false)} />
          </div>
        </div>
      )}


    </div>
  );
}
