"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaUser,
  FaEnvelopeOpen,
  FaPhoneAlt,
  FaComments,
  FaArrowRight,
  FaBuilding,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import styles from "./ContactPage.module.css";

export default function ContactPage({ lang = "en" }) {
  const currentLang = lang;
  const router = useRouter();
  const isRTL = currentLang === "ar";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Content translations
  const content = {
    en: {
      hero: {
        title: "Get In Touch With Our Experts",
        subtitle: "Contact Us • Support • Consultation",
        description: "Have questions about our services? Ready to start your next project? Our team is here to help you with accurate insights and innovative solutions."
      },
      contactInfo: {
        title: "Contact Information",
        subtitle: "We're here to help"
      },
      location: {
        title: "Our Location",
        address: "6931 King Fahd Branch Rd 3716 Ar Rabwa Dist"
      },
      phone: {
        title: "Phone Number",
        number: "+966 53 416 1555",
        whatsapp: "Chat on WhatsApp"
      },
      email: {
        title: "Email Address",
        address: "info@sensingnatures.com"
      },
      hours: {
        title: "Business Hours",
        days: "Sunday - Thursday",
        time: "8:00 AM - 5:00 PM",
        friday: "Friday - Saturday: By Appointment"
      },
      form: {
        title: "Send Us a Message",
        subtitle: "Fill out the form below and we'll get back to you as soon as possible",
        labels: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          company: "Company/Organization",
          subject: "Select Subject",
          message: "Your Message"
        },
        placeholders: {
          name: "Enter your full name",
          email: "name@example.com",
          phone: "(123) 456-7890",
          company: "Your company name",
          subject: "Choose a subject",
          message: "Enter your message here..."
        },
        subjects: [
          "General Inquiry",
          "Geological Services",
          "Geophysical Services",
          "Environmental Services",
          "Meteorological Services",
          "Request for Proposal",
          "Technical Support",
          "Partnership Inquiry"
        ],
        submit: "Send Message",
        submitting: "Sending...",
        success: "Message Sent Successfully!"
      },
      social: {
        title: " ",
        follow: ""
      },
      cta: {
        title: "Prefer a Direct Call?",
        subtitle: "Call our experts directly for immediate assistance",
        button: "Call Now"
      }
    },
    ar: {
      hero: {
        title: "تواصل مع خبرائنا",
        subtitle: "اتصل بنا • الدعم • الاستشارة",
        description: "هل لديك أسئلة حول خدماتنا؟ مستعد لبدء مشروعك القادم؟ فريقنا هنا لمساعدتك برؤى دقيقة وحلول مبتكرة."
      },
      contactInfo: {
        title: "معلومات الاتصال",
        subtitle: "نحن هنا للمساعدة"
      },
      location: {
        title: "موقعنا",
        address: "6931 طريق فرع الملك فهد 3716 حي الربوة"
      },
      phone: {
        title: "رقم الهاتف",
        number: "+966 53 416 1555",
        whatsapp: "محادثة عبر واتساب"
      },
      email: {
        title: "البريد الإلكتروني",
        address: "info@sensingnatures.com"
      },
      hours: {
        title: "ساعات العمل",
        days: "الأحد - الخميس",
        time: "8:00 صباحًا - 5:00 مساءً",
        friday: "الجمعة - السبت: بالحجز المسبق"
      },
      form: {
        title: "أرسل لنا رسالة",
        subtitle: "املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن",
        labels: {
          name: "الاسم الكامل",
          email: "البريد الإلكتروني",
          phone: "رقم الهاتف",
          company: "الشركة / المؤسسة",
          subject: "اختر الموضوع",
          message: "رسالتك"
        },
        placeholders: {
          name: "أدخل اسمك الكامل",
          email: "name@example.com",
          phone: "(123) 456-7890",
          company: "اسم شركتك",
          subject: "اختر موضوع الرسالة",
          message: "أدخل رسالتك هنا..."
        },
        subjects: [
          "استفسار عام",
          "الخدمات الجيولوجية",
          "الخدمات الجيوفيزيائية",
          "الخدمات البيئية",
          "خدمات الأرصاد الجوية",
          "طلب عرض سعر",
          "الدعم الفني",
          "استفسار عن الشراكة"
        ],
        submit: "إرسال الرسالة",
        submitting: "جارٍ الإرسال...",
        success: "تم إرسال الرسالة بنجاح!"
      },
      social: {
        title: "تابعنا",
        follow: "ابق على اطلاع بأحدث مشاريعنا"
      },
      cta: {
        title: "تفضل المكالمة المباشرة؟",
        subtitle: "اتصل بخبرائنا مباشرة للحصول على مساعدة فورية",
        button: "اتصل الآن"
      }
    }
  };

  const t = content[currentLang];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: ""
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  // Contact info cards
  const contactInfo = [
    {
      id: "location",
      icon: <FaMapMarkerAlt />,
      title: t.location.title,
      content: t.location.address,
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
      action: null
    },
    {
      id: "phone",
      icon: <FaPhone />,
      title: t.phone.title,
      content: t.phone.number,
      subcontent: t.phone.whatsapp,
      color: "#047857",
      gradient: "linear-gradient(135deg, #047857 0%, #059669 100%)",
      action: "tel:+966534161555"
    },
    {
      id: "email",
      icon: <FaEnvelope />,
      title: t.email.title,
      content: t.email.address,
      color: "#065f46",
      gradient: "linear-gradient(135deg, #065f46 0%, #047857 100%)",
      action: "mailto:info@sensingnatures.com"
    },
    {
      id: "hours",
      icon: <FaClock />,
      title: t.hours.title,
      content: `${t.hours.days}: ${t.hours.time}`,
      subcontent: t.hours.friday,
      color: "#064e3b",
      gradient: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
      action: null
    }
  ];

  // Social media links
  const socialLinks = [
    // { icon: <FaWhatsapp />, label: "WhatsApp", url: "https://wa.me/966534161555", color: "#25D366" },
    // { icon: <FaLinkedin />, label: "LinkedIn", url: "https://linkedin.com/company/sensingnature", color: "#0077B5" },
    // { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com/sensingnature", color: "#1DA1F2" }
  ];

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

      {/* Contact Content Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactLayout}>
            {/* Left Column - Contact Information */}
            <div className={styles.contactInfoColumn}>
              <div className={styles.contactInfoHeader}>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={styles.sectionBadge}
                >
                  {t.contactInfo.subtitle}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className={styles.sectionTitle}
                >
                  {t.contactInfo.title}
                </motion.h2>
              </div>

              {/* Contact Info Cards */}
              <div className={styles.contactInfoCards}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={styles.contactInfoCard}
                  >
                    <div 
                      className={styles.contactInfoIcon}
                      style={{ background: info.gradient }}
                    >
                      {info.icon}
                    </div>
                    <div className={styles.contactInfoContent}>
                      <h4 className={styles.contactInfoTitle}>
                        {info.title}
                      </h4>
                      <p className={styles.contactInfoText}>
                        {info.content}
                      </p>
                      {info.subcontent && (
                        <p className={styles.contactInfoSubtext}>
                          {info.subcontent}
                        </p>
                      )}
                      {info.action && (
                        <a 
                          href={info.action}
                          className={styles.contactInfoLink}
                          style={{ color: info.color }}
                        >
                          {isRTL ? "اتصل الآن" : "Contact Now"} →
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Section */}
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>
                  {t.social.title}
                </h3>
                <p className={styles.socialSubtitle}>
                  {t.social.follow}
                </p>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={styles.socialLink}
                      style={{ background: social.color }}
                    >
                      {social.icon}
                      <span className={styles.socialTooltip}>{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className={styles.formColumn}>
              <div className={styles.formWrapper}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>
                    {t.form.title}
                  </h2>
                  <p className={styles.formSubtitle}>
                    {t.form.subtitle}
                  </p>
                </div>

                {/* Success Message */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={styles.successMessage}
                    >
                      <FaCheckCircle className={styles.successIcon} />
                      <div>
                        <h4>{t.form.success}</h4>
                        <p>{isRTL ? "سنتواصل معك قريبًا" : "We'll get back to you soon!"}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        <FaUser className={styles.inputIcon} />
                        {t.form.labels.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.form.placeholders.name}
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        <FaEnvelopeOpen className={styles.inputIcon} />
                        {t.form.labels.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.form.placeholders.email}
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.formLabel}>
                        <FaPhoneAlt className={styles.inputIcon} />
                        {t.form.labels.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t.form.placeholders.phone}
                        className={styles.formInput}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="company" className={styles.formLabel}>
                        <FaBuilding className={styles.inputIcon} />
                        {t.form.labels.company}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={t.form.placeholders.company}
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.formLabel}>
                      <FaComments className={styles.inputIcon} />
                      {t.form.labels.subject}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={styles.formSelect}
                      required
                    >
                      <option value="">{t.form.placeholders.subject}</option>
                      {t.form.subjects.map((subject, index) => (
                        <option key={index} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      {t.form.labels.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.form.placeholders.message}
                      className={styles.formTextarea}
                      rows="6"
                      required
                    />
                    <div className={styles.charCounter}>
                      {formData.message.length}/1000 {isRTL ? "حرف" : "characters"}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.submitButton}
                    style={{
                      background: "linear-gradient(135deg, #065f46 0%, #047857 100%)"
                    }}
                  >
                    {isSubmitting ? t.form.submitting : t.form.submit}
                    {!isSubmitting && <FaPaperPlane className={styles.buttonIcon} />}
                  </motion.button>
                </form>
              </div>
            </div>
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
            <motion.a
              href="tel:+966534161555"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
            >
              <FaPhone className={styles.ctaButtonIcon} />
              {t.cta.button}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}