import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import '../assets/css/Blog.css';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const blogPosts = [
    {
      title: 'Zero-Trust Networks: Hardening Enterprise Infrastructure',
      category: 'Security',
      date: 'June 25, 2026',
      readTime: '6 min read',
      excerpt: 'Traditional perimeter defense is no longer enough. Explore practical tactics for rolling out zero-trust access controls, identity verification, and micro-segmentation.',
      initials: 'ZT'
    },
    {
      title: 'Optimizing PostgreSQL Database Performance Under High Loads',
      category: 'Development',
      date: 'June 18, 2026',
      readTime: '8 min read',
      excerpt: 'Slow database queries bottleneck application speed. Learn how indexing, connection pooling, and query rewriting can decrease server latencies.',
      initials: 'PG'
    },
    {
      title: 'Why AI Integrations Require Solid Data Governance Policies',
      category: 'AI & Data',
      date: 'June 11, 2026',
      readTime: '5 min read',
      excerpt: 'Deploying Large Language Models exposes brands to information leaks. We outline data governance guidelines to safeguard customer datasets.',
      initials: 'DG'
    },
    {
      title: 'Top 5 Cloud Cost Leaks and How to Patch Them Safely',
      category: 'Cloud',
      date: 'June 04, 2026',
      readTime: '7 min read',
      excerpt: 'Orphaned block stores and oversized compute nodes drain budgets. Audit your cloud infrastructure with simple checks to eliminate waste.',
      initials: 'CC'
    },
    {
      title: 'Migrating Monolith Codebases to Scalable Microservices',
      category: 'Development',
      date: 'May 28, 2026',
      readTime: '9 min read',
      excerpt: 'Deconstructing a database monolith can disrupt uptime. Learn how to map boundaries and migrate operations using the Strangler Fig pattern.',
      initials: 'MS'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="blog-page">
      {/* Hero Header */}
      <section className="blog-hero">
        <div className="container">
          <SectionHeader
            subtitle="HSYNEX INSIGHTS"
            title="Technology News & Strategic Advice"
            centered={true}
          />
          <p className="blog-hero-lead">
            Stay ahead of the curve. Read technical analyses, cloud tutorials, and engineering write-ups authored by our principal consultants and senior architects.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="featured-blog-section">
        <div className="container">
          <div className="featured-blog-card">
            <div className="featured-blog-visual">
              <div className="featured-visual-avatar">SV</div>
              <span className="featured-category-badge">Cloud</span>
            </div>
            <div className="featured-blog-content">
              <div className="featured-meta">
                <span>June 30, 2026</span>
                <span className="meta-separator">&bull;</span>
                <span>8 min read</span>
              </div>
              <h2>The Future of Serverless Architecture: Scaling DevOps in 2026</h2>
              <p>
                Serverless compute has evolved far beyond basic triggers. This guide covers edge-functions, database connection limits, startup latency cold starts, and cost management setups for engineering directors.
              </p>
              <a href="#featured" className="read-more-link">
                Read Full Article
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-preview-top">
                  <div className="blog-avatar">
                    <span>{post.initials}</span>
                  </div>
                  <span className="blog-category-tag">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span className="meta-separator">&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={`#post-${index}`} className="blog-card-link">
                    Read Post
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <h2>Subscribe to Technical Insights</h2>
            <p>
              Get hand-picked articles on cloud strategy, software architecture, security advisories, and AI tools delivered directly to your inbox. No spam, ever.
            </p>
            {subscribed ? (
              <div className="subscribe-success animate-fade-in">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Thank you! You have successfully subscribed to Hsynex Insights.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your work email address"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary newsletter-btn">
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
