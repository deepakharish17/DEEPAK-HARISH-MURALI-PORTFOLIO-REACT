import { PROJECTS } from "../data";

const GitHubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.004 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function ProjectCard({ project }) {
  const p = project;
  return (
    <div className="project-card">
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
        <div style={{
          width: 40, height: 40, borderRadius: "8px",
          background: `${p.color}18`, border: `1px solid ${p.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.1rem", color: p.color,
        }}>◈</div>
        {p.badge && (
          <span style={{
            background: "#f43f5e", color: "#fff",
            fontSize: "0.55rem", fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.15em", padding: "3px 8px",
            fontWeight: 700, borderRadius: "2px",
          }}>{p.badge}</span>
        )}
      </div>

      {/* Accent line */}
      <div style={{ width: "100%", height: 1, background: `linear-gradient(to right, ${p.color}50, transparent)`, marginBottom: 18 }} />

      <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 10, letterSpacing: "-0.01em" }}>
        {p.title}
      </h3>
      <p style={{ color: "#555", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: 20, flex: 1 }}>
        {p.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {p.tags.map(t => (
          <span key={t} className="tag" style={{ borderColor: `${p.color}30`, color: p.color }}>
            {t}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: 10 }}>
        <a href={p.github} target="_blank" rel="noreferrer" className="project-btn">
          <GitHubIcon /> GitHub
        </a>
        <a
          href={p.live} target="_blank" rel="noreferrer"
          className="project-btn live"
          style={{ color: p.color, borderColor: `${p.color}40` }}
        >
          <ExternalIcon /> Live Demo
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 40px", background: "rgba(255,255,255,0.01)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label">Featured Work</p>
          <h2 className="section-title">
            My <span style={{ color: "#ff6b35" }}>Projects</span>
          </h2>
          <p style={{ color: "#555", marginTop: 16, maxWidth: 500, margin: "16px auto 0", fontSize: "0.9rem", lineHeight: 1.7 }}>
            A showcase demonstrating expertise in front-end development, modern frameworks, and creative problem-solving.
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
