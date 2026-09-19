import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchNavigationMenu } from "../api/navigationApi";
import logoImg from "../assets/logo.png";
import "../assets/css/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileId, setExpandedMobileId] = useState(null);

  const location = useLocation();
  const leaveTimeoutRef = useRef(null);
  const navRef = useRef(null);

  // Load API-driven navigation
  useEffect(() => {
    let isMounted = true;
    fetchNavigationMenu().then((response) => {
      if (isMounted && response?.data) {
        setNavItems(response.data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setActiveDropdown(null);
      setMobileMenuOpen(false);
      setExpandedMobileId(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [mobileMenuOpen]);

  // Click outside and Escape key listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  // Hover handlers with debounce buffer
  const handleItemMouseEnter = (itemId, hasMegaMenu) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    if (hasMegaMenu) {
      setActiveDropdown(itemId);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleItemMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 140);
  };

  const handleLinkClick = (item, e) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (item.path.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const hash = item.path.replace("/", "");
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMobileAccordion = (id) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
  };

  return (
    <header
      className={`navbar-header ${scrolled ? "is-scrolled" : ""}`}
      ref={navRef}
    >
      <div className="navbar-container container">
        {/* Brand Logo */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => {
            setActiveDropdown(null);
            setMobileMenuOpen(false);
          }}
          aria-label="HSynex Home"
        >
          <img src={logoImg} alt="HSynex" className="brand-logo-img" />
        </Link>

        {/* Desktop Navigation Links & Mega Menus */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          {navItems.map((item) => {
            const hasMegaMenu = item.type === "mega-menu" && item.megaMenu;
            const isCurrent =
              location.pathname === item.path ||
              (item.path.includes("#") &&
                location.pathname === "/" &&
                location.hash === item.path.replace("/", ""));
            const isOpen = activeDropdown === item.id;

            return (
              <div
                key={item.id}
                className={`nav-item-wrapper ${hasMegaMenu ? "has-dropdown" : ""}`}
                onMouseEnter={() => handleItemMouseEnter(item.id, hasMegaMenu)}
                onMouseLeave={handleItemMouseLeave}
              >
                {hasMegaMenu ? (
                  <button
                    className={`nav-link-item nav-dropdown-trigger ${
                      isCurrent || isOpen ? "active" : ""
                    }`}
                    onClick={() =>
                      setActiveDropdown(isOpen ? null : item.id)
                    }
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`nav-chevron ${isOpen ? "open" : ""}`}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link-item ${isCurrent ? "active" : ""}`}
                    onClick={(e) => handleLinkClick(item, e)}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mega-Menu Panel */}
                {hasMegaMenu && (
                  <div
                    className={`mega-menu-panel mega-menu-${item.id} ${isOpen ? "is-visible" : ""}`}
                    role="region"
                    aria-label={`${item.name} menu`}
                  >
                    <div className="mega-menu-bridge"></div>
                    <div className="mega-menu-container">
                      <div className="mega-menu-grid">
                        {item.megaMenu.columns.map((col, idx) => (
                          <div key={idx} className="mega-col">
                            <span className="mega-col-heading">
                              {col.heading}
                            </span>
                            <div className="mega-col-links">
                              {col.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="mega-link-card"
                                  onClick={(e) => handleLinkClick(subItem, e)}
                                >
                                  <div className="mega-link-title-row">
                                    <span className="mega-link-title">
                                      {subItem.name}
                                    </span>
                                    {subItem.badge && (
                                      <span className="mega-badge">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="mega-link-desc">
                                    {subItem.desc}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Featured Showcase inside Mega Menu */}
                        {item.megaMenu.featured && (
                          <div className="mega-featured-col">
                            <div className="mega-featured-card">
                              <span className="featured-eyebrow">
                                {item.megaMenu.featured.eyebrow}
                              </span>
                              <h4 className="featured-title">
                                {item.megaMenu.featured.title}
                              </h4>
                              <p className="featured-desc">
                                {item.megaMenu.featured.desc}
                              </p>
                              <Link
                                to={item.megaMenu.featured.link}
                                className="featured-cta-link"
                                onClick={(e) =>
                                  handleLinkClick(
                                    { path: item.megaMenu.featured.link },
                                    e
                                  )
                                }
                              >
                                <span>
                                  {item.megaMenu.featured.linkText}
                                </span>
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                >
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                  <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
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
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <div className="mobile-brand">
            <img src={logoImg} alt="HSynex" className="brand-logo-img-small" />
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
          {navItems.map((item) => {
            const hasChildren = item.type === "mega-menu" && item.megaMenu;
            const isExpanded = expandedMobileId === item.id;

            if (!hasChildren) {
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="mobile-link-item"
                  onClick={(e) => handleLinkClick(item, e)}
                >
                  <span>{item.name}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              );
            }

            return (
              <div key={item.id} className="mobile-accordion-group">
                <button
                  className={`mobile-link-item accordion-trigger ${
                    isExpanded ? "expanded" : ""
                  }`}
                  onClick={() => toggleMobileAccordion(item.id)}
                >
                  <span>{item.name}</span>
                  <svg
                    className={`mobile-accordion-chevron ${
                      isExpanded ? "rotated" : ""
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isExpanded && (
                  <div className="mobile-sublinks-container">
                    {item.megaMenu.columns.map((col, idx) => (
                      <div key={idx} className="mobile-subcol">
                        <span className="mobile-subcol-title">
                          {col.heading}
                        </span>
                        {col.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="mobile-sublink-item"
                            onClick={(e) => handleLinkClick(subItem, e)}
                          >
                            <span className="sublink-title">
                              {subItem.name}
                            </span>
                            {subItem.badge && (
                              <span className="sublink-badge">
                                {subItem.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {item.megaMenu.featured && (
                      <div className="mobile-featured-highlight">
                        <span className="feat-label">
                          {item.megaMenu.featured.eyebrow}
                        </span>
                        <Link
                          to={item.megaMenu.featured.link}
                          className="feat-title-link"
                          onClick={(e) =>
                            handleLinkClick(
                              { path: item.megaMenu.featured.link },
                              e
                            )
                          }
                        >
                          {item.megaMenu.featured.title} &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

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
