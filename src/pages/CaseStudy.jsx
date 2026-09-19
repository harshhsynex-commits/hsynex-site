import ProductMockup from "../components/UI/ProductMockup";
import { PageHero, TechStrip, CTASection, HSButton, useSEO } from "../components/UI/EditorialUI";

export default function CaseStudy() {
  useSEO(
    "Operations System Case Study — HSynex",
    "A reusable structure for documenting product work honestly, from the challenge through the next step."
  );

  const sections = [
    ["OVERVIEW", "A product concept for bringing operational information into one clearer workspace, eliminating fragmented spreadsheets and manual status meetings."],
    ["THE CHALLENGE", "The challenge is to make complex workflows easier to understand without hiding useful detail or slowing down fast-moving team members."],
    ["THE APPROACH", "We map the workflow, define the product surface, establish zero-trust authentication boundaries, and build the smallest useful system first."],
    ["THE SOLUTION", "A connected interface for navigating daily work, active orders, team activity, and the underlying database information behind it."],
    ["KEY WORKFLOWS", "Orders pipeline, dispatch boards, inventory forecasting, approval matrixes, and live operational activity feeds."],
    ["OUTCOME", "Outcome details and customer statistics are intentionally not claimed here while this concept is in active development."],
    ["NEXT STEPS", "Continue validating the workflow and product direction with real operational context and pilot user testing."],
  ];

  return (
    <div className="case-study-editorial-page">
      <PageHero
        eyebrow="PROJECT / PRODUCT CONCEPT"
        title={
          <>
            OPERATIONS SYSTEM<br />
            <span style={{ color: "var(--hsynex-cyan)" }}>CASE STUDY TEMPLATE.</span>
          </>
        }
        text="A reusable structure for documenting product work honestly, from the challenge through the next step."
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <HSButton to="/contact">DISCUSS SIMILAR BUILD</HSButton>
          <HSButton to="/work" secondary>BACK TO WORK</HSButton>
        </div>
      </PageHero>

      {/* Visual Simulation Display */}
      <section className="container" style={{ padding: "clamp(5rem, 8vw, 8rem) var(--container-padding)" }}>
        <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between" }}>
          <span className="eyebrow">SYSTEM ARCHITECTURE SIMULATION</span>
          <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--hsynex-muted-dark)" }}>
            PROTOTYPE INTERFACE
          </span>
        </div>
        <ProductMockup variant="showcase" />

        {/* 7 Narrative Stages */}
        <div
          style={{
            marginTop: "6rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem 2.5rem",
          }}
        >
          {sections.map(([stage, narrative]) => (
            <div key={stage} style={{ borderTop: "1px solid #334155", paddingTop: "1.5rem" }}>
              <p className="eyebrow">{stage}</p>
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "1.1rem",
                  lineHeight: 1.75,
                  color: "var(--hsynex-text-dim)",
                }}
              >
                {narrative}
              </p>
            </div>
          ))}
        </div>
      </section>

      <TechStrip />
      <CTASection />
    </div>
  );
}
