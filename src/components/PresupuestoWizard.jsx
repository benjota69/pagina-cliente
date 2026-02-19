import { useState } from "react";

export default function PresupuestoWizard({ onClose }) {
  const [step, setStep] = useState(1);
  const [tipo, setTipo] = useState("Interior");
  const [metros, setMetros] = useState(60);
  const [noSabe, setNoSabe] = useState(false);
  const [evaluacion, setEvaluacion] = useState("fotos");

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h2 className="text-2xl font-bold text-left">Solicitar evaluación</h2>
            <p className="text-gray-500 mb-6 text-sm">
              Cuéntanos tu proyecto y te contactaremos con una evaluación profesional
            </p>
          </div>

          <div>
            <button
              onClick={() => onClose && onClose()}
              className="text-gray-400 hover:text-gray-600 ml-4"
              aria-label="Cerrar formulario"
            >
              ✕
            </button>
          </div>
        </div>

        {/* STEP 1 — PROYECTO */}
        {step === 1 && (
          <>
            <textarea
              placeholder="Ej: Pintar living y comedor, paredes blancas, algunas grietas..."
              className="w-full border rounded-xl p-3 mb-6"
              rows={3}
            />

            <label className="block mb-2 font-medium">Tipo de trabajo</label>
            <select
              className="w-full border rounded-xl p-3 mb-4"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option>Interior</option>
              <option>Exterior</option>
              <option>Terminaciones</option>
              <option>Reparaciones</option>
            </select>

            {/* M2 OPCIONAL */}
            <label className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                checked={noSabe}
                onChange={() => setNoSabe(!noSabe)}
              />
              No sé cuántos m² necesito
            </label>

            {!noSabe && (
              <>
                <p className="text-sm mb-2">
                  Metros aproximados: <b>{metros} m²</b>
                </p>
                <input
                  type="range"
                  min="10"
                  max="300"
                  value={metros}
                  onChange={(e) => setMetros(Number(e.target.value))}
                  className="w-full mb-6"
                />
                <p className="text-xs text-gray-400 mb-4">
                  Este dato es opcional y ayuda a estimar el trabajo
                </p>
              </>
            )}

            <button
              onClick={next}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Continuar
            </button>
          </>
        )}

        {/* STEP 2 — FOTOS / EVALUACIÓN */}
        {step === 2 && (
          <>
            <label className="block mb-2 font-medium">
              Adjuntar fotos (opcional)
            </label>
            <input type="file" multiple className="w-full mb-6" />

            <p className="mb-3 font-medium">¿Cómo deseas la evaluación?</p>

            <div className="flex gap-3 mb-6">
              <button
                type="button"
                onClick={() => setEvaluacion("fotos")}
                className={`flex-1 p-3 rounded-xl border transition ${
                  evaluacion === "fotos"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                Evaluación por fotos
              </button>

              <button
                type="button"
                onClick={() => setEvaluacion("visita")}
                className={`flex-1 p-3 rounded-xl border transition ${
                  evaluacion === "visita"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                Agendar visita
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={back}
                className="flex-1 border py-3 rounded-xl hover:bg-gray-50"
              >
                Volver
              </button>

              <button
                onClick={next}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
              >
                Continuar
              </button>
            </div>
          </>
        )}

        {/* STEP 3 — CONTACTO */}
        {step === 3 && (
          <>
            <input
              placeholder="Nombre"
              className="w-full border rounded-xl p-3 mb-3"
            />

            <input
              placeholder="Teléfono / WhatsApp"
              className="w-full border rounded-xl p-3 mb-3"
            />

            <input
              placeholder="Email (opcional)"
              className="w-full border rounded-xl p-3 mb-3"
            />

            {/* COMUNA */}
            <select className="w-full border rounded-xl p-3 mb-3">
              <option>Selecciona tu comuna</option>
              <option>Viña del Mar</option>
              <option>Valparaíso</option>
              <option>Quilpué</option>
              <option>Villa Alemana</option>
              <option>Concón</option>
              <option>Otra</option>
            </select>

            {/* DIRECCIÓN SOLO SI VISITA */}
            {evaluacion === "visita" && (
              <input
                placeholder="Dirección (para coordinar visita)"
                className="w-full border rounded-xl p-3 mb-4"
              />
            )}

            <div className="flex gap-3">
              <button
                onClick={back}
                className="flex-1 border py-3 rounded-xl hover:bg-gray-50"
              >
                Volver
              </button>

              <button
                onClick={() => onClose && onClose()}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
              >
                Enviar solicitud
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Te contactaremos en menos de 24 horas. Sin compromiso.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
