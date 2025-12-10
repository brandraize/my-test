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

  const position = lang === "ar" ? { left: "20px" } : { right: "20px" };

  return (
    <>
      <div 
        className="whatsapp-button"
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: "30px",
          ...position,
          zIndex: 999999, // Very high z-index
          cursor: "pointer",
          backgroundColor: "#25D366",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
          transition: "all 0.3s ease",
          animation: "pulse 2s infinite",
          border: "3px solid white",
          // Add this to ensure it's on top of everything
          willChange: "transform",
        }}
        // ... rest of your event handlers ...
      >
        <FaWhatsapp 
          style={{ 
            color: "white", 
            fontSize: "38px",
          }} 
        />
        
        {/* Tooltip */}
        <div 
          className="whatsapp-tooltip"
          style={{
            position: "absolute",
            bottom: "100%",
            [lang === "ar" ? "right" : "left"]: "50%",
            transform: lang === "ar" ? "translateX(50%)" : "translateX(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
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
            zIndex: 999999, // Same high z-index
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
              borderTop: "6px solid rgba(0, 0, 0, 0.9)",
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
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        /* IMPORTANT: Force WhatsApp button on top */
        .whatsapp-button {
          z-index: 99999222233333333333339 !important;
          transform: translateZ(0); /* Force hardware acceleration */
        }
        
        /* Show tooltip on hover */
        .whatsapp-button:hover .whatsapp-tooltip {
          opacity: 1;
          visibility: visible;
        }
        
        /* Reset any stacking contexts that might interfere */
        body > div, 
        body > section,
        main,
        .container,
        .row,
        .col-lg-6 {
          transform-style: flat !important;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .whatsapp-button {
            width: 65px !important;
            height: 65px !important;
            bottom: 25px !important;
            z-index: 999999 !important;
          }
          
          .whatsapp-button svg {
            font-size: 34px !important;
          }
          
          .whatsapp-tooltip {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .whatsapp-button {
            width: 60px !important;
            height: 60px !important;
            bottom: 20px !important;
            z-index: 999999 !important;
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