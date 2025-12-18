"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Accreditations({ lang = "en" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Static logo data - no database needed
  const logos = [
    { id: 1, src: "/logos/logo1.webp", alt: "Partner 1" },
    { id: 2, src: "/logos/logo2.webp", alt: "Partner 2" },
    { id: 3, src: "/logos/logo3.webp", alt: "Partner 3" },
    { id: 4, src: "/logos/logo4.webp", alt: "Partner 4" },
    { id: 5, src: "/logos/logo5.webp", alt: "Partner 5" },
    { id: 6, src: "/logos/logo6.webp", alt: "Partner 6" },
    { id: 7, src: "/logos/logo7.webp", alt: "Partner 7" },
    { id: 8, src: "/logos/logo8.webp", alt: "Partner 8" },
  ];

  if (!mounted) {
    return (
      <section style={{ minHeight: "280px", background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)" }} />
    );
  }

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
        padding: "60px 20px",
      }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{ fontSize: "clamp(24px, 4vw, 32px)", color: "#0f5132" }}>
          {lang === "ar" ? "الاعتمادات" : "Accreditations"}
        </h2>
        <p className="text-center text-muted mb-5" style={{ maxWidth: "720px", margin: "0 auto 50px" }}>
          {lang === "ar"
            ? "شركاؤنا المعتمدون يضمنون أعلى معايير الجودة والمصداقية."
            : "Our accredited partners ensure the highest standards of quality and credibility."}
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          speed={600}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div
                className="d-flex align-items-center justify-content-center bg-white"
                style={{
                  borderRadius: "12px",
                  padding: "20px",
                  minHeight: "120px",
                  border: "1px solid #e9ecef",
                  transition: "transform 0.3s ease",
                }}
              >
                <div style={{ position: "relative", width: "140px", height: "70px" }}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
