import { Link } from "react-router-dom";
import ProductMockup from "../components/UI/ProductMockup";
import { PageHero, SectionTitle, VisualPreview, CTASection, useSEO } from "../components/UI/EditorialUI";

export default function Work() {
  useSEO(
    "Selected Work & Builds — HSynex",
    "A look at internal builds, product concepts and work in development. Where client details are not available, we label the work clearly."
  );

  return (
    <div className="work-editorial-page">
      <PageHero
        eyebrow="WORK / SELECTED BUILDS"
        title={
          <>
            SELECTED<br />
            <span style={{ color: "var(--hsynex-cyan)" }}>BUILDS.</span>
          </>
        }
        text="A look at internal builds, product concepts and work in development. Where client details are not available, we label the work clearly."
      />

      <section className="container" style={{ padding: "clamp(5rem, 8vw, 8rem) var(--container-padding)" }}>
        <SectionTitle
          eyebrow="INTERNAL BUILDS / IN DEVELOPMENT"
          title="PRODUCTS WITH A POINT OF VIEW."
          text="Explore live prototypes, architecture studies, and active product developments."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
            marginTop: "2.5rem",
          }}
        >
          {/* Build 1: HSynex Restaurant */}
          <Link
            to="/products/restaurant"
            className="preview-panel"
            style={{ padding: "1.5rem", textDecoration: "none", display: "block" }}
          >
            <p className="eyebrow">INTERNAL BUILD / IN DEVELOPMENT</p>
            <div style={{ marginTop: "1.75rem" }}>
              <ProductMockup variant="compact" />
            </div>
            <h3
              style={{
                marginTop: "1.75rem",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              HSynex Restaurant &rarr;
            </h3>
            <p style={{ marginTop: "0.5rem", fontSize: "0.95rem", color: "var(--hsynex-muted)" }}>
              A modern restaurant management platform designed to connect the everyday operation of a restaurant.
            </p>
          </Link>

          {/* Build 2: Operations System Concept */}
          <Link
            to="/work/case-study"
            className="preview-panel"
            style={{ padding: "1.5rem", textDecoration: "none", display: "block" }}
          >
            <p className="eyebrow">PRODUCT CONCEPT</p>
            <div style={{ marginTop: "1.75rem" }}>
              <VisualPreview label="OPERATIONS SYSTEM / CONCEPT" />
            </div>
            <h3
              style={{
                marginTop: "1.75rem",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              Operations system concept &rarr;
            </h3>
            <p style={{ marginTop: "0.5rem", fontSize: "0.95rem", color: "var(--hsynex-muted)" }}>
              Architecture blueprint and interaction study for unifying fragmented enterprise spreadsheets and workflows.
            </p>
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
