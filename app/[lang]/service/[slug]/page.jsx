import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }) {
  const { lang = "en", slug } = await params;

  // Fetch service data
  let service = null;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/services/${slug}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        service = data.data;
      }
    }
  } catch (error) {
    console.error('Failed to fetch service:', error);
  }

  if (!service) {
    return {
      title: lang === 'ar' ? 'الخدمة غير موجودة' : 'Service Not Found'
    };
  }

  const title = service.name[lang] || service.name.en;
  const description = (service.description[lang] || service.description.en)?.substring(0, 160);

  return {
    title: `${title} | Sensing Nature`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: service.icon ? [{ url: service.icon }] : []
    },
    alternates: {
      languages: {
        en: `/en/service/${slug}`,
        ar: `/ar/service/${slug}`
      }
    }
  };
}

export default async function ServiceDetailPage({ params }) {
  const { lang = "en", slug } = await params;
  const isRTL = lang === "ar";

  // Fetch service data from API
  let service = null;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/services/${slug}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        service = data.data;
      }
    }
  } catch (error) {
    console.error('Failed to fetch service:', error);
  }

  if (!service) {
    notFound();
  }

  const content = {
    en: {
      backToServices: "Back to Services",
      contactUs: "Contact Us for This Service",
      relatedServices: "Related Services"
    },
    ar: {
      backToServices: "العودة للخدمات",
      contactUs: "تواصل معنا لهذه الخدمة",
      relatedServices: "خدمات ذات صلة"
    }
  };

  const t = content[lang];

  return (
    <>
      <Navbar lang={lang} />
      <div style={{ minHeight: "100vh", background: "#f9fafb" }} dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section style={{
        background: "linear-gradient(135deg, #047857 0%, #059669 100%)",
        padding: "150px 20px 80px",
        color: "white"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Link href={`/${lang}/service`} style={{
            color: "white",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
            opacity: 0.9
          }}>
            ← {t.backToServices}
          </Link>
          
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "bold",
            marginBottom: "20px"
          }}>
            {service.name[lang] || service.name.en}
          </h1>

          {service.icon && (
            <div style={{ marginTop: "30px", maxWidth: "200px" }}>
              <Image
                src={service.icon}
                alt={service.name[lang] || service.name.en}
                width={200}
                height={100}
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "50px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}>
            <div 
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "#374151"
              }}
              dangerouslySetInnerHTML={{ 
                __html: service.description[lang] || service.description.en 
              }}
            />
          </div>

          {/* CTA Section */}
          <div style={{
            marginTop: "50px",
            background: "linear-gradient(135deg, #047857 0%, #059669 100%)",
            borderRadius: "20px",
            padding: "50px",
            textAlign: "center",
            color: "white"
          }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
              {isRTL ? "هل تحتاج إلى هذه الخدمة؟" : "Need This Service?"}
            </h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "30px", opacity: 0.9 }}>
              {isRTL 
                ? "تواصل معنا اليوم للحصول على استشارة مجانية"
                : "Contact us today for a free consultation"}
            </p>
            <Link href={`/${lang}/contact`}>
              <button style={{
                padding: "15px 40px",
                background: "white",
                color: "#10b981",
                border: "none",
                borderRadius: "30px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                cursor: "pointer"
              }}>
                {t.contactUs}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer lang={lang} />
    </>
  );
}
