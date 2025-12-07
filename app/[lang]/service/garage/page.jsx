"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

const translations = {
  en: {
    title: "Garage Doors | YouMats",
    description: "Garage Doors – Durable, secure, and versatile solutions for all property types.",
    hero: {
      title: "Garage Doors",
      subtitle: "Engineered for Security, Built for Performance"
    },
    about: {
      title: "About Garage Doors",
      description: "Our garage doors are suitable for commercial, industrial, and residential use, offering versatile solutions for every need. Available in various types including manual, automatic, sectional, and roller shutter designs, these doors are constructed from high-quality galvanized steel or aluminum sheets. Featuring 40–50 mm thick polyurethane foam or polystyrene insulation and optional stainless steel or glass vision panels, they provide excellent durability, security, and thermal efficiency."
    },
    types: {
      title: "Types of Garage Doors",
      sectional: {
        title: "Sectional Garage Door",
        description: "Space-saving design that lifts vertically and rolls into the ceiling, perfect for limited space areas."
      },
      roller: {
        title: "Roller Garage Door",
        description: "Compact rolling mechanism that coils upward, ideal for properties with limited headroom."
      },
      overhead: {
        title: "Overhead Garage Door",
        description: "Traditional design that swings out and up, offering robust security and easy operation."
      }
    },
    specifications: {
      title: "Technical Specifications",
      items: [
        "Construction: Galvanized steel or aluminum sheets",
        "Insulation: Polyurethane foam (PU) or polystyrene, 40–50 mm thick",
        "Vision Panels: Optional stainless steel or glass panels",
        "Applications: Commercial, industrial, and residential use",
        "Operation Types: Manual, automatic, sectional, roller shutter",
        "Security: High-grade locking mechanisms",
        "Customization: Various colors and finishes available"
      ]
    },
    gallery: {
      title: "Gallery"
    },
    whyChoose: {
      title: "Why Choose Our Garage Doors",
      description: "Our Garage Doors are engineered to meet international quality standards, ensuring superior security and long-lasting performance. Available in multiple operation types and customizable features, they seamlessly blend functionality with aesthetic appeal for any property type."
    }
  },
  ar: {
    title: "أبواب الجراج | YouMats",
    description: "أبواب الجراج – حلول متينة وآمنة ومتعددة الاستخدامات لجميع أنواع العقارات.",
    hero: {
      title: "أبواب الجراج",
      subtitle: "مصممة للأمان، مبنية للأداء"
    },
    about: {
      title: "عن أبواب الجراج",
      description: "أبواب الجراج لدينا مناسبة للاستخدام التجاري والصناعي والسكني، وتقدم حلولاً متعددة الاستخدامات لكل الاحتياجات. متوفرة بأنواع مختلفة تشمل التصاميم اليدوية والأوتوماتيكية والقسمية والدحرجة، هذه الأبواب مصنوعة من صفائح الفولاذ المجلفن أو الألومنيوم عالي الجودة. تتميز بعزل رغوة البولي يوريثين أو البوليسترين بسمك 40-50 ملم ولوحات رؤية اختيارية من الفولاذ المقاوم للصدأ أو الزجاج، توفر متانة ممتازة وأماناً وكفاءة حرارية."
    },
    types: {
      title: "أنواع أبواب الجراج",
      sectional: {
        title: "باب جراج قطاعي",
        description: "تصميم موفر للمساحة يرفع عمودياً ويدحرج إلى السقف، مثالي للمناطق ذات المساحة المحدودة."
      },
      roller: {
        title: "باب جراج دوار",
        description: "آلية دحرجة مدمجة تلتف لأعلى، مثالي للعقارات ذات المساحة الرأسية المحدودة."
      },
      overhead: {
        title: "باب جراج علوي",
        description: "تصميم تقليدي يتأرجح للخارج ولأعلى، يقدم أماناً قوياً وتشغيلاً سهلاً."
      }
    },
    specifications: {
      title: "المواصفات الفنية",
      items: [
        "الهيكل: صفائح فولاذ مجلفن أو ألومنيوم",
        "العزل: رغوة البولي يوريثين أو البوليسترين، سمك 40-50 ملم",
        "لوحات الرؤية: لوحات اختيارية من الفولاذ المقاوم للصدأ أو الزجاج",
        "التطبيقات: الاستخدام التجاري والصناعي والسكني",
        "أنواع التشغيل: يدوي، أوتوماتيكي، قطاعي، دحرجة",
        "الأمان: آليات قفل عالية الجودة",
        "التخصيص: ألوان وتشطيبات متنوعة متاحة"
      ]
    },
    gallery: {
      title: "معرض الصور"
    },
    whyChoose: {
      title: "لماذا تختار أبواب جراجنا",
      description: "تم تصميم أبواب الجراج لدينا لتلبية معايير الجودة الدولية، مما يضمن أماناً فائقاً وأداءً طويل الأمد. متوفرة بأنواع تشغيل متعددة وميزات قابلة للتخصيص، تدمج بسلاسة بين الوظيفة والجاذبية الجمالية لأي نوع من العقارات."
    }
  }
};

export default function GarageDoorsPage({ params }) {
  // Extract lang from params
  const { lang } = params;
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
          src="/services/hero3.jpg"
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
            {/* Sectional */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Gar1.jpg"
                  alt={t.types.sectional.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.sectional.title}</h5>
                <p className="text-muted">{t.types.sectional.description}</p>
              </div>
            </div>

            {/* Roller */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Gar2.jpg"
                  alt={t.types.roller.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.roller.title}</h5>
                <p className="text-muted">{t.types.roller.description}</p>
              </div>
            </div>

            {/* Overhead */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Gar3.jpg"
                  alt={t.types.overhead.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.overhead.title}</h5>
                <p className="text-muted">{t.types.overhead.description}</p>
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
            <div className="col-lg-8">
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
              "/services/Gar1.jpg",
              "/services/Gar2.jpg",
              "/services/Gar3.jpg",
              "/services/Gar4.jpg",
            ].map((src, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="card border-0 shadow-sm" style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src={src}
                    alt={`Garage Door ${index + 1}`}
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