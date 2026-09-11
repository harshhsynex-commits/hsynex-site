import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/logo.png";
import "../assets/css/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Solutions", path: "/services", hash: "#solutions" },
    { name: "Products", path: "/#products", hash: "#products" },
    { name: "Work", path: "/portfolio", hash: "#work" },
    { name: "About", path: "/about", hash: "#about" },
    { name: "Insights", path: "/blog", hash: "/blog" },
  ];

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (location.pathname === "/" && link.hash.startsWith("#")) {
      const el = document.querySelector(link.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-container container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logoImg} alt="HSynex" className="brand-logo-img" />
          {/* <div className="brand-text-wrap">
            <span className="brand-name">HSynex</span>
            <span className="brand-tagline">TECHNOLOGIES</span>
          </div> */}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isCurrent =
              location.pathname === link.path ||
              (location.pathname === "/" && location.hash === link.hash);

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link-item ${isCurrent ? "active" : ""}`}
                onClick={() => handleNavClick(link)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Hamburger */}
        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary btn-sm nav-cta-btn">
            <span>Let's Talk</span>
            <svg
              className="btn-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          <button
            className={`mobile-toggle-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? "visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-header">
          <div className="mobile-brand">
            <img src={logoImg} alt="HSynex" className="brand-logo-img-small" />
            <span className="brand-name">HSynex</span>
          </div>
          <button
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <div className="mobile-links-list">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="mobile-link-item"
              onClick={() => handleNavClick(link)}
            >
              <span>{link.name}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          ))}
          <div className="mobile-drawer-cta">
            <Link
              to="/contact"
              className="btn btn-primary btn-lg full-width"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
