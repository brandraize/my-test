import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCalendar, FaStar } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }) {
  const { lang = "en", slug } = await params;

  // Fetch project data
  let project = null;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/projects/${slug}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        project = data.data;
      }
    }
  } catch (error) {
    console.error('Failed to fetch project:', error);
  }

  if (!project) {
    return {
      title: lang === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'
    };
  }

  const title = project.name[lang] || project.name.en;
  const description = (project.description[lang] || project.description.en)?.substring(0, 160);

  return {
    title: `${title} | Sensing Nature`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: project.image ? [{ url: project.image }] : []
    },
    alternates: {
      languages: {
        en: `/en/projects/${slug}`,
        ar: `/ar/projects/${slug}`
      }
    }
  };
}

export default async function ProjectDetailPage({ params }) {
  const { lang = "en", slug } = await params;
  const isRTL = lang === "ar";

  // Fetch project data from API
  let project = null;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/projects/${slug}`, {
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        project = data.data;
      }
    }
  } catch (error) {
    console.error('Failed to fetch project:', error);
  }

  if (!project) {
    notFound();
  }

  const content = {
    en: {
      backToProjects: "Back to Projects",
      projectDate: "Project Date",
      featured: "Featured Project",
      contactUs: "Start Your Project",
      projectDetails: "Project Details"
    },
    ar: {
      backToProjects: "العودة للمشاريع",
      projectDate: "تاريخ المشروع",
      featured: "مشروع مميز",
      contactUs: "ابدأ مشروعك",
      projectDetails: "تفاصيل المشروع"
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
          <Link href={`/${lang}/projects`} style={{
            color: "white",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
            opacity: 0.9
          }}>
            ← {t.backToProjects}
          </Link>
          
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "bold",
            marginBottom: "20px"
          }}>
            {project.name[lang] || project.name.en}
          </h1>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap"
          }}>
            {project.project_date && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "1.1rem"
              }}>
                <FaCalendar />
                {new Date(project.project_date).toLocaleDateString(isRTL ? 'ar-SA' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            )}
            
            {project.is_featured && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "#fbbf24",
                padding: "8px 20px",
                borderRadius: "20px",
                fontSize: "1rem"
              }}>
                <FaStar />
                {t.featured}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px" }}>
            {/* Project Image */}
            {project.image && (
              <div style={{
                position: "relative",
                height: "500px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}>
                <Image
                  src={project.image}
                  alt={project.name[lang] || project.name.en}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            )}

            {/* Project Description */}
            <div style={{
              background: "white",
              borderRadius: "20px",
              padding: "50px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}>
              <h2 style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#065f46",
                marginBottom: "20px"
              }}>
                {t.projectDetails}
              </h2>
              
              <div 
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: "#374151"
                }}
                dangerouslySetInnerHTML={{ 
                  __html: project.description[lang] || project.description.en 
                }}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            marginTop: "80px",
            background: "linear-gradient(135deg, #047857 0%, #059669 100%)",
            borderRadius: "20px",
            padding: "60px",
            textAlign: "center",
            color: "white"
          }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
              {isRTL ? "لديك مشروع مشابه؟" : "Have a Similar Project?"}
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.9 }}>
              {isRTL 
                ? "دعنا نساعدك في تحقيق نتائج رائعة. تواصل معنا اليوم!"
                : "Let us help you achieve outstanding results. Contact us today!"}
            </p>
            <Link href={`/${lang}/contact`}>
              <button style={{
                padding: "15px 50px",
                background: "white",
                color: "#10b981",
                border: "none",
                borderRadius: "30px",
                fontSize: "1.2rem",
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
