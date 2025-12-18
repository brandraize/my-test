"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendar, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function DynamicProjectsPage({ lang = "en", projects = [] }) {
  const isRTL = lang === "ar";
  const [filter, setFilter] = useState("all"); // all, featured

  const content = {
    en: {
      title: "Our Projects",
      subtitle: "Explore Our Portfolio of Successful Solutions",
      all: "All Projects",
      featured: "Featured",
      viewDetails: "View Details",
      noProjects: "No projects available at the moment.",
      backToHome: "Back to Home"
    },
    ar: {
      title: "مشاريعنا",
      subtitle: "استكشف محفظة أعمالنا الناجحة",
      all: "جميع المشاريع",
      featured: "مميز",
      viewDetails: "عرض التفاصيل",
      noProjects: "لا توجد مشاريع متاحة في الوقت الحالي.",
      backToHome: "العودة للرئيسية"
    }
  };

  const t = content[lang];

  // Filter projects
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.is_featured);

  if (!projects || projects.length === 0) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>{t.noProjects}</h2>
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

      {/* Filter Buttons */}
      <section style={{ padding: "40px 20px 20px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
          <button
            onClick={() => setFilter("all")}
            style={{
              padding: "12px 30px",
              background: filter === "all" ? "#10b981" : "white",
              color: filter === "all" ? "white" : "#065f46",
              border: "2px solid #10b981",
              borderRadius: "25px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            {t.all}
          </button>
          <button
            onClick={() => setFilter("featured")}
            style={{
              padding: "12px 30px",
              background: filter === "featured" ? "#10b981" : "white",
              color: filter === "featured" ? "white" : "#065f46",
              border: "2px solid #10b981",
              borderRadius: "25px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            <FaStar style={{ marginRight: "8px" }} />
            {t.featured}
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: "40px 20px 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", 
            gap: "30px" 
          }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
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
                {/* Project Image */}
                {project.image && (
                  <div style={{ position: "relative", height: "250px", overflow: "hidden" }}>
                    <Image
                      src={project.image}
                      alt={project.name[lang] || project.name.en}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
                    />
                    {project.is_featured && (
                      <div style={{
                        position: "absolute",
                        top: "15px",
                        right: isRTL ? "auto" : "15px",
                        left: isRTL ? "15px" : "auto",
                        background: "#fbbf24",
                        color: "white",
                        padding: "8px 15px",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px"
                      }}>
                        <FaStar />
                        {t.featured}
                      </div>
                    )}
                  </div>
                )}

                <div style={{ padding: "25px" }}>
                  {/* Project Title */}
                  <h3 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#065f46",
                    marginBottom: "10px"
                  }}>
                    {project.name[lang] || project.name.en}
                  </h3>

                  {/* Project Date */}
                  {project.project_date && (
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#6b7280",
                      fontSize: "0.9rem",
                      marginBottom: "15px"
                    }}>
                      <FaCalendar />
                      {new Date(project.project_date).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}
                    </div>
                  )}

                  {/* Project Description */}
                  <p style={{
                    color: "#6b7280",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    marginBottom: "20px"
                  }}>
                    {(project.description[lang] || project.description.en)?.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </p>

                  {/* View Details Button */}
                  <Link href={`/${lang}/projects/${project.slug}`}>
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
            {isRTL ? "لديك مشروع مشابه؟" : "Have a Similar Project?"}
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.9 }}>
            {isRTL 
              ? "دعنا نساعدك في تحقيق نتائج رائعة. تواصل معنا اليوم!"
              : "Let us help you achieve outstanding results. Contact us today!"}
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
              {isRTL ? "ابدأ مشروعك" : "Start Your Project"}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
