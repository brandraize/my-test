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
        minHeight: "calc(100vh - 64px)",
        height: "auto",
        width: "100%",
        overflow: "hidden",
        paddingTop: "80px", // offset fixed navbar without adding page-level gap
        background: "linear-gradient(135deg, #043911 0%, #33750c 50%, #25a244 100%)",
        willChange: "auto",
        contentVisibility: "auto",
      }}
      aria-label={isRTL ? "قسم البطل الرئيسي" : "Hero section"}
      role="banner"
    >
      {/* Optional subtle pattern overlay */}
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
          }}
        >
          {heroTitle}
        </h1>

        <p
          className="lead w-100"
          style={{
            color: "white",
            fontSize: "clamp(0.95rem, 2vw, 1.3rem)",
            lineHeight: 1.5,
            margin: "0 auto",
            paddingBottom: "20px",
            textShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
            width: "100%",
            padding: "0 10px 20px",
          }}
        >
          {heroDescription}
        </p>

        {/* Two Buttons */}
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
          >
            <button
              onMouseEnter={() => setHoverContact(true)}
              onMouseLeave={() => setHoverContact(false)}
              className="btn fw-semibold shadow rounded-pill d-flex align-items-center justify-content-center gap-2 w-100"
              style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hoverContact ? "scale(1.05)" : "scale(1)",
                padding: "12px 24px",
                cursor: "pointer",
                backgroundColor: "#25a244",
                color: "white",
                border: "none",
                boxShadow: hoverContact
                  ? "0 6px 20px rgba(37, 162, 68, 0.5)"
                  : "0 4px 15px rgba(37, 162, 68, 0.4)",
                minHeight: "48px",
                willChange: hoverContact ? "transform" : "auto",
              }}
              aria-label={isRTL ? "تواصل معنا" : "Contact Us"}
            >
              <span>{isRTL ? "تواصل معنا" : "Contact Us"}</span>
              <span
                className="arrow"
                style={{
                  display: "inline-block",
                  marginLeft: isRTL ? "0" : "6px",
                  marginRight: isRTL ? "6px" : "0",
                  opacity: hoverContact ? 1 : 0.7,
                  transform: hoverContact
                    ? "translateX(0)"
                    : isRTL
                    ? "translateX(8px)"
                    : "translateX(-8px)",
                  transition: "all 0.2s ease",
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
          >
            <button
              onMouseEnter={() => setHoverLearnMore(true)}
              onMouseLeave={() => setHoverLearnMore(false)}
              className="btn fw-semibold shadow rounded-pill d-flex align-items-center justify-content-center gap-2 w-100"
              style={{
                fontSize: "clamp(14px, 2vw, 18px)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: hoverLearnMore ? "scale(1.05)" : "scale(1)",
                padding: "12px 24px",
                cursor: "pointer",
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid white",
                boxShadow: hoverLearnMore
                  ? "0 6px 20px rgba(255, 255, 255, 0.3)"
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
                  transform: hoverLearnMore
                    ? "translateX(0)"
                    : isRTL
                    ? "translateX(8px)"
                    : "translateX(-8px)",
                  transition: "all 0.2s ease",
                  color: "white",
                }}
              >
                {isRTL ? "←" : "→"}
              </span>
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            min-height: calc(100vh - 56px) !important;
            height: auto !important;
          }
          
          .lead {
            padding: 0 5px 15px !important;
          }
          
          .d-flex.flex-wrap {
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
            padding: 0 5px !important;
          }
          
          a {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          button {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          .arrow {
            opacity: 0.7 !important;
            transform: translateX(0) !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: clamp(1.5rem, 5vw, 2rem) !important;
            padding: 0 5px !important;
          }
          
          .lead {
            font-size: clamp(0.9rem, 3vw, 1.1rem) !important;
          }
          
          button {
            font-size: 16px !important;
            padding: 10px 20px !important;
          }
        }
        
        @media (max-width: 320px) {
          section {
            padding-top: 60px !important;
          }
          
          h1 {
            font-size: 1.4rem !important;
          }
          
          .lead {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}