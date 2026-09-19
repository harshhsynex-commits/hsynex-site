import ProductMockup from "../components/UI/ProductMockup";
import { PageHero, SectionTitle, CTASection, HSButton, useSEO } from "../components/UI/EditorialUI";

export default function RestaurantProduct() {
  useSEO(
    "HSynex Restaurant — Connected Restaurant OS",
    "A modern restaurant management platform designed to bring orders, tables, menu management, inventory and business operations into one connected workspace."
  );

  const pillars = [
    ["ORDERS", "See incoming dine-in, takeaway, and QR orders with real-time kitchen pipeline status."],
    ["TABLES", "Visual floor maps that keep table occupancy, party sizes, and turnover times visible."],
    ["INVENTORY", "Ingredient depletion tracking with automated low-stock replenishment purchase order drafting."],
    ["MENU", "Dynamic digital QR menus and POS catalog sync without needing external middleware."],
    ["CUSTOMERS", "Order history, dietary preferences, and guest profiles connected directly to checkouts."],
    ["REPORTS", "Real-time shift sales volume, peak-hour bottlenecks, and station fulfillment latency metrics."],
  ];

  return (
    <div className="restaurant-product-page">
      <PageHero
        eyebrow="PRODUCT / HSYNEX RESTAURANT"
        title={
          <>
            RUN YOUR RESTAURANT<br />
            <span style={{ color: "var(--hsynex-cyan)" }}>FROM ONE CONNECTED SYSTEM.</span>
          </>
        }
        text="A modern restaurant management platform designed to bring orders, tables, menu management, inventory and business operations into one connected workspace."
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
          <HSButton to="/contact">REQUEST A DEMO</HSButton>
          <HSButton to="/products" secondary>ALL PRODUCTS</HSButton>
        </div>
      </PageHero>

      {/* Primary Interactive Product Showcase */}
      <section className="container" style={{ padding: "clamp(5rem, 8vw, 8rem) var(--container-padding)" }}>
        <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="eyebrow">INTERACTIVE WORKSPACE SIMULATION</span>
          <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--hsynex-muted-dark)" }}>
            CLICK TABS TO SWITCH VIEWS
          </span>
        </div>
        <ProductMockup variant="showcase" />

        {/* 6 Operation Pillars */}
        <div style={{ marginTop: "6rem" }}>
          <SectionTitle
            eyebrow="ONE CONNECTED WORKSPACE"
            title="THE DAILY OPERATION, CLEARER."
            text="Every station in the restaurant shares a single source of operational truth."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem 2rem",
              marginTop: "2.5rem",
            }}
          >
            {pillars.map(([title, desc]) => (
              <div key={title} style={{ borderTop: "1px solid #334155", paddingTop: "1.5rem" }}>
                <h3
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  {title}
                </h3>
                <p style={{ marginTop: "0.75rem", fontSize: "0.95rem", lineHeight: 1.65, color: "var(--hsynex-muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are Building It */}
      <section className="editorial-dark-section">
        <div className="container" style={{ padding: "clamp(5rem, 8vw, 7.5rem) var(--container-padding)" }}>
          <SectionTitle
            eyebrow="WHY WE ARE BUILDING IT"
            title="SOFTWARE SHOULD FEEL USEFUL FROM THE FIRST SHIFT."
            text="Restaurant operations are full of moving parts. HSynex Restaurant is an internal product build exploring how those parts can live in one thoughtful system rather than five disconnected subscriptions."
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
