"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Accreditations({ lang = "en" }) {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [isHovered, setIsHovered] = useState(false);

  // Logo data - replace with your actual logo imports/images
  const logos = [
    { id: 1, src: "/logos/logo1.png", alt: "Logo 1" },
    { id: 2, src: "/logos/logo2.png", alt: "Logo 2" },
    { id: 3, src: "/logos/logo3.png", alt: "Logo 3" },
    { id: 4, src: "/logos/logo4.png", alt: "Logo 4" },
    { id: 5, src: "/logos/logo5.png", alt: "Logo 5" },
    { id: 6, src: "/logos/logo6.png", alt: "Logo 6" },
    { id: 7, src: "/logos/logo7.png", alt: "Logo 7" },
    { id: 8, src: "/logos/logo8.png", alt: "Logo 8" },
  ];

  const CustomNextArrow = ({ onClick }) => {
    return (
      <div
        style={{
          position: "absolute",
          right: lang === "ar" ? "auto" : "-30px",
          left: lang === "ar" ? "-30px" : "auto",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          cursor: "pointer",
          background: "#f0f0f0",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          opacity: isHovered ? 1 : 0,
        }}
        onClick={onClick}
        className="arrow-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {lang === "ar" ? (
          <ArrowBackIcon style={{ color: "#333" }} />
        ) : (
          <ArrowForwardIcon style={{ color: "#333" }} />
        )}
      </div>
    );
  };

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <div
        style={{
          position: "absolute",
          left: lang === "ar" ? "auto" : "-30px",
          right: lang === "ar" ? "-30px" : "auto",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          cursor: "pointer",
          background: "#f0f0f0",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
          opacity: isHovered ? 1 : 0,
        }}
        onClick={onClick}
        className="arrow-hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {lang === "ar" ? (
          <ArrowForwardIcon style={{ color: "#333" }} />
        ) : (
          <ArrowBackIcon style={{ color: "#333" }} />
        )}
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600, // Slightly slower for smoother feel
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Smooth auto-rotation
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    rtl: lang === "ar",
    pauseOnHover: true, // Pause on hover for better UX
    pauseOnFocus: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)", // Smooth easing
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 576) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(3);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  return (
    <section className="container py-5">
      <div className="d-flex flex-column align-items-center text-center mb-4">
        <div 
          className="fs-2 mb-3" 
          style={{ 
            fontWeight: "700",
            color: "#2c3e50"
          }}
        >
          {lang === "ar" ? "الاعتمادات" : "Accreditations"}
        </div>
        <p className="text-center w-md-75 text-muted">
          {lang === "ar" 
            ? "شركاؤنا ومعتمدونا الذين نثق بهم" 
            : "Our trusted partners and accreditors"}
        </p>
      </div>
      
      {/* Optional subtitle like in the image */}
      {lang === "ar" && (
        <div className="text-center mb-4">
          <h5 style={{ color: "#34495e", fontWeight: "600" }}>
            ركائز النجاح في مكتب الأثر البيئي
          </h5>
        </div>
      )}

      <div 
        className="px-3 px-sm-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Slider {...settings}>
          {logos.map((logo) => (
            <div className="p-3" key={logo.id}>
              <div className="logo-slide">
                <div className="d-flex align-items-center justify-content-center h-100 p-3">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{
                      maxWidth: "180px",
                      maxHeight: "120px",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      filter: "grayscale(20%)",
                      opacity: "0.9",
                      transition: "all 0.4s ease",
                    }}
                    className="img-fluid"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%)";
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = "grayscale(20%)";
                      e.currentTarget.style.opacity = "0.9";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .logo-slide {
          height: 150px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          border: 1px solid #eaeaea;
          transition: all 0.4s ease;
          overflow: hidden;
        }
        
        .logo-slide:hover {
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          border-color: #ddd;
          transform: translateY(-3px);
        }
        
        .arrow-hover:hover {
          background: #e0e0e0 !important;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15) !important;
          transform: translateY(-50%) scale(1.1) !important;
        }
        
        @media (max-width: 768px) {
          .logo-slide {
            height: 130px;
            border-radius: 10px;
          }
          
          .arrow-hover {
            opacity: 1 !important;
            background: rgba(240, 240, 240, 0.9) !important;
          }
        }
        
        @media (max-width: 576px) {
          .logo-slide {
            height: 120px;
          }
        }
        
        /* Smooth sliding animation */
        .slick-slide {
          transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        
        .slick-active {
          opacity: 1;
        }
        
        .slick-slide:not(.slick-active) {
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}