"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMountain,
  FaSatellite,
  FaLeaf,
  FaCloudSun,
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaCertificate,
  FaCheckCircle,
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaSearch,
  FaFlask,
  FaIndustry,
  FaEye,
  FaTree,
  FaTint,
  FaCogs,
  FaCompass,
  FaThermometerHalf,
  FaWind,
  FaRecycle,
  FaWater,
  FaMapMarkerAlt,
  FaChevronRight
} from "react-icons/fa";
import styles from "./ServicesPage.module.css";

export default function ServicesPage({ lang = "en" }) {
  const currentLang = lang;
  const router = useRouter();
  const isRTL = currentLang === "ar";
  const [activeService, setActiveService] = useState("geological");

  // Content translations (keeping only relevant parts)
  const content = {
    en: {
      hero: {
        title: "Expert Earth Science Solutions",
        subtitle: "Geological • Geophysical • Environmental • Meteorological",
        description: "Professional services backed by cutting-edge technology and decades of industry expertise.",
      },
      services: {
        title: "Our Professional Services",
        subtitle: "Comprehensive Solutions for Every Challenge"
      },
      geological: {
        title: "Geological Services",
        shortDesc: "Comprehensive geological mapping and analysis",
        description: "Integrated geological and geotechnical services including mapping, exploration, analysis, and site investigations. Our expertise supports resource discovery, land-use planning, environmental assessments, and safe, reliable engineering designs.",
        features: [
          "Geological Mapping", "Resource Exploration", "Sample Analysis", "Site Investigations",
          "Mineral & Petroleum Exploration", "Petrographic & Mineral Analysis"
        ],
        icon: <FaMountain />
      },
      geophysical: {
        title: "Geophysical Services",
        shortDesc: "Advanced subsurface imaging and surveys",
        description: "Advanced geophysical services including gravity, magnetic, seismic, electrical, EM, and radiometric surveys with 3D modeling. Applications span groundwater, minerals, oil & gas, archaeology, geothermal, hazards, and environmental studies.",
        features: [
          "Groundwater Studies", "Oil & Gas Exploration", "Mineral Surveys", "Archaeological Studies",
          "2D/3D Seismic Surveys", "Magnetic & Gravity Surveys"
        ],
        icon: <FaSatellite />
      },
      environmental: {
        title: "Environmental Services",
        shortDesc: "Sustainable environmental assessment and management",
        description: "Comprehensive environmental services including EIAs, contamination assessment, waste and landfill studies, monitoring programs, ecological and hydrogeological studies, audits, management plans, rehabilitation, and expert consultations.",
        features: [
          "Environmental Impact Assessment", "Waste Management", "Ecological Studies", "Hydrogeology",
          "Contaminant Assessment", "Site Rehabilitation"
        ],
        icon: <FaLeaf />
      },
      meteorological: {
        title: "Meteorological Services",
        shortDesc: "Precise weather monitoring and climate analysis",
        description: "Meteorological services including weather monitoring, forecasting, climatological studies, wind assessments, dispersion modeling, climate reports, and customized solutions with full device maintenance, calibration, and data documentation support.",
        features: [
          "Weather Monitoring", "Weather Forecasting", "Climatological Studies", "Wind Assessments",
          "Automatic Weather Stations", "Climate Trend Analysis"
        ],
        icon: <FaCloudSun />
      },
      whyChooseUs: {
        title: "Why Choose Sensing Nature?",
        subtitle: "Excellence in every project",
        points: [
          { icon: <FaUsers />, title: "Expert Team", desc: "Certified professionals with 15+ years experience" },
          { icon: <FaLightbulb />, title: "Innovative Solutions", desc: "Latest technology and methodologies" },
          { icon: <FaCertificate />, title: "Quality Assurance", desc: "ISO certified processes and reporting" },
          { icon: <FaHandshake />, title: "Client Partnership", desc: "Collaborative approach and ongoing support" }
        ]
      },
      cta: {
        title: "Ready to Start Your Project?",
        subtitle: "Contact our experts for a customized solution tailored to your specific requirements.",
        buttons: {
          contact: "Get In Touch",
          quote: "Request Proposal"
        }
      }
    },
    ar: {
      hero: {
        title: "حلول علوم الأرض الاحترافية",
        subtitle: "جيولوجية • جيوفيزيائية • بيئية • أرصادية",
        description: "خدمات احترافية مدعومة بأحدث التقنيات وعقود من الخبرة الصناعية.",
      },
      services: {
        title: "خدماتنا المهنية",
        subtitle: "حلول شاملة لكل التحديات"
      },
      geological: {
        title: "الخدمات الجيولوجية",
        shortDesc: "رسم خرائط وتحليل جيولوجي شامل",
        description: "خدمات جيولوجية وجيوتقنية متكاملة تشمل رسم الخرائط، الاستكشاف، التحليل، وتقييم المواقع. خبرتنا تدعم اكتشاف الموارد، تخطيط استخدام الأراضي، التقييمات البيئية، والتصميمات الهندسية الآمنة والموثوقة.",
        features: [
          "رسم الخرائط الجيولوجية", "استكشاف الموارد", "تحليل العينات", "تحقيقات الموقع",
          "الاستكشاف المعدني والبترولي", "التحليل البتروجرافي والمعدني"
        ],
        icon: <FaMountain />
      },
      geophysical: {
        title: "الخدمات الجيوفيزيائية",
        shortDesc: "تصوير ومسوحات تحت السطح المتقدمة",
        description: "خدمات جيوفيزيائية متقدمة تشمل المسوحات الجاذبية، المغناطيسية، الزلزالية، الكهربائية، الكهرومغناطيسية، والإشعاعية مع النمذجة ثلاثية الأبعاد. تطبيقات تشمل المياه الجوفية، المعادن، النفط والغاز، الآثار، الطاقة الحرارية الأرضية، المخاطر، والدراسات البيئية.",
        features: [
          "دراسات المياه الجوفية", "استكشاف النفط والغاز", "المسوحات المعدنية", "الدراسات الأثرية",
          "المسوحات الزلزالية 2D/3D", "المسوحات المغناطيسية والجاذبية"
        ],
        icon: <FaSatellite />
      },
      environmental: {
        title: "الخدمات البيئية",
        shortDesc: "تقييم وإدارة بيئية مستدامة",
        description: "خدمات بيئية شاملة تشمل تقييمات الأثر البيئي، تقييم التلوث، دراسات النفايات والمطامر، برامج المراقبة، الدراسات البيئية والهيدروجيولوجية، التدقيق، خطط الإدارة، إعادة التأهيل، والاستشارات الخبيرة.",
        features: [
          "تقييم الأثر البيئي", "إدارة النفايات", "الدراسات البيئية", "الهيدروجيولوجيا",
          "تقييم الملوثات", "إعادة تأهيل المواقع"
        ],
        icon: <FaLeaf />
      },
      meteorological: {
        title: "خدمات الأرصاد الجوية",
        shortDesc: "مراقبة الطقس وتحليل المناخ الدقيق",
        description: "خدمات أرصاد جوية تشمل مراقبة الطقس، التنبؤ، الدراسات المناخية، تقييمات الرياح، نمذجة التشتت، تقارير المناخ، وحلول مخصصة مع دعم كامل للصيانة، المعايرة، وتوثيق البيانات.",
        features: [
          "مراقبة الطقس", "التنبؤات الجوية", "الدراسات المناخية", "تقييمات الرياح",
          "محطات مراقبة الطقس الأوتوماتيكية", "تحليلات اتجاهات المناخ"
        ],
        icon: <FaCloudSun />
      },
      whyChooseUs: {
        title: "لماذا تختار سينسينج نيتشر؟",
        subtitle: "تميز في كل مشروع",
        points: [
          { icon: <FaUsers />, title: "فريق خبير", desc: "محترفون معتمدون بخبرة تزيد عن 15 عامًا" },
          { icon: <FaLightbulb />, title: "حلول مبتكرة", desc: "أحدث التقنيات والمنهجيات" },
          { icon: <FaCertificate />, title: "ضمان الجودة", desc: "عمليات وتقارير معتمدة حسب الأيزو" },
          { icon: <FaHandshake />, title: "شراكة مع العميل", desc: "نهج تعاوني ودعم مستمر" }
        ]
      },
      cta: {
        title: "مستعد لبدء مشروعك؟",
        subtitle: "تواصل مع خبرائنا للحصول على حل مخصص يناسب متطلباتك الخاصة.",
        buttons: {
          contact: "تواصل معنا",
          quote: "طلب عرض"
        }
      }
    }
  };

  const t = content[currentLang];

  const servicesList = [
    {
      id: "geological",
      ...t.geological,
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      lightColor: "#d1fae5"
    },
    {
      id: "geophysical",
      ...t.geophysical,
      color: "#047857",
      gradient: "linear-gradient(135deg, #047857 0%, #059669 100%)",
      lightColor: "#bbf7d0"
    },
    {
      id: "environmental",
      ...t.environmental,
      color: "#065f46",
      gradient: "linear-gradient(135deg, #065f46 0%, #047857 100%)",
      lightColor: "#a7f3d0"
    },
    {
      id: "meteorological",
      ...t.meteorological,
      color: "#064e3b",
      gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
      lightColor: "#99f6e4"
    }
  ];

  const activeServiceData = servicesList.find(service => service.id === activeService);
  const otherServices = servicesList.filter(service => service.id !== activeService);

  return (
    <div className={styles.container} dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section (simplified) */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroText}
            >
              <span className={styles.heroBadge}>
                {t.hero.subtitle}
              </span>
              <h1 className={styles.heroTitle}>
                {t.hero.title}
              </h1>
              <p className={styles.heroDescription}>
                {t.hero.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - New Design */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.sectionBadge}
            >
              {t.services.subtitle}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={styles.sectionTitle}
              
            >
              {t.services.title}
            </motion.h2>
          </div>

          <div className={styles.servicesLayout}>
            {/* Left Column - Active Service Details */}
            <div className={styles.serviceDetailColumn}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3 }}
                  className={styles.serviceDetailCard}
                >
                  <div 
                    className={styles.serviceDetailHeader}
                    style={{ background: activeServiceData.gradient }}
                  >
                    <div className={styles.serviceDetailIcon}>
                      {activeServiceData.icon}
                    </div>
                    <div>
                      <h3 className={styles.serviceDetailTitle}>
                        {activeServiceData.title}
                      </h3>
                      <p className={styles.serviceDetailShortDesc}>
                        {activeServiceData.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className={styles.serviceDetailContent}>
                    <p className={styles.serviceDetailDescription}>
                      {activeServiceData.description}
                    </p>

                    <div className={styles.serviceDetailFeatures}>
                      <h4 className={styles.detailFeaturesTitle}>
                        <FaCheckCircle style={{ color: activeServiceData.color, marginRight: '8px' }} />
                        {isRTL ? "المميزات الرئيسية" : "Key Features"}
                      </h4>
                      <div className={styles.detailFeaturesGrid}>
                        {activeServiceData.features.map((feature, index) => (
                          <div key={index} className={styles.detailFeatureItem}>
                            <span className={styles.detailFeatureCheck} style={{ color: activeServiceData.color }}>
                              ✓
                            </span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.serviceDetailActions}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.detailPrimaryButton}
                        onClick={() => router.push(`/${currentLang}/contact`)}
                        style={{ background: activeServiceData.gradient }}
                      >
                        {t.cta.buttons.quote}
                        <FaArrowRight className={styles.buttonIcon} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={styles.detailSecondaryButton}
                        onClick={() => router.push(`/${currentLang}/services/${activeServiceData.id}`)}
                        style={{ color: activeServiceData.color, borderColor: activeServiceData.color }}
                      >
                        {isRTL ? "اعرف المزيد" : "Learn More"}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column - Other Services List */}
            <div className={styles.servicesListColumn}>
              {otherServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${styles.serviceListItem} ${activeService === service.id ? styles.active : ''}`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className={styles.serviceListContent}>
                    <div 
                      className={styles.serviceListIcon}
                      style={{ background: service.gradient }}
                    >
                      {service.icon}
                    </div>
                    <div className={styles.serviceListInfo}>
                      <h4 className={styles.serviceListTitle}>
                        {service.title}
                      </h4>
                      <p className={styles.serviceListDesc}>
                        {service.shortDesc}
                      </p>
                      <ul className={styles.serviceListFeatures}>
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className={styles.serviceListFeature}>
                            <FaChevronRight className={styles.listFeatureIcon} style={{ color: service.color }} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.serviceListArrow}>
                      <FaArrowRight />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whySection}>
        <div className={styles.whyBackground}>
          <div className={styles.whyPattern} />
        </div>
        
        <div className="container">
          <div className={styles.sectionHeader}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.sectionBadge}
            >
              {t.whyChooseUs.subtitle}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className={styles.sectionTitle}
                            style={{ color: 'white' }}

            >
              {t.whyChooseUs.title}
            </motion.h2>
          </div>

          <div className={styles.whyGrid}>
            {t.whyChooseUs.points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={styles.whyCard}
              >
                <div className={styles.whyIconWrapper}>
                  <div className={styles.whyIcon}>
                    {point.icon}
                  </div>
                </div>
                <h4 className={styles.whyTitle}>
                  {point.title}
                </h4>
                <p className={styles.whyText}>
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaPattern} />
        </div>
        
        <div className="container">
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
            <div className={styles.ctaButtons}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.ctaPrimary}
                onClick={() => router.push(`/${currentLang}/contact`)}
              >
                {t.cta.buttons.contact}
                <FaArrowRight className={styles.buttonIcon} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.ctaSecondary}
                onClick={() => router.push(`/${currentLang}/services`)}
              >
                {t.cta.buttons.quote}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}