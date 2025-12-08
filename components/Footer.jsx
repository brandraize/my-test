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
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { SiTiktok, SiFiverr } from "react-icons/si";

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
    companyName: " سينسينغ نيتشر",
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
    phone: "+966534161555",
    email: "info@sensingnatures.com",
    location: "٦٩١٣ طريق الملك فهد الفرعي , ٣٧١٦ حي الربوة , المملكة العربية السعودية",
    copyright: `حقوق النشر © ${new Date().getFullYear()} - سينسينغ نيتشر `,
    getBackSoon: "سوف نعود إليك في أقرب وقت ممكن!",
    ourLocation: "موقعنا",
    phoneNumber: "رقم الهاتف",
    emailAddress: "البريد الإلكتروني",
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
    phone: "+966534161555",
    email: "info@sensingnatures.com",
    location: "6931 King Fahd Branch Rd 3716 Ar Rabwa Dist",
    copyright: `Copyright © ${new Date().getFullYear()} - Sensing Nature`,
    getBackSoon: "we will get back to you as soon as possible!",
    ourLocation: "Our Location",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
  };

  const t = lang === "ar" ? arabicText : englishText;

  const socialLinks = {
    twitter: "https://x.com/Sensing2025",
    instagram: "https://www.instagram.com/sensingnature2025/?igsh=MTNoMTd3dzMzcXo3Yw%3D%3D#",
    snapchat: "https://www.snapchat.com/@shrkstshrltby",
    tiktok: "https://www.tiktok.com/@sensingnature2025",
    maps: "https://www.google.com/maps/place/%D9%86%D9%8A%D9%83%D8%B3%D8%AA+%D9%81%D9%8A%D9%88%D8%AA%D8%B4%D8%B1+%D9%84%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9+Next+Future%E2%80%AD/@21.5879137,39.1762911,21z/data=!4m6!3m5!1s0x15c3d16f01439ecd:0xdf829b7e2fc0739c!8m2!3d21.5878556!4d39.1763816!16s%2Fg%2F11xlbnb8nq?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D",
  };

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
          <div className="col-md-6 mb-4 text-center text-md-start text-md-end">
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
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Twitter / X"
                title="Twitter / X"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Instagram"
                title="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href={socialLinks.snapchat}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="Snapchat"
                title="Snapchat"
              >
                <FaSnapchatGhost size={20} />
              </a>

              <a
                href={socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="TikTok"
                title="TikTok"
              >
                <SiTiktok size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/sensingnature"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                {/* <FaLinkedinIn size={20} /> */}
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
              {/* Location */}
              <div className="d-flex align-items-start gap-2 mb-3">
                <FaMapMarkerAlt className="mt-1" size={16} />
                <div>
                  <h6 className="mb-1 fw-semibold">{t.ourLocation}</h6>
                  <a
                    href={socialLinks.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-black"
                    style={{ fontSize: "14px" }}
                  >
                    {t.location}
                  </a>
                </div>
              </div>

           

              {/* Email */}
              <div className="d-flex align-items-start gap-2">
                <FaEnvelope className="mt-1" size={16} />
                <div>
                  <h6 className="mb-1 fw-semibold">{t.emailAddress}</h6>
                  <a
                    href={`mailto:${t.email}`}
                    className="text-decoration-none text-black"
                    style={{ fontSize: "14px" }}
                  >
                    {t.email}
                  </a>
                </div>
              </div>
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