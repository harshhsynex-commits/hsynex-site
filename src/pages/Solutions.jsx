import { PageHero, SectionTitle, ServiceRows, TechStrip, CTASection, HSButton, useSEO } from "../components/UI/EditorialUI";

export default function Solutions() {
  useSEO(
    "Solutions — Software Built Around Your Business",
    "Explore HSynex solutions: Web Applications, Mobile Applications, Business Software, SaaS Development, CMS & Admin Systems, and Automation & Integrations."
  );

  return (
    <div className="solutions-editorial-page">
      <PageHero
        eyebrow="SOLUTIONS / 06"
        title={
          <>
            SOFTWARE THAT SOLVES<br />
            <span style={{ color: "var(--hsynex-cyan)" }}>REAL BUSINESS PROBLEMS.</span>
          </>
        }
        text="We design and build practical digital products around the workflows, customers and goals that matter to your business."
      >
        <HSButton to="/contact">TELL US WHAT YOU'RE BUILDING</HSButton>
      </PageHero>

      <section className="container" style={{ padding: "clamp(5rem, 8vw, 8rem) var(--container-padding)" }}>
        <SectionTitle
          eyebrow="CAPABILITY MAP"
          title="A CLEARER WAY TO WORK."
          text="Every solution starts with a real problem. Explore how we approach the systems behind it."
        />
        <ServiceRows />
      </section>

      <TechStrip />
      <CTASection />
    </div>
  );
}
