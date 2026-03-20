import { useState, useEffect } from "react";
import { Menu, X, PaintBucket } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Sombra al hacer scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => setOpen(false), [location]);

  const navLinks = [
    { label: "Servicios", href: isHome ? "#servicios" : "/#servicios" },
    { label: "Proceso", href: isHome ? "#proceso" : "/#proceso" },
    { label: "Comparación", href: isHome ? "#tablacomparacion" : "/#tablacomparacion" },
    { label: "Trabajos", href: "/trabajos" },
  ];

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-base-100/95 backdrop-blur-md shadow-sm border-b border-base-200"
          : "bg-base-100 border-b border-base-200",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* ── LOGO ── */}
          <Link
            to="/"
            className="flex items-center gap-2 font-black text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="w-8 h-8 rounded-lg bg-neutral flex items-center justify-center">
              <PaintBucket size={16} className="text-neutral-content" />
            </span>
            <span>PinturasPro</span>
          </Link>

          {/* ── DESKTOP MENU ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium
                           opacity-70 hover:opacity-100 hover:bg-base-200
                           transition-all duration-150"
              >
                {link.label}
              </a>
            ))}

            {/* Separador */}
            <div className="w-px h-5 bg-base-300 mx-2" />

            {/* CTA */}
            <button
              onClick={() => window.dispatchEvent(new Event("abrirCotizador"))}
              className="btn btn-neutral btn-sm rounded-xl px-5"
            >
              Cotizar ahora
            </button>
          </nav>

          {/* ── HAMBURGER ── */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="md:hidden btn btn-ghost btn-sm btn-square"
          >
            <div className="relative w-5 h-5">
              <Menu
                size={20}
                className={[
                  "absolute inset-0 transition-all duration-200",
                  open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100",
                ].join(" ")}
              />
              <X
                size={20}
                className={[
                  "absolute inset-0 transition-all duration-200",
                  open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75",
                ].join(" ")}
              />
            </div>
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        <div
          className={[
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            open ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="border-t border-base-200 pt-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium
                           opacity-70 hover:opacity-100 hover:bg-base-200
                           transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => window.dispatchEvent(new Event("abrirCotizador"))}
                className="btn btn-neutral btn-sm rounded-xl px-5"
              >
                Cotizar ahora
              </button>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
