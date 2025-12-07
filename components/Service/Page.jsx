"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaTools, FaDoorOpen, FaShieldAlt, FaIndustry } from "react-icons/fa";
import { GiSteelDoor } from "react-icons/gi";
import { MdOutlineSpeed, MdOutlinePrecisionManufacturing } from "react-icons/md";
import Skills from "@/components/Skills/Skills";

export default function Page({ params }) {
  const { lang } = React.use(params); // Get lang from URL: /en/page or /ar/page

  const translations = {
    en: {
      heroTitle: "Engineering Strength, Building the Future",
      heroDesc:
        "Team Orvexco was established in the USA in 2009 as CIL, expanded to Kuwait in 2010, and officially registered in 2024. The company further strengthened its presence in Saudi Arabia in 2025, delivering innovative and reliable engineering solutions across the construction and architectural sectors.",
      explore: "Explore More",
      learnMore: "Learn More",
      chooseUsTitle: "Why Choose Orvexco ?",
      chooseUsPoints: [
        "Creative & Strategic",
        "Multi-Industry Expertise",
        "Bilingual & Global Reach",
        "Results-Driven",
      ],
      servicesTitle: "Our Core Services",
      services: [
        {
          title: "Fire Rated Doors (Steel/Wood/Glass)",
          description:
            "Certified fire-rated doors designed for safety and durability in commercial and industrial applications.",
          icon: <FaDoorOpen size={40} color="#fff" />,
        },
        {
          title: "High Speed Fabric Doors",
          description:
            "Fast, reliable, and durable fabric doors ideal for industrial environments requiring efficient access.",
          icon: <MdOutlineSpeed size={40} color="#fff" />,
        },
        {
          title: "Garage Doors",
          description:
            "Strong, secure, and customizable garage doors for residential, commercial, and industrial spaces.",
          icon: <FaTools size={40} color="#fff" />,
        },
        {
          title: "Rolling Shutter Doors",
          description:
            "Fire-rated rolling shutters offering safety and performance for industrial and commercial use.",
          icon: <GiSteelDoor size={40} color="#fff" />,
        },
        {
          title: "Bullet & Blast Resistant Doors",
          description:
            "Advanced ballistic and blast-resistant doors providing maximum protection and reliability.",
          icon: <FaShieldAlt size={40} color="#fff" />,
        },
        {
          title: "Structural Steel Fabrication",
          description:
            "Precision fabrication and installation of high-quality structural steel for all industrial projects.",
          icon: <MdOutlinePrecisionManufacturing size={40} color="#fff" />,
        },
      ],
      bottomTitle: "Powering Businesses with the Best Management Systems",
      bottomDesc:
        "Streamline your operations, boost efficiency, and stay ahead with our all-in-one business management solutions — tailored for your success.",
      highlights: ["The latest global technology", "A team of certified engineers"],
    },

    ar: {
      heroTitle: "قوة الهندسة، نبني المستقبل",
      heroDesc:
        "تأسست شركة أورفكسو في الولايات المتحدة الأمريكية عام 2009 باسم CIL، وتوسعت إلى الكويت في عام 2010، وسُجلت رسميًا في عام 2024. عززت الشركة وجودها في المملكة العربية السعودية عام 2025، من خلال تقديم حلول هندسية مبتكرة وموثوقة في قطاعات البناء والهندسة المعمارية.",
      explore: "استكشف المزيد",
      learnMore: "اعرف المزيد",
      chooseUsTitle: "لماذا تختار Orvexco ",
      chooseUsPoints: [
        "إبداع واستراتيجية",
        "خبرة متعددة الصناعات",
        "انتشار عالمي ثنائي اللغة",
        "النتائج أولاً",
      ],
      servicesTitle: "خدماتنا الأساسية",
      services: [
        {
          title: "الأبواب المقاومة للحريق (فولاذ/خشب/زجاج)",
          description:
            "أبواب مقاومة للحريق معتمدة مصممة للسلامة والمتانة في التطبيقات التجارية والصناعية.",
          icon: <FaDoorOpen size={40} color="#fff" />,
        },
        {
          title: "الأبواب القماشية عالية السرعة",
          description:
            "أبواب قماشية سريعة وموثوقة ومتينة مثالية للبيئات الصناعية التي تتطلب وصولاً فعالاً.",
          icon: <MdOutlineSpeed size={40} color="#fff" />,
        },
        {
          title: "أبواب الجراج",
          description:
            "أبواب قوية وآمنة وقابلة للتخصيص للمساحات السكنية والتجارية والصناعية.",
          icon: <FaTools size={40} color="#fff" />,
        },
        {
          title: "الأبواب الدوارة المقاومة للحريق",
          description:
            "أبواب دوارة مقاومة للحريق توفر الأمان والأداء للاستخدام الصناعي والتجاري.",
          icon: <GiSteelDoor size={40} color="#fff" />,
        },
        {
          title: "الأبواب المقاومة للرصاص والانفجارات",
          description:
            "أبواب متقدمة مقاومة للرصاص والانفجارات توفر أقصى درجات الحماية والموثوقية.",
          icon: <FaShieldAlt size={40} color="#fff" />,
        },
        {
          title: "تصنيع الهياكل الفولاذية",
          description:
            "تصنيع وتركيب دقيق لهياكل فولاذية عالية الجودة لجميع المشاريع الصناعية.",
          icon: <MdOutlinePrecisionManufacturing size={40} color="#fff" />,
        },
      ],
      bottomTitle: "تمكين الأعمال بأفضل أنظمة الإدارة",
      bottomDesc:
        "قم بتبسيط عملياتك وزيادة الكفاءة والبقاء في الصدارة باستخدام حلول الإدارة المتكاملة المصممة خصيصًا لنجاحك.",
      highlights: ["أحدث التقنيات العالمية", "فريق من المهندسين المعتمدين"],
    },
  };

  const t = translations[lang];
  const canvasRef = useRef(null);

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

    const particles = [];
    for (let i = 0; i < 180; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
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

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      className={`position-relative overflow-hidden ${
        lang === "ar" ? "text-end" : "text-start"
      }`}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <div className="position-relative">
        <video
          autoPlay
          muted
          loop
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: 0 }}
        >
          <source src="/particles.mp4" type="video/mp4" />
        </video>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1 }}
        ></div>

        <div
          className="d-flex flex-column justify-content-center align-items-center text-center text-white"
          style={{
            zIndex: 2,
            position: "relative",
            minHeight: "90vh",
            padding: "6rem 1rem",
          }}
        >
          <motion.h1
            className="display-3 fw-bold"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {t.heroTitle}
          </motion.h1>
          <motion.p
            className="lead mt-3 fs-4"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ maxWidth: "900px" }}
          >
            {t.heroDesc}
          </motion.p>
          <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}>
            <Link href="#" className="btn btn-primary btn-lg mt-4">
              {t.explore}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container text-center py-5">
        <h2 className="fw-bold text-primary mb-4">{t.chooseUsTitle}</h2>
        <ul className="list-unstyled fs-5">
          {t.chooseUsPoints.map((point, index) => (
            <motion.li key={index} initial="hidden" whileInView="visible" variants={fadeUp}>
              ✅ {point}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div className="position-relative" style={{ backgroundColor: "#0d1f4c" }}>
        <canvas ref={canvasRef} className="position-absolute top-0 start-0 w-100 h-100" />
        <div className="container position-relative py-5 text-white" style={{ zIndex: 1 }}>
          <h2 className="text-center mb-5 fw-bold">{t.servicesTitle}</h2>
          <div className="row">
            {t.services.map((service, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <motion.div
                  className="card h-100 p-4 text-center border-0 rounded-4 shadow-lg service-card"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#fff" }}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                >
                  <div
                    className="mb-3 p-4 rounded-circle mx-auto d-flex justify-content-center align-items-center"
                    style={{
                      background: "linear-gradient(135deg, #ffc107, #ff9800)",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h5 className="fw-bold">{service.title}</h5>
                  <p>{service.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container text-center py-5">
        <h2 className="fw-bold mb-3 text-primary">{t.bottomTitle}</h2>
        <p className="fs-5 mb-4">{t.bottomDesc}</p>
        <ul className="list-unstyled fs-5">
          {t.highlights.map((h, i) => (
            <li key={i}>⚙️ {h}</li>
          ))}
        </ul>
      </div>

      <Skills lang={lang} />

      <style jsx>{`
        .service-card:hover {
          transform: translateY(-10px) scale(1.03);
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
