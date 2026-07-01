import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import StatsCounter from "../components/StatsCounter";
import logoImg from "../assets/logo-transparent.png";
import "../assets/css/Home.css";

/* Simple scroll-reveal hook using IntersectionObserver */
function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = ref.current?.querySelectorAll(".scroll-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Home() {
  const pageRef = useScrollReveal();

  const featuredServices = [
    {
      title: "Website Design & Development",
      description:
        "Pixel-perfect, responsive web designs and fast React/Next.js architectures built to capture leads, rank on search engines, and represent your brand.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      title: "Custom CRM Development",
      description:
        "Bespoke sales pipelines, client portal panels, deals management systems, and communication trackers built around your exact business processes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications engineered in React Native and Flutter with native performance, custom push alerts, and offline access.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
  ];

  const valueProps = [
    {
      title: "Certified Expertise",
      description:
        "Our team comprises AWS architects, certified scrum masters, CISSP professionals, and senior full-stack developers.",
    },
    {
      title: "Security-First Development",
      description:
        "We integrate advanced security controls, automated code scans, and vulnerability testing into our dev lifecycle.",
    },
    {
      title: "Tailored Methodologies",
      description:
        "Whether you prefer Agile, Scrum, or DevOps cycles, we align our delivery model perfectly with your workflow.",
    },
    {
      title: "Uncompromised Quality",
      description:
        "Comprehensive testing and deployment pipelines ensure every platform we deliver is robust and bug-free.",
    },
  ];

  return (
    <div className="home-page" ref={pageRef}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container container">
          <div className="hero-content animate-fade-in">
            <span className="hero-badge">IT Consulting & Services</span>
            <h1>
              Accelerating Digital <br />
              <span className="gradient-text">Transformation & Growth</span>
            </h1>
            <p className="hero-lead">
              Hsynex delivers premium software engineering, advanced cloud
              strategies, zero-trust security architecture, and AI-driven
              business intelligence.
            </p>
            <div className="hero-ctas">
              <Link to="/services" className="btn btn-primary btn-lg">
                Explore Services
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-box-glow"></div>
            <div className="hero-card-floating animate-float">
              <div className="visual-circle"></div>
              <div className="visual-lines">
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </div>
              <img src={logoImg} alt="Hsynex Accent" className="visual-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Clients */}
      <section className="trusted-section scroll-animate">
        <div className="container">
          <p className="trusted-title">TRUSTED BY LEADING TECHNOLOGY TEAMS</p>
          <div className="trusted-grid">
            <div className="partner-logo">AWS Cloud</div>
            <div className="partner-logo">Microsoft Partner</div>
            <div className="partner-logo">Google Cloud</div>
            <div className="partner-logo">Salesforce</div>
            <div className="partner-logo">Kubernetes</div>
            <div className="partner-logo">Oracle</div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section">
        <div className="stats-container container scroll-animate">
          <div className="stat-card">
            <h3>
              <StatsCounter end={12} suffix="+" />
            </h3>
            <p>Years of Innovation</p>
          </div>
          <div className="stat-card">
            <h3>
              <StatsCounter end={250} suffix="+" />
            </h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>
              <StatsCounter end={98} suffix="%" />
            </h3>
            <p>Client Retention Rate</p>
          </div>
          <div className="stat-card">
            <h3>
              <StatsCounter end={80} suffix="+" />
            </h3>
            <p>Dedicated Tech Experts</p>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="featured-services-section">
        <div className="container">
          <div className="section-header-wrap scroll-animate">
            <div className="section-header-left">
              <span className="subtitle-badge">WHAT WE DO</span>
              <h2>Core Tech Specialties</h2>
            </div>
            <Link to="/services" className="btn btn-secondary view-all-btn">
              View All Services
            </Link>
          </div>

          <div className="services-preview-grid">
            {featuredServices.map((service, index) => (
              <div className="service-preview-card scroll-animate" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="service-icon-wrap">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-card-link">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <div className="container why-us-container">
          <div className="why-us-info scroll-animate">
            <span className="subtitle-badge">OUR EDGE</span>
            <h2>
              Why Organizations <br />
              <span className="gradient-text">Choose Hsynex</span>
            </h2>
            <p className="why-us-lead">
              We go beyond writing code. We act as strategic partners to
              co-create scalable solutions, align cloud initiatives with
              operational goals, and build trust through elite performance.
            </p>
            <div className="why-us-grid">
              {valueProps.map((prop, idx) => (
                <div className="why-us-item" key={idx}>
                  <h4>
                    <svg
                      className="check-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--primary-teal)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {prop.title}
                  </h4>
                  <p>{prop.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="why-us-visual scroll-animate">
            <div className="interactive-card">
              <div className="card-top">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="card-body">
                <pre>
                  <code>
                    {`// Hsynex Core Architecture
const company = {
  name: "Hsynex",
  values: ["Innovation", "Security", "Scale"],
  deliveryMethod: "DevOps & Agile",
  codeQuality: "A+",
  readyForNextProject: true
};

export default function deploy() {
  return company.values.map(val => val.toUpperCase());
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner-card scroll-animate">
            <h2>Ready to Elevate Your Technology Capabilities?</h2>
            <p>
              Get in touch with our solutions architects to discuss cloud
              integration, bespoke software delivery, or specialized IT audit
              requirements.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule Consultations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
