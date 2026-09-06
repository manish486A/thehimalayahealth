import React, { useEffect, useState } from "react";
import "./Navbar.css";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#team", label: "Team" },
  { href: "#products", label: "Products" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="main-nav">
        <a href="#" className="nav-logo">
          <span className="nav-logo-dot"></span> healthynix
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <a href="#cta" className="btn-nav-cta">
            Free audit
          </a>
          <button
            className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      >
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#cta" className="mobile-menu-cta" onClick={closeMenu}>
            Free audit
          </a>
        </div>
      </div>
    </>
  );
}
