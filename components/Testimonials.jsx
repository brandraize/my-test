"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Rating from "@mui/material/Rating";

export default function Testimonials({ lang = "en" }) {
  const [slidesToShow, setSlidesToShow] = useState(3);

const testimonialsContent = {
  en: [
    {
      name: "Mr. Abdul Aziz Al Mhan",
      quote:
        "ORVEXCO consistently delivers high-quality industrial projects. Their commitment to precision, safety, and efficiency is unmatched in the industry.",
    },
    {
      name: "Eng. Chakola",
      quote:
        "Working with ORVEXCO has been a pleasure. Their team combines decades of experience with innovative solutions that meet our project requirements perfectly.",
    },
    {
      name: "Jubail Industrial City Client",
      quote:
        "ORVEXCO’s fire-rated doors and structural steel solutions exceeded our expectations. Their attention to detail and timely delivery are truly commendable.",
    },
    {
      name: "Kuwait Construction Partner",
      quote:
        "We have collaborated with ORVEXCO on multiple projects. Their expertise in industrial fabrication and construction has made every project successful.",
    },
  ],
  ar: [
    {
      name: "عبدالعزيز علي المهّان",
      quote:
        "تقدم أورفكسو مشاريع صناعية عالية الجودة باستمرار. التزامهم بالدقة والأمان والكفاءة لا مثيل له في الصناعة.",
    },
    {
      name: "المهندس تشاكولا",
      quote:
        "كان العمل مع أورفكسو ممتعًا. يجمع فريقهم بين عقود من الخبرة وحلول مبتكرة تلبي متطلبات مشاريعنا بدقة.",
    },
    {
      name: "عميل مدينة الجبيل الصناعية",
      quote:
        "تجاوزت أبواب أورفكسو المقاومة للحريق وحلول الهياكل الفولاذية توقعاتنا. اهتمامهم بالتفاصيل وتسليمهم في الوقت المحدد يستحق الثناء.",
    },
    {
      name: "شريك بناء الكويت",
      quote:
        "تعاونّا مع أورفكسو في عدة مشاريع. خبرتهم في التصنيع الصناعي والبناء جعلت كل مشروع ناجحًا.",
    },
  ],
};



  const testimonials = testimonialsContent[lang] || testimonialsContent.en;

  const CustomNextArrow = ({ onClick, slideCount, currentSlide }) => {
    if (slideCount <= slidesToShow || currentSlide >= slideCount - slidesToShow)
      return null;

    return (
      <div
        style={{
          position: "absolute",
          right: lang === "ar" ? "auto" : "-25px",
          left: lang === "ar" ? "-25px" : "auto",
          top: "45%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        className="primary-bg"
        onClick={onClick}
      >
        {lang === "ar" ? (
          <ArrowBackIcon style={{ color: "white" }} />
        ) : (
          <ArrowForwardIcon style={{ color: "white" }} />
        )}
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick, currentSlide }) => {
    if (currentSlide === 0 || slidesToShow >= currentSlide + 1) return null;

    return (
      <div
        style={{
          position: "absolute",
          left: lang === "ar" ? "auto" : "-25px",
          right: lang === "ar" ? "-25px" : "auto",
          top: "45%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        className="primary-bg"
        onClick={onClick}
      >
        {lang === "ar" ? (
          <ArrowForwardIcon style={{ color: "white" }} />
        ) : (
          <ArrowBackIcon style={{ color: "white" }} />
        )}
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    rtl: lang === "ar",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rtl: lang === "ar",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rtl: lang === "ar",
        },
      },
    ],
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  return (
    <section className="container py-5">
      <div className="d-flex flex-column align-items-center text-center mb-4">
        <div className="fs-2 mb-3" style={{ fontWeight: "700" }}>
          {lang === "ar"
            ? "ماذا يقول عملاؤنا"
            : "What Our Customers Are Saying"}
        </div>
        <p className="text-center w-md-75">
          {lang === "ar"
            ? "عملاؤنا يحبوننا! اقرأ ما يقولونه عن تجاربهم."
            : "Our customers love us! Read what they have to say about their experiences."}
        </p>
      </div>
      <div className="px-3 px-sm-0">
        <Slider {...settings}>
          {testimonials.map((user, index) => (
            <div className="p-2" key={index}>
              <div className="p-3 bg-white testimonial-slide">
                <div
                  style={{
                    fontSize: "14px",
                    color: "rgba(24, 24, 24, 1)",
                    textAlign: lang === "ar" ? "right" : "left",
                  }}
                  className="mb-4"
                >
                  {user.quote}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div
                    style={{
                      fontWeight: "500",
                      color: "black",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {user.name}
                  </div>
                  <Rating value={5} readOnly />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
