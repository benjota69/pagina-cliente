import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FotoServices from "./components/FotoServices";
import ScrollToTop from "./components/ScrolltoTop";
import DetalleServicioPage from "./pages/DetalleServicioPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trabajos" element={<FotoServices />} />
        <Route path="/detalle-servicio" element={<DetalleServicioPage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
