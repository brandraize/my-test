import DynamicTrainingPage from "../../../components/DynamicTrainingPage";

export async function generateMetadata({ params }) {
  const { lang = "en" } = await params;
  
  const content = {
    en: {
      title: "Training Programs | Sensing Nature - Professional Development",
      description:
        "Explore our comprehensive training programs in geological, geophysical, environmental, and meteorological services.",
      keywords: "training programs, professional development, geological training, environmental training"
    },
    ar: {
      title: "البرامج التدريبية | استشعار الطبيعة - التطوير المهني",
      description:
        "استكشف برامجنا التدريبية الشاملة في الخدمات الجيولوجية والجيوفيزيائية والبيئية والأرصادية.",
      keywords: "برامج تدريبية، تطوير مهني، تدريب جيولوجي، تدريب بيئي"
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
          url: "/training-hero.jpg",
          width: 1200,
          height: 630,
          alt: "Sensing Nature Training",
        },
      ],
    },
    alternates: {
      languages: {
        en: "/en/training",
        ar: "/ar/training",
      },
    },
  };
}

export default async function Page({ params }) {
  const { lang = "en" } = await params;

  // Fetch trainings from Laravel API
  let trainings = [];
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/trainings`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        trainings = data.data;
      }
    }
  } catch (error) {
    console.error('Failed to fetch trainings:', error);
  }

  return <DynamicTrainingPage lang={lang} trainings={trainings} />;
}
