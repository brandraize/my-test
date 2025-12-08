// app/[lang]/services/page.js
import ServicesPage from "../../../components/ServicesPage/ServicesPage";

export async function generateMetadata({ params }) {
  // Add await for params
  const { lang = "en" } = await params;
  
  const content = {
    en: {
      title: "Our Services | Geological, Geophysical, Environmental & Meteorological Solutions",
      description:
        "Comprehensive geological mapping, geophysical surveys, environmental assessments, and meteorological services. Expert solutions for resource exploration, environmental monitoring, and climate studies.",
      keywords: "geological services, geophysical surveys, environmental impact assessment, meteorological monitoring, site investigation, resource exploration"
    },
    ar: {
      title: "خدماتنا | الحلول الجيولوجية والجيوفيزيائية والبيئية والأرصادية",
      description:
        "خدمات شاملة في رسم الخرائط الجيولوجية، المسوحات الجيوفيزيائية، التقييمات البيئية، ومراقبة الأرصاد الجوية. حلول متخصصة للاستكشاف والمراقبة البيئية ودراسات المناخ.",
      keywords: "خدمات جيولوجية، مسوحات جيوفيزيائية، تقييم الأثر البيئي، مراقبة الأرصاد الجوية، تحقيقات المواقع، استكشاف الموارد"
    },
  };
  
  const t = content[lang];

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      images: [
        {
          url: "/services-hero.jpg",
          width: 1200,
          height: 630,
          alt: "Sensing Nature Services",
        },
      ],
    },
    alternates: {
      languages: {
        en: "/en/services",
        ar: "/ar/services",
      },
    },
  };
}

// Make the component async and await params
export default async function Page({ params }) {
  const { lang = "en" } = await params;
  return <ServicesPage lang={lang} />;
}