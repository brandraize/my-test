"use client";
import { useState, useRef, useEffect } from "react";
import { LucideCpu, LucideDatabase, LucideGlobe, LucideBarChart2 } from "lucide-react";

// 🌌 Particle Canvas Component
function ParticleCanvas({ style }) {
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

    const particles = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random(),
      fade: Math.random() * 0.02 + 0.005,
    }));

    function draw() {
      ctx.fillStyle = "#001233"; // background behind particles
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.opacity += p.fade;
        if (p.opacity > 1 || p.opacity < 0) p.fade *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#e0f7ff";
        ctx.fill();
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
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

export default function WhyChooseUs({ lang }) {
  const [hovered, setHovered] = useState(null);

 const translations = {
  en: {
    title: "Why Choose ORVEXCO?",
    description:
      "At ORVEXCO, we deliver engineering, construction, and digital solutions that combine innovation, quality, and reliability. Our mission is to build the future through strength, precision, and technology.",
    features: [
      {
        title: "Engineering Excellence",
        description:
          "We bring decades of technical expertise in steel fabrication, construction, and industrial projects.",
      },
      {
        title: "Innovative & Sustainable",
        description:
          "Our designs and systems focus on efficiency, sustainability, and long-term performance.",
      },
      {
        title: "Comprehensive Services",
        description:
          "From industrial engineering to IT and digital transformation, we provide end-to-end project solutions.",
      },
      {
        title: "Trusted Across Regions",
        description:
          "With operations in the USA, Kuwait, and Saudi Arabia, ORVEXCO has earned the trust of global partners.",
      },
    ],
  },

  ar: {
    title: "لماذا تختار أورفكسو؟",
    description:
      "في أورفكسو، نقدم حلولًا هندسية وإنشائية ورقمية تجمع بين الابتكار والجودة والموثوقية. مهمتنا هي بناء المستقبل من خلال القوة والدقة والتكنولوجيا.",
    features: [
      {
        title: "التميز الهندسي",
        description:
          "نمتلك خبرة هندسية تمتد لعقود في مجال تصنيع الفولاذ والبناء والمشاريع الصناعية.",
      },
      {
        title: "ابتكار واستدامة",
        description:
          "تركز تصاميمنا وأنظمتنا على الكفاءة والاستدامة والأداء طويل الأمد.",
      },
      {
        title: "خدمات شاملة",
        description:
          "من الهندسة الصناعية إلى تقنية المعلومات والتحول الرقمي، نقدم حلول مشاريع متكاملة من البداية إلى النهاية.",
      },
      {
        title: "موثوقون عبر المناطق",
        description:
          "بوجودنا في الولايات المتحدة والكويت والمملكة العربية السعودية، اكتسبت أورفكسو ثقة الشركاء العالميين.",
      },
    ],
  },
};


  const t = translations[lang] || translations.en;

  const features = [
    { icon: <LucideCpu size={60} color="#3B82F6" />, ...t.features[0] },
    { icon: <LucideDatabase size={60} color="#3B82F6" />, ...t.features[1] },
    { icon: <LucideGlobe size={60} color="#3B82F6" />, ...t.features[2] },
    { icon: <LucideBarChart2 size={60} color="#3B82F6" />, ...t.features[3] },
  ];

  return (
    <section
      className="position-relative py-5"
      style={{
     
        direction: lang === "ar" ? "rtl" : "ltr",
        textAlign: lang === "ar" ? "right" : "left",
        minHeight: "70vh",
       color:"text-white",

      }}
    >
      {/* Particle Canvas */}
      <ParticleCanvas />

      {/* Section Content */}
      <div className="position-relative " style={{ zIndex: 1}} >
        {/* Section Header */}
        <div className="d-flex flex-column align-items-center text-white text-center mb-5">
          <div className="fs-2 mb-3" style={{ fontWeight: 600 }}>
            {t.title}
          </div>
          <p
            className="w-md-50 text-center text-white"
            style={{ fontSize: "clamp(16px, 2vw, 18px)" }}
          >
            {t.description}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row g-4 p-5 ">
          {features.map((f, idx) => (
            <div className="col-12 col-md-6 col-lg-3 " key={idx}>
              <div
                className="card text-center "
                style={{
                  background: "rgba(255, 255, 255, 0.05)",       // semi-transparent for glass effect
    backdropFilter: "blur(10px)",                 // blur background
    WebkitBackdropFilter: "blur(10px)",           // Safari support
    border: "1px solid rgba(255,255,255,0.2)",   // subtle border
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",    // soft shadow
    cursor: "pointer",
    overflow: "hidden",
    color: "white",
                }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={{ padding:"15px" }}>{f.icon}</div>
                <h5 className="mb-3 text-white" style={{ fontWeight: 600 }}>
                  {f.title}
                </h5>
                {hovered === idx && <p className="text-white mt-2">{f.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
