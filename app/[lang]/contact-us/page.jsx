import ContactUsClient from "@/components/ClientContact";

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const metaContent = {
  en: {
    title: "Contact ORVEXCO",
    description:
      "Get in touch with ORVEXCO for inquiries, partnerships, or service information. Our team is ready to assist you with engineering, construction, and industrial solutions across Saudi Arabia, Kuwait, and beyond.",
  },
  ar: {
    title: "تواصل مع أورفكسو",
    description:
      "تواصل مع أورفكسو للاستفسارات أو الشراكات أو للحصول على معلومات حول خدماتنا. فريقنا جاهز لمساعدتك في الحلول الهندسية والإنشائية والصناعية في المملكة العربية السعودية والكويت وخارجها.",
  },
};


  const { title, description } = metaContent[lang] || metaContent.en;
  const baseUrl = "https://brandraize.com";
  const canonicalUrl = `${baseUrl}/${lang}/contact-us`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/contact-us`,
        ar: `${baseUrl}/ar/contact-us`,
      },
    },
    openGraph: { title, description, type: "website", url: canonicalUrl },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ContactUsPage({ params }) {
  const { lang } = await params;
  return <ContactUsClient lang={lang} />;
}
