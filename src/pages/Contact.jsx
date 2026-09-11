import React, { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import "../assets/css/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "SaaS Product Engineering",
    budget: "$5k - $15k",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How quickly can we start discovery and development?",
      a: "We typically begin technical discovery within 2-3 business days of alignment. We establish direct communication channels (Slack/Discord/Teams) and sprint roadmaps immediately.",
    },
    {
      q: "What is HSynex's engagement model?",
      a: "We offer both milestone-based fixed scope pricing for clearly scoped systems, as well as dedicated monthly product squad sprints for evolving SaaS products and continuous features.",
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
    <div className="contact-page-root">
      <div className="ambient-glow-top"></div>

      {/* Hero Header */}
      <section className="contact-hero-section">
        <div className="container">
          <SectionHeader
            subtitle="GET IN TOUCH"
            title="Let's build something smarter."
            description="Have a software project, SaaS idea, or operational bottleneck? Reach out directly to discuss architecture, scope, and timelines."
            centered={true}
          />
        </div>
      </section>

      {/* Main Grid */}
      <section className="contact-main-grid-section">
        <div className="container contact-layout-grid">
          {/* Direct Info Side */}
          <div className="contact-info-panel">
            <span className="subtitle-badge">
              <span className="subtitle-dot"></span>
              DIRECT REACH
            </span>
            <h2 className="info-panel-title">Speak directly with our team</h2>
            <p className="info-panel-desc">
              We don't route you through layers of non-technical sales reps. Your inquiry is reviewed directly by product engineers.
            </p>

            <div className="direct-contact-cards">
              <a href="mailto:harsh.hsynex@gmail.com" className="direct-card">
                <div className="direct-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="direct-label">Email Us</span>
                  <span className="direct-val">harsh.hsynex@gmail.com</span>
                </div>
              </a>

              <a href="tel:+916353142650" className="direct-card">
                <div className="direct-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="direct-label">Call / WhatsApp</span>
                  <span className="direct-val">+91 6353142650</span>
                </div>
              </a>

              <div className="direct-card">
                <div className="direct-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="direct-label">Location</span>
                  <span className="direct-val">Ahmedabad, India</span>
                </div>
              </div>
            </div>

            <div className="response-time-box">
              <span className="response-dot"></span>
              <span>Average response time: &lt; 12 hours</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="form-success-card">
                <div className="success-icon-badge">✓</div>
                <h3 className="success-heading">Message Dispatched</h3>
                <p className="success-text">
                  Thank you for contacting HSynex. We will review your project scope and follow up with you directly within 12 hours.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="project-inquiry-form">
                <h3 className="form-box-title">Start a Project Inquiry</h3>

                <div className="form-group-stack">
                  <div className="form-field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Alex Mercer"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group-stack">
                  <div className="form-field">
                    <label htmlFor="phone">Phone / WhatsApp (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                    >
                      <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                      <option value="Business Platform / ERP">Business Platform / ERP</option>
                      <option value="Web & Mobile App">Web & Mobile Application</option>
                      <option value="CMS & Automation">Custom CMS & Automation</option>
                      <option value="HSynex Restaurant Demo">HSynex Restaurant Demo</option>
                      <option value="Technical Consultation">Technical Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Project Overview & Goals</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you're building, key challenges, or timeline targets..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg full-width-btn">
                  <span>Send Project Details</span>
                  <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="container">
          <SectionHeader
            subtitle="FREQUENTLY ASKED"
            title="Common Questions"
            centered={true}
          />

          <div className="faqs-accordion-list">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`faq-accordion-box ${openFaq === idx ? "open" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <h4>{faq.q}</h4>
                  <span className="faq-plus-icon">{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
