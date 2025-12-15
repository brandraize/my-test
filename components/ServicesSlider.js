// STEP 1: Mark this as a Client Component
"use client";

import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";

// STEP 2: Import the required CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// The component logic remains the same
const ServicesSlider = ({ lang, servicesData, sectionTitle, sectionDescription }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: lang === 'ar', // Add RTL support
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const sliderStyles = {
    container: {
      padding: '60px 20px',
      textAlign: 'center',
      background: '#ffffff',
    },
    slide: {
      padding: '15px'
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      height: '220px',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom: '15px',
    },
    content: {
      textAlign: 'left',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    }
  };

  return (
    <div style={sliderStyles.container} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <h2>{sectionTitle}</h2>
      <p>{sectionDescription}</p>
      <div style={{ padding: '40px 0' }}>
        <Slider {...settings}>
          {servicesData.map((service) => (
            <div key={service.title} style={sliderStyles.slide}>
              <div style={sliderStyles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={false}
                />
              </div>
              <div style={sliderStyles.content}>
                <h3 style={sliderStyles.title}>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesSlider;