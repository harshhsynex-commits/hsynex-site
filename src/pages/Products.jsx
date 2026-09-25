import { Link } from "react-router-dom";
import ProductLabComingSoon from "../components/UI/ProductLabComingSoon";
import {
  PageHero,
  SectionTitle,
  CTASection,
  HSButton,
  useSEO,
} from "../components/UI/EditorialUI";
import "../assets/css/ProductLab.css";

export default function Products() {
  useSEO(
    "Product Department & R&D Labs — In Active Development",
    "Explore HSynex's confidential proprietary software pipeline. We engineer vertical operational systems and commercial SaaS products. Coming soon in 2026."
  );

  const pipelineItems = [
    {
      num: "01",
      badge: "Private Alpha Cohort",
      badgeClass: "badge-alpha",
      title: "HSynex Restaurant (OS)",
      desc: "An end-to-end synchronized restaurant management platform bringing live POS orders, visual kitchen displays, floor tables, and automated ingredient replenishment into one calm system.",
      specs: ["WebSockets", "Offline Cache", "Floor Telemetry", "Auto-PO Restock"],
      target: "Q4 2026",
      status: "Closed Alpha Pilot",
    },
    {
      num: "02",
      badge: "In Active Sprint",
      badgeClass: "badge-sprint",
      title: "SynexFlow Automation",
      desc: "A high-throughput distributed automation and workflow orchestration engine designed to connect fragmented enterprise CRMs, custom databases, and payment webhooks.",
      specs: ["Visual DAG", "Sub-10ms Latency", "Distributed Queues", "Webhook Ingestion"],
      target: "Q1 2027",
      status: "Developer Preview",
    },
    {
      num: "03",
      badge: "Architecture & R&D",
      badgeClass: "badge-arch",
      title: "OmniPulse Data Hub",
      desc: "A unified telemetry and digital performance hub for high-scale digital platforms. Live request latency heatmaps, user session journeys, and predictive anomaly detection.",
      specs: ["OpenTelemetry", "ClickHouse Engine", "Anomaly Alarms", "Privacy-Safe Tracing"],
      target: "2027",
      status: "R&D Prototype",
    },
  ];

  return (
    <div className="products-editorial-page">
      {/* 1. Hero Section */}
      <PageHero
        eyebrow="PRODUCT DEPARTMENT // R&amp;D LABS"
        title={
          <>
            PROPRIETARY SOFTWARE.<br />
            <span style={{ color: "var(--hsynex-cyan)" }}>
              CURRENTLY IN DEVELOPMENT.
            </span>
          </>
        }
        text="Beyond delivering bespoke software for clients, HSynex's product division is actively conceiving and engineering proprietary operational software platforms to eliminate friction in real-world industries."
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
          <HSButton to="/contact">APPLY FOR ALPHA PILOT</HSButton>
          <HSButton to="/solutions" secondary>
            EXPLORE CLIENT SOLUTIONS
          </HSButton>
        </div>
      </PageHero>

      {/* 2. Interactive Product Lab Console */}
      <section
        className="container"
        style={{ padding: "clamp(4rem, 7vw, 6.5rem) var(--container-padding)" }}
      >
        <SectionTitle
          eyebrow="CURRENT SPRINT DASHBOARD"
          title="THE IN-DEVELOPMENT PIPELINE."
          text="A real-time look into our proprietary engineering sprints, architecture decisions, and alpha deployment timelines."
        />

        <ProductLabComingSoon />
      </section>

      {/* 3. Detailed Pipeline Grid */}
      <section className="editorial-dark-section">
        <div
          className="container"
          style={{ padding: "clamp(5rem, 8vw, 7.5rem) var(--container-padding)" }}
        >
          <SectionTitle
            eyebrow="RELEASE ROADMAP // 2026–2027"
            title="PRODUCTS IN THE PIPELINE."
            text="Each product is engineered from the ground up to operate independently or connect via high-velocity event APIs."
          />

          <div className="products-pipeline-grid">
            {pipelineItems.map((item) => (
              <div key={item.num} className="pipeline-card">
                <div>
                  <div className="pipeline-card-top">
                    <span className="pipeline-card-num">PROJ / {item.num}</span>
                    <span className={`pipeline-card-badge ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="pipeline-card-title">{item.title}</h3>
                  <p className="pipeline-card-desc">{item.desc}</p>

                  <div className="pipeline-card-specs">
                    {item.specs.map((spec, i) => (
                      <span key={i} className="pipeline-spec-pill">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pipeline-card-footer">
                  <span className="pipeline-target-label">Target Milestone:</span>
                  <span className="pipeline-target-val">{item.target} ({item.status})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Engineering Principles */}
      <section
        className="container"
        style={{ padding: "clamp(5rem, 8vw, 7.5rem) var(--container-padding)" }}
      >
        <SectionTitle
          eyebrow="WHY WE BUILD PROPRIETARY PRODUCTS"
          title="ENGINEERED TO REMOVE OPERATIONAL NOISE."
          text="We take on product engineering problems where existing off-the-shelf software is bloated, disconnected, or painful for daily operators."
        />

        <div className="lab-values-grid">
          <div className="lab-value-col">
            <span className="lab-value-num">01 // UNIFIED SYSTEMS</span>
            <h4 className="lab-value-title">End-to-End Operational Truth</h4>
            <p className="lab-value-desc">
              We reject fragmented point-solutions that force teams into 5 disparate tabs. Our products unify data flows into a single reactive cockpit.
            </p>
          </div>

          <div className="lab-value-col">
            <span className="lab-value-num">02 // LATENCY OBSESSION</span>
            <h4 className="lab-value-title">Instantaneous Response</h4>
            <p className="lab-value-desc">
              Under heavy operational load, every millisecond counts. We design with optimistic local updates, edge caching, and sub-second query pipelines.
            </p>
          </div>

          <div className="lab-value-col">
            <span className="lab-value-num">03 // CALM INTERFACES</span>
            <h4 className="lab-value-title">Zero Enterprise Bloat</h4>
            <p className="lab-value-desc">
              Every screen, button, and indicator earns its position. We prioritize ergonomic efficiency so new staff onboard in minutes without training.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Alpha Cohort Callout & CTA */}
      <CTASection />
    </div>
  );
}
