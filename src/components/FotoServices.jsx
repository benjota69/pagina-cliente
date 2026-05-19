import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

// ─────────────────────────────────────────────────────────────
//  DATA — reemplaza src con tus fotos reales
//  Ponlas en /public/trabajos/ y usa "/trabajos/foto1.webp"
// ─────────────────────────────────────────────────────────────
const trabajos = [
  {
    id: 1,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-26-58 2.webp",
    titulo: "Mural artístico exterior",
    descripcion: "Pintura de mural decorativo con diseño colorido de aves y vegetación sobre fachada exterior. Trabajo artístico con pintura acrílica de alta durabilidad.",
    comuna: "Viña del Mar",
  },
  {
    id: 2,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-26-59.webp",
    titulo: "Edificio institucional",
    descripcion: "Pintura completa de fachada institucional con mural artístico incluido. Aplicación de pintura exterior color celeste con terminación uniforme y detalles en tonos contrastantes.",
    comuna: "Valparaíso",
  },
  {
    id: 3,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-26-59 3.webp",
    titulo: "Living-cocina concepto abierto",
    descripcion: "Pintura interior blanca mate en living-cocina de concepto abierto. Muros, cielo y molduras con terminación impecable. Cortes limpios en unión con muebles de cocina.",
    comuna: "Quilpué",
  },
  {
    id: 4,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-00 2.webp",
    titulo: "Casa moderna dos pisos",
    descripcion: "Pintura exterior completa en casa de dos pisos con diseño contemporáneo. Combinación de gris claro con acento rojo en volumen lateral. Terminación pareja en estucado.",
    comuna: "Viña del Mar",
  },
  {
    id: 5,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-02 3.webp",
    titulo: "Casa elevada con acento turquesa",
    descripcion: "Pintura de fachada en casa elevada sobre estructura metálica. Estucado gris con detalle turquesa en alero y muro lateral. Protección UV y resistencia a la intemperie.",
    comuna: "Valparaíso",
  },
  {
    id: 6,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-01 4.webp",
    titulo: "Living con ventanales",
    descripcion: "Pintura blanca premium en living con doble altura y ventanales de piso a cielo. Terminación perfecta en muros, cielo y marcos. Preparación completa de superficies.",
    comuna: "Quilpué",
  },
  {
    id: 7,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-01 2.webp",
    titulo: "Edificio modular multicolor",
    descripcion: "Pintura decorativa en edificio modular de tres pisos con paneles de colores rojo, verde, negro y blanco. Trabajo en altura con escalera exterior metálica.",
    comuna: "Viña del Mar",
  },
  {
    id: 8,
    categoria: "terminaciones",
    src: "/trabajos/PHOTO-2026-03-18-20-27-03.webp",
    titulo: "Casa con revestimiento metálico",
    descripcion: "Pintura y terminaciones en casa con revestimiento de zinc acanalado gris y detalles en verde oliva. Marcos de madera barnizados y cielo de alero pintado.",
    comuna: "Villa Alemana",
  },
  {
    id: 9,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-08.webp",
    titulo: "Living doble altura",
    descripcion: "Pintura interior blanca en living con doble altura y ventana superior. Piso de madera, muros lisos con terminación mate. Ambiente luminoso y limpio.",
    comuna: "Quilpué",
  },
  {
    id: 10,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-04 6.webp",
    titulo: "Centro comunitario",
    descripcion: "Pintura exterior en centro comunitario con paneles turquesa y revestimiento de madera natural. Trabajo de gran escala con terminación profesional en fachada completa.",
    comuna: "Valparaíso",
  },
  {
    id: 11,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-09%205.webp",
    titulo: "Interiores con puertas Magenta",
    descripcion: "Pintura interior en pasillos y desniveles con muros blancos de extra cobertura que amplían y llenan de luz el espacio. Destaca el fino esmalte color magenta aplicado en puertas y marcos, logrando un contraste moderno con una terminación impecable.",
    comuna: "Quilpué",
  },
  {
    id: 12,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-07.webp",
    titulo: "Sala de estar luminosa",
    descripcion: "Pintura interior premium en sala de estar. Muros blancos de alta lavabilidad que potencian la luz natural y contrastan elegantemente con los ventanales negros y el piso de madera. Acabados lisos sin imperfecciones.",
    comuna: "Concón",
  },
  {
    id: 13,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-10%202.webp",
    titulo: "Piscina techada",
    descripcion: "Pintura especializada de alta resistencia para piscina interior. Aplicación de revestimiento azul vibrante diseñado para soportar humedad constante y productos químicos, junto con la renovación de los pilares estructurales blancos del recinto.",
    comuna: "Reñaca",
  },
  {
    id: 14,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-06%205.webp",
    titulo: "Dormitorio con piso nuevo",
    descripcion: "Renovación integral de habitación interior. Aplicación de pintura blanca mate en muros y cielo para maximizar la luminosidad, complementada con la instalación completa de un nuevo piso flotante tono madera que brinda calidez y modernidad al espacio.",
    comuna: "Concón",
  },
  {
    id: 15,
    categoria: "interior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-02.webp",
    titulo: "Espacios de doble altura",
    descripcion: "Pintura interior de espacios amplios con techos en desnivel. Se utilizó esmalte al agua blanco de primera calidad para generar una continuidad visual impecable entre los muros, el cielo inclinado y los grandes ventanales negros.",
    comuna: "Concón",
  },
  {
    id: 16,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-01%203.webp",
    titulo: "Casa de diseño metálico vanguardista",
    descripcion: "Pintura exterior sobre fachada revestida en planchas acanaladas. Diseño llamativo que combina un tono gris acero industrial con acentos muy vibrantes en verde lima en la entrada. Se aplicó pintura anticorrosiva de alta resistencia a los rayos UV.",
    comuna: "Valparaíso",
  },
  {
    id: 17,
    categoria: "exterior",
    src: "/trabajos/PHOTO-2026-03-18-20-27-00%205.webp",
    titulo: "Fachada modular multicolor",
    descripcion: "Proyecto de pintura industrial para estructura modular de tres niveles. Se realizó un trabajo vertical de alta precisión para trazar franjas de colores sólidos (verde, negro, rojo y blanco), aplicando esmalte sintético para máxima protección a la intemperie.",
    comuna: "Viña del Mar",
  },
  {
    id: 18,
    categoria: "interior",
    src: "/trabajos/Image2026-03-2312.02.53.webp",
    titulo: "Salón con vigas a la vista",
    descripcion: "Pintura interior en amplio salón y áreas comunes. Contraste espectacular entre la base blanca luminosa de los muros y el esmalte sintético negro mate aplicado en las vigas y pilares metálicos. Resaltan detalles en amarillo vibrante en las puertas.",
    comuna: "Quilpué",
  },
  {
    id: 19,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2782.webp",
    titulo: "Muro decorativo 3D premium",
    descripcion: "Instalación profesional de placas de yeso 3D Imperio Romano. Modelo geométrico de pétalos terminado en esmalte grafito oscuro; aporta un contraste profundo, textura y un diseño ultramoderno que convierte la pared en el centro visual del salón.",
    comuna: "Viña del Mar",
  },
  {
    id: 20,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2853.webp",
    titulo: "Comedor con relieve arquitectónico",
    descripcion: "Renovación integral de sala comedor con nuestras placas de yeso 3D Imperio Romano. Acabado en blanco nieve mate que añade volumen, profundidad y un estilo contemporáneo, elevando la estética de todo el espacio sin sobrecargarlo visualmente.",
    comuna: "Concón",
  },
  {
    id: 21,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2760.webp",
    titulo: "Muro ondas en tono neutro",
    descripcion: "Instalación de paneles de yeso 3D con diseño de ondas continuas, terminado en un sofisticado color gris mate. Ideal para pasillos o recibidores, logrando una sensación de movimiento y vanguardia desde la entrada.",
    comuna: "Valparaíso",
  },
  {
    id: 22,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2768.webp",
    titulo: "Revestimiento tipo piedra rústica",
    descripcion: "Aplicación de placas 3D con patrón cuadrado irregular. Pintadas de blanco brillante para maximizar la luz en el comedor, logrando una textura de piedra rústica muy limpia y fácil de mantener.",
    comuna: "Quilpué",
  },
  {
    id: 23,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2771.webp",
    titulo: "Fondo para Home Theater",
    descripcion: "Diseño espectacular para zona de entretenimiento. Las placas geométricas en forma de diamante, junto con el acabado en gris carbón oscuro mate, absorben reflejos indeseados y concentran toda la atención en la pantalla.",
    comuna: "Viña del Mar",
  },
  {
    id: 24,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2773.webp",
    titulo: "Enmarque de chimenea 3D",
    descripcion: "Trabajo fino de instalación de yeso 3D moldeando el espacio alrededor de una estufa insertable. El revestimiento blanco texturado contrasta hermosamente con la luz del fuego simulado, creando un ambiente extra acogedor.",
    comuna: "Villa Alemana",
  },
  {
    id: 25,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2776.webp",
    titulo: "Muro texturizado para TV",
    descripcion: "Instalación de paneles de yeso 3D modelo floral para pared de televisión. Con un sutil color gris claro perla, el muro resalta ante la luz de la pantalla sin saturar el espacio visual de la habitación.",
    comuna: "Concón",
  },
  {
    id: 26,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2780.webp",
    titulo: "Living con detalles de acento",
    descripcion: "Instalación creativa de placas 3D blancas circulares intercaladas con cuadrados lisos pintados en color celeste menta. Un diseño lúdico y retro que entrega muchísima personalidad al área del sofá.",
    comuna: "Valparaíso",
  },
  {
    id: 27,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2855.webp",
    titulo: "Pared geométrica perla",
    descripcion: "Revestimiento 3D sobre muro principal utilizando un hermoso modelo de pétalos y estrellas en esmalte perlado suave. Una terminación impecable que sirve como el respaldo perfecto para el mobiliario y la decoración del salón.",
    comuna: "Quilpué",
  },
  {
    id: 28,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2772.webp",
    titulo: "Enmarque de estufa y TV",
    descripcion: "Elegante proyecto de yeso 3D en modelo rústico revestiendo la pared de la chimenea eléctrica y soportando un televisor. Una integración perfecta entre tecnología y diseño cálido para la sala de estar.",
    comuna: "Villa Alemana",
  },
  {
    id: 29,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2778.webp",
    titulo: "Muro diamante oscuro",
    descripcion: "Imponente instalación geométrica terminada en un profundo tono oscuro. El patrón de diamantes 3D juega maravillosamente con las luces superiores creando un ambiente de cine en casa premium.",
    comuna: "Viña del Mar",
  },
  {
    id: 30,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2779.webp",
    titulo: "Cine en casa inmersivo",
    descripcion: "Variante de diseño en muro principal de entretenimiento. Las placas 3D oscuras mate previenen reflejos de la pantalla aportando un fondo dinámico que resalta durante las proyecciones nocturnas.",
    comuna: "Concón",
  },
  {
    id: 31,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2781.webp",
    titulo: "Decoración clásica y relieve",
    descripcion: "Instalación de paneles de yeso 3D Imperio Romano modelo floral. El contraste del patrón gris moderno con el mobiliario clásico de madera y butacas logra un equilibrio transicional sumamente elegante.",
    comuna: "Valparaíso",
  },
  {
    id: 32,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2758.webp",
    titulo: "Bloques escalonados modernos",
    descripcion: "Diseño urbano y vanguardista utilizando modelo de placas en bloques escalonados. El juego de volúmenes cuadrados de distintas profundidades genera un patrón tipo laberinto ideal para amplios salones.",
    comuna: "Quilpué",
  },
  {
    id: 33,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2761.webp",
    titulo: "Diseño diamante en color vibrante",
    descripcion: "Audaz aplicación de placas 3D diamante acabadas en esmalte magenta intenso. Demostramos que las terminaciones 3D no se limitan a colores neutros; pueden ser protagonistas audaces en dormitorios o recibidores.",
    comuna: "Valparaíso",
  },
  {
    id: 34,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2765.webp",
    titulo: "Muro Tetris multicolor",
    descripcion: "Un proyecto sumamente lúdico y creativo. Placas 3D base en fucsia con bloques individuales pintados a mano en diferentes colores de acento. Excelente elección para cuartos infantiles, salas de juego o negocios modernos.",
    comuna: "Concón",
  },
  {
    id: 35,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2766.webp",
    titulo: "Respaldo circular gris carbón",
    descripcion: "Aplicación de paneles 3D modelo circular instalados de piso a techo, creando un majestuoso respaldo de cama arquitectónico. El tono gris mate aporta serenidad y descanso a la habitación principal.",
    comuna: "Viña del Mar",
  },
  {
    id: 36,
    categoria: "terminaciones",
    src: "/trabajos/IMG_2770.webp",
    titulo: "Ondas continuas en pasillo",
    descripcion: "Revestimiento de pasillo principal con placas 3D diseño ondas. Pintado en un blanco inmaculado, este diseño fomenta el flujo visual, aportando un movimiento suave y continuo desde la puerta de ingreso.",
    comuna: "Quilpué",
  }
];

const categorias = [
  { key: "todos", label: "Todos", badge: "badge-neutral" },
  { key: "interior", label: "Interior", badge: "badge-info" },
  { key: "exterior", label: "Exterior", badge: "badge-success" },
  { key: "terminaciones", label: "Terminaciones", badge: "badge-warning" },
];

const trabajosExtra = [
  {
    id: 37,
    categoria: "exterior",
    src: "/trabajos/catalogo-exterior-casa-hormigon-moderno.webp",
    titulo: "Casa de hormigón de líneas modernas",
    descripcion: "Pintura exterior en vivienda contemporánea de dos niveles con muros de hormigón visto y marcos de madera natural. El trabajo refuerza la limpieza visual de la fachada, protege la superficie expuesta y acompaña la arquitectura minimalista con una terminación sobria y uniforme.",
    comuna: "Concón",
  },
  {
    id: 38,
    categoria: "interior",
    src: "/trabajos/catalogo-interior-cocina-lineal-madera.webp",
    titulo: "Cocina lineal con terminación luminosa",
    descripcion: "Proyecto interior en cocina de diseño limpio, con muros claros, revestimiento blanco y mobiliario en madera natural combinado con base grafito. La pintura acompaña la entrada de luz, ordena visualmente el espacio y realza la calidez del mobiliario y las lámparas colgantes.",
    comuna: "Concón",
  },
  {
    id: 39,
    categoria: "interior",
    src: "/trabajos/catalogo-interior-living-madera-chimenea.webp",
    titulo: "Living con acentos de madera y chimenea",
    descripcion: "Pintura interior y terminaciones en amplio living-comedor con gran entrada de luz natural, cielo de hormigón visto y paneles de madera en muro principal. El resultado equilibra calidez y modernidad, dejando un ambiente limpio, amplio y arquitectónicamente muy bien resuelto.",
    comuna: "Concón",
  },
  {
    id: 40,
    categoria: "interior",
    src: "/trabajos/catalogo-interior-cocina-isla-integrada.webp",
    titulo: "Cocina con isla central integrada",
    descripcion: "Renovación interior en cocina contemporánea con isla central, mobiliario en tonos madera clara, cubierta marmolada y hornos empotrados. La pintura y terminaciones refuerzan la luminosidad general del espacio y unifican los materiales para una estética premium y funcional.",
    comuna: "Concón",
  },
];

const getLabel = (key) => categorias.find((c) => c.key === key)?.label ?? key;
const getBadge = (key) => categorias.find((c) => c.key === key)?.badge ?? "badge-neutral";

export default function FotoServices() {
  const [searchParams] = useSearchParams();
  const categoriaInicial = categorias.some((c) => c.key === searchParams.get("categoria"))
    ? searchParams.get("categoria")
    : "todos";
  const [filtro, setFiltro] = useState(categoriaInicial);
  const [modal, setModal] = useState(null);
  const [visible, setVisible] = useState(false);

  const catalogoTrabajos = [...trabajos, ...trabajosExtra];
  const filtrados = filtro === "todos"
    ? catalogoTrabajos
    : catalogoTrabajos.filter((t) => t.categoria === filtro);

  const modalIndex = modal ? filtrados.findIndex((t) => t.id === modal.id) : -1;
  const prev = () => setModal(filtrados[(modalIndex - 1 + filtrados.length) % filtrados.length]);
  const next = () => setModal(filtrados[(modalIndex + 1) % filtrados.length]);

  // Teclado en modal
  useEffect(() => {
    if (!modal) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setModal(null);
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
