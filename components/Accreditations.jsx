"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Accreditations({ lang = "en" }) {
  const logos = [
    { id: 1, src: "/logos/logo1.webp", alt: "Logo 1" },
    { id: 2, src: "/logos/logo2.webp", alt: "Logo 2" },
    { id: 3, src: "/logos/logo3.webp", alt: "Logo 3" },
    { id: 4, src: "/logos/logo4.webp", alt: "Logo 4" },
    { id: 5, src: "/logos/logo5.webp", alt: "Logo 5" },
    { id: 6, src: "/logos/logo6.webp", alt: "Logo 6" },
    { id: 7, src: "/logos/logo7.webp", alt: "Logo 7" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
        padding: "60px 20px",
      }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <div
          className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3 mb-4"
          style={{ textAlign: lang === "ar" ? "right" : "left" }}
        >
          <div>
            <h2
              className="fw-bold mb-2"
              style={{ fontSize: "clamp(24px, 4vw, 32px)", color: "#0f5132" }}
            >
              {lang === "ar" ? "الاعتمادات" : "Accreditations"}
            </h2>
            <p className="text-muted mb-0" style={{ maxWidth: "720px" }}>
              {lang === "ar"
                ? "شركاؤنا المعتمدون يضمنون أعلى معايير الجودة والمصداقية."
                : "Our accredited partners ensure the highest standards of quality and credibility."}
            </p>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          loop
          speed={550}
          spaceBetween={16}
          slidesPerView={5}
          breakpoints={{
            1400: { slidesPerView: 6 },
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1.6 },
          }}
          dir={lang === "ar" ? "rtl" : "ltr"}
          aria-label={lang === "ar" ? "شركاؤنا المعتمدون" : "Our Accredited Partners"}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={logo.id}>
              <div
                className="d-flex align-items-center justify-content-center shadow-sm bg-white"
                style={{
                  borderRadius: "16px",
                  padding: "18px",
                  minHeight: "110px",
                  border: "1px solid #e9ecef",
                  height: "100%",
                }}
              >
                <div style={{ position: "relative", width: "120px", height: "60px" }}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(min-width: 1400px) 120px, (min-width: 992px) 100px, (min-width: 768px) 120px, 100px"
                    quality={35}
                    loading={idx < 3 ? "eager" : "lazy"}
                    priority={idx === 0}
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