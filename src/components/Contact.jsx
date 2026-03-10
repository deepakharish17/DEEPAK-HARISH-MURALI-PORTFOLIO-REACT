import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../data";

const CONTACT_INFO = [
  { icon: "✉", label: "Email", value: "harishdeepak35@gmail.com" },
  { icon: "📞", label: "Phone", value: "+91 8778658798" },
  { icon: "📍", label: "Location", value: "India, Tamil Nadu" },
];

const SOCIAL_LINKS = [
  { label: "GH", href: "https://github.com/deepakharish17" },
  { label: "LI", href: "https://www.linkedin.com/in/deepak-harish-t-m/" },
  { label: "TW", href: "https://x.com/HARISHDEEPAK17" },
];

function SuccessMessage() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
        padding: "40px 0",
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: "rgba(16,185,129,0.1)",
          border: "1px solid #10b981",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
        }}
      >
        ✅
      </div>

      <p style={{ color: "#10b981", fontWeight: 700, fontSize: "1.1rem" }}>
        Message Sent!
      </p>

      <p style={{ color: "#555", fontSize: "0.85rem", textAlign: "center" }}>
        Thanks for reaching out. I'll get back to you soon.
      </p>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
      setError("Failed to send. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  if (sent) return <SuccessMessage />;

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <input
        className="input-field"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <input
        className="input-field"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <textarea
        className="input-field"
        placeholder="Your Message"
        rows={5}
        style={{ resize: "vertical" }}
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
      />

      {error && (
        <p
          style={{
            color: "#f43f5e",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
          }}
        >
          {error}
        </p>
      )}

      <button
        className="btn-primary"
        type="submit"
        disabled={sending}
        style={{ alignSelf: "flex-start" }}
      >
        {sending ? "Sending..." : "Send Message →"}
      </button>

      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.62rem",
          color: "#444",
        }}
      >
        Powered by EmailJS · Delivered to harishdeepak35@gmail.com
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "100px 40px", background: "rgba(255,107,53,0.02)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p className="section-label">Let's Talk</p>

          <h2 className="section-title">
            Get in <span style={{ color: "#ff6b35" }}>Touch</span>
          </h2>

          <p style={{ color: "#555", marginTop: 16, fontSize: "0.9rem" }}>
            I'm always open to discuss exciting projects and new opportunities.
          </p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
          }}
        >
          {/* Contact Info */}
          <div>
            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  padding: "20px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(255,107,53,0.08)",
                    border: "1px solid rgba(255,107,53,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  {icon}
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      color: "#555",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>

                  <div style={{ fontSize: "0.88rem", color: "#aaa" }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ marginTop: 30 }}>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  color: "#555",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Follow Me
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      width: 44,
                      height: 44,
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#555",
                      textDecoration: "none",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                    }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}