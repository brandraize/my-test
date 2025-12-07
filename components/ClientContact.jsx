"use client";

import { useEffect, useRef } from "react";
import ContactForm from "@/components/Contact";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// 🌌 Moving Stars Canvas
function StarCanvas({ style }) {
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

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      dy: Math.random() * 0.5 + 0.2,
      opacity: Math.random(),
      fade: Math.random() * 0.02 + 0.005,
    }));

    function draw() {
      ctx.fillStyle = "#001233";
      ctx.fillRect(0, 0, width, height);

      stars.forEach((s) => {
        s.y += s.dy;
        if (s.y > height) {
          s.y = 0;
          s.x = Math.random() * width;
        }

        s.opacity += s.fade;
        if (s.opacity > 1 || s.opacity < 0) s.fade *= -1;

        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
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
      style={{ width: "100%", height: "100%", display: "block", ...style }}
    />
  );
}

// 🌍 Contact Us Client Component
export default function ContactUsClient({ lang }) {
  const isArabic = lang === "ar";

const content = {
  en: {
    heroTitle: "Get in Touch",
    heroSubtitle: `We’d love to hear from you — whether it’s a question, feedback, or just to say hello.
Our team is dedicated to supporting you every step of the way.
From quick answers to detailed guidance, we’re here for you.
Let’s collaborate and bring your ideas to life.
Reach out today and start building something extraordinary with us!`,
    contactInfo: [
      {
        icon: <FaMapMarkerAlt size={28} />,
        label: "Address",
        value: "Jubail Industrial City, King Faisal Bin Abdulaziz Street, Saudi Arabia",
        link: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3554.474482733462!2d49.65254067544304!3d27.01516887658635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDAwJzU0LjYiTiA0OcKwMzknMTguNCJF!5e0!3m2!1sen!2ssa!4v1762516140061!5m2!1sen!2ssa",
      },
      {
        icon: <FaPhoneAlt size={28} />,
        label: "Phone",
        value: "+966557828312",
        link: "tel:+966557828312",
      },
      {
        icon: <FaEnvelope size={28} />,
        label: "Email",
        value: "abc@orvexco.com",
        link: "mailto:brandraize1@gmail.com",
      },
    ],
    formTitle: "Send Us a Message",
    formSubtitle: "We usually reply within 24 hours. Let’s build something amazing together!",
  },

  ar: {
    heroTitle: "تواصل معنا",
    heroSubtitle: `يسعدنا سماعك — سواء كان سؤالاً، ملاحظات، أو مجرد تحية.
فريقنا ملتزم بدعمك في كل خطوة على الطريق.
من الردود السريعة إلى الإرشادات التفصيلية، نحن هنا من أجلك.
دعنا نتعاون ونحول أفكارك إلى واقع.
تواصل معنا اليوم وابدأ ببناء شيء رائع معنا!`,
    contactInfo: [
      {
        icon: <FaMapMarkerAlt size={28} />,
        label: "العنوان",
        value: "الجبيل الصناعية، شارع الملك فيصل بن عبدالعزيز، المملكة العربية السعودية",
        link: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3554.474482733462!2d49.65254067544304!3d27.01516887658635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDAwJzU0LjYiTiA0OcKwMzknMTguNCJF!5e0!3m2!1sen!2ssa!4v1762516140061!5m2!1sen!2ssa",
      },
      {
        icon: <FaPhoneAlt size={28} />,
        label: "الهاتف",
        value: "966557828312",
        link: "tel:+966557828312",
      },
      {
        icon: <FaEnvelope size={28} />,
        label: "البريد الإلكتروني",
        value: "abc@orvexco.com",
        link: "mailto:abc@orvexco.com",
      },
    ],
    formTitle: "أرسل لنا رسالة",
    formSubtitle: "نرد عادة خلال 24 ساعة. دعنا نبني شيئًا رائعًا معًا!",
  },
};


  const { heroTitle, heroSubtitle, contactInfo, formTitle, formSubtitle } =
    content[lang] || content.en;
content[lang] || content.ar;
  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      {/* 🌌 Hero */}
      <section
        style={{
          position: "relative",
          height: "calc(115vh - 88px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          color: "#fff",
         
        }}
      >
        <StarCanvas />
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            background: "rgba(0,0,30,0.6)",
           
            borderRadius: "1rem",
            maxWidth: "700px",
            marginTop:"80px",
          }}
        >
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{heroTitle}</h1>
          <p style={{ fontSize: "1.25rem" }}>{heroSubtitle}</p>
        </div>
      </section>

      {/* 📌 Contact Info Section with Canvas Grid */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "4rem 1.5rem",
        }}
      >
        {/* Stars background */}
        <StarCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "auto",
            zIndex: 1,
          }}
        >
          {contactInfo.map((info, i) => (
            <a
              key={i}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: "rgba(255,255,255,0.1)",
                padding: "2rem",
                borderRadius: "12px",
                textAlign: "center",
                color: "#fff",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                backdropFilter: "blur(8px)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>{info.icon}</div>
              <h3 style={{ marginBottom: "0.5rem" }}>{info.label}</h3>
              <p>{info.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* 📬 Why Choose Us + Contact Form */}
      <section
        style={{
          background: "#001233",
          color: "#fff",
          padding: "4rem 1.5rem",
        }}
      >
        
          {/* Why Choose Us card */}
        

          {/* Contact Form card */}
          <div className="mirror-card justify-content-center">
           
           
            <ContactForm lang={lang} />
          </div>
           

          
     

        {/* Styles */}
        <style jsx>{`
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 1100px;
            margin: auto;
          }

          @media (min-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr 1fr;
              align-items: start;
            }
          }

          .mirror-card {
            border-radius: 12px;
          padding:5px
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(12px);
          }
        `}</style>
      </section>
    </div>
  );
}
