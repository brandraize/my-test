"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

const translations = {
  en: {
    title: "Structural Steel Fabrication | YouMats",
    description: "Structural Steel Fabrication – Comprehensive steel solutions for industrial and construction projects.",
    hero: {
      title: "Structural Steel Fabrication",
      subtitle: "Engineered for Strength, Built for Precision"
    },
    about: {
      title: "About Structural Steel Fabrication",
      description: "Our comprehensive structural steel fabrication services include the supply, fabrication, welding, surface preparation, painting, delivery, and erection of all structural steel components as per approved drawings and international standards. We specialize in creating robust steel structures for industrial buildings, warehouses, platforms, pipe supports, trusses, frames, and various other structural elements, ensuring quality and precision at every stage of the process."
    },
    types: {
      title: "Our Fabrication Services",
      industrial: {
        title: "Industrial Structures",
        description: "Custom steel structures for factories, plants, and industrial facilities with heavy-duty requirements."
      },
      commercial: {
        title: "Commercial Buildings",
        description: "Structural steel frameworks for commercial complexes, offices, and retail spaces."
      },
      specialized: {
        title: "Specialized Elements",
        description: "Custom pipe supports, platforms, trusses, and frames for specific project needs."
      }
    },
    specifications: {
      title: "Service Scope & Process",
      items: [
        "Complete Supply: Raw material procurement and quality assurance",
        "Precision Fabrication: Cutting, bending, and shaping as per specifications",
        "Expert Welding: Certified welding processes and quality control",
        "Surface Preparation: Sandblasting, cleaning, and pretreatment",
        "Professional Painting: Protective coatings and finishes",
        "Timely Delivery: Logistics and transportation management",
        "Professional Erection: On-site assembly and installation",
        "Quality Standards: Compliance with approved drawings and international standards",
        "Applications: Industrial buildings, warehouses, platforms, pipe supports, trusses, frames"
      ]
    },
    gallery: {
      title: "Project Gallery"
    },
    whyChoose: {
      title: "Why Choose Our Steel Fabrication",
      description: "Our Structural Steel Fabrication services are backed by years of expertise and state-of-the-art facilities. We ensure complete compliance with international standards and approved drawings, delivering precision-engineered steel components that meet the highest quality and safety requirements for industrial, commercial, and specialized construction projects."
    }
  },
  ar: {
    title: "تصنيع الهياكل الفولاذية | YouMats",
    description: "تصنيع الهياكل الفولاذية – حلول فولاذية شاملة للمشاريع الصناعية والإنشائية.",
    hero: {
      title: "تصنيع الهياكل الفولاذية",
      subtitle: "مصممة للقوة، مبنية للدقة"
    },
    about: {
      title: "عن تصنيع الهياكل الفولاذية",
      description: "تشمل خدماتنا الشاملة لتصنيع الهياكل الفولاذية التوريد، التصنيع، اللحام، تجهيز الأسطح، الطلاء، التسليم، وتركيب جميع مكونات الفولاذ الإنشائي وفقاً للرسومات المعتمدة والمعايير الدولية. نحن متخصصون في إنشاء هياكل فولاذية قوية للمباني الصناعية والمستودعات والمنصات ودعامات الأنابيب والجمالونات والإطارات وعناصر إنشائية أخرى متنوعة، مما يضمن الجودة والدقة في كل مرحلة من العملية."
    },
    types: {
      title: "خدمات التصنيع لدينا",
      industrial: {
        title: "الهياكل الصناعية",
        description: "هياكل فولاذية مخصصة للمصانع والمحطات والمنشآت الصناعية ذات المتطلبات الثقيلة."
      },
      commercial: {
        title: "المباني التجارية",
        description: "هياكل فولاذية إنشائية للمجمعات التجارية والمكاتب والمساحات التجزئة."
      },
      specialized: {
        title: "العناصر المتخصصة",
        description: "دعامات أنابيب مخصصة، منصات، جمالونات، وإطارات لاحتياجات المشروع المحددة."
      }
    },
    specifications: {
      title: "نطاق الخدمة والعمليات",
      items: [
        "التوريد الكامل: شراء المواد الخام وضمان الجودة",
        "التصنيع الدقيق: القطع والثني والتشكيل وفقاً للمواصفات",
        "اللحام الاحترافي: عمليات لحام معتمدة ومراقبة الجودة",
        "تجهيز الأسطح: السفع الرملي، التنظيف، والمعالجة المسبقة",
        "الطلاء الاحترافي: الطلاءات الواقية والتشطيبات",
        "التسليم في الوقت المحدد: إدارة الخدمات اللوجستية والنقل",
        "التركيب الاحترافي: التجميع والتركيب في الموقع",
        "معايير الجودة: الامتثال للرسومات المعتمدة والمعايير الدولية",
        "التطبيقات: المباني الصناعية، المستودعات، المنصات، دعامات الأنابيب، الجمالونات، الإطارات"
      ]
    },
    gallery: {
      title: "معرض المشاريع"
    },
    whyChoose: {
      title: "لماذا تختار خدماتنا في التصنيع الفولاذي",
      description: "تدعم خدمات تصنيع الهياكل الفولاذية لدينا سنوات من الخبرة ومرافق متطورة. نحن نضمن الامتثال الكامل للمعايير الدولية والرسومات المعتمدة، ونقدم مكونات فولاذية مصممة بدقة تلبي أعلى متطلبات الجودة والسلامة للمشاريع الصناعية والتجارية والإنشائية المتخصصة."
    }
  }
};

export default function StructuralSteelPage({ params }) {
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
          src="/services/hero6.jpg"
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
            {/* Industrial */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Ste1.jpg"
                  alt={t.types.industrial.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.industrial.title}</h5>
                <p className="text-muted">{t.types.industrial.description}</p>
              </div>
            </div>

            {/* Commercial */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Ste2.jpg"
                  alt={t.types.commercial.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.commercial.title}</h5>
                <p className="text-muted">{t.types.commercial.description}</p>
              </div>
            </div>

            {/* Specialized */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/Ste3.jpg"
                  alt={t.types.specialized.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.specialized.title}</h5>
                <p className="text-muted">{t.types.specialized.description}</p>
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
              "/services/Ste1.jpg",
              "/services/Ste2.jpg",
              "/services/Ste3.jpg",
              "/services/Ste4.jpg",
              "/services/Ste5.jpg",
              "/services/ste6.jpg",
            ].map((src, index) => (
              <div className="col-6 col-md-4 col-lg-4" key={index}>
                <div className="card border-0 shadow-sm" style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src={src}
                    alt={`Steel Fabrication Project ${index + 1}`}
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