"use client";
import { use } from "react";
import Hero from "../../components/Hero";
import IntroSection from "../../components/IntroSection";
import ServicesSection from "../../components/ServicesSection";
import "@/styles/globals.css";
import NewsEventsSlider from "../../components/NewsEventsSlider";
import Accreditations from "../../components/Accreditations";

export default function Home({ params }) {
  const resolvedParams = use(params);
  const { lang = "en" } = resolvedParams || {};

  const content = {
    en: {
      title: "Sensing Nature | Environmental & Geological Solutions",
      description: "Innovative environmental, geological, geophysical & meteorological solutions with accurate insights using latest techniques.",
      keywords: "environmental services, geological solutions, geophysical surveys, meteorological services, sensing nature, sustainable development",
      heroTitle: "Innovative Environmental, Geological, Geophysical & Meteorological Solutions",
      heroDescription: "Accurate insights with the latest geological & geophysical techniques.",
      shopNow: "Contact Us",
      learnMore: "Learn More",
    },
    ar: {
      title: "سينسينغ نيتشر | حلول بيئية وجيولوجية",
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