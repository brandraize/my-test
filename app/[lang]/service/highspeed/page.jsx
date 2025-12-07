"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

const translations = {
  en: {
    title: "High Speed Fabric Doors | YouMats",
    description: "High Speed Fabric Doors – Fast, reliable, and efficient industrial solutions.",
    hero: {
      title: "High Speed Fabric Doors",
      subtitle: "Engineered for Speed, Built for Efficiency"
    },
    about: {
      title: "About High Speed Fabric Doors",
      description: "High-speed fabric doors are designed for rapid operation and optimal performance in industrial environments. Featuring durable PVC-coated polyester curtains, these doors operate at speeds of 50-70 inches per second with wind resistance up to 22 psf for heavy-duty models. Equipped with advanced safety features including infrared sensors, reversing edges, and breakaway bottom bars, they ensure both efficiency and safety in high-traffic areas."
    },
    types: {
      title: "Types of High Speed Fabric Doors",
      standard: {
        title: "Standard High Speed Door",
        description: "Ideal for general industrial use with reliable performance and essential safety features."
      },
      heavyDuty: {
        title: "Heavy Duty Fabric Door",
        description: "Designed for demanding environments with enhanced wind resistance and durability."
      },
      insulated: {
        title: "Insulated High Speed Door",
        description: "Combines speed with thermal efficiency, perfect for temperature-controlled areas."
      }
    },
    gallery: {
      title: "Gallery"
    },
    whyChoose: {
      title: "Why Choose Our High Speed Doors",
      description: "Our High Speed Fabric Doors are engineered following international industrial standards, ensuring top performance and modern functionality. Available with various activation options (push button, loop detector), control panels, and optional features like vision panels or insulation, they seamlessly blend speed with safety."
    },
    specifications: {
      title: "Technical Specifications",
      items: [
        "Curtain Material: PVC-coated polyester",
        "Operational Speed: 50-70 inches per second",
        "Wind Resistance: Up to 22 psf (heavy-duty models)",
        "Safety Features: Infrared sensors, reversing edges, breakaway bottom bars",
        "Activation Options: Push button, loop detector",
        "Control Panel: Advanced digital control system",
        "Optional Features: Vision panels, insulation, custom colors"
      ]
    }
  },
  ar: {
    title: "الأبواب القماشية عالية السرعة | YouMats",
    description: "الأبواب القماشية عالية السرعة – حلول صناعية سريعة وموثوقة وفعالة.",
    hero: {
      title: "الأبواب القماشية عالية السرعة",
      subtitle: "مصممة للسرعة، مبنية للكفاءة"
    },
    about: {
      title: "عن الأبواب القماشية عالية السرعة",
      description: "الأبواب القماشية عالية السرعة مصممة للتشغيل السريع والأداء الأمثل في البيئات الصناعية. تتميز بستائر البوليستر المطلية بـ PVC المتينة، تعمل هذه الأبواب بسرعات 50-70 بوصة في الثانية مع مقاومة الرياح حتى 22 رطل/قدم² للموديلات الثقيلة. مجهزة بميزات أمان متطورة بما في ذلك أجهزة استشعار الأشعة تحت الحمراء، والحواف العاكسة، والقضبان السفلية القابلة للكسر، مما يضمن كل من الكفاءة والسلامة في المناطق عالية الازدحام."
    },
    types: {
      title: "أنواع الأبواب القماشية عالية السرعة",
      standard: {
        title: "الباب السريع القياسي",
        description: "مثالي للاستخدام الصناعي العام بأداء موثوق وميزات أمان أساسية."
      },
      heavyDuty: {
        title: "الباب القماشي الثقيل",
        description: "مصمم للبيئات المتطلبة بمقاومة محسنة للرياح ومتانة عالية."
      },
      insulated: {
        title: "الباب السريع المعزول",
        description: "يجمع بين السرعة والكفاءة الحرارية، مثالي للمناطق ذات التحكم في درجة الحرارة."
      }
    },
    gallery: {
      title: "معرض الصور"
    },
    whyChoose: {
      title: "لماذا تختار أبوابنا عالية السرعة",
      description: "تم تصميم أبوابنا القماشية عالية السرعة وفقاً للمعايير الصناعية الدولية، مما يضمن أعلى أداء ووظائف حديثة. متوفرة بخيارات تفعيل متنوعة (زر ضغط، كاشف حلقي)، لوحات تحكم، وميزات اختيارية مثل لوحات الرؤية أو العزل، تدمج بسلاسة بين السرعة والسلامة."
    },
    specifications: {
      title: "المواصفات الفنية",
      items: [
        "مادة الستارة: بوليستر مطلى بـ PVC",
        "السرعة التشغيلية: 50-70 بوصة في الثانية",
        "مقاومة الرياح: حتى 22 رطل/قدم² (الموديلات الثقيلة)",
        "ميزات الأمان: أجهزة استشعار الأشعة تحت الحمراء، حواف عاكسة، قضبان سفلية قابلة للكسر",
        "خيارات التفعيل: زر ضغط، كاشف حلقي",
        "لوحة التحكم: نظام تحكم رقمي متقدم",
        "ميزات اختيارية: لوحات رؤية، عزل، ألوان مخصصة"
      ]
    }
  }
};

export default function HighSpeedDoorsPage({ params }) {
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
          src="/services/hero2.jpeg"
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
            {/* Standard */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/High1.jpg"
                  alt={t.types.standard.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.standard.title}</h5>
                <p className="text-muted">{t.types.standard.description}</p>
              </div>
            </div>

            {/* Heavy Duty */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/High2.jpg"
                  alt={t.types.heavyDuty.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.heavyDuty.title}</h5>
                <p className="text-muted">{t.types.heavyDuty.description}</p>
              </div>
            </div>

            {/* Insulated */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/High3.jpg"
                  alt={t.types.insulated.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.insulated.title}</h5>
                <p className="text-muted">{t.types.insulated.description}</p>
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
              "/services/High1.jpg",
              "/services/High2.jpg",
              "/services/High3.jpg",
              "/services/High4.jpg",
            ].map((src, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="card border-0 shadow-sm" style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src={src}
                    alt={`High Speed Door ${index + 1}`}
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