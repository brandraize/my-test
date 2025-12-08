// app/[lang]/projects/page.js
import ProjectsPage from "../../../components/ProjectsPage/ProjectsPage";

export async function generateMetadata({ params }) {
  const { lang = "en" } = await params;
  
  const content = {
    en: {
      title: "Our Projects | Sensing Nature - Environmental & Geological Solutions",
      description: "Explore our portfolio of geological, geophysical, environmental, and meteorological projects. See how we deliver innovative solutions worldwide.",
      keywords: "geological projects, environmental projects, geophysical surveys projects, meteorological studies, sensing nature portfolio"
    },
    ar: {
      title: "مشاريعنا | سينسينج نيتشر - الحلول البيئية والجيولوجية",
      description: "استكشف محفظة مشاريعنا الجيولوجية والجيوفيزيائية والبيئية والأرصادية. شاهد كيف نقدم حلولاً مبتكرة عالميًا.",
      keywords: "مشاريع جيولوجية، مشاريع بيئية، مشاريع مسوحات جيوفيزيائية، دراسات أرصادية، محفظة سينسينج نيتشر"
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
          url: "/projects-hero.jpg",
          width: 1200,
          height: 630,
          alt: "Sensing Nature Projects",
        },
      ],
    },
    alternates: {
      languages: {
        en: "/en/projects",
        ar: "/ar/projects",
      },
    },
  };
}

export default async function Page({ params }) {
  const { lang = "en" } = await params;
  return <ProjectsPage lang={lang} />;
}