'use client';

import { useState, useEffect } from 'react';
import './MarketLeader.css';

const Market = ({ lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      title: lang === 'ar' ? "لماذا يثق بنا رواد السوق" : "Why Market Leaders Trust Us",
      subtitle: lang === 'ar' 
        ? "اعمل مع الفريق الذي جعل كاياك محرك بحث رائد في مجال السفر" 
        : "Work with the Team that Made KAYAK into a Leading Travel Search Engine",
      stats: [
        { 
          value: "50M+", 
          label: lang === 'ar' ? "مسافر تم خدمتهم حول العالم" : "Travelers Served Worldwide" 
        },
        { 
          value: "17+ Years", 
          label: lang === 'ar' ? "في صناعة تكنولوجيا السفر" : "In the Travel Tech Industry" 
        }
      ]
    },
    {
      id: 2,
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      title: lang === 'ar' ? "سجل حافل بالإنجازات" : "Proven Track Record",
      subtitle: lang === 'ar' 
        ? "تقديم التميز عبر صناعات متعددة" 
        : "Delivering Excellence Across Multiple Industries",
      stats: [
        { 
          value: "800+", 
          label: lang === 'ar' ? "مشروع مكتمل" : "Projects Completed" 
        },
        { 
          value: "15+", 
          label: lang === 'ar' ? "دولة تم خدمتها" : "Countries Served" 
        }
      ]
    },
    {
      id: 3,
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      title: lang === 'ar' ? "مدفوع بالابتكار" : "Innovation Driven",
      subtitle: lang === 'ar' 
        ? "دفع الحدود باستخدام أحدث التقنيات" 
        : "Pushing Boundaries with Cutting-Edge Technology",
      stats: [
        { 
          value: "50K+", 
          label: lang === 'ar' ? "عميل راضٍ" : "Satisfied Clients" 
        },
        { 
          value: "24/7", 
          label: lang === 'ar' ? "دعم متاح" : "Support Available" 
        }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="market-leader-section">
      <div className="market-leader-container">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ background: slide.background }}
            >
              <div className="slide-content">
                <div className="text-content">
                  <h2 className="slide-title">{slide.title}</h2>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                  
                  <div className="stats-container">
                    {slide.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="stat-item">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="slide-image">
                  <div className="placeholder-image">
                    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                      <circle cx="100" cy="100" r="80" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                      <path d="M70 100 L130 100 M100 70 L100 130" stroke="rgba(255,255,255,0.5)" strokeWidth="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow prev-arrow" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="nav-arrow next-arrow" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="dots-container">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Market;