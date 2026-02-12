import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-white tracking-wide">
          Pintura<span className="text-blue-500">Pro</span>
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm">

          {/* Servicios Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-slate-200 hover:text-white transition">
              Servicios <ChevronDown size={16} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-3 bg-white rounded-xl shadow-xl w-80 p-4 text-slate-800">

                <ul className="space-y-3 text-sm">
                  <li className="hover:text-blue-600 cursor-pointer">Pintura Interior</li>
                  <li className="hover:text-blue-600 cursor-pointer">Pintura Exterior</li>
                  <li className="hover:text-blue-600 cursor-pointer">Techos</li>
                  <li className="hover:text-blue-600 cursor-pointer">Impermeabilización</li>
                  <li className="hover:text-blue-600 cursor-pointer">Demarcación Vial</li>
                  <li className="hover:text-blue-600 cursor-pointer">Eliminación de Grafitis</li>
                </ul>

              </div>
            )}
          </div>

          <a href="#nosotros" className="text-slate-200 hover:text-white transition">
            Nosotros
          </a>

          <a href="#proyectos" className="text-slate-200 hover:text-white transition">
            Proyectos
          </a>

          <a href="#contacto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition shadow">
              Contactar
            </button>
          </a>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-6 py-6 space-y-4 text-sm">

          <p className="text-slate-400">Servicios</p>
          <ul className="space-y-2 pl-2">
            <li className="text-white">Pintura Interior</li>
            <li className="text-white">Pintura Exterior</li>
            <li className="text-white">Techos</li>
            <li className="text-white">Impermeabilización</li>
            <li className="text-white">Demarcación Vial</li>
            <li className="text-white">Grafitis</li>
          </ul>

          <a href="#nosotros" className="block text-white">Nosotros</a>
          <a href="#proyectos" className="block text-white">Proyectos</a>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3">
            Contactar
          </button>

        </div>
      )}
    </header>
  );
}
