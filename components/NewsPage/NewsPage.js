// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   FaNewspaper,
//   FaCalendarAlt,
//   FaClock,
//   FaArrowRight,
//   FaExternalLinkAlt,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaChevronLeft,
//   FaChevronRight,
//   FaSearch,
//   FaFilter,
//   FaShareAlt,
//   FaBookmark
// } from "react-icons/fa";
// import styles from "./NewsPage.module.css";

// export default function NewsPage({ lang = "en" }) {
//   const currentLang = lang;
//   const router = useRouter();
//   const isRTL = currentLang === "ar";

//   const [activeFilter, setActiveFilter] = useState("all");
//   const [selectedNews, setSelectedNews] = useState(null);

//   // Content translations
//   const content = {
//     en: {
//       hero: {
//         title: "News & Updates",
//         subtitle: "Latest Announcements & Partnerships",
//         description: "Stay informed with the latest developments, partnerships, and achievements in geological, environmental, and meteorological services."
//       },
//       filters: {
//         title: "Browse by Category",
//         all: "All News",
//         announcements: "Announcements",
//         partnerships: "Partnerships",
//         projects: "Projects",
//         achievements: "Achievements",
//         events: "Events"
//       },
//       news: {
//         featured: "FEATURED NEWS",
//         latest: "LATEST UPDATES",
//         readMore: "Read More",
//         viewAll: "View All News",
//         share: "Share",
//         save: "Save"
//       },
//       social: {
//         title: "Follow Us",
//         subtitle: "Stay connected for real-time updates"
//       },
//       cta: {
//         title: "Stay Updated",
//         subtitle: "Subscribe to our newsletter for the latest news and insights",
//         button: "Subscribe Now"
//       }
//     },
//     ar: {
//       hero: {
//         title: "الأخبار والتحديثات",
//         subtitle: "أحدث الإعلانات والشراكات",
//         description: "ابقَ على اطلاع بأحدث التطورات والشراكات والإنجازات في الخدمات الجيولوجية والبيئية والأرصادية."
//       },
//       filters: {
//         title: "تصفح حسب الفئة",
//         all: "جميع الأخبار",
//         announcements: "الإعلانات",
//         partnerships: "الشراكات",
//         projects: "المشاريع",
//         achievements: "الإنجازات",
//         events: "الفعاليات"
//       },
//       news: {
//         featured: "الأخبار المميزة",
//         latest: "أحدث التحديثات",
//         readMore: "اقرأ المزيد",
//         viewAll: "عرض جميع الأخبار",
//         share: "مشاركة",
//         save: "حفظ"
//       },
//       social: {
//         title: "تابعنا",
//         subtitle: "ابقَ على اتصال للحصول على تحديثات فورية"
//       },
//       cta: {
//         title: "ابقَ محدثًا",
//         subtitle: "اشترك في نشرتنا الإخبارية للحصول على آخر الأخبار والرؤى",
//         button: "اشترك الآن"
//       }
//     }
//   };

//   const t = content[currentLang];

//   // News categories with colors
//   const categories = [
//     {
//       id: "all",
//       name: t.filters.all,
//       color: "#1e40af",
//       lightColor: "#dbeafe"
//     },
//     {
//       id: "announcements",
//       name: t.filters.announcements,
//       color: "#059669",
//       lightColor: "#d1fae5"
//     },
//     {
//       id: "partnerships",
//       name: t.filters.partnerships,
//       color: "#7c3aed",
//       lightColor: "#ede9fe"
//     },
//     {
//       id: "projects",
//       name: t.filters.projects,
//       color: "#0ea5e9",
//       lightColor: "#e0f2fe"
//     },
//     {
//       id: "achievements",
//       name: t.filters.achievements,
//       color: "#f59e0b",
//       lightColor: "#fef3c7"
//     },
//     {
//       id: "events",
//       name: t.filters.events,
//       color: "#ef4444",
//       lightColor: "#fee2e2"
//     }
//   ];

//   // News data (matching the screenshot content)
//   const newsData = [
//     {
//       id: 1,
//       title: isRTL ? "توقيع مذكرة تفاهم مع الشركة السعودية لتقنية المعلومات (سليت)" : "Signing of MoU with Saudi Company for Information Technology (SLET)",
//       category: "partnerships",
//       description: isRTL ? "إبرام المركز الوطني للرقابة على الالتزام البيئي مذكرة تفاهم مع الشركة السعودية لتقنية المعلومات (سليت) وذلك على هامش المؤتمر العالمي للبيئة." : "The National Center for Environmental Compliance has signed a Memorandum of Understanding with the Saudi Company for Information Technology (SLET) on the sidelines of the World Environment Conference.",
//       shortDescription: isRTL ? "شراكة استراتيجية لتطوير نظم الرقابة البيئية الذكية" : "Strategic partnership to develop smart environmental monitoring systems",
//       date: "2023-11-15",
//       time: isRTL ? "2:00 م" : "2:00 PM",
//       readTime: "3 min",
//       image: "/news/mou-signing.jpg",
//       featured: true,
//       source: isRTL ? "حساب المركز على منصة X" : "Center's account on X platform",
//       link: "#"
//     },
//     {
//       id: 2,
//       title: isRTL ? "تدشين وطني من تبوك إلى عسير لتطوير شبكات الاستجابة للكوارث" : "National Launch from Tabuk to Asir for Disaster Response Network Development",
//       category: "projects",
//       description: isRTL ? "أطلق المركز الوطني للرقابة على الالتزام البيئي شبكة وطنية للاستجابة السريعة للكوارث البيئية تغطي 30% من الخارطة الوطنية." : "The National Center for Environmental Compliance launched a national rapid response network for environmental disasters covering 30% of the national map.",
//       shortDescription: isRTL ? "شبكة استجابة سريعة تغطي 30% من المملكة" : "Rapid response network covering 30% of the Kingdom",
//       date: "2023-10-28",
//       time: isRTL ? "10:00 ص" : "10:00 AM",
//       readTime: "4 min",
//       image: "/news/disaster-response.jpg",
//       featured: true,
//       source: isRTL ? "الموقع الرسمي للمركز" : "Official Center Website",
//       link: "#"
//     },
//     {
//       id: 3,
//       title: isRTL ? "تركيب محطات رصد جوي متطورة في المنطقة الشرقية" : "Installation of Advanced Air Monitoring Stations in Eastern Region",
//       category: "projects",
//       description: isRTL ? "تم تركيب 15 محطة رصد جوي متطورة في المنطقة الشرقية لتقديم بيانات دقيقة عن جودة الهواء والانبعاثات." : "15 advanced air monitoring stations have been installed in the Eastern Region to provide accurate data on air quality and emissions.",
//       shortDescription: isRTL ? "15 محطة رصد جوي متطورة" : "15 advanced air monitoring stations",
//       date: "2023-09-20",
//       time: isRTL ? "11:30 ص" : "11:30 AM",
//       readTime: "2 min",
//       image: "/news/air-monitoring.jpg",
//       featured: false,
//       source: isRTL ? "وكالة الأنباء السعودية" : "Saudi Press Agency",
//       link: "#"
//     },
//     {
//       id: 4,
//       title: isRTL ? "فوز المركز بجائزة التميز البيئي على مستوى الخليج" : "Center Wins Gulf Environmental Excellence Award",
//       category: "achievements",
//       description: isRTL ? "حصل المركز الوطني للرقابة على الالتزام البيئي على جائزة التميز البيئي على مستوى دول الخليج العربي." : "The National Center for Environmental Compliance won the Environmental Excellence Award at the Gulf level.",
//       shortDescription: isRTL ? "جائزة التميز البيئي الخليجي" : "Gulf Environmental Excellence Award",
//       date: "2023-08-15",
//       time: isRTL ? "4:00 م" : "4:00 PM",
//       readTime: "3 min",
//       image: "/news/award-ceremony.jpg",
//       featured: false,
//       source: isRTL ? "المؤتمر الخليجي للبيئة" : "Gulf Environment Conference",
//       link: "#"
//     },
//     {
//       id: 5,
//       title: isRTL ? "إطلاق برنامج تدريبي للمراقبين البيئيين" : "Launch of Training Program for Environmental Monitors",
//       category: "announcements",
//       description: isRTL ? "أطلق المركز برنامجًا تدريبيًا متخصصًا لبناء قدرات المراقبين البيئيين في القطاعين العام والخاص." : "The Center launched a specialized training program to build the capacities of environmental monitors in both public and private sectors.",
//       shortDescription: isRTL ? "برنامج تدريبي للمراقبين البيئيين" : "Training program for environmental monitors",
//       date: "2023-07-10",
//       time: isRTL ? "9:00 ص" : "9:00 AM",
//       readTime: "2 min",
//       image: "/news/training-program.jpg",
//       featured: false,
//       source: isRTL ? "بوابة التوظيف الحكومية" : "Government Recruitment Portal",
//       link: "#"
//     },
//     {
//       id: 6,
//       title: isRTL ? "شراكة مع جامعة الملك عبدالله للعلوم والتقنية" : "Partnership with King Abdullah University of Science and Technology",
//       category: "partnerships",
//       description: isRTL ? "تعاون استراتيجي مع جامعة الملك عبدالله للعلوم والتقنية لتطوير حلول تكنولوجية للرقابة البيئية." : "Strategic cooperation with King Abdullah University of Science and Technology to develop technological solutions for environmental monitoring.",
//       shortDescription: isRTL ? "تعاون تكنولوجي مع جامعة الملك عبدالله" : "Technological cooperation with KAUST",
//       date: "2023-06-05",
//       time: isRTL ? "3:00 م" : "3:00 PM",
//       readTime: "4 min",
//       image: "/news/kaust-partnership.jpg",
//       featured: false,
//       source: isRTL ? "موقع جامعة الملك عبدالله" : "KAUST Website",
//       link: "#"
//     },
//     {
//       id: 7,
//       title: isRTL ? "تطوير نظام ذكي للكشف عن التسربات النفطية" : "Development of Smart System for Oil Spill Detection",
//       category: "projects",
//       description: isRTL ? "تم تطوير نظام ذكي يعتمد على الذكاء الاصطناعي للكشف المبكر عن التسربات النفطية في المناطق البحرية." : "An AI-based smart system has been developed for early detection of oil spills in marine areas.",
//       shortDescription: isRTL ? "نظام ذكي للكشف عن التسربات النفطية" : "Smart system for oil spill detection",
//       date: "2023-05-22",
//       time: isRTL ? "1:00 م" : "1:00 PM",
//       readTime: "3 min",
//       image: "/news/oil-spill-system.jpg",
//       featured: false,
//       source: isRTL ? "مجلة البيئة والتقنية" : "Environment & Technology Magazine",
//       link: "#"
//     },
//     {
//       id: 8,
//       title: isRTL ? "المؤتمر السنوي للرقابة البيئية 2023" : "Annual Environmental Monitoring Conference 2023",
//       category: "events",
//       description: isRTL ? "تنظيم المؤتمر السنوي للرقابة البيئية بمشاركة خبراء محليين ودوليين في مجال الرقابة والتقييم البيئي." : "Organization of the Annual Environmental Monitoring Conference with the participation of local and international experts in environmental monitoring and assessment.",
//       shortDescription: isRTL ? "المؤتمر السنوي للرقابة البيئية" : "Annual Environmental Monitoring Conference",
//       date: "2023-04-18",
//       time: isRTL ? "8:00 ص" : "8:00 AM",
//       readTime: "5 min",
//       image: "/news/annual-conference.jpg",
//       featured: false,
//       source: isRTL ? "موقع المؤتمر الرسمي" : "Official Conference Website",
//       link: "#"
//     }
//   ];

//   // Filter news based on active filter
//   const filteredNews = activeFilter === "all" 
//     ? newsData 
//     : newsData.filter(news => news.category === activeFilter);

//   const featuredNews = newsData.filter(news => news.featured);
//   const latestNews = newsData.slice(0, 6);

//   // Social media links
//   const socialLinks = [
//     { icon: <FaTwitter />, label: "Twitter", url: "#", color: "#1DA1F2" },
//     { icon: <FaLinkedin />, label: "LinkedIn", url: "#", color: "#0077B5" },
//     { icon: <FaInstagram />, label: "Instagram", url: "#", color: "#E4405F" }
//   ];

//   // Handle filter change
//   const handleFilterChange = (filterId) => {
//     setActiveFilter(filterId);
//   };

//   // Handle news click
//   const handleNewsClick = (news) => {
//     setSelectedNews(news);
//   };

//   return (
//     <div className={styles.container} dir={isRTL ? "rtl" : "ltr"}>
//       {/* Hero Section */}
//       <section className={styles.heroSection}>
//         <div className={styles.heroContainer}>
//           <div className={styles.heroContent}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className={styles.heroText}
//             >
//               <span className={styles.heroBadge}>
//                 {t.hero.subtitle}
//               </span>
//               <h1 className={styles.heroTitle}>
//                 {t.hero.title}
//               </h1>
//               <p className={styles.heroDescription}>
//                 {t.hero.description}
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className={styles.mainContent}>
//         <div className={styles.contentContainer}>
//           <div className={styles.contentLayout}>
//             {/* Left Column - Latest News */}
//             <div className={styles.leftColumn}>
//               {/* Filters */}
//               <div className={styles.filtersSection}>
//                 <h3 className={styles.filtersTitle}>
//                   <FaFilter className={styles.filterIcon} />
//                   {t.filters.title}
//                 </h3>
//                 <div className={styles.filtersGrid}>
//                   {categories.map((category) => (
//                     <motion.button
//                       key={category.id}
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className={`${styles.filterButton} ${activeFilter === category.id ? styles.active : ''}`}
//                       onClick={() => handleFilterChange(category.id)}
//                       style={{
//                         backgroundColor: activeFilter === category.id ? category.color : category.lightColor,
//                         color: activeFilter === category.id ? 'white' : category.color
//                       }}
//                     >
//                       {category.name}
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>

//               {/* Latest News Grid */}
//               <div className={styles.latestNewsSection}>
//                 <div className={styles.sectionHeader}>
//                   <h2 className={styles.sectionTitle}>
//                     {t.news.latest}
//                   </h2>
//                 </div>

//                 <div className={styles.newsGrid}>
//                   {filteredNews.map((news, index) => (
//                     <motion.article
//                       key={news.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       className={styles.newsCard}
//                       onClick={() => handleNewsClick(news)}
//                     >
//                       <div className={styles.newsImage}>
//                         <div 
//                           className={styles.newsCategory}
//                           style={{
//                             backgroundColor: categories.find(c => c.id === news.category).lightColor,
//                             color: categories.find(c => c.id === news.category).color
//                           }}
//                         >
//                           {categories.find(c => c.id === news.category).name}
//                         </div>
//                         <div className={styles.newsDate}>
//                           {news.date.split('-')[0]}
//                         </div>
//                       </div>

//                       <div className={styles.newsContent}>
//                         <h3 className={styles.newsTitle}>
//                           {news.title}
//                         </h3>
//                         <p className={styles.newsDescription}>
//                           {news.shortDescription}
//                         </p>

//                         <div className={styles.newsMeta}>
//                           <div className={styles.metaItem}>
//                             <FaCalendarAlt className={styles.metaIcon} />
//                             <span>{news.date}</span>
//                           </div>
//                           <div className={styles.metaItem}>
//                             <FaClock className={styles.metaIcon} />
//                             <span>{news.readTime} {isRTL ? "قراءة" : "read"}</span>
//                           </div>
//                         </div>

//                         <div className={styles.newsActions}>
//                           <button className={styles.readMoreButton}>
//                             {t.news.readMore}
//                             <FaArrowRight className={styles.buttonIcon} />
//                           </button>
//                           <div className={styles.actionButtons}>
//                             <button className={styles.actionButton}>
//                               <FaShareAlt />
//                             </button>
//                             <button className={styles.actionButton}>
//                               <FaBookmark />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.article>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Featured News & Social */}
//             <div className={styles.rightColumn}>
//               {/* Featured News */}
//               <div className={styles.featuredSection}>
//                 <div className={styles.sectionHeader}>
//                   <h2 className={styles.sectionTitle}>
//                     {t.news.featured}
//                   </h2>
//                 </div>

//                 <div className={styles.featuredNews}>
//                   {featuredNews.map((news, index) => (
//                     <motion.article
//                       key={news.id}
//                       initial={{ opacity: 0, x: 30 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.6, delay: index * 0.2 }}
//                       viewport={{ once: true }}
//                       className={styles.featuredCard}
//                       onClick={() => handleNewsClick(news)}
//                     >
//                       <div className={styles.featuredImage}>
//                         <div 
//                           className={styles.featuredBadge}
//                           style={{
//                             backgroundColor: categories.find(c => c.id === news.category).color
//                           }}
//                         >
//                           {categories.find(c => c.id === news.category).name}
//                         </div>
//                       </div>

//                       <div className={styles.featuredContent}>
//                         <h3 className={styles.featuredTitle}>
//                           {news.title}
//                         </h3>
//                         <p className={styles.featuredDescription}>
//                           {news.description}
//                         </p>

//                         <div className={styles.featuredMeta}>
//                           <div className={styles.metaItem}>
//                             <FaCalendarAlt className={styles.metaIcon} />
//                             <span>{news.date}</span>
//                           </div>
//                           <div className={styles.metaItem}>
//                             <span className={styles.source}>
//                               {news.source}
//                             </span>
//                           </div>
//                         </div>

//                         <button className={styles.featuredButton}>
//                           {t.news.readMore}
//                           <FaExternalLinkAlt className={styles.buttonIcon} />
//                         </button>
//                       </div>
//                     </motion.article>
//                   ))}
//                 </div>
//               </div>

//               {/* Social Media Section */}
//               <div className={styles.socialSection}>
//                 <div className={styles.socialHeader}>
//                   <h3 className={styles.socialTitle}>
//                     {t.social.title}
//                   </h3>
//                   <p className={styles.socialSubtitle}>
//                     {t.social.subtitle}
//                   </p>
//                 </div>

//                 <div className={styles.socialLinks}>
//                   {socialLinks.map((social, index) => (
//                     <motion.a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.4, delay: index * 0.1 }}
//                       viewport={{ once: true }}
//                       whileHover={{ scale: 1.1, y: -5 }}
//                       className={styles.socialLink}
//                       style={{ backgroundColor: social.color }}
//                     >
//                       {social.icon}
//                       <span className={styles.socialLabel}>{social.label}</span>
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className={styles.ctaSection}>
//         <div className={styles.ctaContainer}>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className={styles.ctaContent}
//           >
//             <div className={styles.ctaText}>
//               <h2 className={styles.ctaTitle}>
//                 {t.cta.title}
//               </h2>
//               <p className={styles.ctaSubtitle}>
//                 {t.cta.subtitle}
//               </p>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={styles.ctaButton}
//             >
//               {t.cta.button}
//               <FaArrowRight className={styles.buttonIcon} />
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }