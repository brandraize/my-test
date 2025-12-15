"use client";
import { useState } from "react";
import Link from "next/link";

// ⭐ ADD THIS: Extract critical styles to avoid FOUC
const heroStyles = `
  .hero-section {
    background: linear-gradient(135deg, #043911 0%, #33750c 50%, #25a244 100%);
    min-height: 720px;
    padding-top: 80px;
    contain: layout style paint;
  }
  .hero-pattern {
    background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.05) 2px, transparent 2px);
    background-size: 40px 40px;
  }
`;

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
    <>
      {/* ⭐ ADD INLINE CRITICAL CSS */}
      <style jsx global>{`
        ${heroStyles}
      `}</style>
      
      <section
        className="hero-section position-relative w-100 d-flex align-items-center justify-content-center"
        style={{
          height: "auto",
          width: "100%",
          overflow: "hidden",
        }}
        aria-label={isRTL ? "قسم البطل الرئيسي" : "Hero section"}
        role="banner"
      >
        {/* Pattern overlay */}
        <div
          className="hero-pattern position-absolute top-0 start-0 w-100 h-100"
          style={{
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
            className="hero-title"
            style={{
              marginBottom: "1rem",
              padding: "0 10px",
            }}
          >
            {heroTitle}
          </h1>

          <p
            className="hero-description lead w-100"
            style={{
              margin: "0 auto",
              padding: "0 10px 20px",
              width: "100%",
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
    </>
  );
}