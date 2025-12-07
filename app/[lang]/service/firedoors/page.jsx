"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

const translations = {
  en: {
    title: "Fire Rated Doors | YouMats",
    description: "Fire Rated Doors – Engineered for safety and durability.",
    hero: {
      title: "Fire Rated Doors",
      subtitle: "Engineered for Safety, Built to Last"
    },
    about: {
      title: "About Fire Rated Doors",
      description: "Fire-rated doors are specially engineered to resist fire and smoke, ensuring the safety of buildings and their occupants. Ideal for industrial, commercial, and residential spaces, these doors provide both safety and long-lasting durability. Manufactured from high-grade galvanized or stainless steel, they offer unmatched performance and reliability."
    },
    types: {
      title: "Types of Fire Rated Doors",
      singleLeaf: {
        title: "Single Leaf Fire Door",
        description: "Ideal for compact spaces, offering excellent fire resistance and sleek design."
      },
      doubleLeaf: {
        title: "Double Leaf Fire Door",
        description: "Designed for large openings and high-traffic areas, ensuring maximum protection."
      },
      glazed: {
        title: "Glazed Fire Door",
        description: "Combines transparency with safety, allowing visibility without compromising protection."
      }
    },
    gallery: {
      title: "Gallery"
    },
    whyChoose: {
      title: "Why Choose Our Fire Doors",
      description: "Our Fire Rated Doors are designed following international fire safety standards, ensuring top protection and modern style. Available in a variety of sizes, finishes, and materials, they seamlessly blend functionality and design."
    },
  },
  ar: {
    title: "أبواب مقاومة للحريق | YouMats",
    description: "أبواب مقاومة للحريق – مصممة هندسياً للأمان والمتانة.",
    hero: {
      title: "أبواب مقاومة للحريق",
      subtitle: "مصممة هندسياً للأمان، مبنية لتدوم"
    },
    about: {
      title: "عن الأبواب المقاومة للحريق",
      description: "الأبواب المقاومة للحريق مصممة هندسياً خصيصاً لمقاومة الحريق والدخان، مما يضمن سلامة المباني والقاطنين فيها. مثالية للمساحات الصناعية والتجارية والسكنية، توفر هذه الأبواب كل من السلامة والمتانة طويلة الأمد. مصنوعة من الفولاذ المجلفن عالي الجودة أو الفولاذ المقاوم للصدأ، تقدم أداءً وموثوقية لا مثيل لهما."
    },
    types: {
      title: "أنواع الأبواب المقاومة للحريق",
      singleLeaf: {
        title: "باب حريق ذو ورقة واحدة",
        description: "مثالي للمساحات المضغوطة، يقدم مقاومة ممتازة للحريق وتصميم أنيق."
      },
      doubleLeaf: {
        title: "باب حريق ذو ورقتين",
        description: "مصمم للفتحات الكبيرة والمناطق عالية الازدحام، يضمن أقصى حماية."
      },
      glazed: {
        title: "باب حريق زجاجي",
        description: "يجمع بين الشفافية والسلامة، مما يسمح بالرؤية دون المساس بالحماية."
      }
    },
    gallery: {
      title: "معرض الصور"
    },
    whyChoose: {
      title: "لماذا تختار أبوابنا المقاومة للحريق",
      description: "تم تصميم أبوابنا المقاومة للحريق وفقاً لمعايير السلامة من الحريق الدولية، مما يضمن أعلى حماية وطراز حديث. متوفرة بمجموعة متنوعة من الأحجام والنهائيات والمواد، تدمج بسلاسة بين الوظيفة والتصميم."
    },
  }
};

export default function FireDoorsPage({ params }) {
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
          src="/services/hero.jpg"
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
            {/* Single Leaf */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/fir1.png"
                  alt={t.types.singleLeaf.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.singleLeaf.title}</h5>
                <p className="text-muted">{t.types.singleLeaf.description}</p>
              </div>
            </div>

            {/* Double Leaf */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/fir2.png"
                  alt={t.types.doubleLeaf.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.doubleLeaf.title}</h5>
                <p className="text-muted">{t.types.doubleLeaf.description}</p>
              </div>
            </div>

            {/* Glazed */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-3">
                <Image
                  src="/services/fir3.png"
                  alt={t.types.glazed.title}
                  width={400}
                  height={250}
                  className="rounded img-fluid object-fit-cover"
                />
                <h5 className="mt-3 fw-bold">{t.types.glazed.title}</h5>
                <p className="text-muted">{t.types.glazed.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Gallery Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-dark mb-4">{t.gallery.title}</h2>
          <div className="mx-auto mb-4" style={{ width: "100px", height: "3px", background: "#c89f4f" }}></div>

          <div className="row g-4 justify-content-center">
            {[
              "/services/fir1.png",
              "/services/fir2.png",
              "/services/fir3.png",
              "/services/fir4.jpg",
            ].map((src, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="card border-0 shadow-sm" style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src={src}
                    alt={`${t.types.singleLeaf.title} ${index + 1}`}
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