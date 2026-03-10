export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "120px 40px 60px", position: "relative", overflow: "hidden",
      }}
    >
      {/* Decorative grid lines */}
      {[20, 40, 60, 80].map(p => (
        <div key={p} className="grid-line" style={{ top: 0, left: `${p}%`, width: "1px", height: "100%" }} />
      ))}
      {[25, 50, 75].map(p => (
        <div key={p} className="grid-line" style={{ top: `${p}%`, left: 0, width: "100%", height: "1px" }} />
      ))}

      {/* Orange glow orb */}
      <div style={{
        position: "absolute", top: "30%", right: "15%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        className="hero-grid"
        style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 60, alignItems: "center", maxWidth: 1200, margin: "0 auto", width: "100%",
        }}
      >
        {/* ── Left: Text ── */}
        <div>
          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <div style={{ width: 32, height: 1, background: "#ff6b35" }} />
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
              letterSpacing: "0.2em", color: "#ff6b35", textTransform: "uppercase",
            }}>
              Frontend Developer
            </span>
          </div>

          <h1 className="hero-title fade-up-delay-1">
            Hi, I'm<br />
            <span>Deepak</span><br />
            <span className="outline">Harish</span>
          </h1>

          <p className="fade-up-delay-2" style={{
            color: "#666", lineHeight: 1.7, maxWidth: 420,
            marginTop: 24, marginBottom: 36, fontSize: "0.95rem",
          }}>
            I create beautiful, functional, and user-centred digital experiences.
            Bringing ideas to life through clean code and thoughtful design.
          </p>

          <div className="fade-up-delay-3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => scrollTo("Contact")}>
              Hire Me →
            </button>
            <a href="mailto:harishdeepak35@gmail.com" className="btn-outline">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1XZ9kFDzwQuyc_AUPLzp-XB81VLg-8iTQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Resume ↓
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: 24, marginTop: 48, paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}>
            {[["6+", "Projects"], ["1", "Month Exp"], ["100%", "Dedication"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ff6b35" }}>{n}</div>
                <div style={{
                  fontFamily: "'DM Mono', monospace", fontSize: "0.6rem",
                  color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2,
                }}>
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div style={{ position: "relative", animation: "float 4s ease-in-out infinite" }}>
            <div style={{
              width: 300, height: 360,
              clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
              overflow: "hidden",
              border: "1px solid rgba(255,107,53,0.25)",
              position: "relative",
            }}>
              <img
                src="./deepak.jpeg"
                alt="Deepak Harish Murali"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = "linear-gradient(135deg,#1a1a24,#0d0d14)";
                  e.target.parentElement.innerHTML += '<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:5rem">👨‍💻</div>';
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(circle at 70% 20%, rgba(255,107,53,0.07), transparent 60%)",
                pointerEvents: "none",
              }} />
            </div>

            {/* Open to work badge */}
            <div style={{
              position: "absolute", top: -16, right: -16,
              background: "#ff6b35", color: "#050508",
              fontWeight: 700, fontSize: "0.7rem", padding: "8px 14px",
              letterSpacing: "0.08em",
              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
            }}>
              OPEN TO WORK
            </div>

            {/* Location badge */}
            <div style={{
              position: "absolute", bottom: -16, left: -16,
              background: "#0d0d14", border: "1px solid rgba(255,255,255,0.08)",
              padding: "10px 16px",
              clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "#555", letterSpacing: "0.1em" }}>
                BASED IN
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, marginTop: 2 }}>India 🇮🇳</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
