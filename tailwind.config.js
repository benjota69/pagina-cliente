import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        imperiopro: {
          // ── Colores base ──────────────────────────────
          "primary":          "#C9A84C",   // dorado principal
          "primary-content":  "#0A0A0A",   // texto sobre dorado (negro)

          "secondary":        "#A8892E",   // dorado oscuro (hover)
          "secondary-content":"#0A0A0A",

          "accent":           "#E2C06A",   // dorado claro (highlights)
          "accent-content":   "#0A0A0A",

          "neutral":          "#1A1A1A",   // negro suave para botones
          "neutral-content":  "#E8D9A0",   // dorado claro sobre negro

          // ── Fondos ────────────────────────────────────
          "base-100":         "#111111",   // fondo principal (negro profundo)
          "base-200":         "#1C1C1C",   // fondo cards
          "base-300":         "#2A2A2A",   // bordes / separadores
          "base-content":     "#E8D9A0",   // texto principal (dorado suave)

          // ── Estados ───────────────────────────────────
          "info":             "#7EAED4",
          "info-content":     "#0A0A0A",
          "success":          "#6DBF8A",
          "success-content":  "#0A0A0A",
          "warning":          "#C9A84C",
          "warning-content":  "#0A0A0A",
          "error":            "#D46B6B",
          "error-content":    "#0A0A0A",

          // ── Bordes redondeados ─────────────────────────
          "--rounded-box":    "1rem",
          "--rounded-btn":    "0.75rem",
          "--rounded-badge":  "0.5rem",
        },
      },
    ],
    darkMode: false,
  },
};
