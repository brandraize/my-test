"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideCode, LucideSmartphone, LucideListChecks } from "lucide-react";
import "./Market.css";

// 🌌 Particle Background Canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#66c2ff"; // particle color
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.lineWidth = 1;

      particles.forEach((p, i) => {
        // Move particles
        p.x += p.dx;
        p.y += p.dy;

        // Bounce edges
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect close particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none", // ✅ ensures it never blocks text interaction or rendering
      }}
    />
  );
}

export default function Market({ lang }) {
  const [activeTab, setActiveTab] = useState(1);

  const translations = {
    en: {
      headerTitle: "About Orvexco",
      headerDesc:
        "Team Orvexco was established in the USA in 2009 as CIL, expanded to Kuwait in 2010 (officially registered in 2024), and further strengthened its presence in Saudi Arabia in 2025. With a strong engineering foundation and years of technical expertise, Team Orvexco has built a solid reputation for delivering innovative and reliable solutions in the construction and architectural sectors.",
      tabs: [
        {
          title: "Mr. Abdul Aziz Al Mhan",
          description:
            "An entrepreneur with strategic vision and experience in the iron, aluminum, and solar energy sectors. He aims to lead high-quality industrial projects that contribute to infrastructure development and enhance the renewable energy sector, while adhering to global standards and best business practices. He focuses on developing innovative solutions that meet market needs and keep pace with industrial advancements.",
        },
        {
          title: "Eng. Chakola",
          description:
            "Has extensive experience of over 40 years in Kuwait’s construction and related industries. He has helped establish turnkey manufacturing centers such as Steel, Door, Joinery, and PU Foam factories. His leadership and expertise made him a trusted consultant providing technological solutions to major industries in Kuwait and the GCC.",
        },
        {
          title: "Our Expertise",
          description:
            "At Team Orvexco, we excel in precision fabrication, delivering high-quality structural steel solutions on time, every time. Our expertise ensures seamless project execution while maintaining exceptional standards. Trust us to bring your vision to life with commitment and excellence.",
        },
      ],
      cta: "Learn more about Orvexco",
    },
    ar: {
      headerTitle: "نبذة عن أورفكسو",
      headerDesc:
        "تأسست شركة أورفكسو في الولايات المتحدة الأمريكية عام 2009 تحت اسم CIL، وتوسعت إلى الكويت في عام 2010 (وسُجلت رسميًا في عام 2024)، كما عززت حضورها في المملكة العربية السعودية في عام 2025. بفضل أسسها الهندسية القوية وخبرتها الفنية الطويلة، بنت أورفكسو سمعة قوية في تقديم حلول مبتكرة وموثوقة في مجالات البناء والهندسة المعمارية.",
      tabs: [
        {
          title: "عبدالعزيز علي المهّان",
          description:
            "رائد أعمال يتمتع برؤية استراتيجية وخبرة عملية في قطاعات الحديد والألمنيوم والطاقة الشمسية. يسعى إلى قيادة مشاريع صناعية عالية الجودة تساهم في تطوير البنية التحتية وتعزيز قطاع الطاقة المتجددة، مع الالتزام بالمعايير العالمية وأفضل الممارسات. يركز على تطوير حلول مبتكرة تلبي احتياجات السوق وتواكب التقدم الصناعي.",
        },
        {
          title: "المهندس تشاكولا",
          description:
            "يمتلك خبرة تمتد لأكثر من 40 عامًا في مجال البناء والصناعات المرتبطة به في الكويت، حيث ساهم في إنشاء مصانع متكاملة مثل مصانع الحديد والأبواب والنجارة والفوم. بفضل قيادته وخبرته، أصبح مستشارًا موثوقًا يقدم الحلول التقنية للشركات الرائدة في الكويت ودول مجلس التعاون الخليجي.",
        },
        {
          title: "خبراتنا",
          description:
            "في أورفكسو، نتميز بالدقة في التصنيع ونقدم حلولًا هيكلية عالية الجودة تُنفّذ في الوقت المحدد. يضمن فريقنا تنفيذ المشاريع بسلاسة مع الحفاظ على أعلى المعايير. ثق بنا لتحقيق رؤيتك بالجودة والالتزام والتميز.",
        },
      ],
      cta: "اكتشف المزيد عن أورفكسو",
    },
  };

  const t = translations[lang] || translations.en; // default to English

  const tabs = [
    { id: 1, icon: <LucideCode className="me-2" />, ...t.tabs[0] },
    { id: 2, icon: <LucideSmartphone className="me-2" />, ...t.tabs[1] },
    { id: 3, icon: <LucideListChecks className="me-2" />, ...t.tabs[2] },
  ];

  return (
    <section
      className="py-5 position-relative"
      style={{
        backgroundColor: "#001233",
        direction: lang === "ar" ? "rtl" : "ltr",
        overflow: "hidden",
      }}
    >
      {/* Particle Canvas */}
      <ParticleCanvas />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3 text-white">{t.headerTitle}</h2>
          <div
            className="mx-auto mb-3 text-white"
            style={{ width: "80px", height: "4px", backgroundColor: "#0d6efd" }}
          ></div>
          <p className="text-white">{t.headerDesc}</p>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-8">
            <AnimatePresence mode="wait">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      className="tab-panel"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="d-flex align-items-center mb-3 flex-wrap">
                        <div className="me-3 fs-2 text-primary">{tab.icon}</div>
                        <h4 className="mb-0">{tab.title}</h4>
                      </div>
                      <p className="mb-0">{tab.description}</p>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-4">
          <a href="/en/about" className="btn btn-primary btn-lg">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
