"use client";
import React, { useState } from "react";
import { db } from "@/configuration/firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

export default function ContactPage({ lang = "en" }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    country: "",
    message: "",
  });

  const content = {
    en: {
      title: "Contact Us",
      description:
        "If you wish to contact the Estedama directly, please feel free to reach out through any of our channels mentioned below.",
      companyName: "Estedama Environmental Solutions & Contracting Co.",
      contactInfo: "Contact Information",
      contactForm: "Contact Form",
      form: {
        firstName: "First Name *",
        firstNamePlaceholder: "Enter First Name",
        lastName: "Last Name *",
        lastNamePlaceholder: "Enter Last Name",
        email: "Business Email *",
        emailPlaceholder: "Enter Your Email Address",
        mobile: "Mobile *",
        mobilePlaceholder: "Enter Mobile Number",
        company: "Company / Organization *",
        companyPlaceholder: "Enter Company Name",
        country: "Country *",
        message: "Message *",
        messagePlaceholder: "How Can We Help You?",
        send: "Send Message",
      },
      messages: {
        success: "Message sent successfully! We'll get back to you soon.",
        error: "Failed to send message. Please try again.",
      },
      contactDetails: {
        address:
          "Office #6248, Prince Turki Road, P.O. Box 34423, Al Khobar 2494, Kingdom of Saudi Arabia",
        phone: "(+966) 13 887 5000",
        email: "info@estedamacom.sa",
      },
    },

    ar: {
      title: "اتصل بنا",
      description:
        "إذا كنت ترغب في التواصل مع إستدامة مباشرة، فلا تتردد في التواصل من خلال أي من قنواتنا المذكورة أدناه.",
      companyName: "شركة إستدامة للحلول البيئية والمقاولات",
      contactInfo: "معلومات الاتصال",
      contactForm: "نموذج الاتصال",
      form: {
        firstName: "الاسم الأول *",
        firstNamePlaceholder: "أدخل الاسم الأول",
        lastName: "اسم العائلة *",
        lastNamePlaceholder: "أدخل اسم العائلة",
        email: "البريد الإلكتروني للعمل *",
        emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
        mobile: "الجوال *",
        mobilePlaceholder: "أدخل رقم الجوال",
        company: "الشركة / المؤسسة *",
        companyPlaceholder: "أدخل اسم الشركة",
        country: "الدولة *",
        message: "الرسالة *",
        messagePlaceholder: "كيف يمكننا مساعدتك؟",
        send: "إرسال الرسالة",
      },
      messages: {
        success: "تم إرسال الرسالة بنجاح! سنعود إليك قريبًا.",
        error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      },
      contactDetails: {
        address:
          "مكتب 6248، طريق الأمير تركي، ص.ب 34423، الخبر 2494، المملكة العربية السعودية",
        phone: "+966 13 887 5000",
        email: "info@estedamacom.sa",
      },
    },
  };

  const { title, description, companyName, contactInfo, contactForm, form, messages, contactDetails } =
    content[lang] || content.en;

  const countries = [
    "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Australia","Austria",
    "Bahrain","Bangladesh","Belgium","Brazil","Canada","China","Denmark","Egypt",
    "France","Germany","India","Iran","Iraq","Italy","Japan","Jordan","Kuwait",
    "Lebanon","Malaysia","Mexico","Netherlands","Oman","Pakistan","Philippines",
    "Qatar","Russia","Saudi Arabia","Singapore","South Africa","South Korea","Spain",
    "Sweden","Switzerland","Syria","Thailand","Turkey","UAE","UK","USA","Yemen"
  ].sort();

  const dataChange = (e) => {
    const { name, value } = e.target;
    if (/^\s+$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp(),
        read: false,
      });
      toast.success(messages.success);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        company: "",
        country: "",
        message: "",
      });
    } catch (error) {
      console.log("Failed to send message", error);
      toast.error(messages.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 py-5" dir={lang === "ar" ? "rtl" : "ltr"} style={{
      background: "linear-gradient(135deg, #0a3d2f 0%, #1a5c48 50%, #0a3d2f 100%)"
    }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h1 className="display-5 fw-bold text-white mb-3" style={{ 
            background: "linear-gradient(90deg, #ffffff 0%, #c6f7e2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            {title}
          </h1>
          <p className="lead mx-auto text-white opacity-85" style={{ 
            maxWidth: "800px",
            fontWeight: 300
          }}>
            {description}
          </p>
          <h3 className="text-white mt-4 fw-semibold" style={{
            color: "#e0f7ef"
          }}>
            {companyName}
          </h3>
        </motion.div>

        <div className="row g-5">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="col-lg-4"
          >
            <div className="card border-0 rounded-4 p-4 p-md-5 h-100 shadow-lg"
              style={{ 
                background: "linear-gradient(145deg, rgba(10, 61, 47, 0.95) 0%, rgba(26, 92, 72, 0.95) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)"
              }}>
              
              <h3 className="fw-bold mb-4" style={{
                color: "#ffffff",
                fontSize: "1.8rem"
              }}>
                {contactInfo}
              </h3>

              <div className="d-flex flex-column gap-4">

                {/* Address */}
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                    background: "rgba(46, 229, 157, 0.15)",
                    minWidth: "56px",
                    minHeight: "56px"
                  }}>
                    <FaMapMarkerAlt className="text-white" size={20} />
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1" style={{
                      color: "#2ee59d"
                    }}>
                      {lang === "ar" ? "العنوان" : "Address"}
                    </h6>
                    <p className="mb-0" style={{
                      color: "#e0f7ef",
                      fontWeight: 300,
                      lineHeight: "1.6"
                    }}>
                      {contactDetails.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                    background: "rgba(46, 229, 157, 0.15)",
                    minWidth: "56px",
                    minHeight: "56px"
                  }}>
                    <FaPhone className="text-white" size={20} />
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1" style={{
                      color: "#2ee59d"
                    }}>
                      {lang === "ar" ? "الهاتف" : "Phone"}
                    </h6>
                    <p className="mb-0" style={{
                      color: "#e0f7ef",
                      fontWeight: 300
                    }}>
                      {contactDetails.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                    background: "rgba(46, 229, 157, 0.15)",
                    minWidth: "56px",
                    minHeight: "56px"
                  }}>
                    <FaEnvelope className="text-white" size={20} />
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1" style={{
                      color: "#2ee59d"
                    }}>
                      {lang === "ar" ? "البريد الإلكتروني" : "Email"}
                    </h6>
                    <p className="mb-0" style={{
                      color: "#e0f7ef",
                      fontWeight: 300
                    }}>
                      {contactDetails.email}
                    </p>
                  </div>
                </div>

                {/* Company */}
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
                    background: "rgba(46, 229, 157, 0.15)",
                    minWidth: "56px",
                    minHeight: "56px"
                  }}>
                    <FaBuilding className="text-white" size={20} />
                  </div>
                  <div>
                    <h6 className="fw-semibold mb-1" style={{
                      color: "#2ee59d"
                    }}>
                      {lang === "ar" ? "الشركة" : "Company"}
                    </h6>
                    <p className="mb-0" style={{
                      color: "#e0f7ef",
                      fontWeight: 300
                    }}>
                      {companyName}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="col-lg-8"
          >
            <div className="card border-0 rounded-4 p-4 p-md-5 shadow-lg"
              style={{ 
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}>
              
              <h3 className="fw-bold mb-4" style={{
                color: "#2ee59d",
                fontSize: "1.8rem"
              }}>
                {contactForm}
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-4">

                  {/* INPUT TEMPLATE */}
                  {[
                    { name: "firstName", label: form.firstName, placeholder: form.firstNamePlaceholder },
                    { name: "lastName", label: form.lastName, placeholder: form.lastNamePlaceholder },
                    { name: "email", label: form.email, placeholder: form.emailPlaceholder, type: "email" },
                    { name: "mobile", label: form.mobile, placeholder: form.mobilePlaceholder },
                    { name: "company", label: form.company, placeholder: form.companyPlaceholder }
                  ].map((field, i) => (
                    <div className="col-md-6" key={i}>
                      <label className="form-label mb-2 fw-semibold" style={{
                        color: "#2ee59d"
                      }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type || "text"}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={dataChange}
                        placeholder={field.placeholder}
                        required
                        className="form-control form-control-lg rounded-3"
                        style={{
                          background: "rgba(255, 255, 255, 0.07)",
                          border: "1px solid rgba(46, 229, 157, 0.3)",
                          color: "#ffffff",
                          transition: "all 0.3s ease"
                        }}
                        onFocus={(e) => {
                          e.target.style.background = "rgba(255, 255, 255, 0.12)";
                          e.target.style.borderColor = "#2ee59d";
                        }}
                        onBlur={(e) => {
                          e.target.style.background = "rgba(255, 255, 255, 0.07)";
                          e.target.style.borderColor = "rgba(46, 229, 157, 0.3)";
                        }}
                      />
                    </div>
                  ))}

                  {/* Country */}
                  <div className="col-md-6">
                    <label className="form-label mb-2 fw-semibold" style={{
                      color: "#2ee59d"
                    }}>
                      {form.country}
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={dataChange}
                      required
                      className="form-select form-select-lg rounded-3"
                      style={{
                        background: "rgba(255, 255, 255, 0.07)",
                        border: "1px solid rgba(46, 229, 157, 0.3)",
                        color: "#ffffff",
                        transition: "all 0.3s ease"
                      }}
                      onFocus={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.12)";
                        e.target.style.borderColor = "#2ee59d";
                      }}
                      onBlur={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.07)";
                        e.target.style.borderColor = "rgba(46, 229, 157, 0.3)";
                      }}
                    >
                      <option value="" style={{ background: "#0a3d2f" }}>
                        {lang === "ar" ? "اختر الدولة" : "Select Country"}
                      </option>
                      {countries.map((country) => (
                        <option key={country} value={country} style={{ background: "#0a3d2f" }}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label className="form-label mb-2 fw-semibold" style={{
                      color: "#2ee59d"
                    }}>
                      {form.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={dataChange}
                      placeholder={form.messagePlaceholder}
                      required
                      rows={5}
                      className="form-control form-control-lg rounded-3"
                      style={{
                        background: "rgba(255, 255, 255, 0.07)",
                        border: "1px solid rgba(46, 229, 157, 0.3)",
                        color: "#ffffff",
                        transition: "all 0.3s ease",
                        resize: "vertical"
                      }}
                      onFocus={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.12)";
                        e.target.style.borderColor = "#2ee59d";
                      }}
                      onBlur={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.07)";
                        e.target.style.borderColor = "rgba(46, 229, 157, 0.3)";
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <div className="col-12 text-center mt-3 pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-lg px-5 rounded-3 fw-semibold"
                      style={{
                        background: loading 
                          ? "linear-gradient(90deg, #2ee59d 0%, #1a5c48 100%)" 
                          : "linear-gradient(90deg, #2ee59d 0%, #1db37a 100%)",
                        border: "none",
                        color: "#0a3d2f",
                        padding: "0.75rem 2.5rem",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(46, 229, 157, 0.3)"
                      }}
                      onMouseEnter={(e) => {
                        if (!loading) {
                          e.target.style.transform = "translateY(-2px)";
                          e.target.style.boxShadow = "0 6px 20px rgba(46, 229, 157, 0.4)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!loading) {
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow = "0 4px 15px rgba(46, 229, 157, 0.3)";
                        }
                      }}
                    >
                      {loading
                        ? (lang === "ar" ? "جارٍ الإرسال..." : "Sending...")
                        : form.send}
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}