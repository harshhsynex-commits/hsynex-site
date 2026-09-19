import { useState, useEffect, useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import "../assets/css/Blog.css";

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

export default function Blog() {
  const pageRef = useScrollReveal();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const posts = [
    {
      title: "Architecting Real-Time WebSocket Pipelines for POS & Hospitality Systems",
      category: "Architecture",
      date: "2026 Edition",
      readTime: "7 min read",
      excerpt:
        "How we achieved sub-300ms ticket synchronization across kitchen displays and POS terminals in HSynex Restaurant using event clustering and lightweight heartbeat protocols.",
      tag: "Deep Dive",
    },
    {
      title: "Multi-Tenant Database Strategies: Schema-per-Tenant vs Shared Tables with RLS",
      category: "SaaS Engineering",
      date: "2026 Edition",
      readTime: "9 min read",
      excerpt:
        "Evaluating database isolation models for scaling B2B SaaS platforms. Comparing PostgreSQL Row-Level Security (RLS) with dedicated tenant schemas for compliance and throughput.",
      tag: "Database",
    },
    {
      title: "Why Modern Businesses are Abandoning Fragmented No-Code Tools for Bespoke Systems",
      category: "Product Strategy",
      date: "2026 Edition",
      readTime: "5 min read",
      excerpt:
        "When your Zapier workflows and Airtables start failing under daily transaction volume, custom software platforms offer 10x durability at a fraction of cumulative subscription costs.",
      tag: "Strategy",
    },
    {
      title: "Optimizing PostgreSQL Query Performance: Index Types, EXPLAIN ANALYZE & Cache Buffers",
      category: "Performance",
      date: "2026 Edition",
      readTime: "8 min read",
      excerpt:
        "Practical strategies for eliminating slow database locks, tuning connection pools, and leveraging composite indexes to keep API latencies under 50ms.",
      tag: "Backend",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="blog-page-root" ref={pageRef}>
      <div className="ambient-glow-top"></div>

      {/* Hero Header */}
      <section className="blog-hero-section">
        <div className="container">
          <SectionHeader
            subtitle="ENGINEERING INSIGHTS"
            title="Technical writeups from the build trenches."
            description="Practical architectural blueprints, SaaS lessons, and software performance deep-dives authored by HSynex engineers."
            centered={true}
          />
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-article-section">
        <div className="container-wide">
          <div className="featured-post-card card-glow-hover scroll-animate">
            <div className="featured-top-badge">
              <span className="badge">Featured Deep-Dive</span>
              <span className="post-read-time">7 min read</span>
            </div>

            <h2 className="featured-post-title">
              Architecting Real-Time WebSocket Pipelines for POS & Hospitality Systems
            </h2>
            <p className="featured-post-excerpt">
              How we achieved sub-300ms ticket synchronization across kitchen displays, mobile waiter tablets, and POS terminals in HSynex Restaurant using distributed Redis event brokers and lightweight state sync.
            </p>

            <div className="featured-card-footer">
              <span className="post-meta-cat">Architecture & Systems Engineering</span>
              <span className="post-read-link">
                <span>Read Full Blueprint</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="blog-grid-section">
        <div className="container-wide">
          <div className="articles-cards-grid">
            {posts.map((post, idx) => (
              <article
                key={post.title}
                className="article-card card-glow-hover scroll-animate"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="article-card-header">
                  <span className="article-category">{post.category}</span>
                  <span className="article-read-meta">{post.readTime}</span>
                </div>

                <h3 className="article-title">{post.title}</h3>
                <p className="article-excerpt">{post.excerpt}</p>

                <div className="article-footer-row">
                  <span className="read-more-btn">
                    <span>Read Architecture Note</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / RSS Box */}
      <section className="blog-newsletter-section">
        <div className="container-wide">
          <div className="newsletter-box-card scroll-animate">
            <span className="subtitle-badge">TECHNICAL DISPATCHES</span>
            <h2>Get our quarterly architecture briefs</h2>
            <p>No sales spam. Just high-signal engineering breakdowns, SaaS architecture notes, and case study retrospectives.</p>

            {subscribed ? (
              <div className="subscribe-success-alert">
                <span>✓ You have been added to HSynex Insights.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your engineering email..."
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
