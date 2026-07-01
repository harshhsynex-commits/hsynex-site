import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import StatsCounter from '../components/StatsCounter';
import '../assets/css/About.css';

export default function About() {
  const coreValues = [
    {
      title: 'Technical Excellence',
      description: 'We strive for exceptional quality, writing clean, optimized code and maintaining rigorous engineering standards.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      )
    },
    {
      title: 'Security-First Culture',
      description: 'We embed threat-modeling, static code analysis, and encryption protocols into every system we engineer.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      )
    },
    {
      title: 'Strategic Partnership',
      description: 'We work closely with clients to understand their business constraints and deliver high-value solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO & Founder',
      bio: 'Ex-AWS Tech Lead with 15+ years of experience leading complex enterprise architectures and cloud transformations.',
      initials: 'SJ'
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Technology Officer',
      bio: 'Cybersecurity researcher and system architect who designs our high-availability and zero-trust solutions.',
      initials: 'MC'
    },
    {
      name: 'Elena Rostova',
      role: 'VP of Engineering',
      bio: 'Agile delivery lead focused on high performance engineering squads, continuous integration, and rapid releases.',
      initials: 'ER'
    },
    {
      name: 'David Kim',
      role: 'Head of Data Science',
      bio: 'AI consultant specializing in machine learning pipelines, generative models, and analytics dashboards.',
      initials: 'DK'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Header */}
      <section className="about-hero">
        <div className="container">
          <SectionHeader
            subtitle="WHO WE ARE"
            title="Pioneering Scalable Solutions for the Enterprise"
            centered={true}
          />
          <p className="about-hero-lead">
            Hsynex is a group of forward-looking engineers, architects, and strategists. We build systems that help organizations run more efficiently, automate workloads, and protect business data.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container story-container">
          <div className="story-visual">
            <div className="story-glow-mesh"></div>
            <div className="story-visual-card">
              <div className="visual-card-title">Hsynex Ecosystem</div>
              <div className="visual-card-item">
                <span className="dot dot-green"></span>
                <span>Active Infrastructure Monitoring</span>
              </div>
              <div className="visual-card-item">
                <span className="dot dot-green"></span>
                <span>Cloud Deployment Pipeline: Green</span>
              </div>
              <div className="visual-card-item">
                <span className="dot dot-green"></span>
                <span>SOC2 Compliance Audit: Passed</span>
              </div>
            </div>
          </div>
          <div className="story-content">
            <h2>Our Origin & Evolution</h2>
            <p>
              Founded with the goal of bridging the gap between high-level IT strategy and actual engineering execution, Hsynex began as a small boutique consulting agency. Over the years, we have grown into a full-scale IT solutions provider.
            </p>
            <p>
              We believe that software shouldn't just run; it should scale, adapt, and remain resilient in the face of cybersecurity threats. Today, we work with both scaling startups and established enterprises to achieve operational excellence in the cloud and custom software engineering.
            </p>
            <div className="story-milestones">
              <div className="milestone-item">
                <h4><StatsCounter end={12} suffix="+" /></h4>
                <span>Years of Practice</span>
              </div>
              <div className="milestone-item">
                <h4><StatsCounter end={250} suffix="+" /></h4>
                <span>Successful Launches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="values-section">
        <div className="container">
          <SectionHeader
            subtitle="OUR CORE DRIVERS"
            title="The Values That Guide Our Code"
            centered={true}
          />
          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <div className="value-card" key={idx}>
                <div className="value-icon-wrap">{val.icon}</div>
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section — Hidden for now
      <section className="team-section">
        <div className="container">
          <SectionHeader
            subtitle="THE SQUAD"
            title="Meet Our Technology Leaders"
            centered={true}
          />
          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div className="team-card" key={idx}>
                <div className="member-avatar">
                  <span>{member.initials}</span>
                </div>
                <h3>{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* About CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <h2>Partner With Elite Technology Architects</h2>
            <p>
              Ready to execute your cloud migration, build custom platforms, or conduct comprehensive audits? Reach out to Hsynex today.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
