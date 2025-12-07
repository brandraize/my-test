export const dynamic = "force-dynamic";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/configuration/firebase-config";

import AllProducts from "@/components/AllProducts";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

const metas = {
  en: {
    title: "Our Services - ORVEXCO",
    description:
      "Discover ORVEXCO's full range of industrial and construction services! From fire-rated doors to structural steel fabrication, we deliver innovative, safe, and high-quality engineering solutions.",
  },
  ar: {
    title: "خدماتنا - أورفكسو",
    description:
      "استعرض مجموعة أورفكسو الكاملة من الخدمات الصناعية والإنشائية! من الأبواب المقاومة للحريق إلى تصنيع الهياكل الفولاذية، نقدم حلولًا هندسية مبتكرة وآمنة وعالية الجودة.",
  },
};


  const meta = metas[lang] || metas.en;

  const baseUrl = "https://happy-face.co";
  const canonicalUrl = `${baseUrl}/${lang}/products`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/products`,
        ar: `${baseUrl}/ar/products`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function ProductsPage({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
      title: data.title[lang],
      category: data.category[lang],
      shortDesc: data.shortDesc[lang],
      fullDesc: data.fullDesc[lang],
      slug: data.title["en"],
      timestamp: null,
    };
  });

  const content = {
    en: {
      title: "Our Products",
      subtitle:
        "Discover skincare and beauty essentials crafted with love, science, and nature's finest ingredients.",
      image: "/products-img.jpg",
    },
    ar: {
      title: "منتجاتنا",
      subtitle:
        "اكتشفي أساسيات العناية بالبشرة والجمال المصنوعة بحب، وعلم، وأجود مكونات الطبيعة.",
      image: "/products-img.jpg",
    },
  };

  const { title, subtitle, image } = content[lang] || content.en;

  return (
    <>
      <section
        style={{
          position: "relative",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          height: "calc(100vh - 88.59px)",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            padding: "3rem 1.5rem",
            borderRadius: "1rem",
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: "400",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        </div>
      </section>
      <AllProducts lang={lang} products={products} />
    </>
  );
}
