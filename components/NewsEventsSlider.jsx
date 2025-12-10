"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewsEventsSlider({ lang = "en" }) {
  const isRTL = lang === "ar";
  const router = useRouter();

  // Content based on language
  const content = {
    en: {
      title: "News & Events",
      subtitle: "Stay informed about the latest happenings, achievements, and announcements from UMT",
      readMore: "Read More",
      viewAll: "View All",
      newsItems: [
        {
          id: "umt-acca-global-workshop-2024",
          slug: "umt-acca-global-workshop-2024",
          title: "UMT ACCA Global Workshop 2024",
          description: "UMT conducted an exclusive ACCA workshop focusing on global accounting standards.",
          category: "Announcements",
          image: "/5.jpg",
        },
        {
          id: "umt-wins-academic-excellence-award",
          slug: "umt-wins-academic-excellence-award",
          title: "UMT Wins Academic Excellence Award",
          description: "UMT received national recognition for academic excellence and research innovation.",
          category: "University News",
          image: "/55.jpg",
        },
        {
          id: "student-achieves-top-national-rank",
          slug: "student-achieves-top-national-rank",
          title: "Student Achieves Top National Rank",
          description: "UMT student secures 1st position in nationwide talent examination.",
          category: "Achievements",
          image: "/bg-1.webp",
        },
        {
          id: "new-research-center-launch",
          slug: "new-research-center-launch",
          title: "New Research Center Launch",
          description: "UMT launches state-of-the-art research center for sustainable technologies.",
          category: "Research",
          image: "/5.jpg",
        },
        {
          id: "international-collaboration",
          slug: "international-collaboration",
          title: "International Collaboration",
          description: "UMT signs partnership with leading European university.",
          category: "Partnerships",
          image: "/55.jpg",
        },
        {
          id: "annual-career-fair-2024",
          slug: "annual-career-fair-2024",
          title: "Annual Career Fair 2024",
          description: "Over 100 companies participate in UMT's annual career fair.",
          category: "Events",
          image: "/bg-1.webp",
        },
      ]
    },
    ar: {
      title: "الأخبار والفعاليات",
      subtitle: "ابقَ على اطلاع بأحدث الأحداث والإنجازات والإعلانات من UMT",
      readMore: "اقرأ المزيد",
      viewAll: "عرض الكل",
      newsItems: [
        {
          id: "umt-acca-global-workshop-2024",
          slug: "umt-acca-global-workshop-2024",
          title: "ورشة عمل UMT ACCA العالمية 2024",
          description: "أجرت UMT ورشة عمل حصرية لـ ACCA تركز على معايير المحاسبة العالمية.",
          category: "الإعلانات",
          image: "/5.jpg",
        },
        {
          id: "umt-wins-academic-excellence-award",
          slug: "umt-wins-academic-excellence-award",
          title: "UMT تفوز بجائزة التميز الأكاديمي",
          description: "حصلت UMT على اعتراف وطني للتميز الأكاديمي والابتكار البحثي.",
          category: "أخبار الجامعة",
          image: "/55.jpg",
        },
        {
          id: "student-achieves-top-national-rank",
          slug: "student-achieves-top-national-rank",
          title: "طالب يحقق المركز الأول على المستوى الوطني",
          description: "حقق طالب UMT المركز الأول في الامتحان الوطني للمواهب.",
          category: "الإنجازات",
          image: "/bg-1.webp",
        },
        {
          id: "new-research-center-launch",
          slug: "new-research-center-launch",
          title: "إطلاق مركز بحثي جديد",
          description: "تطلق UMT مركزًا بحثيًا حديثًا للتقنيات المستدامة.",
          category: "البحث",
          image: "/5.jpg",
        },
        {
          id: "international-collaboration",
          slug: "international-collaboration",
          title: "تعاون دولي",
          description: "توقع UMT شراكة مع جامعة أوروبية رائدة.",
          category: "الشراكات",
          image: "/55.jpg",
        },
        {
          id: "annual-career-fair-2024",
          slug: "annual-career-fair-2024",
          title: "معرض التوظيف السنوي 2024",
          description: "يشارك أكثر من 100 شركة في معرض التوظيف السنوي لـ UMT.",
          category: "الفعاليات",
          image: "/bg-1.webp",
        },
      ]
    }
  };

  const t = content[lang] || content.en;
  const slides = t.newsItems;

  // Handle Read More click
  const handleReadMore = (slug) => {
    router.push(`/${lang}/news/${slug}`);
  };

  // Handle View All click
  const handleViewAll = () => {
    router.push(`/${lang}/news`);
  };

  // Handle card click (entire card is clickable)
  const handleCardClick = (slug) => {
    router.push(`/${lang}/news/${slug}`);
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-green-50 to-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className={`text-center mb-12 ${isRTL ? "font-['Cairo']" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Multi-Card Slider Container */}
        <div className="NewsSlider_container">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
            }}
            loop={true}
            className="NewsSlider_slideContainer"
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="NewsSlider_slide">
                {/* Single Card Design */}
                <div 
                  className="NewsSlider_card cursor-pointer"
                  onClick={() => handleCardClick(slide.slug)}
                >
                  {/* Image Section */}
                  <div className="NewsSlider_cardImageContainer">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="NewsSlider_cardImage"
                      priority={index === 0}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="NewsSlider_cardCategoryBadge">
                    {slide.category}
                  </div>

                  {/* Content Section */}
                  <div className="NewsSlider_cardContent" style={{ direction: isRTL ? "rtl" : "ltr" }}>
                    {/* Title */}
                    <h3 className="NewsSlider_cardTitle">
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p className="NewsSlider_cardDescription">
                      {slide.description}
                    </p>

                    {/* Read More Button */}
                    <button 
                      className="NewsSlider_cardReadMore"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click
                        handleReadMore(slide.slug);
                      }}
                    >
                      <span>{t.readMore}</span>
                      <ChevronRight 
                        size={16} 
                        style={{ 
                          transform: isRTL ? "rotate(180deg)" : "none" 
                        }}
                      />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          {/* <div className="swiper-pagination mt-8"></div> */}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          {/* <button 
            className="NewsSlider_viewAllButton"
            onClick={handleViewAll}
          >
            {t.viewAll}
          </button> */}
        </div>
      </div>

      <style jsx>{`
        .NewsSlider_container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .NewsSlider_card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .NewsSlider_card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .NewsSlider_cardImageContainer {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .NewsSlider_cardImage {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .NewsSlider_card:hover .NewsSlider_cardImage {
          transform: scale(1.05);
        }

        .NewsSlider_cardCategoryBadge {
          position: absolute;
          top: 1rem;
          ${isRTL ? "right" : "left"}: 1rem;
          background: #059669;
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 10;
        }

        .NewsSlider_cardContent {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .NewsSlider_cardTitle {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.3;
          color: #111827;
          margin: 0;
          text-align: ${isRTL ? "right" : "left"};
        }

        .NewsSlider_cardDescription {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #6b7280;
          margin: 0;
          text-align: ${isRTL ? "right" : "left"};
        }

        .NewsSlider_cardReadMore {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #059669;
          font-weight: 600;
          font-size: 0.9rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem 0;
          transition: all 0.2s;
          width: fit-content;
          margin-top: 0.5rem;
          flex-direction: ${isRTL ? "row-reverse" : "row"};
          position: relative;
          z-index: 20;
        }

        .NewsSlider_cardReadMore:hover {
          gap: 0.75rem;
          color: #047857;
        }

        /* Pagination Dots */
        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #059669;
          width: 30px;
          border-radius: 5px;
        }

        /* View All Button */
        .NewsSlider_viewAllButton {
          background: #059669;
          color: white;
          font-weight: 600;
          padding: 0.875rem 2.5rem;
          border-radius: 2rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 1rem;
          box-shadow: 0 4px 6px -1px rgba(5, 150, 105, 0.3);
          font-family: ${isRTL ? "'Cairo', sans-serif" : "inherit"};
        }

        .NewsSlider_viewAllButton:hover {
          background: #047857;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px -1px rgba(5, 150, 105, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .NewsSlider_cardImageContainer {
            height: 180px;
          }

          .NewsSlider_cardContent {
            padding: 1.25rem;
          }

          .NewsSlider_cardTitle {
            font-size: 1.1rem;
          }

          .NewsSlider_cardDescription {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 480px) {
          .NewsSlider_cardImageContainer {
            height: 160px;
          }

          .NewsSlider_cardContent {
            padding: 1rem;
          }

          .NewsSlider_cardTitle {
            font-size: 1rem;
          }

          .NewsSlider_cardDescription {
            font-size: 0.8rem;
          }

          .NewsSlider_cardCategoryBadge {
            font-size: 0.7rem;
            padding: 0.3rem 0.75rem;
          }

          .NewsSlider_viewAllButton {
            padding: 0.75rem 2rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}