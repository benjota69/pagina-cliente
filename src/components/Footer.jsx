import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-10 text-center" style={{ background: "#080500", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6">
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
          © 2026 Imperio Romano Pinturas - Todos los derechos reservados
        </p>
        <Link
          to="/politica-de-privacidad"
          className="text-sm transition hover:opacity-100"
          style={{ color: "rgba(230,184,0,0.8)" }}
        >
          Política de Privacidad
        </Link>
      </div>
    </footer>
  );
}
