import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }) {
  const { lang = "en", slug } = await params;
  let training = null;
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/trainings/${slug}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) training = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch training:', error);
  }

  if (!training) {
    return { title: lang === 'ar' ? 'البرنامج التدريبي غير موجود' : 'Training Not Found' };
  }

  const title = training.name[lang] || training.name.en;
  const description = (training.short_description[lang] || training.short_description.en)?.substring(0, 160);

  return {
    title: `${title} | Sensing Nature`,
    description: description
  };
}

export default async function TrainingDetailPage({ params }) {
  const { lang = "en", slug } = await params;
  const isRTL = lang === "ar";

  let training = null;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/trainings/${slug}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) training = data.data;
    }
  } catch (error) {
    console.error('Failed to fetch training:', error);
  }

  if (!training) notFound();

  const t = {
    en: { back: "← Back to Training", enroll: "Enroll Now" },
    ar: { back: "→ العودة للتدريبات", enroll: "سجل الآن" }
  }[lang];

  return (
    <>
      <Navbar lang={lang} />
      <div className="min-vh-100" dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero with Image Background */}
        <div style={{ position: "relative", height: "450px", overflow: "hidden" }}>
          {training.image && (
            <Image src={training.image} alt={training.name[lang] || training.name.en} fill style={{ objectFit: "cover" }} unoptimized priority />
          )}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(4,120,87,0.92), rgba(5,150,105,0.88))" }} />
          
          <div className="container" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "80px" }}>
            <Link href={`/${lang}/training`} style={{ color: "white", textDecoration: "none", marginBottom: "20px", opacity: 0.95 }}>
              {t.back}
            </Link>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: "700", color: "white", marginBottom: "15px", lineHeight: 1.2 }}>
              {training.name[lang] || training.name.en}
            </h1>
            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.95)", maxWidth: "700px" }}>
              {(training.short_description[lang] || training.short_description.en)?.replace(/<[^>]*>/g, '')}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container" style={{ padding: "60px 20px" }}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div style={{ background: "white", borderRadius: "16px", padding: "50px", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div 
                  style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#374151" }}
                  dangerouslySetInnerHTML={{ __html: training.description[lang] || training.description.en }}
                />
              </div>

              {/* CTA Button */}
              <div className="text-center" style={{ marginTop: "50px" }}>
                <Link href={`/${lang}/contact`}>
                  <button className="btn btn-lg" style={{
                    background: "linear-gradient(135deg, #047857, #059669)",
                    color: "white",
                    border: "none",
                    borderRadius: "30px",
                    padding: "15px 60px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    boxShadow: "0 4px 15px rgba(5,150,105,0.3)"
                  }}>
                    {t.enroll}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
