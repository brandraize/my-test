// app/[lang]/projects/page.js
import DynamicProjectsPage from "../../../components/DynamicProjectsPage";

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

  // Fetch projects from Laravel API
  let projects = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/projects`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        projects = data.data;
      }
    }
  } catch (error) {
    console.error('Failed to fetch projects:', error);
  }

  return <DynamicProjectsPage lang={lang} projects={projects} />;
}