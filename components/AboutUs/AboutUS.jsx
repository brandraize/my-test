"use client";

import React, { useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaBullhorn,
  FaPaintBrush,
  FaServer,
  FaDoorOpen,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";
import { GiSteelDoor } from "react-icons/gi";
import { MdOutlineSpeed, MdOutlinePrecisionManufacturing } from "react-icons/md";
import { RiWindow2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import styles from "./aboutus.module.css";

export default function AboutUs({ params }) {
  const resolvedParams = use(params);
  const currentLang = resolvedParams?.lang || "en";
  const router = useRouter();

  const starCanvasHero = useRef(null);
  const starCanvasStory = useRef(null);
  const starCanvasServices = useRef(null);

  // Starfield Animation
  const useStarfield = (canvasRef) => {
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      let width = (canvas.width = window.innerWidth);
      let height = (canvas.height = window.innerHeight);

      const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", resize);

      const stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      }));

      function draw() {
        ctx.fillStyle = "#001233";
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = "#fff";
        stars.forEach((s) => {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fill();

          s.x += s.dx;
          s.y += s.dy;
          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;
        });

        requestAnimationFrame(draw);
      }
      draw();

      return () => window.removeEventListener("resize", resize);
    }, []);
  };

  useStarfield(starCanvasHero);
  useStarfield(starCanvasStory);
  useStarfield(starCanvasServices);

  // Translations
  const content = {
    en: {
      heroTitle: "About ORVEXCO",
      heroSubtitle: "Engineering Strength — Building the Future with Iron, Aluminum, and Solar Energy.",
      heroExtra: "Orvexco is a multidisciplinary engineering and software solutions company that operates across industrial and digital sectors. With a strong foundation in innovation and reliability, we specialize in delivering end-to-end engineering, construction, IT, and digital transformation services.",
      history: "Team Orvexco was established in the USA in 2009 as CIL, expanded to Kuwait in 2010 (officially registered in 2024), and further strengthened its presence in Saudi Arabia in 2025. With a strong engineering foundation and years of technical expertise, Orvexco has built a solid reputation for delivering innovative and reliable solutions in the construction, architectural, and digital sectors. Under the leadership of a new generation of engineers, Orvexco continues to evolve — focusing on modernization, sustainability, and excellence. Our mission is simple — to engineer progress, build trust, and empower clients with reliable technology and sustainable infrastructure.",
      servicesTitle: "Our Expertise",
      storyHeading: "Our Journey",
      buttons: {
        viewDetails: "View Details",
      },
    },
    ar: {
      heroTitle: "عن أورفكسو",
      heroSubtitle: "قوة الهندسة — نبني المستقبل من الحديد والألمنيوم والطاقة الشمسية.",
      heroExtra: "أورفكسو هي شركة متعددة التخصصات في مجالات الهندسة والبرمجيات، تعمل في القطاعات الصناعية والرقمية. بفضل أساسها القوي من الابتكار والموثوقية، تتخصص أورفكسو في تقديم خدمات متكاملة في الهندسة والبناء والتحول الرقمي.",
      history: "تأسس فريق أورفكسو في الولايات المتحدة الأمريكية عام 2009 باسم CIL، وتوسع إلى الكويت في عام 2010 (وسُجل رسميًا في عام 2024)، وعزز وجوده في المملكة العربية السعودية في عام 2025. بفضل خبراتها الهندسية القوية وسنوات من الكفاءة التقنية، بنت أورفكسو سمعة راسخة في تقديم حلول مبتكرة وموثوقة في مجالات البناء والهندسة المعمارية والخدمات الرقمية. تحت قيادة الجيل الجديد من المهندسين، تواصل أورفكسو التطور والتركيز على التحديث والاستدامة والتميز. مهمتنا بسيطة — هندسة التقدم، وبناء الثقة، وتمكين العملاء من خلال التكنولوجيا الموثوقة والبنية التحتية المستدامة.",
      servicesTitle: "مجالات خبرتنا",
      storyHeading: "رحلتنا",
      buttons: {
        viewDetails: "عرض التفاصيل",
      },
    },
  };

  const t = content[currentLang];

  const services = [
    {
      image: "/fire-door.gif",
      title: { en: "Fire Rated Doors", ar: "الأبواب المقاومة للحريق" },
      text: {
        en: "Certified fire-rated steel, wood, and glass doors designed for safety and performance.",
        ar: "أبواب فولاذية وخشبية وزجاجية مقاومة للحريق معتمدة للأمان والأداء.",
      },
      link: `/${currentLang}/service/firedoors`,
      icon: <FaDoorOpen size={40} color="#fff" />,
    },
    {
      image: "/services/fabric-door.gif",
      title: { en: "High Speed Fabric Doors", ar: "الأبواب القماشية عالية السرعة" },
      text: {
        en: "Fast and reliable fabric doors ideal for industrial environments requiring efficiency.",
        ar: "أبواب سريعة وموثوقة مناسبة للبيئات الصناعية التي تتطلب الكفاءة.",
      },
      link: `/${currentLang}/service/highspeed`,
      icon: <MdOutlineSpeed size={40} color="#fff" />,
    },
    {
      image: "/services/garage-door.gif",
      title: { en: "Garage Doors", ar: "أبواب الجراج" },
      text: {
        en: "Secure, customizable garage doors suitable for all property types.",
        ar: "أبواب آمنة وقابلة للتخصيص مناسبة لجميع أنواع الممتلكات.",
      },
      link: `/${currentLang}/service/garage`,
      icon: <FaTools size={40} color="#fff" />,
    },
    {
      image: "/services/rolling-shutter.gif",
      title: { en: "Rolling Shutter Doors", ar: "أبواب الدحرجة المقاومة للحريق" },
      text: {
        en: "Durable and fire-rated rolling shutters for industrial and commercial facilities.",
        ar: "أبواب دحرجة مقاومة للحريق ومتينة للاستخدام الصناعي والتجاري.",
      },
      link: `/${currentLang}/service/rolling`,
      icon: <GiSteelDoor size={40} color="#fff" />,
    },
    {
      image: "/services/bullet-door.gif",
      title: { en: "Bullet & Blast Resistant Doors", ar: "الأبواب المقاومة للرصاص والانفجارات" },
      text: {
        en: "High-security ballistic and blast-resistant doors providing maximum protection.",
        ar: "أبواب عالية الأمان توفر أقصى درجات الحماية من الرصاص والانفجارات.",
      },
      link: `/${currentLang}/service/bullet`,
      icon: <FaShieldAlt size={40} color="#fff" />,
    },
    {
      image: "/services/steel-fabrication.gif",
      title: { en: "Structural Steel Fabrication", ar: "تصنيع الهياكل الفولاذية" },
      text: {
        en: "Precision fabrication and installation of high-quality structural steel.",
        ar: "تصنيع وتركيب دقيق لهياكل فولاذية عالية الجودة.",
      },
      link: `/${currentLang}/service/steel`,
      icon: <MdOutlinePrecisionManufacturing size={40} color="#fff" />,
    },
    {
      image: "/services/windows.gif",
      title: { en: "Aluminum & FRP Windows", ar: "نوافذ الألومنيوم والفايبرجلاس" },
      text: {
        en: "Weatherproof, thermally efficient windows for commercial, residential, and industrial buildings.",
        ar: "نوافذ مقاومة للعوامل الجوية وفعالة حرارياً للمباني التجارية والسكنية والصناعية.",
      },
      link: `/${currentLang}/service/windows`,
      icon: <RiWindow2Line size={40} color="#fff" />,
    },
  ];

  return (
    <div className={styles.container}>
      {/* ⭐ Hero Section */}
      <section className={styles.heroSection}>
        <canvas ref={starCanvasHero} className={styles.heroCanvas} />
        <motion.div className={styles.heroContent}>
          <motion.h1 className={styles.heroTitle}>{t.heroTitle}</motion.h1>
          <motion.p className={styles.heroSubtitle}>{t.heroSubtitle}</motion.p>
          <motion.p className={styles.heroExtra}>{t.heroExtra}</motion.p>
        </motion.div>
      </section>

      {/* 🧬 Story Section */}
      <section className={styles.storySection}>
        <canvas ref={starCanvasStory} className={styles.storyCanvas} />
        <div
          className={styles.storyWrapper}
          style={{
            flexDirection: currentLang === "ar" ? "row-reverse" : "row",
          }}
        >
          <motion.div className={styles.storyText}>
            <h2 className={styles.storyHeading}>{t.storyHeading}</h2>
            <p className={styles.storyParagraph}>{t.history}</p>
          </motion.div>
          <motion.div className={styles.storyImage}>
            <img src="/bg.webp" alt="Our Story" />
          </motion.div>
        </div>
      </section>

      {/* 🧩 Services Section */}
      <section className={styles.servicesSection}>
        <canvas ref={starCanvasServices} className={styles.storyCanvas} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 className={styles.servicesTitle}>{t.servicesTitle}</h2>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title[currentLang]}</h3>
                <p className={styles.serviceText}>{s.text[currentLang]}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.serviceButton}
                  onClick={() => router.push(s.link)}
                >
                  {t.buttons.viewDetails}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}