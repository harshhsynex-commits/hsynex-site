import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import "../assets/css/Portfolio.css";

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

export default function Portfolio() {
  const pageRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "SaaS & Products", "Business Platforms", "Web Apps", "Mobile"];

  const projects = [
    {
      title: "HSynex Restaurant OS",
      category: "SaaS & Products",
      badge: "Commercial SaaS Product",
      stats: "Real-time Order & Table Sync",
      tools: ["React", "Node.js", "WebSockets", "PostgreSQL", "Tailwind"],
      desc: "Complete restaurant operations platform featuring live kitchen order pipelines, visual table floor maps, digital QR code menus, dynamic pricing, and AI-assisted low-stock restocking.",
      iconText: "RO",
    },
    {
      title: "Custom CRM & Sales Pipeline Engine",
      category: "Business Platforms",
      badge: "Enterprise Business Platform",
      stats: "65% Faster Lead Processing",
      tools: ["React", "PostgreSQL", "Node.js", "Redis Queues"],
      desc: "Multi-tenant CRM system with interactive Kanban deal pipelines, automated email sequence triggers, centralized team communications, and role-based staff permissions.",
      iconText: "CR",
    },
    {
      title: "Luxury Real Estate & Architectural Showcase",
      category: "Web Apps",
      badge: "High-Performance Web Platform",
      stats: "99+ Performance & SEO Score",
      tools: ["Next.js", "Headless CMS", "Edge CDN", "Framer Motion"],
      desc: "Ultra-fast property discovery catalog featuring immersive virtual walkthroughs, dynamic geographic filters, responsive floor plans, and automated lead capture.",
      iconText: "RE",
    },
    {
      title: "Healthcare Patient & Telehealth Portal",
      category: "Mobile",
      badge: "Cross-Platform Mobile App",
      stats: "HIPAA Compliant Architecture",
      tools: ["React Native", "WebRTC", "FastAPI", "Encrypted Storage"],
      desc: "Patient-first mobile application facilitating direct telemedicine video consultations, instant clinic appointment booking, push reminders, and encrypted medical records.",
      iconText: "HC",
    },
    {
      title: "IoT Fleet Telemetry & Logistics Suite",
      category: "Business Platforms",
      badge: "Operations Dashboard",
      stats: "Real-Time Sensor Telemetry",
      tools: ["React", "WebSockets", "TimescaleDB", "Node.js"],
      desc: "Live monitoring console tracking freight geolocation, temperature sensor readings, door integrity, and automated route deviation alert systems across commercial fleets.",
      iconText: "LT",
    },
    {
      title: "Automated Invoicing & Financial Ledger",
      category: "Web Apps",
      badge: "Financial Technology Platform",
      stats: "Sub-Second Multi-Currency Ledger",
      tools: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      desc: "Core transactional platform featuring double-entry audit logs, automated GST/tax calculations, PDF invoice generation, and bank payout reconciliation webhooks.",
      iconText: "FL",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="portfolio-page-root" ref={pageRef}>
      <div className="ambient-glow-top"></div>

      {/* Hero Header */}
      <section className="portfolio-hero-section">
        <div className="container">
          <SectionHeader
            subtitle="SELECTED WORK & SYSTEMS"
            title="Engineered for real-world impact."
            description="Explore our flagship SaaS products, custom business platforms, and high-performance digital systems."
            centered={true}
          />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="portfolio-filter-section">
        <div className="container">
          <div className="filter-tabs-wrapper">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section">
        <div className="container-wide">
          <div className="portfolio-items-grid">
            {filteredProjects.map((project, index) => (
              <div
                className="portfolio-project-card card-glow-hover scroll-animate"
                key={project.title}
                style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
              >
                <div className="portfolio-card-top">
                  <div className="project-initial-badge">{project.iconText}</div>
                  <div className="project-card-meta">
                    <span className="project-type-tag">{project.badge}</span>
                    <span className="project-metric-stat">{project.stats}</span>
                  </div>
                </div>

                <h3 className="project-card-heading">{project.title}</h3>
                <p className="project-card-narrative">{project.desc}</p>

                <div className="project-toolset">
                  {project.tools.map((t) => (
                    <span key={t} className="tool-chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="portfolio-card-action">
                  <Link to="/contact" className="project-action-link">
                    <span>Inquire About Similar Build</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Spotlight Case Study */}
      <section className="case-spotlight-section">
        <div className="container-wide">
          <div className="spotlight-container-box scroll-animate">
            <div className="spotlight-badge-row">
              <span className="subtitle-badge">PRODUCT SPOTLIGHT</span>
              <span className="status-live-pill">● In Active Development</span>
            </div>

            <h2 className="spotlight-title">HSynex Restaurant: Reimagining Hospitality Tech</h2>
            <p className="spotlight-lead">
              Traditional restaurant systems are clunky, slow, and split across 4 different subscription tools.
              We built HSynex Restaurant as a unified OS connecting POS, Kitchen, Tables, and Inventory in real time.
            </p>

            <div className="spotlight-pillars-grid">
              <div className="pillar-item">
                <h4>01. Sub-Second Synchronization</h4>
                <p>
                  Orders taken at tables or scanned via QR appear on the kitchen display in under 300ms using WebSocket event streaming.
                </p>
              </div>
              <div className="pillar-item">
                <h4>02. Interactive Floor Maps</h4>
                <p>
                  Visual dining room maps provide instant visibility over table occupancy, party sizes, active checks, and reservation turn times.
                </p>
              </div>
              <div className="pillar-item">
                <h4>03. Automated Restock Triggers</h4>
                <p>
                  Ingredient consumption is tracked per dish in real-time, notifying managers and drafting supplier purchase orders before critical items run out.
                </p>
              </div>
            </div>

            <div className="spotlight-cta-row">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Schedule a Product Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
