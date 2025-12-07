"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

const translations = {
  en: {
    title: "Rolling Shutter Doors | YouMats",
    description: "Rolling Shutter Doors – Secure, durable, and versatile industrial solutions.",
    hero: {
      title: "Rolling Shutter Doors",
      subtitle: "Engineered for Security, Built for Durability"
    },
    about: {
      title: "About Rolling Shutter Doors",
      description: "Our rolling shutter doors are available in both manually and motor operated versions, featuring vertical rolling type design guided within steel side channels. These versatile doors can be installed inside or outside wall faces, as well as within structural openings. Ideal for industrial facilities, commercial spaces, warehouses, and parking areas, they provide robust security and reliable performance in various environments."
    },
    types: {
      title: "Types of Rolling Shutter Doors",
      manual: {
        title: "Manual Rolling Shutter",
        description: "Cost-effective manual operation with reliable chain mechanism, perfect for standard security needs."
      },
      motorized: {
        title: "Motorized Rolling Shutter",
        description: "Convenient motor-operated system with remote control access, ideal for frequent use areas."
      },
      industrial: {
        title: "Industrial Rolling Shutter",
        description: "Heavy-duty design for industrial applications with enhanced security and durability features."
      }
    },
    specifications: {
      title: "Technical Specifications",
      items: [
        "Operation: Manually or Motor Operated",
        "Type: Vertical rolling type",
        "Guidance: Guided within steel side channels",
        "Installation: Inside or outside wall face / within structural opening",
        "Applications: Industrial, commercial, warehouse, and parking areas",
        "Materials: Galvanized steel or aluminum slats",
        "Security: High-grade locking systems",
        "Customization: Various sizes and colors available"
      ]
    },
    gallery: {
      title: "Gallery"
    },
    whyChoose: {
      title: "Why Choose Our Rolling Shutter Doors",
      description: "Our Rolling Shutter Doors are engineered to meet international security standards, ensuring superior protection and long-lasting performance. Available in both manual and motorized versions with flexible installation options, they provide optimal security solutions for industrial, commercial, and parking applications."
    }
  },
  ar: {
    title: "أبواب الدحرجة | YouMats",
    description: "أبواب الدحرجة – حلول صناعية آمنة ومتينة ومتعددة الاستخدامات.",
    hero: {
      title: "أبواب الدحرجة",
      subtitle: "مصممة للأمان، مبنية للمتانة"
    },
    about: {
      title: "عن أبواب الدحرجة",
      description: "أبواب الدحرجة لدينا متوفرة بنسختين يدوية ومشغلة بمحرك، وتتميز بتصميم النوع الدوار العمودي الموجه داخل قنوات فولاذية جانبية. يمكن تركيب هذه الأبواب متعددة الاستخدامات داخل أو خارج وجوه الجدران، وكذلك داخل الفتحات الهيكلية. مثالية للمنشآت الصناعية والمساحات التجارية والمستودعات ومناطق الانتظار، توفر أماناً قوياً وأداءً موثوقاً في بيئات متنوعة."
    },
    types: {
      title: "أنواع أبواب الدحرجة",
      manual: {
        title: "باب دحرجة يدوي",
        description: "تشغيل يدوي فعال من حيث التكلفة مع آلية سلسلة موثوقة، مثالي لاحتياجات الأمان القياسية."
      },
      motorized: {
        title: "باب دحرجة ميكانيكي",
        description: "نظام تشغيل ميكانيكي مريح مع وصول للتحكم عن بعد، مثالي للمناطق ذات الاستخدام المتكرر."
      },
      industrial: {
        title: "باب دحرجة صناعي",
        description: "تصميم ثقيل للاستخدامات الصناعية بميزات أمان ومتانة محسنة."
      }
    },
    specifications: {
      title: "المواصفات الفنية",
      items: [
        "التشغيل: يدوي أو ميكانيكي",
        "النوع: نوع دوار عمودي",
        "التوجيه: موجه داخل قنوات فولاذية جانبية",
        "التركيب: داخل أو خارج وجه الجدار / داخل الفتحة الهيكلية",
        "التطبيقات: المناطق الصناعية والتجارية والمستودعات ومواقف السيارات",
        "المواد: شرائح فولاذية مجلفنة أو ألومنيوم",
        "الأمان: أنظمة قفل عالية الجودة",
        "التخصيص: أحجام وألوان متنوعة متاحة"
      ]
    },
    gallery: {
      title: "معرض الصور"
    },
    whyChoose: {
      title: "لماذا تختار أبواب الدحرجة لدينا",
      description: "تم تصميم أبواب الدحرجة لدينا لتلبية معايير الأمان الدولية، مما يضمن حماية فائقة وأداء طويل الأمد. متوفرة بنسختين يدوية وميكانيكية مع خيارات تركيب مرنة، توفر حلول أمان مثالية للتطبيقات الصناعية والتجارية ومواقف السيارات."
    }
  }
};

export default function RollingShutterDoorsPage({ params }) {
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
          src="/services/hero4.jpg"
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
            {/* Manual */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/rol1.jpg"
                  alt={t.types.manual.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.manual.title}</h5>
                <p className="text-muted">{t.types.manual.description}</p>
              </div>
            </div>

            {/* Motorized */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/rol2.jpg"
                  alt={t.types.motorized.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.motorized.title}</h5>
                <p className="text-muted">{t.types.motorized.description}</p>
              </div>
            </div>

            {/* Industrial */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/rol3.jpg"
                  alt={t.types.industrial.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.industrial.title}</h5>
                <p className="text-muted">{t.types.industrial.description}</p>
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
              "/services/rol1.jpg",
              "/services/rol2.jpg",
              "/services/rol3.jpg",
              "/services/rol4.jpg",
            ].map((src, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="card border-0 shadow-sm" style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src={src}
                    alt={`Rolling Shutter Door ${index + 1}`}
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