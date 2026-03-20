import { useState } from "react";
import { X, ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

// ─────────────────────────────────────────────
//  CONFIG
// ─────────────────────────────────────────────
const WHATSAPP_NUMBER = "56944235539";

// ─────────────────────────────────────────────
//  DATA
// ─────────────────────────────────────────────
const SERVICIOS = [
  { key: "pintado",    label: "Solo pintado",       icon: "🎨" },
  { key: "yeso",       label: "Solo yeso",           icon: "🪣" },
  { key: "yeso+pint",  label: "Yeso + pintado",      icon: "✨" },
  { key: "otro",       label: "Otro",                icon: "🔧" },
];

const PROPIEDADES = [
  { key: "casa",       label: "Casa",                icon: "🏠" },
  { key: "depto",      label: "Departamento",        icon: "🏢" },
  { key: "oficina",    label: "Oficina / Empresa",   icon: "💼" },
  { key: "local",      label: "Local comercial",     icon: "🏪" },
  { key: "educacion",  label: "Centro educacional",  icon: "🏫" },
  { key: "hospital",   label: "Hospital / Clínica",  icon: "🏥" },
  { key: "otro",       label: "Otro",                icon: "🔧" },
];

const ESPACIOS_MAP = {
  casa:      ["Living", "Comedor", "Cocina", "Dormitorio principal", "Dormitorio 2", "Dormitorio 3", "Baño", "Pasillo", "Fachada exterior", "Garage"],
  depto:     ["Living", "Comedor", "Cocina", "Dormitorio principal", "Dormitorio 2", "Baño", "Pasillo"],
  oficina:   ["Recepción", "Sala de reuniones", "Oficinas", "Baños", "Pasillo", "Fachada"],
  local:     ["Sala principal", "Bodega", "Baño", "Fachada exterior"],
  educacion: ["Salas de clases", "Pasillos", "Baños", "Fachada", "Gimnasio", "Comedor"],
  hospital:  ["Habitaciones", "Pasillos", "Baños", "Recepción", "Fachada"],
  otro:      ["Espacio 1", "Espacio 2", "Espacio 3"],
};

const COMUNAS = [
  "Viña del Mar", "Valparaíso", "Quilpué", "Villa Alemana", "Concón", "Otra",
];

const TOTAL_STEPS = 4;

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

💬 *Comentarios:* ${data.comentarios || "Sin comentarios"}
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
    servicio:     "",
    propiedad:    "",
    espacios:     {},
    metros:       "",
    nombre:       "",
    telefono:     "",
    comuna:       "",
    fecha:        "",
    comentarios:  "",
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
    return false;
  };

  const handleEnviar = () => {
    const msg = buildWhatsAppMessage(data);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setEnviado(true);
  };

  const handleClose = () => {
    setStep(1);
    setEnviado(false);
    setData({ servicio: "", propiedad: "", espacios: {}, metros: "", nombre: "", telefono: "", comuna: "", fecha: "", comentarios: "" });
    onClose();
  };

  const espaciosDisponibles = ESPACIOS_MAP[data.propiedad] ?? [];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-base-100 rounded-2xl w-full max-w-lg shadow-2xl border border-base-300 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-base-300">
          <div>
            <h2 className="font-bold text-lg">Solicitar cotización</h2>
            {!enviado && (
              <p className="text-xs opacity-50 mt-0.5">Paso {step} de {TOTAL_STEPS}</p>
            )}
          </div>
          <button onClick={handleClose} className="btn btn-ghost btn-sm btn-circle">
            <X size={18} />
          </button>
        </div>

        {/* PROGRESS BAR */}
        {!enviado && (
          <div className="h-1 bg-base-300">
            <div
              className="h-1 transition-all duration-500"
              style={{
                width: `${(step / TOTAL_STEPS) * 100}%`,
                background: "linear-gradient(90deg, #C9A84C, #E6B800)",
              }}
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="px-6 py-6 max-h-[65vh] overflow-y-auto">

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
                    className={[
                      "p-4 rounded-xl border text-left transition-all duration-200",
                      data.servicio === s.key
                        ? "border-yellow-500 bg-yellow-500/10"
                        : "border-base-300 hover:border-base-content/30 bg-base-200",
                    ].join(" ")}
                  >
                    <span className="text-2xl block mb-2">{s.icon}</span>
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
                    onClick={() => {
                      set("propiedad", p.key);
                      set("espacios", {});
                    }}
                    className={[
                      "p-4 rounded-xl border text-left transition-all duration-200",
                      data.propiedad === p.key
                        ? "border-yellow-500 bg-yellow-500/10"
                        : "border-base-300 hover:border-base-content/30 bg-base-200",
                    ].join(" ")}
                  >
                    <span className="text-2xl block mb-2">{p.icon}</span>
                    <span className="text-sm font-medium">{p.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── STEP 3 — ESPACIOS ── */}
          {!enviado && step === 3 && (
            <div>
              <h3 className="font-semibold mb-1">¿Qué espacios necesitas trabajar?</h3>
              <p className="text-xs opacity-50 mb-4">Puedes seleccionar varios</p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {espaciosDisponibles.map(esp => (
                  <button
                    key={esp}
                    onClick={() => toggleEspacio(esp)}
                    className={[
                      "p-3 rounded-xl border text-sm text-left transition-all duration-200",
                      data.espacios[esp]
                        ? "border-yellow-500 bg-yellow-500/10 font-medium"
                        : "border-base-300 hover:border-base-content/30 bg-base-200",
                    ].join(" ")}
                  >
                    {data.espacios[esp] ? "✓ " : ""}{esp}
                  </button>
                ))}
              </div>

              {/* M² opcional */}
              <div>
                <label className="text-sm opacity-60 mb-1 block">
                  M² aproximados <span className="opacity-50">(opcional)</span>
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
                           focus:outline-none focus:border-yellow-500 transition-colors"
              />

              <input
                placeholder="Teléfono / WhatsApp *"
                value={data.telefono}
                onChange={e => set("telefono", e.target.value)}
                className="w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:border-yellow-500 transition-colors"
              />

              <select
                value={data.comuna}
                onChange={e => set("comuna", e.target.value)}
                className="w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:border-yellow-500 transition-colors"
              >
                <option value="">Selecciona tu comuna *</option>
                {COMUNAS.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <input
                type="date"
                value={data.fecha}
                onChange={e => set("fecha", e.target.value)}
                className="w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:border-yellow-500 transition-colors"
              />

              <textarea
                placeholder="Comentarios adicionales (opcional)"
                value={data.comentarios}
                onChange={e => set("comentarios", e.target.value)}
                rows={3}
                className="w-full bg-base-200 border border-base-300 rounded-xl px-4 py-3 text-sm
                           focus:outline-none focus:border-yellow-500 transition-colors resize-none"
              />

              <p className="text-xs opacity-40 text-center">
                Te contactaremos en menos de 24 horas. Sin compromiso.
              </p>
            </div>
          )}

        </div>

        {/* FOOTER — BOTONES */}
        {!enviado && (
          <div className="px-6 py-4 border-t border-base-300 flex gap-3">
            {step > 1 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="btn btn-ghost btn-sm gap-1"
              >
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
                disabled={!canNext()}
                className="btn btn-sm gap-2 px-6 rounded-xl disabled:opacity-30"
                style={canNext() ? {
                  background: "linear-gradient(135deg, #E6B800, #C9A84C)",
                  color: "#0A0A0A",
                } : {}}
              >
                Enviar por WhatsApp
                <span>📲</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
