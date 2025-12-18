import Hero from "../../components/Hero";
import dynamic from "next/dynamic";
import "@/styles/globals.css";

// Lazy load ALL heavy components to optimize LCP
const IntroSection = dynamic(() => import("../../components/IntroSection"), {
  loading: () => (
    <section style={{ minHeight: "620px", background: "#f7faf9" }} />
  ),
  ssr: true,
});

const ServicesFromAPI = dynamic(() => import("../../components/ServicesFromAPI"), {
  loading: () => (
    <section style={{ minHeight: "820px", background: "#f7faf9" }} />
  ),
  ssr: true,
});

const ProjectsSection = dynamic(() => import("../../components/ProjectsSection"), {
  loading: () => (
    <section style={{ minHeight: "700px", background: "#f7faf9" }} />
  ),
  ssr: true,
});

const TrainingSection = dynamic(() => import("../../components/TrainingSection"), {
  loading: () => (
    <section style={{ minHeight: "600px", background: "#fff" }} />
  ),
  ssr: true,
});

const NewsEventsSlider = dynamic(() => import("../../components/NewsEventsSlider"), {
  loading: () => (
    <section style={{ minHeight: "560px", background: "#f7faf9" }} />
  ),
  ssr: true,
});

const Accreditations = dynamic(() => import("../../components/Accreditations"), {
  loading: () => (
    <section style={{ minHeight: "320px", background: "#f7faf9" }} />
  ),
  ssr: true,
});

export default async function Home({ params }) {
  // Await params directly in Next.js 15+
  const { lang = "en" } = await params;

  // Fetch data from Laravel API
  let heroData = null;
  try {
    // Use 127.0.0.1 instead of localhost for server-side fetch in Next.js
    const apiUrl = process.env.NEXT_PUBLIC_API_URL 
      ? process.env.NEXT_PUBLIC_API_URL.replace('localhost', '127.0.0.1')
      : 'http://127.0.0.1:8000/api';
    
    const response = await fetch(`${apiUrl}/hero`, {
      cache: 'no-store', // Always fetch fresh data
      headers: {
        'Accept': 'application/json',
      }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        heroData = data.data;
      }
    }
  } catch (error) {
    console.error('Failed to fetch hero data:', error);
    // Hero data is optional, page will still render with default content
  }

  const content = {
    en: {
      title: "Sensing Nature | Environmental & Geological Solutions",
      description: "Innovative environmental, geological, geophysical & meteorological solutions with accurate insights using latest techniques.",
      keywords: "environmental services, geological solutions, geophysical surveys, meteorological services, sensing nature, sustainable development",
      heroTitle: heroData?.headline?.en || "Innovative Environmental, Geological, Geophysical & Meteorological Solutions",
      heroDescription: heroData?.paragraph?.en || "Accurate insights with the latest geological & geophysical techniques",
      shopNow: "Contact Us",
      learnMore: "Learn More",
    },
    ar: {
      title: "  | حلول بيئية وجيولوجية",
      description: "حلول بيئية وجيولوجية وجيوفيزيائية وأرصاد جوية مبتكرة مع رؤى دقيقة باستخدام أحدث التقنيات",
      keywords: "خدمات بيئية, حلول جيولوجية, مسوحات جيوفيزيائية, خدمات أرصاد جوية, سينسينغ نيتشر, تنمية مستدامة",
      heroTitle: heroData?.headline?.ar || "حلول بيئية وجيولوجية وجيوفيزيائية وأرصاد جوية مبتكرة",
      heroDescription: heroData?.paragraph?.ar || "تقديم رؤى دقيقة لمشاريعك باستخدام أحدث التقنيات",
      shopNow: "تواصل معنا",
      learnMore: "اعرف المزيد",
    },
  };

  const currentContent = content[lang] || content.en;

  return (
    <>
      <title>{currentContent.title}</title>
      <meta name="description" content={currentContent.description} />
      <meta name="keywords" content={currentContent.keywords} />
      <meta name="author" content="Sensing Nature" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <main>
        <Hero
          lang={lang}
          text={currentContent.shopNow}
          heroTitle={currentContent.heroTitle}
          heroDescription={currentContent.heroDescription}
          socialMedia={heroData?.social_media}
        />
        
        <IntroSection lang={lang} />
        <Accreditations lang={lang} />
        
        {/* Services from Laravel API */}
        <ServicesFromAPI lang={lang} />
        
        {/* Projects from Laravel API - Show 3 recent projects on homepage */}
        <ProjectsSection lang={lang} featured={true} limit={3} />
        
        {/* Training from Laravel API */}
        <TrainingSection lang={lang} />

        <NewsEventsSlider lang={lang} />
      </main>
    </>
  );
}