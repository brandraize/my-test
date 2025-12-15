import { notFound } from "next/navigation";
import Loading from "@/components/Loading";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang, title } = resolvedParams;

  // Products disabled - Firebase removed
  return {
    title: "Product Details",
    description: "Product information",
  };

  const baseUrl = "https://happy-face.co";
  const canonicalUrl = `${baseUrl}/${lang}/${title}`;

  return {
    title: productTitle,
    description: productDesc,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/${title}`,
        ar: `${baseUrl}/ar/${title}`,
      },
    },
    openGraph: {
      title: productTitle,
      description: productDesc,
      type: "website",
      url: canonicalUrl,
      images: [{ url: productImage, width: 800, height: 600 }],
    },
    twitter: {
      card: "summary_large_image",
      title: productTitle,
      description: productDesc,
      images: [productImage],
    },
  };
}

export default async function ProductDetailsPage({ params }) {
  // Products disabled - Firebase removed
  notFound();

  const content = {
    en: {
      buyNow: "Buy Now",
    },
    ar: {
      buyNow: "اشتري الآن",
    },
  };

  const { buyNow } = content[lang] || content.en;

  const getUrl = (url) => {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        <div className="col-lg-4 text-center mb-5 mb-lg-0">
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "83.83%",
              backgroundColor: "#f0f0f0",
              overflow: "hidden",
            }}
            className="rounded"
          >
            <img
              src={product.image}
              alt={product.title[lang]}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              className="rounded shadow"
              loading="lazy"
            />
          </div>
        </div>

        <div className="col-lg-8">
          <h1 className="fs-1 fw-bold mb-3">{product.title[lang]}</h1>
          <p className="text-muted fs-5 mb-3">{product.shortDesc[lang]}</p>
          <p className="text-secondary fs-4 mb-4" style={{ fontWeight: "600" }}>
            {product.category[lang]}
          </p>
          <a
            href={getUrl(product.link)}
            target="_blank"
            rel="noopener noreferrer"
            className="primaryButton shadow-sm d-inline"
          >
            {buyNow}
          </a>
        </div>
      </div>

      <div
        className="fs-5 lh-lg"
        dangerouslySetInnerHTML={{ __html: product.fullDesc[lang] }}
      />
    </div>
  );
}
