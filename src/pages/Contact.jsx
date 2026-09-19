import { useState } from "react";
import { PageHero, SectionTitle, HSButton, useSEO } from "../components/UI/EditorialUI";

export default function Contact() {
  useSEO(
    "Contact & Start a Project — HSynex",
    "Have a software project, SaaS idea, or operational bottleneck? Reach out directly to discuss architecture, scope, and timelines."
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Web Application",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How quickly can we start discovery and development?",
      a: "We typically begin technical discovery within 2-3 business days of alignment. We establish direct communication channels and initial architectural scope immediately.",
    },
    {
      q: "What is HSynex's engagement model?",
      a: "We offer both milestone-based fixed scope pricing for clearly scoped systems, as well as dedicated monthly product squad sprints for evolving SaaS products.",
    },
    {
      q: "Who owns the intellectual property (IP) and source code?",
      a: "You retain 100% ownership of all source code, database architectures, assets, and intellectual property. Code is pushed directly to your private GitHub/GitLab repositories.",
    },
    {
      q: "Do you provide post-launch support and infrastructure management?",
      a: "Yes. We provide continuous maintenance SLAs, cloud monitoring, performance audits, security patching, and scaling assistance post-launch.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="contact-editorial-page">
      <PageHero
        eyebrow="CONTACT / START A CONVERSATION"
        title={
          <>
            HAVE SOMETHING<br />
            <span style={{ color: "var(--hsynex-cyan)" }}>WORTH BUILDING?</span>
          </>
        }
        text="Tell us what you're trying to build, improve or automate. We'll help make the next step clearer."
      />

      <section className="container" style={{ padding: "clamp(5rem, 8vw, 8rem) var(--container-padding)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "flex-start",
          }}
        >
          {/* Direct Info Side */}
          <div>
            <p className="eyebrow">DIRECT CONTACT</p>
            <p style={{ marginTop: "1.25rem", fontSize: "1.15rem", lineHeight: 1.8, color: "var(--hsynex-text-dim)" }}>
              Start with the problem. We review your inquiry directly without routing you through sales reps.
            </p>

            <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ borderTop: "1px solid #334155", paddingTop: "1rem" }}>
                <span className="eyebrow" style={{ color: "var(--hsynex-muted-dark)" }}>EMAIL</span>
                <a
                  href="mailto:harsh.hsynex@gmail.com"
                  style={{ display: "block", marginTop: "0.35rem", fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}
                >
                  harsh.hsynex@gmail.com &rarr;
                </a>
              </div>

              <div style={{ borderTop: "1px solid #334155", paddingTop: "1rem" }}>
                <span className="eyebrow" style={{ color: "var(--hsynex-muted-dark)" }}>PHONE / WHATSAPP</span>
                <a
                  href="tel:+916353142650"
                  style={{ display: "block", marginTop: "0.35rem", fontSize: "1.1rem", fontWeight: 600, color: "#fff" }}
                >
                  +91 6353142650 &rarr;
                </a>
              </div>

              <div style={{ borderTop: "1px solid #334155", paddingTop: "1rem" }}>
                <span className="eyebrow" style={{ color: "var(--hsynex-muted-dark)" }}>LOCATION</span>
                <p style={{ marginTop: "0.35rem", fontSize: "1.05rem", color: "var(--hsynex-text-dim)" }}>
                  Ahmedabad, India
                </p>
              </div>

              <div style={{ borderTop: "1px solid #334155", paddingTop: "1rem" }}>
                <span className="eyebrow" style={{ color: "var(--hsynex-muted-dark)" }}>RESPONSE WINDOW</span>
                <p style={{ marginTop: "0.35rem", fontSize: "0.95rem", color: "var(--hsynex-cyan)" }}>
                  Typical response time: &lt; 12 hours
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div style={{ borderTop: "1px solid #334155", paddingTop: "1.5rem" }}>
            {submitted ? (
              <div
                style={{
                  border: "1px solid var(--hsynex-border-accent)",
                  background: "var(--hsynex-surface-card)",
                  padding: "2.5rem",
                  borderRadius: "var(--radius-xs)",
                }}
              >
                <span className="eyebrow" style={{ color: "var(--hsynex-cyan)" }}>MESSAGE DISPATCHED</span>
                <h3 style={{ marginTop: "1rem", fontSize: "1.75rem", fontWeight: 600, color: "#fff" }}>
                  Thank you for reaching out.
                </h3>
                <p style={{ marginTop: "1rem", fontSize: "1rem", lineHeight: 1.7, color: "var(--hsynex-muted)" }}>
                  We have received your project details and will review your technical requirements before replying within 12 hours.
                </p>
                <div style={{ marginTop: "2rem" }}>
                  <HSButton onClick={() => setSubmitted(false)} secondary>
                    SEND ANOTHER MESSAGE
                  </HSButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <div className="hs-field" style={{ gridColumn: "span 1" }}>
                  <label htmlFor="contact-name">NAME</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Alex Mercer"
                    className="hs-input"
                  />
                </div>

                <div className="hs-field" style={{ gridColumn: "span 1" }}>
                  <label htmlFor="contact-email">EMAIL</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="alex@company.com"
                    className="hs-input"
                  />
                </div>

                <div className="hs-field" style={{ gridColumn: "span 1" }}>
                  <label htmlFor="contact-company">COMPANY</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Acme Labs Inc."
                    className="hs-input"
                  />
                </div>

                <div className="hs-field" style={{ gridColumn: "span 1" }}>
                  <label htmlFor="contact-project-type">PROJECT TYPE</label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="hs-select"
                  >
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile Application">Mobile Application</option>
                    <option value="Business Software">Business Software</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="CMS & Admin Systems">CMS & Admin Systems</option>
                    <option value="Automation & Integrations">Automation & Integrations</option>
                    <option value="HSynex Restaurant Demo">HSynex Restaurant Demo</option>
                    <option value="Other">Other Custom Build</option>
                  </select>
                </div>

                <div className="hs-field" style={{ gridColumn: "span 2" }}>
                  <label htmlFor="contact-details">PROJECT DETAILS</label>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows="5"
                    required
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="What are you trying to build, improve, or automate? Any timeline or scale goals?"
                    className="hs-textarea"
                  />
                </div>

                <div style={{ gridColumn: "span 2", marginTop: "0.5rem" }}>
                  <HSButton type="submit">
                    START A CONVERSATION
                  </HSButton>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div style={{ marginTop: "8rem" }}>
          <SectionTitle
            eyebrow="FREQUENTLY ASKED"
            title="COMMON QUESTIONS"
            text="Clear answers about how we collaborate, scope, and deliver software."
          />

          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                onClick={() => toggleFaq(idx)}
                style={{
                  borderTop: "1px solid #334155",
                  padding: "1.5rem 0",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 600, color: "#fff" }}>
                    {faq.q}
                  </h4>
                  <span style={{ fontSize: "1.25rem", color: "var(--hsynex-cyan)", fontWeight: 300, marginLeft: "1rem" }}>
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </div>
                {openFaq === idx && (
                  <p style={{ marginTop: "1rem", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--hsynex-muted)" }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
