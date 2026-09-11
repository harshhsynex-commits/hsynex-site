import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-ambient-glow"></div>
      
      <div className="container footer-content-grid">
        {/* Brand & Mission Column */}
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand-link">
            <img src={logoImg} alt="HSynex" className="footer-brand-logo" />
            {/* <div className="footer-brand-text">
              <span className="brand-title">HSynex</span>
              <span className="brand-sub">TECHNOLOGIES</span>
            </div> */}
          </Link>
          <p className="footer-mission-text">
            Building digital products, platforms and high-velocity software experiences for modern businesses ready to lead.
          </p>
          <div className="footer-social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="mailto:harsh.hsynex@gmail.com"
              className="social-icon-btn"
              aria-label="Email HSynex"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        {/* Solutions Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">What We Build</h4>
          <ul className="footer-links-list">
            <li><Link to="/services">Business Platforms</Link></li>
            <li><Link to="/services">SaaS Products</Link></li>
            <li><Link to="/services">Web & Mobile Apps</Link></li>
            <li><Link to="/services">Custom CMS & Automation</Link></li>
            <li><Link to="/services">API & Architecture Engineering</Link></li>
          </ul>
        </div>

        {/* Company & Products Column */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Company</h4>
          <ul className="footer-links-list">
            <li><Link to="/#products">HSynex Restaurant (SaaS)</Link></li>
            <li><Link to="/portfolio">Selected Work</Link></li>
            <li><Link to="/about">Our Approach & Philosophy</Link></li>
            <li><Link to="/blog">Engineering Insights</Link></li>
            <li><Link to="/contact">Start a Project</Link></li>
          </ul>
        </div>

        {/* Direct Contact Column */}
        <div className="footer-links-col footer-contact-col">
          <h4 className="footer-col-title">Get in Touch</h4>
          <ul className="footer-contact-list">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Ahmedabad, India</span>
            </li>
            <li>
              <a href="mailto:harsh.hsynex@gmail.com" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>harsh.hsynex@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+916353142650" className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 6353142650</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-flex">
          <p className="copyright-text">
            &copy; 2026 <strong>HSynex</strong>. All rights reserved. <span className="descriptor-subtle">HSynex Technologies</span>
          </p>
          <div className="footer-legal-links">
            <span>Built with precision for 2026+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
