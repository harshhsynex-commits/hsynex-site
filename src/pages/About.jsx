import { PageHero, SectionTitle, Timeline, TechStrip, CTASection, HSButton, useSEO } from "../components/UI/EditorialUI";

export default function About() {
  useSEO(
    "About HSynex — Software Built With Purpose",
    "HSynex is a software and technology company focused on building practical digital products and business systems. Technology should make business simpler."
  );

  return (
    <div className="about-editorial-page">
      <PageHero
        eyebrow="ABOUT HSYNEX"
        title={
          <>
            TECHNOLOGY SHOULD<br />
            <span style={{ color: "var(--hsynex-cyan)" }}>MAKE BUSINESS SIMPLER.</span>
          </>
        }
        text="HSynex is a software and technology company focused on building practical digital products and business systems."
      >
        <HSButton to="/contact">START A CONVERSATION</HSButton>
      </PageHero>

      {/* What We Believe */}
      <section className="container" style={{ padding: "clamp(5rem, 8vw, 8rem) var(--container-padding)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "flex-start",
          }}
        >
          <SectionTitle
            eyebrow="WHAT WE BELIEVE"
            title="USEFUL SOFTWARE EARNS ITS PLACE."
          />
          <div style={{ maxWidth: "480px" }}>
            <p style={{ fontSize: "1.15rem", lineHeight: 1.8, color: "var(--hsynex-text-dim)" }}>
              We believe technology is at its best when it makes a real business easier to run, gives people more clarity, and creates room for better work.
            </p>
            <p style={{ marginTop: "1.5rem", fontSize: "1rem", lineHeight: 1.7, color: "var(--hsynex-muted)" }}>
              Too many businesses get stuck with cookie-cutter templates, disjointed no-code tools that break under daily transaction volume, or bloated agencies that charge high retainers for slow progress. HSynex operates differently: senior engineering craftsmanship, direct communication, and zero vanity features.
            </p>
          </div>
        </div>

        {/* Engineering Standards */}
        <div style={{ marginTop: "6rem", borderTop: "1px solid var(--hsynex-border)", paddingTop: "3rem" }}>
          <p className="eyebrow" style={{ marginBottom: "1.5rem" }}>ENGINEERING PILLARS</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              ["01", "MODULAR ARCHITECTURE", "Maintainable, clean codebases designed to evolve cleanly as your product scales."],
              ["02", "SUB-SECOND PERFORMANCE", "Optimized database indexes and edge-cached frontends for near-instant latency."],
              ["03", "DIRECT ENGAGEMENT", "Work directly with principal software engineers rather than layers of sales reps."],
              ["04", "ZERO-BLOAT DESIGN", "Dark-first, high-accessibility UI built strictly with modern web standards."],
            ].map(([num, title, desc]) => (
              <div key={num} style={{ borderTop: "1px solid #334155", paddingTop: "1.25rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--hsynex-cyan)" }}>
                  {num}
                </span>
                <h3 style={{ marginTop: "0.75rem", fontSize: "0.875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff" }}>
                  {title}
                </h3>
                <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", lineHeight: 1.6, color: "var(--hsynex-muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Work (Timeline) */}
        <div style={{ marginTop: "6rem" }}>
          <SectionTitle
            eyebrow="HOW WE WORK"
            title="DISCOVER. DESIGN. BUILD. LAUNCH. IMPROVE."
            text="A predictable, transparent roadmap from initial architectural deep-dive to production monitoring."
          />
          <Timeline />
        </div>
      </section>

      <TechStrip />
      <CTASection />
    </div>
  );
}
