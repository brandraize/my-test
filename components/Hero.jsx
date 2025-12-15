"use client";
import { useState } from "react";
import Link from "next/link";

export default function HeroSection({
  text = "Get in Touch",
  lang = "en",
  heroTitle,
  heroDescription,
}) {
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverLearnMore, setHoverLearnMore] = useState(false);
  const isRTL = lang === "ar";

  return (
    <section
      className="position-relative w-100 d-flex align-items-center justify-content-center"
      style={{
        height: "720px",
        width: "100%",
        overflow: "hidden",
        paddingTop: "80px",
        background: "linear-gradient(135deg, #043911 0%, #33750c 50%, #25a244 100%)",
        contain: "layout style paint",
      }}
      aria-label={isRTL ? "قسم البطل الرئيسي" : "Hero section"}
      role="banner"
    >
      {/* ⭐ LCP Tracking - Tiny preload image */}
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect width='1200' height='600' fill='%23043911'/%3E%3C/svg%3E"
        alt=""
        width="1200"
        height="600"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          opacity: 0,
          pointerEvents: 'none',
          top: 0,
          left: 0,
        }}
        loading="eager"
        fetchPriority="high"
      />
      {/* Pattern overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

        {/* Centered content */}
        <div
          className="position-relative text-center w-100"
          style={{
            zIndex: 2,
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: "1rem",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
              padding: "0 10px",
              minHeight: "72px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {heroTitle}
          </h1>

          <p
            className="lead w-100"
            style={{
              color: "#ffffff",
              fontSize: "clamp(0.95rem, 2vw, 1.3rem)",
              lineHeight: 1.5,
              margin: "0 auto",
              padding: "0 10px 20px",
              textShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
              width: "100%",
              minHeight: "58px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {heroDescription}
          </p>

          {/* Two Buttons - ⭐ MAKE THESE LOAD LAST */}
          <div 
            className="d-flex flex-wrap justify-content-center align-items-center gap-3"
            style={{ padding: "0 10px" }}
            role="group"
            aria-label={isRTL ? "أزرار الإجراءات الرئيسية" : "Primary action buttons"}
          >
            {/* Contact Us Button */}
            <Link 
              href={`/${lang}/contact`} 
              style={{ textDecoration: "none", width: "100%", maxWidth: "280px" }}
              aria-label={isRTL ? "انتقل إلى صفحة الاتصال" : "Navigate to contact page"}
              // ⭐ ADD PRIORITY
              prefetch={false} // Don't prefetch on mobile
            >
              <button
                onMouseEnter={() => setHoverContact(true)}
                onMouseLeave={() => setHoverContact(false)}
                className="btn fw-semibold shadow rounded-pill d-flex align-items-center justify-content-center gap-2 w-100"
                style={{
                  fontSize: "clamp(14px, 2vw, 18px)",
                  transition: "background-color 0.2s ease, box-shadow 0.2s ease",
                  padding: "12px 24px",
                  cursor: "pointer",
                  backgroundColor: hoverContact ? "#1f8636" : "#25a244",
                  color: "white",
                  border: "none",
                  boxShadow: hoverContact
                    ? "0 6px 20px rgba(37, 162, 68, 0.5)"
                    : "0 4px 15px rgba(37, 162, 68, 0.4)",
                  minHeight: "48px",
                  willChange: "background-color, box-shadow",
                  transform: "translateZ(0)",
                }}
                aria-label={isRTL ? "تواصل معنا" : "Contact us button"}
              >
                <span>{isRTL ? "تواصل معنا" : "Contact Us"}</span>
                <span
                  className="arrow"
                  style={{
                    display: "inline-block",
                    marginLeft: isRTL ? "0" : "6px",
                    marginRight: isRTL ? "6px" : "0",
                    opacity: hoverContact ? 1 : 0.7,
                    transition: "opacity 0.2s ease",
                    color: "white",
                  }}
                  aria-hidden="true"
                >
                  {isRTL ? "←" : "→"}
                </span>
              </button>
            </Link>

            {/* Learn More Button */}
            <Link 
              href={`/${lang}/about`} 
              style={{ textDecoration: "none", width: "100%", maxWidth: "280px" }}
              aria-label={isRTL ? "تعرف على المزيد عن خدماتنا" : "Learn more about our services"}
              // ⭐ ADD PRIORITY
              prefetch={false}
            >
              <button
                onMouseEnter={() => setHoverLearnMore(true)}
                onMouseLeave={() => setHoverLearnMore(false)}
                className="btn fw-semibold shadow rounded-pill d-flex align-items-center justify-content-center gap-2 w-100"
                style={{
                  fontSize: "clamp(14px, 2vw, 18px)",
                  transition: "background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                  padding: "12px 24px",
                  cursor: "pointer",
                  backgroundColor: hoverLearnMore ? "rgba(255, 165, 0, 0.2)" : "transparent",
                  color: "white",
                  border: hoverLearnMore ? "2px solid #ff8c00" : "2px solid white",
                  boxShadow: hoverLearnMore
                    ? "0 6px 20px rgba(255, 165, 0, 0.4)"
                    : "0 4px 15px rgba(255, 255, 255, 0.2)",
                  minHeight: "48px",
                  willChange: "background-color, border-color, box-shadow",
                  transform: "translateZ(0)",
                }}
                aria-label={isRTL ? "اعرف المزيد" : "Learn More"}
              >
                <span>{isRTL ? "اعرف المزيد" : "Learn More"}</span>
                <span
                  className="arrow"
                  style={{
                    display: "inline-block",
                    marginLeft: isRTL ? "0" : "6px",
                    marginRight: isRTL ? "6px" : "0",
                    opacity: hoverLearnMore ? 1 : 0.7,
                    transition: "opacity 0.2s ease",
                    color: "white",
                  }}
                  aria-hidden="true"
                >
                  {isRTL ? "←" : "→"}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </section>
  );
}