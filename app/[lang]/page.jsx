import { use } from "react";
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

const ServicesSection = dynamic(() => import("../../components/ServicesSection"), {
  loading: () => (
    <section style={{ minHeight: "820px", background: "#f7faf9" }} />
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

export default function Home({ params }) {
  const resolvedParams = use(params);
  const { lang = "en" } = resolvedParams || {};

  const content = {
    en: {
      title: "Sensing Nature | Environmental & Geological Solutions",
      description: "Innovative environmental, geological, geophysical & meteorological solutions with accurate insights using latest techniques.",
      keywords: "environmental services, geological solutions, geophysical surveys, meteorological services, sensing nature, sustainable development",
      heroTitle: "Innovative Environmental, Geological, Geophysical & Meteorological Solutions",
      heroDescription: "Accurate insights with the latest geological & geophysical techniques",
      shopNow: "Contact Us",
      learnMore: "Learn More",
    },
    ar: {
      title: "  | حلول بيئية وجيولوجية",
      description: "حلول بيئية وجيولوجية وجيوفيزيائية وأرصاد جوية مبتكرة مع رؤى دقيقة باستخدام أحدث التقنيات",
      keywords: "خدمات بيئية, حلول جيولوجية, مسوحات جيوفيزيائية, خدمات أرصاد جوية, سينسينغ نيتشر, تنمية مستدامة",
      heroTitle: "حلول بيئية وجيولوجية وجيوفيزيائية وأرصاد جوية مبتكرة",
      heroDescription: "تقديم رؤى دقيقة لمشاريعك باستخدام أحدث التقنيات",
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
        />
        
        <IntroSection lang={lang} />
                <Accreditations lang={lang} />

        <ServicesSection lang={lang} />
        <NewsEventsSlider lang={lang} />
      </main>
    </>
  );
}