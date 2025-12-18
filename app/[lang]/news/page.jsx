"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NewsPage() {
  const params = useParams();
  const router = useRouter();
  const { lang } = params;
  const isRTL = lang === "ar";

  const [newsEvents, setNewsEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchNewsEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/news-events");
        const result = await response.json();
        if (result.success) {
          setNewsEvents(result.data);
        }
      } catch (error) {
        console.error("Error fetching news & events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsEvents();
  }, []);

  const content = {
    en: {
      title: "News & Events",
      subtitle: "Stay updated with our latest news, events, and announcements",
      all: "All",
      loading: "Loading...",
      noNews: "No news available at the moment",
      readMore: "Read More",
    },
    ar: {
      title: "الأخبار والفعاليات",
      subtitle: "ابقَ على اطلاع بأحدث الأخبار والفعاليات والإعلانات",
      all: "الكل",
      loading: "جاري التحميل...",
      noNews: "لا توجد أخبار متاحة في الوقت الحالي",
      readMore: "اقرأ المزيد",
    }
  };

  const t = content[lang] || content.en;

  // Get unique categories
  const categories = ["all", ...new Set(newsEvents.map(item => item.category[lang] || item.category.en))];

  // Filter news by category
  const filteredNews = filter === "all" 
    ? newsEvents 
    : newsEvents.filter(item => (item.category[lang] || item.category.en) === filter);

  const handleCardClick = (slug) => {
    router.push(`/${lang}/news/${slug}`);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div
          className="min-vh-100 d-flex align-items-center justify-content-center"
          style={{ paddingTop: "80px", backgroundColor: "#f9fafb" }}
        >
          <p>{t.loading}</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f9fafb",
          paddingTop: "100px",
          paddingBottom: "60px",
          direction: isRTL ? "rtl" : "ltr",
        }}
      >
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <h1
              className="fw-bold mb-3"
              style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#111827" }}
            >
              {t.title}
            </h1>
            <p className="text-muted" style={{ fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
              {t.subtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className="d-flex justify-content-center mb-5 flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className="btn"
                style={{
                  backgroundColor: filter === category ? "#059669" : "white",
                  color: filter === category ? "white" : "#374151",
                  border: `1px solid ${filter === category ? "#059669" : "#e5e7eb"}`,
                  borderRadius: "20px",
                  padding: "8px 20px",
                  fontWeight: "500",
                  transition: "all 0.3s",
                }}
              >
                {category === "all" ? t.all : category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          {filteredNews.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">{t.noNews}</p>
            </div>
          ) : (
            <div className="row g-4">
              {filteredNews.map((item, index) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-4">
                  <div
                    className="card h-100 shadow-sm"
                    style={{
                      border: "none",
                      borderRadius: "16px",
                      overflow: "hidden",
                      cursor: "pointer",
                      transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                    onClick={() => handleCardClick(item.slug)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    {/* Image */}
                    {item.image && (
                      <div style={{ position: "relative", width: "100%", height: "220px" }}>
                        <Image
                          src={item.image}
                          alt={item.title[lang] || item.title.en}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading={index < 6 ? "eager" : "lazy"}
                          unoptimized
                        />
                        {/* Category Badge */}
                        <div
                          style={{
                            position: "absolute",
                            top: "12px",
                            [isRTL ? "right" : "left"]: "12px",
                            backgroundColor: "#059669",
                            color: "white",
                            padding: "6px 14px",
                            borderRadius: "16px",
                            fontSize: "12px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.category[lang] || item.category.en}
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="card-body p-4">
                      <h3
                        className="card-title fw-bold mb-2"
                        style={{
                          fontSize: "18px",
                          color: "#111827",
                          lineHeight: "1.4",
                          textAlign: isRTL ? "right" : "left",
                        }}
                      >
                        {item.title[lang] || item.title.en}
                      </h3>

                      <p
                        className="card-text text-muted mb-3"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.6",
                          textAlign: isRTL ? "right" : "left",
                        }}
                      >
                        {(item.description[lang] || item.description.en)?.replace(/<[^>]*>/g, '').substring(0, 150)}...
                      </p>

                      {/* Date & Read More */}
                      <div
                        className="d-flex align-items-center justify-content-between"
                        style={{ fontSize: "13px", color: "#6b7280" }}
                      >
                        {item.event_date && (
                          <div className="d-flex align-items-center gap-1">
                            <Calendar size={14} />
                            <span>
                              {new Date(item.event_date).toLocaleDateString(
                                isRTL ? "ar-SA" : "en-US",
                                { year: "numeric", month: "short", day: "numeric" }
                              )}
                            </span>
                          </div>
                        )}
                        <span
                          style={{
                            color: "#059669",
                            fontWeight: "600",
                            fontSize: "14px",
                          }}
                        >
                          {t.readMore} →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

            </p>

            {/* Full Content with proper formatting */}
            <div className="text-gray-700 space-y-6">
              {newsItem.fullContent.split('\n\n').map((paragraph, index) => {
                // Check if paragraph starts with bullet points or "Key Highlights"
                if (paragraph.includes('•') || 
                    paragraph.toLowerCase().includes('key highlights') ||
                    paragraph.toLowerCase().includes('achievements recognized')) {
                  return (
                    <div key={index} className="space-y-3">
                      {paragraph.split('\n').map((line, lineIndex) => {
                        if (line.trim().startsWith('•')) {
                          return (
                            <div key={lineIndex} className="flex items-start gap-3">
                              <span className="text-green-600 mt-1">•</span>
                              <span className="flex-1">{line.replace('•', '').trim()}</span>
                            </div>
                          );
                        }
                        return (
                          <p key={lineIndex} className="font-semibold text-lg text-gray-900">
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  );
                }
                return (
                  <p key={index} className="leading-relaxed text-gray-700">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Tag size={20} className="text-gray-600" />
                <span className="font-semibold text-gray-900">
                  {isRTL ? "الكلمات المفتاحية:" : "Tags:"}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {newsItem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-700 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}