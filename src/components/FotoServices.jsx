import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────────
//  DATA — reemplaza src con tus fotos reales
//  Ponlas en /public/trabajos/ y usa "/trabajos/foto1.jpg"
// ─────────────────────────────────────────────────────────────
const trabajos = [
  {
    id: 1,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-26-58 2.jpg",
    titulo: "Mural artístico exterior",
    descripcion: "Pintura de mural decorativo con diseño colorido de aves y vegetación sobre fachada exterior. Trabajo artístico con pintura acrílica de alta durabilidad.",
    comuna: "Viña del Mar",
  },
  {
    id: 2,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-26-59.jpg",
    titulo: "Edificio institucional",
    descripcion: "Pintura completa de fachada institucional con mural artístico incluido. Aplicación de pintura exterior color celeste con terminación uniforme y detalles en tonos contrastantes.",
    comuna: "Valparaíso",
  },
  {
    id: 3,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-26-59 3.jpg",
    titulo: "Living-cocina concepto abierto",
    descripcion: "Pintura interior blanca mate en living-cocina de concepto abierto. Muros, cielo y molduras con terminación impecable. Cortes limpios en unión con muebles de cocina.",
    comuna: "Quilpué",
  },
  {
    id: 4,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-00 2.jpg",
    titulo: "Casa moderna dos pisos",
    descripcion: "Pintura exterior completa en casa de dos pisos con diseño contemporáneo. Combinación de gris claro con acento rojo en volumen lateral. Terminación pareja en estucado.",
    comuna: "Viña del Mar",
  },
  {
    id: 5,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-02 3.jpg",
    titulo: "Casa elevada con acento turquesa",
    descripcion: "Pintura de fachada en casa elevada sobre estructura metálica. Estucado gris con detalle turquesa en alero y muro lateral. Protección UV y resistencia a la intemperie.",
    comuna: "Valparaíso",
  },
  {
    id: 6,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-01 4.jpg",
    titulo: "Living con ventanales",
    descripcion: "Pintura blanca premium en living con doble altura y ventanales de piso a cielo. Terminación perfecta en muros, cielo y marcos. Preparación completa de superficies.",
    comuna: "Quilpué",
  },
  {
    id: 7,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-01 2.jpg",
    titulo: "Edificio modular multicolor",
    descripcion: "Pintura decorativa en edificio modular de tres pisos con paneles de colores rojo, verde, negro y blanco. Trabajo en altura con escalera exterior metálica.",
    comuna: "Viña del Mar",
  },
  {
    id: 8,
    categoria: "terminaciones",
    src: "/trabajos/PHOTO-2026-03-18-20-27-03.jpg",
    titulo: "Casa con revestimiento metálico",
    descripcion: "Pintura y terminaciones en casa con revestimiento de zinc acanalado gris y detalles en verde oliva. Marcos de madera barnizados y cielo de alero pintado.",
    comuna: "Villa Alemana",
  },
  {
    id: 9,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-08.jpg",
    titulo: "Living doble altura",
    descripcion: "Pintura interior blanca en living con doble altura y ventana superior. Piso de madera, muros lisos con terminación mate. Ambiente luminoso y limpio.",
    comuna: "Quilpué",
  },
  {
    id: 10,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-04 6.jpg",
    titulo: "Centro comunitario",
    descripcion: "Pintura exterior en centro comunitario con paneles turquesa y revestimiento de madera natural. Trabajo de gran escala con terminación profesional en fachada completa.",
    comuna: "Valparaíso",
  },
];

const categorias = [
  { key: "todos",         label: "Todos",         badge: "badge-neutral"  },
  { key: "interior",      label: "Interior",      badge: "badge-info"     },
  { key: "exterior",      label: "Exterior",      badge: "badge-success"  },
  { key: "terminaciones", label: "Terminaciones", badge: "badge-warning"  },
  { key: "reparaciones",  label: "Reparaciones",  badge: "badge-error"    },
];

const getLabel = (key) => categorias.find((c) => c.key === key)?.label ?? key;
const getBadge = (key) => categorias.find((c) => c.key === key)?.badge ?? "badge-neutral";

export default function FotoServices() {
  const [filtro,  setFiltro]  = useState("todos");
  const [modal,   setModal]   = useState(null);
  const [visible, setVisible] = useState(false);

  const filtrados = filtro === "todos"
    ? trabajos
    : trabajos.filter((t) => t.categoria === filtro);

  const modalIndex = modal ? filtrados.findIndex((t) => t.id === modal.id) : -1;
  const prev = () => setModal(filtrados[(modalIndex - 1 + filtrados.length) % filtrados.length]);
  const next = () => setModal(filtrados[(modalIndex + 1) % filtrados.length]);

  // Teclado en modal
  useEffect(() => {
    if (!modal) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setModal(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modal, modalIndex]);

  // Fade al cambiar filtro
  const handleFiltro = (key) => {
    setVisible(false);
    setTimeout(() => { setFiltro(key); setVisible(true); }, 150);
  };

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-base-100">

      {/* TOP BAR */}
      <div className="sticky top-0 z-30 bg-base-100/90 backdrop-blur-sm border-b border-base-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
          <Link
            to="/"
            className="btn btn-ghost btn-md gap-2 -ml-2 opacity-60 hover:opacity-100"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
          <div className="flex-1" />
          <span className="text-base opacity-40 tabular-nums">
            {filtrados.length} trabajo{filtrados.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
          Trabajos realizados
        </h1>
        <p className="opacity-50 text-lg max-w-lg mx-auto leading-relaxed">
          Fotos reales de proyectos terminados. Sin filtros, sin Photoshop.
        </p>
      </div>

      {/* FILTROS */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {categorias.map((c) => (
            <button
              key={c.key}
              onClick={() => handleFiltro(c.key)}
              className={[
                "btn btn-md rounded-full font-medium transition-all duration-200",
                filtro === c.key
                  ? "btn-neutral shadow scale-105"
                  : "btn-ghost border border-base-300 hover:border-base-content/30",
              ].join(" ")}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div
          className={[
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
            "transition-opacity duration-150",
            visible ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          {filtrados.map((t) => (
            <div
              key={t.id}
              onClick={() => setModal(t)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer
                         bg-base-100 border border-base-300
                         hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-1
                         transition-all duration-300 ease-out"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={t.src}
                  alt={t.titulo}
                  loading="lazy"
                  className="w-full h-full object-cover
                             transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0
                                bg-gradient-to-t from-black/80 via-black/20 to-transparent
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300
                                flex flex-col justify-end p-4">
                  <p className="text-white/80 text-sm leading-snug
                                translate-y-2 group-hover:translate-y-0
                                transition-transform duration-300">
                    {t.descripcion}
                  </p>
                  <span className="mt-2 text-xs text-white/50
                                   translate-y-2 group-hover:translate-y-0
                                   transition-transform duration-300 delay-75">
                    Clic para ampliar →
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-semibold text-base truncate">{t.titulo}</h3>
                  <p className="text-sm opacity-40 mt-0.5">{t.comuna}</p>
                </div>
                <span className={`badge ${getBadge(t.categoria)} badge-sm shrink-0 mt-0.5`}>
                  {getLabel(t.categoria)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtrados.length === 0 && (
          <div className="text-center py-24 opacity-30">
            <p className="text-5xl mb-4">🎨</p>
            <p className="text-lg">No hay fotos en esta categoría aún.</p>
          </div>
        )}
      </div>

      {/* MODAL */}
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
                     flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-base-100 rounded-2xl overflow-hidden
                       max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen grande */}
            <div className="relative bg-black">
              <img
                src={modal.src}
                alt={modal.titulo}
                className="w-full max-h-[58vh] object-contain"
              />
              <button
                onClick={() => setModal(null)}
                className="absolute top-3 right-3 btn btn-circle btn-sm
                           bg-black/50 border-0 text-white hover:bg-black/80"
              >
                <X size={16} />
              </button>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2
                           btn btn-circle btn-sm
                           bg-black/50 border-0 text-white hover:bg-black/80"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           btn btn-circle btn-sm
                           bg-black/50 border-0 text-white hover:bg-black/80"
              >
                <ChevronRight size={18} />
              </button>
              <span className="absolute bottom-3 right-4 text-xs text-white/60
                               bg-black/50 px-2 py-1 rounded-full tabular-nums">
                {modalIndex + 1} / {filtrados.length}
              </span>
            </div>

            {/* Detalle */}
            <div className="p-6 flex flex-col sm:flex-row items-start gap-4 justify-between">
              <div>
                <span className={`badge ${getBadge(modal.categoria)} badge-sm mb-2`}>
                  {getLabel(modal.categoria)}
                </span>
                <h3 className="text-xl font-bold">{modal.titulo}</h3>
                <p className="text-sm opacity-40 mt-0.5">{modal.comuna}</p>
                <p className="mt-3 opacity-70 text-sm leading-relaxed max-w-md">
                  {modal.descripcion}
                </p>
              </div>
              <Link
                to="/#presupuesto"
                onClick={() => setModal(null)}
                className="btn btn-neutral btn-sm shrink-0 whitespace-nowrap mt-2 sm:mt-0"
              >
                Cotizar similar
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
