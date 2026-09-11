import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import "../assets/css/About.css";

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

export default function About() {
  const pageRef = useScrollReveal();

  const corePillars = [
    {
      title: "Business-First Engineering",
      desc: "We don't build software for the sake of technology. Every architectural choice, database schema, and interface interaction must solve an operational friction point or unlock revenue.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: "Product Thinking Over 'Agency' Delivery",
      desc: "We approach projects not as short-term ticket-completers, but as product co-founders — thinking through unit economics, scalability curves, onboarding flows, and release iterations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
    },
    {
      title: "Zero Bloat & Modern Standards",
      desc: "We reject bloated legacy templates and unnecessary libraries. We engineer lean, accessible, lightning-fast interfaces on modern React and cloud architectures.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: "Security & Long-Term Durability",
      desc: "Our codebases are built with clean modular abstractions, automated testing, strict authorization boundaries, and thorough documentation for frictionless handover.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="about-page-root" ref={pageRef}>
      <div className="ambient-glow-top"></div>

      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="container">
          <SectionHeader
            subtitle="WHO WE ARE"
            title="Building the software layer for forward-thinking businesses."
            description="HSynex was founded to eliminate the gap between high-level business vision and tactical software engineering."
            centered={true}
          />
        </div>
      </section>

      {/* Mission & Approach Narrative */}
      <section className="about-narrative-section">
        <div className="container narrative-grid">
          <div className="narrative-col scroll-animate">
            <span className="subtitle-badge">
              <span className="subtitle-dot"></span>
              THE HSYNEX STANDARD
            </span>
            <h2 className="narrative-heading">
              Software engineered with precision, not templates.
            </h2>
            <p className="narrative-p">
              Too many businesses get stuck with cookie-cutter WordPress themes, disjointed no-code tools that break at scale, or oversized agencies that charge six figures for slow progress.
            </p>
            <p className="narrative-p">
              HSynex operates differently. We operate as a high-velocity product engineering studio. We combine technical rigor with deep empathy for business operations, building bespoke platforms that streamline day-to-day work and scale effortlessly.
            </p>
          </div>

          <div className="narrative-visual-col scroll-animate">
            <div className="architecture-box">
              <div className="arch-header">
                <span className="arch-dot"></span>
                <span>HSynex Engineering Principles</span>
              </div>
              <div className="arch-body">
                <div className="arch-item">
                  <span className="arch-check">✓</span>
                  <div>
                    <strong>Type-Safe & Modular Architecture</strong>
                    <p>Maintainable codebases that grow with your team.</p>
                  </div>
                </div>
                <div className="arch-item">
                  <span className="arch-check">✓</span>
                  <div>
                    <strong>Sub-Second Response Targets</strong>
                    <p>Optimized database indexes and edge-cached frontends.</p>
                  </div>
                </div>
                <div className="arch-item">
                  <span className="arch-check">✓</span>
                  <div>
                    <strong>Direct Principal Communication</strong>
                    <p>Work directly with engineers and product architects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="about-pillars-section">
        <div className="container">
          <SectionHeader
            subtitle="HOW WE WORK"
            title="Our Guiding Values"
            centered={true}
          />

          <div className="pillars-cards-grid">
            {corePillars.map((p, idx) => (
              <div
                key={p.title}
                className="pillar-card card-glow-hover scroll-animate"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="pillar-icon-box">{p.icon}</div>
                <h3 className="pillar-card-title">{p.title}</h3>
                <p className="pillar-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-container scroll-animate">
            <h2>Ready to build something lasting?</h2>
            <p>
              Whether you need to architect a new commercial SaaS or modernize an outdated business system, let's talk.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
