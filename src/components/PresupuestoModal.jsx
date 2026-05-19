import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import {
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Send,
  MessageCircle,
  Paintbrush,
  Layers,
  Sparkles,
  Grid3x3,
  Wrench,
  Home,
  Building2,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  Sofa,
  UtensilsCrossed,
  BedDouble,
  Bath,
  DoorOpen,
  Car,
  FlipHorizontal,
  Tv,
  Dumbbell,
  BookOpen,
  Calculator,
} from "lucide-react";

const WHATSAPP_NUMBER = "56981449000";
const TOTAL_STEPS = 6;

const SERVICE_RATES = {
  pintado: { min: 3500, max: 6000 },
  yeso: { min: 6000, max: 12000 },
  "yeso+pint": { min: 8000, max: 16000 },
  paneles3d: { min: 20000, max: 45000 },
};

const SERVICIOS = [
  {
    key: "pintado",
    label: "Solo pintado",
    desc: "Pintura interior o exterior",
    icon: Paintbrush,
  },
  {
    key: "yeso",
    label: "Solo yeso",
    desc: "Molduras, reparaciones y cielos",
    icon: Layers,
  },
  {
    key: "yeso+pint",
    label: "Yeso + pintado",
    desc: "Servicio completo",
    icon: Sparkles,
  },
  {
    key: "paneles3d",
    label: "Paneles 3D",
    desc: "Acabados decorativos",
    icon: Grid3x3,
  },
  {
    key: "otro",
    label: "Otro",
    desc: "Cuentanos tu proyecto",
    icon: Wrench,
  },
];

const PROPIEDADES = [
  { key: "casa", label: "Casa", icon: Home },
  { key: "depto", label: "Departamento", icon: Building2 },
  { key: "oficina", label: "Oficina / empresa", icon: Briefcase },
  { key: "local", label: "Local comercial", icon: ShoppingBag },
  { key: "educacion", label: "Centro educacional", icon: GraduationCap },
  { key: "hospital", label: "Hospital / clinica", icon: HeartPulse },
  { key: "otro", label: "Otro", icon: HelpCircle },
];

const ESPACIOS_MAP = {
  casa: [
    { key: "Living", label: "Living", desc: "Sala principal", icon: Sofa },
    { key: "Comedor", label: "Comedor", desc: "Zona de comidas", icon: UtensilsCrossed },
    { key: "Cocina", label: "Cocina", desc: "Mesones y alacenas", icon: UtensilsCrossed },
    { key: "Dormitorio principal", label: "Dormitorio principal", desc: "Habitacion principal", icon: BedDouble },
    { key: "Dormitorio 2", label: "Dormitorio 2", desc: "Segunda habitacion", icon: BedDouble },
    { key: "Dormitorio 3", label: "Dormitorio 3", desc: "Tercera habitacion", icon: BedDouble },
    { key: "Bano", label: "Bano", desc: "Vanities y repisas", icon: Bath },
    { key: "Pasillo", label: "Pasillo", desc: "Circulaciones", icon: DoorOpen },
    { key: "Fachada exterior", label: "Fachada exterior", desc: "Exterior del inmueble", icon: Home },
    { key: "Garage", label: "Garage", desc: "Estacionamiento", icon: Car },
  ],
  depto: [
    { key: "Living", label: "Living", desc: "Sala principal", icon: Sofa },
    { key: "Comedor", label: "Comedor", desc: "Zona de comidas", icon: UtensilsCrossed },
    { key: "Cocina", label: "Cocina", desc: "Mesones y alacenas", icon: UtensilsCrossed },
    { key: "Dormitorio principal", label: "Dormitorio principal", desc: "Habitacion principal", icon: BedDouble },
    { key: "Dormitorio 2", label: "Dormitorio 2", desc: "Segunda habitacion", icon: BedDouble },
    { key: "Bano", label: "Bano", desc: "Vanities y repisas", icon: Bath },
    { key: "Pasillo", label: "Pasillo", desc: "Circulaciones", icon: DoorOpen },
  ],
  oficina: [
    { key: "Recepcion", label: "Recepcion", desc: "Area de entrada", icon: DoorOpen },
    { key: "Sala de reuniones", label: "Sala de reuniones", desc: "Salas de conferencia", icon: Tv },
    { key: "Oficinas", label: "Oficinas", desc: "Espacios de trabajo", icon: Briefcase },
    { key: "Banos", label: "Banos", desc: "Servicios higienicos", icon: Bath },
    { key: "Pasillo", label: "Pasillo", desc: "Circulaciones", icon: DoorOpen },
    { key: "Fachada", label: "Fachada", desc: "Exterior del edificio", icon: Building2 },
  ],
  local: [
    { key: "Sala principal", label: "Sala principal", desc: "Area de atencion", icon: ShoppingBag },
    { key: "Bodega", label: "Bodega", desc: "Almacenamiento", icon: FlipHorizontal },
    { key: "Bano", label: "Bano", desc: "Servicios higienicos", icon: Bath },
    { key: "Fachada", label: "Fachada", desc: "Exterior del local", icon: Building2 },
  ],
  educacion: [
    { key: "Salas de clases", label: "Salas de clases", desc: "Aulas", icon: BookOpen },
    { key: "Pasillos", label: "Pasillos", desc: "Circulaciones", icon: DoorOpen },
    { key: "Banos", label: "Banos", desc: "Servicios higienicos", icon: Bath },
    { key: "Fachada", label: "Fachada", desc: "Exterior del edificio", icon: Building2 },
    { key: "Gimnasio", label: "Gimnasio", desc: "Area deportiva", icon: Dumbbell },
    { key: "Comedor", label: "Comedor", desc: "Casino o comedor", icon: UtensilsCrossed },
  ],
  hospital: [
    { key: "Habitaciones", label: "Habitaciones", desc: "Salas de pacientes", icon: BedDouble },
    { key: "Pasillos", label: "Pasillos", desc: "Circulaciones", icon: DoorOpen },
    { key: "Banos", label: "Banos", desc: "Servicios", icon: Bath },
    { key: "Recepcion", label: "Recepcion", desc: "Area de entrada", icon: DoorOpen },
    { key: "Fachada", label: "Fachada", desc: "Exterior", icon: Building2 },
  ],
  otro: [],
};

const COMUNAS = ["Vina del Mar", "Valparaiso", "Quilpue", "Villa Alemana", "Concon", "Otra"];
const STEP_LABELS = ["Servicio", "Propiedad", "Espacios", "Estimado", "Contacto", "Resumen"];
const STEP_GUIDANCE = [
  {
    eyebrow: "Paso 1",
    title: "Elige el tipo de trabajo",
    description: "Empieza por el servicio principal para que podamos guiar mejor las siguientes preguntas.",
  },
  {
    eyebrow: "Paso 2",
    title: "Define el tipo de propiedad",
    description: "Con esto te mostraremos opciones mas precisas y evitamos pedirte datos innecesarios.",
  },
  {
    eyebrow: "Paso 3",
    title: "Selecciona las zonas a trabajar",
    description: "Marca los espacios que quieres intervenir. Despues pasaremos al estimado.",
  },
  {
    eyebrow: "Paso 4",
    title: "Confirma una referencia de precio",
    description: "Ajusta los m2 solo si quieres ver un aproximado. Si es un proyecto grande, puedes indicarlo.",
  },
  {
    eyebrow: "Paso 5",
    title: "Dejanos tus datos",
    description: "Solo pedimos lo necesario para responderte bien y sin hacerte perder tiempo.",
  },
  {
    eyebrow: "Paso 6",
    title: "Revisa antes de enviar",
    description: "Veras un resumen claro de lo que recibira el equipo antes de contactarte.",
  },
];

const initialData = {
  servicio: "",
  propiedad: "",
  espacios: {},
  metros: "0",
  metrosSuperioresA200: false,
  nombre: "",
  telefono: "",
  email: "",
  comuna: "",
  fecha: { dia: "", mes: "", anio: "" },
  comentarios: "",
};

const getM2Hint = (val) => {
  const v = parseInt(val, 10);
  if (v <= 30) return "Espacio pequeno";
  if (v <= 60) return "Proyecto compacto";
  if (v <= 100) return "Proyecto mediano";
  if (v <= 150) return "Proyecto amplio";
  return "Proyecto residencial grande";
};

const isValidName = (name) => name.trim().length >= 3;
const isValidPhone = (phone) => /^(\+?56)?9\d{8}$/.test(phone.replace(/\s/g, ""));
const isValidEmail = (email) => {
  if (!email) return true;
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email.trim());
};

const isValidDate = ({ dia, mes, anio }) => {
  if (!dia && !mes && !anio) return true;
  const d = parseInt(dia, 10);
  const m = parseInt(mes, 10);
  const a = parseInt(anio, 10);
  if (!d || !m || !a) return false;
  return d >= 1 && d <= 31 && m >= 1 && m <= 12 && a >= 2026 && a <= 2035;
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(value);

const getEstimateDetails = (servicioKey, metrosValue, metrosSuperioresA200, canEstimate) => {
  if (!canEstimate) {
    return {
      hasEstimate: false,
      minRate: null,
      maxRate: null,
      avgRate: null,
      total: null,
      formattedRate: null,
      formattedTotal: null,
      note: "Primero selecciona las zonas a trabajar para ver una referencia.",
    };
  }

  if (metrosSuperioresA200) {
    return {
      hasEstimate: false,
      minRate: null,
      maxRate: null,
      avgRate: null,
      total: null,
      formattedRate: null,
      formattedTotal: null,
      note: "Proyecto grande, requiere evaluacion personalizada.",
    };
  }

  const rate = SERVICE_RATES[servicioKey];
  const metros = Math.max(parseInt(metrosValue || "0", 10) || 0, 0);

  if (!rate || !metros) {
    return {
      hasEstimate: false,
      minRate: null,
      maxRate: null,
      avgRate: null,
      total: null,
      formattedRate: null,
      formattedTotal: null,
      note:
        servicioKey === "otro"
          ? "Este tipo de proyecto necesita una evaluacion personalizada."
          : "Ajusta los m2 para ver una referencia inicial.",
    };
  }

  const avgRate = Math.round((rate.min + rate.max) / 2);
  const total = avgRate * metros;

  return {
    hasEstimate: true,
    minRate: rate.min,
    maxRate: rate.max,
    avgRate,
    total,
    formattedRate: formatCurrency(avgRate),
    formattedTotal: formatCurrency(total),
    note: "Valor promedio referencial. La cotizacion final puede variar segun estado y detalles del proyecto.",
  };
};

const buildWhatsAppMessage = (data, estimate) => {
  const espaciosTexto = Object.entries(data.espacios)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(", ");

  const fechaTexto =
    data.fecha?.dia && data.fecha?.mes && data.fecha?.anio
      ? `${data.fecha.dia}/${data.fecha.mes}/${data.fecha.anio}`
      : "Por definir";

  const servicioLabel = SERVICIOS.find((item) => item.key === data.servicio)?.label ?? data.servicio;
  const propiedadLabel = PROPIEDADES.find((item) => item.key === data.propiedad)?.label ?? data.propiedad;
  const estimadoTexto = estimate.hasEstimate
    ? `${estimate.formattedTotal} aprox. (${estimate.formattedRate}/m2 promedio)`
    : estimate.note;
  const metrosTexto = data.metrosSuperioresA200
    ? "Mas de 200 m2"
    : parseInt(data.metros, 10) > 0
      ? `${data.metros} m2`
      : "Sin definir";

  const msg = `
Nueva solicitud de cotizacion

Servicio: ${servicioLabel}
Tipo de propiedad: ${propiedadLabel}
Espacios: ${espaciosTexto || "No especificado"}
M2 estimados: ${metrosTexto}
Estimado: ${estimadoTexto}

Nombre: ${data.nombre}
Telefono: ${data.telefono}
${data.email ? `Email: ${data.email}` : ""}
Comuna: ${data.comuna}
Fecha estimada: ${fechaTexto}

Comentarios: ${data.comentarios || "Sin comentarios"}
  `.trim();

  return encodeURIComponent(msg);
};

function SelectCard({ item, selected, onClick }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition-all duration-200 ${
        selected
          ? "border-[#E6B800] bg-[#E6B800]/10 shadow-[0_0_0_1px_rgba(230,184,0,0.15)]"
          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            selected ? "bg-[#E6B800]/15 text-[#E6B800]" : "bg-white/5 text-white/70"
          }`}
        >
          <Icon size={20} />
        </span>
        {selected && (
          <span className="rounded-full bg-[#E6B800]/15 px-2 py-1 text-[11px] font-semibold text-[#E6B800]">
            Seleccionado
          </span>
        )}
      </div>
      <p className="text-sm font-semibold text-white">{item.label}</p>
      <p className="mt-1 text-xs leading-5 text-white/55">{item.desc}</p>
    </button>
  );
}

function HelpDisclosure({ summary, children, className = "mt-4" }) {
  return (
    <details className={`${className} group rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-200 open:border-[#E6B800]/25 open:bg-white/[0.045]`}>
      <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-left marker:hidden transition-colors duration-200 hover:bg-white/[0.03] focus-visible:outline-none">
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/65 transition-colors duration-200 group-open:border-[#E6B800]/20 group-open:bg-[#E6B800]/10 group-open:text-[#E6B800]">
            <HelpCircle size={16} />
          </span>
          <span className="text-sm font-medium text-white/88 transition-colors duration-200 group-open:text-white">
            {summary}
          </span>
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition-all duration-200 group-hover:text-white/75 group-open:rotate-90 group-open:border-[#E6B800]/20 group-open:text-[#E6B800]">
          <ChevronRight size={15} />
        </span>
      </summary>
      <div className="px-4 pb-4">
        <p className="border-t border-white/8 pt-3 text-sm leading-6 text-white/62">{children}</p>
      </div>
    </details>
  );
}

export default function PresupuestoModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");
  const [data, setData] = useState(initialData);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const set = (key, value) => setData((current) => ({ ...current, [key]: value }));

  const toggleEspacio = (key) =>
    setData((current) => ({
      ...current,
      espacios: { ...current.espacios, [key]: !current.espacios[key] },
    }));

  const espaciosDisponibles = ESPACIOS_MAP[data.propiedad] ?? [];
  const espaciosSeleccionados = Object.entries(data.espacios)
    .filter(([, value]) => value)
    .map(([key]) => key);
  const espaciosCount = espaciosSeleccionados.length;
  const hasContextForEstimate =
    data.propiedad === "otro" ? data.comentarios.trim().length > 0 : espaciosCount > 0;
  const fechaCompleta = data.fecha.dia && data.fecha.mes && data.fecha.anio;
  const selectedService = SERVICIOS.find((item) => item.key === data.servicio);
  const selectedProperty = PROPIEDADES.find((item) => item.key === data.propiedad);
  const estimate = getEstimateDetails(data.servicio, data.metros, data.metrosSuperioresA200, hasContextForEstimate);
  const currentGuide = STEP_GUIDANCE[step - 1];

  const inputBase =
    "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#E6B800] focus:outline-none";
  const selectBase =
    "w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white focus:border-[#E6B800] focus:outline-none";
  const inputError =
    "w-full rounded-2xl border border-red-400 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none";

  const canNext = () => {
    if (step === 1) return !!data.servicio;
    if (step === 2) return !!data.propiedad;
    if (step === 3) {
      if (data.propiedad === "otro") return data.comentarios.trim().length > 0;
      return Object.values(data.espacios).some(Boolean);
    }
    if (step === 4) return true;
    if (step === 5) {
      return isValidName(data.nombre) && isValidPhone(data.telefono) && !!data.comuna && isValidEmail(data.email);
    }
    return true;
  };

  const handleEnviar = async () => {
    setEnviando(true);

    try {
      await emailjs.send(
        "imperio_romano",
        "template_5wvy8c8",
        {
          servicio: selectedService?.label || data.servicio,
          propiedad: selectedProperty?.label || data.propiedad,
          espacios: Object.keys(data.espacios)
            .filter((key) => data.espacios[key])
            .join(", "),
          metros: data.metrosSuperioresA200 ? "Mas de 200 m2" : parseInt(data.metros, 10) > 0 ? `${data.metros} m2` : "Sin definir",
          estimado_total: estimate.hasEstimate ? estimate.formattedTotal : estimate.note,
          estimado_m2: estimate.hasEstimate ? estimate.formattedRate : "No aplica",
          nombre: data.nombre,
          telefono: data.telefono,
          email: data.email || "No proporcionado",
          comuna: data.comuna,
          fecha: data.fecha.dia ? `${data.fecha.dia}/${data.fecha.mes}/${data.fecha.anio}` : "Por definir",
          comentarios: data.comentarios || "Sin comentarios",
        },
        "V9K8voJSN1A53nkjy"
      );

      const msg = buildWhatsAppMessage(data, estimate);
      setWhatsappLink(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`);
      setEnviado(true);
    } catch (error) {
      console.error("Error enviando:", error);
      alert("Hubo un error al enviar. Intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setEnviado(false);
    setEnviando(false);
    setWhatsappLink("");
    setData(initialData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 backdrop-blur-sm sm:p-4"
      onClick={handleClose}
    >
      <div
        className="flex max-h-[96vh] min-h-0 w-full max-w-5xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#120d06] text-white shadow-2xl sm:max-h-[92vh]"
        onClick={(event) => event.stopPropagation()}
        style={{ animation: "slideUp 0.25s ease-out" }}
      >
        <div className="border-b border-white/10 px-4 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E6B800]/80">
                Solicitud guiada
              </p>
              <h2 className="mt-1 text-xl font-bold sm:text-2xl">Solicitar presupuesto</h2>
              {!enviado && (
                <p className="mt-1 text-sm text-white/55">
                  Paso {step} de {TOTAL_STEPS}: {STEP_LABELS[step - 1]}
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {!enviado && (
            <div className="mt-4">
              <div className="flex gap-2">
                {STEP_LABELS.map((label, index) => (
                  <div key={label} className="flex-1">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index + 1 <= step ? "bg-gradient-to-r from-[#E6B800] to-[#C9A84C]" : "bg-white/10"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 hidden justify-between text-[11px] text-white/40 sm:flex">
                {STEP_LABELS.map((label, index) => (
                  <span key={label} className={index + 1 === step ? "text-[#E6B800]" : ""}>
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-[#E6B800]/15 bg-[#E6B800]/8 px-4 py-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E6B800]/90">
                      {currentGuide.eyebrow}
                    </p>
                    <p className="text-sm font-semibold text-white sm:truncate">{currentGuide.title}</p>
                  </div>
                  <details className="w-full sm:w-auto sm:max-w-xl sm:shrink-0">
                    <summary className="inline-flex w-full cursor-pointer list-none items-center justify-center rounded-full border border-white/10 px-3 py-2 text-xs text-white/70 marker:hidden hover:bg-white/5 sm:w-auto">
                      Ver ayuda
                    </summary>
                    <div className="mt-3 w-full rounded-2xl border border-white/10 bg-black/10 p-3 text-sm leading-6 text-white/62 sm:max-w-xl">
                      {currentGuide.description}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5">
          {enviado && (
            <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-5 py-8 text-center sm:py-14">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#E6B800]/35 bg-[#E6B800]/10 text-[#E6B800]">
                <CheckCircle2 size={38} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#E6B800]">Solicitud enviada</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Recibimos tu solicitud y la revisaremos con calma para responderte en menos de 24 horas.
                </p>
              </div>

              <div className="w-full rounded-3xl border border-[#E6B800]/15 bg-[#E6B800]/8 p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6B800]/90">Siguiente paso</p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Si quieres acelerar la respuesta, puedes enviarnos este mismo resumen por WhatsApp.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white transition hover:brightness-105"
                >
                  <MessageCircle size={18} />
                  Enviar resumen por WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-2xl border border-white/10 px-4 py-3.5 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {!enviado && step === 1 && (
            <div className="mx-auto max-w-3xl">
              <h3 className="text-xl font-semibold">Que servicio necesitas?</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                Elige una opcion para darte una referencia mas util desde el inicio.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SERVICIOS.map((service) => (
                  <SelectCard
                    key={service.key}
                    item={service}
                    selected={data.servicio === service.key}
                    onClick={() => set("servicio", service.key)}
                  />
                ))}
              </div>
              <HelpDisclosure summary="Consejo para elegir mejor">
                Elige la opcion que mas se acerque a tu necesidad. Si tu proyecto mezcla varias cosas, luego podras aclararlo en comentarios.
              </HelpDisclosure>
            </div>
          )}

          {!enviado && step === 2 && (
            <div className="mx-auto max-w-3xl">
              <h3 className="text-xl font-semibold">Que tipo de propiedad es?</h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/55">
                Esto nos ayuda a mostrar espacios mas precisos y evitar preguntas de mas.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PROPIEDADES.map((property) => (
                  <SelectCard
                    key={property.key}
                    item={{ ...property, desc: "Seleccion personalizada segun tu proyecto" }}
                    selected={data.propiedad === property.key}
                    onClick={() => {
                      set("propiedad", property.key);
                      set("espacios", {});
                    }}
                  />
                ))}
              </div>
              <HelpDisclosure summary="No estoy seguro de mi tipo de propiedad">
                No pasa nada si no coincide al 100%. El objetivo es guiarte rapido hacia las opciones correctas.
              </HelpDisclosure>
            </div>
          )}

          {!enviado && step === 3 && (
            <div className="mx-auto max-w-4xl">
              <h3 className="text-xl font-semibold">Que espacios quieres trabajar?</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                Primero selecciona las zonas a trabajar. En el siguiente paso definiremos los m2 y te mostraremos la referencia de precio.
              </p>

              {data.propiedad === "otro" ? (
                <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <label className="mb-2 block text-sm font-medium text-white/80">Describe tu espacio o proyecto</label>
                  <textarea
                    placeholder="Ej: quincho, terraza, galpon, taller o una necesidad especial."
                    value={data.comentarios}
                    onChange={(event) => set("comentarios", event.target.value)}
                    rows={4}
                    className={`${inputBase} resize-none`}
                  />
                </div>
              ) : (
                <>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {espaciosDisponibles.map((space) => {
                      const Icon = space.icon;
                      const selected = !!data.espacios[space.key];

                      return (
                        <button
                          type="button"
                          key={space.key}
                          onClick={() => toggleEspacio(space.key)}
                          className={`flex min-w-0 items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                            selected
                              ? "border-[#E6B800] bg-[#E6B800]/10"
                              : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                              selected ? "bg-[#E6B800]/15 text-[#E6B800]" : "bg-white/5 text-white/60"
                            }`}
                          >
                            <Icon size={18} />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-white">{space.label}</p>
                            <p className="mt-1 text-xs leading-5 text-white/50">{space.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {espaciosCount > 0 && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E6B800]/25 bg-[#E6B800]/10 px-3 py-2 text-xs font-medium text-[#E6B800]">
                      <CheckCircle2 size={14} />
                      {espaciosCount} espacio{espaciosCount !== 1 ? "s" : ""} seleccionado{espaciosCount !== 1 ? "s" : ""}
                    </div>
                  )}
                </>
              )}

              <HelpDisclosure summary="Ayuda para elegir espacios" className="mt-5">
                Puedes marcar uno o varios espacios. Mientras mas claro quede esto, mas util sera la referencia posterior. Despues ajustaremos los m2 con calma.
              </HelpDisclosure>
            </div>
          )}

          {!enviado && step === 4 && (
            <div className="mx-auto max-w-3xl">
              <h3 className="text-xl font-semibold">Metros y estimado</h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/55">
                Ahora si, ajusta los m2 para ver una referencia de precio. Si tu proyecto es mas grande, puedes indicarlo aqui mismo.
              </p>

              <div className="mt-5 rounded-[28px] border border-[#E6B800]/15 bg-gradient-to-br from-[#1c1409] to-[#120d06] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E6B800]/12 text-[#E6B800]">
                    <Calculator size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E6B800]/85">
                      Estimado rapido
                    </p>
                    <h4 className="text-lg font-semibold text-white">Referencia de precio</h4>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/40">Servicio</p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {selectedService?.label || "Aun no seleccionado"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/40">Espacios definidos</p>
                    <p className="mt-2 text-sm font-semibold text-white">
                      {data.propiedad === "otro" ? "Proyecto descrito" : `${espaciosCount} seleccionado${espaciosCount !== 1 ? "s" : ""}`}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-3xl border border-[#E6B800]/20 bg-[#E6B800]/10 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#E6B800]/85">Precio estimado</p>
                  {estimate.hasEstimate ? (
                    <>
                      <p className="mt-2 text-3xl font-bold text-white">{estimate.formattedTotal}</p>
                      <p className="mt-2 text-sm text-white/70">{estimate.formattedRate} por m2 promedio</p>
                    </>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-white/72">{estimate.note}</p>
                  )}
                </div>

                <div className="mt-4 rounded-3xl border border-white/10 bg-black/10 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">Metros cuadrados aproximados</p>
                      <p className="mt-1 text-xs leading-5 text-white/45">
                        Parte desde 0 y mueve la barra solo cuando quieras confirmar una referencia.
                      </p>
                    </div>
                    <div className="self-start text-left sm:self-auto sm:text-right">
                      <p className="text-3xl font-bold text-[#E6B800]">
                        {data.metrosSuperioresA200 ? "200+" : data.metros}
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">m2</p>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="5"
                    value={data.metros}
                    onChange={(event) => set("metros", event.target.value)}
                    disabled={data.metrosSuperioresA200}
                    className="mt-5 w-full disabled:cursor-not-allowed disabled:opacity-40"
                    style={{ accentColor: "#E6B800" }}
                  />

                  <div className="mt-2 grid grid-cols-[auto,minmax(0,1fr),auto] items-center gap-2 text-xs">
                    <span className="text-white/30">0 m2</span>
                    <span className="text-center font-medium text-[#E6B800]/85">
                      {data.metrosSuperioresA200
                        ? "Proyecto grande"
                        : parseInt(data.metros, 10) > 0
                          ? getM2Hint(data.metros)
                          : "Sin definir"}
                    </span>
                    <span className="text-white/30">200 m2</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => set("metrosSuperioresA200", !data.metrosSuperioresA200)}
                    className={`mt-4 w-full rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                      data.metrosSuperioresA200
                        ? "border-[#E6B800] bg-[#E6B800]/12 text-[#E6B800]"
                        : "border-white/10 bg-white/[0.03] text-white/75 hover:bg-white/[0.05]"
                    }`}
                  >
                    {data.metrosSuperioresA200 ? "Proyecto sobre 200 m2 activado" : "Mi proyecto supera 200 m2"}
                  </button>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/58">{estimate.note}</p>
              </div>
              <HelpDisclosure summary="No se cuantos m² tengo" className="mt-5">
                Puedes dejarlo en 0 por ahora o marcar que tu proyecto supera los 200 m2. El equipo igual revisara tu caso contigo antes de cerrar una cotizacion.
              </HelpDisclosure>
            </div>
          )}

          {!enviado && step === 5 && (
            <div className="mx-auto max-w-2xl">
              <h3 className="text-xl font-semibold">Como te contactamos?</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Solo necesitamos lo basico para responderte bien y sin demoras.
              </p>

              <div className="mt-5 space-y-3">
                <div>
                  <input
                    placeholder="Nombre completo *"
                    value={data.nombre}
                    onChange={(event) => set("nombre", event.target.value)}
                    className={data.nombre && !isValidName(data.nombre) ? inputError : inputBase}
                  />
                  {data.nombre && !isValidName(data.nombre) && (
                    <span className="ml-1 mt-1 block text-xs text-red-400">Ingresa al menos 3 caracteres.</span>
                  )}
                </div>

                <div>
                  <input
                    placeholder="Telefono o WhatsApp +56912345678 *"
                    value={data.telefono}
                    onChange={(event) => set("telefono", event.target.value.replace(/[^0-9+]/g, ""))}
                    className={data.telefono && !isValidPhone(data.telefono) ? inputError : inputBase}
                  />
                  {data.telefono && !isValidPhone(data.telefono) && (
                    <span className="ml-1 mt-1 block text-xs text-red-400">
                      Usa un celular valido de Chile. Puedes incluir +569.
                    </span>
                  )}
                </div>

                <div>
                  <input
                    placeholder="Correo electronico (opcional)"
                    type="email"
                    value={data.email}
                    onChange={(event) => set("email", event.target.value)}
                    className={data.email && !isValidEmail(data.email) ? inputError : inputBase}
                  />
                  {data.email && !isValidEmail(data.email) ? (
                    <span className="ml-1 mt-1 block text-xs text-red-400">Revisa el formato del correo.</span>
                  ) : (
                    <span className="ml-1 mt-1 block text-xs text-white/40">Opcional, por si quieres recibir copia.</span>
                  )}
                </div>

                <select
                  value={data.comuna}
                  onChange={(event) => set("comuna", event.target.value)}
                  className={selectBase}
                >
                  <option value="" style={{ color: "#6b7280", backgroundColor: "#ffffff" }}>
                    Selecciona tu comuna *
                  </option>
                  {COMUNAS.map((comuna) => (
                    <option
                      key={comuna}
                      value={comuna}
                      style={{ color: "#111827", backgroundColor: "#ffffff" }}
                    >
                      {comuna}
                    </option>
                  ))}
                </select>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Fecha estimada de inicio (opcional)
                  </label>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {[
                      { key: "dia", placeholder: "Dia", max: 2 },
                      { key: "mes", placeholder: "Mes", max: 2 },
                      { key: "anio", placeholder: "Año", max: 4 },
                    ].map(({ key, placeholder, max }) => (
                      <input
                        key={key}
                        placeholder={placeholder}
                        maxLength={max}
                        value={data.fecha[key]}
                        onChange={(event) => {
                          const cleanValue = event.target.value.replace(/\D/g, "");
                          set("fecha", { ...data.fecha, [key]: cleanValue });
                        }}
                        className={`rounded-2xl border px-3 py-3 text-center text-sm text-white placeholder:text-white/35 focus:outline-none ${
                          fechaCompleta && !isValidDate(data.fecha)
                            ? "border-red-400 bg-white/[0.04]"
                            : "border-white/10 bg-white/[0.04] focus:border-[#E6B800]"
                        }`}
                      />
                    ))}
                  </div>
                  {(data.fecha.dia || data.fecha.mes || data.fecha.anio) && !isValidDate(data.fecha) && (
                    <span className="ml-1 mt-2 block text-xs text-red-400">Revisa la fecha ingresada.</span>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">Comentarios adicionales</label>
                  <textarea
                    placeholder="Si quieres, agrega detalles utiles para la visita o la evaluacion."
                    value={data.comentarios}
                    onChange={(event) => set("comentarios", event.target.value)}
                    rows={4}
                    className={`${inputBase} resize-none`}
                  />
                </div>
              </div>
              <HelpDisclosure summary="Que datos son realmente importantes" className="mt-5">
                Tu numero es lo mas importante. El correo y la fecha son opcionales, pero nos ayudan a responderte mejor si ya tienes una idea mas clara.
              </HelpDisclosure>
            </div>
          )}

          {!enviado && step === 6 && (
            <div className="mx-auto max-w-3xl">
              <h3 className="text-xl font-semibold">Revisa tu solicitud</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Esto es lo que recibira el equipo antes de contactarte.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/40">Servicio</p>
                  <p className="mt-2 text-base font-semibold text-white">{selectedService?.label}</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/40">Propiedad</p>
                  <p className="mt-2 text-base font-semibold text-white">{selectedProperty?.label}</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/40">Espacios y m2</p>
                    <span className="max-w-full self-start break-words rounded-full bg-white/5 px-3 py-1 text-xs text-white/60 sm:self-auto">
                      {data.metrosSuperioresA200
                        ? "Mas de 200 m2"
                        : parseInt(data.metros, 10) > 0
                          ? `${data.metros} m2 · ${getM2Hint(data.metros)}`
                          : "Sin definir"}
                    </span>
                  </div>
                  {espaciosSeleccionados.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {espaciosSeleccionados.map((space) => (
                        <span
                          key={space}
                          className="rounded-full border border-[#E6B800]/25 bg-[#E6B800]/10 px-3 py-1.5 text-xs font-medium text-[#E6B800]"
                        >
                          {space}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm text-white/65">Proyecto descrito en comentarios.</p>
                  )}
                </div>

                <div className="rounded-3xl border border-[#E6B800]/20 bg-[#E6B800]/10 p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#E6B800]/85">Estimado referencial</p>
                  {estimate.hasEstimate ? (
                    <>
                      <p className="mt-2 text-2xl font-bold text-white">{estimate.formattedTotal}</p>
                      <p className="mt-2 text-sm text-white/72">{estimate.formattedRate} por m2 promedio</p>
                    </>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-white/72">{estimate.note}</p>
                  )}
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/40">Contacto</p>
                  <p className="mt-2 text-base font-semibold text-white">{data.nombre}</p>
                  <p className="mt-1 break-words text-sm text-white/65">
                    {data.telefono} · {data.comuna}
                  </p>
                  {data.email && <p className="mt-1 break-words text-sm text-white/65">{data.email}</p>}
                  {fechaCompleta && (
                    <p className="mt-1 break-words text-sm text-white/65">
                      Inicio estimado: {data.fecha.dia}/{data.fecha.mes}/{data.fecha.anio}
                    </p>
                  )}
                  {data.comentarios && <p className="mt-3 break-words text-sm italic text-white/65">"{data.comentarios}"</p>}
                </div>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-white/40">
                Al enviar, tambien quedara listo el resumen para compartir por WhatsApp.
              </p>
              <HelpDisclosure summary="Puedo corregir algo antes de enviar" className="mt-5">
                Si algo no te convence, puedes volver atras y corregirlo antes de enviar. La idea es que tu solicitud salga clara y simple.
              </HelpDisclosure>
            </div>
          )}
        </div>

        {!enviado && (
          <div className="sticky bottom-0 border-t border-white/10 bg-[#120d06]/95 px-4 py-4 backdrop-blur sm:px-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="min-h-5 flex-1 text-xs text-white/45">
                {step === 4 && estimate.hasEstimate && <>Estimado actual: {estimate.formattedTotal}</>}
                {step === 4 && !estimate.hasEstimate && estimate.note}
                {step === 1 && "Primero elegimos el servicio principal."}
                {step === 2 && "Ahora definimos el tipo de propiedad."}
                {step === 3 && "Selecciona los espacios antes de pasar al estimado."}
                {step === 5 && "Solo faltan tus datos para poder responderte."}
                {step === 6 && "Ultima revision antes de enviar la solicitud."}
              </div>

              <div className="flex w-full items-center gap-3 sm:w-auto sm:justify-end">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((current) => current - 1)}
                    className="inline-flex flex-1 items-center justify-center gap-1 rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white sm:flex-none"
                  >
                    <ChevronLeft size={16} />
                    Volver
                  </button>
                ) : (
                  <span className="hidden sm:block" />
                )}

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (canNext()) setStep((current) => current + 1);
                    }}
                    disabled={!canNext()}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-35 sm:flex-none"
                    style={
                      canNext()
                        ? {
                            background: "linear-gradient(135deg, #E6B800, #C9A84C)",
                            color: "#0A0A0A",
                          }
                        : {
                            background: "rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.45)",
                          }
                    }
                  >
                    Continuar
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleEnviar}
                    disabled={enviando}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-[#0A0A0A] transition disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
                    style={{ background: "linear-gradient(135deg, #E6B800, #C9A84C)" }}
                  >
                    {enviando ? "Enviando..." : "Enviar solicitud"}
                    {!enviando && <Send size={15} />}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
