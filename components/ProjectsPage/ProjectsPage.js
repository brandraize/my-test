"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMountain,
  FaSatellite,
  FaLeaf,
  FaCloudSun,
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
  FaGlobe,
  FaWater,
  FaOilCan,
  FaSeedling,
  FaWind,
  FaHardHat,
  FaCheckCircle,
  FaClipboardCheck
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

  // Content translations
  const content = {
    en: {
      hero: {
        title: "Project Portfolio",
        subtitle: "Case Studies & Success Stories",
        description: "Discover our comprehensive portfolio of successful projects in geological, geophysical, environmental, and meteorological services across the region."
      },
      filters: {
        title: "Browse by Category",
        all: "All Projects",
        geological: "Geological",
        geophysical: "Geophysical",
        environmental: "Environmental",
        meteorological: "Meteorological"
      },
      stats: {
        title: "Our Track Record",
        subtitle: "Trusted Experience",
        completed: "Projects Completed",
        countries: "Countries Served",
        clients: "Satisfied Clients",
        years: "Years of Excellence"
      },
      cta: {
        title: "Ready to Start Your Project?",
        subtitle: "Partner with us for expert geological, environmental, and meteorological solutions.",
        button: "Contact Our Experts"
      },
      projectDetails: {
        close: "Close",
        viewDetails: "View Project Details",
        services: "Scope of Services",
        location: "Project Location",
        duration: "Project Duration",
        client: "Client",
        challenge: "Project Challenge",
        solution: "Our Approach",
        results: "Key Achievements",
        description: "Project Overview"
      },
      noProjects: {
        title: "No Projects Found",
        message: "Try selecting a different category"
      },
      pagination: {
        previous: "Previous",
        next: "Next"
      }
    },
    ar: {
      hero: {
        title: "محفظة المشاريع",
        subtitle: "دراسات الحالة وقصص النجاح",
        description: "اكتشف محفظتنا الشاملة للمشاريع الناجحة في الخدمات الجيولوجية والجيوفيزيائية والبيئية والأرصادية عبر المنطقة."
      },
      filters: {
        title: "تصفح حسب الفئة",
        all: "جميع المشاريع",
        geological: "جيولوجية",
        geophysical: "جيوفيزيائية",
        environmental: "بيئية",
        meteorological: "أرصادية"
      },
      stats: {
        title: "سجلنا الحافل",
        subtitle: "خبرة موثوقة",
        completed: "مشروع مكتمل",
        countries: "دولة خدمناها",
        clients: "عميل راضٍ",
        years: "سنوات من التميز"
      },
      cta: {
        title: "مستعد لبدء مشروعك؟",
        subtitle: "شارك معنا للحصول على حلول جيولوجية وبيئية وأرصادية خبيرة.",
        button: "تواصل مع خبرائنا"
      },
      projectDetails: {
        close: "إغلاق",
        viewDetails: "عرض تفاصيل المشروع",
        services: "نطاق الخدمات",
        location: "موقع المشروع",
        duration: "مدة المشروع",
        client: "العميل",
        challenge: "تحدي المشروع",
        solution: "نهجنا",
        results: "الإنجازات الرئيسية",
        description: "نظرة عامة على المشروع"
      },
      noProjects: {
        title: "لم يتم العثور على مشاريع",
        message: "حاول اختيار فئة مختلفة"
      },
      pagination: {
        previous: "السابق",
        next: "التالي"
      }
    }
  };

  const t = content[currentLang];

  // Project categories with icons and colors
  const categories = [
    {
      id: "all",
      name: t.filters.all,
      icon: <FaGlobe />,
      color: "#1e3a8a",
      darkColor: "#1e40af",
      lightColor: "#dbeafe"
    },
    {
      id: "geological",
      name: t.filters.geological,
      icon: <FaMountain />,
      color: "#065f46",
      darkColor: "#047857",
      lightColor: "#d1fae5"
    },
    {
      id: "geophysical",
      name: t.filters.geophysical,
      icon: <FaSatellite />,
      color: "#7c3aed",
      darkColor: "#6d28d9",
      lightColor: "#ede9fe"
    },
    {
      id: "environmental",
      name: t.filters.environmental,
      icon: <FaLeaf />,
      color: "#059669",
      darkColor: "#047857",
      lightColor: "#d1fae5"
    },
    {
      id: "meteorological",
      name: t.filters.meteorological,
      icon: <FaCloudSun />,
      color: "#0ea5e9",
      darkColor: "#0284c7",
      lightColor: "#e0f2fe"
    }
  ];

  // Sample projects data - more realistic for a professional company
  const projectsData = [
    {
      id: 1,
      title: "Northern Region Mineral Resource Assessment",
      category: "geological",
      shortDesc: "Comprehensive mineral resource assessment and geological mapping for mining potential evaluation",
      description: "Conducted a detailed geological survey and mineral resource assessment in the Northern Region of Saudi Arabia. The project involved advanced geological mapping, sampling analysis, and resource estimation to identify economically viable mineral deposits.",
      image: "/projects/mineral-assessment.jpg",
      location: "Northern Saudi Arabia",
      duration: "8 Months",
      client: "National Mining Corporation",
      services: ["Geological Mapping", "Resource Estimation", "Core Sampling", "GIS Analysis", "Technical Reporting"],
      challenge: "Identifying economically viable mineral deposits in remote, complex geological terrain with limited existing data.",
      solution: "Implemented integrated geological mapping with geophysical surveys, drone-based aerial photography, and advanced 3D GIS analysis.",
      results: [
        "Identified 3 high-potential mining sites",
        "Estimated 2.5 million tons of mineral resources",
        "Provided comprehensive geological report with drilling recommendations",
        "Supported client's investment decision with technical data"
      ],
      icon: <FaMountain />,
      year: "2024"
    },
    {
      id: 2,
      title: "National Groundwater Exploration Initiative",
      category: "geophysical",
      shortDesc: "Advanced geophysical surveys for groundwater resource identification in arid regions",
      description: "Executed comprehensive geophysical surveys across multiple regions using electrical resistivity tomography (ERT) and seismic refraction methods to map and characterize groundwater aquifers.",
      image: "/projects/groundwater-survey.jpg",
      location: "Multiple Regions, Saudi Arabia",
      duration: "12 Months",
      client: "Ministry of Environment, Water & Agriculture",
      services: ["ERT Surveys", "Seismic Refraction", "Data Processing", "3D Modeling", "Drilling Guidance"],
      challenge: "Locating sustainable groundwater resources in regions with scarce rainfall and complex subsurface geology.",
      solution: "Deployed integrated geophysical methods with real-time data processing and AI-powered predictive modeling.",
      results: [
        "Mapped 8 major aquifer systems",
        "Identified sustainable water sources for 5 communities",
        "Provided precise drilling coordinates with 95% success rate",
        "Established groundwater monitoring network"
      ],
      icon: <FaWater />,
      year: "2023"
    },
    {
      id: 3,
      title: "Industrial Zone Environmental Impact Assessment",
      category: "environmental",
      shortDesc: "Comprehensive EIA and environmental monitoring for new industrial development",
      description: "Conducted a full Environmental Impact Assessment for a new industrial complex, including baseline studies, impact prediction, and mitigation planning.",
      image: "/projects/eia-project.jpg",
      location: "Eastern Province Industrial City",
      duration: "10 Months",
      client: "Industrial Development Authority",
      services: ["Environmental Impact Assessment", "Air Quality Monitoring", "Noise Assessment", "Ecological Studies", "Compliance Auditing"],
      challenge: "Balancing industrial development with environmental protection and regulatory compliance in sensitive ecosystems.",
      solution: "Implemented continuous monitoring systems, predictive modeling, and stakeholder engagement programs.",
      results: [
        "Achieved full regulatory compliance",
        "Developed comprehensive mitigation strategy",
        "Reduced environmental impact by 40% through design recommendations",
        "Received environmental certification"
      ],
      icon: <FaLeaf />,
      year: "2024"
    },
    {
      id: 4,
      title: "National Weather Monitoring Network",
      category: "meteorological",
      shortDesc: "Design and installation of automated weather stations network for climate monitoring",
      description: "Designed, installed, and commissioned a nationwide network of automated weather stations for comprehensive meteorological data collection and climate monitoring.",
      image: "/projects/weather-stations.jpg",
      location: "Nationwide Deployment",
      duration: "18 Months",
      client: "National Center for Meteorology",
      services: ["Station Design", "Equipment Installation", "Data Collection", "System Integration", "Maintenance"],
      challenge: "Installing reliable meteorological equipment in remote, harsh environments with extreme weather conditions.",
      solution: "Used ruggedized, solar-powered equipment with satellite communication and remote monitoring capabilities.",
      results: [
        "Installed 25 automated weather stations",
        "Achieved 99.8% data reliability",
        "Reduced maintenance costs by 30% through remote monitoring",
        "Improved weather prediction accuracy by 25%"
      ],
      icon: <FaWind />,
      year: "2023"
    },
    {
      id: 5,
      title: "Offshore Hydrocarbon Exploration Support",
      category: "geophysical",
      shortDesc: "2D/3D seismic surveys for offshore oil and gas exploration",
      description: "Provided comprehensive geophysical support for offshore hydrocarbon exploration, including seismic data acquisition, processing, and interpretation.",
      image: "/projects/seismic-survey.jpg",
      location: "Arabian Gulf",
      duration: "9 Months",
      client: "Major Energy Company",
      services: ["2D/3D Seismic Acquisition", "Data Processing", "Subsurface Imaging", "Interpretation", "Risk Assessment"],
      challenge: "Acquiring high-quality seismic data in challenging marine environments with complex subsurface structures.",
      solution: "Utilized advanced marine seismic acquisition technology with real-time quality control and proprietary processing algorithms.",
      results: [
        "Provided high-resolution subsurface images",
        "Identified 4 promising hydrocarbon structures",
        "Reduced exploration risk by 35%",
        "Supported successful drilling campaign"
      ],
      icon: <FaOilCan />,
      year: "2023"
    },
    {
      id: 6,
      title: "Mine Site Rehabilitation Program",
      category: "environmental",
      shortDesc: "Ecological restoration and land rehabilitation of former mining sites",
      description: "Led a comprehensive ecological rehabilitation program for previously mined lands, implementing sustainable restoration techniques and long-term monitoring.",
      image: "/projects/rehabilitation.jpg",
      location: "Western Mining Region",
      duration: "24 Months",
      client: "Mining Corporation",
      services: ["Site Assessment", "Rehabilitation Planning", "Soil Treatment", "Revegetation", "Monitoring"],
      challenge: "Restoring ecological function and biodiversity in severely degraded lands with contaminated soils.",
      solution: "Applied innovative soil amendment techniques, native species selection, and phased restoration approach.",
      results: [
        "Rehabilitated 150 hectares of mined land",
        "Increased biodiversity by 60%",
        "Achieved 85% vegetation cover",
        "Created sustainable ecosystem"
      ],
      icon: <FaSeedling />,
      year: "2022"
    },
    {
      id: 7,
      title: "Major Infrastructure Geotechnical Investigation",
      category: "geological",
      shortDesc: "Comprehensive geotechnical investigation for major infrastructure project foundation design",
      description: "Conducted detailed geotechnical investigations for the foundation design of a major infrastructure project, including soil testing, rock mechanics analysis, and foundation recommendations.",
      image: "/projects/geotechnical.jpg",
      location: "Riyadh Metro Project",
      duration: "6 Months",
      client: "Public Transport Authority",
      services: ["Soil Investigation", "Rock Mechanics", "Laboratory Testing", "Foundation Analysis", "Risk Assessment"],
      challenge: "Assessing complex subsurface conditions for large-scale infrastructure in urban environment.",
      solution: "Implemented integrated investigation methods including drilling, in-situ testing, and advanced laboratory analysis.",
      results: [
        "Provided safe foundation design recommendations",
        "Identified and mitigated geotechnical risks",
        "Achieved project approval ahead of schedule",
        "Reduced construction costs by 15% through optimized design"
      ],
      icon: <FaHardHat />,
      year: "2024"
    },
    {
      id: 8,
      title: "Urban Climate Resilience Study",
      category: "meteorological",
      shortDesc: "Climate change impact assessment and resilience planning for urban areas",
      description: "Conducted comprehensive climate change impact study analyzing historical trends and predicting future scenarios for urban planning and infrastructure resilience.",
      image: "/projects/climate-study.jpg",
      location: "Major Metropolitan Areas",
      duration: "14 Months",
      client: "Urban Planning Commission",
      services: ["Climate Analysis", "Trend Prediction", "Impact Assessment", "Resilience Planning", "Policy Recommendations"],
      challenge: "Predicting climate impacts on urban infrastructure and developing adaptive strategies.",
      solution: "Used advanced climate modeling, machine learning algorithms, and scenario planning.",
      results: [
        "Developed climate resilience strategy",
        "Identified vulnerable infrastructure",
        "Provided adaptation guidelines",
        "Supported policy development"
      ],
      icon: <FaCloudSun />,
      year: "2023"
    }
  ];

  // Statistics data
  const statistics = [
    { value: "200+", label: t.stats.completed, icon: <FaClipboardCheck /> },
    { value: "30+", label: t.stats.countries, icon: <FaGlobe /> },
    { value: "100+", label: t.stats.clients, icon: <FaUsers /> },
    { value: "15+", label: t.stats.years, icon: <FaIndustry /> }
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

      {/* Statistics Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statsContent}>
            <div className={styles.statsHeader}>
              <span className={styles.statsSubtitle}>
                {t.stats.subtitle}
              </span>
              <h2 className={styles.statsTitle}>
                {t.stats.title}
              </h2>
            </div>

            <div className={styles.statsGrid}>
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={styles.statCard}
                >
                  <div className={styles.statIconWrapper}>
                    <div className={styles.statIcon}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className={styles.statContent}>
                    <h3 className={styles.statValue}>
                      {stat.value}
                    </h3>
                    <p className={styles.statLabel}>
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                  <span className={styles.filterIcon}>
                    {category.icon}
                  </span>
                  {category.name}
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
                        <span className={styles.categoryIcon}>
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
                          <span>{project.location}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <FaCalendarAlt className={styles.metaIcon} />
                          <span>{project.duration}</span>
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
                        {t.projectDetails.viewDetails}
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
                <FaChevronLeft />
                <span>{t.pagination.previous}</span>
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
                <span>{t.pagination.next}</span>
                <FaChevronRight />
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
              <h3>{t.noProjects.title}</h3>
              <p>{t.noProjects.message}</p>
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
                  <FaTimes />
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
                          <h4>{t.projectDetails.location}</h4>
                          <p>{selectedProject.location}</p>
                        </div>
                      </div>
                      
                      <div className={styles.infoItem}>
                        <div className={styles.infoIcon}>
                          <FaCalendarAlt />
                        </div>
                        <div className={styles.infoContent}>
                          <h4>{t.projectDetails.duration}</h4>
                          <p>{selectedProject.duration}</p>
                        </div>
                      </div>
                      
                      <div className={styles.infoItem}>
                        <div className={styles.infoIcon}>
                          <FaUsers />
                        </div>
                        <div className={styles.infoContent}>
                          <h4>{t.projectDetails.client}</h4>
                          <p>{selectedProject.client}</p>
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
                        <FaExternalLinkAlt className={styles.detailTitleIcon} />
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
                            {result}
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
                  {isRTL ? "ناقش مشروعًا مماثلًا" : "Discuss a Similar Project"}
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
              {t.cta.button}
              <FaArrowRight className={styles.buttonIcon} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}