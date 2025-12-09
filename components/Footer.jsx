"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTiktok,
  FaSnapchat,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Footer({ lang }) {
  const pathname = usePathname();
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // Hide footer on admin pages
  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) {
    return null;
  }

  const arabicText = {
    companyName: "سينسينغ نيتشر",
    description:
      "نقدم خدمات استشارية وتطويرية وهندسية وبيئية مميزة ودقيقة مع حلول مبتكرة.",
    companyTitle: "الشركة",
    servicesTitle: "خدماتنا",
    contactTitle: "اتصل بنا",
    legalTitle: "القانونية",
    links: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      projects: "المشاريع",
      training: "التدريب",
      contact: "تواصل معنا",
    },
    services: {
      consulting: "الاستشارات ",
      development: "التطوير والتنفيذ",
      engineering: " الهندسية",
      environmental: "الخدمات البيئية",
    },
    legal: {
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
      contact: "تواصل معنا",
    },
    rightsReserved: "جميع الحقوق محفوظة.",
    address: "٦٩١٣ طريق الملك فهد الفرعي، ٣٧١٦ حي الربوة، المملكة العربية السعودية",
    phone: "+966534161555",
    email: "info@sensingnatures.com",
    website: "sensingnatures.com",
    googleMapsUrl: "https://maps.app.goo.gl/",
  };

  const englishText = {
    companyName: "Sensing Nature",
    description:
      "We provide distinctive, accurate, and innovative consulting, development, engineering, and environmental services with creative solutions.",
    companyTitle: "Company",
    servicesTitle: "Our Services",
    contactTitle: "Contact Us",
    legalTitle: "Legal",
    links: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      training: "Training",
      contact: "Contact Us",
    },
    services: {
      consulting: "BasicServices",
      development: "Development & Implementation",
      engineering: " Solutions",
      environmental: "Environmental Services",
    },
    legal: {
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      contact: "Contact Us",
    },
    rightsReserved: "All Rights Reserved.",
    address: "6931 King Fahd Branch Rd, 3716 Ar Rabwa Dist, Saudi Arabia",
    phone: "+966534161555",
    email: "info@sensingnatures.com",
    website: "sensingnatures.com",
    googleMapsUrl: "https://maps.app.goo.gl/",
  };

  const t = lang === "ar" ? arabicText : englishText;
  const isRTL = lang === "ar";

  // Social links - updated for your company
  const socialLinks = {
    twitter: "https://x.com/Sensing2025",
    instagram: "https://www.instagram.com/sensingnature2025/",
    snapchat: "https://www.snapchat.com/@shrkstshrltby",
    tiktok: "https://www.tiktok.com/@sensingnature2025",
    linkedin: "https://www.linkedin.com/company/sensingnature",
    fiverr: "#",
  };

  return (
    <footer
      className="footer lh-lg"
      style={{
        backgroundColor: "#1e1e1e",
        background: "#fff",
        borderTop: "3px solid #1eca14",
        position: "relative",
        zIndex: 1000,
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div className="container">
        <div className="row pt-4 pb-3">
          {/* Company Info */}
          <div
            className={`col-lg-4 col-md-6 mb-3 text-center ${
              isRTL ? "text-md-end" : "text-md-start"
            }`}
          >
            <Link href={`/${lang}`}>
              <img
                src="/logo.png"
                alt={`${t.companyName} logo`}
                style={{
                  width: "160px",
                  height: "auto",
                  marginBottom: "1rem",
                }}
              />
            </Link>
            <p
              className="mt-2"
              style={{ fontSize: "14px", color: "#b0b0b0", lineHeight: "1.6" }}
            >
              <span className="fw-bold" style={{ color: "#1eca14" }}>
                {t.companyName}
              </span>{" "}
              — {t.description}
            </p>

            {/* Contact Information */}
            <div className="mt-3">
              <div
                className={`d-flex align-items-start mb-2 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <FaMapMarkerAlt
                  className={isRTL ? "ms-2" : "me-2"}
                  size={14}
                  style={{ color: "#1eca14", marginTop: "3px" }}
                />
                <a
                  href={t.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ fontSize: "13px", color: "#b0b0b0", lineHeight: "1.4" }}
                >
                  {t.address}
                </a>
              </div>
              <div
                className={`d-flex align-items-center mb-2 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <FaPhone
                  className={isRTL ? "ms-2" : "me-2"}
                  size={14}
                  style={{ color: "#1eca14" }}
                />
                <a
                  href={`tel:${t.phone.replace(/\s/g, '')}`}
                  className="text-decoration-none"
                  style={{ fontSize: "13px", color: "#b0b0b0" }}
                >
                  {t.phone}
                </a>
              </div>
              <div
                className={`d-flex align-items-center mb-2 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <FaEnvelope
                  className={isRTL ? "ms-2" : "me-2"}
                  size={14}
                  style={{ color: "#1eca14" }}
                />
                <a
                  href={`mailto:${t.email}`}
                  className="text-decoration-none"
                  style={{ fontSize: "13px", color: "#b0b0b0" }}
                >
                  {t.email}
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div
              className={`d-flex gap-2 mt-3 ${
                isRTL ? "justify-content-md-end" : "justify-content-md-start"
              } justify-content-center`}
            >
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
                title="Twitter / X"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={socialLinks.snapchat}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Snapchat"
                title="Snapchat"
              >
                <FaSnapchat size={16} />
              </a>
              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="TikTok"
                title="TikTok"
              >
                <FaTiktok size={16} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6 mb-3">
            <h6
              className="mb-3"
              style={{
                fontWeight: "600",
                color: "#1eca14",
                fontSize: "1rem",
                borderBottom: "1px solid rgba(30, 202, 20, 0.3)",
                paddingBottom: "0.5rem",
              }}
            >
              {t.companyTitle}
            </h6>
            <div className="d-flex flex-column">
              <div className="mb-2">
                <Link
                  href={`/${lang}`}
                  className="text-decoration-none footer-link"
                >
                  {t.links.home}
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  href={`/${lang}/about`}
                  className="text-decoration-none footer-link"
                >
                  {t.links.about}
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  href={`/${lang}/services`}
                  className="text-decoration-none footer-link"
                >
                  {t.links.services}
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  href={`/${lang}/projects`}
                  className="text-decoration-none footer-link"
                >
                  {t.links.projects}
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  href={`/${lang}/training`}
                  className="text-decoration-none footer-link"
                >
                  {t.links.training}
                </Link>
              </div>
              <div>
                <Link
                  href={`/${lang}/contact`}
                  className="text-decoration-none footer-link"
                >
                  {t.links.contact}
                </Link>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="col-lg-2 col-md-6 mb-3">
            <h6
              className="mb-3"
              style={{
                fontWeight: "600",
                color: "#1eca14",
                fontSize: "1rem",
                borderBottom: "1px solid rgba(30, 202, 20, 0.3)",
                paddingBottom: "0.5rem",
              }}
            >
              {t.servicesTitle}
            </h6>
            <div className="d-flex flex-column">
              <div className="mb-2">
                <Link
                  href={`/${lang}/services/BasicServices`}
                  className="text-decoration-none footer-link"
                >
                  {t.services.consulting}
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  href={`/${lang}/services/BasicServices`}
                  className="text-decoration-none footer-link"
                >
                  {t.services.development}
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  href={`/${lang}/services/BasicServices`}
                  className="text-decoration-none footer-link"
                >
                  {t.services.engineering}
                </Link>
              </div>
              <div>
                <Link
                  href={`/${lang}/services/BasicServices`}
                  className="text-decoration-none footer-link"
                >
                  {t.services.environmental}
                </Link>
              </div>
            </div>
          </div>

          {/* Legal & Quick Contact */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="row">
              {/* Legal Links */}
              <div className="col-sm-6 mb-3">
                <h6
                  className="mb-3"
                  style={{
                    fontWeight: "600",
                    color: "#1eca14",
                    fontSize: "1rem",
                    borderBottom: "1px solid rgba(30, 202, 20, 0.3)",
                    paddingBottom: "0.5rem",
                  }}
                >
                  {t.legalTitle}
                </h6>
                <div className="d-flex flex-column">
                  <div className="mb-2">
                    <Link
                      href={`/${lang}/terms`}
                      className="text-decoration-none footer-link"
                    >
                      {t.legal.terms}
                    </Link>
                  </div>
                  <div className="mb-2">
                    <Link
                      href={`/${lang}/privacy`}
                      className="text-decoration-none footer-link"
                    >
                      {t.legal.privacy}
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={`/${lang}/contact`}
                      className="text-decoration-none footer-link"
                    >
                      {t.legal.contact}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="col-sm-6">
                <h6
                  className="mb-3"
                  style={{
                    fontWeight: "600",
                    color: "#1eca14",
                    fontSize: "1rem",
                    borderBottom: "1px solid rgba(30, 202, 20, 0.3)",
                    paddingBottom: "0.5rem",
                  }}
                >
                  {t.contactTitle}
                </h6>
                <div className="d-flex flex-column">
                  <div className="mb-2">
                    <a
                      href={`tel:${t.phone.replace(/\s/g, '')}`}
                      className="text-decoration-none footer-link"
                    >
                      {lang === "ar" ? "اتصل بنا" : "Call Us"}
                    </a>
                  </div>
                  <div className="mb-2">
                    <a
                      href={`mailto:${t.email}`}
                      className="text-decoration-none footer-link"
                    >
                      {lang === "ar" ? "راسلنا عبر الإيميل" : "Email Us"}
                    </a>
                  </div>
                  <div className="mb-2">
                    <a
                      href={`/${lang}/contact`}
                      className="text-decoration-none footer-link"
                    >
                      {lang === "ar" ? "نموذج التواصل" : "Contact Form"}
                    </a>
                  </div>
                  <div>
                    <a
                      href={socialLinks.whatsapp || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none footer-link"
                    >
                      {lang === "ar" ? "محادثة مباشرة" : "Live Chat"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr
          style={{ borderColor: "#1eca14", opacity: 0.3, margin: "0.5rem 0" }}
        />

        {/* Footer Bottom */}
        <div className="row text-center py-2">
          <div className="col" style={{ color: "#b0b0b0" }}>
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
              <span style={{ fontSize: "13px" }}>
                &copy; {currentDate?.getFullYear()}{" "}
                <span style={{ color: "#1eca14" }}>{t.companyName}</span>
              </span>
              <span
                className="d-none d-md-inline"
                style={{ color: "#b0b0b0", fontSize: "13px" }}
              >
                {" "}
                |{" "}
              </span>
              <span style={{ color: "#b0b0b0", fontSize: "13px" }}>
                {t.rightsReserved}
              </span>
              <span
                className="d-none d-md-inline"
                style={{ color: "#b0b0b0", fontSize: "13px" }}
              >
                {" "}
                |{" "}
              </span>
              <a
                href={`https://${t.website}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1eca14",
                  fontSize: "13px",
                  textDecoration: "none",
                }}
              >
                {t.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          color: #b0b0b0 !important;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          line-height: 1.3;
          display: block;
          padding: 0.15rem 0;
        }

        .footer-link:hover {
          color: #1eca14 !important;
          transform: ${isRTL ? "translateX(-3px)" : "translateX(3px)"};
          padding-left: ${isRTL ? "0" : "5px"};
          padding-right: ${isRTL ? "5px" : "0"};
        }

        .social-icon {
          transition: all 0.3s ease;
          background: rgba(20, 190, 202, 0.1);
          padding: 6px;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1eca14;
        }

        .social-icon:hover {
          color: #ffffff !important;
          background: rgba(30, 202, 20, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(30, 202, 20, 0.2);
        }

        @media (max-width: 768px) {
          .footer-link:hover {
            transform: translateX(0);
            padding-left: 0;
            padding-right: 0;
          }

          .social-icon {
            width: 32px;
            height: 32px;
            padding: 5px;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }

          .footer-link {
            font-size: 0.85rem;
          }
          
          .row {
            margin-left: -10px;
            margin-right: -10px;
          }
        }
      `}</style>
    </footer>
  );
}