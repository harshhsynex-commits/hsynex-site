import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import '../assets/css/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Software Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'Do you work with early-stage startups or only enterprise teams?',
      a: 'We work with both! We configure flexible squads tailored to startup MVPs and seed expansions, as well as high-compliance frameworks supporting multi-regional enterprise projects.'
    },
    {
      q: 'What is your standard pricing structure and model?',
      a: 'We offer fixed-scope pricing for well-defined projects, and monthly/weekly dedicated resource models (Time & Materials) for active agile product development cycles.'
    },
    {
      q: 'How do you handle intellectual property (IP) and data privacy?',
      a: 'All intellectual property belongs to you upon invoice settlement. We sign comprehensive NDAs before code handovers and maintain strict compliance with SOC2, GDPR, and HIPAA rules.'
    },
    {
      q: 'Do you provide post-launch support and hosting administration?',
      a: 'Yes! We offer managed SLA support, 24/7 endpoint monitoring, cloud cost tuning, and continuous deployment patches post-launch.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* Hero Header */}
      <section className="contact-hero">
        <div className="container">
          <SectionHeader
            subtitle="GET IN TOUCH"
            title="Let's Start the Conversation"
            centered={true}
          />
          <p className="contact-hero-lead">
            Have a project in mind, need technical assistance, or want to audit your current cloud infrastructure? We are ready to help.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="contact-form-section">
        <div className="container contact-grid">
          {/* Info Side */}
          <div className="contact-info-side">
            <h2>Contact Information</h2>
            <p className="info-lead">
              Drop us a line directly or schedule an architecture review with our principal staff.
            </p>

            <div className="info-cards">
              <a href="mailto:harsh.hsynex@gmail.com" className="info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>harsh.hsynex@gmail.com</p>
                </div>
              </a>

              <a href="tel:+916353142650" className="info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 6353142650</p>
                </div>
              </a>

              <div className="info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Ahmedabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-side">
            {submitted ? (
              <div className="form-success-box animate-fade-in">
                <div className="success-icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h2>Message Received!</h2>
                <p>
                  Thank you for contacting Hsynex. A principal tech architect will review your message and reply via email within 1 business day.
                </p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="Software Development">Custom Software Development</option>
                    <option value="Cloud Solutions">Cloud Strategy & Infrastructure</option>
                    <option value="Cybersecurity">Cybersecurity & Compliance</option>
                    <option value="Data & AI">Data Science & AI/ML Models</option>
                    <option value="IT Infrastructure">IT Infrastructure Management</option>
                    <option value="Digital Consulting">Strategic Digital Audits</option>
                    <option value="Other">Other / Multiple</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Scope or Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your development scope or tech support needs..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container faq-container">
          <SectionHeader
            subtitle="QUESTIONS?"
            title="Frequently Asked Questions"
            centered={true}
          />
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-toggle-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
