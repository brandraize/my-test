// app/[lang]/aboutus/page.js
import AboutUs from "../../../components/AboutUs/AboutUS";

export async function generateMetadata({ params }) {
  const lang = params.lang || "en";

 const content = {
  en: {
    title: "About ORVEXCO | Engineering Strength, Building the Future",
    description:
      "Team ORVEXCO was established in the USA in 2009 as CIL, expanded to Kuwait in 2010, and officially registered in 2024. The company strengthened its presence in Saudi Arabia in 2025, offering innovative engineering and industrial solutions across construction, fabrication, and architectural sectors.",
  },
  ar: {
    title: "عن أورفكسو | قوة هندسية تبني المستقبل",
    description:
      "تأسست شركة أورفكسو في الولايات المتحدة عام 2009 باسم CIL، وتوسعت إلى الكويت في عام 2010، وتم تسجيلها رسميًا في عام 2024. عززت الشركة وجودها في المملكة العربية السعودية عام 2025، وتقدم حلولًا هندسية وصناعية مبتكرة في مجالات البناء والتصنيع والعمارة.",
  },
 };
  const t = content[lang];

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      // url: `https://brandraize.com/${lang}/aboutus`,
      images: [
        {
          url: "/bg.webp",
          width: 1200,
          height: 630,
          alt: "About ORVEXCO",
        },
      ],
    },
    alternates: {
      languages: {
        en: "/en/aboutus",
        ar: "/ar/aboutus",
      },
    },
  };
}

export default function Page({ params }) {
  return <AboutUs params={params} />;
}
