import AboutPage from "../../../components/AboutPage/AboutPage";
import apiService from "@/lib/api";

export async function generateMetadata({ params }) {
  // Add await for params
  const { lang = "en" } = await params;
  
  const content = {
    en: {
      title: "About Sensing Nature | Environmental & Geophysical Solutions",
      description:
        "Sensing Nature provides expert geological, geophysical, environmental, and meteorological services with innovative solutions for exploration, development, and environmental stewardship worldwide.",
    },
    ar: {
      title: "عن سينسينج نيتشر | الحلول البيئية والجيوفيزيائية",
      description:
        "تقدم سينسينج نيتشر خدمات جيولوجية وجيوفيزيائية وبيئية وأرصادية متخصصة مع حلول مبتكرة للاستكشاف والتطوير والإشراف البيئي على مستوى العالم.",
    },
  };
  
  const t = content[lang];

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      images: [
        {
          url: "/about-mission.jpg",
          width: 1200,
          height: 630,
          alt: "About Sensing Nature",
        },
      ],
    },
    alternates: {
      languages: {
        en: "/en/about",
        ar: "/ar/about",
      },
    },
  };
}

// Make the component async and await params
export default async function Page({ params }) {
  const { lang = "en" } = await params;
  
  // Fetch about section from Laravel API
  let aboutData = null;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/about`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        aboutData = data.data;
      }
    }
  } catch (error) {
    console.error('Failed to fetch about data:', error);
  }
  
  return <AboutPage lang={lang} aboutData={aboutData} />;
}