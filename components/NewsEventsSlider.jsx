"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function NewsEventsSlider() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", color: "#059669" },
    { name: "Announcements", color: "#10B981" },
    { name: "University News", color: "#059669" },
    { name: "Achievements", color: "#D97706" },
  ];

  const slides = [
    {
      title: "UMT ACCA Global Workshop 2024",
      description:
        "UMT conducted an exclusive ACCA workshop focusing on global accounting standards and practical case studies. Industry experts shared insights on emerging trends.",
      date: "Dec 15, 2024",
      time: "10:00 AM - 4:00 PM",
      category: "Announcements",
      readTime: "3 min read",
      image: "/5.jpg",
      features: [
        "Global Accounting Standards",
        "Practical Case Studies",
        "Industry Expert Insights",
        "Networking Opportunities",
      ],
    },
    {
      title: "UMT Wins Academic Excellence Award",
      description:
        "UMT received national recognition for academic excellence and research innovation at the annual education summit, competing against top institutions.",
      date: "Nov 28, 2024",
      time: "2:00 PM",
      category: "University News",
      readTime: "4 min read",
      image: "/55.jpg",
      features: [
        "National Recognition",
        "Research Innovation",
        "Academic Excellence",
        "Education Summit",
      ],
    },
    {
      title: "Student Achieves Top National Rank",
      description:
        "UMT student secures 1st position in nationwide talent examination among 5000+ participants, showcasing exceptional academic prowess.",
      date: "Nov 15, 2024",
      time: "11:00 AM",
      category: "Achievements",
      readTime: "2 min read",
      image: "/bg-1.webp",
      features: [
        "National Talent Exam",
        "1st Position",
        "5000+ Participants",
        "Academic Excellence",
      ],
    },
  ];

  const filteredSlides =
    activeCategory === "All"
      ? slides
      : slides.filter((slide) => slide.category === activeCategory);

  const getCategoryColor = (categoryName) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.color || "#059669";
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-green-50 to-white"
      dir="ltr"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-green-700">
              LATEST UPDATES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News & <span className="text-green-600">Events</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest happenings, achievements, and
            announcements from UMT
          </p>
        </div>

        {/* Perfectly Centered Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
          <div className="w-full flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-3 bg-white/50 backdrop-blur-sm p-2 rounded-2xl border border-green-100 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.name
                      ? "shadow-lg transform scale-105"
                      : "bg-white shadow-sm hover:shadow-md border border-gray-200"
                  }`}
                  style={{
                    backgroundColor:
                      activeCategory === category.name ? category.color : "white",
                    color: activeCategory === category.name ? "white" : "#4B5563",
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Centered Slider Container */}
        <div className="NewsSlider_container">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="NewsSlider_slideContainer"
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
          >
            {filteredSlides.map((slide, index) => (
              <SwiperSlide key={index} className="NewsSlider_slide">
                <div className="NewsSlider_slideContent">
                  {/* Content Section */}
                  <div className="NewsSlider_left">
                    <div
                      className="NewsSlider_badge"
                      style={{
                        backgroundColor: getCategoryColor(slide.category),
                      }}
                    >
                      {slide.category}
                    </div>

                    <h2 className="NewsSlider_title">{slide.title}</h2>

                    <p className="NewsSlider_description">
                      {slide.description}
                    </p>

                    {/* Date & Time */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={18} className="text-green-600" />
                        <span className="text-sm font-medium">
                          {slide.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={18} className="text-green-600" />
                        <span className="text-sm font-medium">
                          {slide.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-sm font-medium opacity-75">
                          • {slide.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="NewsSlider_featuresGrid">
                      {slide.features.map((feature, i) => (
                        <div key={i} className="NewsSlider_featureItem">
                          <div className="NewsSlider_featureIcon">
                            <ChevronRight size={16} />
                          </div>
                          <div className="NewsSlider_featureText">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <button className="NewsSlider_readMore">
                      <span>Read Full Story</span>
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Image Section */}
                  <div className="NewsSlider_right">
                    <div className="NewsSlider_imageContainer">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="NewsSlider_image"
                        priority={index === 0}
                      />
                      <div className="NewsSlider_imageOverlay"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="NewsSlider_viewAllButton">
            View All News & Events
          </button>
        </div>
      </div>

      <style jsx>{`
        .NewsSlider_container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        .NewsSlider_slideContainer {
          margin: 0 auto;
        }

        .NewsSlider_slide {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 600px;
        }

        .NewsSlider_slideContent {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem;
          background: white;
          border-radius: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e5e7eb;
        }

        .NewsSlider_left {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .NewsSlider_badge {
          background: #f3f4f6;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: inline-block;
          width: fit-content;
        }

        .NewsSlider_title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #111827;
          margin: 0;
        }

        .NewsSlider_description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #6b7280;
          margin: 0;
        }

        .NewsSlider_featuresGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1rem 0;
        }

        .NewsSlider_featureItem {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .NewsSlider_featureIcon {
          background: #059669;
          color: white;
          border-radius: 50%;
          width: 1.5rem;
          height: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          flex-shrink: 0;
        }

        .NewsSlider_featureText {
          font-size: 0.95rem;
          color: #374151;
          line-height: 1.4;
          font-weight: 500;
        }

        .NewsSlider_readMore {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #059669;
          font-weight: 600;
          font-size: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem 0;
          transition: all 0.2s;
          width: fit-content;
        }

        .NewsSlider_readMore:hover {
          gap: 0.75rem;
          color: #047857;
        }

        .NewsSlider_right {
          position: relative;
          width: 100%;
          height: 450px;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.15);
        }

        .NewsSlider_imageContainer {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .NewsSlider_image {
          object-fit: cover;
          border-radius: 1rem;
          transition: transform 0.7s ease;
        }

        .NewsSlider_imageOverlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.1),
            transparent 30%
          );
          border-radius: 1rem;
        }

        /* View All Button */
        .NewsSlider_viewAllButton {
          background: #059669;
          color: white;
          font-weight: 600;
          padding: 1rem 2.5rem;
          border-radius: 2rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 1rem;
          box-shadow: 0 4px 6px -1px rgba(5, 150, 105, 0.3);
        }

        .NewsSlider_viewAllButton:hover {
          background: #047857;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px -1px rgba(5, 150, 105, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .NewsSlider_slideContent {
            max-width: 900px;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .NewsSlider_slideContent {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 1.5rem;
            max-width: 600px;
          }

          .NewsSlider_title {
            font-size: 2rem;
          }

          .NewsSlider_description {
            font-size: 1rem;
          }

          .NewsSlider_featuresGrid {
            grid-template-columns: 1fr;
          }

          .NewsSlider_right {
            height: 350px;
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .NewsSlider_title {
            font-size: 1.75rem;
          }

          .NewsSlider_description {
            font-size: 0.9rem;
          }

          .NewsSlider_badge {
            font-size: 0.75rem;
            padding: 0.4rem 1rem;
          }

          .NewsSlider_viewAllButton {
            padding: 0.75rem 2rem;
            font-size: 0.9rem;
          }

          .NewsSlider_right {
            height: 250px;
          }

          .NewsSlider_slideContent {
            padding: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}