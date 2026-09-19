import { Link } from "react-router-dom";
import ProductMockup from "../components/UI/ProductMockup";
import { PageHero, SectionTitle, CTASection, HSButton, useSEO } from "../components/UI/EditorialUI";

export default function Products() {
  useSEO(
    "Products — Commercial Software for Real-World Operations",
    "HSynex builds focused software that brings complex business workflows into one connected experience. Explore HSynex Restaurant OS and upcoming builds."
  );

  return (
    <div className="products-editorial-page">
      <PageHero
        eyebrow="PRODUCTS / 01"
        title={
          <>
            PRODUCTS BUILT<br />
            <span style={{ color: "var(--hsynex-cyan)" }}>FOR REAL-WORLD OPERATIONS.</span>
          </>
        }
        text="HSynex builds focused software that brings complex business workflows into one connected experience."
      >
        <HSButton to="/contact">INQUIRE ABOUT PRODUCT PARTNERSHIPS</HSButton>
      </PageHero>

      {/* Featured Flagship Product */}
      <section className="container" style={{ padding: "clamp(5rem, 8vw, 8rem) var(--container-padding)" }}>
        <SectionTitle
          eyebrow="CURRENTLY BUILDING"
          title="HSYNEX RESTAURANT."
          text="A modern restaurant management platform designed to connect the everyday operation of a restaurant."
        />

        <div style={{ marginTop: "2rem" }}>
          <ProductMockup variant="showcase" />
        </div>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--hsynex-border)",
          }}
        >
          <span style={{ fontSize: "0.9rem", color: "var(--hsynex-muted)" }}>
            Internal build / In development
          </span>
          <HSButton to="/products/restaurant" secondary>
            EXPLORE PRODUCT
          </HSButton>
        </div>

        {/* Coming Soon Roadmap note */}
        <div style={{ marginTop: "7rem", borderTop: "1px solid var(--hsynex-border)", paddingTop: "2.5rem" }}>
          <p className="eyebrow">MORE PRODUCTS</p>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              color: "var(--hsynex-muted-dark)",
            }}
          >
            COMING AS WE BUILD THEM.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
