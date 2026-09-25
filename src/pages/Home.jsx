import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductLabComingSoon from "../components/UI/ProductLabComingSoon";
import {
  HSButton,
  SectionTitle,
  ServiceRows,
  Timeline,
  TechStrip,
  CTASection,
  VisualPreview,
  useSEO,
} from "../components/UI/EditorialUI";
import "../assets/css/Home.css";

export default function Home() {
  useSEO(
    "Build Digital. Build Smarter.",
    "HSynex designs and builds modern web, mobile, SaaS and business software solutions designed to help businesses work smarter."
  );

  return (
    <div className="home-editorial-root">
      {/* 1. HERO SECTION - PROFESSIONAL COMPANY STRUCTURE */}
      <section className="relative border-b border-slate-800/80 home-hero-section">
        <div className="technical-grid pointer-events-none" style={{ position: "absolute", inset: 0, opacity: 0.45 }} />
        
        <div className="container hero-company-container">
          <div className="hero-company-top-grid">
            {/* Left Headline & Action Column */}
            <div className="hero-company-headline-col">
              <div className="hero-badge-wrap">
                <span className="eyebrow">
                  HSYNEX TECHNOLOGIES &bull; SOFTWARE ARCHITECTURE &amp; SYSTEMS
                </span>
              </div>
              
              <h1 className="hero-editorial-title">
                BUILD DIGITAL.<br />
                <span style={{ color: "var(--hsynex-cyan)" }}>BUILD SMARTER.</span>
              </h1>

              <p className="hero-editorial-desc">
                We engineer bespoke web applications, mobile platforms, and business systems designed around real-world workflows, operational scale, and high-velocity teams.
              </p>

              <div className="hero-editorial-actions">
                <HSButton to="/contact">START A PROJECT</HSButton>
                <HSButton to="/solutions" secondary>EXPLORE CAPABILITIES</HSButton>
              </div>
            </div>

            {/* Right Company Overview & Architecture Console */}
            <div className="hero-company-console-col">
              <div className="company-console-card">
                <div className="console-card-header">
                  <div className="console-header-left">
                    <span className="console-dot-green"></span>
                    <span className="console-title">COMPANY ARCHITECTURE // 2026</span>
                  </div>
                  <span className="console-status-badge">ACTIVE ENGAGEMENTS</span>
                </div>

                <div className="console-specs-list">
                  <div className="console-spec-row">
                    <div className="spec-row-top">
                      <span className="spec-id">01</span>
                      <span className="spec-name">WEB &amp; CLOUD SYSTEMS</span>
                      <span className="spec-pill">High Velocity</span>
                    </div>
                    <p className="spec-detail">
                      React &bull; Next.js &bull; Node &bull; Edge Caching &bull; Sub-second Portals
                    </p>
                  </div>

                  <div className="console-spec-row">
                    <div className="spec-row-top">
                      <span className="spec-id">02</span>
                      <span className="spec-name">MOBILE APPLICATIONS</span>
                      <span className="spec-pill">Cross-Platform</span>
                    </div>
                    <p className="spec-detail">
                      React Native &bull; iOS &bull; Android &bull; Offline Sync &bull; Workforce Tools
                    </p>
                  </div>

                  <div className="console-spec-row">
                    <div className="spec-row-top">
                      <span className="spec-id">03</span>
                      <span className="spec-name">BESPOKE BUSINESS SOFTWARE</span>
                      <span className="spec-pill">Operations</span>
                    </div>
                    <p className="spec-detail">
                      PostgreSQL &bull; Redis Queues &bull; Custom ERPs &bull; Automated Pipelines
                    </p>
                  </div>

                  <div className="console-spec-row">
                    <div className="spec-row-top">
                      <span className="spec-id">04</span>
                      <span className="spec-name">COMMERCIAL SAAS</span>
                      <span className="spec-pill">Multi-Tenant</span>
                    </div>
                    <p className="spec-detail">
                      Stripe Billing &bull; Telemetry &bull; RBAC &bull; High-Scale Cloud Native
                    </p>
                  </div>
                </div>

                <div className="console-footer-bar">
                  <div className="console-stat">
                    <span className="stat-label">CODE CUSTODY</span>
                    <span className="stat-val">100% Client IP</span>
                  </div>
                  <div className="console-stat-sep"></div>
                  <div className="console-stat">
                    <span className="stat-label">ENGAGEMENT</span>
                    <span className="stat-val">Direct Principal</span>
                  </div>
                  <div className="console-stat-sep"></div>
                  <div className="console-stat">
                    <span className="stat-label">STANDARD</span>
                    <span className="stat-val">Zero-Bloat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Company Capability Matrix */}
          <div className="hero-structure-grid">
            <div className="structure-card">
              <div className="structure-card-top">
                <span className="structure-card-num">01</span>
                <span className="structure-tag">WEB PLATFORMS</span>
              </div>
              <h3 className="structure-card-title">Modern Web Applications</h3>
              <p className="structure-card-desc">
                High-performance customer portals, interactive dashboards, and responsive web platforms built for speed.
              </p>
            </div>

            <div className="structure-card">
              <div className="structure-card-top">
                <span className="structure-card-num">02</span>
                <span className="structure-tag">MOBILE SYSTEMS</span>
              </div>
              <h3 className="structure-card-title">Mobile Applications</h3>
              <p className="structure-card-desc">
                Cross-platform iOS and Android products designed with native fluidity for customers and teams in motion.
              </p>
            </div>

            <div className="structure-card">
              <div className="structure-card-top">
                <span className="structure-card-num">03</span>
                <span className="structure-tag">BUSINESS SOFTWARE</span>
              </div>
              <h3 className="structure-card-title">Bespoke Operations Suites</h3>
              <p className="structure-card-desc">
                Purpose-built internal tools, automated order workflows, and unified databases that eliminate manual bottlenecks.
              </p>
            </div>

            <div className="structure-card">
              <div className="structure-card-top">
                <span className="structure-card-num">04</span>
                <span className="structure-tag">SAAS ARCHITECTURE</span>
              </div>
              <h3 className="structure-card-title">SaaS Product Engineering</h3>
              <p className="structure-card-desc">
                Multi-tenant cloud architectures, billing subscription mechanics, and reliable infrastructure engineered for scale.
              </p>
            </div>
          </div>

          {/* Enterprise Engineering Trust Indicators */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <span className="trust-dot">&bull;</span>
              <span>100% Client Code &amp; IP Ownership</span>
            </div>
            <div className="trust-item">
              <span className="trust-dot">&bull;</span>
              <span>Direct Principal Engineer Collaboration</span>
            </div>
            <div className="trust-item">
              <span className="trust-dot">&bull;</span>
              <span>Sub-Second Latency Architecture</span>
            </div>
            <div className="trust-item">
              <span className="trust-dot">&bull;</span>
              <span>Zero Legacy Template Bloat</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY STATEMENT */}
      <section className="container statement-section">
        <div className="statement-grid">
          <h2 className="statement-heading">
            WE DON'T JUST BUILD WEBSITES.<br />
            <span style={{ color: "var(--hsynex-muted-dark)" }}>WE BUILD SYSTEMS BUSINESSES RUN ON.</span>
          </h2>
          <p className="statement-desc">
            From customer-facing websites to internal business platforms, HSynex turns real business problems into practical digital products.
          </p>
        </div>
      </section>

      {/* 3. CAPABILITY MAP (SOLUTIONS) */}
      <section id="solutions" className="editorial-dark-section">
        <div className="container" style={{ padding: "clamp(5rem, 8vw, 7.5rem) var(--container-padding)" }}>
          <SectionTitle
            eyebrow="CAPABILITY MAP / 06"
            title="WHAT WE BUILD"
            text="Explore the six core digital disciplines we engineer for modern businesses."
          />
          <ServiceRows />
        </div>
      </section>

      {/* 4. PRODUCT DEPARTMENT & R&D PIPELINE (COMING SOON) */}
      <section id="products" className="container" style={{ padding: "clamp(5rem, 9vw, 8.5rem) var(--container-padding)" }}>
        <SectionTitle
          eyebrow="PRODUCT DEPARTMENT // COMING SOON"
          title={
            <>
              PROPRIETARY SOFTWARE.<br />
              <span style={{ color: "var(--hsynex-cyan)" }}>CURRENTLY IN DEVELOPMENT.</span>
            </>
          }
          text="Beyond client software engineering, HSynex's product division is actively designing and developing proprietary operational software and vertical platforms. Explore our confidential pipeline below."
        />

        <ProductLabComingSoon />
      </section>

      {/* 5. THE METHOD (PROCESS TIMELINE) */}
      <section className="editorial-dark-section">
        <div className="container" style={{ padding: "clamp(5rem, 8vw, 7.5rem) var(--container-padding)" }}>
          <SectionTitle
            eyebrow="THE METHOD / 05"
            title={
              <>
                FROM BUSINESS PROBLEM<br />
                <span style={{ color: "var(--hsynex-muted-dark)" }}>TO DIGITAL PRODUCT.</span>
              </>
            }
          />
          <Timeline />
        </div>
      </section>

      {/* 6. TESTIMONIALS & CLIENT TRUST */}
      <section id="testimonials" className="container" style={{ padding: "clamp(5rem, 9vw, 8.5rem) var(--container-padding)" }}>
        <SectionTitle
          eyebrow="CLIENT VOICES &amp; TRUST"
          title={
            <>
              WHAT BUSINESS LEADERS<br />
              <span style={{ color: "var(--hsynex-cyan)" }}>SAY ABOUT HSYNEX.</span>
            </>
          }
          text="Direct operational feedback from founders, CTOs, and operations leaders who rely on HSynex engineering."
        />

        <div className="testimonials-grid">
          <div className="testimonial-card preview-panel">
            <div className="testimonial-stars-row">
              <span className="stars-icons">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="stars-label">5.0 / 5.0</span>
            </div>
            <p className="testimonial-quote">
              &ldquo;HSynex replaced our tangled spreadsheets with an operations platform that felt native to our team on day one. Our order turnaround went from 48 hours to sub-2 hours.&rdquo;
            </p>
            <div className="testimonial-author-box">
              <div className="author-avatar-badge">DR</div>
              <div className="author-meta">
                <h4 className="author-name">David Ross</h4>
                <p className="author-role">VP of Operations &bull; Nexus Logistics</p>
                <span className="author-verify-tag">&#10003; Bespoke Business Platform</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card preview-panel">
            <div className="testimonial-stars-row">
              <span className="stars-icons">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="stars-label">5.0 / 5.0</span>
            </div>
            <p className="testimonial-quote">
              &ldquo;Finding an engineering studio that writes clean, zero-bloat code without trying to lock you into proprietary stacks is rare. 100% repository handover and sub-second API speeds.&rdquo;
            </p>
            <div className="testimonial-author-box">
              <div className="author-avatar-badge">EV</div>
              <div className="author-meta">
                <h4 className="author-name">Elena Vance</h4>
                <p className="author-role">Co-Founder &amp; CTO &bull; PulseMetrics SaaS</p>
                <span className="author-verify-tag">&#10003; High-Scale SaaS Build</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card preview-panel">
            <div className="testimonial-stars-row">
              <span className="stars-icons">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span className="stars-label">5.0 / 5.0</span>
            </div>
            <p className="testimonial-quote">
              &ldquo;Their team operates like true product co-founders. They asked the hard architectural questions early and delivered our cross-platform mobile system ahead of our investor demo.&rdquo;
            </p>
            <div className="testimonial-author-box">
              <div className="author-avatar-badge">MS</div>
              <div className="author-meta">
                <h4 className="author-name">Marcus Sterling</h4>
                <p className="author-role">Head of Product &bull; Apex Commercial Group</p>
                <span className="author-verify-tag">&#10003; Cross-Platform Mobile System</span>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Summary Trust Bar */}
        <div className="testimonials-trust-metrics">
          <div className="trust-metric-cell">
            <span className="metric-big">5.0</span>
            <span className="metric-sub">Average Engineering Rating</span>
          </div>
          <div className="metric-sep"></div>
          <div className="trust-metric-cell">
            <span className="metric-big">100%</span>
            <span className="metric-sub">Client IP &amp; Code Ownership</span>
          </div>
          <div className="metric-sep"></div>
          <div className="trust-metric-cell">
            <span className="metric-big">&lt; 300ms</span>
            <span className="metric-sub">Target Sync Latency</span>
          </div>
          <div className="metric-sep"></div>
          <div className="trust-metric-cell">
            <span className="metric-big">0%</span>
            <span className="metric-sub">Proprietary Lock-in</span>
          </div>
        </div>
      </section>

      {/* 7. OUR PRINCIPLES */}
      <section className="editorial-dark-section">
        <div className="container" style={{ padding: "clamp(5rem, 8vw, 7.5rem) var(--container-padding)" }}>
          <SectionTitle
            eyebrow="OUR PRINCIPLES"
            title={
              <>
                BUILT FOR BUSINESSES<br />
                <span style={{ color: "var(--hsynex-muted-dark)" }}>THAT WANT TO WORK SMARTER.</span>
              </>
            }
          />

          <div className="principles-editorial-grid">
            {[
              ["01", "BUSINESS FIRST", "Technology should solve a real operational problem, not just look impressive."],
              ["02", "PRODUCT THINKING", "We design around how people and teams actually work during a busy workday."],
              ["03", "BUILT TO EVOLVE", "Systems should have clean modular architectures ready for the next growth stage."],
              ["04", "CONNECTED EXPERIENCE", "The whole workflow across web, mobile, and backend should feel like one system."],
            ].map(([num, title, desc]) => (
              <div key={num} className="principle-editorial-item">
                <span className="principle-num">{num}</span>
                <div>
                  <h3 className="principle-item-title">{title}</h3>
                  <p className="principle-item-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECH STRIP */}
      <TechStrip />

      {/* 9. ABOUT SUMMARY */}
      <section id="about" className="about-summary-section">
        <div className="container about-summary-grid">
          <SectionTitle
            eyebrow="ABOUT HSYNEX"
            title={
              <>
                SOFTWARE BUILT<br />
                <span style={{ color: "var(--hsynex-cyan)" }}>WITH PURPOSE.</span>
              </>
            }
          />
          <div className="about-summary-text">
            <p>
              HSynex is a software and technology studio focused on building practical digital products and business systems.
            </p>
            <p style={{ marginTop: "1.25rem" }}>
              We combine product thinking, modern engineering and a clear understanding of business workflows to create software that is useful beyond launch day.
            </p>
          </div>
        </div>
      </section>

      {/* 10. HIGH-IMPACT CTA */}
      <CTASection />
    </div>
  );
}
