"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaGlobeAmericas,
  FaAward,
} from "react-icons/fa";
import Image from "next/image";
import styles from "./AboutPage.module.css";

// CHANGE: Accept lang prop directly like other components
export default function AboutPage({ lang = "en" }) {
  const currentLang = lang; // CHANGE: Use lang directly
  const router = useRouter();
  const isRTL = currentLang === "ar";

  // Logo image paths
  const logoParts = {
    circle: '/circel.png',
    mountain: '/moutain.png',
    leaf: '/leaf.png',
    flight: '/flight.png'
  };

  // Content translations (keep your existing content object)
  const content = {
    en: {
      hero: {
        title: "About Sensing Nature",
        subtitle: "Innovative Environmental, Geological, Geophysical & Meteorological Solutions",
        description: "Accurate insights with the latest geological & geophysical techniques.",
      },
      missionVision: {
        title: "We've got what you need!",
        description: "At Sensing Nature we are committed to delivering expert, reliable, and innovative services across geological, geophysical, environmental, and meteorological disciplines. With a team of experienced professionals and state-of-the-art technologies, we provide comprehensive insights to support exploration, development, environmental stewardship, and risk management worldwide.",
        missionTitle: "Our Mission",
        missionText: "At Sensing Nature we are committed to delivering expert, reliable, and innovative services across geological, geophysical, environmental, and meteorological disciplines. With a team of experienced professionals and state-of-the-art technologies, we provide comprehensive insights to support exploration, development, environmental stewardship, and risk management worldwide.",
        visionTitle: "Our Vision",
        visionText: "Facilitate decision-making for entities and individuals by providing accurate and reliable information.",
      },
      contact: {
        title: "Get in Touch",
        subtitle: "Ready to start your next project with us? Send us a message and we will get back to you as soon as possible!",
        buttons: {
          contact: "Contact Us",
          services: "Our Services"
        }
      }
    },
    ar: {
      hero: {
        title: "عن سينسينج نيتشر",
        subtitle: "حلول بيئية وجيولوجية وجيوفيزيائية وأرصادية مبتكرة",
        description: "رؤى دقيقة باستخدام أحدث التقنيات الجيولوجية والجيوفيزيائية.",
      },
      missionVision: {
        title: "لدينا ما تحتاجه!",
        description: "في سينسينج نيتشر، نلتزم بتقديم خدمات متخصصة وموثوقة ومبتكرة في مختلف التخصصات الجيولوجية والجيوفيزيائية والبيئية والأرصاد الجوية. بفضل فريق من المتخصصين ذوي الخبرة والتقنيات الحديثة، نقدم رؤى شاملة لدعم الاستكشاف والتطوير والمحافظة على البيئة وإدارة المخاطر في جميع أنحاء العالم.",
        missionTitle: "مهمتنا",
        missionText: "تقديم خدمات استشارية وتطويرية وهندسية وأرصاد جوية وبيئية متميزة ودقيقة من خلال توفير حلول مبتكرة للتحديات المعقدة باستخدام أفضل الكفاءات والطرق والوسائل العلمية من أجل تحقيق القيادة والتميز في المملكة العربية السعودية ودول الخليج العربي والشرق الأوسط.",
        visionTitle: "رؤيتنا",
        visionText: "تسهيل عملية اتخاذ القرار للجهات والأفراد من خلال توفير معلومات دقيقة وموثوقة.",
      },
      contact: {
        title: "تواصل معنا",
        subtitle: "هل أنت مستعد لبدء مشروعك القادم معنا؟ أرسل لنا رسالة وسنعود إليك في أقرب وقت ممكن!",
        buttons: {
          contact: "تواصل معنا",
          services: "خدماتنا"
        }
      }
    }
  };

  const t = content[currentLang];

  return (
    <div className={styles.container} dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section with animated logo parts */}
      <section className={styles.heroSection}>
        {/* Background logo parts */}
        <div className={styles.logoBackground}>
          {/* Animated Circle */}
          <motion.div
            className={styles.logoPart}
            style={{
              position: 'absolute',
              width: '150px',
              height: '150px',
              top: '10%',
              left: '5%',
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Image
              src={logoParts.circle}
              alt="Circle"
              fill
              style={{ objectFit: 'contain', opacity: 0.3 }}
            />
          </motion.div>

          {/* Animated Mountain */}
          <motion.div
            className={styles.logoPart}
            style={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              top: '15%',
              right: '10%',
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Image
              src={logoParts.mountain}
              alt="Mountain"
              fill
              style={{ objectFit: 'contain', opacity: 0.3 }}
            />
          </motion.div>

          {/* Animated Leaf */}
          <motion.div
            className={styles.logoPart}
            style={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              bottom: '20%',
              left: '15%',
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Image
              src={logoParts.leaf}
              alt="Leaf"
              fill
              style={{ objectFit: 'contain', opacity: 0.3 }}
            />
          </motion.div>

          {/* Animated Flight/Bird */}
          <motion.div
            className={styles.logoPart}
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              bottom: '15%',
              right: '15%',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src={logoParts.flight}
              alt="Flight"
              fill
              style={{ objectFit: 'contain', opacity: 0.3 }}
            />
          </motion.div>
        </div>

        {/* Curved overlay */}
        <div className={styles.curveOverlay}></div>
        
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.p 
            className={styles.heroDescription}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.description}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionSection}>
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6 mb-5 mb-lg-0"
              initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>
                {t.missionVision.title}
              </h2>
              <p className={styles.sectionDescription}>
                {t.missionVision.description}
              </p>
              
              {/* Mission Card */}
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FaAward size={24} />
                </div>
                <h3 className={styles.valueTitle}>
                  {t.missionVision.missionTitle}
                </h3>
                <p className={styles.valueText}>
                  {t.missionVision.missionText}
                </p>
              </div>

              {/* Vision Card */}
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <FaGlobeAmericas size={24} />
                </div>
                <h3 className={styles.valueTitle}>
                  {t.missionVision.visionTitle}
                </h3>
                <p className={styles.valueText}>
                  {t.missionVision.visionText}
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="col-lg-6"
              initial={{ x: isRTL ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageContainer}>
                {/* Animated logo parts in image container */}
                <div className={styles.imageLogoOverlay}>
                  {/* Floating Circle */}
                  <motion.div
                    className={styles.floatingLogo}
                    style={{
                      position: 'absolute',
                      width: '60px',
                      height: '60px',
                      top: '10%',
                      left: '10%',
                      zIndex: 2,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <Image
                      src={logoParts.circle}
                      alt="Circle"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </motion.div>

                  {/* Floating Leaf */}
                  <motion.div
                    className={styles.floatingLogo}
                    style={{
                      position: 'absolute',
                      width: '50px',
                      height: '50px',
                      bottom: '20%',
                      right: '15%',
                      zIndex: 2,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      rotate: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                  >
                    <Image
                      src={logoParts.leaf}
                      alt="Leaf"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </motion.div>
                </div>
                
                <Image
                  src="/bg-masthead.png"
                  alt={t.missionVision.title}
                  fill
                  className={styles.missionImage}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.contactSection}>
        {/* Background logo parts for contact section */}
        <div className={styles.contactBackground}>
          <motion.div
            className={styles.contactLogoPart}
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              top: '20%',
              left: '5%',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Image
              src={logoParts.circle}
              alt="Circle"
              fill
              style={{ objectFit: 'contain', opacity: 0.1 }}
            />
          </motion.div>

          <motion.div
            className={styles.contactLogoPart}
            style={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              bottom: '30%',
              right: '10%',
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src={logoParts.flight}
              alt="Flight"
              fill
              style={{ objectFit: 'contain', opacity: 0.1 }}
            />
          </motion.div>
        </div>

        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.contactTitle}>
              {t.contact.title}
            </h2>
            <p className={styles.contactSubtitle}>
              {t.contact.subtitle}
            </p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.primaryButton}
                onClick={() => router.push(`/${currentLang}/contact`)}
              >
                {t.contact.buttons.contact}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.secondaryButton}
                onClick={() => router.push(`/${currentLang}/services`)}
              >
                {t.contact.buttons.services}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}