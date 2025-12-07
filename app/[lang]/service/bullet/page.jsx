"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

const translations = {
  en: {
    title: "Bullet & Blast Resistant Doors | YouMats",
    description: "Bullet & Blast Resistant Doors – Maximum security solutions for high-risk environments.",
    hero: {
      title: "Bullet & Blast Resistant Doors",
      subtitle: "Engineered for Maximum Security, Built for Ultimate Protection"
    },
    about: {
      title: "About Bullet & Blast Resistant Doors",
      description: "Our bullet and blast resistant doors feature hinged single or double leaf designs with outward/inward opening options as specified. These high-security doors are specifically designed for security control rooms, data centers, embassies, defense facilities, banks, substations, and other high-risk areas. Engineered to resist ballistic penetration and overpressure blast loads, they provide unparalleled protection in critical environments."
    },
    types: {
      title: "Types of Security Doors",
      bulletResistant: {
        title: "Bullet Resistant Doors",
        description: "Designed to resist ballistic penetration with certified protection levels for various threat scenarios."
      },
      blastResistant: {
        title: "Blast Resistant Doors",
        description: "Engineered to withstand overpressure blast loads and protect against explosive forces."
      },
      combinedSecurity: {
        title: "Combined Security Doors",
        description: "Integrated solutions offering both ballistic and blast resistance for maximum protection."
      }
    },
    specifications: {
      title: "Technical Specifications & Certifications",
      items: [
        "Design: Hinged single or double leaf, outward/inward opening as specified",
        "Applications: Security control rooms, data centers, embassies, defense facilities, banks, substations, or other high-risk areas",
        "Protection: Designed to resist ballistic penetration and overpressure blast loads",
        "Certifications: Tested and certified to UL 752 Levels 1–10 or EN 1522/1523 (FB4 to FB7)",
        "Glazing: Bullet-resistant glazing to BR4–BR7 as per EN 1063",
        "Materials: High-strength steel armor plating",
        "Locking: Multi-point high-security locking systems",
        "Testing: Independently tested and certified"
      ]
    },
    gallery: {
      title: "Gallery"
    },
    whyChoose: {
      title: "Why Choose Our Security Doors",
      description: "Our Bullet & Blast Resistant Doors are engineered to meet the highest international security standards, ensuring maximum protection in critical environments. With independent testing and certification to UL 752 and EN standards, these doors provide reliable security solutions for the most demanding applications in government, military, and high-security commercial facilities."
    }
  },
  ar: {
    title: "الأبواب المقاومة للرصاص والانفجارات | YouMats",
    description: "الأبواب المقاومة للرصاص والانفجارات – حلول أمان قصوى للبيئات عالية الخطورة.",
    hero: {
      title: "الأبواب المقاومة للرصاص والانفجارات",
      subtitle: "مصممة لأقصى درجات الأمان، مبنية للحماية القصوى"
    },
    about: {
      title: "عن الأبواب المقاومة للرصاص والانفجارات",
      description: "أبوابنا المقاومة للرصاص والانفجارات تتميز بتصاميم مفصلية ذات ورقة مفردة أو مزدوجة مع خيارات فتح للخارج/للداخل حسب التحديد. هذه الأبواب عالية الأمان مصممة خصيصاً لغرف التحكم الأمنية ومراكز البيانات والسفارات والمنشآت الدفاعية والبنوك والمحطات الفرعية والمناطق عالية الخطورة الأخرى. مصممة هندسياً لمقاومة اختراق المقذوفات وأحمال انفجار الضغط الزائد، توفر حماية لا مثيل لها في البيئات الحرجة."
    },
    types: {
      title: "أنواع الأبواب الأمنية",
      bulletResistant: {
        title: "أبواب مقاومة الرصاص",
        description: "مصممة لمقاومة اختراق المقذوفات بمستويات حماية معتمدة لسيناريوهات التهديد المختلفة."
      },
      blastResistant: {
        title: "أبواب مقاومة الانفجارات",
        description: "مصممة هندسياً لتحمل أحمال انفجار الضغط الزائد والحماية من القوى الانفجارية."
      },
      combinedSecurity: {
        title: "أبواب أمنية مجمعة",
        description: "حلول متكاملة تقدم كل من مقاومة الرصاص والانفجارات لأقصى حماية."
      }
    },
    specifications: {
      title: "المواصفات الفنية والشهادات",
      items: [
        "التصميم: ورقة مفردة أو مزدوجة مفصلية، فتح للخارج/للداخل حسب التحديد",
        "التطبيقات: غرف التحكم الأمنية، مراكز البيانات، السفارات، المنشآت الدفاعية، البنوك، المحطات الفرعية، أو المناطق عالية الخطورة الأخرى",
        "الحماية: مصممة لمقاومة اختراق المقذوفات وأحمال انفجار الضغط الزائد",
        "الشهادات: مختبرة ومعتمدة وفق UL 752 المستويات 1-10 أو EN 1522/1523 (FB4 إلى FB7)",
        "التزجيج: زجاج مقاوم للرصاص وفق BR4–BR7 حسب معيار EN 1063",
        "المواد: صفائح درع فولادية عالية القوة",
        "القفل: أنظمة قفل أمنية متعددة النقاط",
        "الاختبار: مختبرة ومعتمدة بشكل مستقل"
      ]
    },
    gallery: {
      title: "معرض الصور"
    },
    whyChoose: {
      title: "لماذا تختار أبوابنا الأمنية",
      description: "تم تصميم أبوابنا المقاومة للرصاص والانفجارات لتلبية أعلى معايير الأمان الدولية، مما يضمن أقصى حماية في البيئات الحرجة. مع الاختبارات المستقلة والشهادات وفق معايير UL 752 وEN، توفر هذه الأبواب حلول أمان موثوقة للتطبيقات الأكثر تطلباً في المنشآت الحكومية والعسكرية والتجارية عالية الأمان."
    }
  }
};

export default function BulletBlastDoorsPage({ params }) {
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
          src="/services/hero5.jpg"
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
            {/* Bullet Resistant */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/bul1.jpg"
                  alt={t.types.bulletResistant.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.bulletResistant.title}</h5>
                <p className="text-muted">{t.types.bulletResistant.description}</p>
              </div>
            </div>

            {/* Blast Resistant */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/bul2.jpg"
                  alt={t.types.blastResistant.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.blastResistant.title}</h5>
                <p className="text-muted">{t.types.blastResistant.description}</p>
              </div>
            </div>

            {/* Combined Security */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/bul3.jpg"
                  alt={t.types.combinedSecurity.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.combinedSecurity.title}</h5>
                <p className="text-muted">{t.types.combinedSecurity.description}</p>
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
              "/services/bul1.jpg",
              "/services/bul2.jpg",
              "/services/bul3.jpg",
              "/services/bul4.jpg",
            ].map((src, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="card border-0 shadow-sm" style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src={src}
                    alt={`Security Door ${index + 1}`}
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