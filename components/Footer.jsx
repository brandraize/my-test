"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaSnapchatGhost,
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
    companyName: "Sensing Nature",
    description:
      "نقدم خدمات استشارية وتطويرية وهندسية وبيئية مميزة ودقيقة مع حلول مبتكرة.",
    companyTitle: "الشركة",
    quickLinks: "روابط سريعة",
    links: {
      home: "الرئيسية",
      projects: "المشاريع",
      training: "التدريب",
      team: "فريقنا",
      contact: "تواصل معنا",
    },
    contactTitle: "تواصل معنا",
    rightsReserved: "جميع الحقوق محفوظة.",
    phone: "966557828312",
    email: "info@sensing-nature.com",
    location: "المملكة العربية السعودية",
    copyright: `حقوق النشر © ${new Date().getFullYear()} - Sensing Nature`,
  };

  const englishText = {
    companyName: "Sensing Nature",
    description:
      "We provide distinctive, accurate, and innovative consulting, development, engineering, and environmental services with creative solutions.",
    companyTitle: "Company",
    quickLinks: "Quick Links",
    links: {
      home: "Home",
      projects: "Projects",
      training: "Training",
      team: "Our Team",
      contact: "Contact Us",
    },
    contactTitle: "Contact Us",
    rightsReserved: "All Rights Reserved.",
    phone: "966557828312",
    email: "info@sensing-nature.com",
    location: "Saudi Arabia",
    copyright: `Copyright © ${new Date().getFullYear()} - Sensing Nature`,
  };

  const t = lang === "ar" ? arabicText : englishText;

  return (
    <footer
      className={`footer lh-lg text-center-sm text-black ${
        lang === "ar" ? "text-end" : "text-start"
      }`}
      style={{ backgroundColor: "#F0F0F0" }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="row pt-5">
          {/* Company Info */}
          <div className="col-md-6 mb-4 text-center text-md-start">
            <Link href={`/${lang}`}>
              <img
                src="/logo.png"
                alt={`${t.companyName} logo`}
                style={{ width: "200px", height: "auto" }}
              />
            </Link>
            <p className="mt-4" style={{ fontSize: "18px", lineHeight: "1.7" }}>
              <span className="fw-bold">{t.companyName}</span> — {t.description}
            </p>

            {/* Social Media */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3 flex-wrap">
              <a
                href="https://www.facebook.com/sensingnature"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://twitter.com/sensingnature"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="https://www.instagram.com/sensingnature"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/sensingnature"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://github.com/sensingnature"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="mb-4 fw-semibold">{t.quickLinks}</h4>
            <div className="d-flex flex-column">
              <h6 className="mb-3">
                <Link
                  href={`/${lang}`}
                  className="text-decoration-none text-black"
                >
                  {t.links.home}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href={`/${lang}/projects`}
                  className="text-decoration-none text-black"
                >
                  {t.links.projects}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href={`/${lang}/training`}
                  className="text-decoration-none text-black"
                >
                  {t.links.training}
                </Link>
              </h6>
              <h6 className="mb-3">
                <Link
                  href={`/${lang}/team`}
                  className="text-decoration-none text-black"
                >
                  {t.links.team}
                </Link>
              </h6>
              <h6>
                <Link
                  href={`/${lang}/contact`}
                  className="text-decoration-none text-black"
                >
                  {t.links.contact}
                </Link>
              </h6>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-sm-6 col-md-3 mb-4">
            <h4 className="mb-4 fw-semibold">{t.contactTitle}</h4>
            <div className="d-flex flex-column">
              {/* Phone */}
              <h6 className="mb-3">
                <a
                  href={`tel:${t.phone}`}
                  className="text-decoration-none text-black"
                >
                  {t.phone}
                </a>
              </h6>

              {/* Email */}
              <h6 className="mb-3">
                <a
                  href={`mailto:${t.email}`}
                  className="text-decoration-none text-black"
                >
                  {t.email}
                </a>
              </h6>

              {/* Location */}
              <h6 className="mb-3" style={{ fontSize: "15px" }}>
                {t.location}
              </h6>
            </div>
          </div>
        </div>

        <hr />

        {/* Footer Bottom */}
        <div className="row text-center" style={{ color: "black" }}>
          <div className="col pb-3">
            {t.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}