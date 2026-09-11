import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProductMockup from "../components/UI/ProductMockup";
import SectionHeader from "../components/SectionHeader";
import "../assets/css/Home.css";

/* IntersectionObserver hook for smooth scroll animations */
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

  const capabilities = [
    {
      number: "01",
      title: "Business Platforms",
      description:
        "Custom systems that simplify operations, eliminate fragmented spreadsheets, and bring business workflows into one unified place.",
      tags: ["Custom ERP", "Internal Tools", "Operations Portals", "Database Architecture"],
      highlight: "Unified Operations",
    },
    {
      number: "02",
      title: "SaaS Products",
      description:
        "Scalable multi-tenant SaaS platforms designed around real business problems, built with robust subscription mechanics and high availability.",
      tags: ["Multi-Tenant", "API First", "Billing & Subscriptions", "Cloud Native"],
      highlight: "Scalable Architecture",
    },
    {
      number: "03",
      title: "Web & Mobile",
      description:
        "Modern responsive websites and mobile applications focused on fluid usability, high performance, and conversion-optimized interfaces.",
      tags: ["React / Next.js", "React Native", "Progressive Web Apps", "Performance Audited"],
      highlight: "High Performance",
    },
    {
      number: "04",
      title: "CMS & Automation",
      description:
        "Custom headless CMS configurations and workflow automations that eliminate manual bottlenecks and accelerate team execution.",
      tags: ["Headless CMS", "Webhook Pipelines", "Task Automation", "Custom Integrations"],
      highlight: "Zero Manual Waste",
    },
  ];

  const selectedProjects = [
    {
      title: "HSynex Restaurant OS",
      category: "Flagship SaaS Product",
      description:
        "Comprehensive restaurant management operating system combining real-time POS, live kitchen pipelines, floor table maps, digital QR menus, and smart automated inventory restocking.",
      stack: ["React", "Node.js", "WebSockets", "PostgreSQL", "Cloud Infra"],
      tag: "Live Product",
      metric: "Sub-second order sync",
      link: "#products",
    },
    {
      title: "Enterprise Operations & CRM Suite",
      category: "Business Platform",
      description:
        "Bespoke multi-tier pipeline management engine with automated deal routing, customer history timelines, team dispatch boards, and automated PDF invoicing.",
      stack: ["React", "PostgreSQL", "Tailored API", "Worker Queues"],
      tag: "Client Solution",
      metric: "65% workflow speedup",
      link: "/portfolio",
    },
    {
      title: "Real Estate & Architecture Platform",
      category: "Web Application",
      description:
        "Ultra-fast property discovery and luxury portfolio platform featuring virtual walkthroughs, dynamic search filters, and speed-optimized property catalogs.",
      stack: ["Next.js", "Headless CMS", "Edge CDN", "Interactive UI"],
      tag: "Web Platform",
      metric: "99+ Lighthouse Score",
      link: "/portfolio",
    },
    {
      title: "Healthcare Patient & Telehealth App",
      category: "Mobile & Web",
      description:
        "HIPAA-compliant patient portal for instant appointment booking, secure medical chart access, automated reminder alerts, and direct video consultations.",
      stack: ["React Native", "WebRTC", "Encrypted Storage", "FastAPI"],
      tag: "Mobile App",
      metric: "Zero-friction booking",
      link: "/portfolio",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Business First",
      description:
        "We understand the operational bottleneck, customer journey, and revenue model before writing a single line of code.",
    },
    {
      number: "02",
      title: "Product Thinking",
      description:
        "We engineer solutions with modular architecture and clean APIs so they can gracefully evolve as your business scales.",
    },
    {
      number: "03",
      title: "Modern Technology",
      description:
        "We leverage modern web standards, resilient cloud architectures, and snappy interfaces that users genuinely enjoy using.",
    },
    {
      number: "04",
      title: "Long-Term Mindset",
      description:
        "We build for tomorrow's growth with clean code, thorough documentation, and future-proof design systems.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      name: "Discover",
      text: "Deep-dive analysis into business workflows, user pain points, and technical objectives.",
    },
    {
      step: "02",
      name: "Design",
      text: "Craft intuitive UX flows, polished interfaces, and clean interactive product architecture.",
    },
    {
      step: "03",
      name: "Build",
      text: "Engineer scalable frontend and backend systems with high test coverage and strict standards.",
    },
    {
      step: "04",
      name: "Launch",
      text: "Deploy to production cloud infrastructure with automated CI/CD and zero-downtime rollouts.",
    },
    {
      step: "05",
      name: "Scale",
      text: "Monitor metrics, optimize throughput, and continuously evolve the product roadmap.",
    },
  ];

  return (
    <div className="home-page-root" ref={pageRef}>
      {/* Ambient background glows */}
      <div className="ambient-glow-top"></div>
      <div className="ambient-glow-bottom"></div>

      {/* =================================================================
          1. HERO SECTION
          ================================================================= */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <span className="badge">
                <span className="badge-dot"></span>
                Digital Products & SaaS Engineering
              </span>
            </div>

            <h1 className="hero-headline">
              BUILD DIGITAL.<br />
              <span className="gradient-text">BUILD SMARTER.</span>
            </h1>

            <p className="hero-subtext">
              HSynex designs and builds modern web, mobile and SaaS solutions for
              businesses ready to move beyond outdated systems.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Start a Project</span>
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <a href="#work" className="btn btn-secondary btn-lg">
                Explore Our Work
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="hero-highlights">
              <div className="highlight-item">
                <span className="highlight-dot"></span>
                <span>Product-Driven Architecture</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-dot"></span>
                <span>High-Speed Engineering</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-dot"></span>
                <span>Zero Outdated Tech</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup Showcase */}
          <div className="hero-visual-showcase">
            <ProductMockup variant="hero" />
          </div>
        </div>
      </section>

      {/* =================================================================
          2. TRUST / CAPABILITY CREDIBILITY STRIP
          ================================================================= */}
      <section className="capability-strip-section scroll-animate">
        <div className="container">
          <div className="capability-strip-card">
            <span className="strip-label">CORE DISCIPLINES</span>
            <div className="strip-divider"></div>
            <div className="strip-items-grid">
              <span className="strip-item">DIGITAL PRODUCTS</span>
              <span className="strip-dot">•</span>
              <span className="strip-item">WEB PLATFORMS</span>
              <span className="strip-dot">•</span>
              <span className="strip-item">SAAS ARCHITECTURES</span>
              <span className="strip-dot">•</span>
              <span className="strip-item">MOBILE APPS</span>
              <span className="strip-dot">•</span>
              <span className="strip-item">CMS & AUTOMATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          3. WHAT WE BUILD (BENTO GRID)
          ================================================================= */}
      <section className="section-padding what-we-build-section" id="solutions">
        <div className="container">
          <SectionHeader
            subtitle="WHAT WE BUILD"
            title="Digital products built for real-world businesses."
            description="We engineer bespoke systems engineered around your exact workflow, operational scale, and customer expectations."
            centered={true}
          />

          <div className="bento-services-grid">
            {capabilities.map((item, index) => (
              <div
                key={item.number}
                className={`bento-card bento-card-${index + 1} scroll-animate`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="bento-top">
                  <span className="bento-num">{item.number}</span>
                  <span className="bento-highlight-badge">{item.highlight}</span>
                </div>

                <div className="bento-body">
                  <h3 className="bento-title">{item.title}</h3>
                  <p className="bento-desc">{item.description}</p>
                </div>

                <div className="bento-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bento-footer">
                  <Link to="/services" className="bento-link">
                    <span>Explore Capability</span>
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

      {/* =================================================================
          4. PRODUCTS SECTION (FLAGSHIP: HSYNEX RESTAURANT)
          ================================================================= */}
      <section className="section-padding products-showcase-section" id="products">
        <div className="container">
          <div className="products-intro-wrap scroll-animate">
            <span className="subtitle-badge">
              <span className="subtitle-dot"></span>
              FLAGSHIP SOFTWARE PRODUCT
            </span>
            <h2 className="section-title-heading">Products we're building.</h2>
            <p className="section-desc-text">
              We don't just build client solutions — we design and ship our own high-scale
              commercial software products.
            </p>
          </div>

          <div className="flagship-product-card card-glow-hover scroll-animate">
            <div className="product-card-top-row">
              <div className="product-brand-tag">
                <span className="product-badge-flag">HSynex Product</span>
                <h3 className="product-title">HSynex Restaurant</h3>
                <p className="product-subtitle">
                  Smart restaurant management for modern operations.
                </p>
              </div>

              <div className="product-top-actions">
                <Link to="/contact" className="btn btn-primary">
                  <span>Request Product Demo</span>
                  <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="product-feature-pills">
              <span className="feat-pill">● Live POS & Orders</span>
              <span className="feat-pill">● Floor Table Maps</span>
              <span className="feat-pill">● Dynamic QR Menus</span>
              <span className="feat-pill">● Kitchen Pipeline</span>
              <span className="feat-pill">● AI Low-Stock Restocking</span>
              <span className="feat-pill">● Multi-Branch Analytics</span>
            </div>

            {/* Interactive Live Mockup Embed */}
            <div className="product-interactive-wrapper">
              <ProductMockup variant="showcase" />
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          5. SELECTED WORK
          ================================================================= */}
      <section className="section-padding selected-work-section" id="work">
        <div className="container">
          <div className="section-header-flex scroll-animate">
            <div>
              <span className="subtitle-badge">
                <span className="subtitle-dot"></span>
                PORTFOLIO & CASE STUDIES
              </span>
              <h2 className="section-title-heading">Selected Work</h2>
              <p className="section-desc-text">
                Real digital systems, SaaS platforms, and performance web apps built by HSynex.
              </p>
            </div>
            <Link to="/portfolio" className="btn btn-secondary">
              View All Projects
            </Link>
          </div>

          <div className="projects-grid">
            {selectedProjects.map((project, idx) => (
              <div
                key={project.title}
                className="project-display-card card-glow-hover scroll-animate"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="project-card-header">
                  <div className="project-tag-wrap">
                    <span className="badge badge-blue">{project.tag}</span>
                    <span className="project-metric-pill">{project.metric}</span>
                  </div>
                  <h3 className="project-name">{project.title}</h3>
                  <span className="project-cat-sub">{project.category}</span>
                </div>

                <p className="project-desc-body">{project.description}</p>

                <div className="project-stack-wrap">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-action-row">
                  {project.link.startsWith("#") ? (
                    <a href={project.link} className="project-view-btn">
                      <span>Explore Showcase</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  ) : (
                    <Link to={project.link} className="project-view-btn">
                      <span>View Case Study</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          6. WHY HSYNEX (OUR APPROACH)
          ================================================================= */}
      <section className="section-padding why-hsynex-section" id="about">
        <div className="container">
          <SectionHeader
            subtitle="OUR APPROACH"
            title="Built around the problem, not just the technology."
            description="We reject bloated code, generic templates, and vanity features. Every decision is grounded in real operational value."
            centered={true}
          />

          <div className="principles-grid">
            {principles.map((p, idx) => (
              <div
                key={p.number}
                className="principle-card scroll-animate"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="principle-num-circle">{p.number}</div>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          7. PROCESS (HORIZONTAL TIMELINE)
          ================================================================= */}
      <section className="section-padding process-section-root">
        <div className="container">
          <SectionHeader
            subtitle="DELIVERY TIMELINE"
            title="From idea to impact."
            description="A structured, transparent roadmap from initial architectural discovery to long-term scaling."
            centered={true}
          />

          <div className="process-flow-container">
            <div className="process-flow-track"></div>
            <div className="process-steps-grid">
              {processSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="process-flow-step scroll-animate"
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  <div className="step-node-bubble">
                    <span className="step-idx">{step.step}</span>
                  </div>
                  <h4 className="step-heading">{step.name}</h4>
                  <p className="step-text">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================================================================
          8. FINAL CTA BANNER
          ================================================================= */}
      <section className="section-padding cta-section-root">
        <div className="container">
          <div className="cta-impact-box scroll-animate">
            <div className="cta-glow-effect"></div>
            
            <div className="cta-content-wrapper">
              <span className="subtitle-badge">
                <span className="subtitle-dot"></span>
                READY TO ELEVATE
              </span>
              <h2 className="cta-main-title">
                Have a business problem worth solving?<br />
                <span className="gradient-text">Let's build something smarter.</span>
              </h2>
              <p className="cta-desc">
                Whether you need a bespoke internal business platform, a scalable SaaS product,
                or a modern web application, HSynex turns ambitious requirements into robust reality.
              </p>

              <div className="cta-buttons-row">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <span>Start a Project</span>
                  <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Talk to HSynex
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
