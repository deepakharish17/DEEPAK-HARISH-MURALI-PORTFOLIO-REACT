import { SERVICES } from "../data";

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <div style={{ fontSize: "2rem", color: "#ff6b35", marginBottom: 20 }}>
        {service.icon}
      </div>
      <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 12, letterSpacing: "-0.01em" }}>
        {service.title}
      </h3>
      <p style={{ color: "#555", fontSize: "0.82rem", lineHeight: 1.7 }}>
        {service.desc}
      </p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label">What I Offer</p>
          <h2 className="section-title">
            Features & <span style={{ color: "#ff6b35" }}>Services</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
