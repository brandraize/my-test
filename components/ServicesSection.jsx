"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { FaMap, FaSearch, FaFlask, FaMountain, 
         FaWater, FaOilCan, FaIndustry, FaCloudSun, 
         FaLeaf, FaRecycle, FaWind, FaThermometerHalf } from "react-icons/fa";

export default function ServicesSection({ lang = "en" }) {
  const isRTL = lang === "ar";
  
  const colors = {
    primary: "#10b981",
    primaryDark: "#059669",
    secondary: "#d1fae5",
    accent: "#065f46",
    textDark: "#1f2937",
    textLight: "#6b7280",
    white: "#ffffff",
    lightBg: "#f0fdf4",
  };

  // Image paths
  const imagePaths = {
    circle: '/circel.png',
    mountain: '/moutain.png',
    leaf: '/leaf.png',
    flight: '/flight.png'
  };

  const services = [
    {
      id: 1,
      title: isRTL ? "الخدمات الجيولوجية" : "Geological Services",
      icon: <FaMountain />,
      description: isRTL 
        ? "تقدم الشركة خدمات متكاملة في الجيولوجيا تشمل رسم الخرائط وتوصيف المواقع، الاستكشاف المعدني والهيدروكربوني، التحليل البتروجرافي والمعدني، والفحوصات الجيوتقنية لتقييم الموارد ودعم المشاريع الهندسية واتخاذ القرارات بدقة."
        : "We provide comprehensive geological services including mapping and site characterization, mineral and hydrocarbon exploration, petrographic and mineral analysis, and geotechnical examinations to assess resources and support engineering projects with precise decision-making.",
      features: [
        { icon: <FaMap />, text: isRTL ? "رسم الخرائط الجيولوجية" : "Geological Mapping" },
        { icon: <FaSearch />, text: isRTL ? "الاستكشاف المعدني" : "Mineral Exploration" },
        { icon: <FaFlask />, text: isRTL ? "التحليل البتروجرافي" : "Petrographic Analysis" },
        { icon: <FaIndustry />, text: isRTL ? "الفحوصات الجيوتقنية" : "Geotechnical Examinations" }
      ],
      color: "#3B82F6",
      bgImage: imagePaths.mountain,
      iconComponent: (
        <div className="position-relative" style={{ width: "60px", height: "60px" }}>
          <Image
            src={imagePaths.mountain}
            alt="Geological Services"
            fill
            className="object-contain"
            style={{ filter: "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3))" }}
          />
        </div>
      )
    },
    {
      id: 2,
      title: isRTL ? "الخدمات الجيوفيزيائية" : "Geophysical Services",
      icon: <FaSearch />,
      description: isRTL 
        ? "تشمل خدماتنا الجيوفيزيائية مجموعة من المسوحات والطرق الحديثة التي تُستخدم لدراسة باطن الأرض وفهم تركيبها الفيزيائي لتطبيقات متعددة في مجالات المياه الجوفية، التعدين، النفط والغاز، الدراسات البيئية والهندسية، وكذلك الآثار."
        : "Our geophysical services include a range of modern surveys and methods used to study subsurface earth and understand its physical composition for various applications in groundwater, mining, oil and gas, environmental and engineering studies, as well as archaeology.",
      features: [
        { icon: <FaWater />, text: isRTL ? "دراسات المياه الجوفية" : "Groundwater Studies" },
        { icon: <FaOilCan />, text: isRTL ? "استكشاف النفط والغاز" : "Oil & Gas Exploration" },
        { icon: <FaIndustry />, text: isRTL ? "المسوحات الهندسية" : "Engineering Surveys" },
        { icon: <FaMap />, text: isRTL ? "الدراسات الأثرية" : "Archaeological Studies" }
      ],
      color: "#8B5CF6",
      bgImage: imagePaths.circle,
      iconComponent: (
        <div className="position-relative" style={{ width: "60px", height: "60px" }}>
          <div className="w-100 h-100 position-relative">
            <Image
              src={imagePaths.circle}
              alt="Geophysical Services"
              fill
              className="object-contain"
              style={{ filter: "drop-shadow(0 2px 4px rgba(139, 92, 246, 0.3))" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#5cf683ff",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: isRTL ? "الخدمات البيئية" : "Environmental Services",
      icon: <FaLeaf />,
      description: isRTL 
        ? "نقدّم مجموعة شاملة من الخدمات البيئية المصممة لدعم التنمية المستدامة وضمان الامتثال للأنظمة والمعايير البيئية. تهدف هذه الخدمات إلى تقييم الآثار البيئية للمشروعات، ومراقبة جودة البيئة، وإدارة النفايات، وحماية النظم البيئية."
        : "We offer a comprehensive range of environmental services designed to support sustainable development and ensure compliance with environmental regulations and standards. These services aim to assess project environmental impacts, monitor environmental quality, manage waste, and protect ecosystems.",
      features: [
        { icon: <FaLeaf />, text: isRTL ? "تقييم الأثر البيئي" : "Environmental Impact Assessment" },
        { icon: <FaRecycle />, text: isRTL ? "إدارة النفايات" : "Waste Management" },
        { icon: <FaThermometerHalf />, text: isRTL ? "مراقبة جودة الهواء" : "Air Quality Monitoring" },
        { icon: <FaWater />, text: isRTL ? "إدارة الموارد المائية" : "Water Resource Management" }
      ],
      color: "#10B981",
      bgImage: imagePaths.leaf,
      iconComponent: (
        <div className="position-relative" style={{ width: "60px", height: "60px" }}>
          <Image
            src={imagePaths.leaf}
            alt="Environmental Services"
            fill
            className="object-contain"
            style={{ filter: "drop-shadow(0 2px 4px rgba(16, 185, 129, 0.3))" }}
          />
        </div>
      )
    },
    {
      id: 4,
      title: isRTL ? "خدمات الأرصاد الجوية" : "Meteorological Services",
      icon: <FaCloudSun />,
      description: isRTL 
        ? "توفر الشركة خدمات متكاملة في مجال الأرصاد الجوية والمناخ، تشمل الرصد والتحليل والتنبؤ لدعم المشاريع الصناعية والزراعية والهندسية. كما تقدم حلولًا مخصصة للمساعدة في اتخاذ القرارات التشغيلية والتخطيط للطوارئ."
        : "The company provides integrated services in meteorology and climatology, including observation, analysis, and forecasting to support industrial, agricultural, and engineering projects. It also offers customized solutions to assist in operational decision-making and emergency planning.",
      features: [
        { icon: <FaWind />, text: isRTL ? "الرصد والتحليل" : "Observation & Analysis" },
        { icon: <FaCloudSun />, text: isRTL ? "التنبؤات الجوية" : "Weather Forecasting" },
        { icon: <FaThermometerHalf />, text: isRTL ? "دراسات المناخ" : "Climate Studies" },
        { icon: <FaIndustry />, text: isRTL ? "دعم المشاريع الصناعية" : "Industrial Project Support" }
      ],
      color: "#0EA5E9",
      bgImage: imagePaths.flight,
      iconComponent: (
        <div className="position-relative" style={{ width: "60px", height: "60px" }}>
          <Image
            src={imagePaths.flight}
            alt="Meteorological Services"
            fill
            className="object-contain"
            style={{ filter: "drop-shadow(0 2px 4px rgba(14, 165, 233, 0.3))" }}
          />
        </div>
      )
    }
  ];

  return (
    <section 
      className="py-5 position-relative"
      style={{
        backgroundColor: colors.white,
        direction: isRTL ? "rtl" : "ltr",
        overflow: "hidden",
      }}
      aria-labelledby="services-title"
    >
      {/* Decorative Background Elements */}
      <div className="position-absolute w-100 h-100" style={{ 
        top: 0, 
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.05 
      }}>
        {/* Background Circles Pattern */}
        <div className="position-absolute" style={{ top: "10%", left: "5%" }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div style={{ width: "120px", height: "120px", position: "relative" }}>
              <Image
                src={imagePaths.circle}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="position-absolute" style={{ top: "60%", right: "10%" }}>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <div style={{ width: "80px", height: "80px", position: "relative" }}>
              <Image
                src={imagePaths.circle}
                alt=""
                fill
                className="object-contain"
                style={{ opacity: 0.7 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Mountain Background */}
        <div className="position-absolute" style={{ bottom: "15%", left: "15%" }}>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div style={{ width: "100px", height: "100px", position: "relative" }}>
              <Image
                src={imagePaths.mountain}
                alt=""
                fill
                className="object-contain"
                style={{ opacity: 0.3 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Leaf Background */}
        <div className="position-absolute" style={{ top: "30%", right: "20%" }}>
          <motion.div
            animate={{ 
              rotate: [0, 15, 0, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div style={{ width: "60px", height: "60px", position: "relative" }}>
              <Image
                src={imagePaths.leaf}
                alt=""
                fill
                className="object-contain"
                style={{ opacity: 0.3 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Flight Background */}
        <div className="position-absolute" style={{ bottom: "25%", right: "5%" }}>
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              y: [0, -15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div style={{ width: "70px", height: "70px", position: "relative" }}>
              <Image
                src={imagePaths.flight}
                alt=""
                fill
                className="object-contain"
                style={{ opacity: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Section Header with Logo Elements */}
        <motion.div 
          className="text-center mb-5"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
            <div style={{ width: "40px", height: "40px", position: "relative" }}>
              <Image
                src={imagePaths.mountain}
                alt=""
                fill
                className="object-contain"
                style={{ filter: `drop-shadow(0 2px 4px ${colors.primary}40)` }}
              />
            </div>
            <div style={{ width: "30px", height: "30px", position: "relative" }}>
              <Image
                src={imagePaths.leaf}
                alt=""
                fill
                className="object-contain"
                style={{ filter: `drop-shadow(0 2px 4px ${colors.primary}40)` }}
              />
            </div>
            <div style={{ width: "40px", height: "40px", position: "relative" }}>
              <Image
                src={imagePaths.flight}
                alt=""
                fill
                className="object-contain"
                style={{ filter: `drop-shadow(0 2px 4px ${colors.primary}40)` }}
              />
            </div>
          </div>

          <h2 
            id="services-title"
            className="mb-3"
            style={{
              color: colors.accent,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: "bold",
            }}
          >
            {isRTL ? "خدماتنا" : "Our Services"}
          </h2>
          <p 
            className="lead"
            style={{
              color: colors.textDark,
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {isRTL 
              ? "نقدم حلولاً متكاملة تجمع بين الخبرة العلمية والتقنيات الحديثة لتحقيق أفضل النتائج لمشاريعك"
              : "We provide integrated solutions combining scientific expertise and modern technologies to achieve the best results for your projects"
            }
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="col-lg-6"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div 
                className="h-100 p-4 rounded-4 position-relative overflow-hidden"
                style={{
                  backgroundColor: colors.lightBg,
                  border: `2px solid ${colors.secondary}`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = service.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = colors.secondary;
                }}
              >
                {/* Service Background Pattern */}
                <div className="position-absolute top-0 end-0" style={{ 
                  width: "150px", 
                  height: "150px",
                  opacity: 0.1,
                  zIndex: 0 
                }}>
                  <Image
                    src={service.bgImage}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="position-relative" style={{ zIndex: 1 }}>
                  {/* Service Icon with Image */}
                  <div className="mb-4">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center position-relative"
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                        border: `2px solid ${service.color}30`,
                      }}
                    >
                      {service.iconComponent}
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 
                    className="mb-3"
                    style={{
                      color: service.color,
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p 
                    className="mb-4"
                    style={{
                      color: colors.textDark,
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <div className="row g-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="col-6">
                        <motion.div 
                          className="d-flex align-items-center gap-2 p-2 rounded"
                          style={{
                            backgroundColor: `${service.color}08`,
                            transition: "all 0.3s ease",
                          }}
                          whileHover={{ 
                            backgroundColor: `${service.color}15`,
                            transform: "translateX(5px)" 
                          }}
                        >
                          <span style={{ color: service.color, fontSize: "1rem" }}>
                            {feature.icon}
                          </span>
                          <span style={{ 
                            color: colors.textDark,
                            fontSize: "0.9rem",
                            fontWeight: "500" 
                          }}>
                            {feature.text}
                          </span>
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link with Arrow */}
                  <div className="mt-4 pt-3 border-top border-light">
                    <Link 
                      href={`/services#${service.id}`} 
                      className="d-inline-flex align-items-center gap-2 text-decoration-none"
                      style={{
                        color: service.color,
                        fontWeight: "600",
                        fontSize: "0.95rem",
                      }}
                    >
                      <span>{isRTL ? "المزيد من التفاصيل" : "Learn More"}</span>
                      <motion.span
                        style={{ 
                          transform: isRTL ? "rotate(180deg)" : "none",
                          display: "inline-block",
                        }}
                        animate={isRTL ? { x: [-5, 0, -5] } : { x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {isRTL ? "←" : "→"}
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section with Integrated Logo */}
        <motion.div 
          className="text-center mt-5 pt-5 position-relative"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Decorative Line with Logo Elements */}
          <div className="position-relative mb-4">
            <div style={{ 
              height: "2px",
              background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary}, ${colors.secondary})`,
              margin: "0 auto",
              maxWidth: "400px",
            }} />
            <div className="position-absolute top-50 start-50 translate-middle d-flex gap-3">
              {[imagePaths.mountain, imagePaths.leaf, imagePaths.flight].map((img, idx) => (
                <motion.div
                  key={idx}
                  style={{ 
                    width: "30px", 
                    height: "30px",
                    position: "relative",
                    backgroundColor: colors.white,
                    padding: "5px",
                    borderRadius: "50%",
                    boxShadow: `0 0 10px ${colors.primary}20`
                  }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <Link href="/services">
        
          </Link>
        </motion.div>
      </div>
    </section>
  );
}