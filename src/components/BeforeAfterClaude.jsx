import { useEffect, useRef, useState } from "react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRunning, setAutoRunning] = useState(true);
  const [titlePhase, setTitlePhase] = useState("antes"); // "antes" | "y" | "despues"
  const sliderRef = useRef(null);
  const autoRef = useRef(null);
  const autoPos = useRef(50);
  const autoDir = useRef(-1);

  // ── Title animation cycle ──────────────────────
  useEffect(() => {
    const sequence = async () => {
      setTitlePhase("antes");
      await wait(2500);
      setTitlePhase("hidden");
      await wait(400);
      setTitlePhase("y");
      await wait(1800);
      setTitlePhase("hidden");
      await wait(300);
      setTitlePhase("despues");
      await wait(2800);
      setTitlePhase("hidden");
      await wait(400);
      sequence();
    };
    sequence();
  }, []);

  // ── Auto demo movement ─────────────────────────
  useEffect(() => {
    if (!autoRunning) return;
    autoRef.current = setInterval(() => {
      autoPos.current += autoDir.current * 0.35;
      if (autoPos.current <= 20) autoDir.current = 1;
      if (autoPos.current >= 80) autoDir.current = -1;
      setPosition(autoPos.current);
    }, 16);
    return () => clearInterval(autoRef.current);
  }, [autoRunning]);

  // ── Drag logic ─────────────────────────────────
  const stopAuto = () => {
    if (autoRunning) {
      clearInterval(autoRef.current);
      setAutoRunning(false);
    }
  };

  const calcPosition = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    return Math.max(5, Math.min(95, pct));
  };

  const onMouseDown = (e) => { stopAuto(); setIsDragging(true); setPosition(calcPosition(e.clientX)); };
  const onMouseMove = (e) => { if (isDragging) setPosition(calcPosition(e.clientX)); };
  const onMouseUp   = () => setIsDragging(false);

  const onTouchStart = (e) => { stopAuto(); setIsDragging(true); setPosition(calcPosition(e.touches[0].clientX)); };
  const onTouchMove  = (e) => { if (isDragging) setPosition(calcPosition(e.touches[0].clientX)); };
  const onTouchEnd   = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-base-100 text-center overflow-hidden">

      {/* ── TITLE ───────────────────────────── */}
      <div className="relative h-20 flex items-center justify-center mb-4">
        <TitleWord
          text="Antes"
          visible={titlePhase === "antes"}
          className="text-5xl font-black tracking-widest"
          style={{ color: "#9ca3af", fontFamily: "'Cinzel', serif" }}
        />
        <TitleWord
          text="&"
          visible={titlePhase === "y"}
          className="text-6xl font-black"
          style={{
            fontFamily: "'Cinzel', serif",
            background: "linear-gradient(135deg, #8B7320, #D4AF37, #F0D060)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
        <TitleWord
          text="Después"
          visible={titlePhase === "despues"}
          className="text-5xl font-black tracking-widest"
          style={{
            fontFamily: "'Cinzel', serif",
            background: "linear-gradient(135deg, #8B7320, #D4AF37, #F0D060, #D4AF37)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: titlePhase === "despues" ? "drop-shadow(0 0 18px rgba(212,175,55,0.45))" : "none",
          }}
        />
      </div>

      {/* ── BADGES ──────────────────────────── */}
      <div className="flex gap-3 justify-center flex-wrap mb-12">
        {["Resultados reales", "Sin filtros", "Imperio Romano"].map((b, i) => (
          <span
            key={b}
            className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              border: "1px solid rgba(212,175,55,0.3)",
              color: "rgba(212,175,55,0.7)",
              background: "rgba(212,175,55,0.05)",
              animationDelay: `${i * 0.15}s`,
            }}
          >
            {b}
          </span>
        ))}
      </div>

      {/* ── SLIDER ──────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          className="relative rounded-2xl overflow-hidden shadow-2xl select-none"
          style={{
            aspectRatio: "16/9",
            cursor: "ew-resize",
            boxShadow: "0 0 0 1px rgba(212,175,55,0.2), 0 30px 80px rgba(0,0,0,0.6), 0 0 50px rgba(212,175,55,0.07)",
          }}
        >
          {/* AFTER */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Después"
            draggable={false}
          />

          {/* BEFORE clipped */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%`, zIndex: 2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
              className="absolute inset-0 h-full object-cover"
              style={{ width: sliderRef.current ? `${sliderRef.current.offsetWidth}px` : "100%" }}
              alt="Antes"
              draggable={false}
            />
          </div>

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.4) 100%)",
              zIndex: 3,
            }}
          />

          {/* Labels */}
          <span
            className="absolute top-4 left-4 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full backdrop-blur-md pointer-events-none"
            style={{
              zIndex: 5,
              background: "rgba(0,0,0,0.5)",
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.15)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            Antes
          </span>
          <span
            className="absolute top-4 right-4 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full backdrop-blur-md pointer-events-none"
            style={{
              zIndex: 5,
              background: "rgba(212,175,55,0.15)",
              color: "#D4AF37",
              border: "1px solid rgba(212,175,55,0.35)",
              fontFamily: "'Cinzel', serif",
            }}
          >
            Después
          </span>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: `${position}%`,
              width: "2px",
              transform: "translateX(-50%)",
              background: "linear-gradient(180deg, transparent, #D4AF37 20%, #F0D060 50%, #D4AF37 80%, transparent)",
              boxShadow: "0 0 18px rgba(212,175,55,0.6), 0 0 36px rgba(212,175,55,0.2)",
              zIndex: 6,
            }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 flex items-center justify-center pointer-events-none"
            style={{
              left: `${position}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 7,
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1a1a1a, #2c2c2c)",
              border: "2px solid #D4AF37",
              boxShadow: isDragging
                ? "0 0 0 6px rgba(212,175,55,0.2), 0 0 30px rgba(212,175,55,0.6)"
                : "0 0 0 4px rgba(212,175,55,0.15), 0 0 18px rgba(212,175,55,0.35)",
              transition: "box-shadow 0.2s ease",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" style={{ opacity: 0.4 }} />
              <polyline points="15 18 21 12 15 6" style={{ opacity: 0.4 }} />
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

        </div>
      </div>

      {/* ── HINT ────────────────────────────── */}
      <p
        className="mt-5 text-xs font-semibold tracking-widest uppercase"
        style={{ color: "rgba(212,175,55,0.4)", animation: "pulse 3s ease-in-out infinite" }}
      >
        ← Arrastra para comparar →
      </p>

      {/* ── STATS ───────────────────────────── */}
      <div className="flex gap-10 justify-center flex-wrap mt-14">
        {[
          { number: "+200", label: "Trabajos completados" },
          { number: "100%",  label: "Clientes satisfechos" },
          { number: "5★",   label: "Valoración promedio"  },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-10">
            {i > 0 && (
              <div style={{ width: 1, height: 48, background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
            )}
            <div className="text-center">
              <div
                className="text-3xl font-black"
                style={{
                  fontFamily: "'Cinzel', serif",
                  background: "linear-gradient(135deg, #8B7320, #D4AF37, #F0D060)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.number}
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1;   }
        }
      `}</style>

    </section>
  );
}

// ── Helper components ──────────────────────────────
function TitleWord({ text, visible, className, style }) {
  return (
    <span
      className={`absolute transition-all duration-500 ${className}`}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(14px) scale(0.95)",
        pointerEvents: "none",
      }}
    >
      {text}
    </span>
  );
}

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
