"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar({ lang }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure hydration consistency
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Show background only when scrolled past 20px (adjust as needed)
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === `/${lang}` || pathname === "/";
    return pathname === `/${lang}${href}`;
  };

  const menuItems = [
    { href: "/aman", label: lang === "ar" ? "الرئيسية" : "Home" },
    {
      href: "/aman",
      label: lang === "ar" ? "الخدمات" : "Services",
    },
    { href: "/aman", label: lang === "ar" ? "من نحن" : "About Us" },
    { href: "/aman", label: lang === "ar" ? "اتصل بنا" : "Contact Us" },
  ];

  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) return null;

  const whatsappNumber = "+966559931444";

  // Function to close offcanvas programmatically
  const closeOffcanvas = () => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    if (offcanvas && typeof window !== "undefined") {
      const bsOffcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvas);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-md fixed-top shadow-sm"
      style={
        mounted
          ? scrolled
            ? {
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }
            : {
                backgroundColor: "transparent",
                boxShadow: "none",
                transition: "all 0.3s ease",
              }
          : { backgroundColor: "white" } // Default before hydration
      }
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
              filter: !scrolled && mounted ? "brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0,0,0,0.3))" : "none",
              transition: "filter 0.3s ease"
            }} 
          />
        </Link>

        {/* Desktop Navbar links */}
        <ul className="navbar-nav mx-auto d-none d-md-flex align-items-center">
          {menuItems.map((item, index) => (
            <li key={index} className={`nav-item ${item.children ? "dropdown" : ""} mx-2`}>
              {item.children ? (
                <>
                  <Link
                    href={`/${lang}${item.href}`}
                    className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                    style={{
                      color: !scrolled && mounted ? "white" : "#333",
                      textShadow: !scrolled && mounted ? "0 1px 2px rgba(0,0,0,0.5)" : "none"
                    }}
                  >
                    {item.label}
                  </Link>
                  <ul className="dropdown-menu shadow-sm rounded">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link href={`/${lang}${child.href}`} className="dropdown-item">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={`/${lang}${item.href === "/" ? "" : item.href}`}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                  style={{
                    color: !scrolled && mounted ? "white" : "#333",
                    textShadow: !scrolled && mounted ? "0 1px 2px rgba(0,0,0,0.5)" : "none"
                  }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Language & WhatsApp Button */}
        <div className="d-none d-md-flex align-items-center ms-auto gap-3">
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
                border: !scrolled && mounted ? "2px solid white" : "2px solid #0d6efd",
                color: !scrolled && mounted ? "white" : "#0d6efd",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backgroundColor: !scrolled && mounted ? "transparent" : "transparent"
              }}
            >
              {lang === "ar" ? "EN" : "ع"}
            </Link>
          </div>
          
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#25D366",
              borderColor: "#25D366",
              borderRadius: "8px",
              fontWeight: "500",
              boxShadow: !scrolled && mounted ? "0 2px 8px rgba(0,0,0,0.3)" : "none"
            }}
          >
            <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
          </a>
        </div>

        {/* Mobile Language Switcher - Now at top near toggler */}
        <div className="d-md-none d-flex align-items-center">
          <Link
            href={pathname?.replace(`/${lang}`, lang === "ar" ? "/en" : "/ar") || "/"}
            className="btn btn-outline-primary btn-sm d-flex align-items-center justify-content-center me-2"
            style={{
              width: "50px",
              height: "40px",
              fontWeight: "600",
              fontSize: "14px",
              border: !scrolled && mounted ? "2px solid white" : "2px solid #0d6efd",
              color: !scrolled && mounted ? "white" : "#04c014ff",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              backgroundColor: !scrolled && mounted ? "transparent" : "transparent"
            }}
          >
            {lang === "ar" ? "EN" : "ع"}
          </Link>

          {/* Mobile toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            style={{
              color: !scrolled && mounted ? "white" : "inherit",
              borderColor: !scrolled && mounted ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.1)"
            }}
          >
            <span 
              className="navbar-toggler-icon" 
              style={{
                filter: !scrolled && mounted ? "brightness(0) invert(1)" : "none"
              }}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas */}
      <div
        className="offcanvas offcanvas-end d-md-none"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            {lang === "ar" ? "القائمة" : "Menu"}
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                {item.children ? (
                  <>
                    <a
                      className="nav-link"
                      data-bs-toggle="collapse"
                      href={`#submenu-${index}`}
                      role="button"
                      aria-expanded="false"
                      aria-controls={`submenu-${index}`}
                    >
                      {item.label}
                    </a>
                    <div className="collapse" id={`submenu-${index}`}>
                      <ul className="list-unstyled ps-3">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link
                              href={`/${lang}${child.href}`}
                              className="nav-link"
                              onClick={closeOffcanvas}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={`/${lang}${item.href === "/" ? "" : item.href}`}
                    className="nav-link"
                    onClick={closeOffcanvas}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile WhatsApp Button */}
          <div className="mt-3 d-flex flex-column gap-2 align-items-center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-flex align-items-center gap-2 justify-content-center"
              style={{
                width: "100%",
                maxWidth: "200px",
                backgroundColor: "#25D366",
                borderColor: "#25D366",
                borderRadius: "8px",
                fontWeight: "500"
              }}
              onClick={closeOffcanvas}
            >
              <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
            </a>
          </div>
        </div>
      </div>

      {/* Navbar styles */}
      <style jsx global>{`
        .navbar-nav .nav-link {
          font-weight: 500;
          transition: color 0.2s;
        }
        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: #1eca14ff !important;
        }
        .navbar-nav .dropdown-menu {
          border-radius: 0.5rem;
          transition: all 0.2s ease-in-out;
        }
        .language-switcher .btn:hover {
          background-color: #0fce1bff;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(16, 165, 45, 0.3);
        }
        @media (min-width: 768px) {
          .navbar-nav .dropdown:hover .dropdown-menu {
            display: block;
          }
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
        [dir="rtl"] .ms-3 {
          margin-left: 0 !important;
          margin-right: 1rem !important;
        }
        [dir="rtl"] .me-auto {
          margin-right: 0 !important;
          margin-left: auto !important;
        }
        [dir="rtl"] .dropdown-menu {
          text-align: right;
        }
      `}</style>
    </nav>
  );
}