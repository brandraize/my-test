"use client";
import React from "react";
import "./Skills.css";

export default function TechMarquee({ lang = "en" }) {
  return (
    <section
      className={`tech-marquee-wrapper ${lang === "ar" ? "text-end" : "text-start"}`}
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{ backgroundColor: "#001233", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div className="container text-center text-white">
        <h2 className="fw-bold">
        </h2>
      
      </div>
    </section>
  );
}
