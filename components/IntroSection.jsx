"use client";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function IntroSection({ lang = "en" }) {
  const isRTL = lang === "ar";
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Image paths - assuming images are in the public folder
  const imagePaths = {
    circle: "/flight.png",
    mountain: "/flight.png",
    leaf: "/flight.png",
    flight: "/flight.png",
  };

  // Color scheme
  const colors = {
    primary: "#10b981",
    primaryDark: "#059669",
    secondary: "#d1fae5",
    accent: "#065f46",
    textDark: "#1f2937",
    textLight: "#6b7280",
    white: "#ffffff",
    lightBg: "#f0fdf4",
  };

  // Content based on language
  const content = {
    title: isRTL ? "لدينا ما تحتاجه!" : "We've got what you need!",
    description: isRTL
      ? `في "سينسينغ نيتشر"، نلتزم بتقديم خدمات متخصصة وموثوقة ومبتكرة في مختلف التخصصات الجيولوجية والجيوفيزيائية والبيئية والأرصاد الجوية. بفضل فريق من المتخصصين ذوي الخبرة والتقنيات الحديثة، نقدم رؤى شاملة لدعم الاستكشاف والتطوير والمحافظة على البيئة وإدارة المخاطر في جميع أنحاء العالم.`
      : `At "Sensing Nature" we are committed to delivering expert, reliable, and innovative services across geological, geophysical, environmental, and meteorological disciplines. With a team of experienced professionals and state-of-the-art technologies, we provide comprehensive insights to support exploration, development, environmental stewardship, and risk management worldwide.`,
    missionTitle: isRTL ? "مهمتنا" : "Our Mission",
    missionText: isRTL
      ? "تقديم خدمات استشارية وتطويرية وهندسية وأرصاد جوية وبيئية متميزة ودقيقة من خلال توفير حلول مبتكرة للتحديات المعقدة باستخدام أفضل الكفاءات والطرق والوسائل العلمية من أجل تحقيق القيادة والتميز في المملكة العربية السعودية ودول الخليج العربي والشرق الأوسط."
      : "At Sensing Nature we are committed to delivering expert, reliable, and innovative services across geological, geophysical, environmental, and meteorological disciplines. With a team of experienced professionals and state-of-the-art technologies, we provide comprehensive insights to support exploration, development, environmental stewardship, and risk management worldwide.",
    visionTitle: isRTL ? "رؤيتنا" : "Our Vision",
    visionText: isRTL
      ? "تسهيل عملية اتخاذ القرار للجهات والأفراد من خلال توفير معلومات دقيقة وموثوقة."
      : "Facilitate decision-making for entities and individuals by providing accurate and reliable information.",
  };

  if (!isMounted) {
    return (
      <section
        className="py-5 position-relative"
        style={{
          backgroundColor: colors.lightBg,
          direction: isRTL ? "rtl" : "ltr",
          overflow: "hidden",
        }}
        aria-labelledby="intro-title"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Simplified version for SSR */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2
                id="intro-title"
                className="mb-4"
                style={{ color: colors.accent }}
              >
                {content.title}
              </h2>
              <p className="mb-4 lead" style={{ color: colors.textDark }}>
                {content.description}
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{ height: "500px", backgroundColor: colors.white }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>
          {isRTL ? "عن شركتنا - سينسينغ نيتشر" : "About Us - Sensing Nature"}
        </title>
        <meta
          name="description"
          content={content.description.substring(0, 160)}
        />
      </Head>

      <section
        className="py-5"
        style={{
          backgroundColor: colors.lightBg,
          direction: isRTL ? "rtl" : "ltr",
          overflow: "hidden",
          position: "relative",
          zIndex: 1, // Fixed low z-index
        }}
        aria-labelledby="intro-title"
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            {/* Left Column - Text Content */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2
                id="intro-title"
                className="mb-4"
                style={{
                  color: colors.accent,
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: "bold",
                }}
              >
                {content.title}
              </h2>

              <p
                className="mb-4 lead"
                style={{
                  color: colors.textDark,
                  fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                  lineHeight: 1.8,
                }}
              >
                {content.description}
              </p>

              {/* Mission Card with Decorative Image */}
              <div
                className="mb-4 p-4 rounded-4 position-relative overflow-hidden"
                style={{
                  backgroundColor: colors.white,
                  borderLeft: isRTL ? "none" : `4px solid ${colors.primary}`,
                  borderRight: isRTL ? `4px solid ${colors.primary}` : "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
                aria-labelledby="mission-title"
              >
                <h3
                  id="mission-title"
                  className="mb-3"
                  style={{
                    color: colors.accent,
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                >
                  {content.missionTitle}
                </h3>
                <p
                  style={{
                    color: colors.textDark,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {content.missionText}
                </p>
              </div>

              {/* Vision Card with Decorative Image */}
              <div
                className="mb-4 p-4 rounded-4 position-relative overflow-hidden"
                style={{
                  backgroundColor: colors.white,
                  borderLeft: isRTL ? "none" : `4px solid ${colors.primaryDark}`,
                  borderRight: isRTL ? `4px solid ${colors.primaryDark}` : "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
                aria-labelledby="vision-title"
              >
                <h3
                  id="vision-title"
                  className="mb-3"
                  style={{
                    color: colors.accent,
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                >
                  {content.visionTitle}
                </h3>
                <p
                  style={{
                    color: colors.textDark,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {content.visionText}
                </p>
              </div>
            </div>

            {/* Right Column - Static Logo */}
            <div className="col-lg-6">
              <div
                className="position-relative rounded-4 overflow-hidden d-flex flex-column align-items-center justify-content-center"
                style={{
                  height: "500px",
                  border: `3px solid ${colors.secondary}`,
                  backgroundColor: colors.white,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  padding: "2rem",
                }}
              >
                {/* Simple Static Logo */}
                <div 
                  className="position-relative mb-4"
                  style={{ 
                    width: "200px", 
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <div
                    className="position-absolute rounded-circle"
                    style={{
                      width: "180px",
                      height: "180px",
                      backgroundColor: `${colors.primary}10`,
                      border: `2px solid ${colors.primary}20`,
                    }}
                  />
                  
                  {/* Static Images */}
                  <div className="position-relative d-flex flex-wrap justify-content-center align-items-center">
                    <div style={{ width: "60px", height: "60px", margin: "10px" }}>
                      <Image
                        src={imagePaths.mountain}
                        alt="Mountain"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div style={{ width: "50px", height: "50px", margin: "10px" }}>
                      <Image
                        src={imagePaths.leaf}
                        alt="Leaf"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div style={{ width: "50px", height: "50px", margin: "10px" }}>
                      <Image
                        src={imagePaths.flight}
                        alt="Flight"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Name */}
                <div className="text-center">
                  <h2
                    className="mb-2"
                    style={{
                      color: colors.accent,
                      fontWeight: "700",
                      fontSize: "2rem",
                      letterSpacing: "1px",
                    }}
                  >
                    Sensing Nature
                  </h2>
                  {isRTL && (
                    <h3
                      className="mb-3"
                      style={{
                        color: colors.accent,
                        fontWeight: "600",
                        fontSize: "1.4rem",
                      }}
                    >
                      استشعار الطبيعة
                    </h3>
                  )}
                  <div
                    className="mx-auto"
                    style={{
                      width: "100px",
                      height: "2px",
                      background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
                      margin: "0.5rem 0",
                    }}
                  />
                  <p
                    style={{
                      color: colors.textDark,
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      letterSpacing: "0.5px",
                      marginTop: "0.5rem",
                      maxWidth: "300px",
                      margin: "0 auto",
                    }}
                  >
                    {isRTL
                      ? "حلول بيئية مبتكرة ومستدامة"
                      : "Innovative & Sustainable Environmental Solutions"}
                  </p>
                </div>
              </div>

              <p
                className="text-center mt-3"
                style={{
                  color: colors.textLight,
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
              >
                {isRTL
                  ? "نحن نوفر حلولاً شاملة تجمع بين العلم المتقدم والبيئة المستدامة"
                  : "We provide comprehensive solutions combining advanced science and sustainable environment"}
              </p>
            </div>
          </div>
        </div>

        {/* Simple Separator Line */}
        <div className="container mt-5 pt-5">
          <div
            style={{
              height: "2px",
              background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary}, ${colors.secondary})`,
              margin: "0 auto",
              maxWidth: "80%",
              borderRadius: "1px",
              opacity: 0.6,
            }}
          />
        </div>
      </section>

      <style jsx global>{`
        /* CRITICAL FIX: Ensure WhatsApp button is always on top */
        .whatsapp-button {
          z-index: 2147483647 !important;
          transform: translateZ(0) !important;
          isolation: isolate !important;
          position: fixed !important;
        }
        
        /* Ensure no stacking context interference */
        section.py-5 {
          transform-style: flat !important;
          isolation: auto !important;
        }
      `}</style>
    </>
  );
}