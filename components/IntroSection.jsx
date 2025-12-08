"use client";
import { motion } from "framer-motion";
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react'; // Added import

export default function IntroSection({ lang = "en" }) {
  const isRTL = lang === "ar";
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted on client
  
  useEffect(() => {
    setIsMounted(true); // Component is now mounted on client
  }, []);

  // Image paths - assuming images are in the public folder
  const imagePaths = {
    circle: '/circel.png',
    mountain: '/moutain.png',
    leaf: '/leaf.png',
    flight: '/flight.png'
  };
  
  // Color scheme
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
  
  // Content based on language
  const content = {
    title: isRTL ? "  لدينا ما تحتاجه!" : "We've got what you need!",
    description: isRTL 
      ? ` "              في "سينسينغ نيتشر"، نلتزم بتقديم خدمات متخصصة وموثوقة ومبتكرة في مختلف التخصصات الجيولوجية والجيوفيزيائية والبيئية والأرصاد الجوية. بفضل فريق من المتخصصين ذوي الخبرة والتقنيات الحديثة، نقدم رؤى شاملة لدعم الاستكشاف والتطوير والمحافظة على البيئة وإدارة المخاطر في جميع أنحاء العالم.        .`
      : `At "Sensing Nature" we are committed to delivering expert, reliable, and innovative services across geological, geophysical, environmental, and meteorological disciplines. With a team of experienced professionals and state-of-the-art technologies, we provide comprehensive insights to support exploration, development, environmental stewardship, and risk management worldwide.`,
    
    missionTitle: isRTL ? "مهمتنا" : "Our Mission",
    missionText: isRTL 
      ? "تقديم خدمات استشارية وتطويرية وهندسية وأرصاد جوية وبيئية متميزة ودقيقة من خلال توفير حلول مبتكرة للتحديات المعقدة باستخدام أفضل الكفاءات والطرق والوسائل العلمية من أجل تحقيق القيادة والتميز في المملكة العربية السعودية ودول الخليج العربي والشرق الأوسط."
      : "At Sensing Nature we are committed to delivering expert, reliable, and innovative services across geological, geophysical, environmental, and meteorological disciplines. With a team of experienced professionals and state-of-the-art technologies, we provide comprehensive insights to support exploration, development, environmental stewardship, and risk management worldwide.",
    
    visionTitle: isRTL ? "رؤيتنا" : "Our Vision",
    visionText: isRTL 
      ? "تسهيل عملية اتخاذ القرار للجهات والأفراد من خلال توفير معلومات دقيقة وموثوقة."
      : "Facilitate decision-making for entities and individuals by providing accurate and reliable information."
  };


  const getStableValue = (index, seed = 0) => {
    // Simple deterministic pseudo-random function
    const x = Math.sin(index + seed) * 10000;
    return x - Math.floor(x); // Returns value between 0 and 1
  };

  // Fixed: Use deterministic values for animations
  const getSize = (index, base = 50, variation = 30) => {
    return base + getStableValue(index, 100) * variation;
  };

  const getPosition = (index, seed = 0) => {
    return getStableValue(index, seed) * 100;
  };

  // Fixed: Get image based on index, not random
  const getImage = (index) => {
    const images = [imagePaths.circle, imagePaths.mountain, imagePaths.leaf, imagePaths.flight];
    return images[index % 4];
  };

  // Professional Logo Component with varied animations
  const ProfessionalLogo = () => (
    <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
      {/* Animated Background Grid */}
      <div className="position-absolute w-100 h-100">
        {/* Grid Circles - FIXED: Use deterministic sizes */}
        {[...Array(16)].map((_, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const size = getSize(i, 50, 30); // Fixed: deterministic size
          return (
            <motion.div
              key={`grid-circle-${i}`}
              className="position-absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${col * 25}%`,
                top: `${row * 25}%`,
                opacity: 0.05,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + (i % 10), // Fixed: deterministic duration
                repeat: Infinity,
                ease: "linear",
                delay: i % 5, // Fixed: deterministic delay
              }}
            >
              <Image
                src={imagePaths.circle}
                alt=""
                fill
                className="object-contain"
              />
            </motion.div>
          );
        })}
      </div>
      
      {/* Main Logo Container */}
      <motion.div
        className="position-relative z-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ width: "320px", height: "320px" }}
      >
        {/* Central Main Circle */}
        <motion.div
          className="position-absolute rounded-circle"
          style={{
            width: "280px",
            height: "280px",
            left: "20px",
            top: "20px",
            backgroundColor: `${colors.primary}10`,
            border: `2px solid ${colors.primary}20`,
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Orbit 1 - Large Floating Elements */}
        <motion.div
          className="position-absolute"
          style={{
            width: "320px",
            height: "320px",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Position 1: Top Right - Mountain */}
          <motion.div
            className="position-absolute"
            style={{
              width: "100px",
              height: "100px",
              top: "0px",
              left: "220px",
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            {/* <div className="w-100 h-100 position-relative">
              <Image
                src={imagePaths.mountain}
                alt="Mountain Element"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 4px 8px rgba(16, 185, 129, 0.4))" }}
              />
            </div> */}
          </motion.div>
          
          {/* Position 2: Bottom Left - Flight/Bird */}
          {/* <motion.div
            className="position-absolute"
            style={{
              width: "90px",
              height: "90px",
              top: "230px",
              left: "10px",
            }}
            animate={{
              x: [0, 10, 0],
              y: [0, -20, 0],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              x: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            <div className="w-100 h-100 position-relative">
              <Image
                src={imagePaths.flight}
                alt="Flight Element"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 4px 8px rgba(14, 165, 233, 0.4))" }}
              />
            </div>
          </motion.div> */}
        </motion.div>
        
        {/* Orbit 2 - Medium Floating Elements */}
     
        
        {/* Static Center Elements */}
        <div className="position-absolute" style={{
          width: "160px",
          height: "160px",
          left: "80px",
          top: "80px",
        }}>
          {/* Center Mountain */}
      
          
          {/* Center Leaf Cluster */}
          <motion.div
            className="position-absolute"
            style={{
              width: "40px",
              height: "40px",
              left: "10px",
              top: "10px",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="w-100 h-100 position-relative">
              <Image
                src={imagePaths.leaf}
                alt="Center Leaf"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          
          <motion.div
            className="position-absolute"
            style={{
              width: "30px",
              height: "30px",
              right: "10px",
              bottom: "10px",
            }}
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
          >
            <div className="w-100 h-100 position-relative">
              <Image
                src={imagePaths.leaf}
                alt="Center Leaf"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          
          {/* Flying Bird near Center */}
          <motion.div
            className="position-absolute"
            style={{
              width: "50px",
              height: "50px",
              right: "5px",
              top: "55px",
            }}
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="w-100 h-100 position-relative">
              <Image
                src={imagePaths.flight}
                alt="Flying Bird"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          
          {/* Central Glow Effect */}
          <div className="position-absolute rounded-circle"
            style={{
              width: "140px",
              height: "140px",
              left: "10px",
              top: "10px",
              background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
              filter: "blur(10px)",
              animation: "pulse 4s ease-in-out infinite",
            }}
          />
        </div>
        
        {/* Floating Independent Elements */}
        {/* Independent Leaf - Top Left Corner */}
        <motion.div
          className="position-absolute"
          style={{
            width: "45px",
            height: "45px",
            left: "0px",
            top: "40px",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            rotate: [0, 45, 90, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-100 h-100 position-relative">
            <Image
              src={imagePaths.leaf}
              alt="Floating Leaf"
              fill
              className="object-contain"
              style={{ opacity: 0.7 }}
            />
          </div>
        </motion.div>
        
        {/* Independent Circle - Bottom Right Corner */}
        <motion.div
          className="position-absolute"
          style={{
            width: "60px",
            height: "60px",
            right: "0px",
            bottom: "60px",
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <div className="w-100 h-100 position-relative">
            <Image
              src={imagePaths.circle}
              alt="Floating Circle"
              fill
              className="object-contain"
              style={{ opacity: 0.6 }}
            />
          </div>
        </motion.div>
        
        {/* Independent Bird - Top Right Flying */}
        <motion.div
          className="position-absolute"
          style={{
            width: "40px",
            height: "40px",
            right: "20px",
            top: "0px",
          }}
          animate={{
            x: [0, 25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-100 h-100 position-relative">
            <Image
              src={imagePaths.flight}
              alt="Flying Bird"
              fill
              className="object-contain"
              style={{ opacity: 0.8 }}
            />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Company Name */}
      <motion.div
        className="text-center mt-4 position-absolute"
        style={{
          bottom: "40px",
          left: 0,
          right: 0,
          zIndex: 3,
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 
          className="mb-2"
          style={{
            color: colors.accent,
            fontWeight: "700",
            fontSize: "2rem",
            letterSpacing: "1px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          }}
        >
          Sensing Nature
        </h2>
        {isRTL && (
          <h3 
            className="mb-3"
            style={{
              color: colors.accent,
              fontWeight: "600",
              fontSize: "1.4rem",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            استشعار الطبيعة
          </h3>
        )}
        <div 
          className="mx-auto"
          style={{
            width: "100px",
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)`,
            margin: "0.5rem 0",
          }}
        />
        <p 
          style={{
            color: colors.textDark,
            fontSize: "0.9rem",
            fontWeight: "500",
            letterSpacing: "0.5px",
            marginTop: "0.5rem",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          {isRTL 
            ? "حلول بيئية مبتكرة ومستدامة" 
            : "Innovative & Sustainable Environmental Solutions"
          }
        </p>
      </motion.div>
      
      {/* Background Floating Particles - FIXED: Use deterministic values */}
      <div className="position-absolute w-100 h-100" style={{ pointerEvents: "none", zIndex: 0 }}>
        {[...Array(12)].map((_, i) => {
          const size = 4 + (i % 8); // Fixed: deterministic size
          const img = getImage(i); // Fixed: deterministic image
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="position-absolute"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${(i * 7) % 100}%`, // Fixed: deterministic position
                top: `${(i * 11) % 100}%`, // Fixed: deterministic position
                opacity: 0.1,
              }}
              animate={{
                x: [0, ((i * 3) % 100) - 50, 0], // Fixed: deterministic animation
                y: [0, ((i * 5) % 100) - 50, 0], // Fixed: deterministic animation
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10 + (i % 20), // Fixed: deterministic duration
                repeat: Infinity,
                ease: "linear",
                delay: i % 5, // Fixed: deterministic delay
              }}
            >
              <div className="w-100 h-100 position-relative">
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );

  // Don't render animations until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <section 
        className="py-5"
        style={{
          backgroundColor: colors.lightBg,
          direction: isRTL ? "rtl" : "ltr",
          overflow: "hidden",
        }}
        aria-labelledby="intro-title"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Simplified version for SSR */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 id="intro-title" className="mb-4" style={{ color: colors.accent }}>
                {content.title}
              </h2>
              <p className="mb-4 lead" style={{ color: colors.textDark }}>
                {content.description}
              </p>
            </div>
            <div className="col-lg-6">
              <div style={{ height: "500px", backgroundColor: colors.white }} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Head>
        <title>{isRTL ? "عن شركتنا - سينسينغ نيتشر" : "About Us - Sensing Nature"}</title>
        <meta name="description" content={content.description.substring(0, 160)} />
      </Head>

      <section 
        className="py-5"
        style={{
          backgroundColor: colors.lightBg,
          direction: isRTL ? "rtl" : "ltr",
          overflow: "hidden",
        }}
        aria-labelledby="intro-title"
      >
        {/* Background Decorative Elements - FIXED: Use deterministic values */}
        <div className="position-absolute w-100 h-100" style={{ 
          top: 0, 
          left: 0,
          pointerEvents: "none",
          opacity: 0.03,
          zIndex: 0
        }}>
          {[...Array(8)].map((_, i) => {
            const size = 100 + (i * 20); // Fixed: deterministic size
            const img = getImage(i); // Fixed: deterministic image
            
            return (
              <motion.div
                key={`bg-deco-${i}`}
                className="position-absolute"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${(i * 12) % 100}%`, // Fixed: deterministic position
                  top: `${(i * 15) % 100}%`, // Fixed: deterministic position
                }}
                animate={{
                  rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 30 + (i * 5), // Fixed: deterministic duration
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 5 + (i % 5), // Fixed: deterministic duration
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <div className="w-100 h-100 position-relative">
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="col-lg-6 mb-5 mb-lg-0"
              initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h2
                id="intro-title"
                className="mb-4"
                style={{
                  color: colors.accent,
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: "bold",
                }}
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {content.title}
              </motion.h2>

              <motion.p
                className="mb-4 lead"
                style={{
                  color: colors.textDark,
                  fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                  lineHeight: 1.8,
                }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {content.description}
              </motion.p>

              {/* Mission Card with Decorative Image */}
              <motion.div
                className="mb-4 p-4 rounded-4 position-relative overflow-hidden"
                style={{
                  backgroundColor: colors.white,
                  borderLeft: isRTL ? "none" : `4px solid ${colors.primary}`,
                  borderRight: isRTL ? `4px solid ${colors.primary}` : "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                aria-labelledby="mission-title"
              >
                {/* Mission Decorative Image */}
                <motion.div
                  className="position-absolute"
                  style={{
                    width: "60px",
                    height: "60px",
                    right: isRTL ? "10px" : "auto",
                    left: isRTL ? "auto" : "10px",
                    top: "10px",
                    opacity: 0.1,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-100 h-100 position-relative">
                    <Image
                      src={imagePaths.mountain}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                
                <h3 
                  id="mission-title"
                  className="mb-3"
                  style={{
                    color: colors.accent,
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                >
                  {content.missionTitle}
                </h3>
                <p 
                  style={{
                    color: colors.textDark,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {content.missionText}
                </p>
              </motion.div>

              {/* Vision Card with Decorative Image */}
              <motion.div
                className="mb-4 p-4 rounded-4 position-relative overflow-hidden"
                style={{
                  backgroundColor: colors.white,
                  borderLeft: isRTL ? "none" : `4px solid ${colors.primaryDark}`,
                  borderRight: isRTL ? `4px solid ${colors.primaryDark}` : "none",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                aria-labelledby="vision-title"
              >
                {/* Vision Decorative Image */}
                <motion.div
                  className="position-absolute"
                  style={{
                    width: "50px",
                    height: "50px",
                    right: isRTL ? "10px" : "auto",
                    left: isRTL ? "auto" : "10px",
                    bottom: "10px",
                    opacity: 0.1,
                  }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <div className="w-100 h-100 position-relative">
                    <Image
                      src={imagePaths.flight}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                
                <h3 
                  id="vision-title"
                  className="mb-3"
                  style={{
                    color: colors.accent,
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                >
                  {content.visionTitle}
                </h3>
                <p 
                  style={{
                    color: colors.textDark,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {content.visionText}
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Professional Logo */}
            <motion.div 
              className="col-lg-6"
              initial={{ x: isRTL ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="position-relative rounded-4 overflow-hidden shadow-lg" 
                style={{
                  height: "500px",
                  border: `3px solid ${colors.secondary}`,
                  backgroundColor: colors.white,
                }}
              >
                <ProfessionalLogo />
              </div>
              
              <motion.p
                className="text-center mt-3"
                style={{
                  color: colors.textLight,
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {isRTL 
                  ? "نحن نوفر حلولاً شاملة تجمع بين العلم المتقدم والبيئة المستدامة" 
                  : "We provide comprehensive solutions combining advanced science and sustainable environment"
                }
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Separator Line with Animated Elements */}
        <div className="container mt-5 pt-5 position-relative">
          <div style={{ 
            height: "2px",
            background: `linear-gradient(90deg, ${colors.secondary}, ${colors.primary}, ${colors.secondary})`,
            margin: "0 auto",
            maxWidth: "80%",
            borderRadius: "1px",
            opacity: 0.6,
            position: "relative",
          }} />
          
          {/* Animated Icons on Separator */}
          <motion.div
            className="position-absolute"
            style={{
              left: "10%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-100 h-100 position-relative">
              <Image
                src={imagePaths.mountain}
                alt=""
                fill
                className="object-contain"
                style={{ filter: `drop-shadow(0 0 4px ${colors.primary})` }}
              />
            </div>
          </motion.div>
          
          <motion.div
            className="position-absolute"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "25px",
              height: "25px",
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="w-100 h-100 position-relative">
              <Image
                src={imagePaths.leaf}
                alt=""
                fill
                className="object-contain"
                style={{ filter: `drop-shadow(0 0 4px ${colors.primary})` }}
              />
            </div>
          </motion.div>
          
          <motion.div
            className="position-absolute"
            style={{
              right: "10%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "30px",
              height: "30px",
            }}
            animate={{ x: [0, 5, 0], y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-100 h-100 position-relative">
              <Image
                src={imagePaths.flight}
                alt=""
                fill
                className="object-contain"
                style={{ filter: `drop-shadow(0 0 4px ${colors.primary})` }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}