"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
      aria-label="Hero section"
    >
      {/* Background video */}
      <video
        src="/coding.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          objectFit: "cover",
          zIndex: 1,
          // filter: "brightness(0.7) sepia(0.3) hue-rotate(60deg) saturate(1.3)"
        }}
        aria-hidden="true"
      >
        Your browser does not support the video tag.
      </video>

      {/* Green overlay - Layer 1 */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(4, 57, 17, 0.39)", // Your brand green with 30% opacity
          mixBlendMode: "multiply",
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Dark overlay - Layer 2 */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(50, 117, 12, 0.2)", // Dark overlay for contrast
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Centered content */}
      <div
        className="position-relative text-center"
        style={{
          zIndex: 3,
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <motion.h1
          style={{
            color: "white",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "bold",
            lineHeight: 1.2,
            marginBottom: "1rem",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {heroTitle}
        </motion.h1>

    

      

        <motion.p
          className="lead"
          style={{
            color: "white",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            lineHeight: 1.5,
            maxWidth: "100%",
            margin: "0 auto",
            paddingBottom: "30px",
            textShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
          }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          {heroDescription}
        </motion.p>

        {/* Two Buttons */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          {/* Contact Us Button */}
          <Link href="/contact-us" style={{ textDecoration: "none" }}>
            <button
              onMouseEnter={() => setHoverContact(true)}
              onMouseLeave={() => setHoverContact(false)}
              className="btn fw-semibold shadow rounded-pill d-inline-flex align-items-center gap-2"
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                transition: "all 0.3s ease",
                transform: hoverContact ? "scale(1.05)" : "scale(1)",
                padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
                cursor: "pointer",
                backgroundColor: "#25a244", // Your brand green
                color: "white",
                border: "none",
                boxShadow: hoverContact
                  ? "0 6px 20px rgba(37, 162, 68, 0.5)"
                  : "0 4px 15px rgba(37, 162, 68, 0.4)",
                minWidth: "160px",
                whiteSpace: "nowrap",
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
                  opacity: hoverContact ? 1 : 0,
                  transform: hoverContact
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

          {/* Learn More Button */}
          <Link href="/about" style={{ textDecoration: "none" }}>
            <button
              onMouseEnter={() => setHoverLearnMore(true)}
              onMouseLeave={() => setHoverLearnMore(false)}
              className="btn fw-semibold shadow rounded-pill d-inline-flex align-items-center gap-2"
              style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                transition: "all 0.3s ease",
                transform: hoverLearnMore ? "scale(1.05)" : "scale(1)",
                padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
                cursor: "pointer",
                backgroundColor: "transparent",
                color: "white",
                border: "2px solid white",
                boxShadow: hoverLearnMore
                  ? "0 6px 20px rgba(255, 255, 255, 0.3)"
                  : "0 4px 15px rgba(255, 255, 255, 0.2)",
                minWidth: "160px",
                whiteSpace: "nowrap",
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
                  opacity: hoverLearnMore ? 1 : 0,
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
        @media (max-width: 1024px) {
          .arrow {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }
        }

        @media (max-width: 576px) {
          .d-flex.flex-wrap {
            flex-direction: column !important;
            gap: 1rem !important;
          }

          button {
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
}
