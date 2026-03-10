import { useState } from "react";
import { NAV_LINKS } from "../data";
import useScrollSpy from "../hooks/useScrollSpy";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy();
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Mobile full-screen menu ── */}
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(link => (
            <button key={link} className="mobile-nav-link" onClick={() => scrollTo(link)}>
              {link}
            </button>
          ))}
        </div>
      )}

      {/* ── Desktop nav ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        padding: "20px 40px", display: "flex", alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid var(--border-nav)",
        backdropFilter: "blur(20px)",
        background: "var(--nav-bg)",
        transition: "background 0.3s ease",
      }}>
        {/* Logo */}
        <div style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "var(--text)" }}>
          D<span style={{ color: "#ff6b35" }}>.</span>HARISH
        </div>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: "flex", gap: 40 }}>
          {NAV_LINKS.map(link => (
            <button
              key={link}
              className={`nav-link ${active === link ? "active" : ""}`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right side: availability + theme toggle + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", position: "relative" }}>
            <div style={{ position: "absolute", inset: -3, borderRadius: "50%", border: "1px solid #10b981", animation: "pulse-ring 1.5s infinite" }} />
          </div>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
            AVAILABLE
          </span>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
              background: "none",
              border: "1px solid var(--border-soft)",
              color: "var(--text)",
              cursor: "pointer",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              transition: "all 0.3s",
              clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
            }}
            onMouseOver={e => { e.currentTarget.style.borderColor = "#ff6b35"; }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border-soft)"; }}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer", fontSize: "1.4rem", zIndex: 999, position: "relative" }}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </>
  );
}
