"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const WhatsAppButton = ({ lang = "en" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const phoneNumber = "+966534161555"; 
  const message = lang === "ar" 
    ? "مرحبا، أريد الاستفسار عن خدماتكم" 
    : "Hello, I would like to inquire about your services";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  // Consistent positioning - always show on right for LTR, left for RTL
  const buttonStyle = {
    position: "fixed",
    top: "450px",
    [lang === "ar" ? "left" : "right"]: "20px",
    zIndex: 2147483647, // Maximum z-index to always stay on top
    cursor: "pointer",
    backgroundColor: "#25D366",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: isHovered ? "0 6px 20px rgba(0,0,0,0.4)" : "0 6px 20px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease",
    border: "3px solid white",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    willChange: "transform",
  };

  return (
    <>
      <div 
        className="whatsapp-fixed-button"
        onClick={handleClick}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        aria-label="Contact us on WhatsApp"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      >
        <FaWhatsapp 
          style={{ 
            color: "white", 
            fontSize: "38px" 
          }} 
        />
      </div>
      
      <style jsx global>{`
        @keyframes whatsappPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        .whatsapp-fixed-button {
          animation: whatsappPulse 2s infinite;
        }
        
        .whatsapp-fixed-button:active {
          transform: scale(0.95) !important;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;