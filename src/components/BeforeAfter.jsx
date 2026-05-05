import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

/* ═══════════════════════════════════════════════════════
   BEFORE & AFTER  –  Slider interactivo premium
   Paleta: dorados (#D4AF37 / #F0D060 / #8B7320) sobre
   fondo negro (#111). Incluye auto-demo animado, título
   cíclico con GSAP, badges, stats y hint pulsante.
   ═══════════════════════════════════════════════════════ */

// ── Imágenes de prueba (se reemplazan después) ──────
const IMG_BEFORE = "/trabajos/PHOTO-2026-03-18-20-27-05 2.webp";

const IMG_AFTER = "/trabajos/Image2026-03-2312.02.53.webp";


// ── Datos ───────────────────────────────────────────
const BADGES = ["Resultados reales", "Sin filtros", "Calidad garantizada"];
const STATS = [
  { number: "+200", label: "Trabajos completados" },
  { number: "100%", label: "Clientes satisfechos" },
];
const TITLE_WORDS = [
  { text: "Antes", gold: false },
  { text: "&", gold: true },
  { text: "Después", gold: true },
];

export default function BeforeAfter() {
  /* ── state ─────────────────────────────────────── */
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [autoRunning, setAutoRunning] = useState(true);
  const [activeWord, setActiveWord] = useState(0);

  const sliderRef = useRef(null);
  const autoRef = useRef(null);
  const autoPos = useRef(50);
  const autoDir = useRef(-1);
  const titleRefs = useRef([]);
  const badgeRefs = useRef([]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  /* ── GSAP: Title cycle ─────────────────────────── */
  useEffect(() => {
    let cancelled = false;

    const cycle = async () => {
      while (!cancelled) {
        for (let i = 0; i < TITLE_WORDS.length; i++) {
          if (cancelled) return;
          setActiveWord(i);
          const el = titleRefs.current[i];
          if (el) {
            gsap.fromTo(
              el,
              { opacity: 0, y: 20, scale: 0.92 },
              { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.4)" }
            );
            await wait(2200);
            if (cancelled) return;
            gsap.to(el, { opacity: 0, y: -14, duration: 0.35, ease: "power2.in" });
            await wait(400);
          }
        }
      }
    };

    cycle();
    return () => { cancelled = true; };
  }, []);

  /* ── GSAP: Badges entry on scroll ──────────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          badgeRefs.current.forEach((el, i) => {
            if (el) {
              gsap.fromTo(
                el,
                { opacity: 0, y: 18, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5, delay: i * 0.12, ease: "power3.out" }
              );
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ── Auto-demo movement ────────────────────────── */
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

  /* ── Drag helpers ──────────────────────────────── */
  const stopAuto = useCallback(() => {
    if (autoRunning) {
      clearInterval(autoRef.current);
      setAutoRunning(false);
    }
  }, [autoRunning]);

  const calcPos = useCallback((clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onDown = useCallback(
    (clientX) => { stopAuto(); setIsDragging(true); setPosition(calcPos(clientX)); },
    [stopAuto, calcPos]
  );
  const onMove = useCallback(
    (clientX) => { if (isDragging) setPosition(calcPos(clientX)); },
    [isDragging, calcPos]
  );
  const onUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    const mm = (e) => onMove(e.clientX);
    const tm = (e) => onMove(e.touches[0].clientX);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", tm, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("touchend", onUp);
    };
  }, [onMove, onUp]);

  /* ═══════════════════════════════  JSX  ══════════════════════════════ */
  return (
    <section ref={sectionRef} id="antes-despues" className="py-24 bg-[#111111] text-center overflow-hidden">

      {/* ── Animations ────────────────────────── */}
      <style>{`
        @keyframes ba-pulse { 0%,100%{opacity:.45} 50%{opacity:1} }
        @keyframes ba-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes ba-float {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-6px); }
        }
      `}</style>

      {/* ── TITLE ─────────────────────────────── */}
      <div className="relative h-24 flex items-center justify-center mb-2">
        {TITLE_WORDS.map((w, i) => (
          <span
            key={w.text}
            ref={(el) => (titleRefs.current[i] = el)}
            className="absolute text-5xl md:text-6xl font-black tracking-widest select-none"
            style={{
              opacity: 0,
              ...(w.gold
                ? {
                  background: "linear-gradient(135deg, #8B7320, #D4AF37, #F0D060, #D4AF37)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: activeWord === i ? "ba-shimmer 3s linear infinite" : "none",
                  filter: activeWord === i ? "drop-shadow(0 0 22px rgba(212,175,55,0.5))" : "none",
                }
                : { color: "rgba(255,255,255,0.82)" }),
            }}
          >
            {w.text}
          </span>
        ))}
      </div>

      {/* ── Subtitle ──────────────────────────── */}
      <p
        className="text-sm md:text-base max-w-md mx-auto mb-6"
        style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}
      >
        Transforma tu espacio con nuestro trabajo profesional
      </p>

      {/* ── BADGES ────────────────────────────── */}
      <div className="flex gap-3 justify-center flex-wrap mb-12 px-4">
        {BADGES.map((b, i) => (
          <span
            key={b}
            ref={(el) => (badgeRefs.current[i] = el)}
            className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            style={{
              opacity: 0,
              border: "1px solid rgba(212,175,55,0.3)",
              color: "rgba(212,175,55,0.7)",
              background: "rgba(212,175,55,0.05)",
              backdropFilter: "blur(4px)",
            }}
          >
            {b}
          </span>
        ))}
      </div>

      {/* ── SLIDER CONTAINER ──────────────────── */}
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div
          ref={sliderRef}
          onMouseDown={(e) => onDown(e.clientX)}
          onTouchStart={(e) => onDown(e.touches[0].clientX)}
          className="relative rounded-2xl overflow-hidden select-none"
          style={{
            aspectRatio: "16/9",
            cursor: "ew-resize",
              boxShadow:
              "0 0 0 1px rgba(212,175,55,0.2), 0 18px 48px rgba(15,23,42,0.22), 0 0 60px rgba(212,175,55,0.08)",
          }}
        >
          {/* AFTER image (full width behind) */}
          <img
            src={IMG_AFTER}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Después"
            draggable={false}
          />

          {/* BEFORE image (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%`, zIndex: 2 }}
          >
            <img
              src={IMG_BEFORE}
              className="absolute inset-0 h-full object-cover"
              style={{
                width: sliderRef.current
                  ? `${sliderRef.current.offsetWidth}px`
                  : "100%",
              }}
              alt="Antes"
              draggable={false}
            />
            {/* desaturation overlay for the "before" side */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "rgba(0,0,0,0.08)", mixBlendMode: "multiply", zIndex: 2 }}
            />
          </div>

          {/* Vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%)",
              zIndex: 3,
            }}
          />

          {/* ── Labels ─────────────────────────── */}
          <span
            className="absolute top-4 left-4 text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-full backdrop-blur-md pointer-events-none"
            style={{
              zIndex: 5,
              background: "rgba(0,0,0,0.55)",
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Antes
          </span>
          <span
            className="absolute top-4 right-4 text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-full backdrop-blur-md pointer-events-none"
            style={{
              zIndex: 5,
              background: "rgba(212,175,55,0.12)",
              color: "#D4AF37",
              border: "1px solid rgba(212,175,55,0.3)",
            }}
          >
            Después
          </span>

          {/* ── Glow edge on divider ───────────── */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: `${position}%`,
              width: 40,
              transform: "translateX(-50%)",
              background:
                "radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, transparent 70%)",
              zIndex: 5,
            }}
          />

          {/* ── Divider line ───────────────────── */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: `${position}%`,
              width: 2,
              transform: "translateX(-50%)",
              background:
                "linear-gradient(180deg, transparent 2%, #D4AF37 15%, #F0D060 50%, #D4AF37 85%, transparent 98%)",
              boxShadow:
                "0 0 14px rgba(212,175,55,0.55), 0 0 40px rgba(212,175,55,0.15)",
              zIndex: 6,
            }}
          />

          {/* ── Handle ─────────────────────────── */}
          <div
            className="absolute top-1/2 flex items-center justify-center pointer-events-none"
            style={{
              left: `${position}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 7,
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)",
              border: "2px solid #D4AF37",
              boxShadow: isDragging
                ? "0 0 0 8px rgba(212,175,55,0.18), 0 0 35px rgba(212,175,55,0.55), inset 0 1px 1px rgba(255,255,255,0.08)"
                : "0 0 0 5px rgba(212,175,55,0.1), 0 0 22px rgba(212,175,55,0.3), inset 0 1px 1px rgba(255,255,255,0.06)",
              transition: "box-shadow 0.25s ease, width 0.2s, height 0.2s",
              animation: autoRunning ? "ba-float 2.5s ease-in-out infinite" : "none",
            }}
          >
            {/* Arrows icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="7 16 3 12 7 8" />
              <polyline points="17 8 21 12 17 16" />
              <line x1="3" y1="12" x2="21" y2="12" strokeWidth="1.5" opacity="0.35" />
            </svg>
          </div>

          {/* ── Corner accents ─────────────────── */}
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
            (pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} pointer-events-none`}
                style={{
                  width: 28,
                  height: 28,
                  borderTop: pos.includes("top") ? "2px solid rgba(212,175,55,0.25)" : "none",
                  borderBottom: pos.includes("bottom") ? "2px solid rgba(212,175,55,0.25)" : "none",
                  borderLeft: pos.includes("left") ? "2px solid rgba(212,175,55,0.25)" : "none",
                  borderRight: pos.includes("right") ? "2px solid rgba(212,175,55,0.25)" : "none",
                  zIndex: 4,
                }}
              />
            )
          )}
        </div>
      </div>

      {/* ── HINT ──────────────────────────────── */}
      <p
        className="mt-6 text-xs font-semibold tracking-widest uppercase select-none"
        style={{
          color: "rgba(255,255,255,0.38)",
          animation: "ba-pulse 2.8s ease-in-out infinite",
        }}
      >
        ← Arrastra para comparar →
      </p>

      {/* ── STATS ─────────────────────────────── */}
      <div className="flex gap-6 md:gap-10 justify-center flex-wrap mt-16 px-4">
        {STATS.map((s, i) => (
          <div key={i} className="flex items-center gap-6 md:gap-10">
            {i > 0 && (
              <div
                style={{
                  width: 1,
                  height: 48,
                  background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.3), transparent)",
                }}
              />
            )}
            <div className="text-center">
              <div
                className="text-2xl md:text-3xl font-black"
                style={{
                  background: "linear-gradient(135deg, #8B7320, #D4AF37, #F0D060)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.number}
              </div>
              <div
                className="text-[10px] md:text-xs font-semibold tracking-widest uppercase mt-1"
                style={{ color: "rgba(255,255,255,0.42)" }}
              >
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Helpers ──────────────────────────────────────────── */
function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
