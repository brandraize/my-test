"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaTools,
  FaDoorOpen,
  FaShieldAlt,
  FaIndustry,
} from "react-icons/fa";
import { GiSteelDoor } from "react-icons/gi";
import { MdOutlineSpeed, MdOutlinePrecisionManufacturing } from "react-icons/md";
import { RiWindow2Line } from "react-icons/ri";
import Skills from "@/components/Skills/Skills";

export default function ServicesPage({ params }) {
  // Fix: Use React.use() to unwrap the Promise
  const { lang } = React.use(params);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  const t = {
    en: {
      heroTitle: "Engineering Strength, Building the Future",
      heroDesc:
        "ORVEXCO delivers certified, durable, and innovative engineering solutions for all industrial and architectural needs.",
      explore: "Explore More",
      servicesTitle: "Our Core Services",
      services: [
        {
          title: "Fire Rated Doors",
          description:
            "Certified fire-rated steel, wood, and glass doors designed for safety and performance.",
          icon: <FaDoorOpen size={40} color="#fff" />,
          link: `/en/service/firedoors`,
        },
        {
          title: "High Speed Fabric Doors",
          description:
            "Fast and reliable fabric doors ideal for industrial environments requiring efficiency.",
          icon: <MdOutlineSpeed size={40} color="#fff" />,
          link: `/en/service/highspeed`,
        },
        {
          title: "Garage Doors",
          description:
            "Secure, customizable garage doors suitable for all property types.",
          icon: <FaTools size={40} color="#fff" />,
          link: `/en/service/garage`,
        },
        {
          title: "Rolling Shutter Doors",
          description:
            "Durable and fire-rated rolling shutters for industrial and commercial facilities.",
          icon: <GiSteelDoor size={40} color="#fff" />,
          link: `/en/service/rolling`,
        },
        {
          title: "Bullet & Blast Resistant Doors",
          description:
            "High-security ballistic and blast-resistant doors providing maximum protection.",
          icon: <FaShieldAlt size={40} color="#fff" />,
          link: `/en/service/bullet`,
        },
        {
          title: "Structural Steel Fabrication",
          description:
            "Precision fabrication and installation of high-quality structural steel.",
          icon: <MdOutlinePrecisionManufacturing size={40} color="#fff" />,
          link: `/en/service/steel`,
        },
        {
          title: "Aluminum & FRP Windows",
          description:
            "Weatherproof, thermally efficient windows for commercial, residential, and industrial buildings.",
          icon: <RiWindow2Line size={40} color="#fff" />,
          link: `/en/service/windows`,
        },
      ],
    },
    ar: {
      heroTitle: "قوة الهندسة، نبني المستقبل",
      heroDesc:
        "تقدم أورفكسو حلولاً هندسية معتمدة ومتينة ومبتكرة لتلبية جميع الاحتياجات الصناعية والمعمارية.",
      explore: "استكشف المزيد",
      servicesTitle: "خدماتنا الأساسية",
      services: [
        {
          title: "الأبواب المقاومة للحريق",
          description:
            "أبواب فولاذية وخشبية وزجاجية مقاومة للحريق معتمدة للأمان والأداء.",
          icon: <FaDoorOpen size={40} color="#fff" />,
          link: `/ar/service/firedoors`,
        },
        {
          title: "الأبواب القماشية عالية السرعة",
          description:
            "أبواب سريعة وموثوقة مناسبة للبيئات الصناعية التي تتطلب الكفاءة.",
          icon: <MdOutlineSpeed size={40} color="#fff" />,
          link: `/ar/service/highspeed`,
        },
        {
          title: "أبواب الجراج",
          description:
            "أبواب آمنة وقابلة للتخصيص مناسبة لجميع أنواع الممتلكات.",
          icon: <FaTools size={40} color="#fff" />,
          link: `/ar/service/garage`,
        },
        {
          title: "أبواب الدحرجة المقاومة للحريق",
          description:
            "أبواب دحرجة مقاومة للحريق ومتينة للاستخدام الصناعي والتجاري.",
          icon: <GiSteelDoor size={40} color="#fff" />,
          link: `/ar/service/rolling`,
        },
        {
          title: "الأبواب المقاومة للرصاص والانفجارات",
          description:
            "أبواب عالية الأمان توفر أقصى درجات الحماية من الرصاص والانفجارات.",
          icon: <FaShieldAlt size={40} color="#fff" />,
          link: `/ar/service/bullet`,
        },
        {
          title: "تصنيع الهياكل الفولاذية",
          description:
            "تصنيع وتركيب دقيق لهياكل فولاذية عالية الجودة.",
          icon: <MdOutlinePrecisionManufacturing size={40} color="#fff" />,
          link: `/ar/service/steel`,
        },
        {
          title: "نوافذ الألومنيوم والفايبرجلاس",
          description:
            "نوافذ مقاومة للعوامل الجوية وفعالة حرارياً للمباني التجارية والسكنية والصناعية.",
          icon: <RiWindow2Line size={40} color="#fff" />,
          link: `/ar/service/windows`,
        },
      ],
    },
  }[lang ?? "en"];

  // 🌌 Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx = -p.dx;
        if (p.y < 0 || p.y > canvas.height) p.dy = -p.dy;
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Video background setup
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.7; // Slow down the video for better effect
    }
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="position-relative overflow-hidden text-white" style={{ background: "#0d1f4c" }}>
      {/* Video Background */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-100 h-100"
          style={{ objectFit: "cover", opacity: 0.15 }}
        >
          <source src="/bg2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            background: "linear-gradient(135deg, rgba(13, 31, 76, 0.2) 0%, rgba(13, 31, 76, 0.08) 100%)",
            zIndex: 1 
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-5 position-relative">
        <canvas ref={canvasRef} className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 1 }}></canvas>
        <div className="position-relative z-10" style={{ zIndex: 2 }}>
          <motion.h1 className="fw-bold display-4 mb-3" initial="hidden" animate="visible" variants={fadeUp}>
            {t.heroTitle}
          </motion.h1>
          <motion.p className="lead mx-auto" style={{ maxWidth: "800px" }} initial="hidden" animate="visible" variants={fadeUp}>
            {t.heroDesc}
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <h2 className="text-center mb-5 fw-bold text-warning">{t.servicesTitle}</h2>
        <div className="row g-4">
          {t.services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <motion.div
                className="card text-center p-4 border-0 rounded-4 shadow-lg"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
              >
                <div className="mb-3">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="mb-3">{service.description}</p>
                <Link href={service.link} className="btn btn-warning fw-bold">
                  {lang === "ar" ? "المزيد" : "View Details"}
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <Skills lang={lang} />

      <style jsx>{`
        .card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 8px 20px rgba(113, 109, 109, 0.3);
          background-color: rgba(255,255,255,0.15) !important;
        }
      `}</style>
    </section>
  );
}