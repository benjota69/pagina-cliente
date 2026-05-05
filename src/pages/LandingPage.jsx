import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import Procesos from "../components/Procesos";
import BeforeAfter from "../components/BeforeAfter";
import Footer from "../components/Footer";
import VideoRemodelacion from "../components/VideoRemodelacion";
import PreguntasFrecuentes from "../components/PreguntasFrecuentes";
import WhatsappButton from "../components/WhatsappButton";
import TablaComparacion from "../components/TablaComparacion";
import CotizarPresupuesto from "../components/CotizarPresupuesto";

function GoldDivider() {
  return (
    <div
      className="h-px w-full"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.3) 20%, rgba(230,184,0,0.65) 50%, rgba(201,168,76,0.3) 80%, transparent 100%)",
      }}
    />
  );
}

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <GoldDivider />
      <Services />
      <GoldDivider />
      <BeforeAfter />
      <GoldDivider />
      <Procesos compact />
      <GoldDivider />
      <TablaComparacion compact />
      <GoldDivider />
      <VideoRemodelacion />
      <GoldDivider />
      <PreguntasFrecuentes />
      <GoldDivider />
      <CotizarPresupuesto />
      <WhatsappButton />
      <Footer />
    </div>
  );
}
