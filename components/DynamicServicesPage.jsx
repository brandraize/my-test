"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function DynamicServicesPage({ lang = "en", services = [] }) {
  const isRTL = lang === "ar";
  const [activeService, setActiveService] = useState(services[0]?.id || null);

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive Solutions for Every Challenge",
      learnMore: "Learn More",
      noServices: "No services available at the moment.",
      backToHome: "Back to Home"
    },
    ar: {
      title: "خدماتنا",
      subtitle: "حلول شاملة لكل تحدي",
      learnMore: "اعرف المزيد",
      noServices: "لا توجد خدمات متاحة في الوقت الحالي.",
      backToHome: "العودة للرئيسية"
    }
  };

  const t = content[lang];

  if (!services || services.length === 0) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>{t.noServices}</h2>
        <Link href={`/${lang}`}>
          <button style={{
            marginTop: "20px",
            padding: "12px 30px",
            background: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer"
          }}>
            {t.backToHome}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }} dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        padding: "120px 20px 80px",
        color: "white",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "bold", marginBottom: "20px" }}>
              {t.title}
            </h1>
            <p style={{ fontSize: "1.3rem", opacity: 0.9 }}>
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
            gap: "30px" 
          }}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "40px 30px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  border: activeService === service.id ? "3px solid #10b981" : "3px solid transparent"
                }}
                onMouseEnter={() => setActiveService(service.id)}
              >
                {/* Service Icon */}
                {service.icon && (
                  <div style={{ marginBottom: "25px" }}>
                    <Image
                      src={service.icon}
                      alt={service.name[lang] || service.name.en}
                      width={80}
                      height={80}
                      style={{ filter: "drop-shadow(0 4px 6px rgba(16, 185, 129, 0.3))" }}
                      unoptimized
                    />
                  </div>
                )}

                {/* Service Title */}
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#065f46",
                  marginBottom: "15px"
                }}>
                  {service.name[lang] || service.name.en}
                </h3>

                {/* Service Short Description */}
                <p style={{
                  color: "#6b7280",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginBottom: "20px"
                }}>
                  {(service.short_description[lang] || service.short_description.en)?.replace(/<[^>]*>/g, '')}
                </p>

                {/* Service Description */}
                <p style={{
                  color: "#9ca3af",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  marginBottom: "25px"
                }}>
                  {(service.description[lang] || service.description.en)?.replace(/<[^>]*>/g, '').substring(0, 150)}...
                </p>

                {/* Learn More Button */}
                <Link href={`/${lang}/service/${service.slug}`}>
                  <button style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 25px",
                    background: "#10b981",
                    color: "white",
                    border: "none",
                    borderRadius: "25px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    width: "100%",
                    justifyContent: "center"
                  }}>
                    {t.learnMore}
                    <FaArrowRight />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        padding: "80px 20px",
        textAlign: "center",
        color: "white"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
            {isRTL ? "مستعد لبدء مشروعك؟" : "Ready to Start Your Project?"}
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.9 }}>
            {isRTL 
              ? "تواصل مع خبرائنا للحصول على حل مخصص يناسب متطلباتك الخاصة."
              : "Contact our experts to get a customized solution that meets your specific requirements."}
          </p>
          <Link href={`/${lang}/contact`}>
            <button style={{
              padding: "15px 40px",
              background: "white",
              color: "#10b981",
              border: "none",
              borderRadius: "30px",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}>
              {isRTL ? "تواصل معنا" : "Contact Us"}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
