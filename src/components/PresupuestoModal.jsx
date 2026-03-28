import emailjs from "@emailjs/browser";
import { useState } from "react";
import { X, ChevronRight, ChevronLeft, CheckCircle, Send } from "lucide-react";
import {
  Paintbrush, Layers, Sparkles, Grid3x3, Wrench,
  Home, Building2, Briefcase, ShoppingBag, GraduationCap,
  HeartPulse, HelpCircle
} from "lucide-react";

// ─────────────────────────────────────────────
//  CONFIG
// ─────────────────────────────────────────────
const WHATSAPP_NUMBER = "56944235539";

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────
const SERVICIOS = [
  { key: "pintado", label: "Solo pintado", icon: <Paintbrush size={22} /> },
  { key: "yeso", label: "Solo yeso", icon: <Layers size={22} /> },
  { key: "yeso+pint", label: "Yeso + pintado", icon: <Sparkles size={22} /> },
  { key: "paneles3d", label: "Yeso Paneles 3D", icon: <Grid3x3 size={22} /> },
  { key: "otro", label: "Otro", icon: <Wrench size={22} /> },
];

const PROPIEDADES = [
  { key: "casa", label: "Casa", icon: <Home size={22} /> },
  { key: "depto", label: "Departamento", icon: <Building2 size={22} /> },
  { key: "oficina", label: "Oficina / Empresa", icon: <Briefcase size={22} /> },
  { key: "local", label: "Local comercial", icon: <ShoppingBag size={22} /> },
  { key: "educacion", label: "Centro educacional", icon: <GraduationCap size={22} /> },
  { key: "hospital", label: "Hospital / Clínica", icon: <HeartPulse size={22} /> },
  { key: "otro", label: "Otro", icon: <HelpCircle size={22} /> },
];

const ESPACIOS_MAP = {
  casa: ["Living", "Comedor", "Cocina", "Dormitorio principal", "Dormitorio 2", "Dormitorio 3", "Baño", "Pasillo", "Fachada exterior", "Garage"],
  depto: ["Living", "Comedor", "Cocina", "Dormitorio principal", "Dormitorio 2", "Baño", "Pasillo"],
  oficina: ["Recepción", "Sala de reuniones", "Oficinas", "Baños", "Pasillo", "Fachada"],
  local: ["Sala principal", "Bodega", "Baño", "Fachada exterior"],
  educacion: ["Salas de clases", "Pasillos", "Baños", "Fachada", "Gimnasio", "Comedor"],
  hospital: ["Habitaciones", "Pasillos", "Baños", "Recepción", "Fachada"],
  otro: ["Espacio 1", "Espacio 2", "Espacio 3"],
};

const COMUNAS = [
  "Viña del Mar", "Valparaíso", "Quilpué", "Villa Alemana", "Concón", "Otra",
];

const TOTAL_STEPS = 5; // ahora con paso de resumen

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
function buildWhatsAppMessage(data) {
  const espaciosTexto = Object.entries(data.espacios)
    .filter(([, v]) => v)
    .map(([k]) => k)
    .join(", ");

  const msg = `
🏠 *Nueva solicitud de cotización*

📋 *Servicio:* ${SERVICIOS.find(s => s.key === data.servicio)?.label ?? data.servicio}
🏢 *Tipo de propiedad:* ${PROPIEDADES.find(p => p.key === data.propiedad)?.label ?? data.propiedad}
🛋️ *Espacios:* ${espaciosTexto || "No especificado"}
📐 *M² estimados:* ${data.metros ? data.metros + " m²" : "No especificado"}

👤 *Nombre:* ${data.nombre}
📱 *Teléfono:* ${data.telefono}
📍 *Comuna:* ${data.comuna}
📅 *Fecha estimada:* ${data.fecha || "Por definir"}

💬  *Comentarios:* ${data.comentarios || "Sin comentarios"}
  `.trim();

  return encodeURIComponent(msg);
}

// ─────────────────────────────────────────────
//  MAIN COMPONENT
// ─────────────────────────────────────────────
export default function PresupuestoModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [enviado, setEnviado] = useState(false);

  const [data, setData] = useState({
    servicio: "",
    propiedad: "",
    espacios: {},
    metros: "",
    nombre: "",
    telefono: "",
    comuna: "",
    fecha: "",
    comentarios: "",
  });

  if (!isOpen) return null;

  const set = (key, val) => setData(d => ({ ...d, [key]: val }));

  const toggleEspacio = (esp) => {
    setData(d => ({
      ...d,
      espacios: { ...d.espacios, [esp]: !d.espacios[esp] },
    }));
  };

  const canNext = () => {
    if (step === 1) return !!data.servicio;
    if (step === 2) return !!data.propiedad;
    if (step === 3) return Object.values(data.espacios).some(Boolean);
    if (step === 4) return !!data.nombre && !!data.telefono && !!data.comuna;
    if (step === 5) return true;
    return false;
  };

  const handleEnviar = async () => {
    try {
      await emailjs.send(
        "imperio_romano",
        "template_5wvy8c8",
        {
          servicio: data.servicio,
          propiedad: data.propiedad,
          espacios: Object.keys(data.espacios)
            .filter(k => data.espacios[k])
            .join(", "),
          metros: data.metros,
          nombre: data.nombre,
          telefono: data.telefono,
          comuna: data.comuna,
          fecha: data.fecha,
          comentarios: data.comentarios,
        },
        "V9K8voJSN1A53nkjy"
      );

      const msg = buildWhatsAppMessage(data);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");

      setEnviado(true);

    } catch (error) {
      console.error("Error enviando:", error);
      alert("Hubo un error al enviar. Intenta nuevamente.");
    }
  };


  const handleClose = () => {
    setStep(1);
    setEnviado(false);
    setData({ servicio: "", propiedad: "", espacios: {}, metros: "", nombre: "", telefono: "", comuna: "", fecha: "", comentarios: "" });
    onClose();
  };

  const espaciosDisponibles = ESPACIOS_MAP[data.propiedad] ?? [];
  const espaciosSeleccionados = Object.entries(data.espacios).filter(([, v]) => v).map(([k]) => k);

  const stepLabels = ["Servicio", "Propiedad", "Espacios", "Contacto", "Resumen"];

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
        {/* HEADER */}
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

        {/* PROGRESS BAR */}
        {!enviado && (
          <>
            <div className="h-1 bg-base-300">
              <div
                className="h-1 transition-all duration-500"
                style={{
                  width: `${(step / TOTAL_STEPS) * 100}%`,
                  background: "linear-gradient(90deg, #C9A84C, #E6B800)",
                }}
              />
            </div>
            {/* Step dots */}
            <div className="flex justify-center gap-2 py-3">
              {stepLabels.map((label, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      background: i + 1 <= step ? "#E6B800" : "rgba(255,255,255,0.15)",
                      transform: i + 1 === step ? "scale(1.4)" : "scale(1)",
                    }}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {/* CONTENT */}
        <div className="px-6 py-4 max-h-[60vh] overflow-y-auto">

          {/* ── ENVIADO ── */}
          {enviado && (
            <div className="text-center py-8 flex flex-col items-center gap-4">
              <CheckCircle size={56} style={{ color: "#E6B800" }} />
              <h3 className="text-xl font-bold">¡Solicitud enviada!</h3>
              <p className="opacity-60 text-sm max-w-xs">
                Se abrió WhatsApp con tu información. Te contactaremos en menos de 24 horas.
              </p>
              <button onClick={handleClose} className="btn btn-neutral mt-2">
                Cerrar
              </button>
            </div>
          )}

          {/* ── STEP 1 — SERVICIO ── */}
          {!enviado && step === 1 && (
            <div>
              <h3 className="font-semibold mb-4">¿Qué servicio necesitas?</h3>
              <div className="grid grid-cols-2 gap-3">
                {SERVICIOS.map(s => (
                  <button
                    key={s.key}
                    onClick={() => set("servicio", s.key)}
                    className="p-4 rounded-xl border text-left transition-all duration-200"
                    style={{
                      borderColor: data.servicio === s.key ? "#E6B800" : "rgba(255,255,255,0.1)",
                      background: data.servicio === s.key ? "rgba(230,184,0,0.1)" : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span className="block mb-2" style={{ color: "#E6B800" }}>{s.icon}</span>
                    <span className="text-sm font-medium">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 2 — PROPIEDAD ── */}
          {!enviado && step === 2 && (
            <div>
              <h3 className="font-semibold mb-4">¿Qué tipo de propiedad es?</h3>
              <div className="grid grid-cols-2 gap-3">
                {PROPIEDADES.map(p => (
                  <button
                    key={p.key}
                    onClick={() => { set("propiedad", p.key); set("espacios", {}); }}
                    className="p-4 rounded-xl border text-left transition-all duration-200"
                    style={{
                      borderColor: data.propiedad === p.key ? "#E6B800" : "rgba(255,255,255,0.1)",
                      background: data.propiedad === p.key ? "rgba(230,184,0,0.1)" : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span className="block mb-2" style={{ color: "#E6B800" }}>{p.icon}</span>
                    <span className="text-sm font-medium">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 3 — ESPACIOS ── */}
          {!enviado && step === 3 && (
            <div>
              <h3 className="font-semibold mb-1">
                ¿En qué áreas necesitas el servicio?
              </h3>
              <p className="text-xs opacity-50 mb-4">
                Puedes seleccionar uno o varios espacios
              </p>

              {/* GRID ESPACIOS */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {espaciosDisponibles.map(esp => (
                  <button
                    key={esp}
                    onClick={() => toggleEspacio(esp)}
                    className="p-3 rounded-xl border text-sm text-left transition-all duration-200"
                    style={{
                      borderColor: data.espacios[esp] ? "#E6B800" : "rgba(255,255,255,0.1)",
                      background: data.espacios[esp] ? "rgba(230,184,0,0.1)" : "rgba(255,255,255,0.03)",
                      fontWeight: data.espacios[esp] ? 600 : 400,
                    }}
                  >
                    {data.espacios[esp] ? "✓ " : ""}
                    {esp}
                  </button>
                ))}
              </div>

              {/* 🟡 RESUMEN DINÁMICO */}
              {espaciosSeleccionados.length > 0 && (
                <p className="text-sm mb-4 opacity-70">
                  Has seleccionado: {espaciosSeleccionados.join(", ")} (
                  {espaciosSeleccionados.length} espacio
                  {espaciosSeleccionados.length > 1 ? "s" : ""}
                  )
                </p>
              )}

              {/* SLIDER */}
              <div>
                <label className="text-sm opacity-60 mb-1 block">
                  Superficie total aproximada (m²)
                  <span className="opacity-50"> (opcional)</span>
                </label>

                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={data.metros || 60}
                    onChange={e => set("metros", e.target.value)}
                    className="flex-1"
                  />

                  <span className="text-sm font-semibold min-w-[52px] text-right">
                    {data.metros || 60} m²
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 4 — CONTACTO ── */}
          {!enviado && step === 4 && (
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold mb-1">Tus datos de contacto</h3>
              <input
                placeholder="Nombre completo *"
                value={data.nombre}
                onChange={e => set("nombre", e.target.value)}
                className="w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm
                           focus:outline-none transition-colors"
                style={{ focusBorderColor: "#E6B800" }}
              />
              <input
                placeholder="Teléfono / WhatsApp *"
                value={data.telefono}
                onChange={e => set("telefono", e.target.value)}
                className="w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm
                           focus:outline-none transition-colors"
              />
              <select
                value={data.comuna}
                onChange={e => set("comuna", e.target.value)}
                className="w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm
                           focus:outline-none transition-colors"
              >
                <option value="">Selecciona tu comuna *</option>
                {COMUNAS.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input
                type="date"
                value={data.fecha}
                onChange={e => set("fecha", e.target.value)}
                className="w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm
                           focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Comentarios adicionales (opcional)"
                value={data.comentarios}
                onChange={e => set("comentarios", e.target.value)}
                rows={3}
                className="w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm
                           focus:outline-none transition-colors resize-none"
              />
              <p className="text-xs opacity-40 text-center">
                Te contactaremos en menos de 24 horas. Sin compromiso.
              </p>
            </div>
          )}

          {/* ── STEP 5 — RESUMEN ── */}
          {!enviado && step === 5 && (
            <div>
              <h3 className="font-semibold mb-4">Revisa tu solicitud</h3>
              <div className="flex flex-col gap-3">

                {/* Servicio */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-base-200 border border-base-300">
                  <span className="text-xs opacity-50 uppercase tracking-wider">Servicio</span>
                  <span className="text-sm font-semibold">
                    {SERVICIOS.find(s => s.key === data.servicio)?.icon} {SERVICIOS.find(s => s.key === data.servicio)?.label}
                  </span>
                </div>

                {/* Propiedad */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-base-200 border border-base-300">
                  <span className="text-xs opacity-50 uppercase tracking-wider">Propiedad</span>
                  <span className="text-sm font-semibold">
                    {PROPIEDADES.find(p => p.key === data.propiedad)?.icon} {PROPIEDADES.find(p => p.key === data.propiedad)?.label}
                  </span>
                </div>

                {/* Espacios */}
                <div className="p-3 rounded-xl bg-base-200 border border-base-300">
                  <span className="text-xs opacity-50 uppercase tracking-wider block mb-2">Espacios</span>
                  <div className="flex flex-wrap gap-1.5">
                    {espaciosSeleccionados.map(e => (
                      <span
                        key={e}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{ background: "rgba(230,184,0,0.15)", color: "#E6B800", border: "1px solid rgba(230,184,0,0.3)" }}
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                  {data.metros && (
                    <p className="text-xs opacity-50 mt-2">~{data.metros} m²</p>
                  )}
                </div>

                {/* Contacto */}
                <div className="p-3 rounded-xl bg-base-200 border border-base-300">
                  <span className="text-xs opacity-50 uppercase tracking-wider block mb-2">Contacto</span>
                  <p className="text-sm font-semibold">{data.nombre}</p>
                  <p className="text-sm opacity-60">{data.telefono} · {data.comuna}</p>
                  {data.fecha && <p className="text-sm opacity-60">📅 {data.fecha}</p>}
                  {data.comentarios && <p className="text-sm opacity-60 mt-1 italic">"{data.comentarios}"</p>}
                </div>

              </div>

              <p className="text-xs opacity-40 text-center mt-4">
                Al continuar se abrirá WhatsApp con tu solicitud lista para enviar
              </p>
            </div>
          )}

        </div>

        {/* FOOTER — BOTONES */}
        {!enviado && (
          <div className="px-6 py-4 border-t border-base-300 flex gap-3">
            {step > 1 && (
              <button onClick={() => setStep(s => s - 1)} className="btn btn-ghost btn-sm gap-1">
                <ChevronLeft size={16} />
                Volver
              </button>
            )}
            <div className="flex-1" />
            {step < TOTAL_STEPS ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canNext()}
                className="btn btn-sm gap-1 px-6 rounded-xl disabled:opacity-30 transition-all"
                style={canNext() ? {
                  background: "linear-gradient(135deg, #E6B800, #C9A84C)",
                  color: "#0A0A0A",
                } : {}}
              >
                Continuar
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleEnviar}
                className="btn btn-sm gap-2 px-6 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #E6B800, #C9A84C)",
                  color: "#0A0A0A",
                }}
              >
                Enviar por WhatsApp
                <Send size={14} />
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
      `}</style>
    </div>
  );
}
