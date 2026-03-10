import { NAV_LINKS } from "../data";

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{
      padding: "32px 40px",
      borderTop: "1px solid rgba(255,255,255,0.04)",
      display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: 16,
    }}>
      {/* Logo */}
      <div style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
        D<span style={{ color: "#ff6b35" }}>.</span>HARISH
      </div>

      {/* Copyright */}
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "#444", letterSpacing: "0.08em" }}>
        © 2025 DEEPAK HARISH. ALL RIGHTS RESERVED.
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: 24 }}>
        {NAV_LINKS.map(link => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: "none", border: "none", color: "#444",
              fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              cursor: "pointer", transition: "color 0.3s",
            }}
            onMouseOver={e => (e.target.style.color = "#ff6b35")}
            onMouseOut={e => (e.target.style.color = "#444")}
          >
            {link}
          </button>
        ))}
      </div>
    </footer>
  );
}
