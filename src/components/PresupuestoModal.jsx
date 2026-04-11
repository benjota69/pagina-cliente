import emailjs from "@emailjs/browser";
import { useState } from "react";
import { X, ChevronRight, ChevronLeft, CheckCircle2, Send, MessageCircle, Star } from "lucide-react";
import {
  Paintbrush, Layers, Sparkles, Grid3x3, Wrench,
  Home, Building2, Briefcase, ShoppingBag, GraduationCap,
  HeartPulse, HelpCircle,
  Sofa, UtensilsCrossed, BedDouble, Bath, DoorOpen,
  Car, FlipHorizontal, Tv, Dumbbell, BookOpen,
} from "lucide-react";

// ─────────────────────────────────────────────
//  CONFIG
// ─────────────────────────────────────────────
const WHATSAPP_NUMBER = "56944235539";

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────
const SERVICIOS = [
  { key: "pintado",   label: "Solo pintado",   desc: "Pintura interior o exterior",   icon: <Paintbrush size={22} /> },
  { key: "yeso",      label: "Solo yeso",       desc: "Molduras, reparaciones y cielos", icon: <Layers size={22} /> },
  { key: "yeso+pint", label: "Yeso + pintado",  desc: "Servicio completo integral",    icon: <Sparkles size={22} /> },
  { key: "paneles3d", label: "Yeso Paneles 3D", desc: "Acabados decorativos 3D",       icon: <Grid3x3 size={22} /> },
  { key: "otro",      label: "Otro",            desc: "Cuéntanos qué necesitas",       icon: <Wrench size={22} /> },
];

const PROPIEDADES = [
  { key: "casa",      label: "Casa",                icon: <Home size={22} /> },
  { key: "depto",     label: "Departamento",         icon: <Building2 size={22} /> },
  { key: "oficina",   label: "Oficina / Empresa",    icon: <Briefcase size={22} /> },
  { key: "local",     label: "Local comercial",      icon: <ShoppingBag size={22} /> },
  { key: "educacion", label: "Centro educacional",   icon: <GraduationCap size={22} /> },
  { key: "hospital",  label: "Hospital / Clínica",   icon: <HeartPulse size={22} /> },
  { key: "otro",      label: "Otro",                 icon: <HelpCircle size={22} /> },
];

const ESPACIOS_MAP = {
  casa: [
    { key: "Living",               label: "Living",               desc: "Sala principal",        icon: <Sofa size={18} /> },
    { key: "Comedor",              label: "Comedor",              desc: "Zona de comidas",       icon: <UtensilsCrossed size={18} /> },
    { key: "Cocina",               label: "Cocina",               desc: "Mesones y alacenas",    icon: <UtensilsCrossed size={18} /> },
    { key: "Dormitorio principal", label: "Dormitorio principal", desc: "Habitación master",     icon: <BedDouble size={18} /> },
    { key: "Dormitorio 2",         label: "Dormitorio 2",         desc: "Segunda habitación",    icon: <BedDouble size={18} /> },
    { key: "Dormitorio 3",         label: "Dormitorio 3",         desc: "Tercera habitación",    icon: <BedDouble size={18} /> },
    { key: "Baño",                 label: "Baño",                 desc: "Vanities y repisas",    icon: <Bath size={18} /> },
    { key: "Pasillo",              label: "Pasillo",              desc: "Circulaciones",         icon: <DoorOpen size={18} /> },
    { key: "Fachada exterior",     label: "Fachada exterior",     desc: "Exterior del inmueble", icon: <Home size={18} /> },
    { key: "Garage",               label: "Garage",               desc: "Estacionamiento",       icon: <Car size={18} /> },
  ],
  depto: [
    { key: "Living",               label: "Living",               desc: "Sala principal",      icon: <Sofa size={18} /> },
    { key: "Comedor",              label: "Comedor",              desc: "Zona de comidas",     icon: <UtensilsCrossed size={18} /> },
    { key: "Cocina",               label: "Cocina",               desc: "Mesones y alacenas",  icon: <UtensilsCrossed size={18} /> },
    { key: "Dormitorio principal", label: "Dormitorio principal", desc: "Habitación master",   icon: <BedDouble size={18} /> },
    { key: "Dormitorio 2",         label: "Dormitorio 2",         desc: "Segunda habitación",  icon: <BedDouble size={18} /> },
    { key: "Baño",                 label: "Baño",                 desc: "Vanities y repisas",  icon: <Bath size={18} /> },
    { key: "Pasillo",              label: "Pasillo",              desc: "Circulaciones",       icon: <DoorOpen size={18} /> },
  ],
  oficina: [
    { key: "Recepción",         label: "Recepción",         desc: "Área de entrada",        icon: <DoorOpen size={18} /> },
    { key: "Sala de reuniones", label: "Sala de reuniones", desc: "Salas de conferencia",   icon: <Tv size={18} /> },
    { key: "Oficinas",          label: "Oficinas",          desc: "Espacios de trabajo",    icon: <Briefcase size={18} /> },
    { key: "Baños",             label: "Baños",             desc: "Servicios higiénicos",   icon: <Bath size={18} /> },
    { key: "Pasillo",           label: "Pasillo",           desc: "Circulaciones",          icon: <DoorOpen size={18} /> },
    { key: "Fachada",           label: "Fachada",           desc: "Exterior del edificio",  icon: <Building2 size={18} /> },
  ],
  local: [
    { key: "Sala principal", label: "Sala principal", desc: "Área de atención",      icon: <ShoppingBag size={18} /> },
    { key: "Bodega",         label: "Bodega",         desc: "Almacenamiento",         icon: <FlipHorizontal size={18} /> },
    { key: "Baño",           label: "Baño",           desc: "Servicios higiénicos",   icon: <Bath size={18} /> },
    { key: "Fachada",        label: "Fachada",        desc: "Exterior del local",     icon: <Building2 size={18} /> },
  ],
  educacion: [
    { key: "Salas de clases", label: "Salas de clases", desc: "Aulas",                icon: <BookOpen size={18} /> },
    { key: "Pasillos",        label: "Pasillos",        desc: "Circulaciones",         icon: <DoorOpen size={18} /> },
    { key: "Baños",           label: "Baños",           desc: "Servicios higiénicos",  icon: <Bath size={18} /> },
    { key: "Fachada",         label: "Fachada",         desc: "Exterior del edificio", icon: <Building2 size={18} /> },
    { key: "Gimnasio",        label: "Gimnasio",        desc: "Área deportiva",        icon: <Dumbbell size={18} /> },
    { key: "Comedor",         label: "Comedor",         desc: "Casino o comedor",      icon: <UtensilsCrossed size={18} /> },
  ],
  hospital: [
    { key: "Habitaciones", label: "Habitaciones", desc: "Salas de pacientes", icon: <BedDouble size={18} /> },
    { key: "Pasillos",     label: "Pasillos",     desc: "Circulaciones",      icon: <DoorOpen size={18} /> },
    { key: "Baños",        label: "Baños",        desc: "Servicios",          icon: <Bath size={18} /> },
    { key: "Recepción",    label: "Recepción",    desc: "Área de entrada",    icon: <DoorOpen size={18} /> },
    { key: "Fachada",      label: "Fachada",      desc: "Exterior",           icon: <Building2 size={18} /> },
  ],
  otro: [],
};

const COMUNAS = [
  "Viña del Mar", "Valparaíso", "Quilpué", "Villa Alemana", "Concón", "Otra",
];

const TOTAL_STEPS = 5;

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
const getM2Hint = (val) => {
  const v = parseInt(val);
  if (v <= 30)  return "Espacio muy pequeño";
  if (v <= 60)  return "Departamento pequeño";
  if (v <= 100) return "Departamento o casa mediana";
  if (v <= 180) return "Casa grande";
  return "Proyecto de gran escala";
};

const isValidName  = (name)  => name.trim().length >= 3;
const isValidPhone = (phone) => /^(\+?56)?9\d{8}$/.test(phone.replace(/\s/g, ""));
const isValidEmail = (email) => {
  if (!email) return true;
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email.trim());
};
const isValidDate = ({ dia, mes, anio }) => {
  if (!dia && !mes && !anio) return true;
  const d = parseInt(dia), m = parseInt(mes), a = parseInt(anio);
  if (!d || !m || !a) return false;
  return d >= 1 && d <= 31 && m >= 1 && m <= 12 && a >= 2026 && a <= 2035;
};

const buildWhatsAppMessage = (data) => {
  const espaciosTexto = Object.entries(data.espacios)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join(", ");

  const fechaTexto =
    data.fecha?.dia && data.fecha?.mes && data.fecha?.anio
      ? `${data.fecha.dia}/${data.fecha.mes}/${data.fecha.anio}`
      : "Por definir";

  const msg = `
🏠 *Nueva solicitud de cotización*

📋 *Servicio:* ${SERVICIOS.find(s => s.key === data.servicio)?.label ?? data.servicio}
🏢 *Tipo de propiedad:* ${PROPIEDADES.find(p => p.key === data.propiedad)?.label ?? data.propiedad}
🛋️ *Espacios:* ${espaciosTexto || "No especificado"}
📐 *M² estimados:* ${data.metros ? data.metros + " m²" : "No especificado"}

👤 *Nombre:* ${data.nombre}
📱 *Teléfono:* ${data.telefono}
${data.email ? `📧 *Email:* ${data.email}` : ""}
📍 *Comuna:* ${data.comuna}
📅 *Fecha estimada:* ${fechaTexto}

💬 *Comentarios:* ${data.comentarios || "Sin comentarios"}
  `.trim();

  return encodeURIComponent(msg);
};

// ─────────────────────────────────────────────
//  COMPONENT
// ─────────────────────────────────────────────
export default function PresupuestoModal({ isOpen, onClose }) {
  const [step,         setStep]         = useState(1);
  const [enviado,      setEnviado]      = useState(false);
  const [enviando,     setEnviando]     = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const [data, setData] = useState({
    servicio:    "",
    propiedad:   "",
    espacios:    {},
    metros:      "",
    nombre:      "",
    telefono:    "",
    email:       "",
    comuna:      "",
    fecha:       { dia: "", mes: "", anio: "" },
    comentarios: "",
  });

  if (!isOpen) return null;

  const set = (key, val) => setData(d => ({ ...d, [key]: val }));

  const toggleEspacio = (key) =>
    setData(d => ({ ...d, espacios: { ...d.espacios, [key]: !d.espacios[key] } }));

  const canNext = () => {
    if (step === 1) return !!data.servicio;
    if (step === 2) return !!data.propiedad;
    if (step === 3) {
      if (data.propiedad === "otro") return data.comentarios.trim().length > 0;
      return Object.values(data.espacios).some(Boolean);
    }
    if (step === 4) {
      return (
        isValidName(data.nombre) &&
        isValidPhone(data.telefono) &&
        !!data.comuna &&
        isValidEmail(data.email)
      );
    }
    if (step === 5) return true;
    return false;
  };

  const handleEnviar = async () => {
    setEnviando(true);
    try {
      await emailjs.send(
        "imperio_romano",
        "template_5wvy8c8",
        {
          servicio:    SERVICIOS.find(s => s.key === data.servicio)?.label || data.servicio,
          propiedad:   PROPIEDADES.find(p => p.key === data.propiedad)?.label || data.propiedad,
          espacios:    Object.keys(data.espacios).filter(k => data.espacios[k]).join(", "),
          metros:      data.metros || "No especificado",
          nombre:      data.nombre,
          telefono:    data.telefono,
          email:       data.email || "No proporcionado",
          comuna:      data.comuna,
          fecha:       data.fecha.dia ? `${data.fecha.dia}/${data.fecha.mes}/${data.fecha.anio}` : "Por definir",
          comentarios: data.comentarios || "Sin comentarios",
        },
        "V9K8voJSN1A53nkjy"
      );

      const msg = buildWhatsAppMessage(data);
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
    setData({
      servicio: "", propiedad: "", espacios: {}, metros: "",
      nombre: "", telefono: "", email: "", comuna: "",
      fecha: { dia: "", mes: "", anio: "" }, comentarios: "",
    });
    onClose();
  };

  const espaciosDisponibles   = ESPACIOS_MAP[data.propiedad] ?? [];
  const espaciosSeleccionados = Object.entries(data.espacios).filter(([, v]) => v).map(([k]) => k);
  const espaciosCount         = espaciosSeleccionados.length;
  const fechaCompleta         = data.fecha.dia && data.fecha.mes && data.fecha.anio;
  const stepLabels            = ["Servicio", "Propiedad", "Espacios", "Contacto", "Resumen"];
  const metrosVal             = data.metros || 60;

  const inputBase  = "w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors";
  const inputError = "w-full bg-base-200 border border-red-400 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors";

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-base-100 rounded-2xl w-full max-w-lg shadow-2xl border border-base-300 overflow-hidden"
        onClick={e => e.stopPropagation()}
        style={{ animation: "slideUp 0.25s ease-out" }}
      >

        {/* ── HEADER ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-base-300">
          <div>
            <h2 className="font-bold text-lg">Solicitar cotización</h2>
            {!enviado && (
              <p className="text-xs opacity-50 mt-0.5">
                Paso {step} de {TOTAL_STEPS} — {stepLabels[step - 1]}
              </p>
            )}
          </div>
          <button onClick={handleClose} className="btn btn-ghost btn-sm btn-circle">
            <X size={18} />
          </button>
        </div>

        {/* ── PROGRESS ── */}
        {!enviado && (
          <>
            <div className="flex gap-1 px-6 pt-4">
              {stepLabels.map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full transition-all duration-500"
                  style={{
                    background: i + 1 <= step
                      ? "linear-gradient(90deg, #C9A84C, #E6B800)"
                      : "rgba(255,255,255,0.12)",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between px-6 pt-1 pb-3">
              {stepLabels.map((label, i) => (
                <span
                  key={i}
                  className="text-[10px] transition-all duration-300"
                  style={{
                    color: i + 1 === step ? "#E6B800" : i + 1 < step ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
                    fontWeight: i + 1 === step ? 600 : 400,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </>
        )}

        {/* ── CONTENT ── */}
        <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">

          {/* ── PANTALLA ÉXITO PREMIUM ── */}
          {enviado && (
            <div className="py-6 flex flex-col items-center text-center gap-5">
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(230,184,0,0.2), rgba(201,168,76,0.1))",
                    border: "2px solid rgba(230,184,0,0.4)",
                    animation: "pulseGold 2s ease-in-out infinite",
                  }}
                >
                  <CheckCircle2 size={40} style={{ color: "#E6B800" }} />
                </div>
                <Star size={12} style={{ color: "#E6B800", position: "absolute", top: -4, right: -2, animation: "twinkle 1.5s ease-in-out infinite" }} />
                <Star size={8}  style={{ color: "#C9A84C", position: "absolute", bottom: 0, left: -4, animation: "twinkle 2s ease-in-out infinite 0.5s" }} />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#E6B800" }}>
                  ¡Cotización enviada!
                </h3>
                <p className="text-sm opacity-70 max-w-xs leading-relaxed">
                  Recibimos tu solicitud con éxito. Nuestro equipo la revisará y te contactará en
                  <span className="font-semibold" style={{ color: "#E6B800" }}> menos de 24 horas</span>.
                </p>
              </div>

              <div
                className="w-full rounded-xl p-4 text-left"
                style={{ background: "rgba(230,184,0,0.07)", border: "1px solid rgba(230,184,0,0.2)" }}
              >
                <p className="text-xs opacity-50 mb-2 uppercase tracking-widest">También puedes</p>
                <p className="text-sm opacity-70">
                  Enviarnos el resumen directo por WhatsApp para una respuesta aún más rápida.
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #1ebe5d)",
                    color: "#fff",
                    boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                  }}
                >
                  <MessageCircle size={18} />
                  Enviar resumen por WhatsApp
                </a>
                <button
                  onClick={handleClose}
                  className="w-full py-3 rounded-xl font-medium text-sm opacity-50 hover:opacity-70 transition-opacity"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}

          {/* ── STEP 1 ── */}
          {!enviado && step === 1 && (
            <div>
              <h3 className="font-semibold mb-1">¿Qué servicio necesitas?</h3>
              <p className="text-xs opacity-50 mb-4">Selecciona el tipo de trabajo</p>
              <div className="grid grid-cols-2 gap-3">
                {SERVICIOS.map(s => (
                  <button key={s.key} onClick={() => set("servicio", s.key)}
                    className="p-4 rounded-xl border text-left transition-all duration-200"
                    style={{
                      borderColor: data.servicio === s.key ? "#E6B800" : "rgba(255,255,255,0.1)",
                      background:  data.servicio === s.key ? "rgba(230,184,0,0.1)" : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span className="block mb-2" style={{ color: "#E6B800" }}>{s.icon}</span>
                    <span className="text-sm font-medium block">{s.label}</span>
                    <span className="text-xs opacity-50 block mt-0.5">{s.desc}</span>
                    {data.servicio === s.key && <span className="text-xs mt-2 block" style={{ color: "#E6B800" }}>✓ Seleccionado</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 2 ── */}
          {!enviado && step === 2 && (
            <div>
              <h3 className="font-semibold mb-1">¿Qué tipo de propiedad es?</h3>
              <p className="text-xs opacity-50 mb-4">Esto nos ayuda a sugerirte los espacios correctos</p>
              <div className="grid grid-cols-2 gap-3">
                {PROPIEDADES.map(p => (
                  <button key={p.key} onClick={() => { set("propiedad", p.key); set("espacios", {}); }}
                    className="p-4 rounded-xl border text-left transition-all duration-200"
                    style={{
                      borderColor: data.propiedad === p.key ? "#E6B800" : "rgba(255,255,255,0.1)",
                      background:  data.propiedad === p.key ? "rgba(230,184,0,0.1)" : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span className="block mb-2" style={{ color: "#E6B800" }}>{p.icon}</span>
                    <span className="text-sm font-medium block">{p.label}</span>
                    {data.propiedad === p.key && <span className="text-xs mt-2 block" style={{ color: "#E6B800" }}>✓ Seleccionado</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 3 ── */}
          {!enviado && step === 3 && (
            <div>
              <h3 className="font-semibold mb-1">¿Qué espacios necesitas trabajar?</h3>
              <p className="text-xs opacity-50 mb-4">Puedes seleccionar varios</p>

              <div className="grid grid-cols-2 gap-2 mb-5">
                {espaciosDisponibles.map(esp => {
                  const selected = !!data.espacios[esp.key];
                  return (
                    <button key={esp.key} onClick={() => toggleEspacio(esp.key)}
                      className="p-3 rounded-xl border text-left transition-all duration-200 flex items-center gap-3"
                      style={{
                        borderColor: selected ? "#E6B800" : "rgba(255,255,255,0.1)",
                        background:  selected ? "rgba(230,184,0,0.1)" : "rgba(255,255,255,0.03)",
                      }}
                    >
                      <span style={{ color: selected ? "#E6B800" : "rgba(255,255,255,0.35)", flexShrink: 0 }}>{esp.icon}</span>
                      <div className="min-w-0">
                        <span className="text-sm font-medium block truncate">{esp.label}</span>
                        <span className="text-xs opacity-40 block truncate">{esp.desc}</span>
                      </div>
                      {selected && <span className="ml-auto flex-shrink-0 text-xs" style={{ color: "#E6B800" }}>✓</span>}
                    </button>
                  );
                })}
              </div>

              {data.propiedad === "otro" && (
                <div className="mt-4">
                  <label className="text-xs opacity-50 block mb-1 ml-1">Describe el espacio o proyecto *</label>
                  <textarea
                    placeholder="Ej: quincho, terraza, taller, galpón, etc."
                    value={data.comentarios}
                    onChange={e => set("comentarios", e.target.value)}
                    rows={3} className={inputBase}
                  />
                </div>
              )}

              {espaciosCount > 0 && (
                <div className="text-xs rounded-lg px-3 py-2 mb-4 flex items-center gap-2"
                  style={{ background: "rgba(230,184,0,0.08)", color: "#E6B800", border: "1px solid rgba(230,184,0,0.2)" }}>
                  <CheckCircle2 size={12} />
                  {espaciosCount === 1 ? "1 espacio seleccionado" : `${espaciosCount} espacios seleccionados`}
                </div>
              )}

              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-sm font-medium">M² aproximados</span>
                    <span className="text-xs opacity-40 ml-2">(opcional)</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold" style={{ color: "#E6B800" }}>{metrosVal}</span>
                    <span className="text-xs opacity-50">m²</span>
                  </div>
                </div>
                <input type="range" min="10" max="500" step="5"
                  value={metrosVal} onChange={e => set("metros", e.target.value)}
                  className="w-full" style={{ accentColor: "#E6B800" }}
                />
                <div className="flex justify-between mt-2">
                  <span className="text-xs opacity-30">10 m²</span>
                  <span className="text-xs" style={{ color: "#E6B800", opacity: 0.7 }}>{getM2Hint(metrosVal)}</span>
                  <span className="text-xs opacity-30">500 m²</span>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 4 ── */}
          {!enviado && step === 4 && (
            <div className="flex flex-col gap-3">
              <div className="mb-1">
                <h3 className="font-semibold">Tus datos de contacto</h3>
                <p className="text-xs opacity-50 mt-0.5">Sin compromiso. Te respondemos en menos de 24 h.</p>
              </div>

              <div>
                <input placeholder="Nombre completo *" value={data.nombre}
                  onChange={e => set("nombre", e.target.value)}
                  className={data.nombre && !isValidName(data.nombre) ? inputError : inputBase}
                />
                {data.nombre && !isValidName(data.nombre) && (
                  <span className="text-xs text-red-400 ml-1">El nombre debe tener al menos 3 caracteres</span>
                )}
              </div>

              <div>
                <input placeholder="Teléfono / WhatsApp +56912345678 *" value={data.telefono}
                  onChange={e => set("telefono", e.target.value.replace(/[^0-9+]/g, ""))}
                  className={data.telefono && !isValidPhone(data.telefono) ? inputError : inputBase}
                />
                {data.telefono && !isValidPhone(data.telefono) && (
                  <span className="text-xs text-red-400 ml-1">Ingresa un teléfono válido (9 dígitos, puede incluir +569)</span>
                )}
              </div>

              <div>
                <input placeholder="Correo electrónico (opcional)" type="email" value={data.email}
                  onChange={e => set("email", e.target.value)}
                  className={data.email && !isValidEmail(data.email) ? inputError : inputBase}
                />
                {data.email && !isValidEmail(data.email) ? (
                  <span className="text-xs text-red-400 ml-1">Correo inválido — debe tener formato nombre@dominio.com</span>
                ) : (
                  <span className="text-xs opacity-40 ml-1">Para enviarte la cotización también por email</span>
                )}
              </div>

              <select value={data.comuna} onChange={e => set("comuna", e.target.value)} className={inputBase}>
                <option value="">Selecciona tu comuna *</option>
                {COMUNAS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>

              <div>
                <label className="text-xs opacity-50 block mb-2 ml-1">Fecha estimada de inicio (opcional)</label>
                <div className="flex gap-2">
                  {[
                    { key: "dia", placeholder: "Día", max: 2 },
                    { key: "mes", placeholder: "Mes", max: 2 },
                    { key: "anio", placeholder: "Año", max: 4 },
                  ].map(({ key, placeholder, max }) => (
                    <input key={key} placeholder={placeholder} maxLength={max} value={data.fecha[key]}
                      onChange={e => {
                        const v = e.target.value.replace(/\D/g, "");
                        set("fecha", { ...data.fecha, [key]: v });
                      }}
                      className={`w-1/3 bg-base-200 border rounded-xl px-3 py-3 text-sm text-center focus:outline-none focus:border-yellow-500 transition-colors ${fechaCompleta && !isValidDate(data.fecha) ? "border-red-400" : "border-base-300"}`}
                    />
                  ))}
                </div>
                {(data.fecha.dia || data.fecha.mes || data.fecha.anio) && !isValidDate(data.fecha) && (
                  <span className="text-xs text-red-400 ml-1 mt-1 block">Fecha inválida</span>
                )}
              </div>

              <div>
                <label className="text-xs opacity-50 block mb-1 ml-1">Comentarios <span className="opacity-60">(opcional)</span></label>
                <textarea placeholder="Comentarios adicionales (opcional)" value={data.comentarios}
                  onChange={e => set("comentarios", e.target.value)}
                  rows={3} className={`${inputBase} resize-none`}
                />
              </div>
            </div>
          )}

          {/* ── STEP 5 ── */}
          {!enviado && step === 5 && (
            <div>
              <h3 className="font-semibold mb-1">Revisa tu solicitud</h3>
              <p className="text-xs opacity-50 mb-4">Confirma que todo esté correcto antes de enviar</p>
              <div className="flex flex-col gap-3">

                <div className="flex items-center justify-between p-3 rounded-xl bg-base-200 border border-base-300">
                  <span className="text-xs opacity-50 uppercase tracking-wider">Servicio</span>
                  <span className="text-sm font-semibold flex items-center gap-2">
                    <span style={{ color: "#E6B800" }}>{SERVICIOS.find(s => s.key === data.servicio)?.icon}</span>
                    {SERVICIOS.find(s => s.key === data.servicio)?.label}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-base-200 border border-base-300">
                  <span className="text-xs opacity-50 uppercase tracking-wider">Propiedad</span>
                  <span className="text-sm font-semibold flex items-center gap-2">
                    <span style={{ color: "#E6B800" }}>{PROPIEDADES.find(p => p.key === data.propiedad)?.icon}</span>
                    {PROPIEDADES.find(p => p.key === data.propiedad)?.label}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-base-200 border border-base-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs opacity-50 uppercase tracking-wider">Espacios</span>
                    {data.metros && <span className="text-xs opacity-50">~{data.metros} m² · {getM2Hint(data.metros)}</span>}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {espaciosSeleccionados.map(e => (
                      <span key={e} className="text-xs px-2 py-1 rounded-full"
                        style={{ background: "rgba(230,184,0,0.15)", color: "#E6B800", border: "1px solid rgba(230,184,0,0.3)" }}>
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-base-200 border border-base-300">
                  <span className="text-xs opacity-50 uppercase tracking-wider block mb-2">Contacto</span>
                  <p className="text-sm font-semibold">{data.nombre}</p>
                  <p className="text-sm opacity-60">{data.telefono} · {data.comuna}</p>
                  {data.email && <p className="text-sm opacity-60">📧 {data.email}</p>}
                  {fechaCompleta && <p className="text-sm opacity-60 mt-1">📅 {data.fecha.dia}/{data.fecha.mes}/{data.fecha.anio}</p>}
                  {data.comentarios && <p className="text-sm opacity-60 mt-1 italic">"{data.comentarios}"</p>}
                </div>

              </div>
              <p className="text-xs opacity-40 text-center mt-4">
                Al enviar se abrirá WhatsApp con tu solicitud lista para confirmar
              </p>
            </div>
          )}

        </div>

        {/* ── FOOTER ── */}
        {!enviado && (
          <div className="px-6 py-4 border-t border-base-300 flex items-center gap-3">
            {step > 1 && (
              <button onClick={() => setStep(s => s - 1)} className="btn btn-ghost btn-sm gap-1">
                <ChevronLeft size={16} /> Volver
              </button>
            )}
            <div className="flex-1" />
            {step === 3 && espaciosCount > 0 && (
              <span className="text-xs opacity-50">{espaciosCount} seleccionado{espaciosCount !== 1 ? "s" : ""}</span>
            )}
            {step < TOTAL_STEPS ? (
              <button
                onClick={() => { if (canNext()) setStep(s => s + 1); }}
                disabled={!canNext()}
                className="btn btn-sm gap-1 px-6 rounded-xl disabled:opacity-30 transition-all"
                style={canNext() ? { background: "linear-gradient(135deg, #E6B800, #C9A84C)", color: "#0A0A0A" } : {}}
              >
                Continuar <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleEnviar}
                disabled={enviando}
                className="btn btn-sm gap-2 px-6 rounded-xl disabled:opacity-60"
                style={{ background: "linear-gradient(135deg, #E6B800, #C9A84C)", color: "#0A0A0A" }}
              >
                {enviando ? "Enviando..." : "Enviar solicitud"}
                {!enviando && <Send size={14} />}
              </button>
            )}
          </div>
        )}

      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(230,184,0,0.3); }
          50%       { box-shadow: 0 0 0 12px rgba(230,184,0,0); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.6); }
        }
      `}</style>
    </div>
  );
}
  