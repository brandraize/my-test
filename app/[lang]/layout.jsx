import { Poppins, Domine } from "next/font/google";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.css";
import { ToastContainer } from "react-toastify";
import ContextProvider from "@/providers/ContextProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";

const primary = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const secondary = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const metas = {
    en: {
      title: "Sensing Nature",
      description: "Team Sensing Nature established in the USA in 2009 as CIL, expanded to Kuwait in 2010 (officially registered in 2024), and further strengthened its presence in Saudi Arabia in 2025. We deliver innovative and reliable engineering solutions across the construction and architectural sectors, combining experience with modern technology, quality workmanship, and customer-focused excellence.",
    },
    ar: {
      title: "Sensing Nature",
      description: "تأسست شركة أورفكسو في الولايات المتحدة عام 2009 باسم CIL، وتوسعت إلى الكويت في عام 2010، وتم تسجيلها رسميًا في عام 2024، وعززت حضورها في المملكة العربية السعودية في عام 2025. نقدم حلولًا هندسية مبتكرة وموثوقة في مجالات البناء والعمارة، مع الجمع بين الخبرة والتقنيات الحديثة والجودة العالية وتركيز على رضا العملاء.",
    },
  };

  const baseUrl = "";
  const canonicalUrl = `${baseUrl}/${lang}`;

  const meta = metas[lang] || metas.en;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body style={{ position: "relative" }}>
        <ContextProvider>
          <Navbar lang={lang} />
          <ToastContainer position="top-center" autoClose={3000} />
          
          <main
            className="d-flex flex-column flex-grow-1 bg-white"
            style={{ minHeight: "100vh", paddingTop: "0" }}
          >
            {children}
          </main>
          
          {/* WhatsApp Button - Ensure it has high z-index */}
          <WhatsAppButton lang={lang} />
          
          <BackToTopButton />
          <Footer lang={lang} />
        </ContextProvider>
      </body>
    </html>
  );
}