import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FotoServices from "./components/FotoServices";
import ScrollToTop from "./components/ScrolltoTop";
import DetalleServicioPage from "./pages/DetalleServicioPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trabajos" element={<FotoServices />} />
        <Route path="/detalle-servicio" element={<DetalleServicioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
