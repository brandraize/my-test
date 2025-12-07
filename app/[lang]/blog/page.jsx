import { db } from "@/configuration/firebase-config";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import BlogClient from "./BlogClient";

const metas = {
  en: {
    title: "ORVEXCO | Engineering, Construction & Industrial Solutions",
    description:
      "ORVEXCO is a global engineering company specializing in construction, fabrication, and architectural solutions. From fire-rated doors to structural steel fabrication, we deliver innovative, safe, and reliable industrial solutions across Saudi Arabia, Kuwait, and the USA.",
    keywords:
      "ORVEXCO, engineering company, construction, industrial solutions, structural steel fabrication, fire rated doors, steel doors, aluminum fabrication, industrial projects, Saudi Arabia engineering, Kuwait construction, USA engineering",
  },
  ar: {
    title: "أورفكسو | حلول هندسية وإنشائية وصناعية",
    description:
      "أورفكسو شركة هندسية عالمية متخصصة في مجالات البناء والتصنيع والعمارة. من الأبواب المقاومة للحريق إلى تصنيع الهياكل الفولاذية، نقدم حلولًا صناعية مبتكرة وآمنة وموثوقة في المملكة العربية السعودية والكويت والولايات المتحدة الأمريكية.",
    keywords:
      "أورفكسو، شركة هندسية، البناء، الحلول الصناعية، تصنيع الهياكل الفولاذية، أبواب مقاومة للحريق، أبواب فولاذية، تصنيع الألمنيوم، مشاريع صناعية، الهندسة في السعودية، البناء في الكويت، الهندسة في أمريكا",
  },
};



export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = metas[lang] || metas.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://brandraize.com/${lang}/blog`,
      languages: {
        en: "https://brandraize.com/en/blog",
        ar: "https://brandraize.com/ar/blog",
      },
    },
  };
}

export default async function Blog({ params }) {
  const { lang } = await params;

  const articlesCollection = collection(db, "articles");
  const articlesQuery = query(articlesCollection, orderBy("timestamp", "desc"));
  const docsSnapshot = await getDocs(articlesQuery);

  const articles = docsSnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      ...data,
      id: doc.id,
      title: data.title[lang],
      description: data.description[lang],
      slug: data.title["en"],
      timestamp: data.timestamp?.toDate().toISOString() || null,
    };
  });

  return <BlogClient articles={articles} lang={lang} />;
}
