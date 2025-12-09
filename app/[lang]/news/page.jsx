"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

// Define news data
const newsData = {
  en: [
    {
      id: "umt-acca-global-workshop-2024",
      slug: "umt-acca-global-workshop-2024",
      title: "UMT ACCA Global Workshop 2024",
      description: "UMT conducted an exclusive ACCA workshop focusing on global accounting standards.",
      category: "Announcements",
      image: "/5.jpg",
      date: "March 15, 2024",
      author: "John Smith",
    },
    {
      id: "umt-wins-academic-excellence-award",
      slug: "umt-wins-academic-excellence-award",
      title: "UMT Wins Academic Excellence Award",
      description: "UMT received national recognition for academic excellence and research innovation.",
      category: "University News",
      image: "/55.jpg",
      date: "February 28, 2024",
      author: "Sarah Johnson",
    },
    // Add more news items...
  ],
  ar: [
    {
      id: "umt-acca-global-workshop-2024",
      slug: "umt-acca-global-workshop-2024",
      title: "ورشة عمل UMT ACCA العالمية 2024",
      description: "أجرت UMT ورشة عمل حصرية لـ ACCA تركز على معايير المحاسبة العالمية.",
      category: "الإعلانات",
      image: "/5.jpg",
      date: "15 مارس 2024",
      author: "جون سميث",
    },
    // Add more Arabic news items...
  ]
};

export default function NewsListPage() {
  const params = useParams();
  const router = useRouter();
  const { lang } = params;
  const isRTL = lang === "ar";

  const newsItems = newsData[lang] || newsData.en;

  const handleNewsClick = (slug) => {
    router.push(`/${lang}/news/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {isRTL ? "جميع الأخبار" : "All News"}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL ? "تصفح جميع أخبارنا وأحدث التحديثات" : "Browse all our news and latest updates"}
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <div 
              key={news.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => handleNewsClick(news.slug)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {news.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{news.author}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold">
                  <span>{isRTL ? "اقرأ المزيد" : "Read More"}</span>
                  <ArrowRight 
                    size={16} 
                    className="group-hover:translate-x-1 transition-transform"
                    style={{ transform: isRTL ? "rotate(180deg)" : "none" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {newsItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              {isRTL ? "لا توجد أخبار متاحة حالياً" : "No news available at the moment"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}