import { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/ProductLab.css";

const LAB_PRODUCTS = [
  {
    id: "restaurant-os",
    num: "01",
    tabLabel: "RESTAURANT OS",
    stage: "Private Alpha",
    badgeClass: "badge-alpha",
    codename: "LAB-PROJ-01 // HOSPITALITY WORKSPACE",
    title: "HSynex Restaurant (OS)",
    desc: "A unified restaurant operational operating system combining live cloud POS, visual kitchen display pipelines (KDS), floor table telemetry, and automated inventory depletion into one seamless interface.",
    specs: [
      "WebSocket Real-Time Sync",
      "Offline-First SQLite Cache",
      "Dynamic Floor Map Telemetry",
      "Auto Replenishment Purchase Orders",
      "Zero-Latency Kitchen Queue",
    ],
    progress: 86,
    targetMilestone: "Q4 2026 // Closed Alpha Cohort",
    phaseStatus: "Core Architecture Complete",
    sprintFocus: "Floor Map & KDS Integration Testing",
  },
  {
    id: "synexflow",
    num: "02",
    tabLabel: "SYNEXFLOW ENGINE",
    stage: "In Active Sprint",
    badgeClass: "badge-sprint",
    codename: "LAB-PROJ-02 // WORKFLOW ORCHESTRATION",
    title: "SynexFlow Event Automator",
    desc: "A high-throughput distributed automation and workflow orchestration engine designed to connect fragmented enterprise CRMs, custom databases, billing webhooks, and third-party APIs with zero data loss.",
    specs: [
      "Sub-10ms Event Dispatching",
      "Visual DAG Workflow Builder",
      "Distributed Retry Queues",
      "End-to-End Cryptographic Audit",
      "Native Webhook Ingestion",
    ],
    progress: 68,
    targetMilestone: "Q1 2027 // Developer Preview",
    phaseStatus: "Event Engine Core Finalized",
    sprintFocus: "Connector SDK & Retry Queuing",
  },
  {
    id: "omnipulse",
    num: "03",
    tabLabel: "OMNIPULSE TELEMETRY",
    stage: "Architecture & R&D",
    badgeClass: "badge-arch",
    codename: "LAB-PROJ-03 // APPLICATION OBSERVABILITY",
    title: "OmniPulse Data Hub",
    desc: "A high-scale telemetry and performance monitoring hub for digital business platforms. Aggregates request latencies, user session health, database query bottlenecks, and live infrastructure vitals.",
    specs: [
      "OpenTelemetry Native Protocol",
      "Sub-Second ClickHouse Aggregation",
      "Anomaly Detection Alarms",
      "Privacy-Safe Session Insights",
      "Custom Dashboard Canvas",
    ],
    progress: 44,
    targetMilestone: "2027 // Internal R&D Pipeline",
    phaseStatus: "Ingestion Architecture Scoped",
    sprintFocus: "Telemetry Collector Benchmark",
  },
];

export default function ProductLabComingSoon() {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const product = LAB_PRODUCTS[activeTab];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setSubmitted(true);
    }
  };

  return (
    <div className="product-lab-wrapper">
      <div className="product-lab-glow" />

      <div className="product-lab-console">
        {/* Console Header Bar */}
        <div className="lab-console-header">
          <div className="lab-header-status">
            <span className="lab-pulse-indicator" />
            <span className="lab-status-title">
              PRODUCT DEPARTMENT // ACTIVE PIPELINE 2026
            </span>
          </div>
          <span className="lab-stage-badge">
            CONFIDENTIAL R&amp;D LAB
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="lab-tab-bar" role="tablist">
          {LAB_PRODUCTS.map((item, idx) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={activeTab === idx}
              className={`lab-tab-btn ${activeTab === idx ? "active" : ""}`}
              onClick={() => {
                setActiveTab(idx);
                setSubmitted(false);
              }}
            >
              <span className="lab-tab-num">{item.num}</span>
              <span>{item.tabLabel}</span>
              <span className="lab-tab-pill">{item.stage}</span>
            </button>
          ))}
        </div>

        {/* Active Product Body */}
        <div className="lab-card-body">
          <div className="lab-body-grid">
            {/* Left Column: Product Information */}
            <div className="lab-info-col">
              <div className="lab-meta-row">
                <span className="lab-codename">{product.codename}</span>
                <span className={`pipeline-card-badge ${product.badgeClass}`}>
                  {product.stage}
                </span>
              </div>

              <h3 className="lab-product-title">{product.title}</h3>
              <p className="lab-product-desc">{product.desc}</p>

              <div>
                <div className="lab-specs-title">ENGINEERED ARCHITECTURE &amp; CAPABILITIES:</div>
                <div className="lab-specs-list">
                  {product.specs.map((spec, i) => (
                    <span key={i} className="lab-spec-chip">
                      <span className="lab-spec-dot" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Waitlist / Early Access notification box */}
              <div className="lab-waitlist-box">
                <div className="waitlist-header">
                  <h4 className="waitlist-title">Be First in Line for Private Alpha</h4>
                  <p className="waitlist-subtitle">
                    Get confidential release bulletins and priority access when pilot cohorts open for {product.title}.
                  </p>
                </div>

                {submitted ? (
                  <div className="waitlist-success">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>You're registered for confidential pilot access updates.</span>
                  </div>
                ) : (
                  <form className="waitlist-form" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      className="waitlist-input"
                      placeholder="Enter work email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="waitlist-btn">
                      Request Alpha Access
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Engineering Telemetry */}
            <div className="lab-telemetry-panel">
              <div className="telemetry-row">
                <div className="telemetry-label-row">
                  <span className="telemetry-label">BUILD COMPLETION</span>
                  <span className="telemetry-val">{product.progress}%</span>
                </div>
                <div className="telemetry-progress-track">
                  <div
                    className="telemetry-progress-fill"
                    style={{ width: `${product.progress}%` }}
                  />
                </div>
              </div>

              <div className="telemetry-row">
                <div className="telemetry-label-row">
                  <span className="telemetry-label">CURRENT STATUS</span>
                </div>
                <div style={{ color: "#F8FAFC", fontSize: "0.85rem", fontWeight: 500 }}>
                  {product.phaseStatus}
                </div>
              </div>

              <div className="telemetry-row">
                <div className="telemetry-label-row">
                  <span className="telemetry-label">CURRENT SPRINT FOCUS</span>
                </div>
                <div
                  style={{
                    color: "var(--hsynex-muted)",
                    fontSize: "0.85rem",
                    lineHeight: 1.5,
                  }}
                >
                  {product.sprintFocus}
                </div>
              </div>

              <div className="telemetry-milestones">
                <div className="milestone-item">
                  <span className="milestone-caption">TARGET PILOT</span>
                  <span className="milestone-text">{product.targetMilestone}</span>
                </div>
                <div className="milestone-item">
                  <span className="milestone-caption">DISTRIBUTION</span>
                  <span className="milestone-text">Private Invitation</span>
                </div>
              </div>

              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid #162231",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--hsynex-muted-dark)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  IP OWNERSHIP
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#00D1FF",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                  }}
                >
                  HSynex Proprietary Lab
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation in Console */}
        <div className="lab-console-footer">
          <div className="lab-footer-meta">
            Our product division designs focused software for high-leverage business operations.
          </div>
          <Link to="/products" className="lab-footer-link">
            <span>Explore Full Product Department Roadmap</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
