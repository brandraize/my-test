// app/[lang]/projects/page.js
import ProjectsPage from "../../../components/ProjectsPage/ProjectsPage";

export async function generateMetadata({ params }) {
  const { lang = "en" } = await params;
  
  const content = {
    en: {
      title: "Our Projects | Sensing Nature - Case Studies & Success Stories",
      description:
        "Explore our comprehensive project portfolio showcasing successful geological, geophysical, environmental, and meteorological solutions with detailed case studies.",
      keywords: "project portfolio, case studies, geological projects, geophysical surveys, environmental solutions, meteorological services"
    },
    ar: {
      title: "مشاريعنا | استشعار الطبيعة - دراسات الحالة وقصص النجاح",
      description:
        "استكشف محفظة مشاريعنا الشاملة التي تعرض حلول جيولوجية وجيوفيزيائية وبيئية وأرصادية ناجحة مع دراسات حالة مفصلة.",
      keywords: "محفظة المشاريع, دراسات الحالة, مشاريع جيولوجية, مسوحات جيوفيزيائية, حلول بيئية, خدمات أرصادية"
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