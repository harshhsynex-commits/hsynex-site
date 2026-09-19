import { useParams, Link, Navigate } from "react-router-dom";
import ProductMockup from "../components/UI/ProductMockup";
import {
  solutionsData,
  PageHero,
  HSButton,
  VisualPreview,
  TechStrip,
  CTASection,
  useSEO,
} from "../components/UI/EditorialUI";

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = solutionsData.find((s) => s.slug === slug);

  useSEO(
    solution ? `${solution.title} — Solutions` : "Solutions",
    solution ? solution.short : "HSynex software engineering solutions"
  );

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const mockupVariant = slug.includes("mobile")
    ? "tables"
    : slug.includes("automation")
    ? "orders"
    : slug.includes("business")
    ? "inventory"
    : "dashboard";

  return (
    <div className="solution-detail-page">
      <PageHero
        eyebrow={`SOLUTIONS / ${solution.title.toUpperCase()}`}
        title={
          <>
            {solution.title.toUpperCase()}<br />
            <span style={{ color: "var(--hsynex-cyan)" }}>BUILT AROUND YOUR BUSINESS.</span>
          </>
        }
        text={solution.short}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          <HSButton to="/contact">START A PROJECT</HSButton>
          <HSButton to="/solutions" secondary>ALL SOLUTIONS</HSButton>
        </div>
      </PageHero>

      {/* 3-Column Problem / Build / Use-Cases Grid */}
      <section className="container" style={{ padding: "clamp(5rem, 8vw, 8rem) var(--container-padding)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          <div style={{ borderTop: "1px solid #334155", paddingTop: "1.5rem" }}>
            <p className="eyebrow">THE PROBLEM</p>
            <p style={{ marginTop: "1.25rem", fontSize: "1.1rem", lineHeight: 1.75, color: "var(--hsynex-text-dim)" }}>
              {solution.problem}
            </p>
          </div>

          <div style={{ borderTop: "1px solid #334155", paddingTop: "1.5rem" }}>
            <p className="eyebrow">WHAT WE BUILD</p>
            <p style={{ marginTop: "1.25rem", fontSize: "1.1rem", lineHeight: 1.75, color: "var(--hsynex-text-dim)" }}>
              {solution.build}
            </p>
          </div>

          <div style={{ borderTop: "1px solid #334155", paddingTop: "1.5rem" }}>
            <p className="eyebrow">USE CASES</p>
            <p style={{ marginTop: "1.25rem", fontSize: "1.1rem", lineHeight: 1.75, color: "var(--hsynex-text-dim)" }}>
              {solution.useCases}
            </p>
          </div>
        </div>

        {/* Tech Focus Tags */}
        <div style={{ marginTop: "3.5rem", borderTop: "1px solid var(--hsynex-border)", paddingTop: "1.5rem" }}>
          <p className="eyebrow">TYPICAL TECH STACK FOR THIS DOMAIN</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginTop: "1rem" }}>
            {solution.tech.map((t) => (
              <span key={t} className="tag" style={{ fontSize: "0.85rem", padding: "0.35rem 0.75rem" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Interface Study & Interactive Simulation */}
        <div style={{ marginTop: "4.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          <VisualPreview label={`${solution.title.toUpperCase()} / INTERFACE STUDY`} />
          <div className="preview-panel" style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <span className="eyebrow">LIVE ARCHITECTURE PREVIEW</span>
              <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--hsynex-muted-dark)" }}>
                ACTIVE SIMULATION
              </span>
            </div>
            <ProductMockup variant="compact" />
          </div>
        </div>
      </section>

      <TechStrip />
      <CTASection />
    </div>
  );
}
