import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import "../assets/css/Services.css";

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

export default function Services() {
  const pageRef = useScrollReveal();

  const serviceCategories = [
    {
      id: "01",
      title: "Business Platforms & Operations Suites",
      subtitle: "Custom systems that unify fragmented workflows.",
      description:
        "We engineer end-to-end operational software tailored around your exact team roles, pipeline stages, inventory flows, and approval matrixes — replacing messy spreadsheets with hardened web platforms.",
      deliverables: [
        "Multi-Role Permission & Approval Portals",
        "Automated Sales & Order Pipelines",
        "Real-Time Telemetry & Inventory Dashboards",
        "Legacy Data Migration & Custom Integrations",
      ],
      tech: ["React / Vite", "Node.js", "PostgreSQL", "Redis", "Docker"],
    },
    {
      id: "02",
      title: "SaaS Product Engineering",
      subtitle: "From architecture to multi-tenant production launch.",
      description:
        "Building a commercial software product requires more than code — it demands multi-tenant data isolation, billing automation, telemetry tracking, and sub-second API response times.",
      deliverables: [
        "Multi-Tenant Database & Schema Design",
        "Subscription & Metered Billing Mechanics",
        "Real-time WebSocket Push & Notifications",
        "Role-Based Access Control (RBAC) & Audit Logs",
      ],
      tech: ["TypeScript", "Next.js", "FastAPI / Node", "Postgres", "Stripe API"],
    },
    {
      id: "03",
      title: "Modern Web & Mobile Applications",
      subtitle: "High-velocity frontends with sub-second performance.",
      description:
        "We build responsive, conversion-engineered web platforms and cross-platform mobile apps that deliver native-grade fluidity, robust offline caching, and immaculate UX.",
      deliverables: [
        "Pixel-Perfect Responsive UI/UX Systems",
        "Cross-Platform iOS & Android (React Native)",
        "Progressive Web Apps (PWA) with Offline Sync",
        "Core Web Vitals & SEO Speed Optimization",
      ],
      tech: ["React Native", "Next.js", "Tailwind / CSS Modules", "Framer Motion"],
    },
    {
      id: "04",
      title: "Custom CMS & Workflow Automation",
      subtitle: "Eliminating manual bottlenecks and developer dependencies.",
      description:
        "Empower marketing and operational teams to publish content, trigger webhook sequences, and manage catalogs freely without breaking production codebases.",
      deliverables: [
        "Headless CMS Setups & Content Modeling",
        "Automated Invoicing & Notification Webhooks",
        "Third-Party CRM / ERP Two-Way Sync",
        "Scheduled Background Cron & Queue Systems",
      ],
      tech: ["Headless CMS", "Webhook Engines", "BullMQ / RabbitMQ", "GraphQL"],
    },
    {
      id: "05",
      title: "Cloud Infrastructure & DevOps",
      subtitle: "High-uptime, self-healing cloud architectures.",
      description:
        "We architect secure cloud foundations with automated CI/CD pipelines, container orchestration, zero-downtime rolling deployments, and proactive monitoring.",
      deliverables: [
        "AWS, GCP & DigitalOcean Infrastructure",
        "Docker & Kubernetes Containerization",
        "Automated GitHub Actions CI/CD Pipelines",
        "Database Sharding, Backups & Disaster Recovery",
      ],
      tech: ["AWS", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
    },
    {
      id: "06",
      title: "API Architecture & Security Hardening",
      subtitle: "Resilient backend engines and zero-trust security.",
      description:
        "We design clean, versioned REST and GraphQL APIs with strict input validation, rate limiting, token authentication, and data encryption at rest and in transit.",
      deliverables: [
        "High-Throughput RESTful & GraphQL Endpoints",
        "JWT / OAuth2 Authentication & Session Guards",
        "Automated Rate Limiting & DDOS Mitigation",
        "Database Query Profiling & Index Tuning",
      ],
      tech: ["OpenAPI / Swagger", "OAuth 2.0", "Redis Caching", "SSL / TLS 1.3"],
    },
  ];

  return (
    <div className="services-page-root" ref={pageRef}>
      <div className="ambient-glow-top"></div>

      {/* Hero Section */}
      <section className="services-hero-section">
        <div className="container">
          <SectionHeader
            subtitle="SOLUTIONS & CAPABILITIES"
            title="Digital engineering built for scale."
            description="HSynex pairs senior product strategy with deep technical craftsmanship to build software systems that drive competitive advantage."
            centered={true}
          />
        </div>
      </section>

      {/* Capabilities List */}
      <section className="services-grid-section">
        <div className="container-wide">
          <div className="services-list-grid">
            {serviceCategories.map((service, idx) => (
              <div
                key={service.id}
                className="service-feature-card scroll-animate"
                style={{ transitionDelay: `${(idx % 2) * 0.1}s` }}
              >
                <div className="card-top-id">
                  <span className="service-id-badge">{service.id}</span>
                  <div className="tech-pills-row">
                    {service.tech.map((t) => (
                      <span key={t} className="tech-micro-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <span className="service-card-sub">{service.subtitle}</span>
                <p className="service-card-desc">{service.description}</p>

                <div className="deliverables-box">
                  <h4 className="deliv-heading">Key Deliverables</h4>
                  <ul className="deliv-list">
                    {service.deliverables.map((item) => (
                      <li key={item}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--hsynex-cyan)" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-bottom">
                  <Link to="/contact" className="btn btn-secondary btn-sm">
                    <span>Discuss This Solution</span>
                    <svg className="btn-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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

      {/* Bottom CTA Banner */}
      <section className="services-bottom-cta">
        <div className="container-wide">
          <div className="services-cta-box scroll-animate">
            <h2>Ready to plan your technical architecture?</h2>
            <p>
              Schedule an introductory technical consultation to evaluate your project scope,
              timeline requirements, and tech stack choices.
            </p>
            <div className="cta-flex-btns">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book Technical Consultation
              </Link>
              <Link to="/portfolio" className="btn btn-secondary btn-lg">
                Explore Selected Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
