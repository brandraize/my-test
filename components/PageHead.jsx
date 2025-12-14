"use client";

export default function PageHead({ lang }) {
  const content = {
    en: {
      title: "Sensing Nature | Environmental & Geological Solutions",
      description: "Innovative environmental, geological, geophysical & meteorological solutions with accurate insights using latest techniques.",
      keywords: "environmental services, geological solutions, geophysical surveys, meteorological services, sensing nature, sustainable development",
    },
    ar: {
      title: " إستشعار الطبيعة | حلول بيئية وجيولوجية",
      description: "حلول بيئية وجيولوجية وجيوفيزيائية وأرصاد جوية مبتكرة مع رؤى دقيقة باستخدام أحدث التقنيات",
      keywords: "خدمات بيئية, حلول جيولوجية, مسوحات جيوفيزيائية, خدمات أرصاد جوية, سينسينغ نيتشر, تنمية مستدامة",
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
      
      {/* Performance optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://brandraize-f2864.firebaseapp.com" />
      <link rel="dns-prefetch" href="https://www.googleapis.com" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
    </>
  );
}