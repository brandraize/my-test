// app/[lang]/about/page.jsx
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const metas = {
    en: {
      title: "About Orvexco | Engineering Strength, Building the Future",
      description:
        "Learn about Orvexco’s mission, leadership, and high-quality services across engineering, industrial, and renewable energy sectors.",
    },
    ar: {
      title: "عن أورفكسو | القوة الهندسية وبناء المستقبل",
      description:
        "تعرّف على رؤية أورفكسو وقيادتها وخدماتها عالية الجودة في مجالات الهندسة والطاقة المتجددة والتصنيع الصناعي.",
    },
  };

  const meta = metas[lang] || metas.en;
  const baseUrl = "https://orvexco.com";
  const canonicalUrl = `${baseUrl}/${lang}/about`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/about`,
        ar: `${baseUrl}/ar/about`,
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

export default async function About({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#007bff" }}>
        <div className="container d-flex flex-column align-items-center text-white">
          <h1 className="text-center mb-3" style={{ fontWeight: "700" }}>
            {lang === "ar" ? "عن أورفكسو" : "About Orvexco"}
          </h1>
          <p
            className="text-center w-md-75"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {lang === "ar"
              ? "تعرف على تاريخ أورفكسو وقيادتها ورؤيتها في تقديم حلول هندسية وصناعية متقدمة."
              : "Learn about Orvexco’s history, leadership, and its vision for delivering advanced engineering and industrial solutions."}
          </p>
        </div>
      </div>

      <div className="container py-5 lh-lg" dir={lang === "ar" ? "rtl" : "ltr"}>
        <section className="mb-5">
          <h2 className="mb-3 fw-bold">
            {lang === "ar" ? "من نحن" : "Who We Are"}
          </h2>
          <p>
            {lang === "ar"
              ? "تأسست أورفكسو في الولايات المتحدة الأمريكية عام 2009 باسم CIL، وتوسعت إلى الكويت في عام 2010 (مسجلة رسميًا في 2024) وعززت وجودها في المملكة العربية السعودية في عام 2025. مع أساس هندسي قوي وخبرة تقنية واسعة، بنت أورفكسو سمعة قوية في تقديم حلول مبتكرة وموثوقة في قطاعات البناء والهندسة المعمارية. واليوم، تحت قيادة الجيل الجديد، تواصل الشركة النمو برؤية حديثة تركز على الاستدامة والتطور الصناعي."
              : "Team Orvexco was established in the USA in 2009 as CIL, expanded to Kuwait in 2010 (officially registered in 2024), and further strengthened its presence in Saudi Arabia in 2025. With a strong engineering foundation and years of technical expertise, Team Orvexco has built a solid reputation for delivering innovative and reliable solutions in the construction and architectural sectors. Now, under the leadership of a young generation, the company continues to grow with a vision for modernization and sustainability."}
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mb-3 fw-bold">
            {lang === "ar" ? "القيادة" : "Leadership"}
          </h2>

          <h4 className="fw-semibold mt-4">Mr. Abdul Aziz Al Mhan</h4>
          <p>
            {lang === "ar"
              ? "يركز السيد عبد العزيز المهان على قطاعات الحديد والألمنيوم والطاقة الشمسية. يهدف إلى قيادة مشاريع صناعية عالية الجودة تساهم في تطوير البنية التحتية وتعزيز قطاع الطاقة المتجددة، مع الالتزام بالمعايير العالمية وأفضل الممارسات. كما يولي أهمية كبيرة لتطوير حلول مبتكرة تلبي احتياجات السوق وتواكب التطورات الصناعية، مع التركيز على الجودة والكفاءة والاستدامة في كل مرحلة."
              : "Mr. Abdul Aziz focuses on the iron, aluminum, and solar energy sectors. He aims to lead high-quality industrial projects that contribute to infrastructure development and enhance the renewable energy sector while adhering to global standards and best business practices. He places great importance on developing innovative solutions that meet market needs and keep pace with industrial advancements, focusing on quality, efficiency, and sustainability at every stage of the process."}
          </p>

          <h4 className="fw-semibold mt-4">Eng. Chakola</h4>
          <p>
            {lang === "ar"
              ? "يمتلك المهندس شاكيولا خبرة واسعة تمتد لأكثر من 40 عامًا في الكويت في مجال البناء والصناعات المرتبطة به. ساهم في إنشاء مصانع متكاملة مثل مصانع الحديد، الأبواب، النجارة، الأثاث، والإسفنج الصناعي. بفضل خبرته الواسعة وقيادته، تم اختياره كمستشار محلي لشركات دولية تقدم حلولًا تكنولوجية رائدة في الكويت ودول مجلس التعاون الخليجي."
              : "Eng. Chakola has gained extensive experience in Kuwait, spanning over 40 years in the construction and manufacturing industries. He has helped establish turnkey manufacturing centers such as steel factories, door factories, joinery and carpentry workshops, and PU foam plants. His expertise and leadership have made him a trusted consultant for international companies providing technological solutions to leading industries in Kuwait and the GCC region."}
          </p>
        </section>

        <section>
          <h2 className="mb-3 fw-bold">
            {lang === "ar" ? "خدماتنا" : "Our Services"}
          </h2>
          <ul>
            <li>Fire Rated Doors (Steel / Wood / Glass)</li>
            <li>High-Speed Fabric Doors</li>
            <li>Garage Doors</li>
            <li>Fire Rated Rolling Shutters</li>
            <li>Bullet & Blast Resistant Doors</li>
            <li>Structural Steel Fabrication</li>
          </ul>
        </section>
      </div>

      <style>{`
        h2 {
          color: #007bff;
        }
        ul {
          list-style-type: disc;
          padding-left: ${lang === "ar" ? "0" : "20px"};
          padding-right: ${lang === "ar" ? "20px" : "0"};
        }
        li {
          margin-bottom: 8px;
        }
      `}</style>
    </>
  );
}
