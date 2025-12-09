"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Calendar, User } from "lucide-react";

export default function NewsCard({ news, lang }) {
  const router = useRouter();
  const isRTL = lang === "ar";

  const handleClick = () => {
    router.push(`/${lang}/news/${news.id}`);
  };

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
      onClick={handleClick}
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
        <button className="mt-6 w-full py-3 bg-green-50 text-green-700 font-semibold rounded-lg hover:bg-green-100 transition-colors">
          {isRTL ? "اقرأ المزيد" : "Read More"}
        </button>
      </div>
    </div>
  );
}