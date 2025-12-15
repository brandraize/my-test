import { Tajawal } from "next/font/google";
import "@/styles/globals.css";
// Bootstrap now async-loaded by BootstrapLoader to avoid render-blocking (730ms savings)
// Moved slick-carousel CSS into the slider component to avoid render-blocking
// Removed font-awesome global CSS (unused) to reduce blocking CSS
import { ToastContainer } from "react-toastify";
import ContextProvider from "@/providers/ContextProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import PerformanceBoot from "@/components/PerformanceBoot";
import BootstrapLoader from "@/components/BootstrapLoader";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"], 
  variable: "--font-tajawal",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const metas = {
    en: {
      title: "Sensing Nature | Environmental & Geological Solutions",
      description:
        "Team Sensing Nature established in the USA in 2009 as CIL, expanded to Kuwait in 2010 (officially registered in 2024), and further strengthened its presence in Saudi Arabia in 2025. We deliver innovative and reliable engineering solutions across the construction and architectural sectors, combining experience with modern technology, quality workmanship, and customer-focused excellence.",
    },
    ar: {
      title: "Sensing Nature | حلول بيئية وجيولوجية",
      description:
        "تأسست شركة أورفكسو في الولايات المتحدة عام 2009 باسم CIL، وتوسعت إلى الكويت في عام 2010، وتم تسجيلها رسميًا في عام 2024، وعززت حضورها في المملكة العربية السعودية في عام 2025. نقدم حلولًا هندسية مبتكرة وموثوقة في مجالات البناء والعمارة، مع الجمع بين الخبرة والتقنيات الحديثة والجودة العالية وتركيز على رضا العملاء.",
    },
  };

  const baseUrl = "https://sensingnatures.com";
  const canonicalUrl = `${baseUrl}/${lang}`;

  const meta = metas[lang] || metas.en;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: meta.title,
      template: `%s | Sensing Nature`,
    },
    description: meta.description,
    keywords: lang === 'en' 
      ? 'environmental services, geological solutions, geophysical surveys, meteorological services, sensing nature, sustainable development'
      : 'خدمات بيئية, حلول جيولوجية, مسوحات جيوفيزيائية, خدمات أرصاد جوية, سينسينغ نيتشر, تنمية مستدامة',
    authors: [{ name: 'Sensing Nature' }],
    creator: 'Sensing Nature',
    publisher: 'Sensing Nature',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: canonicalUrl,
      siteName: 'Sensing Nature',
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      images: [
        {
          url: `${baseUrl}/og.png`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/og.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Resource hints (fonts served via next/font; external preconnects removed to avoid blocking) */}
        <link rel="dns-prefetch" href="https://d1foa0aaimjyw4.cloudfront.net" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#043911" />
      </head>
      <body style={{ position: "relative" }}>
        <ContextProvider>
          {/* Async-load Bootstrap to avoid 730ms render-blocking */}
          <BootstrapLoader />
          {/* Disable animations/transitions during first paint for better LCP */}
          <PerformanceBoot />
          <Navbar lang={lang} />
          <WhatsAppButton lang={lang} />
          <ToastContainer position="top-center" autoClose={3000} />

          <main
            className="d-flex flex-column flex-grow-1 bg-white"
            style={{
              minHeight: "100vh",
              paddingTop: "var(--navbar-h, 64px)",
              paddingBottom: "64px", // Reserve footer space for CLS prevention
            }}
          >
            {children}
          </main>

          {/* WhatsApp Button - Ensure it has high z-index */}

          <BackToTopButton />
          <Footer lang={lang} />
        </ContextProvider>
      </body>
    </html>
  );
}
