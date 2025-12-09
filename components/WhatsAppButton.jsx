"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ lang = "en" }) => {
  const phoneNumber = "+966559931444"; 
  const message = lang === "ar" 
    ? "مرحبا، أريد الاستفسار عن خدماتكم" 
    : "Hello, I would like to inquire about your services";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Position based on language
  const position = lang === "ar" ? { left: "20px" } : { right: "20px" };

  return (
    <>
      <div 
        className="whatsapp-button"
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: "30px", // Increased from 80px to be more accessible
          ...position,
          zIndex: 999999,
          cursor: "pointer",
          backgroundColor: "#25D366",
          width: "70px", // Increased size
          height: "70px", // Increased size
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)", // Stronger shadow
          transition: "all 0.3s ease",
          animation: "pulse 2s infinite",
          border: "3px solid white", // Added white border for contrast
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
        }}
        role="button"
        aria-label={lang === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
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
            fontSize: "38px", // Increased icon size
          }} 
        />
        
        {/* Tooltip/Text label */}
        <div 
          className="whatsapp-tooltip"
          style={{
            position: "absolute",
            bottom: "100%",
            [lang === "ar" ? "right" : "left"]: "50%",
            transform: lang === "ar" ? "translateX(50%)" : "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            whiteSpace: "nowrap",
            marginBottom: "10px",
            opacity: 0,
            visibility: "hidden",
            transition: "all 0.3s ease",
            pointerEvents: "none",
          }}
        >
          {lang === "ar" ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
          <div 
            style={{
              position: "absolute",
              top: "100%",
              [lang === "ar" ? "right" : "left"]: "50%",
              transform: lang === "ar" ? "translateX(50%)" : "translateX(-50%)",
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid rgba(0, 0, 0, 0.8)",
            }}
          />
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); /* Larger pulse */
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        /* Show tooltip on hover */
        .whatsapp-button:hover .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
        }
        
        /* Ensure nothing covers the button */
        .whatsapp-button {
          z-index: 999999 !important;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .whatsapp-button {
            width: 65px !important;
            height: 65px !important;
            bottom: 25px !important;
          }
          
          .whatsapp-button svg {
            font-size: 34px !important;
          }
          
          .whatsapp-tooltip {
            display: none; /* Hide tooltip on mobile */
          }
        }
        
        @media (max-width: 480px) {
          .whatsapp-button {
            width: 60px !important;
            height: 60px !important;
            bottom: 20px !important;
          }
          
          .whatsapp-button svg {
            font-size: 30px !important;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;