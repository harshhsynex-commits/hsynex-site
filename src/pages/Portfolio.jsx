import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import '../assets/css/Portfolio.css';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Website', 'CRM', 'Mobile', 'Cloud', 'AI'];

  const projects = [
    {
      title: 'Luxury Real Estate Website',
      category: 'Website',
      stats: '3× Lead Conversion Increase',
      tools: ['Next.js', 'Framer Motion', 'Contentful CMS'],
      desc: 'Built a premium property listing website with virtual tours, dynamic search filters, and speed optimized property pages.',
      initials: 'RE'
    },
    {
      title: 'SaaS Sales CRM Platform',
      category: 'CRM',
      stats: '60% Faster Deal Closing',
      tools: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
      desc: 'Delivered a custom multi-tenant CRM with pipeline kanban boards, automated email sequences, and revenue dashboards.',
      initials: 'SC'
    },
    {
      title: 'Healthcare Patient Mobile App',
      category: 'Mobile',
      stats: '4.8★ App Store Rating',
      tools: ['React Native', 'Firebase', 'HL7 FHIR'],
      desc: 'Designed a patient-facing mobile application for appointment booking, medical records access, and telemedicine video calls.',
      initials: 'HM'
    },
    {
      title: 'Global Cloud Migration',
      category: 'Cloud',
      stats: '45% Infra Saving',
      tools: ['AWS', 'Terraform', 'Kubernetes'],
      desc: 'Re-architected legacy datacenter systems into multi-region AWS cloud instances, implementing autoscaling rules and infrastructure as code.',
      initials: 'GC'
    },
    {
      title: 'Fintech Transaction Engine',
      category: 'Web Apps',
      stats: '15k transactions/sec',
      tools: ['React', 'Node.js', 'PostgreSQL'],
      desc: 'Engineered a highly resilient core ledger platform featuring double-entry verification checks and real-time dashboard notifications.',
      initials: 'FT'
    },
    {
      title: 'Predictive Medical Models',
      category: 'AI',
      stats: '94% Diagnostics Accuracy',
      tools: ['Python', 'PyTorch', 'FastAPI'],
      desc: 'Trained neural networks to parse medical imaging data and flag high-priority scan anomalies for clinical team review.',
      initials: 'PM'
    },
    {
      title: 'IoT Logistics Dashboard',
      category: 'Web Apps',
      stats: '100k Connected Sensors',
      tools: ['React', 'Websockets', 'InfluxDB'],
      desc: 'Designed a real-time tracking interface monitoring freight location, inside temperature, and lock status across active fleets.',
      initials: 'IL'
    },
    {
      title: 'Zero-Trust Security Platform',
      category: 'Cloud',
      stats: 'SOC2 Fast-Tracked',
      tools: ['Azure Active Directory', 'Vault', 'Docker'],
      desc: 'Hardened network endpoints and centralized credential storage across distributed endpoints, passing enterprise compliance audits.',
      initials: 'ZT'
    },
    {
      title: 'AI Product Recommender',
      category: 'AI',
      stats: '22% Sales Uplift',
      tools: ['TensorFlow', 'Pinecone', 'Python'],
      desc: 'Built a vectorized recommendation model matching user click histories with product embeddings to serve catalog items.',
      initials: 'AR'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Hero Header */}
      <section className="portfolio-hero">
        <div className="container">
          <SectionHeader
            subtitle="CASE STUDIES"
            title="Our Proven Track Record"
            centered={true}
          />
          <p className="portfolio-hero-lead">
            We deliver real results. Explore our case studies to see how we help clients reduce cloud costs, launch custom products, secure data, and automate operations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="portfolio-filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-preview">
                  <div className="preview-avatar">
                    <span>{project.initials}</span>
                  </div>
                  <span className="project-category-badge">{project.category}</span>
                </div>
                <div className="project-info">
                  <span className="project-metric">{project.stats}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tools">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="tool-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Case Study */}
      <section className="spotlight-section">
        <div className="container">
          <div className="spotlight-card">
            <div className="spotlight-header">
              <span className="subtitle-badge">PROJECT SPOTLIGHT</span>
              <h2>SaaS Sales CRM Platform</h2>
            </div>
            <div className="spotlight-body">
              <div className="spotlight-col">
                <h3>The Challenge</h3>
                <p>
                  A scaling sales team struggled with customer follow-ups, messy spreadsheets, and disjointed team communication, leading to a loss in closing velocity.
                </p>
              </div>
              <div className="spotlight-col">
                <h3>Our Solution</h3>
                <p>
                  We engineered a bespoke CRM using React and Node.js featuring kanban deal pipelines, automated email sequences, and centralized communication history.
                </p>
              </div>
              <div className="spotlight-col spotlight-results">
                <h3>The Results</h3>
                <ul>
                  <li><strong>60%</strong> Faster Deal Closing</li>
                  <li><strong>100%</strong> Automated Lead Capture</li>
                  <li><strong>2.5x</strong> Sales Pipeline Output</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="portfolio-cta-section">
        <div className="container">
          <div className="portfolio-cta-box">
            <h2>Ready to Write Your Success Story?</h2>
            <p>
              Let's build a software solution that saves engineering hours, optimizes cloud costs, and drives real metrics for your brand.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Launch Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
