"use client";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ lang = "en" }) => {
  const phoneNumber = "+966534161555"; 
  const message = lang === "ar" 
    ? "مرحبا، أريد الاستفسار عن خدماتكم" 
    : "Hello, I would like to inquire about your services";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  // Position based on language
  const position = lang === "ar" ? { left: "20px", right: "auto" } : { right: "20px", left: "auto" };

  return (
    <div 
      className="whatsapp-button"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      style={{
        position: "fixed",
        top: "520px",
        ...position,
        zIndex: 2147483647,
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
        border: "3px solid white",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
      }}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp 
        style={{ 
          color: "white", 
          fontSize: "38px" 
        }} 
      />
    </div>
  );
};

export default WhatsAppButton;