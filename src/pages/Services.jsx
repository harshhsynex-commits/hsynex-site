import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import '../assets/css/Services.css';

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

export default function Services() {
  const pageRef = useScrollReveal();

  const servicesList = [
    {
      title: 'Website Design & Development',
      subtitle: 'Pixel-perfect, conversion-driven web experiences.',
      details: 'Full-cycle web design from wireframes to live deployment. We build fast, SEO-optimized, highly responsive websites using modern architectures like React and Next.js to elevate your brand presence.',
      features: ['UI/UX Design & Wireframing', 'SEO-Optimized React/Next.js Builds', 'Headless CMS Integrations', 'Performance & Speed Audits'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      )
    },
    {
      title: 'Custom CRM Development',
      subtitle: 'Bespoke customer relationship platforms that scale.',
      details: 'We build fully customized CRM systems tailored to your unique internal operations. From automated lead pipelines to detailed customer deal trackers, get software built around your workflows.',
      features: ['Sales Pipeline Management', 'Client Portals & Calendars', 'Automated Workflows & Emails', 'Custom Analytics & Reports'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    },
    {
      title: 'Mobile App Development',
      subtitle: 'Cross-platform mobile apps for iOS & Android.',
      details: 'From concept brainstorming to app store submissions, we build performant, secure, and user-friendly mobile applications using cross-platform tools like React Native and Flutter.',
      features: ['React Native & Flutter Apps', 'Push Notification Pipelines', 'Offline-First Local Storage', 'App Store Submissions & SEO'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
      )
    },
    {
      title: 'Custom Software Development',
      subtitle: 'Bespoke solutions built for speed, scalability, and security.',
      details: 'We engineer tailored web apps, high-performance mobile apps, and robust enterprise software, managing the entire lifecycle from architecture design to deployment.',
      features: ['Full-Stack Web & Mobile Apps', 'API & Integration Services', 'Microservices Architecture', 'Legacy Code Modernization'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      )
    },
    {
      title: 'Cloud Solutions & Migration',
      subtitle: 'High-availability, cost-effective cloud architectures.',
      details: 'Migrate to the cloud with minimal downtime. We configure scalable multi-cloud setups, secure serverless deployments, infrastructure-as-code, and devops automation.',
      features: ['AWS, GCP & Azure Migrations', 'Serverless & Kubernetes Setup', 'Infrastructure as Code (IaC)', 'Cost Optimization Audits'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>
      )
    },
    {
      title: 'Cybersecurity & Compliance',
      subtitle: 'Protecting your data assets with zero-trust networks.',
      details: 'Assess risks, build defensive postures, and secure systems. We specialize in vulnerability audits, identity management, compliance verification, and event response.',
      features: ['Penetration & Vulnerability Scans', 'SOC2, HIPAA & GDPR Compliance', 'Identity & Access Management (IAM)', 'Incident Response & Recovery'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      )
    },
    {
      title: 'Data Analytics & AI/ML',
      subtitle: 'Unlock business intelligence with predictive models.',
      details: 'Transform structured and unstructured raw data into dashboards, configure data pipelines, train machine learning systems, and roll out generative AI models securely.',
      features: ['ETL & Modern Data Lakes', 'Interactive BI Dashboards', 'Predictive Modeling & NLP', 'Generative AI Integrations'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
      )
    },
    {
      title: 'IT Infrastructure Management',
      subtitle: 'Keep your core enterprise engines running smoothly.',
      details: 'Proactive support and network design. We manage operations, configure firewalls, deploy virtualized storage networks, and provide 24/7 disaster recovery support.',
      features: ['Network Architecture Design', 'Proactive Server Monitoring', 'Backup & Disaster Recovery', 'Helpdesk & Remote IT Support'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
      )
    },
    {
      title: 'Digital Transformation Consulting',
      subtitle: 'Reimagining business models through modern tech.',
      details: 'Map technology solutions to strategic corporate goals, evaluate product roadmaps, train leadership teams, and optimize engineering velocity and delivery setups.',
      features: ['Strategic Technology Roadmaps', 'Agile Transformation Coaching', 'Legacy System Assessments', 'Engineering Performance Audits'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      )
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We analyze your workflows, evaluate legacy setups, and define scope and timelines.'
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'We architect technical specs, choose technology stack, and plan sprints.'
    },
    {
      num: '03',
      title: 'Execution',
      desc: 'We write modular code, perform continuous testing, and deliver increments.'
    },
    {
      num: '04',
      title: 'Optimization',
      desc: 'We deploy to cloud servers, run code audits, and monitor performance.'
    }
  ];

  return (
    <div className="services-page" ref={pageRef}>
      {/* Header */}
      <section className="services-hero">
        <div className="container">
          <SectionHeader
            subtitle="OUR CAPABILITIES"
            title="Enterprise-Grade IT Services & Consulting"
            centered={true}
          />
          <p className="services-hero-lead">
            We combine strategic foresight with tactical engineering. Whether you are launching a new application, moving servers to the cloud, or hardening your security posture, we deliver results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-detail-grid">
            {servicesList.map((service, index) => (
              <div
                className="service-detail-card scroll-animate"
                key={index}
                data-number={String(index + 1).padStart(2, '0')}
                style={{ transitionDelay: `${(index % 2) * 0.1}s` }}
              >
                <div className="card-header">
                  <div className="detail-icon-wrap">{service.icon}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <span className="card-subtitle">{service.subtitle}</span>
                  </div>
                </div>
                <p className="card-details">{service.details}</p>
                <div className="feature-bullets">
                  {service.features.map((feature, fIdx) => (
                    <div className="bullet-item" key={fIdx}>
                      <svg className="bullet-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--primary-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <SectionHeader
            subtitle="OUR WORKFLOW"
            title="How We Deliver Success"
            centered={true}
          />
          <div className="process-timeline">
            {processSteps.map((step, idx) => (
              <div className="process-step scroll-animate" key={idx} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="step-number-wrap">
                  <span className="step-num">{step.num}</span>
                  <div className="step-connector"></div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="consultation-section">
        <div className="container">
          <div className="consultation-box scroll-animate">
            <h2>Need a Tailored Technical Solution?</h2>
            <p>
              Let's schedule a session to review your development requirements, cloud integration challenges, or cybersecurity concerns.
            </p>
            <div className="consultation-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book Technical Consultation
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
