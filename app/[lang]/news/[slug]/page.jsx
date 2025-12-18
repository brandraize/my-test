import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// Add global styles for button hover
const buttonStyles = `
  .hover-btn-news {
    transition: all 0.3s ease;
  }
  .hover-btn-news:hover {
    background-color: #047857 !important;
    transform: translateY(-2px);
  }
`;

async function getNewsEvent(slug) {
  try {
    const res = await fetch(`http://localhost:8000/api/news-events/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error("Error fetching news/event:", error);
    return null;
  }
}

export default async function NewsDetailPage({ params }) {
  const { lang, slug } = await params;
  const newsEvent = await getNewsEvent(slug);

  if (!newsEvent) {
    notFound();
  }

  const isRTL = lang === "ar";
  const title = newsEvent.title[lang] || newsEvent.title.en;
  const description = newsEvent.description[lang] || newsEvent.description.en;
  const content = newsEvent.content[lang] || newsEvent.content.en;
  const category = newsEvent.category[lang] || newsEvent.category.en;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: buttonStyles }} />
      <Navbar />
      <div
        className="min-vh-100"
        style={{
          backgroundColor: "#f9fafb",
          paddingTop: "80px",
          paddingBottom: "60px",
          direction: isRTL ? "rtl" : "ltr",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href={`/${lang}`} style={{ color: "#059669" }}>
                  {isRTL ? "الرئيسية" : "Home"}
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href={`/${lang}/news`} style={{ color: "#059669" }}>
                  {isRTL ? "الأخبار والفعاليات" : "News & Events"}
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>

          {/* Main Content Card */}
          <div
            className="card shadow-sm"
            style={{
              border: "none",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {/* Featured Image */}
            {newsEvent.image && (
              <div style={{ position: "relative", width: "100%", height: "400px" }}>
                <Image
                  src={newsEvent.image}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  unoptimized
                />
                {/* Category Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    [isRTL ? "right" : "left"]: "20px",
                    backgroundColor: "#059669",
                    color: "white",
                    padding: "8px 20px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                  }}
                >
                  {category}
                </div>
              </div>
            )}

            {/* Content Body */}
            <div className="card-body p-4 p-md-5">
              {/* Title */}
              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "clamp(28px, 5vw, 42px)",
                  color: "#111827",
                  textAlign: isRTL ? "right" : "left",
                }}
              >
                {title}
              </h1>

              {/* Meta Info */}
              <div
                className="d-flex align-items-center gap-3 mb-4 pb-4"
                style={{
                  borderBottom: "1px solid #e5e7eb",
                  fontSize: "14px",
                  color: "#6b7280",
                  flexDirection: isRTL ? "row-reverse" : "row",
                }}
              >
                {newsEvent.event_date && (
                  <div className="d-flex align-items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{new Date(newsEvent.event_date).toLocaleDateString(isRTL ? "ar-SA" : "en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              {description && (
                <div
                  className="lead mb-4"
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.7",
                    color: "#374151",
                    textAlign: isRTL ? "right" : "left",
                  }}
                >
                  {description}
                </div>
              )}

              {/* Full Content (Rich Text) */}
              {content && (
                <div
                  className="mt-4"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#4b5563",
                    textAlign: isRTL ? "right" : "left",
                  }}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-5">
            <a
              href={`/${lang}/news`}
              className="btn btn-lg hover-btn-news"
              style={{
                backgroundColor: "#059669",
                color: "white",
                borderRadius: "30px",
                padding: "12px 40px",
                border: "none",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              {isRTL ? "عودة إلى الأخبار" : "Back to News"}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
