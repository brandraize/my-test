// app/[lang]/contact/page.js
import ContactPage from "../../../components/ContactPage/ContactPage";

export async function generateMetadata({ params }) {
  const { lang = "en" } = await params;
  
  const content = {
    en: {
      title: "Contact Us | Sensing Nature - Environmental & Geological Solutions",
      description: "Get in touch with our expert team for geological, geophysical, environmental, and meteorological services. We provide accurate insights and innovative solutions.",
      keywords: "contact sensing nature, geological services contact, environmental consulting, meteorological services, geophysical surveys"
    },
    ar: {
      title: "اتصل بنا | سينسينج نيتشر - الحلول البيئية والجيولوجية",
      description: "تواصل مع فريقنا الخبير للحصول على خدمات جيولوجية وجيوفيزيائية وبيئية وأرصادية. نقدم رؤى دقيقة وحلول مبتكرة.",
      keywords: "اتصال سينسينج نيتشر، خدمات جيولوجية تواصل، استشارات بيئية، خدمات أرصادية، مسوحات جيوفيزيائية"
    },
  };
  
  const t = content[lang];

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      images: [
        {
          url: "/contact-hero.jpg",
          width: 1200,
          height: 630,
          alt: "Contact Sensing Nature",
        },
      ],
    },
    alternates: {
      languages: {
        en: "/en/contact",
        ar: "/ar/contact",
      },
    },
  };
}

export default async function Page({ params }) {
  const { lang = "en" } = await params;
  return <ContactPage lang={lang} />;
}