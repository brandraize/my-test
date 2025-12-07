"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

const translations = {
  en: {
    title: "Aluminum & Fiberglass (FRP) Windows | YouMats",
    description: "Aluminum & Fiberglass Windows – Weatherproof, efficient, and durable window solutions for all building types.",
    hero: {
      title: "Aluminum & Fiberglass Windows",
      subtitle: "Engineered for Efficiency, Built for Durability"
    },
    about: {
      title: "About Aluminum & Fiberglass Windows",
      description: "Our Aluminum and Fiberglass Reinforced Plastic (FRP) windows are available in fixed, sliding, projected, or casement styles as per architectural drawings. These high-performance windows feature manual or motorized operation (optional for large units) and are designed for commercial, residential, and industrial buildings. Offering exceptional weatherproofing, thermal efficiency, sound reduction, and corrosion resistance, they provide optimal performance in diverse environmental conditions."
    },
    types: {
      title: "Window Types & Styles",
      fixed: {
        title: "Fixed Windows",
        description: "Non-operable windows designed for maximum energy efficiency and unobstructed views, perfect for areas where ventilation is not required."
      },
      sliding: {
        title: "Sliding Windows",
        description: "Horizontal sliding operation for easy use and space efficiency, ideal for modern residential and commercial applications."
      },
      projected: {
        title: "Projected Windows",
        description: "Hinged windows that open outward, providing excellent ventilation while maintaining security and weather protection."
      },
      casement: {
        title: "Casement Windows",
        description: "Side-hinged windows that open fully, offering maximum ventilation and easy cleaning access."
      }
    },
    specifications: {
      title: "Technical Specifications & Features",
      items: [
        "Window Types: Fixed, sliding, projected, or casement windows (as per architectural drawings)",
        "Operation: Manual or motorized (optional for large units)",
        "Applications: Commercial, residential, and industrial buildings",
        "Weather Performance: Excellent weatherproofing and water resistance",
        "Thermal Efficiency: High insulation properties for energy savings",
        "Acoustic Performance: Superior sound reduction capabilities",
        "Durability: Corrosion-resistant materials for long lifespan",
        "Materials: High-grade Aluminum and Fiberglass Reinforced Plastic (FRP)",
        "Customization: Available in various colors, finishes, and sizes"
      ]
    },
    gallery: {
      title: "Project Gallery"
    },
    whyChoose: {
      title: "Why Choose Our Windows",
      description: "Our Aluminum & Fiberglass Windows combine advanced engineering with premium materials to deliver unmatched performance. Designed to meet international standards, these windows offer exceptional thermal insulation, acoustic comfort, and weather resistance while maintaining aesthetic appeal for any architectural style in commercial, residential, or industrial settings."
    }
  },
  ar: {
    title: "نوافذ الألومنيوم والفايبرجلاس | YouMats",
    description: "نوافذ الألومنيوم والفايبرجلاس – حلول نوافذ مقاومة للعوامل الجوية وفعالة ومتينة لجميع أنواع المباني.",
    hero: {
      title: "نوافذ الألومنيوم والفايبرجلاس",
      subtitle: "مصممة للكفاءة، مبنية للمتانة"
    },
    about: {
      title: "عن نوافذ الألومنيوم والفايبرجلاس",
      description: "نوافذ الألومنيوم والفايبرجلاس (FRP) لدينا متوفرة بأنماط ثابتة ومنزلقة ومعلقة ومفتوحة وفقاً للرسومات المعمارية. تتميز هذه النوافذ عالية الأداء بتشغيل يدوي أو ميكانيكي (اختياري للوحدات الكبيرة) ومصممة للمباني التجارية والسكنية والصناعية. تقدم مقاومة استثنائية للعوامل الجوية وكفاءة حرارية وتقليل للضجيج ومقاومة للتآكل، مما يوفر أداءً optimal في ظروف بيئية متنوعة."
    },
    types: {
      title: "أنواع وأنماط النوافذ",
      fixed: {
        title: "نوافذ ثابتة",
        description: "نوافذ غير قابلة للفتح مصممة لأقصى كفاءة طاقة ومناظر غير مقيدة، مثالية للمناطق التي لا تتطلب تهوية."
      },
      sliding: {
        title: "نوافذ منزلقة",
        description: "تشغيل انزلالي أفقي لسهولة الاستخدام وكفاءة المساحة، مثالي للتطبيقات السكنية والتجارية الحديثة."
      },
      projected: {
        title: "نوافذ معلقة",
        description: "نوافذ مفصلية تفتح للخارج، توفر تهوية ممتازة مع الحفاظ على الأمان والحماية من العوامل الجوية."
      },
      casement: {
        title: "نوافذ مفتوحة",
        description: "نوافذ مفصلية جانبية تفتح بالكامل، تقدم أقصى تهوية ووصول سهل للتنظيف."
      }
    },
    specifications: {
      title: "المواصفات الفنية والميزات",
      items: [
        "أنواع النوافذ: نوافذ ثابتة، منزلقة، معلقة، أو مفتوحة (حسب الرسومات المعمارية)",
        "التشغيل: يدوي أو ميكانيكي (اختياري للوحدات الكبيرة)",
        "التطبيقات: المباني التجارية والسكنية والصناعية",
        "الأداء الجوي: مقاومة ممتازة للعوامل الجوية والماء",
        "الكفاءة الحرارية: خصائص عزل عالية لتوفير الطاقة",
        "الأداء الصوتي: قدرات متفوقة في تقليل الضجيج",
        "المتانة: مواد مقاومة للتآكل لعمر افتراضي طويل",
        "المواد: ألومنيوم عالي الجودة وفايبرجلاس مقوى (FRP)",
        "التخصيص: متوفرة بألوان وتشطيبات وأحجام متنوعة"
      ]
    },
    gallery: {
      title: "معرض المشاريع"
    },
    whyChoose: {
      title: "لماذا تختار نوافذنا",
      description: "تجمع نوافذ الألومنيوم والفايبرجلاس لدينا بين الهندسة المتطورة والمواد الممتازة لتقديم أداء لا مثيل له. مصممة لتلبية المعايير الدولية، تقدم هذه النوافذ عزل حراري استثنائي وراحة صوتية ومقاومة للعوامل الجوية مع الحفاظ على الجاذبية الجمالية لأي طراز معماري في الأماكن التجارية أو السكنية أو الصناعية."
    }
  }
};

export default function AluminumWindowsPage({ params }) {
  // Extract lang from params using React.use() for Next.js 15
  const unwrappedParams = React.use(params);
  const { lang } = unwrappedParams;
  const t = translations[lang] || translations.en;
  const isRTL = lang === 'ar';

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        {isRTL && (
          <style>
            {`
              body { direction: rtl; text-align: right; }
              .start-50 { right: 50% !important; left: auto !important; }
              .translate-middle { transform: translate(50%, -50%) !important; }
              .text-start { text-align: right !important; }
              .text-end { text-align: left !important; }
            `}
          </style>
        )}
      </Head>

      {/* 🔹 Hero Section */}
      <section className="position-relative w-100" style={{ height: "85vh" }}>
        <Image
          src="/services/hero8.jpg"
          alt={t.hero.title}
          fill
          className="object-fit-cover"
          priority
        />
        <div className={`position-absolute top-50 start-50 translate-middle text-center text-white bg-dark bg-opacity-50 p-4 rounded-3 ${isRTL ? 'rtl-text' : ''}`}>
          <h1 className="display-4 fw-bold">{t.hero.title}</h1>
          <p className="lead mb-0">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* 🔹 Intro Section */}
      <section className="container py-5">
        <div className={`text-center mb-4 ${isRTL ? 'rtl-text' : ''}`}>
          <h2 className="fw-bold text-dark">{t.about.title}</h2>
          <div className="mx-auto mb-3" style={{ width: "100px", height: "3px", background: "#c89f4f" }}></div>
          <p className="text-muted fs-5">{t.about.description}</p>
        </div>
      </section>

      {/* 🔹 Types Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-dark mb-4">{t.types.title}</h2>
          <div className="mx-auto mb-4" style={{ width: "100px", height: "3px", background: "#c89f4f" }}></div>

          <div className="row g-4 text-center">
            {/* Fixed Windows */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Alum1.jpg"
                  alt={t.types.fixed.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.fixed.title}</h5>
                <p className="text-muted">{t.types.fixed.description}</p>
              </div>
            </div>

            {/* Sliding Windows */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Alum2.jpg"
                  alt={t.types.sliding.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.sliding.title}</h5>
                <p className="text-muted">{t.types.sliding.description}</p>
              </div>
            </div>

            {/* Projected Windows */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Alum3.jpg"
                  alt={t.types.projected.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.projected.title}</h5>
                <p className="text-muted">{t.types.projected.description}</p>
              </div>
            </div>

            {/* Casement Windows */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Alum4.jpg"
                  alt={t.types.casement.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.casement.title}</h5>
                <p className="text-muted">{t.types.casement.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Specifications Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">{t.specifications.title}</h2>
            <div className="mx-auto mb-3" style={{ width: "100px", height: "3px", background: "#c89f4f" }}></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm p-4">
                <ul className="list-unstyled">
                  {t.specifications.items.map((item, index) => (
                    <li key={index} className="mb-3 d-flex align-items-start">
                      <span className="text-warning me-3 mt-1">•</span>
                      <span className="text-muted fs-6">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Gallery Section */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold text-dark mb-4">{t.gallery.title}</h2>
          <div className="mx-auto mb-4" style={{ width: "100px", height: "3px", background: "#c89f4f" }}></div>

          <div className="row g-4 justify-content-center">
            {[
              "/services/Alum1.jpg",
              "/services/Alum2.jpg",
              "/services/Alum3.jpg",
              "/services/Alum4.jpg",
              "/services/Alum5.jpg",
              "/services/Alum6.jpg",
            ].map((src, index) => (
              <div className="col-6 col-md-4 col-lg-4" key={index}>
                <div className="card border-0 shadow-sm" style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src={src}
                    alt={`Aluminum & FRP Window ${index + 1}`}
                    width={400}
                    height={250}
                    className="img-fluid rounded object-fit-cover w-100 h-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Section */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold text-dark">{t.whyChoose.title}</h2>
        <div className="mx-auto mb-3" style={{ width: "100px", height: "3px", background: "#c89f4f" }}></div>
        <p className="text-muted fs-5">{t.whyChoose.description}</p>
      </section>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

      <style jsx>{`
        .rtl-text {
          direction: rtl;
        }
      `}</style>
    </>
  );
}