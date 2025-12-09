"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMountain,
  FaSatelliteDish,
  FaLeaf,
  FaCloudSunRain,
  FaArrowRight,
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaIndustry,
  FaFilter,
  FaTimes,
  FaEye,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaGlobeAmericas,
  FaWater,
  FaOilCan,
  FaSeedling,
  FaWind,
  FaHardHat,
  FaCheckCircle,
  FaClipboardList,
  FaGem,
  FaMap,
  FaChartLine,
  FaBuilding,
  FaCity,
  FaTruck,
  FaToolbox,
  FaCertificate
} from "react-icons/fa";
import styles from "./ProjectsPage.module.css";

export default function ProjectsPage({ lang = "en" }) {
  const currentLang = lang;
  const router = useRouter();
  const isRTL = currentLang === "ar";

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const projectsPerPage = 6;

  // Complete content translations including project data
  const content = {
    en: {
      hero: {
        title: "Project Portfolio",
        subtitle: "Case Studies & Success Stories",
        description: "Explore our comprehensive portfolio showcasing successful projects across geological, geophysical, environmental, and meteorological services."
      },
      filters: {
        title: "Filter by Category",
        all: "All Projects",
        geological: "Geological Services",
        geophysical: "Geophysical Surveys",
        environmental: "Environmental Solutions",
        meteorological: "Meteorological Services"
      },
      stats: {
        title: "Our Achievements",
        subtitle: "Trusted Excellence",
        completed: "Projects Completed",
        countries: "Countries Served",
        clients: "Satisfied Clients",
        years: "Years Experience"
      },
      cta: {
        title: "Start Your Project Today",
        subtitle: "Partner with us for expert geological, environmental, and meteorological solutions tailored to your needs.",
        button: "Contact Our Team"
      },
      projectDetails: {
        close: "Close",
        viewDetails: "View Details",
        services: "Services Provided",
        location: "Location",
        duration: "Duration",
        client: "Client",
        challenge: "Project Challenge",
        solution: "Our Solution",
        results: "Key Results",
        description: "Project Overview"
      },
      noProjects: {
        title: "No Projects Found",
        message: "Try selecting a different category"
      },
      pagination: {
        previous: "Previous",
        next: "Next"
      },
      projects: {
        geological: {
          title1: "Mineral Resource Assessment - Northern Region",
          shortDesc1: "Comprehensive geological mapping and resource evaluation for mining potential assessment",
          desc1: "Conducted detailed geological surveys and mineral resource assessments in Northern Saudi Arabia, utilizing advanced mapping techniques and sampling analysis to identify economically viable mineral deposits.",
          location1: "Northern Region, Saudi Arabia",
          duration1: "8 Months",
          client1: "National Mining Corporation",
          services1: ["Geological Mapping", "Resource Estimation", "Core Sampling", "3D GIS Analysis", "Technical Reporting"],
          challenge1: "Identifying viable mineral deposits in remote, geologically complex areas with limited existing data.",
          solution1: "Implemented integrated geological mapping, geophysical surveys, drone-based aerial photography, and advanced 3D GIS analysis.",
          results1: [
            "Identified 3 high-potential mining sites",
            "Estimated 2.5M tons of mineral resources",
            "Comprehensive geological report with drilling recommendations",
            "Supported client's investment decisions"
          ],
          title2: "Infrastructure Geotechnical Investigation",
          shortDesc2: "Geotechnical investigation for major infrastructure foundations",
          desc2: "Conducted detailed geotechnical investigations for foundation design of major infrastructure project, including soil testing and rock mechanics analysis.",
          location2: "Riyadh Metro Project",
          duration2: "6 Months",
          client2: "Public Transport Authority",
          services2: ["Soil Investigation", "Rock Mechanics", "Laboratory Testing", "Foundation Analysis", "Risk Assessment"],
          challenge2: "Assessing complex subsurface conditions for large-scale urban infrastructure.",
          solution2: "Implemented integrated investigation methods including drilling and advanced laboratory analysis.",
          results2: [
            "Safe foundation design recommendations",
            "Geotechnical risks identified and mitigated",
            "Project approval ahead of schedule",
            "15% construction cost reduction"
          ]
        },
        geophysical: {
          title1: "National Groundwater Exploration Program",
          shortDesc1: "Advanced geophysical surveys for sustainable groundwater resource identification",
          desc1: "Executed comprehensive geophysical surveys using electrical resistivity tomography (ERT) and seismic refraction methods to map and characterize groundwater aquifers across multiple regions.",
          location1: "Multiple Regions, KSA",
          duration1: "12 Months",
          client1: "Ministry of Environment, Water & Agriculture",
          services1: ["ERT Surveys", "Seismic Refraction", "Data Processing", "3D Modeling", "Drilling Guidance"],
          challenge1: "Locating sustainable groundwater resources in arid regions with scarce rainfall.",
          solution1: "Deployed integrated geophysical methods with real-time data processing and AI-powered predictive modeling.",
          results1: [
            "Mapped 8 major aquifer systems",
            "Identified water sources for 5 communities",
            "95% drilling success rate",
            "Established monitoring network"
          ],
          title2: "Offshore Hydrocarbon Exploration",
          shortDesc2: "2D/3D seismic surveys for oil and gas exploration",
          desc2: "Provided comprehensive geophysical support for offshore hydrocarbon exploration, including seismic data acquisition, processing, and interpretation.",
          location2: "Arabian Gulf",
          duration2: "9 Months",
          client2: "Major Energy Company",
          services2: ["2D/3D Seismic Acquisition", "Data Processing", "Subsurface Imaging", "Interpretation", "Risk Assessment"],
          challenge2: "Acquiring quality seismic data in challenging marine environments.",
          solution2: "Utilized advanced marine seismic acquisition technology with real-time quality control.",
          results2: [
            "High-resolution subsurface images",
            "4 promising hydrocarbon structures identified",
            "35% exploration risk reduction",
            "Successful drilling campaign support"
          ]
        },
        environmental: {
          title1: "Industrial Zone Environmental Impact Assessment",
          shortDesc1: "Comprehensive EIA and environmental monitoring for industrial development",
          desc1: "Conducted full Environmental Impact Assessment for new industrial complex, including baseline studies, impact prediction, and comprehensive mitigation planning.",
          location1: "Eastern Province Industrial City",
          duration1: "10 Months",
          client1: "Industrial Development Authority",
          services1: ["Environmental Impact Assessment", "Air Quality Monitoring", "Noise Assessment", "Ecological Studies", "Compliance Auditing"],
          challenge1: "Balancing industrial development with environmental protection in sensitive ecosystems.",
          solution1: "Implemented continuous monitoring systems, predictive modeling, and stakeholder engagement programs.",
          results1: [
            "Full regulatory compliance achieved",
            "Comprehensive mitigation strategy",
            "40% environmental impact reduction",
            "Environmental certification obtained"
          ],
          title2: "Mine Site Rehabilitation Program",
          shortDesc2: "Ecological restoration of former mining sites",
          desc2: "Led comprehensive ecological rehabilitation program for previously mined lands, implementing sustainable restoration techniques and long-term monitoring.",
          location2: "Western Mining Region",
          duration2: "24 Months",
          client2: "Mining Corporation",
          services2: ["Site Assessment", "Rehabilitation Planning", "Soil Treatment", "Revegetation", "Monitoring"],
          challenge2: "Restoring ecological function in severely degraded lands with contaminated soils.",
          solution2: "Applied innovative soil amendment techniques and native species selection.",
          results2: [
            "150 hectares rehabilitated",
            "60% biodiversity increase",
            "85% vegetation cover achieved",
            "Sustainable ecosystem created"
          ]
        },
        meteorological: {
          title1: "National Weather Monitoring Network",
          shortDesc1: "Automated weather stations network for climate data collection",
          desc1: "Designed, installed, and commissioned nationwide network of automated weather stations for comprehensive meteorological data collection and climate monitoring.",
          location1: "Nationwide Deployment",
          duration1: "18 Months",
          client1: "National Center for Meteorology",
          services1: ["Station Design", "Equipment Installation", "Data Collection", "System Integration", "Maintenance"],
          challenge1: "Installing reliable equipment in remote, harsh environments with extreme weather.",
          solution1: "Used ruggedized, solar-powered equipment with satellite communication and remote monitoring.",
          results1: [
            "25 automated stations installed",
            "99.8% data reliability",
            "30% maintenance cost reduction",
            "25% prediction accuracy improvement"
          ],
          title2: "Urban Climate Resilience Study",
          shortDesc2: "Climate change impact assessment for urban planning",
          desc2: "Conducted comprehensive climate change impact study analyzing historical trends and predicting future scenarios for urban planning and infrastructure resilience.",
          location2: "Major Metropolitan Areas",
          duration2: "14 Months",
          client2: "Urban Planning Commission",
          services2: ["Climate Analysis", "Trend Prediction", "Impact Assessment", "Resilience Planning", "Policy Recommendations"],
          challenge2: "Predicting climate impacts and developing adaptive urban strategies.",
          solution2: "Used advanced climate modeling and machine learning algorithms.",
          results2: [
            "Climate resilience strategy developed",
            "Vulnerable infrastructure identified",
            "Adaptation guidelines provided",
            "Policy development supported"
          ]
        }
      }
    },
    ar: {
      hero: {
        title: "محفظة المشاريع",
        subtitle: "دراسات الحالة وقصص النجاح",
        description: "استكشف محفظتنا الشاملة التي تعرض مشاريع ناجحة في الخدمات الجيولوجية والجيوفيزيائية والبيئية والأرصادية."
      },
      filters: {
        title: "تصفية حسب الفئة",
        all: "جميع المشاريع",
        geological: "خدمات جيولوجية",
        geophysical: "مسوحات جيوفيزيائية",
        environmental: "حلول بيئية",
        meteorological: "خدمات أرصادية"
      },
      stats: {
        title: "إنجازاتنا",
        subtitle: "تميز موثوق",
        completed: "مشروع مكتمل",
        countries: "دولة تمت خدمتها",
        clients: "عميل راضٍ",
        years: "سنوات خبرة"
      },
      cta: {
        title: "ابدأ مشروعك اليوم",
        subtitle: "تعاون معنا للحصول على حلول جيولوجية وبيئية وأرصادية متخصصة تناسب احتياجاتك.",
        button: "تواصل مع فريقنا"
      },
      projectDetails: {
        close: "إغلاق",
        viewDetails: "عرض التفاصيل",
        services: "الخدمات المقدمة",
        location: "الموقع",
        duration: "المدة",
        client: "العميل",
        challenge: "التحدي",
        solution: "حلولنا",
        results: "النتائج الرئيسية",
        description: "نظرة عامة"
      },
      noProjects: {
        title: "لا توجد مشاريع",
        message: "حاول اختيار فئة مختلفة"
      },
      pagination: {
        previous: "السابق",
        next: "التالي"
      },
      projects: {
        geological: {
          title1: "تقييم الموارد المعدنية - المنطقة الشمالية",
          shortDesc1: "رسم خرائط جيولوجية شاملة وتقييم الموارد لتقييم إمكانات التعدين",
          desc1: "أجرينا مسوحات جيولوجية مفصلة وتقييمات للموارد المعدنية في شمال المملكة العربية السعودية، باستخدام تقنيات رسم الخرائط المتقدمة وتحليل العينات لتحديد الرواسب المعدنية القابلة للتطوير اقتصاديًا.",
          location1: "المنطقة الشمالية، المملكة العربية السعودية",
          duration1: "8 أشهر",
          client1: "الشركة الوطنية للتعدين",
          services1: ["رسم الخرائط الجيولوجية", "تقدير الموارد", "أخذ العينات الأساسية", "تحليل نظم المعلومات الجغرافية ثلاثية الأبعاد", "التقارير الفنية"],
          challenge1: "تحديد الرواسب المعدنية القابلة للتطوير في مناطق نائية ومعقدة جيولوجيًا مع بيانات محدودة.",
          solution1: "طبقنا رسم الخرائط الجيولوجية المتكاملة، والمسوحات الجيوفيزيائية، والتصوير الجوي بالطائرات بدون طيار، وتحليل نظم المعلومات الجغرافية ثلاثية الأبعاد المتقدم.",
          results1: [
            "تم تحديد 3 مواقع تعدين عالية الإمكانات",
            "تم تقدير 2.5 مليون طن من الموارد المعدنية",
            "تقرير جيولوجي شامل مع توصيات الحفر",
            "دعم قرارات استثمار العميل"
          ],
          title2: "التحقيق الجيوتقني للبنية التحتية الكبرى",
          shortDesc2: "تحقيق جيوتقني لأسس البنية التحتية الرئيسية",
          desc2: "أجرينا تحقيقات جيوتقنية مفصلة لتصميم أساسات مشروع بنية تحتية رئيسي، بما في ذلك اختبارات التربة وتحليل ميكانيكا الصخور.",
          location2: "مشروع مترو الرياض",
          duration2: "6 أشهر",
          client2: "هيئة النقل العام",
          services2: ["تحقيق التربة", "ميكانيكا الصخور", "الاختبارات المعملية", "تحليل الأساسات", "تقييم المخاطر"],
          challenge2: "تقييم الظروف تحت السطحية المعقدة للبنية التحتية الحضرية واسعة النطاق.",
          solution2: "طبقنا طرق تحقيق متكاملة تشمل الحفر والتحليل المعملي المتقدم.",
          results2: [
            "توصيات تصميم أساسات آمنة",
            "تم تحديد المخاطر الجيوتقنية وتخفيفها",
            "موافقة المشروع قبل الموعد المحدد",
            "خفض تكاليف البناء بنسبة 15%"
          ]
        },
        geophysical: {
          title1: "برنامج استكشاف المياه الجوفية الوطني",
          shortDesc1: "مسوحات جيوفيزيائية متقدمة لتحديد موارد المياه الجوفية المستدامة",
          desc1: "نفذنا مسوحات جيوفيزيائية شاملة باستخدام التصوير المقطعي للمقاومة الكهربائية (ERT) وطرق انكسار الزلازل لرسم خريطة وتوصيف طبقات المياه الجوفية عبر مناطق متعددة.",
          location1: "مناطق متعددة، المملكة العربية السعودية",
          duration1: "12 شهرًا",
          client1: "وزارة البيئة والمياه والزراعة",
          services1: ["مسوحات ERT", "انكسار الزلازل", "معالجة البيانات", "النمذجة ثلاثية الأبعاد", "توجيه الحفر"],
          challenge1: "تحديد موارد المياه الجوفية المستدامة في المناطق القاحلة ذات الأمطار الشحيحة.",
          solution1: "نشرنا طرق جيوفيزيائية متكاملة مع معالجة البيانات في الوقت الفعلي والنمذجة التنبؤية بالذكاء الاصطناعي.",
          results1: [
            "تم رسم خريطة 8 أنظمة رئيسية للطبقات المائية",
            "تم تحديد مصادر المياه لـ 5 مجتمعات",
            "معدل نجاح الحفر 95%",
            "إنشاء شبكة مراقبة للمياه الجوفية"
          ],
          title2: "استكشاف الهيدروكربونات البحرية",
          shortDesc2: "مسوحات زلزالية ثنائية وثلاثية الأبعاد لاستكشاف النفط والغاز",
          desc2: "قدمنا دعماً جيوفيزيائياً شاملاً لاستكشاف الهيدروكربونات البحرية، بما في ذلك اكتساب بيانات الزلازل ومعالجتها وتفسيرها.",
          location2: "الخليج العربي",
          duration2: "9 أشهر",
          client2: "شركة طاقة كبرى",
          services2: ["اكتساب البيانات الزلزالية 2D/3D", "معالجة البيانات", "تصوير ما تحت السطح", "التفسير", "تقييم المخاطر"],
          challenge2: "اكتساب بيانات زلزالية عالية الجودة في البيئات البحرية الصعبة.",
          solution2: "استخدمنا تقنية اكتساب بيانات زلزالية بحرية متقدمة مع تحكم في الجودة في الوقت الفعلي.",
          results2: [
            "صور عالية الدقة لما تحت السطح",
            "تم تحديد 4 هياكل هيدروكربونية واعدة",
            "خفض مخاطر الاستكشاف بنسبة 35%",
            "دعم حملة الحفر الناجحة"
          ]
        },
        environmental: {
          title1: "تقييم الأثر البيئي للمنطقة الصناعية",
          shortDesc1: "تقييم الأثر البيئي الشامل والمراقبة البيئية للتطوير الصناعي",
          desc1: "أجرينا تقييمًا كاملاً للأثر البيئي للمجمع الصناعي الجديد، بما في ذلك الدراسات الأساسية والتنبؤ بالتأثير والتخطيط الشامل للتخفيف.",
          location1: "المدينة الصناعية بالمنطقة الشرقية",
          duration1: "10 أشهر",
          client1: "هيئة التنمية الصناعية",
          services1: ["تقييم الأثر البيئي", "مراقبة جودة الهواء", "تقييم الضوضاء", "دراسات بيئية", "تدقيق الامتثال"],
          challenge1: "موازنة التطوير الصناعي مع حماية البيئة في النظم البيئية الحساسة.",
          solution1: "طبقنا أنظمة مراقبة مستمرة، ونمذجة تنبؤية، وبرامج مشاركة أصحاب المصلحة.",
          results1: [
            "تحقيق الامتثال التنظيمي الكامل",
            "استراتيجية تخفيف شاملة",
            "خفض التأثير البيئي بنسبة 40%",
            "الحصول على شهادة بيئية"
          ],
          title2: "برنامج إعادة تأهيل مواقع المناجم",
          shortDesc2: "الاستعادة البيئية لمواقع التعدين السابقة",
          desc2: "قادنا برنامج إعادة تأهيل بيئي شامل للأراضي التي تم تعدينها سابقًا، وتنفيذ تقنيات استدامة مستدامة ومراقبة طويلة الأجل.",
          location2: "منطقة التعدين الغربية",
          duration2: "24 شهرًا",
          client2: "شركة التعدين",
          services2: ["تقييم الموقع", "تخطيط إعادة التأهيل", "معالجة التربة", "إعادة الغطاء النباتي", "المراقبة"],
          challenge2: "استعادة الوظيفة البيئية في الأراضي المتدهورة بشدة ذات التربة الملوثة.",
          solution2: "طبقنا تقنيات مبتكرة لتعديل التربة واختيار الأنواع المحلية.",
          results2: [
            "إعادة تأهيل 150 هكتارًا من الأراضي المعدنية",
            "زيادة التنوع البيولوجي بنسبة 60%",
            "تحقيق غطاء نباتي بنسبة 85%",
            "إنشاء نظام بيئي مستدام"
          ]
        },
        meteorological: {
          title1: "شبكة المراقبة الجوية الوطنية",
          shortDesc1: "شبكة محطات الطقس الآلية لجمع بيانات المناخ",
          desc1: "قمنا بتصميم وتركيب وتشغيل شبكة وطنية من محطات الطقس الآلية لجمع البيانات الأرصادية الشاملة ومراقبة المناخ.",
          location1: "النشر على مستوى الدولة",
          duration1: "18 شهرًا",
          client1: "المركز الوطني للأرصاد",
          services1: ["تصميم المحطة", "تركيب المعدات", "جمع البيانات", "تكامل النظام", "الصيانة"],
          challenge1: "تركيب معدات أرصادية موثوقة في بيئات نائية وقاسية بأحوال جوية متطرفة.",
          solution1: "استخدمنا معدات مقاومة للعوامل الجوية، تعمل بالطاقة الشمسية مع اتصالات ساتلية ومراقبة عن بُعد.",
          results1: [
            "تركيب 25 محطة طقس آلية",
            "موثوقية بيانات 99.8%",
            "خفض تكاليف الصيانة بنسبة 30%",
            "تحسين دقة التنبؤ الجوي بنسبة 25%"
          ],
          title2: "دراسة مرونة المناخ الحضري",
          shortDesc2: "تقييم تأثير تغير المناخ للتخطيط الحضري",
          desc2: "أجرينا دراسة شاملة لتأثير تغير المناخ تحليل الاتجاهات التاريخية والتنبؤ بالسيناريوهات المستقبلية للتخطيط الحضري ومرونة البنية التحتية.",
          location2: "المناطق الحضرية الكبرى",
          duration2: "14 شهرًا",
          client2: "لجنة التخطيط الحضري",
          services2: ["تحليل المناخ", "التنبؤ بالاتجاهات", "تقييم الأثر", "تخطيط المرونة", "توصيات السياسات"],
          challenge2: "التنبؤ بتأثيرات المناخ وتطوير استراتيجيات حضرية تكيفية.",
          solution2: "استخدمنا نمذجة مناخية متقدمة وخوارزميات التعلم الآلي.",
          results2: [
            "تطوير استراتيجية مرونة مناخية",
            "تحديد البنية التحتية المعرضة للخطر",
            "توفير إرشادات التكيف",
            "دعم تطوير السياسات"
          ]
        }
      }
    }
  };

  const t = content[currentLang];

  // Improved categories with better icons and colors
  const categories = [
    {
      id: "all",
      name: t.filters.all,
      icon: <FaGlobeAmericas />,
      color: "#2563eb",
      darkColor: "#1d4ed8",
      lightColor: "#dbeafe",
      iconSize: "18px"
    },
    {
      id: "geological",
      name: t.filters.geological,
      icon: <FaGem />,
      color: "#059669",
      darkColor: "#047857",
      lightColor: "#d1fae5",
      iconSize: "18px"
    },
    {
      id: "geophysical",
      name: t.filters.geophysical,
      icon: <FaSatelliteDish />,
      color: "#7c3aed",
      darkColor: "#6d28d9",
      lightColor: "#ede9fe",
      iconSize: "18px"
    },
    {
      id: "environmental",
      name: t.filters.environmental,
      icon: <FaLeaf />,
      color: "#10b981",
      darkColor: "#059669",
      lightColor: "#d1fae5",
      iconSize: "18px"
    },
    {
      id: "meteorological",
      name: t.filters.meteorological,
      icon: <FaCloudSunRain />,
      color: "#0ea5e9",
      darkColor: "#0284c7",
      lightColor: "#e0f2fe",
      iconSize: "18px"
    }
  ];

  // Dynamic projects data that changes with language
  const projectsData = [
    {
      id: 1,
      title: t.projects.geological.title1,
      category: "geological",
      shortDesc: t.projects.geological.shortDesc1,
      description: t.projects.geological.desc1,
      image: "/projects/mineral-assessment.jpg",
      location: t.projects.geological.location1,
      duration: t.projects.geological.duration1,
      client: t.projects.geological.client1,
      services: t.projects.geological.services1,
      challenge: t.projects.geological.challenge1,
      solution: t.projects.geological.solution1,
      results: t.projects.geological.results1,
      icon: <FaGem />,
      year: "2024"
    },
    {
      id: 2,
      title: t.projects.geophysical.title1,
      category: "geophysical",
      shortDesc: t.projects.geophysical.shortDesc1,
      description: t.projects.geophysical.desc1,
      image: "/projects/groundwater-survey.jpg",
      location: t.projects.geophysical.location1,
      duration: t.projects.geophysical.duration1,
      client: t.projects.geophysical.client1,
      services: t.projects.geophysical.services1,
      challenge: t.projects.geophysical.challenge1,
      solution: t.projects.geophysical.solution1,
      results: t.projects.geophysical.results1,
      icon: <FaWater />,
      year: "2023"
    },
    {
      id: 3,
      title: t.projects.environmental.title1,
      category: "environmental",
      shortDesc: t.projects.environmental.shortDesc1,
      description: t.projects.environmental.desc1,
      image: "/projects/eia-project.jpg",
      location: t.projects.environmental.location1,
      duration: t.projects.environmental.duration1,
      client: t.projects.environmental.client1,
      services: t.projects.environmental.services1,
      challenge: t.projects.environmental.challenge1,
      solution: t.projects.environmental.solution1,
      results: t.projects.environmental.results1,
      icon: <FaLeaf />,
      year: "2024"
    },
    {
      id: 4,
      title: t.projects.meteorological.title1,
      category: "meteorological",
      shortDesc: t.projects.meteorological.shortDesc1,
      description: t.projects.meteorological.desc1,
      image: "/projects/weather-stations.jpg",
      location: t.projects.meteorological.location1,
      duration: t.projects.meteorological.duration1,
      client: t.projects.meteorological.client1,
      services: t.projects.meteorological.services1,
      challenge: t.projects.meteorological.challenge1,
      solution: t.projects.meteorological.solution1,
      results: t.projects.meteorological.results1,
      icon: <FaWind />,
      year: "2023"
    },
    {
      id: 5,
      title: t.projects.geophysical.title2,
      category: "geophysical",
      shortDesc: t.projects.geophysical.shortDesc2,
      description: t.projects.geophysical.desc2,
      image: "/projects/seismic-survey.jpg",
      location: t.projects.geophysical.location2,
      duration: t.projects.geophysical.duration2,
      client: t.projects.geophysical.client2,
      services: t.projects.geophysical.services2,
      challenge: t.projects.geophysical.challenge2,
      solution: t.projects.geophysical.solution2,
      results: t.projects.geophysical.results2,
      icon: <FaOilCan />,
      year: "2023"
    },
    {
      id: 6,
      title: t.projects.environmental.title2,
      category: "environmental",
      shortDesc: t.projects.environmental.shortDesc2,
      description: t.projects.environmental.desc2,
      image: "/projects/rehabilitation.jpg",
      location: t.projects.environmental.location2,
      duration: t.projects.environmental.duration2,
      client: t.projects.environmental.client2,
      services: t.projects.environmental.services2,
      challenge: t.projects.environmental.challenge2,
      solution: t.projects.environmental.solution2,
      results: t.projects.environmental.results2,
      icon: <FaSeedling />,
      year: "2022"
    },
    {
      id: 7,
      title: t.projects.geological.title2,
      category: "geological",
      shortDesc: t.projects.geological.shortDesc2,
      description: t.projects.geological.desc2,
      image: "/projects/geotechnical.jpg",
      location: t.projects.geological.location2,
      duration: t.projects.geological.duration2,
      client: t.projects.geological.client2,
      services: t.projects.geological.services2,
      challenge: t.projects.geological.challenge2,
      solution: t.projects.geological.solution2,
      results: t.projects.geological.results2,
      icon: <FaHardHat />,
      year: "2024"
    },
    {
      id: 8,
      title: t.projects.meteorological.title2,
      category: "meteorological",
      shortDesc: t.projects.meteorological.shortDesc2,
      description: t.projects.meteorological.desc2,
      image: "/projects/climate-study.jpg",
      location: t.projects.meteorological.location2,
      duration: t.projects.meteorological.duration2,
      client: t.projects.meteorological.client2,
      services: t.projects.meteorological.services2,
      challenge: t.projects.meteorological.challenge2,
      solution: t.projects.meteorological.solution2,
      results: t.projects.meteorological.results2,
      icon: <FaChartLine />,
      year: "2023"
    }
  ];

  // Statistics data with improved icons
  const statistics = [
    { value: "200+", label: t.stats.completed, icon: <FaClipboardList /> },
    { value: "30+", label: t.stats.countries, icon: <FaGlobeAmericas /> },
    { value: "100+", label: t.stats.clients, icon: <FaUsers /> },
    { value: "15+", label: t.stats.years, icon: <FaCertificate /> }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Handle filter change
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  // Handle project click
  const handleProjectClick = (project) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsLoading(false);
      document.body.style.overflow = 'hidden';
    }, 300);
  };

  // Close project details
  const handleCloseDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  // Handle keyboard navigation for project details
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        handleCloseDetails();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <div className={styles.container} dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroText}
            >
              <h1 className={styles.heroTitle}>
                {t.hero.title}
              </h1>
              <p className={styles.heroSubtitle}>
                {t.hero.subtitle}
              </p>
              <p className={styles.heroDescription}>
                {t.hero.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsContainer}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {t.hero.title}
            </h2>
            <p className={styles.sectionDescription}>
              {t.hero.description}
            </p>
          </div>

          {/* Filters */}
          <div className={styles.filtersWrapper}>
            <h3 className={styles.filtersTitle}>
              <FaFilter className={styles.filterTitleIcon} />
              {t.filters.title}
            </h3>
            <div className={styles.filtersContainer}>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${styles.filterButton} ${activeFilter === category.id ? styles.active : ''}`}
                  onClick={() => handleFilterChange(category.id)}
                  style={{
                    backgroundColor: activeFilter === category.id ? category.color : 'transparent',
                    borderColor: category.color,
                    color: activeFilter === category.id ? 'white' : category.color
                  }}
                >
                  <span 
                    className={styles.filterIcon}
                    style={{ fontSize: category.iconSize }}
                  >
                    {category.icon}
                  </span>
                  <span className={styles.filterText}>
                    {category.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className={styles.projectsGrid}>
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => {
                const category = categories.find(c => c.id === project.category);
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={styles.projectCard}
                  >
                    <div className={styles.projectHeader}>
                      <div 
                        className={styles.projectCategory}
                        style={{ 
                          backgroundColor: category.lightColor,
                          color: category.color
                        }}
                      >
                        <span 
                          className={styles.categoryIcon}
                          style={{ fontSize: category.iconSize }}
                        >
                          {category.icon}
                        </span>
                        <span className={styles.categoryName}>
                          {category.name}
                        </span>
                      </div>
                      <div className={styles.projectYear}>
                        {project.year}
                      </div>
                    </div>

                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>
                        {project.title}
                      </h3>
                      <p className={styles.projectDescription}>
                        {project.shortDesc}
                      </p>

                      <div className={styles.projectMeta}>
                        <div className={styles.metaItem}>
                          <FaMapMarkerAlt className={styles.metaIcon} />
                          <span className={styles.metaText}>{project.location}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <FaCalendarAlt className={styles.metaIcon} />
                          <span className={styles.metaText}>{project.duration}</span>
                        </div>
                      </div>

                      <div className={styles.projectServices}>
                        {project.services.slice(0, 3).map((service, idx) => (
                          <span 
                            key={idx} 
                            className={styles.serviceTag}
                            style={{ 
                              backgroundColor: category.lightColor,
                              color: category.color
                            }}
                          >
                            {service}
                          </span>
                        ))}
                        {project.services.length > 3 && (
                          <span className={styles.moreTag}>
                            +{project.services.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={styles.projectFooter}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.viewButton}
                        onClick={() => handleProjectClick(project)}
                        style={{ 
                          backgroundColor: category.color,
                          color: 'white'
                        }}
                      >
                        <FaEye className={styles.buttonIcon} />
                        <span className={styles.buttonText}>{t.projectDetails.viewDetails}</span>
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.pageButton}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaChevronLeft className={styles.pageButtonIcon} />
                <span className={styles.pageButtonText}>{t.pagination.previous}</span>
              </motion.button>

              <div className={styles.pageNumbers}>
                {[...Array(totalPages)].map((_, index) => (
                  <motion.button
                    key={index + 1}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${styles.pageNumber} ${currentPage === index + 1 ? styles.active : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.pageButton}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className={styles.pageButtonText}>{t.pagination.next}</span>
                <FaChevronRight className={styles.pageButtonIcon} />
              </motion.button>
            </div>
          )}

          {/* No projects message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.noProjects}
            >
              <FaSearch className={styles.noProjectsIcon} />
              <h3 className={styles.noProjectsTitle}>{t.noProjects.title}</h3>
              <p className={styles.noProjectsMessage}>{t.noProjects.message}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.modalOverlay}
              onClick={handleCloseDetails}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={styles.projectModal}
            >
              <div className={styles.modalHeader}>
                <div className={styles.modalTitleSection}>
                  <div className={styles.modalCategoryRow}>
                    <span 
                      className={styles.modalCategory}
                      style={{ 
                        backgroundColor: categories.find(c => c.id === selectedProject.category).lightColor,
                        color: categories.find(c => c.id === selectedProject.category).color
                      }}
                    >
                      {categories.find(c => c.id === selectedProject.category).name}
                    </span>
                    <span className={styles.modalYear}>
                      {selectedProject.year}
                    </span>
                  </div>
                  <h2 className={styles.modalTitle}>
                    {selectedProject.title}
                  </h2>
                </div>
                <button 
                  className={styles.closeButton}
                  onClick={handleCloseDetails}
                  aria-label={t.projectDetails.close}
                >
                  <FaTimes className={styles.closeIcon} />
                </button>
              </div>

              <div className={styles.modalContent}>
                <div className={styles.modalGrid}>
                  {/* Left Column */}
                  <div className={styles.modalColumn}>
                    <div className={styles.detailSection}>
                      <h3 className={styles.detailTitle}>
                        {t.projectDetails.description}
                      </h3>
                      <p className={styles.detailText}>
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className={styles.detailSection}>
                      <h3 className={styles.detailTitle}>
                        {t.projectDetails.services}
                      </h3>
                      <div className={styles.servicesGrid}>
                        {selectedProject.services.map((service, index) => (
                          <div 
                            key={index} 
                            className={styles.serviceItem}
                            style={{ 
                              backgroundColor: categories.find(c => c.id === selectedProject.category).lightColor,
                              color: categories.find(c => c.id === selectedProject.category).color
                            }}
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className={styles.modalColumn}>
                    <div className={styles.projectInfoGrid}>
                      <div className={styles.infoItem}>
                        <div className={styles.infoIcon}>
                          <FaMapMarkerAlt />
                        </div>
                        <div className={styles.infoContent}>
                          <h4 className={styles.infoLabel}>{t.projectDetails.location}</h4>
                          <p className={styles.infoText}>{selectedProject.location}</p>
                        </div>
                      </div>
                      
                      <div className={styles.infoItem}>
                        <div className={styles.infoIcon}>
                          <FaCalendarAlt />
                        </div>
                        <div className={styles.infoContent}>
                          <h4 className={styles.infoLabel}>{t.projectDetails.duration}</h4>
                          <p className={styles.infoText}>{selectedProject.duration}</p>
                        </div>
                      </div>
                      
                      <div className={styles.infoItem}>
                        <div className={styles.infoIcon}>
                          <FaUsers />
                        </div>
                        <div className={styles.infoContent}>
                          <h4 className={styles.infoLabel}>{t.projectDetails.client}</h4>
                          <p className={styles.infoText}>{selectedProject.client}</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.detailSection}>
                      <h3 className={styles.detailTitle}>
                        <FaSearch className={styles.detailTitleIcon} />
                        {t.projectDetails.challenge}
                      </h3>
                      <p className={styles.detailText}>
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className={styles.detailSection}>
                      <h3 className={styles.detailTitle}>
                        <FaToolbox className={styles.detailTitleIcon} />
                        {t.projectDetails.solution}
                      </h3>
                      <p className={styles.detailText}>
                        {selectedProject.solution}
                      </p>
                    </div>

                    <div className={styles.detailSection}>
                      <h3 className={styles.detailTitle}>
                        <FaCheckCircle className={styles.detailTitleIcon} />
                        {t.projectDetails.results}
                      </h3>
                      <ul className={styles.resultsList}>
                        {selectedProject.results.map((result, index) => (
                          <li key={index} className={styles.resultItem}>
                            <span className={styles.resultBullet}>•</span>
                            <span className={styles.resultText}>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.contactButton}
                  onClick={() => {
                    handleCloseDetails();
                    router.push(`/${currentLang}/contact`);
                  }}
                >
                  <span className={styles.contactButtonText}>
                    {isRTL ? "ناقش مشروعًا مماثلًا" : "Discuss a Similar Project"}
                  </span>
                  <FaArrowRight className={styles.buttonIcon} />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.loadingOverlay}
          >
            <div className={styles.loadingSpinner} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2 className={styles.ctaTitle}>
              {t.cta.title}
            </h2>
            <p className={styles.ctaSubtitle}>
              {t.cta.subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
              onClick={() => router.push(`/${currentLang}/contact`)}
            >
              <span className={styles.ctaButtonText}>{t.cta.button}</span>
              <FaArrowRight className={styles.buttonIcon} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}