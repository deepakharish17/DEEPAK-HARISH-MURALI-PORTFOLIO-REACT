import { SKILLS } from "../data";

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 40px", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        >
          {/* ── Left: Photo ── */}
          <div>
            <div style={{ position: "relative", display: "inline-block" }}>
              <div style={{
                width: 280, height: 340,
                clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                overflow: "hidden",
                border: "1px solid rgba(255,107,53,0.15)",
                background: "#0d0d14",
              }}>
                <img
                  src="./deepak.jpeg"
                  alt="Deepak Harish"
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    objectPosition: "top", filter: "grayscale(20%) contrast(1.05)",
                  }}
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
              {/* Decorative offset border */}
              <div style={{
                position: "absolute", top: 24, left: 24, right: -24, bottom: -24,
                border: "1px solid rgba(255,107,53,0.08)",
                clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                zIndex: -1,
              }} />
            </div>
          </div>

          {/* ── Right: Info ── */}
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Building Meaningful<br />
              <span style={{ color: "#ff6b35" }}>Digital</span> Experiences
            </h2>

            <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 16, fontSize: "0.9rem" }}>
              I'm a creative Web developer passionate about building modern and responsive web
              experiences. My journey began with a love for design and evolved into a deep
              curiosity for how the web works.
            </p>
            <p style={{ color: "#666", lineHeight: 1.8, marginBottom: 32, fontSize: "0.9rem" }}>
              I believe in continuous learning, attention to detail, and the power of clean,
              meaningful design.
            </p>

            {/* Info grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
              {[
                ["🎓", "Education", "B.E [ECE] — Hindhusthan Institute of Technology"],
                ["💼", "Projects", "6+ Completed Projects"],
                ["📍", "Location", "India, Tamil Nadu"],
                ["✉️", "Email", "harishdeepak35@gmail.com"],
              ].map(([icon, label, val]) => (
                <div key={label} style={{ padding: "16px", background: "#0a0a10", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: "1.2rem", marginBottom: 6 }}>{icon}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                    {label}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#aaa" }}>{val}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div style={{ marginBottom: 36 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#555", textTransform: "uppercase", marginBottom: 12 }}>
                Skills
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SKILLS.map(s => (
                  <div key={s} className="skill-pill">{s}</div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Hire Me →
              </button>

              <a href="mailto:harishdeepak35@gmail.com" className="btn-outline">
                Contact Me
              </a>

              <a
                href="https://drive.google.com/file/d/1XZ9kFDzwQuyc_AUPLzp-XB81VLg-8iTQ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "#ff6b35",
                  border: "1px solid #ff6b35",
                  fontFamily: "'Syne', sans-serif", fontWeight: 700,
                  fontSize: "0.8rem", letterSpacing: "0.1em",
                  textTransform: "uppercase", padding: "14px 28px",
                  textDecoration: "none", transition: "all 0.3s",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                }}
                onMouseOver={e => { e.currentTarget.style.background = "#ff6b35"; e.currentTarget.style.color = "#050508"; }}
                onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ff6b35"; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
