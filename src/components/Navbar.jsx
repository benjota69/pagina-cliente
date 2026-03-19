import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="navbar bg-transparent">
          {/* Logo */}
          <div className="flex-1">
            <a className="text-xl">PinturasPro</a>
          </div>

          {/* Menú en Computador */}
          <div className="flex-none hidden md:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#tablacomparacion">Comparación</a></li>
              <li><a href="#testimonios">Opiniones</a></li>
              <li className="ml-2">
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 h-10 min-h-10">
                Cotizar ahora
              </button>
              </li>
              
            
            </ul>
          </div>

          {/* Botón Hamburguesa */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú en Dispositivo Móvil */}
        {open && (
          <div className="md:hidden pb-4 border-t border-base-300">
            <ul className="menu menu-vertical px-0 gap-2">
              <li><a href="#servicios" onClick={() => setOpen(false)}>Servicios</a></li>
              <li><a href="#proceso" onClick={() => setOpen(false)}>Proceso</a></li>
              <li><a href="#tablacomparacion" onClick={() => setOpen(false)}>Comparación</a></li>
              <li><a href="#testimonios" onClick={() => setOpen(false)}>Opiniones</a></li>
              <button className="btn bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl w-full mt-2">
                Cotizar Ahora
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}