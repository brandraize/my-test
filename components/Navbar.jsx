"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone, FaWhatsapp, FaChevronDown, FaTimes, FaChevronUp } from "react-icons/fa";

export default function Navbar({ lang }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const mobileMenuRef = useRef(null);
  const dropdownRefs = useRef({});

  // Ensure hydration consistency
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    // Close menus when clicking outside
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest(".navbar-toggler")) {
        setMobileMenuOpen(false);
      }
      
      // Close dropdowns when clicking outside
      if (openDropdown && !event.target.closest(`[data-dropdown="${openDropdown}"]`)) {
        setOpenDropdown(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [openDropdown]);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === `/${lang}` || pathname === "/";
    return pathname === `/${lang}${href}`;
  };

  // Menu items with dropdown support
  const menuItems = [
    { 
      href: "/", 
      label: lang === "ar" ? "الرئيسية" : "Home" 
    },
    { 
      href: "/services", 
      label: lang === "ar" ? "خدماتنا" : "Our Services",
      dropdown: true,
      type: "services",
      items: [
        {
          title: { ar: "الخدمات الأساسية", en: "Basic Services" },
          description: { ar: "خدماتنا الأساسية", en: "Our core services" },
          icon: "🔧",
          href: "/services/basic"
        },
        {
          title: { ar: "خدمات متقدمة", en: "Advanced Services" },
          description: { ar: "حلول متقدمة", en: "Advanced solutions" },
          icon: "🚀",
          href: "/services/advanced"
        },
        {
          title: { ar: "خدمات خاصة", en: "Special Services" },
          description: { ar: "حلول مخصصة", en: "Custom solutions" },
          icon: "⭐",
          href: "/services/special"
        }
      ]
    },
    { 
      href: "/projects", 
      label: lang === "ar" ? "مشاريعنا" : "Projects" 
    },
    { 
      href: "/about", 
      label: lang === "ar" ? "من نحن" : "About Us" 
    },
    { 
      href: "/contact", 
      label: lang === "ar" ? "اتصل بنا" : "Contact Us" 
    },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) return null;

  const phoneNumber = "+966559931444";
  const whatsappNumber = "+966559931444";

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${scrolled ? "navbar-scrolled" : ""}`}
        style={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.98)" : "white",
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease-in-out",
          boxShadow: scrolled ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none",
          zIndex: 1030
        }}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="navbar-brand">
            <img 
              src="/logo.png" 
              alt="Logo" 
              style={{ 
                width: "160px",
                height: "auto",
                transition: "all 0.3s ease"
              }} 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="d-none d-lg-flex align-items-center w-100">
            <ul className="navbar-nav mx-auto align-items-center">
              {menuItems.map((item, index) => (
                <li 
                  key={index} 
                  className="nav-item mx-2 position-relative"
                  data-dropdown={item.type}
                >
                  {item.dropdown ? (
                    <div className="dropdown-container">
                      <button
                        className={`nav-link dropdown-toggle d-flex align-items-center ${isActive(item.href) ? "active" : ""}`}
                        onClick={() => toggleDropdown(item.type)}
                        style={{
                          color: scrolled ? "#333" : "#333",
                          fontWeight: "500",
                          fontSize: "16px",
                          padding: "8px 16px",
                          borderRadius: "6px",
                          transition: "all 0.3s ease",
                          background: "none",
                          border: "none",
                          cursor: "pointer"
                        }}
                      >
                        {item.label}
                        {lang === "ar" ? (
                          <FaChevronUp className="ms-1" size={12} />
                        ) : (
                          <FaChevronDown className="ms-1" size={12} />
                        )}
                      </button>

                      {openDropdown === item.type && (
                        <div className="dropdown-menu show">
                          <div className="dropdown-content">
                            <div className="dropdown-header">
                              <h6>{item.label}</h6>
                              <p>{lang === "ar" ? "اختر الخدمة المناسبة" : "Choose the right service"}</p>
                            </div>
                            <div className="dropdown-grid">
                              {item.items.map((dropdownItem, idx) => (
                                <Link
                                  key={idx}
                                  href={`/${lang}${dropdownItem.href}`}
                                  className="dropdown-item"
                                  onClick={handleLinkClick}
                                >
                                  <span className="dropdown-icon">{dropdownItem.icon}</span>
                                  <div className="dropdown-text">
                                    <h6>{dropdownItem.title[lang]}</h6>
                                    <p>{dropdownItem.description[lang]}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={`/${lang}${item.href === "/" ? "" : item.href}`}
                      className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                      style={{
                        color: scrolled ? "#333" : "#333",
                        fontWeight: "500",
                        fontSize: "16px",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        transition: "all 0.3s ease",
                        position: "relative"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8f9fa";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href)) {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="active-indicator" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="d-flex align-items-center gap-3">
              {/* Language Switcher */}
              <Link
                href={pathname?.replace(`/${lang}`, lang === "ar" ? "/en" : "/ar") || "/"}
                className="btn-language"
              >
                {lang === "ar" ? "EN" : "ع"}
              </Link>

              {/* Call Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="btn-call d-flex align-items-center gap-2"
              >
                <FaPhone /> {lang === "ar" ? "اتصال" : "Call"}
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp d-flex align-items-center gap-2"
              >
                <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="d-lg-none d-flex align-items-center gap-3">
            <Link
              href={pathname?.replace(`/${lang}`, lang === "ar" ? "/en" : "/ar") || "/"}
              className="btn-language-mobile"
            >
              {lang === "ar" ? "EN" : "ع"}
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
              style={{
                border: "none",
                background: "none",
                padding: "8px",
                fontSize: "1.5rem",
                color: "#333"
              }}
            >
              {isMobileMenuOpen ? <FaTimes /> : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        ref={mobileMenuRef}
        className={`mobile-sidebar ${isMobileMenuOpen ? "show" : ""}`}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="mobile-sidebar-header">
          <Link href={`/${lang}`} className="navbar-brand" onClick={handleLinkClick}>
            <img 
              src="/logo.png" 
              alt="Logo" 
              style={{ width: "140px", height: "auto" }} 
            />
          </Link>
          <button className="close-btn" onClick={toggleMobileMenu}>
            <FaTimes />
          </button>
        </div>

        <div className="mobile-sidebar-content">
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-menu-item">
              {item.dropdown ? (
                <div className="mobile-dropdown">
                  <button
                    className="mobile-menu-link dropdown-toggle"
                    onClick={() => toggleDropdown(item.type)}
                  >
                    <span>{item.label}</span>
                    {openDropdown === item.type ? (
                      <FaChevronUp size={12} />
                    ) : (
                      <FaChevronDown size={12} />
                    )}
                  </button>
                  {openDropdown === item.type && (
                    <div className="mobile-dropdown-menu">
                      {item.items.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          href={`/${lang}${dropdownItem.href}`}
                          className="mobile-dropdown-item"
                          onClick={handleLinkClick}
                        >
                          <span className="mobile-icon">{dropdownItem.icon}</span>
                          <div>
                            <div className="mobile-item-title">
                              {dropdownItem.title[lang]}
                            </div>
                            <div className="mobile-item-desc">
                              {dropdownItem.description[lang]}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={`/${lang}${item.href === "/" ? "" : item.href}`}
                  className="mobile-menu-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Contact Buttons */}
          <div className="mobile-buttons">
            <a
              href={`tel:${phoneNumber}`}
              className="btn-call-mobile d-flex align-items-center justify-content-center gap-2"
              onClick={handleLinkClick}
            >
              <FaPhone /> {lang === "ar" ? "اتصال هاتفي" : "Call Now"}
            </a>
            
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-mobile d-flex align-items-center justify-content-center gap-2"
              onClick={handleLinkClick}
            >
              <FaWhatsapp /> {lang === "ar" ? "محادثة واتساب" : "Chat on WhatsApp"}
            </a>
          </div>

          {/* Contact Info */}
          <div className="mobile-contact-info">
            <p className="text-center mb-2">
              {lang === "ar" ? "متاحون 24/7" : "Available 24/7"}
            </p>
            <a 
              href={`tel:${phoneNumber}`}
              className="mobile-phone"
            >
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        :root {
          --primary-color: #1eca14;
          --primary-dark: #17a90d;
          --whatsapp-green: #25D366;
          --whatsapp-dark: #128C7E;
          --dark-color: #333333;
          --light-color: #ffffff;
          --gray-light: #f8f9fa;
        }

        /* Desktop Dropdown Styles */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          background: var(--light-color);
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0;
          margin-top: 10px;
          z-index: 1000;
          animation: dropdownFade 0.3s ease;
        }

        [dir="rtl"] .dropdown-menu {
          left: auto;
          right: 50%;
          transform: translateX(50%);
        }

        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .dropdown-content {
          padding: 1.5rem;
        }

        .dropdown-header {
          text-align: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--primary-color);
        }

        .dropdown-header h6 {
          color: var(--dark-color);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .dropdown-header p {
          color: var(--dark-color);
          opacity: 0.8;
          margin: 0;
          font-size: 0.9rem;
        }

        .dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .dropdown-item {
          display: flex;
          align-items: flex-start;
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          border: 1px solid transparent;
          background: var(--gray-light);
        }

        .dropdown-item:hover {
          background: white;
          border-color: var(--primary-color);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(30, 202, 20, 0.1);
        }

        .dropdown-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
          margin-top: 0.25rem;
        }

        [dir="rtl"] .dropdown-icon {
          margin-right: 0;
          margin-left: 1rem;
        }

        .dropdown-text h6 {
          color: var(--dark-color);
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 0.95rem;
        }

        .dropdown-text p {
          color: var(--dark-color);
          opacity: 0.7;
          font-size: 0.85rem;
          margin: 0;
        }

        /* Active Indicator */
        .active-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background-color: var(--primary-color);
          border-radius: 3px 3px 0 0;
        }

        /* Button Styles */
        .btn-language {
          background: transparent;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 14px;
          min-width: 60px;
          text-align: center;
        }

        .btn-language:hover {
          background: var(--primary-color);
          color: white;
          text-decoration: none;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 202, 20, 0.3);
        }

        .btn-call {
          background: var(--primary-color);
          border: none;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-call:hover {
          background: var(--primary-dark);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 202, 20, 0.3);
          text-decoration: none;
        }

        .btn-whatsapp {
          background: var(--whatsapp-green);
          border: none;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-whatsapp:hover {
          background: var(--whatsapp-dark);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
          text-decoration: none;
        }

        /* Mobile Styles */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1040;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          max-width: 85%;
          height: 100vh;
          background: white;
          box-shadow: -2px 0 20px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease-in-out;
          z-index: 1050;
          overflow-y: auto;
        }

        [dir="rtl"] .mobile-sidebar {
          right: auto;
          left: -100%;
        }

        .mobile-sidebar.show {
          right: 0;
        }

        [dir="rtl"] .mobile-sidebar.show {
          left: 0;
          right: auto;
        }

        .mobile-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #eee;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--dark-color);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-sidebar-content {
          padding: 1rem;
        }

        .mobile-menu-item {
          margin-bottom: 0.5rem;
        }

        .mobile-menu-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 1rem;
          color: var(--dark-color);
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .mobile-menu-link:hover {
          background: var(--gray-light);
        }

        .mobile-dropdown-menu {
          padding: 0.5rem 1rem;
          background: var(--gray-light);
          border-radius: 8px;
          margin: 0.5rem 0;
        }

        .mobile-dropdown-item {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          text-decoration: none;
          color: var(--dark-color);
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .mobile-dropdown-item:hover {
          background: rgba(30, 202, 20, 0.1);
        }

        .mobile-icon {
          font-size: 1.25rem;
          margin-right: 0.75rem;
        }

        [dir="rtl"] .mobile-icon {
          margin-right: 0;
          margin-left: 0.75rem;
        }

        .mobile-item-title {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .mobile-item-desc {
          color: #666;
          font-size: 0.8rem;
          margin-top: 2px;
        }

        .mobile-buttons {
          padding: 1.5rem 0;
          border-top: 1px solid #eee;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .btn-language-mobile {
          background: transparent;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          padding: 6px 12px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          font-size: 14px;
          min-width: 50px;
          text-align: center;
        }

        .btn-call-mobile, .btn-whatsapp-mobile {
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          font-size: 1rem;
        }

        .btn-call-mobile {
          background: var(--primary-color);
          color: white;
          border: none;
        }

        .btn-whatsapp-mobile {
          background: var(--whatsapp-green);
          color: white;
          border: none;
        }

        .mobile-contact-info {
          text-align: center;
          padding: 1rem;
          border-top: 1px solid #eee;
          margin-top: 1rem;
        }

        .mobile-phone {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.1rem;
          text-decoration: none;
          display: block;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .dropdown-menu {
            width: 90vw;
            left: 5vw;
            transform: none;
          }

          [dir="rtl"] .dropdown-menu {
            right: 5vw;
            left: auto;
            transform: none;
          }

          .dropdown-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 360px) {
          .mobile-sidebar {
            width: 280px;
          }
        }

        /* Navbar Scrolled State */
        .navbar-scrolled .navbar-logo {
          width: 140px;
        }

        .navbar-scrolled .nav-link {
          font-size: 15px;
          padding: 6px 12px;
        }
      `}</style>
    </>
  );
}