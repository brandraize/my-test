"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DynamicTrainingPage({ lang = "en", trainings = [] }) {
  const isRTL = lang === "ar";

  const content = {
    en: {
      title: "Training Programs",
      subtitle: "Enhance Your Skills with Professional Training",
      viewDetails: "View Details",
      noTrainings: "No training programs available at the moment.",
      backToHome: "Back to Home",
      learnMore: "Learn More"
    },
    ar: {
      title: "البرامج التدريبية",
      subtitle: "طور مهاراتك مع التدريب الاحترافي",
      viewDetails: "عرض التفاصيل",
      noTrainings: "لا توجد برامج تدريبية متاحة في الوقت الحالي.",
      backToHome: "العودة للرئيسية",
      learnMore: "اعرف المزيد"
    }
  };

  const t = content[lang];

  if (!trainings || trainings.length === 0) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>{t.noTrainings}</h2>
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
        background: "linear-gradient(135deg, #047857 0%, #059669 100%)",
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

      {/* Trainings Grid */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
            gap: "30px" 
          }}>
            {trainings.map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
              >
                {/* Training Image */}
                {training.image && (
                  <div style={{ position: "relative", height: "250px", overflow: "hidden" }}>
                    <Image
                      src={training.image}
                      alt={training.name[lang] || training.name.en}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"                        unoptimized                    />
                  </div>
                )}

                <div style={{ padding: "25px" }}>
                  {/* Icon */}
                  {training.icon && (
                    <div style={{
                      fontSize: "3rem",
                      color: "#10b981",
                      marginBottom: "15px"
                    }}>
                      {training.icon}
                    </div>
                  )}

                  {/* Training Title */}
                  <h3 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#065f46",
                    marginBottom: "10px"
                  }}>
                    {training.name[lang] || training.name.en}
                  </h3>

                  {/* Short Description */}
                  <p style={{
                    color: "#6b7280",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    marginBottom: "20px"
                  }}>
                    {(training.short_description[lang] || training.short_description.en)?.replace(/<[^>]*>/g, '').substring(0, 120)}...
                  </p>

                  {/* View Details Button */}
                  <Link href={`/${lang}/training/${training.slug}`}>
                    <button style={{
                      width: "100%",
                      padding: "12px",
                      background: "#10b981",
                      color: "white",
                      border: "none",
                      borderRadius: "25px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}>
                      {t.viewDetails}
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: "linear-gradient(135deg, #047857 0%, #059669 100%)",
        padding: "80px 20px",
        textAlign: "center",
        color: "white"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>
            {isRTL ? "هل أنت مستعد للتعلم؟" : "Ready to Learn?"}
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.9 }}>
            {isRTL 
              ? "انضم إلى برامجنا التدريبية وطور مهاراتك المهنية"
              : "Join our training programs and enhance your professional skills"}
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
              cursor: "pointer"
            }}>
              {isRTL ? "اتصل بنا" : "Contact Us"}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
