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
          bottom: "80px",
          ...position,
          zIndex: 999999, // Very high z-index
          cursor: "pointer",
          backgroundColor: "#25D366",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          animation: "pulse 2s infinite",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
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
            fontSize: "32px" 
          }} 
        />
      </div>
      
      <style jsx global>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        /* Ensure nothing covers the button */
        .whatsapp-button {
          z-index: 999999 !important;
        }
        
        /* Debug if needed */
        /* 
        .whatsapp-button {
          border: 3px solid yellow !important;
        }
        */
      `}</style>
    </>
  );
};

export default WhatsAppButton;