"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Navbar({ lang }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  // Ensure hydration consistency
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    // Initialize Bootstrap components
    if (typeof window !== 'undefined') {
      // Load Bootstrap JS if not already loaded
      if (!window.bootstrap) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle offcanvas state
  useEffect(() => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    if (offcanvas) {
      const handleShow = () => setIsOffcanvasOpen(true);
      const handleHide = () => setIsOffcanvasOpen(false);
      
      offcanvas.addEventListener('show.bs.offcanvas', handleShow);
      offcanvas.addEventListener('hide.bs.offcanvas', handleHide);
      
      return () => {
        offcanvas.removeEventListener('show.bs.offcanvas', handleShow);
        offcanvas.removeEventListener('hide.bs.offcanvas', handleHide);
      };
    }
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === `/${lang}` || pathname === "/";
    return pathname === `/${lang}${href}`;
  };

  const menuItems = [
    { href: "/", label: lang === "ar" ? "الرئيسية" : "Home" },
    { href: "/service", label: lang === "ar" ? "الخدمات" : "Services" },
    { href: "/projects", label: lang === "ar" ? "المشاريع" : "Projects" },
    { href: "/about", label: lang === "ar" ? "من نحن" : "About Us" },
    { href: "/contact", label: lang === "ar" ? "اتصل بنا" : "Contact Us" },
  ];

  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) return null;

  const phoneNumber = "+966559931444";
  const whatsappNumber = "+966559931444";

  // Function to close offcanvas programmatically
  const closeOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    if (offcanvas && typeof window !== 'undefined') {
      const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvas);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      } else {
        // Fallback: manually hide the offcanvas
        offcanvas.classList.remove('show');
        document.body.classList.remove('offcanvas-backdrop');
      }
    }
  };

  // Function to toggle offcanvas manually (fallback)
  const toggleOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    if (offcanvas) {
      if (isOffcanvasOpen) {
        offcanvas.classList.remove('show');
        setIsOffcanvasOpen(false);
      } else {
        offcanvas.classList.add('show');
        setIsOffcanvasOpen(true);
      }
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top shadow-sm"
      style={{
        backgroundColor: "white",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
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
              height: "auto"
            }} 
          />
        </Link>

        {/* Desktop Navbar links */}
        <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
          <ul className="navbar-nav mx-auto align-items-center">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item mx-2">
                <Link
                  href={`/${lang}${item.href === "/" ? "" : item.href}`}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                  style={{
                    color: "#333",
                    fontWeight: "500",
                    fontSize: "16px",
                    position: "relative",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    transition: "all 0.3s ease"
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
                    <span 
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "12px",
                        right: "12px",
                        height: "3px",
                        backgroundColor: "#1eca14",
                        borderRadius: "3px 3px 0 0"
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Language & Call/WhatsApp Buttons */}
        <div className="d-none d-lg-flex align-items-center ms-auto gap-3">
          {/* Professional Language Switcher */}
          <div className="language-switcher">
            <Link
              href={pathname?.replace(`/${lang}`, lang === "ar" ? "/en" : "/ar") || "/"}
              className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center"
              style={{
                width: "60px",
                height: "40px",
                fontWeight: "600",
                fontSize: "14px",
                border: "2px solid #1eca14",
                color: "#1eca14",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1eca14";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1eca14";
              }}
            >
              {lang === "ar" ? "EN" : "ع"}
            </Link>
          </div>
          
          {/* Call Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="btn btn-primary d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#1eca14",
              borderColor: "#1eca14",
              borderRadius: "8px",
              fontWeight: "600",
              padding: "10px 20px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#17a90d";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(30, 202, 20, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#1eca14";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaPhone /> {lang === "ar" ? "اتصال" : "Call Now"}
          </a>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#25D366",
              borderColor: "#25D366",
              borderRadius: "8px",
              fontWeight: "600",
              padding: "10px 20px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1da851";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#25D366";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
          </a>
        </div>

        {/* Mobile buttons and toggler */}
        <div className="d-lg-none d-flex align-items-center gap-2">
          {/* Mobile Language Switcher */}
          <Link
            href={pathname?.replace(`/${lang}`, lang === "ar" ? "/en" : "/ar") || "/"}
            className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center"
            style={{
              width: "50px",
              height: "40px",
              fontWeight: "600",
              fontSize: "14px",
              border: "2px solid #1eca14",
              color: "#1eca14",
              borderRadius: "8px",
              textDecoration: "none",
              backgroundColor: "transparent"
            }}
          >
            {lang === "ar" ? "EN" : "ع"}
          </Link>

          {/* Mobile toggler with better styling */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleOffcanvas}
            style={{
              padding: "8px",
              outline: "none",
              boxShadow: "none"
            }}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas */}
      <div
        className="offcanvas offcanvas-end d-lg-none"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        dir={lang === "ar" ? "rtl" : "ltr"}
        style={{
          transition: "transform 0.3s ease-in-out"
        }}
      >
        <div className="offcanvas-header border-bottom">
          <div className="d-flex align-items-center w-100 justify-content-between">
            <Link href={`/${lang}`} className="navbar-brand" onClick={closeOffcanvas}>
              <img 
                src="/logo.png" 
                alt="Logo" 
                style={{ 
                  width: "140px",
                  height: "auto"
                }} 
              />
            </Link>
            <button
              type="button"
              className="btn-close"
              onClick={closeOffcanvas}
              aria-label="Close"
              style={{
                fontSize: "1.5rem",
                opacity: 0.7
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div className="offcanvas-body pt-0">
          <ul className="navbar-nav justify-content-start flex-grow-1">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item border-bottom">
                <Link
                  href={`/${lang}${item.href === "/" ? "" : item.href}`}
                  className={`nav-link py-3 ${isActive(item.href) ? "active" : ""}`}
                  onClick={closeOffcanvas}
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: isActive(item.href) ? "#1eca14" : "#333",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                    e.currentTarget.style.paddingLeft = "15px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.paddingLeft = "12px";
                  }}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span 
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: "#1eca14",
                        borderRadius: "50%"
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Contact Buttons */}
          <div className="mt-4 d-flex flex-column gap-3 align-items-stretch">
            {/* Call Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
              style={{
                backgroundColor: "#1eca14",
                borderColor: "#1eca14",
                borderRadius: "8px",
                fontWeight: "600",
                padding: "15px",
                fontSize: "16px"
              }}
              onClick={closeOffcanvas}
            >
              <FaPhone /> {lang === "ar" ? "اتصال هاتفي" : "Call Now"}
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-flex align-items-center justify-content-center gap-2"
              style={{
                backgroundColor: "#25D366",
                borderColor: "#25D366",
                borderRadius: "8px",
                fontWeight: "600",
                padding: "15px",
                fontSize: "16px"
              }}
              onClick={closeOffcanvas}
            >
              <FaWhatsapp /> {lang === "ar" ? "محادثة واتساب" : "Chat on WhatsApp"}
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-4 pt-3 border-top">
            <p className="text-center text-muted mb-2">
              {lang === "ar" ? "متاحون 24/7" : "Available 24/7"}
            </p>
            <div className="d-flex flex-column align-items-center gap-1">
              <a 
                href={`tel:${phoneNumber}`}
                className="text-decoration-none"
                style={{ color: "#1eca14", fontWeight: "600" }}
              >
                {phoneNumber}
              </a>
              <small className="text-muted">
                {lang === "ar" ? "اتصل بنا الآن" : "Contact us now"}
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar styles */}
      <style jsx global>{`
        /* Ensure proper z-index for navbar */
        .navbar {
          z-index: 1030 !important;
        }

        .offcanvas {
          z-index: 1045 !important;
        }

        .offcanvas-backdrop {
          z-index: 1040 !important;
        }

        /* Navbar link styles */
        .navbar-nav .nav-link {
          font-weight: 500;
          transition: color 0.2s, background-color 0.2s;
        }
        
        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: #1eca14 !important;
        }
        
        .language-switcher .btn:hover {
          background-color: #1eca14 !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(30, 202, 20, 0.3);
        }
        
        /* Mobile menu button */
        .navbar-toggler:focus {
          box-shadow: none !important;
        }
        
        /* Offcanvas animation */
        .offcanvas.show {
          transform: translateX(0) !important;
        }
        
        /* RTL support */
        [dir="rtl"] .navbar-brand {
          margin-right: 0;
          margin-left: 1rem;
        }
        
        [dir="rtl"] .ms-auto {
          margin-left: 0 !important;
          margin-right: auto !important;
        }
        
        [dir="rtl"] .me-2 {
          margin-right: 0 !important;
          margin-left: 0.5rem !important;
        }
        
        [dir="rtl"] .offcanvas-end {
          left: 0;
          right: auto;
          transform: translateX(-100%);
        }
        
        [dir="rtl"] .offcanvas.show {
          transform: translateX(0) !important;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 991.98px) {
          .navbar-collapse {
            display: none !important;
          }
        }

        /* Ensure offcanvas works on touch devices */
        @media (max-width: 768px) {
          .offcanvas {
            width: 85% !important;
            max-width: 320px;
          }
        }

        /* Fix for very small screens */
        @media (max-width: 360px) {
          .offcanvas {
            width: 100% !important;
            max-width: none;
          }
          
          .navbar-brand img {
            width: 120px !important;
          }
        }
      `}</style>
    </nav>
  );
}