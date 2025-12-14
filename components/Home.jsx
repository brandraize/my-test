// components/HomePage.jsx - CLIENT COMPONENT
"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import sections
const HeroSection = dynamic(() => import('./HeroSection'), {
  loading: () => <div className="h-[600px] skeleton" />,
  ssr: true
});

const IntroSection = dynamic(() => import('./IntroSection'), {
  loading: () => <div className="h-[300px] skeleton" />,
  ssr: true
});

const ServicesSection = dynamic(() => import('./ServicesSection'), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map(i => (
        <div key={i} className="h-64 skeleton" />
      ))}
    </div>
  ),
  ssr: false
});

const NewsEventsSlider = dynamic(() => import('./NewsEventsSlider'), {
  loading: () => <div className="h-[400px] skeleton" />,
  ssr: false
});

const Accreditations = dynamic(() => import('./Accreditations'), {
  loading: () => <div className="h-[200px] skeleton" />,
  ssr: false
});

export default function HomePage({ lang, content }) {
  const [isVisible, setIsVisible] = useState({
    hero: true,
    intro: true,
    services: false,
    news: false,
    accreditations: false
  });

  useEffect(() => {
    // Lazy load non-critical sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target.dataset.section;
            setIsVisible(prev => ({ ...prev, [section]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' }
    );

    // Observe sections
    ['services', 'news', 'accreditations'].forEach(section => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section data-section="hero">
        <HeroSection
          lang={lang}
          title={content.hero.title}
          description={content.hero.description}
          cta={content.hero.cta}
          secondaryCta={content.hero.secondaryCta}
        />
      </section>

      {/* Intro Section */}
      <section data-section="intro" className="py-16">
        <div className="container">
          <IntroSection
            lang={lang}
            title={content.intro.title}
            description={content.intro.description}
            features={content.intro.features}
          />
        </div>
      </section>

      {/* Services Section - Lazy loaded */}
      <section 
        id="services" 
        data-section="services" 
        className="py-16 bg-gray-50"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
          {isVisible.services && <ServicesSection lang={lang} />}
        </div>
      </section>

      {/* Accreditations - Lazy loaded */}
      <section 
        id="accreditations" 
        data-section="accreditations" 
        className="py-16"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {lang === 'ar' ? 'اعتماداتنا' : 'Our Accreditations'}
          </h2>
          {isVisible.accreditations && <Accreditations lang={lang} />}
        </div>
      </section>

      {/* News & Events - Lazy loaded */}
      <section 
        id="news" 
        data-section="news" 
        className="py-16 bg-gray-50"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {lang === 'ar' ? 'الأخبار والفعاليات' : 'News & Events'}
          </h2>
          {isVisible.news && <NewsEventsSlider lang={lang} />}
        </div>
      </section>
    </main>
  );
}