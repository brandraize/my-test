"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { useEffect, useState } from "react";

// Define all news data in a separate file or here
const allNewsData = {
  en: {
    "umt-acca-global-workshop-2024": {
      id: "umt-acca-global-workshop-2024",
      slug: "umt-acca-global-workshop-2024",
      title: "UMT ACCA Global Workshop 2024",
      description: "UMT conducted an exclusive ACCA workshop focusing on global accounting standards.",
      category: "Announcements",
      image: "/5.jpg",
      fullContent: `UMT recently conducted a comprehensive ACCA Global Workshop 2024, bringing together accounting professionals and students from around the world. The workshop focused on the latest developments in global accounting standards, with special emphasis on IFRS updates and their implementation challenges.

Key Highlights:
• In-depth sessions on IFRS 9, 15, and 16
• Panel discussions with industry leaders
• Hands-on training with real-world case studies
• Networking opportunities with global accounting professionals

The event was attended by over 300 participants from 15 different countries, making it one of the largest accounting workshops in the region this year.`,
      date: "March 15, 2024",
      author: "John Smith",
      tags: ["ACCA", "Workshop", "Accounting", "Global Standards"]
    },
    "umt-wins-academic-excellence-award": {
      id: "umt-wins-academic-excellence-award",
      slug: "umt-wins-academic-excellence-award",
      title: "UMT Wins Academic Excellence Award",
      description: "UMT received national recognition for academic excellence and research innovation.",
      category: "University News",
      image: "/55.jpg",
      fullContent: `The University of Management and Technology (UMT) has been honored with the prestigious National Academic Excellence Award for 2024. This recognition comes as a result of UMT's outstanding performance in academic innovation, research output, and student success rates.

Achievements Recognized:
• 95% graduate employment rate
• 200+ research papers published in 2023
• 15 national research grants secured
• Implementation of innovative teaching methodologies

The award ceremony took place at the National Education Convention, where UMT was praised for its commitment to academic excellence and its contribution to the national education landscape.`,
      date: "February 28, 2024",
      author: "Sarah Johnson",
      tags: ["Award", "Excellence", "Academic", "Recognition"]
    },
    "student-achieves-top-national-rank": {
      id: "student-achieves-top-national-rank",
      slug: "student-achieves-top-national-rank",
      title: "Student Achieves Top National Rank",
      description: "UMT student secures 1st position in nationwide talent examination.",
      category: "Achievements",
      image: "/bg-1.webp",
      fullContent: `Sarah Ahmed, a final year Computer Science student at UMT, has secured the first position in the nationwide talent examination conducted by the Ministry of Education. The exam, which attracted over 50,000 participants from universities across the country, tested students on various aspects including critical thinking, problem-solving, and technical knowledge.

Sarah's achievement is a testament to UMT's commitment to academic excellence and holistic student development. Her success has brought pride not only to UMT but also to the entire region.`,
      date: "January 20, 2024",
      author: "Michael Chen",
      tags: ["Student", "Achievement", "Ranking", "Examination"]
    },
    // Add other news items...
  },
  ar: {
    "umt-acca-global-workshop-2024": {
      id: "umt-acca-global-workshop-2024",
      slug: "umt-acca-global-workshop-2024",
      title: "ورشة عمل UMT ACCA العالمية 2024",
      description: "أجرت UMT ورشة عمل حصرية لـ ACCA تركز على معايير المحاسبة العالمية.",
      category: "الإعلانات",
      image: "/5.jpg",
      fullContent: `نظمت UMT مؤخرًا ورشة عمل ACCA العالمية الشاملة 2024، حيث جمعت محترفين وطلاب محاسبة من جميع أنحاء العالم. ركزت الورشة على أحدث التطورات في معايير المحاسبة العالمية، مع التركيز بشكل خاص على تحديثات المعايير الدولية للتقارير المالية وتحديات تنفيذها.

أبرز النقاط:
• جلسات متعمقة حول المعايير الدولية للتقارير المالية 9 و15 و16
• مناقشات مع قادة الصناعة
• تدريب عملي مع دراسات حالة من العالم الحقيقي
• فرص التواصل مع محترفي المحاسبة العالميين

حضر الحدث أكثر من 300 مشارك من 15 دولة مختلفة، مما جعله أحد أكبر ورش عمل المحاسبة في المنطقة هذا العام.`,
      date: "15 مارس 2024",
      author: "جون سميث",
      tags: ["ACCA", "ورشة عمل", "محاسبة", "معايير عالمية"]
    },
    "umt-wins-academic-excellence-award": {
      id: "umt-wins-academic-excellence-award",
      slug: "umt-wins-academic-excellence-award",
      title: "UMT تفوز بجائزة التميز الأكاديمي",
      description: "حصلت UMT على اعتراف وطني للتميز الأكاديمي والابتكار البحثي.",
      category: "أخبار الجامعة",
      image: "/55.jpg",
      fullContent: `تم تكريم جامعة الإدارة والتكنولوجيا (UMT) بجائزة التميز الأكاديمي الوطنية المرموقة لعام 2024. يأتي هذا التقدير نتيجة لأداء UMT المتميز في الابتكار الأكاديمي، والإنتاج البحثي، ومعدلات نجاح الطلاب.

الإنجازات المعترف بها:
• معدل توظيف الخريجين 95٪
• نشر أكثر من 200 ورقة بحثية في عام 2023
• تأمين 15 منحة بحثية وطنية
• تنفيذ منهجيات تدريس مبتكرة

أقيم حفل توزيع الجوائز في المؤتمر الوطني للتعليم، حيث تم الإشادة بـ UMT لالتزامها بالتميز الأكاديمي وإسهامها في المشهد التعليمي الوطني.`,
      date: "28 فبراير 2024",
      author: "سارة جونسون",
      tags: ["جائزة", "تميز", "أكاديمي", "اعتراف"]
    },
    // Add other Arabic news items...
  }
};

export default function SingleNewsPage() {
  const params = useParams();
  const router = useRouter();
  const { lang, slug } = params;
  const isRTL = lang === "ar";
  
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple data fetch without API
    setTimeout(() => {
      const data = allNewsData[lang]?.[slug] || allNewsData.en?.[slug];
      if (data) {
        setNewsItem(data);
      } else {
        // Redirect to news list if not found
        router.push(`/${lang}/news`);
      }
      setLoading(false);
    }, 100);
  }, [slug, lang, router]);

  const handleBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            {isRTL ? "جاري تحميل..." : "Loading..."}
          </p>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white" dir={isRTL ? "rtl" : "ltr"}>
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-green-700 transition-colors mb-8"
        >
          <ArrowLeft 
            size={20} 
            style={{ transform: isRTL ? "rotate(180deg)" : "none" }} 
          />
          <span>{isRTL ? "العودة" : "Go Back"}</span>
        </button>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 pb-16 max-w-4xl">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            {newsItem.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {newsItem.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{newsItem.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{newsItem.author}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Description */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {newsItem.description}
        </p>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {newsItem.fullContent.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="border-t border-gray-200 pt-8">
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
                className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}