"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AirQualitySection({ lang = "en" }) {
  const isRTL = lang === "ar";
  
  const colors = {
    primary: "#006930",
    primaryDark: "#004d24",
    secondary: "#d1fae5",
    accent: "#065f46",
    textDark: "#353535",
    textLight: "#6b7280",
    white: "#ffffff",
    lightBg: "#f0fdf4",
    grayBg: "#f9fafb",
    border: "#e5e7eb",
  };

  const [selectedRegion, setSelectedRegion] = useState("HAIL");
  const [selectedDate, setSelectedDate] = useState("2025-12-06");
  const [activeStation, setActiveStation] = useState(1);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  // Regions data - matching the select options from HTML
  const regions = [
    { code: "RUH", name: isRTL ? "الرياض" : "Riyadh", count: 5 },
    { code: "MKA", name: isRTL ? "مكة المكرمة" : "Makkah", count: 4 },
    { code: "MDN", name: isRTL ? "المدينة المنورة" : "Madinah", count: 3 },
    { code: "EST", name: isRTL ? "المنطقة الشرقية" : "Eastern Province", count: 6 },
    { code: "JOF", name: isRTL ? "الجوف" : "Al-Jouf", count: 2 },
    { code: "BHA", name: isRTL ? "الباحة" : "Al-Baha", count: 2 },
    { code: "ASIR", name: isRTL ? "عسير" : "Asir", count: 4 },
    { code: "QSM", name: isRTL ? "القصيم" : "Al-Qassim", count: 3 },
    { code: "HAIL", name: isRTL ? "حائل" : "Hail", count: 10 },
    { code: "TBK", name: isRTL ? "تبوك" : "Tabuk", count: 2 },
    { code: "NRTH", name: isRTL ? "الحدود الشمالية" : "Northern Borders", count: 1 },
    { code: "JZN", name: isRTL ? "جازان" : "Jazan", count: 2 },
    { code: "NJR", name: isRTL ? "نجران" : "Najran", count: 1 },
  ];

  // Quality levels exactly as in the image
  const qualityLevels = [
    { 
      level: "صحي", 
      english: "Healthy",
      color: "#44B274", 
      range: "0-50",
      description: isRTL ? "جودة هواء ممتازة" : "Excellent air quality"
    },
    { 
      level: "مقابل", 
      english: "Moderate",
      color: "#82C887", 
      range: "51-100",
      description: isRTL ? "جودة هواء جيدة" : "Good air quality"
    },
    { 
      level: "غير صحي للمجموعات الحساسة", 
      english: "Unhealthy for Sensitive Groups",
      color: "#F3D849", 
      range: "101-150",
      description: isRTL ? "غير صحي للمجموعات الحساسة" : "Unhealthy for sensitive groups"
    },
    { 
      level: "غير صحي", 
      english: "Unhealthy",
      color: "#F49B3B", 
      range: "151-200",
      description: isRTL ? "غير صحي للجميع" : "Unhealthy for everyone"
    },
    { 
      level: "خام", 
      english: "Harmful",
      color: "#E84C3D", 
      range: "201-300",
      description: isRTL ? "خطير على الصحة" : "Harmful to health"
    },
    { 
      level: "خطر", 
      english: "Dangerous",
      color: "#B93D4F", 
      range: "301-500",
      description: isRTL ? "خطير جداً" : "Very dangerous"
    },
    { 
      level: "غير متوفرة", 
      english: "Not Available",
      color: "#F3F3F3", 
      range: "N/A",
      description: isRTL ? "بيانات غير متوفرة" : "Data not available"
    },
  ];

  // Pollutant indicators
  const pollutants = [
    { code: "PM10", name: isRTL ? "الجسيمات الدقيقة" : "Fine Particles", value: "45", unit: "µg/m³", level: "excellent" },
    { code: "CO", name: isRTL ? "أول أكسيد الكربون" : "Carbon Monoxide", value: "0.8", unit: "ppm", level: "good" },
    { code: "NO2", name: isRTL ? "ثاني أكسيد النيتروجين" : "Nitrogen Dioxide", value: "12", unit: "ppb", level: "excellent" },
    { code: "O3", name: isRTL ? "الأوزون" : "Ozone", value: "28", unit: "ppb", level: "good" },
    { code: "SO2", name: isRTL ? "ثاني أكسيد الكبريت" : "Sulfur Dioxide", value: "4", unit: "ppb", level: "good" },
  ];

  // Stations data for each region
  const stationsData = {
    // Riyadh
    RUH: [
      {
        name: isRTL ? "محطة الرياض المركزية" : "Riyadh Central Station",
        pollutants: [
          { code: "SO2", value: "15", status: "good" },
          { code: "O3", value: "38", status: "good" },
          { code: "NO2", value: "22", status: "excellent" },
          { code: "CO", value: "0.5", status: "good" },
          { code: "PM10", value: "28", status: "excellent" }
        ]
      },
      {
        name: isRTL ? "شمال الرياض" : "North Riyadh",
        pollutants: [
          { code: "SO2", value: "18", status: "good" },
          { code: "O3", value: "42", status: "good" },
          { code: "NO2", value: "25", status: "good" },
          { code: "CO", value: "0.6", status: "good" },
          { code: "PM10", value: "32", status: "good" }
        ]
      },
      {
        name: isRTL ? "جنوب الرياض" : "South Riyadh",
        pollutants: [
          { code: "SO2", value: "21", status: "good" },
          { code: "O3", value: "45", status: "good" },
          { code: "NO2", value: "28", status: "good" },
          { code: "CO", value: "0.7", status: "good" },
          { code: "PM10", value: "35", status: "good" }
        ]
      },
      {
        name: isRTL ? "الملز" : "Al Malaz",
        pollutants: [
          { code: "SO2", value: "24", status: "good" },
          { code: "O3", value: "48", status: "good" },
          { code: "NO2", value: "31", status: "good" },
          { code: "CO", value: "0.8", status: "good" },
          { code: "PM10", value: "38", status: "good" }
        ]
      },
      {
        name: isRTL ? "العليا" : "Al Olaya",
        pollutants: [
          { code: "SO2", value: "19", status: "good" },
          { code: "O3", value: "40", status: "good" },
          { code: "NO2", value: "26", status: "good" },
          { code: "CO", value: "0.6", status: "good" },
          { code: "PM10", value: "30", status: "good" }
        ]
      }
    ],
    
    // Makkah
    MKA: [
      {
        name: isRTL ? "العزيزية" : "Al Aziziyah",
        pollutants: [
          { code: "SO2", value: "20", status: "good" },
          { code: "O3", value: "44", status: "good" },
          { code: "NO2", value: "27", status: "good" },
          { code: "CO", value: "0.7", status: "good" },
          { code: "PM10", value: "34", status: "good" }
        ]
      },
      {
        name: isRTL ? "الشوقية" : "Al Shouqiyah",
        pollutants: [
          { code: "SO2", value: "22", status: "good" },
          { code: "O3", value: "46", status: "good" },
          { code: "NO2", value: "29", status: "good" },
          { code: "CO", value: "0.8", status: "good" },
          { code: "PM10", value: "36", status: "good" }
        ]
      },
      {
        name: isRTL ? "الزاهر" : "Al Zaher",
        pollutants: [
          { code: "SO2", value: "25", status: "good" },
          { code: "O3", value: "50", status: "good" },
          { code: "NO2", value: "32", status: "good" },
          { code: "CO", value: "0.9", status: "good" },
          { code: "PM10", value: "39", status: "good" }
        ]
      },
      {
        name: isRTL ? "العمرة" : "Umrah Area",
        pollutants: [
          { code: "SO2", value: "18", status: "good" },
          { code: "O3", value: "42", status: "good" },
          { code: "NO2", value: "25", status: "good" },
          { code: "CO", value: "0.6", status: "good" },
          { code: "PM10", value: "33", status: "good" }
        ]
      }
    ],
    
    // Madinah
    MDN: [
      {
        name: isRTL ? "المنطقة المركزية" : "Central Area",
        pollutants: [
          { code: "SO2", value: "16", status: "good" },
          { code: "O3", value: "39", status: "good" },
          { code: "NO2", value: "23", status: "good" },
          { code: "CO", value: "0.5", status: "good" },
          { code: "PM10", value: "29", status: "excellent" }
        ]
      },
      {
        name: isRTL ? "قباء" : "Quba",
        pollutants: [
          { code: "SO2", value: "14", status: "excellent" },
          { code: "O3", value: "36", status: "good" },
          { code: "NO2", value: "21", status: "excellent" },
          { code: "CO", value: "0.4", status: "good" },
          { code: "PM10", value: "27", status: "excellent" }
        ]
      },
      {
        name: isRTL ? "العيون" : "Al Uyun",
        pollutants: [
          { code: "SO2", value: "19", status: "good" },
          { code: "O3", value: "41", status: "good" },
          { code: "NO2", value: "24", status: "good" },
          { code: "CO", value: "0.6", status: "good" },
          { code: "PM10", value: "31", status: "good" }
        ]
      }
    ],
    
    // Eastern Province
    EST: [
      {
        name: isRTL ? "الدمام" : "Dammam",
        pollutants: [
          { code: "SO2", value: "28", status: "good" },
          { code: "O3", value: "52", status: "good" },
          { code: "NO2", value: "35", status: "good" },
          { code: "CO", value: "1.0", status: "good" },
          { code: "PM10", value: "40", status: "good" }
        ]
      },
      {
        name: isRTL ? "الخبر" : "Al Khobar",
        pollutants: [
          { code: "SO2", value: "26", status: "good" },
          { code: "O3", value: "49", status: "good" },
          { code: "NO2", value: "33", status: "good" },
          { code: "CO", value: "0.9", status: "good" },
          { code: "PM10", value: "38", status: "good" }
        ]
      },
      {
        name: isRTL ? "الظهران" : "Dhahran",
        pollutants: [
          { code: "SO2", value: "24", status: "good" },
          { code: "O3", value: "47", status: "good" },
          { code: "NO2", value: "31", status: "good" },
          { code: "CO", value: "0.8", status: "good" },
          { code: "PM10", value: "36", status: "good" }
        ]
      },
      {
        name: isRTL ? "الجبيل" : "Jubail",
        pollutants: [
          { code: "SO2", value: "30", status: "good" },
          { code: "O3", value: "55", status: "good" },
          { code: "NO2", value: "38", status: "good" },
          { code: "CO", value: "1.1", status: "good" },
          { code: "PM10", value: "42", status: "good" }
        ]
      },
      {
        name: isRTL ? "القطيف" : "Qatif",
        pollutants: [
          { code: "SO2", value: "22", status: "good" },
          { code: "O3", value: "45", status: "good" },
          { code: "NO2", value: "29", status: "good" },
          { code: "CO", value: "0.7", status: "good" },
          { code: "PM10", value: "34", status: "good" }
        ]
      },
      {
        name: isRTL ? "رأس تنورة" : "Ras Tanura",
        pollutants: [
          { code: "SO2", value: "32", status: "good" },
          { code: "O3", value: "58", status: "good" },
          { code: "NO2", value: "40", status: "good" },
          { code: "CO", value: "1.2", status: "good" },
          { code: "PM10", value: "44", status: "good" }
        ]
      }
    ],
    
    // Al-Jouf
    JOF: [
      {
        name: isRTL ? "سكاكا" : "Sakaka",
        pollutants: [
          { code: "SO2", value: "12", status: "excellent" },
          { code: "O3", value: "35", status: "good" },
          { code: "NO2", value: "18", status: "excellent" },
          { code: "CO", value: "0.3", status: "good" },
          { code: "PM10", value: "25", status: "excellent" }
        ]
      },
      {
        name: isRTL ? "قريات الملح" : "Qurayyat Al Milh",
        pollutants: [
          { code: "SO2", value: "10", status: "excellent" },
          { code: "O3", value: "33", status: "good" },
          { code: "NO2", value: "16", status: "excellent" },
          { code: "CO", value: "0.2", status: "excellent" },
          { code: "PM10", value: "22", status: "excellent" }
        ]
      }
    ],
    
    // Al-Baha
    BHA: [
      {
        name: isRTL ? "الباحة المركزية" : "Al Baha Central",
        pollutants: [
          { code: "SO2", value: "8", status: "excellent" },
          { code: "O3", value: "30", status: "good" },
          { code: "NO2", value: "14", status: "excellent" },
          { code: "CO", value: "0.2", status: "excellent" },
          { code: "PM10", value: "20", status: "excellent" }
        ]
      },
      {
        name: isRTL ? "بلجرشي" : "Baljurashi",
        pollutants: [
          { code: "SO2", value: "9", status: "excellent" },
          { code: "O3", value: "32", status: "good" },
          { code: "NO2", value: "15", status: "excellent" },
          { code: "CO", value: "0.3", status: "good" },
          { code: "PM10", value: "21", status: "excellent" }
        ]
      }
    ],
    
    // Asir
    ASIR: [
      {
        name: isRTL ? "أبها" : "Abha",
        pollutants: [
          { code: "SO2", value: "7", status: "excellent" },
          { code: "O3", value: "28", status: "good" },
          { code: "NO2", value: "13", status: "excellent" },
          { code: "CO", value: "0.2", status: "excellent" },
          { code: "PM10", value: "18", status: "excellent" }
        ]
      },
      {
        name: isRTL ? "خميس مشيط" : "Khamis Mushait",
        pollutants: [
          { code: "SO2", value: "11", status: "excellent" },
          { code: "O3", value: "34", status: "good" },
          { code: "NO2", value: "17", status: "excellent" },
          { code: "CO", value: "0.4", status: "good" },
          { code: "PM10", value: "24", status: "excellent" }
        ]
      },
      {
        name: isRTL ? "النماص" : "Al Namas",
        pollutants: [
          { code: "SO2", value: "6", status: "excellent" },
          { code: "O3", value: "27", status: "good" },
          { code: "NO2", value: "12", status: "excellent" },
          { code: "CO", value: "0.1", status: "excellent" },
          { code: "PM10", value: "17", status: "excellent" }
        ]
      },
      {
        name: isRTL ? "ظهران الجنوب" : "Dhahran Al Janub",
        pollutants: [
          { code: "SO2", value: "9", status: "excellent" },
          { code: "O3", value: "31", status: "good" },
          { code: "NO2", value: "15", status: "excellent" },
          { code: "CO", value: "0.3", status: "good" },
          { code: "PM10", value: "22", status: "excellent" }
        ]
      }
    ],
    
    // Al-Qassim
    QSM: [
      {
        name: isRTL ? "بريدة" : "Buraidah",
        pollutants: [
          { code: "SO2", value: "20", status: "good" },
          { code: "O3", value: "43", status: "good" },
          { code: "NO2", value: "26", status: "good" },
          { code: "CO", value: "0.7", status: "good" },
          { code: "PM10", value: "33", status: "good" }
        ]
      },
      {
        name: isRTL ? "عنيزة" : "Unaizah",
        pollutants: [
          { code: "SO2", value: "18", status: "good" },
          { code: "O3", value: "40", status: "good" },
          { code: "NO2", value: "24", status: "good" },
          { code: "CO", value: "0.6", status: "good" },
          { code: "PM10", value: "30", status: "good" }
        ]
      },
      {
        name: isRTL ? "الرس" : "Ar Rass",
        pollutants: [
          { code: "SO2", value: "22", status: "good" },
          { code: "O3", value: "45", status: "good" },
          { code: "NO2", value: "28", status: "good" },
          { code: "CO", value: "0.8", status: "good" },
          { code: "PM10", value: "35", status: "good" }
        ]
      }
    ],
    
    // Hail - Keep your existing Hail data
    HAIL: [
      {
        name: "الخماشية",
        pollutants: [
          { code: "SO2", value: "28", status: "unavailable" },
          { code: "O3", value: "45", status: "good" },
          { code: "NO2", value: "32", status: "good" },
          { code: "CO", value: "1.2", status: "unavailable" },
          { code: "PM10", value: "38", status: "unavailable" }
        ]
      },
      {
        name: "بلدية الغزالة",
        pollutants: [
          { code: "SO2", value: "35", status: "good" },
          { code: "O3", value: "52", status: "unavailable" },
          { code: "NO2", value: "41", status: "unavailable" },
          { code: "CO", value: "0.9", status: "unavailable" },
          { code: "PM10", value: "47", status: "unavailable" }
        ]
      },
      {
        name: "بلدية البقعاء",
        pollutants: [
          { code: "SO2", value: "29", status: "unavailable" },
          { code: "O3", value: "38", status: "good" },
          { code: "NO2", value: "34", status: "unavailable" },
          { code: "CO", value: "1.1", status: "good" },
          { code: "PM10", value: "42", status: "unavailable" }
        ]
      },
      {
        name: "الخطة",
        pollutants: [
          { code: "SO2", value: "31", status: "good" },
          { code: "O3", value: "49", status: "unavailable" },
          { code: "NO2", value: "36", status: "good" },
          { code: "CO", value: "0.8", status: "unavailable" },
          { code: "PM10", value: "39", status: "good" }
        ]
      },
      {
        name: "بلدية الحائط",
        pollutants: [
          { code: "SO2", value: "27", status: "unavailable" },
          { code: "O3", value: "44", status: "unavailable" },
          { code: "NO2", value: "33", status: "good" },
          { code: "CO", value: "1.0", status: "unavailable" },
          { code: "PM10", value: "41", status: "good" }
        ]
      },
      {
        name: "بلدية الجفر",
        pollutants: [
          { code: "SO2", value: "32", status: "good" },
          { code: "O3", value: "46", status: "unavailable" },
          { code: "NO2", value: "35", status: "good" },
          { code: "CO", value: "0.7", status: "unavailable" },
          { code: "PM10", value: "43", status: "good" }
        ]
      },
      {
        name: "بلدية الشنان",
        pollutants: [
          { code: "SO2", value: "30", status: "good" },
          { code: "O3", value: "51", status: "unavailable" },
          { code: "NO2", value: "37", status: "good" },
          { code: "CO", value: "0.9", status: "unavailable" },
          { code: "PM10", value: "45", status: "unavailable" }
        ]
      },
      {
        name: "بلدية السليمي",
        pollutants: [
          { code: "SO2", value: "34", status: "good" },
          { code: "O3", value: "42", status: "good" },
          { code: "NO2", value: "39", status: "good" },
          { code: "CO", value: "0.6", status: "good" },
          { code: "PM10", value: "48", status: "unavailable" }
        ]
      },
      {
        name: "بلدية تربة حائل",
        pollutants: [
          { code: "SO2", value: "33", status: "good" },
          { code: "O3", value: "47", status: "unavailable" },
          { code: "NO2", value: "38", status: "good" },
          { code: "CO", value: "0.5", status: "good" },
          { code: "PM10", value: "40", status: "good" }
        ]
      },
      {
        name: "بلدية مدينة جبة",
        pollutants: [
          { code: "SO2", value: "36", status: "good" },
          { code: "O3", value: "43", status: "good" },
          { code: "NO2", value: "40", status: "unavailable" },
          { code: "CO", value: "0.8", status: "good" },
          { code: "PM10", value: "44", status: "good" }
        ]
      }
    ],
    
    // Tabuk
    TBK: [
      {
        name: isRTL ? "تبوك المركزية" : "Tabuk Central",
        pollutants: [
          { code: "SO2", value: "17", status: "good" },
          { code: "O3", value: "37", status: "good" },
          { code: "NO2", value: "22", status: "good" },
          { code: "CO", value: "0.5", status: "good" },
          { code: "PM10", value: "28", status: "excellent" }
        ]
      },
      {
        name: isRTL ? "الوجاج" : "Al Wajj",
        pollutants: [
          { code: "SO2", value: "15", status: "good" },
          { code: "O3", value: "35", status: "good" },
          { code: "NO2", value: "20", status: "good" },
          { code: "CO", value: "0.4", status: "good" },
          { code: "PM10", value: "26", status: "excellent" }
        ]
      }
    ],
    
    // Northern Borders
    NRTH: [
      {
        name: isRTL ? "عرعر" : "Arar",
        pollutants: [
          { code: "SO2", value: "13", status: "excellent" },
          { code: "O3", value: "34", status: "good" },
          { code: "NO2", value: "19", status: "excellent" },
          { code: "CO", value: "0.3", status: "good" },
          { code: "PM10", value: "24", status: "excellent" }
        ]
      }
    ],
    
    // Jazan
    JZN: [
      {
        name: isRTL ? "جازان" : "Jazan",
        pollutants: [
          { code: "SO2", value: "23", status: "good" },
          { code: "O3", value: "47", status: "good" },
          { code: "NO2", value: "30", status: "good" },
          { code: "CO", value: "0.8", status: "good" },
          { code: "PM10", value: "37", status: "good" }
        ]
      },
      {
        name: isRTL ? "صامطة" : "Samtah",
        pollutants: [
          { code: "SO2", value: "21", status: "good" },
          { code: "O3", value: "44", status: "good" },
          { code: "NO2", value: "28", status: "good" },
          { code: "CO", value: "0.7", status: "good" },
          { code: "PM10", value: "35", status: "good" }
        ]
      }
    ],
    
    // Najran
    NJR: [
      {
        name: isRTL ? "نجران" : "Najran",
        pollutants: [
          { code: "SO2", value: "19", status: "good" },
          { code: "O3", value: "41", status: "good" },
          { code: "NO2", value: "25", status: "good" },
          { code: "CO", value: "0.6", status: "good" },
          { code: "PM10", value: "32", status: "good" }
        ]
      }
    ]
  };

  const getPollutantColor = (level) => {
    const colorMap = {
      "excellent": "#44B274",
      "good": "#82C887",
      "moderate": "#F3D849",
      "unhealthy": "#F49B3B",
      "harmful": "#E84C3D",
      "dangerous": "#B93D4F",
      "unavailable": "#F3F3F3"
    };
    return colorMap[level] || "#F3F3F3";
  };

  const getPollutantTextColor = (status) => {
    return status === "unavailable" ? "#353535" : "#ffffff";
  };

  const currentRegion = regions.find(r => r.code === selectedRegion) || regions[8]; // Default to HAIL
  const currentStations = stationsData[selectedRegion] || [];

  return (
    <section 
      className="py-8"
      style={{
        backgroundColor: colors.white,
        direction: isRTL ? "rtl" : "ltr",
      }}
      aria-labelledby="air-quality-title"
    >
      <div className="container">
        {/* Main Title */}
        <motion.div 
          className="text-center mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            id="air-quality-title"
            className="mb-3"
            style={{
              color: colors.primary,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: "800",
            }}
          >
            {isRTL ? "مؤشر جودة الهواء بالمملكة العربية السعودية" : "Saudi Arabia Air Quality Index"}
          </h1>
        </motion.div>

        <div className="row g-4">
          {/* Left Column - Stations List */}
          <div className="col-md-5 col-lg-5">
            <motion.div 
              className="card border-0 shadow-sm rounded-4 h-100"
              initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ height: "750px" }}
            >
              <div 
                className="card-header bg-transparent border-0 p-4 pb-3"
                style={{ 
                  borderBottom: `2px solid ${colors.secondary}`,
                  backgroundColor: colors.lightBg 
                }}
              >
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="title mb-0" style={{
                      color: colors.primary,
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}>
                      {currentRegion.name}
                    </p>
                  </div>
                  <div className="cont ml-auto d-flex align-items-center" style={{
                    color: colors.textDark,
                    fontSize: "0.9rem",
                  }}>
                    {isRTL ? "عدد المحطات" : "Stations Count"}
                    <span id="parksCount" className="ms-2" style={{
                      backgroundColor: colors.primary,
                      color: colors.white,
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}>
                      {currentRegion.count}
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-body p-4" style={{ overflowY: "auto", height: "calc(100% - 80px)" }}>
                {currentStations.length > 0 ? (
                  <div className="parks-list">
                    {currentStations.map((station, index) => (
                      <motion.div 
                        key={index}
                        className="mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="top-card mb-3">
                          <div className="card-title">
                            <h4 className="title mb-0" style={{
                              color: colors.primary,
                              fontSize: "1.1rem",
                              fontWeight: "600",
                            }}>
                              {station.name}
                            </h4>
                          </div>
                        </div>
                        
                        <div className="AQIList d-flex gap-2 justify-content-between">
                          {station.pollutants.map((pollutant, pIndex) => (
                            <motion.div
                              key={pIndex}
                              className="d-flex flex-column align-items-center"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div 
                                className="rounded-circle d-flex flex-column align-items-center justify-content-center"
                                style={{
                                  width: "6rem",
                                  height: "6rem",
                                  backgroundColor: getPollutantColor(pollutant.status),
                                  color: getPollutantTextColor(pollutant.status),
                                  border: `2px solid ${colors.white}`,
                                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <div style={{
                                  fontSize: "1.125rem",
                                  fontWeight: "600",
                                  textAlign: "center",
                                  lineHeight: "1.2",
                                }}>
                                  {pollutant.code}
                                  {pollutant.code === "PM10" && (
                                    <sub style={{ fontSize: "0.7rem" }}>10</sub>
                                  )}
                                  {pollutant.code === "SO2" && (
                                    <sub style={{ fontSize: "0.7rem" }}>2</sub>
                                  )}
                                  {pollutant.code === "NO2" && (
                                    <sub style={{ fontSize: "0.7rem" }}>2</sub>
                                  )}
                                  {pollutant.code === "O3" && (
                                    <sub style={{ fontSize: "0.7rem" }}>3</sub>
                                  )}
                                </div>
                              </div>
                              <div style={{
                                fontSize: "0.75rem",
                                color: colors.textDark,
                                fontWeight: "500",
                              }}>
                                {pollutant.value}
                                {pollutant.code === "CO" ? " ppm" : " µg/m³"}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <div className="mb-3">
                      <div 
                        style={{
                          color: colors.primary,
                          fontSize: "1.2rem",
                          fontWeight: "600",
                          marginBottom: "1rem",
                        }}
                      >
                        {isRTL ? "جاري تطوير محتوى مؤشر جودة الهواء" : "Air Quality Index content is under development"}
                      </div>
                      <div 
                        style={{
                          color: colors.textLight,
                          fontSize: "0.9rem",
                        }}
                      >
                        {isRTL 
                          ? "بيانات المحطات لهذه المنطقة قيد التحديث"
                          : "Station data for this region is being updated"
                        }
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Map & Controls */}
          <div className="col-md-7 col-lg-7">
            <motion.div 
              className="position-relative rounded-4 overflow-hidden shadow-lg h-100"
              style={{
                border: `2px solid ${colors.primary}`,
                minHeight: "500px",
              }}
              initial={{ x: isRTL ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Map Container */}
              <div 
                className="w-100 h-100 position-relative"
                style={{
                  backgroundColor: colors.lightBg,
                }}
              >
                {/* Forms Area (Region and Date Selectors) */}
                <div className="formsAria p-4 position-absolute top-0 start-0 end-0"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    zIndex: 10,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="forms">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="select-div mb-3">
                          <label className="form-label mb-2" style={{
                            color: colors.primary,
                            fontWeight: "600",
                            fontSize: "0.9rem",
                          }}>
                            {isRTL ? "المنطقة" : "Region"}
                          </label>
                          <select
                            id="Area"
                            className="form-select form-select-lg"
                            style={{
                              borderRadius: "0.625rem",
                              border: "0.0625rem solid #006930",
                              fontSize: "1.0625rem",
                              padding: "0.625rem",
                              color: "#353535",
                              marginBottom: "0.625rem",
                            }}
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                          >
                            {regions.map(region => (
                              <option key={region.code} value={region.code}>
                                {region.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      
                      <div className="col-md-6">
                        <div className="select-div mb-3">
                          <label className="form-label mb-2" style={{
                            color: colors.primary,
                            fontWeight: "600",
                            fontSize: "0.9rem",
                            marginLeft: isRTL ? "10px" : "0",
                            marginRight: isRTL ? "0" : "10px",
                          }}>
                            {isRTL ? "التاريخ" : "Date"}
                          </label>
                          <input
                            type="date"
                            id="mapDate"
                            className="form-control form-control-lg"
                            style={{
                              borderRadius: "0.625rem",
                              border: "0.0625rem solid #006930",
                              fontSize: "1.0625rem",
                              padding: "0.625rem",
                              color: "#353535",
                              marginBottom: "0.625rem",
                            }}
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map SVG - Using the exact same SVG from HTML */}
                <div className="map d-flex align-items-center justify-content-end h-100" style={{ paddingTop: "120px" }}>
                  <svg 
                    width="692.521" 
                    height="571.438" 
                    className="vectorMap" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 697.67 539.43" 
                    id="ksa-map"
                    style={{ maxWidth: "100%", height: "auto" }}
                  >
                    <defs></defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                          {/* Saudi Arabia Regions Paths */}
                          <path 
                            id="Path_41" 
                            data-svg-aria="area-active-1" 
                            data-name="Path 41" 
                            data-title="عسير" 
                            data-code="ASIR" 
                            className={`vectorMap-country vectorMap-petroleum ${selectedRegion === "ASIR" ? "is-active" : ""}`}
                            fill={selectedRegion === "ASIR" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "ASIR" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M294.43,494.88c-1.91-1-3.1-2.82-4.9-4a6.38,6.38,0,0,0-6.69-.65,8.68,8.68,0,0,1-1.82.39c-1-.35-2.25-.18-2.51-1.68-.08-.43-.66-.56-1.1-.46-2.9.63-4.66-.93-6.07-3.14-.49-.77-1-1.38-2.07-1.23-.62.09-.94-.16-1-.82-.1-1.77-1.17-1.88-2.49-1.34-3.37,1.36-6.49-.72-9.73-.64-1.26,0-3.14-1.47-3.87,1.76a3.54,3.54,0,0,0-2.29-2.95c-2.06-.85-2.85-2.67-2.95-4.8-.08-1.6-.22-2.85-2.43-2.13-1.33.43-3.09-.6-4.16.49s.07,2.66-.26,4.08c-.56,2.44-1.67,4.24-4,4.25a7,7,0,0,1-4.26-1.86,33.82,33.82,0,0,1-5.07-5.93c-2.18-2.93-3-6.6-5.48-9.34-1.23-1.34-.8-3.52-1.4-5.24-.36-1-.36-2.17-1.66-2.76-1-.45-.16-1.39-.11-2.13.05-.91.65-.75,1.22-.75a24.27,24.27,0,0,0,5.77-1.25c1.16-.30,1-.88,1-1.94,0-3.44-2.32-5.5-4.09-7.93-.39-.53-1.06-1.08-.64-1.85s1.11-.54,1.76-.45c1.25.17,1.52-.38,1.59-1.59.05-1,0-2.1,1.14-2.89,1.91-1.32,3-.86,4,1.07s2.16,2.16,3.65.68c1.32-1.32,2.86-2.76,2.5-5a3.84,3.84,0,0,1,.39-2.49,2.81,2.81,0,0,0-.93-3.86,2.31,2.31,0,0,0-.35-.18,1.64,1.64,0,0,1-1.24-1.21c-.4-1.89-1.61-3.61-.72-5.79a3.74,3.74,0,0,0-.67-4,1.88,1.88,0,0,1-.27-2.64l.27-.27a4.25,4.25,0,0,0,1.29-3.5c0-3,.74-5.74,3.1-7.84a5,5,0,0,0,1.61-3,3.57,3.57,0,0,1,1.87-2.45c1.21-.87,1.81-.26,2.16.85.78,2.41,2.72,3.4,5,2.22,2.09-1.08,3.75-1.14,5.58.64,1.63,1.57,3.92.85,5.49-1.39.79-1.13,1.21-2.45,3.2-2a1.46,1.46,0,0,0,1.45-2.21c-1-1.87-.12-1.9,1.41-2,2.14-.14,4.6.33,6-2.12a.68.68,0,0,1,.53-.32c3.22.37,4.06-2.25,5.4-4.24,2.5-3.73,2.5-3.69,7.08-2.74a51,51,0,0,0,5.5.81,4.89,4.89,0,0,1,2.4.79,8.87,8.87,0,0,0,5.17,1.8,1.49,1.49,0,0,1,1.71,1,2.19,2.19,0,0,0,1.85,1.29,3.82,3.82,0,0,1,2.94,2.24c.19.42.75,1,1,1,2.67-.48,1.82,1.45,1.91,2.71.19,2.73.72,5.42,1.09,8.12a17.85,17.85,0,0,0,3.18,8.49c.6.83,1.82,2.89.81,4.63a.48.48,0,0,0,.08.68l.07,0c2.77,1.11.09,3.85,1.58,5.36.08.07-.47.69-1,.60a1.34,1.34,0,0,0-1.59.84c-.22.95-2.07,1-1.39,2a4.38,4.38,0,0,0,3.31,2.30,15.7,15.7,0,0,1,2.17,0c.88.18,1.74-1,2.42-.25a5.35,5.35,0,0,1,1.22,3.53c0,.73-.14,1.47.66,1.42,1.78-.10,1.55,1.20,1.24,2-.52,1.31-.80,2.83-1.87,3.85a2.19,2.19,0,0,0-.70,2.26,21.7,21.7,0,0,1,0,3.42c-2.10-.92-3.65-.08-5.13.94a2.09,2.09,0,0,1-1.46.56c-1.74-.05-2.36,1.73-3.48,2.70s.19,1.06.67,1.50.07.85-.27,1.08c-3.55,2.48-4.13,6.57-5.64,10.18-.80,1.92-2.61,3.34-2.63,5.71,0,.70-1.12.29-1.72.32-.83.05-2,.18-1.59,1.14.63,1.53-.27,2.37-.87,3.41-1.07,1.86-.46,4.31-1.87,5.95a6.86,6.86,0,0,0-1.93,4.81c.14,3.80-.76,7.86,2.67,10.85C295.25,493.18,294.85,494,294.43,494.88Z"
                            onClick={() => setSelectedRegion("ASIR")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>عسير</title>
                          </path>

                          {/* Tabuk */}
                          <path 
                            id="Path_3" 
                            data-svg-aria="area-active-2" 
                            data-name="Path 3" 
                            data-title="تبوك" 
                            data-code="TBK" 
                            className={`vectorMap-country vectorMap-blue ${selectedRegion === "TBK" ? "is-active" : ""}`}
                            fill={selectedRegion === "TBK" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "TBK" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M0,135V98c1.13.18,1.28-1.19,1.17-1.33-.71-.9.32-1.59.15-2.37a3.89,3.89,0,0,1,2.73-.10c2.41.37,4.82.77,7.22,1.15C19.20,96.65,27.11,98,35.06,99.11c1.42.20,2.95,1.26,4.50.07,2.55-2,5.10-3.89,7.75-5.68,4.23-2.85,8-6.07,10.43-10.70,1-1.81,2.47-3.33,3.55-5.10a3.11,3.11,0,0,1,2.43-1.47c2.19-.38,4.37-.78,6.57-1.11C74.18,74.53,78,73.48,82,73.25c.82,2.08,2.22,2.50,4.20,1.56.70-.33,7,3,7,3.71-.06,2,1.09,4,.22,6.11a1.49,1.49,0,0,0,.48,2.05,1.60,1.60,0,0,0,.71.22c2.49.32,5.06.64,7.48-.20s6.22.40,8,2.45c.76.89.12,2.31,1.59,2.83,2.43.86,1.95,1.78.48,3.44-.62.70-.95,1.71-2.14,1.94-.73.13-.86.91-.24,1.48.30.28.56.51.26.87-1.12,1.37-.18,2.84-.25,4.26,0,.70.24,1.31,1.06,1.38a21.74,21.74,0,0,0,4.90.28c1.36-.19.80-1.80,1.15-2.75a1.13,1.13,0,0,1,.45-.47c1.42-.89,1.45-2-.10-3.39,2.07.58,2.71-.46,3.46-1.55,1.77-2.57,1.83-2.56,4.43-1.17a4.11,4.11,0,0,0,1.86.41c1.34.07,2.05.54,2,2.11-.13,2.39.12,4.79,0,7.17-.07,1.57.31,2,2,2.10a6.26,6.26,0,0,1,5.32,3.36,27.31,27.31,0,0,1,1.80,5.85c.41,2.09,1,2.35,2.77,1.37.77-.42,2.16-.89,2.68.61.74,2.10.21,4.30.18,6.44,0,1.06-1.17,1.49-1.94,2.12-1.93,1.55-1.80,2.43.43,3.52,1.72.84,3.55,1.47,5.22,2.40,1,.54,2.86.64,2.57,2.06-.23,1.11-2,1.18-3.15,1.40-1.48.27-3,.30-4.48.57-.55.10-1.25.30-1.17,1.25s.73.64,1.24.73a41.94,41.94,0,0,0,8.38.33c1.64,0,3.67-.48,5.05,1.08a14.74,14.74,0,0,0,3.65,2.56c4.37,2.66,8.05,5.71,8,11.61,0,2.42-.70,3-2.95,3.31-5.40.75-7.35,2.75-5.92,8.10.58,2.20.64,4.33-1.09,6.39a7.18,7.18,0,0,0-2.17,4.75c0,.70-1.25,2.11-2.24,1.29-1.41-1.15-2.28-.17-3.25.33a3.34,3.34,0,0,1-2.33.44c-3.54-.58-7-2.14-10.73-1.12a2.23,2.23,0,0,1-2.11-.85c-.89-1.21-1.63-1.27-3-.37-2,1.31-4.37,2.43-6.22-.45-.20-.31-.56-.41-.69-.29-1.27,1.12-2.50-.44-3.73,0-.55.20-.74,0-.80-.53-.30-2.43-1.18-4.35-4.07-4.39-.13,0-.26-.13-.36-.23a47.83,47.83,0,0,0-6.37-5.43,2.87,2.87,0,0,0-3.20-.40,10.91,10.91,0,0,0-1.65,1c-1.39,1-1.86-.37-1.67-1,.70-2.35-.87-4.37-.66-6.69.16-1.93-2.44-3.14-4.32-2.47-1.08.39-2.29,1.37-3.36-.07a1.78,1.78,0,0,0-2.15-.59c-1.16.47.09,1.18,0,1.79,0,.28,0,.59,0,.86A8.73,8.73,0,0,1,88.87,164c-2,1.46-2.13,2.74-.56,4.55s1.19,4.58-.30,6.43c-.91,1.13-2.47,1.27-3.09,2.74-1,2.34-1.11,2.33-3,.65-1-.87-2.65-1.60-3.09-.60-.86,2-2.27,1.44-3.65,1.72-.94.18-2.71,0-2.30,1.76a3.80,3.80,0,0,1-.30,2.44c-1.18,3.28-.71,4.74,2.29,6.25,1.52.76,1.17,2.10.83,2.91-1,2.45.73,3,2.22,3.87.33.18.81-.20,1.08.36,1.07,2.22,3.54,3.46,4.22,6,.12.44.77.54,1.26.72,2.57.88,3.49,3.23,2.35,5.73-.24.52-.62.93.10,1.60a13.44,13.44,0,0,0,8,3.29c1.68.15,1.34,1.60,2.32,2a3.07,3.07,0,0,1-1.89,2c-2.09.65-2.38,2.33-1.56,4.19.73,1.63,2.76,3,1.76,5.16-1.18,2.50.28,4.25,1.69,5.80.69.76.87,1.08.39,1.88a2.37,2.37,0,0,0,.38,3.31,2.31,2.31,0,0,0,.52.31,1.28,1.28,0,0,1,.78,1c.21,2.19.65,4.13,3.56,4a1,1,0,0,1,1,.94,1,1,0,0,1-.10.45c-.30.92-.79.51-1.32.29-2.42-1-4.40.38-6.49,1.22-.94.39-.66,1.16-.38,1.60,1.20,1.84-.13,1.84-1.18,1.48-2.35-.79-4.73.73-7.10-.34-.94-.43-2,.11-2.64,1.22-.52.89-1,2-2.10,2.34-1.14-1.37-2-3-3.84-3.70-.59-.20-.59-.67-.56-1.36.08-1.40.90-2.61,1-3.81.15-2,2.22-4.32-.26-6.28-.08-.07,0-.40.06-.57,1-2.18,0-3.74-1.49-5.22-1.29-1.23-2.75-2.33-3.47-4.07-.82-2-.82-4.47-3.19-5.60-.15-.07-.25-.35-.28-.54C70,218,66,216.74,64,213.87a1.20,1.20,0,0,0-1.13-.26c-2.21,1.69-1.90-1.27-3-1.69-.75-.28-.48-1.33,0-2.31,1.76-3.33,1-6.44-3.14-6.29a3,3,0,0,1-3.24-2,18.81,18.81,0,0,0-3-5.52,27.66,27.66,0,0,1-2.30-4.46c-1.37-3-2.66-6-5.37-8.17a11.75,11.75,0,0,1-4.46-6.29,5.11,5.11,0,0,0-1.58-2.65c-1.94-2-4.62-3.14-6.11-5.60-.30-.49-.91-.86-.66-1.50,1.29-3.25-1.21-5-3.12-6.32-2.44-1.70-4.78-3.80-5.38-6.29-.69-2.85-2.25-5-3.55-7.34-1.07-2-3.55-2.82-4.38-4.94-.71-1.81-3.84-2.12-2.91-4.88.05-.17-.42-.72-.69-.76C6.68,136.11,3.76,132.88,0,135Z"
                            onClick={() => setSelectedRegion("TBK")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>تبوك</title>
                          </path>

                          {/* Eastern Province */}
                          <path 
                            id="Path_33" 
                            data-svg-aria="area-active-3" 
                            data-name="Path 33" 
                            data-title="المنطقة الشرقية" 
                            data-code="EST" 
                            className={`vectorMap-country ${selectedRegion === "EST" ? "is-active" : ""}`}
                            fill={selectedRegion === "EST" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "EST" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M683.42,318.44c.77.69.73,2,1.75,2.47,2.63,4.12,5.24,8.24,7.88,12.34,1.35,2.10,2.72,4.19,4.12,6.25a3,3,0,0,1,.25,2.85q-6.85,20.28-13.65,40.57c-2.46,7.37-4.91,14.76-7.26,22.17a4.43,4.43,0,0,1-3.19,3.29q-33.86,10.77-67.50,22.18c-9.18,3.12-18.32,6.32-27.50,9.42-.76.26-1.56.81-2.47.38,0-3-.09-5.94,0-8.91,0-1.32-.44-1.87-1.78-1.75-.93.08-1.88,0-2.83,0H428.14c-2.59,0-2.56,0-1.40-2.39q9.42-19.51,18.80-39.06c2.08-4.35,2-4.37-2.20-8.88-1.47-1.57-2.82-3.27-4.37-4.76-2.26-2.16-1.86-4.83-1.49-7.41.21-1.45.11-2.88.21-4.31.05-.70-.08-1.31-.85-1.54-1.52-.44-1.19-1.32-1-2.61.41-2.71,1.36-5.62,3.25-6.93,2.20-1.52,4.19-3.55,6.85-4.47a12.19,12.19,0,0,0,4.05-2.88,1.21,1.21,0,0,0-1.34-.51c-3.23.36-6.43-.34-9.66-.26-2.77.07-4.66-3.27-3.48-5.83,1.42-3.06,2.33-6.32,4.40-9.14a12.67,12.67,0,0,0,2-6.13c.44-4,1.78-7.91,2.16-11.92.26-2.74-.20-5.58.13-8.35a41.66,41.66,0,0,0,.12-9.60c-.28-2.47,1.28-5,1.24-7.55,0-2.90-.10-5.80-.35-8.67a4.73,4.73,0,0,1,.29-3.08c1.28-2.14.84-4.22-.37-6.17a2.29,2.29,0,0,1-.52-1.57c.34-2.34-.65-4.19-2.07-5.93a12.18,12.18,0,0,1-2.20-5.41c-.30-1.42-1-1.52-1.86-.86-1.66,1.19-3.61,1.21-5.47,1.58-1.12.22-1.45-.58-1-1.38a4.14,4.14,0,0,0,.37-2.30c0-2-.17-3.94-.12-5.93a5.91,5.91,0,0,0-3.07-5.36c-1.18-.62-1.21-1.17-.65-2.13.14-.24.40-.55.34-.75-1-3.17,2-3.73,3.54-5.09,1.08-.93,1.64-1.38.37-2.57a2.31,2.31,0,0,1-.63-2.72c.61-1.50-.80-2.46-1.44-3.53-1.91-3.19-1.92-4.25.52-7.27.32-.39.47-.90.15-1.16-.79-.63-.63-1.26-.35-2.05a1,1,0,0,0-.38-1.35,3.44,3.44,0,0,1-2.20-4.26,2.07,2.07,0,0,0-.73-1.71,1.79,1.79,0,0,1-.24-2.53,1.07,1.07,0,0,1,.14-.16c1-1.33-.06-2.57-.48-3.75-.69-1.92-1.63-3.74-2.26-5.70-.35-1.12-1.12-3-3.21-1.45-.57.41-1.68.11-2.54.08-.27,0-.64-.39-.77-.30-2,1.31-2.90-.66-4-1.51s-2.69-1.70-3.27-3.46c-.49-1.50-2.25-.73-3.38-1a4.64,4.64,0,0,1-3.08-1.91c-.67-1-1.34-1.54-3-.58-1.39.82-3.60.68-5.40-.05-.76-.30-1.42-1-2.23,0-.43.53-1,.07-1.55-.20-2.46-1.27-5.10-2.14-7.47-3.60-1-.60-1.88-1.55-3.32-1-.29.11-1.17-.68-1.38-1.22-.69-1.72-1.70-1.54-2.72-.51-1.31,1.33-2.30,1.78-4,.31-2.14-1.84-4.86-3-7-4.80a26,26,0,0,0-6.76-4.12c-.36-.15-1.20-.15-.86-1.13.76-2.25-.51-3.66-2.82-3a13,13,0,0,1-7.57-.44c-1.84-.59-3.63-1.73-3.81-3.56-.23-2.34-2-4.31-1.31-6.88.40-1.47-1.81-4.39-3.26-4.78a1.84,1.84,0,0,0-2.23.82c-.89,1.74-2.42,1.51-3.76,1.15-3.11-.83-5.94-4.90-5.90-8.23,0-1-.50-2.51.31-2.79,1.06-.37,1.57,1.07,2.15,1.94.74,1.09,1.47.88,2.36,0,1.79-1.76,2.28-4.13,2.91-6.32,1.65-5.74,3.78-11.33,5.49-17a12.88,12.88,0,0,0,.13-5.56c-.34-2.56-1.08-5.30-.40-8a3.35,3.35,0,0,1,1.60-1.70,6.89,6.89,0,0,0,2-1.84c3.32-.52,6.60.25,9.89.42,4.59.23,9.17.85,13.76,1.23,5.74.48,11.48.90,17.23,1.32a7.81,7.81,0,0,0,3.39-.40c3.90-1.45,7.79,0,11.67.21,4.51.29,9,1,13.50,1.51l7.27.86c1.37.16,1.27,1.58,2,2.33,1.54,1.60,2.75,3.44,2.37,5.91a4.82,4.82,0,0,0,1.34,3.91,93.90,93.90,0,0,1,6.29,9.61c1.43,2.27,3.14,4.06,6.34,4,6.81-.15,13.63,0,20.45.07,0,1.56-.48,3.13.37,4.66.74,1.34,1.19,2.82,3.22,2.67,1.18-.09.38,1.29.90,1.61,3.25,2,2.40,4.71,1.37,7.47a3.62,3.62,0,0,0-.17.56c2.32,1.06,1.88,4.31,4.25,5.33a1.12,1.12,0,0,0,1.56-.30,1,1,0,0,0,.16-.36c.43-1,.92-1.14,1.75-.30a7,7,0,0,0,5.80,2c.63-.05,1.28-.30,1.84.17s1.46.76,1.16,1.60c-.25.68-1,.06-1.50.05a16.24,16.24,0,0,0-2.27.44,1.49,1.49,0,0,0-1.31,1.47c-.07.63.80.54,1.33.69,1,.28,2,.54,2,2.07s.78,1.82,2,.90c.88-.69,1-.35,1.12.56a28.74,28.74,0,0,0,.41,3.34,4.08,4.08,0,0,0,4.94,3l.14,0c1.85-.67,5.21.81,6.12,3.06s3.07,3.36,5,4.34a10,10,0,0,0,4.85,1.50c1.45,0,2.14,1.49,1.61,2.92a3.89,3.89,0,0,0,.15,3.66c.72,1.24.81,2.85,1.20,4.29.50,1.83,2.24,2.24,3.65,2.84,2.16.92,3.30,2.07,2.49,4.58-.41,1.26.53,3-1.60,3.61-.30.09-.28,1.29-.42,2.07-.84-.29-1.46-.66-1.62-1.56a2.24,2.24,0,0,0-2.09-1.83c-.90-.09-.87,1.14-1.32,1.72-1.40,1.84-.15,3.81-.37,5.70-.12,1.10.82,1.10,1.69,1.06,1.18-.05,2.77-.55,1.83,1.82-.47,1.17.68,2.20,1.22,3.26.40.78,1.81,1.42.18,2.55-.72.50.13,1.50.58,2.05,2.66,3.18,5.39,6.30,8.10,9.43a1.18,1.18,0,0,0,.70.45c2.32.11,3.38,1.44,3.55,3.69.21,2.73.81,5.43,1.27,8.14a1,1,0,0,0,.87.83c.36,0,.75,0,1,.37,1.45,2.44,3.42,4.56,4.31,7.36.31,1-.43,3.39,2.21,2.33,1.41.80,1.94,2.23,2.55,3.60,1.69,3.77,4.91,4.94,8.69,5.09,2.05.07,4.11,0,6.17-.07-.53,1.60-1.10,3.20-1.57,4.82-.36,1.21.34,1.79,1.41,1.51s2.18,0,3.24-.83a2.10,2.10,0,0,1,2.90.67l.07.12a3.21,3.21,0,0,0,2.20,1.52c0,.05.15.11.14.16-.40,4.47,3.18,6.75,5.48,9.67,4,5.06,8.17,10,12.30,14.91,4.63,5.55,9.58,10.87,13.86,16.69,2.42,3.28,5.63,3,8.73,3.41,8.25,1.15,16.53,2.10,24.80,3.07,7.83.92,15.67,1.72,23.50,2.66,9,1.09,18,2.28,26.92,3.40a29.14,29.14,0,0,1,4.07.46C681.68,320.77,682,318.59,683.42,318.44Z"
                            onClick={() => setSelectedRegion("EST")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>المنطقة الشرقية</title>
                          </path>

                          {/* Riyadh */}
                          <path 
                            id="Path_34" 
                            data-svg-aria="area-active-4" 
                            data-name="Path 34" 
                            data-title="الرياض" 
                            data-code="RUH" 
                            className={`vectorMap-country vectorMap-darkgreen ${selectedRegion === "RUH" ? "is-active" : ""}`}
                            fill={selectedRegion === "RUH" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "RUH" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M378.87,177.56c1.41,3.15,4.92,2.32,7.24,3.92,1.77,1.22,4.06,1.68,6,2.74,2.09,1.16,4.29.28,6.43.68,1.35.25,3.16,1.21,4.54-.50.27-.33.77.47,1.10.79,1.13,1.09,2.08,2.21,4,2.10s2.67,2.06,4.09,3a9,9,0,0,1,2.94,2.70c.47.76,1.22,1.13,2.63.63s3.39-.25,5.12-.31a1,1,0,0,1,.81.60c.47,2.52,1.89,4.67,2.68,7.07.14.44.31,1.17-.19,1.39-2,.88-.73,1.94-.18,2.88.65,1.10,1.42,2.09.90,3.53a1.61,1.61,0,0,0,.60,1.93c2.46,1.62,2,3.71,1.14,6s-1.60,4.68.68,6.90a3.52,3.52,0,0,1,1.08,3.84,1.64,1.64,0,0,0,.15,1.43c2.06,1.90.26,2.80-1,3.56-1.68,1-3.13,1.90-2.26,4.22a1.40,1.40,0,0,1-.22,1.44c-1.38,1.46,0,2.53.86,2.85,2.17.80,2.67,2.75,2.75,4.34.14,2.86.62,5.78-.26,8.68-.56,1.87.64,2.83,2.58,2.46,1.19-.23,2.53-.07,3.58-.56,2.40-1.12,3.15-.12,3.40,2.10a5.55,5.55,0,0,0,.83,1.69c1,1.83,2.64,3.32,2.29,5.76a3.70,3.70,0,0,0,.81,2.60,4,4,0,0,1,.23,4.82,5.27,5.27,0,0,0-.39,3.64c.47,4,1,8-.08,12a15,15,0,0,0-.37,7.64,8.06,8.06,0,0,1-.23,3.81,32.40,32.40,0,0,0-.52,9.27,26.21,26.21,0,0,1-1,8.07c-.76,3-.70,6.20-2,9.12a13.27,13.27,0,0,1-1.56,2.74c-2.20,2.92-2.93,6.54-4.44,9.79-.69,1.49.09,2.84,1.46,4.09,2.32,2.13,5.17,2,7.89,2.50.51.10,1.15.10,1.25.62s-.56.67-1,.94c-1.52,1-3.17,1.91-4.55,3-2.07,1.66-3.17,4.22-3.87,6.84a12.81,12.81,0,0,1-.54,2.28c-.73,1.54-.92,2.70,1.23,3.10.35.07,1.10.24.86,1-.71,2.23.14,4.57-.63,6.84-.94,2.81,1.52,4.25,2.91,6,2.05,2.58,4.28,5,6.55,7.42.89.92.31,1.57,0,2.29-4.21,8.77-8.46,17.52-12.68,26.28-2.58,5.37-5.16,10.75-7.67,16.16a2.14,2.14,0,0,1-2.06,1.41c-5.64.51-11.29.22-16.93.4-15.80.51-31.60.32-47.40.46-4.38,0-8.88.11-12.82,2.57-1.47.91-1.86-.20-1.84-1.14,0-1.54-.58-3-.50-4.48.06-1.32-.49-1.77-1.77-1.60-3.51.47-7.06.24-10.58.63s-6.78.33-10.17.49c-1.24.06-2.28,0-2.49-1.62-.10-.84-.64-1.20-1.71-.72s-2.40,1.24-3.86,1c-.74-.15-1.17-.38-1.23-1.19s.35-.83,1-1.08c1.63-.67,3.70-1.34,1.69-3.72,1.18-2-.22-3.86-.62-5.63a12.32,12.32,0,0,0-1.92-4.94,10.84,10.84,0,0,1-2.40-5.92c-.30-2.94-1.16-5.83-1.44-8.81-.07-.71-.39-1.24.40-1.86,1.59-1.25.47-2.24-.73-2.28-1.91-.06-2.72-1.46-4-2.28-2.10-1.33-2.54-2.88-2.95-5.25A18.60,18.60,0,0,0,292.69,371c-1.20-.88-1.05-1.73-.60-2.76.83-1.86,1.34-3.87,2.55-5.57s.42-2.76-1.05-3.62a4.94,4.94,0,0,0-1.56-.64c-2.32-.45-3.30-1.77-2.86-4.12a4.37,4.37,0,0,0-.43-2.30c-.81-2.26.69-4.32.50-6.57-.30-3.47.73-4.74-3.25-5.73-1.20-.30-.95-1.30-1.06-1.82-.46-2.16-.81-4.30-2.42-6-.70-.75-.05-1.19.60-1.41.93-.31,2.54-.54,2-1.60s-1.21-3-3.07-3.10c-1.11,0-1.63-.14-1.67-1.49,0-1.57-2.12-2-2.53-3.48.47-.66,1.14-.23,1.65-.51a2.18,2.18,0,0,0,1.38-1.93,1.75,1.75,0,0,0-1.34-1.74c-1.87-.73-3.83-.50-5.76-.54-3.29-.08-3.64-.27-4.61-3.22-1.05-3.16-1.13-3.06-4.42-2.73-1.36.14-1.14-1.70-1.15-2.42,0-3.47-.50-4.07-3.87-4.19-1.43-.06-2.85-.34-4.27-.50-.55-.06-1-.24-1.11-.83-.47-2.94-1.85-5.71-1.75-8.75,0-1.08-.47-1.87-1.34-1.85-2.49.06-3.42-1.59-3.74-3.48s-1.08-2.40-2.91-2c-4.72,1.12-9.25-.11-13.75-1.36-1-.28-1.25-1.47-2.12-1.95-.07,0,0-.55.05-.56.68-.12,1.58-.50,2-.20.90.60,1.80.36,2.69.51a2.66,2.66,0,0,0,3.28-1.82c0-.13.06-.26.08-.40.15-.61.36-.95,1-.84,1.36.25,2-.82,3-1.37,2.90-1.63,1.40-5.23,3.45-7.21.25-.25-.30-.82-.72-.90-1.87-.33-1.15-1.30-.45-2.05a4.73,4.73,0,0,0,1.14-4.62c-.68-2.25-.75-4.60-1.67-6.84-.71-1.73-1.94-4,.30-5.85.64-.52,9.27-1.57,9.68-.93a29.29,29.29,0,0,1,2.89,5.12c.76,1.94,1.47,3.38,4,3a41,41,0,0,1,4.57-.05c1.18,0,2.18.29,2.88-1.55.50-1.32,3-2.09,4.74-1.38,4.47,1.82,6.10-.76,7.17-4a16.82,16.82,0,0,1,.65-1.80c.45-1,1.28-1.87-.70-2.26-1-.20-1.22-2.18-.42-2.57s1.89-.87,1.64-1.87-1.42-1.28-2.56-1.16c.24-1.91,1.92-1.53,2.82-1.66,3-.41,4.87-2.37,6.69-4.29,1.33-1.39,1.89-2.82,4.20-1.12,2.65,1.94,5.44.39,5.93-2.93a1.81,1.81,0,0,1,1.81-1.81H299a19.29,19.29,0,0,1,3,0c2.78.44,4.61-.47,6-3,.76-1.40,2.59-1.88,4.37-1.91,3-.06,5.88-.36,7.80-3.13.60-.86,1.35-.77,2.28-.33,2.11,1,4.34,1.75,6.43,2.78,1,.51,1.39.26,1.73-.68.80-2.20,1.68-4.37,2.43-6.58a2.40,2.40,0,0,0-.54-2.37c-2.93-3.80-5.91-7.60-8.58-11.59-2.30-3.44-3-7.55-3.84-11.53-1.10-5-.44-10.08-.06-15.14.11-1.43.49-2.33,2-2.50,3.78-.41,7.60-1.51,11,1.58,1.56,1.42,2.19,1.05,2.32-1.11.16-2.51.74-5,.84-7.47.17-4.23,1.62-8.05,3.18-11.86.39-1,.53-1.76-.40-2.20-1.55-.73-.75-1.25-.06-2,1-1,1.66-.46,2.21.36a5,5,0,0,1,.92,2.78,15.15,15.15,0,0,0,2.15,8.20c1.06,1.58,2.43,3.15,4.64,3.28,2.70.17,5.37,1.69,8.12.18.20-.11.71.12,1,.33s.14.64-.13.94c-1.08,1.25-.58,2,.79,2.51,5.38,2.09,9.51,6.17,14.38,9.07.86.51.78,2.57,2.76,1.52A13.72,13.72,0,0,0,378.87,177.56Z"
                            onClick={() => setSelectedRegion("RUH")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>الرياض</title>
                          </path>

                          {/* Medina */}
                          <path 
                            id="Path_35" 
                            data-svg-aria="area-active-5" 
                            data-name="Path 35" 
                            data-title="المدينة" 
                            data-code="MDN" 
                            className={`vectorMap-country ${selectedRegion === "MDN" ? "is-active" : ""}`}
                            fill={selectedRegion === "MDN" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "MDN" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M94.47,158.28c.74,1.06,1.70,1.28,2.86.24a2.41,2.41,0,0,1,2.52-.47c.89.40.67,1.53.92,2.35.75,2.41.21,4.95,1.12,7.34.49,1.26,1.14,1.44,2.09,1,1.28-.56,3.07-2.16,3.60-1.80a23.72,23.72,0,0,0,3.51,2.06c1.34.63,1.67,2.54,3.12,3.29.31.16.53.72.79.72,3-.06,3.17,2.48,3.92,4.42.43,1.12.85,2,2.27,1.15.61-.38,1,.27,1.53.33,2,.24,3.84,1.15,5.77,1.63,1.21.30,2.24-1.25,3.68-1.42.69-.08,1.07-.34,1.80.13a5.45,5.45,0,0,0,4.89.64c1.88-.60,3.78.47,5.66.81,2.26.40,4.50,1.64,6.63-.31.55-.50.91.29,1.35.22,1.64-.25,3.30,1.24,5-.12a1.16,1.16,0,0,1,1.45.76,1.19,1.19,0,0,1,.05.46c-.06.72,0,1.44,0,2.17,0,2.59.77,3.16,3.40,2.45-.08,2.46,1.30,4.27,2.81,5.95a2.26,2.26,0,0,1,.61,2.35c-.59,1.65.08,2.76.92,4.13,1.11,1.80,2.63,3.46,2,6.11-.50,1.95-.07,4.19.19,6.26.09.67-.40,1-.34,1.59,0,.38-.43.93-.29,1.16,2.36,3.75,0,7.60.32,11.37.06.59-.44.61-.71.90a1.39,1.39,0,0,0-.10,1.73c.31.55.68.62,1.40.35a2.69,2.69,0,0,1,3,.56c1.08,1.05,2.15-.12,3.14-.38,1.32-.35,2.37-.86,2.51,1.15,0,.54,3.70,2.41,4.16,2.20,1.20-.55.67-1.47.32-2.47,1.41-.09,2.29,1,3.46,1.13.57.08,1.06,1.26,1.72.22.47-.76,1.14-1.70.31-2.55s-.42-1.08.06-1.76c.67-.94,1.21-.45,1.74-.08,1.67,1.17,3.34-.07,5,.07,2.16.18,2.57-1.44,3.16-3,.77-2.10,4-3.30,5.77-2.07,2.75,1.85,6.07,1.30,9,2.48a1.37,1.37,0,0,0,1.23-.14c1.28-1.33,2.10-.20,2.85.54a11.81,11.81,0,0,1,2.43,3,16.07,16.07,0,0,0,5.31,6,7.19,7.19,0,0,0,6.95.63c2.38-.91,3.90.41,4.78,2,2.13,3.81,4.39,7.60,5.46,11.92a2.92,2.92,0,0,1-.63,3.22,3.19,3.19,0,0,0-.51,3.80c.66,1.43,2,3.26.60,5.18-.39.53.15,1.17.44,1.57,1.60,2.19,1.66,3.81.37,6.06-.64,1.10-2.72,2.46.11,3.58.45.18.24.68.08,1.12-.42,1.12-1.36,2-.81,3.57.17.48-1.56,1.92-2.85,2.05-.80.08-1.47.58-2.28.50s-1.13.72-1.13,1.24.70,1.36-.22,1.57a3.59,3.59,0,0,1-2.38-.42c-.46-.26-.75-1.43-1.35-1-1.08.76-3,.44-3.37,1.47-1,2.67-3.31,2.39-5.14,2.73a7.81,7.81,0,0,0-6.46,6.57c-.32,2,.07,3.87-.23,5.83-.35,2.34,0,4.84,2.44,6.34,1.15.72.08,1.18-.33,1.26-1.82.34-3.87-.06-5.19,1.80-.07.10-.54-.05-.82-.12-2.52-.69-4.41.53-4.91,3.17-.30,1.57-.73,2.54-2.85,1.87-3.81-1.21-7.18.60-6.80,5,.22,2.52-1.92,4.56-4.41,4.94a1.79,1.79,0,0,1-2-.86,2.53,2.53,0,0,0-3.90-.71c-1.57,1.27-3.50,1.87-5.15,3-1.22.86-3.20.49-4.78-.23-.32-.14-.32-.47-.26-.74.77-3.22-1.59-4.82-3.43-6.70a2,2,0,0,0-2-.28,5.91,5.91,0,0,1-3.05-.52c-1.72-.50-2.59-1.19-1.05-2.83a1.16,1.16,0,0,0,.15-1.56,2.93,2.93,0,0,1-.57-1.78c.35-1.67.42-2.90-1.84-3.06-1.35-.10-2.48-1.84-4.06-.46-.36.31-1.23.38-1.39,0-.59-1.59-1.86-1-2.92-1.10-1.33-.15-2.12.17-2,1.72.07.70-.15,1.49-1.11.84-1.16-.78-2.13-.28-3.20.18-1.58.69-2.33.34-2.79-1.16-.20-.64-.83-.84-1.32-1a7.68,7.68,0,0,1-3.17-2.22c-.39-.39-.67-.60-.62-1.18.20-2.51-1.09-3.92-3.45-4.67-1.48-.47-2.65-1.76-4.26-2.24-.75-.22-.76-1-.32-1.83s-.21-1.67-.69-1.40c-1.62.87-3.62-.28-5.09,1.25s-1.88,1.24-2.91-.60A7.75,7.75,0,0,0,123,287a7.49,7.49,0,0,1-3-4.81c-.45-2.86-2.78-3.69-4.35-5.32-2.30-2.40-5.72-3.28-8-5.77a2.14,2.14,0,0,0-2.36-.94,1.42,1.42,0,0,1-1.70-1.61,2.41,2.41,0,0,0-1.57-2.65c-1-.43-1.81.08-2.27,1.18-.32.76-.78.28-1.34,0-1.82-.85-2.29-3-4.15-3.90s-3.13-.77-4.42.41c-.74.67-1-.10-1.40-.22a3.14,3.14,0,0,1-2.40-3.74,2,2,0,0,1,.07-.26c.27-1.36-1-2.13-1.56-3.10-.78-1.28-1-2.20.37-3.14a2.28,2.28,0,0,0,.79-1.24,1.22,1.22,0,0,1,1.47-.89h0c2.62,1.55,5.65-.91,8.24.94.68.49,3.32-2.10,3-3-.88-2.11.93-1.79,1.83-2.14s1.66.29,2.49.36,1.94,1.16,2.52,0a3.60,3.60,0,0,0-.08-3.33c-.54-.87-.90-2.38-2.72-1.39-.85.46-1.47-.80-1.29-1.45a2.59,2.59,0,0,0-1.49-3.10c-1.25-.74-1-1.48-.47-2.43.77-1.27,1.27-2.13-.75-3.08-1.84-.87-1.70-3.07-1.13-4.90.36-1.17.52-1.91-.64-3-.80-.73-.66-2.47-1.81-3.40-.22-.18,0-1.11.87-1.34a3.63,3.63,0,0,0,2.28-1,3.83,3.83,0,0,0-.89-5.33,3.53,3.53,0,0,0-.81-.44,12.73,12.73,0,0,0-4.13-.85c-1.40,0-2.20-.88-3.19-1.53-.33-.23-.82-.66-.36-1,1.77-1.52.29-2.85-.20-4.20a3.83,3.83,0,0,0-3.47-2.91c-.83-.07-1.08-1-1.24-1.61a3.78,3.78,0,0,0-2-2.84c-.47-.22-1.10-.72-.13-1.23.66-.34,1-.86.61-1.56a1.70,1.70,0,0,0-1.78-1,6.43,6.43,0,0,0-1.23.27c-1.20.41-2.36.95-1.70-1.41.51-1.83.43-4-2.22-4.57a1.93,1.93,0,0,1-1.40-2.36.44.44,0,0,1,0-.10c.61-1.33.30-2.76.86-4,.18-.40.23-.93,1-1,1.60-.12,3.36.06,4.18-1.91.18-.45.62-.12.88.12s.71.73,1.11,1c2.14,1.70,3,1.66,3.88-.87.57-1.70,2.08-2.33,3.06-2.87,2.06-1.12,2-2.91,2.17-4.49s0-3.45-1.63-4.60c-.71-.50-1-1.44-.29-1.75,1.53-.71,2.28-2.11,3.41-3.14C93.69,161.41,92.75,159.41,94.47,158.28Z"
                            onClick={() => setSelectedRegion("MDN")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>المدينة</title>
                          </path>

                          {/* Makkah */}
                          <path 
                            id="Path_36" 
                            data-svg-aria="area-active-6" 
                            data-name="Path 36" 
                            data-title="مكة" 
                            data-code="MKA" 
                            className={`vectorMap-country vectorMap-green ${selectedRegion === "MKA" ? "is-active" : ""}`}
                            fill={selectedRegion === "MKA" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "MKA" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M279.38,318.15c-.12.52-.41.52-.68.61-3.06,1-3.23,1.84-.93,4.31.43.47,1,.84,1.12,1.56.22,1.78.69,3.09,3,2.83.68-.08,1.45.93.20,1.78-1.85,1.26-2.06,2.48-.22,4.20,1.33,1.25,1.44,3.33,1.69,5.13.17,1.28.67,2.47,1.86,2.52,2.70.12,2.49,2.26,2.35,3.66-.11,1.06.86,3.19-1.64,3.44-.56.05-.58,1-.07,1.44,2,1.55,1.70,3.90,1.57,5.79a3,3,0,0,0,1.80,3.37c1.33.80,3.39.69,4,2.12s-1.29,2.52-1.63,4a15.09,15.09,0,0,1-1,2.35c-.92,2.20-.33,3.75,1.39,5.18a19.88,19.88,0,0,1,6.90,11.28c.19.86-.39.74-.88.75a7.19,7.19,0,0,1-3.79-.68,14.88,14.88,0,0,0-6.72-2.25,48.45,48.45,0,0,1-6.56-1.06c-2.44-.44-3.94.61-5,2.62a24.87,24.87,0,0,1-1.40,2.39,4,4,0,0,1-2.87,2c-.63.09-1.50-.06-1.91.67-1.25,2.24-3.46,2-5.48,2.06-2.62.12-3.36.84-2.87,3.29.14.70.10,1-.61.90-1.84-.20-2.65,1.10-3.48,2.35-1.62,2.41-2.14,2.51-4.28.74a5.55,5.55,0,0,0-5.65-.44c-2,1.16-3.37.51-3.76-1.72-.28-1.59-.65-3.17-1-4.76a2.20,2.20,0,0,1-.13-.80c.41-2-.22-2.60-2.32-2.11-2.46.59-2.66.45-3.10-2.08-.25-1.47-1.16-1.44-2.20-.87-3.73,2-6,1.72-9-1.34a4.21,4.21,0,0,0-3.39-1.59,1.94,1.94,0,0,1-2-.95c-.77-1.48-2-1.46-3.32-1.05a3.61,3.61,0,0,0-2.57,3.55c0,2.71-2,7.43-3.86,9-.22.18-.60.50-.55.61,1.07,2.50-1,1.76-2,1.88-1.73.22-3.49-.36-4.08,2.45a7,7,0,0,1-3.49,3.95c-1.92,1.05-3.28,2.90-2.18,5.25.86,1.83,1.15,3.91,2.91,5.43,1.30,1.12,3.28,2.30,2.38,4.82-.19.52.66,1.44,1.55,1.83,1.23.53,2.35,1.29,3.53,1.92,1.37.74,1,1.32-.13,1.85l-.20.08c-.80.44-1.89.95-1.58,1.90.37,1.18,1.41.82,2.50.60s3.11-.94,3,1.84c0,1.21,1.48.88,2.11.28a3.53,3.53,0,0,1,2.74-.94c1.92,0,3.51-1.34,5.45-1.34.44,0,.95-.44.78-.86-.61-1.51,1.50-2.57.58-4.20-.32-.57,2.11-1.50,3.10-1.09,1.17.49,2.35,1.68,3.43-.14a.65.65,0,0,1,.59-.08c.38.21.32.64.22,1-.85,2.72-.44,5.76,1.42,7.32,2.15,1.79,1.35,3.67,1.57,5.52s-1.65,2.79-2.10,4.42c-.11.40-1.06.43-1.32-.34s-.90-1.11-1.39-1.63c-1-1.10-2.47-.72-3.72-1-2.39-.60-2,1.55-2.13,2.47-.39,2.32-2.05,3.10-3.77,4-1.54.78-2.41,1.42-.36,2.93a12.22,12.22,0,0,1,4.48,7.57c.21,1-.39,1.15-.94,1.29-1,.25-2.10.32-3.14.51-1.49.27-3.13.11-3.83,2.06-.38,1-1.88.74-2.13.25-.79-1.57-2.63-2.90-1.55-5.07a6.59,6.59,0,0,0,.55-1.62c.19-1,.08-1.69-1.20-2a2.85,2.85,0,0,1-2-3.46,4.24,4.24,0,0,1,.18-.50c1-2.85,1-2.95-1.75-4.50-1.08-.62-2-1.50-1.67-2.94a3.62,3.62,0,0,0-1.61-3.93c-1.62-1-1.63-2.30-1.41-3.67.38-2.46-.83-3.64-3-4.18-1.69-.43-2.49-1.18-2.11-3.13a4.41,4.41,0,0,0-3.59-5.11,4.57,4.57,0,0,0-.83-.07c-2.16,0-3.54-1.34-4.18-4.12a3.56,3.56,0,0,0-2-2.47c-2.34-1.33-4.42-3.10-7.07-3.86-.53-.16-.66-.65-.93-1.08-.66-1.07-1.22-2.33-2.89-2.08a1.20,1.20,0,0,1-1.17-.84c-.87-2.27-2.68-2.11-4.63-2.12a12.73,12.73,0,0,1-11-5.95c-1.15-1.70-1.65-4-3.87-4.90-1-.41-1.22-1.71-1.41-2.49-.60-2.48-2.55-3.83-3.79-5.68-1.36-2-4.67-2.33-4.60-5.50a2.62,2.62,0,0,0-1.73-2.25,1.76,1.76,0,0,1-1.11-1.49c0-1.90-1.09-3.28-2-4.75-.42-.67-.26-1,.47-1.46,1.42-.83,1.72-1.90,1.47-3.74a8.22,8.22,0,0,0-2-4.22,4.77,4.77,0,0,1-.26-4.94c.32-.54.82-1,.73-1.72-.06-.45-.30-1.21-.89-.56-1.91,2.10-2-.44-2.32-1.07s-.44-1.33-1.43-1.73c-1.50-.62-1-2.11.05-3.45a7.92,7.92,0,0,0,1.90-6.92c-.14-.61-.35-1.05.09-1.51,1.43-1.48,1.25-3.72,2.57-5.30a1.27,1.27,0,0,0-.09-1.79,1.30,1.30,0,0,0-.69-.32c-.49-.13-.68-.11-.58-.75.50-3-1.15-5.44-2.50-7.92-.61-1.12-.15-2.88-2-3.28a1.06,1.06,0,0,1-.43-.93c1.34-3.67-.93-5.15-3.75-6.36-.66-.28-1.07-.53-1-1.68.19-2,.45-4.20-2.24-5.64-1.60-.86-2-3.63-2.06-5.56,0-.72,2.29-1.70,3.64-2.32.89-.40,1.59.10,2.21,1a9.36,9.36,0,0,0,6.47,4c1.33.24,1.75,2.12,1.68,2.24-1.39,2.65,1.31,3.32,2.35,4.55.74.87,1.93,1.41,2.64,2.50s1.75,1.05,3,1.22,3-1.79,4.30.43c.39.66,1.35-.90,2.43-.84,1.78.10.77-1,.68-1.87-.13-1.22.88-.75,1.27-.41,1.37,1.22,2.72.89,4.32.50,1-.24,2.61-.27,2.64,1.67,0,.31.35.60.50.92.58,1.15,1.27,2.25-.07,3.44a3.13,3.13,0,0,0-.93,2.12c0,.87.43,1.44,1.21,1.31,2.49-.44,4.61,1,7,1.33,1.91.24,3,2.76,2.77,5.11-.20,1.87.85,2.38,2.42,2.49a16.27,16.27,0,0,1,3.41.38c.49.13,1.25.31,1.62-.28,1-1.67,3.09-1.78,4.46-3,1-.86,2.33-1.23,3.09.60a1.67,1.67,0,0,0,1.55,1,6.34,6.34,0,0,0,6.83-5.79,4.35,4.35,0,0,0,0-.51c-.07-4,3-5,5.89-3.64a2,2,0,0,0,2.85-.58,2,2,0,0,0,.27-.60,12.64,12.64,0,0,0,1.16-2.70,1.80,1.80,0,0,1,2.60-1.53c1.11.40,2.49.70,3.50-.83.70-1,2.26-.11,3.41-.74.92-.50,2.27-.62,2.30-1.82a2.65,2.65,0,0,0-1.64-2.22c-1-.47-1.68-1.28-.61-2.40.34-.35.56-.78,0-1.06-1.60-.84-1-2.17-.77-3.37s-.15-2.55,0-3.88c.32-2.47,2.22-5,4.63-4.87,1.48.10,2.41-1,3.85-1,2.46,0,4.44,1.31,6.54,2,4,1.41,8,1.19,12,1,1.13-.05,1.45.07,1.64,1.22.38,2.34,2,3.43,4.22,4.18,1.20.42,1,2.06,1,3.21,0,2.56,1.32,4.75,2.07,7,.51,1.58,3,.78,4.53,1.33a9,9,0,0,0,1.94.15c1.58.21,2.52.75,2.41,2.73-.08,1.53-.12,4.38,2,3.93,3.37-.72,3.47,1.25,4,3.27.57,2.21,2.35,2.50,4.18,2.55C274.83,317.36,277.17,317.29,279.38,318.15Z"
                            onClick={() => setSelectedRegion("MKA")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>مكة</title>
                          </path>

                          {/* Hail */}
                          <path 
                            id="Path_37" 
                            data-svg-aria="area-active-7" 
                            data-name="Path 37" 
                            data-title="حائل" 
                            data-code="HAIL" 
                            className={`vectorMap-country vectorMap-petroleum is-active ${selectedRegion === "HAIL" ? "is-activePlace" : ""}`}
                            fill={selectedRegion === "HAIL" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "HAIL" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M149.09,138.21a10.43,10.43,0,0,0,1.23-.66,2.28,2.28,0,0,0-.25-4.17c-2.22-1.07-4.50-2.06-6.72-3.13-.64-.31-1.54-.38-.32-1.53a9.59,9.59,0,0,1,7.32-2.82,4.13,4.13,0,0,0,2.80-.81,7.59,7.59,0,0,1,4.08-1,10.92,10.92,0,0,0,5.74-2.32c2.47-1.76,4.70-4,7.95-4.70,4.82-1,9-3.82,13.52-5.52a24.38,24.38,0,0,0,5.33-2.48c2.11-1.40,4.80-.51,7.22-.55,5.13-.09,10.27-.09,15.41.20a56.33,56.33,0,0,0,6.23-.25c1.62-.08.88-1.32.79-1.93-.54-3.80,1-6.39,4.48-7.44a1.80,1.80,0,0,1,2,.27c1.40,1.32,3.22,1.53,5,1.64a15.77,15.77,0,0,1,5.82,1.27,9.94,9.94,0,0,0,4.46.52,3.34,3.34,0,0,1,3.41,2.10,5.05,5.05,0,0,0,2.11,2.32c.78.49,1.75,1.14,2,1.93,1.15,3.49,4.20,2.77,6.71,3.19,1.10.19,2,0,2.17,1.69.11,1.48,2.87,3.24,4.42,3.14,1.32-.08,2.11,1,3.30,1.33,2,.46.47,1.76.50,2.70,0,.36,0,1,.08,1,1.60.45,1.32,3.49,4.25,2.54,1.66-.53,4,.85,5.75,1.76,1.50.79,2.21.25,3.15-.34a5.84,5.84,0,0,0,2.32-2.78c.57-1.44,1.89-2,2.91-1.26,1.88,1.39,4,1.64,6.13,2.12a73.76,73.76,0,0,1,7,2.48,3.90,3.90,0,0,0,2.87-.07c4.54-2.17,9.37-1.70,14.12-1.63,2.08,0,1.47,2.41,2.34,3.57.62.81-.10,1.48-.77,1.79-1.56.69-2.32,2.30-3.81,3.10-1,.52-.94,1.57,0,2.34,1.11.91.83,1.71-.16,2.45-2.28,1.69-4.48,3.50-6.89,5-1.87,1.16-4.21.61-6.31.86-5.44.65-9.12,4.57-13.71,6.78-.87.42-.64,1.44-.44,2.16.70,2.53.70,5.17,1.39,7.73.40,1.48-1.32,2.33-2.55,3-.93.48-2.15.53-2,2,0,.31-.13.65-.46.57-2-.46-2.22,1.35-3,2.40-2,2.56-3.92,5.18-7.45,5.72a3.62,3.62,0,0,0-2.16,1.25,8.80,8.80,0,0,1-4.28,3c-1.43.36-1.70,2.29-2.66,3.41-1.41,1.66-2.60,3.75-4,5.13a9.08,9.08,0,0,1-8.75,2.52c-1-.30-1.29-.25-1.82.80a27.57,27.57,0,0,1-3.20,4.24c-.26.33-.77.68-.31,1.07,1.84,1.54.24,2-.78,2.68-2.20,1.47-4.76,2.60-5.15,5.74,0,.32-.75.80-1.14.79-1.18,0-1.45.87-1.77,1.62-1.35,3.13-2.69,3.83-5.84,2.95-1.88-.53-2.10-.30-1.70,1.78a5.22,5.22,0,0,1,0,1.25c-2.09-.46-3.07,2.38-5.21,1.75a3.15,3.15,0,0,0-3.47,1c-1.52,1.75-3.76,2.91-4.07,5.63-.12,1-1.39,1.32-2.34,1-2.89-1.05-6.13-.76-8.84-2.68a3.21,3.21,0,0,0-4.19.69c-1.07,1.22-2.72,2-2.68,4,0,.71-.91,1.07-1.44,1-1.78-.23-3.68.87-5.37-.65-.52-.47-2.11-.40-2.17,0-.22,1.45-3.15,2.24-.89,4.18a1.56,1.56,0,0,1-1.68-.43c-1.47-1.45-2.82-.93-3.89.41-.60.76-1.40,1.05-1.50.17-.38-3.37-2.83-2.06-4.28-1.75-3.53.74-5.12-.34-4.55-3.83.39-2.41-.38-4.95.81-7.26.06-.12.08-.38,0-.42-2.08-1.40-1-3.68-.84-5.19.27-2.53-1-5.13.32-7.57.26-.47,0-.90-.32-1.37-1.70-2.51-3.94-4.75-2.80-8.38.36-1.13-1.70-1.91-2.27-3.17-.28-.61-1-.93-1-1.80,0-2-.61-3.40-3-3-.45.07-.77,0-.73-.72.06-1-.16-2-.13-2.94.06-1.46-.40-2.35-2-2.46-.46,0-1.41-.40-1.27-.62.53-.77-.36-1.50.35-2.39,2.06-2.59,4.10-5.34,2.77-9a4.48,4.48,0,0,1-.28-1c-.45-4.07,0-4.79,3.92-5.62a21.85,21.85,0,0,1,4.80-1c1.64,0,.92-1.33.68-1.87a5.10,5.10,0,0,1-.33-3.50,4.90,4.90,0,0,0-.72-3.46,18.63,18.63,0,0,0-8.92-8.39c-.26-.11-.60-.17-.76-.36C156,138.81,152.80,138.06,149.09,138.21Z"
                            onClick={() => setSelectedRegion("HAIL")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>حائل</title>
                          </path>

                          {/* Najran */}
                          <path 
                            id="Path_38" 
                            data-svg-aria="area-active-8" 
                            data-name="Path 38" 
                            data-title="نجران" 
                            data-code="NJR" 
                            className={`vectorMap-country vectorMap-green ${selectedRegion === "NJR" ? "is-active" : ""}`}
                            fill={selectedRegion === "NJR" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "NJR" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M574.62,440.67c-2,1.46-4.51,1.16-6.78,1.58-11.47,2.13-23,4.19-34.50,6-5,.80-10.17,1-15.26,1.45q-6.87.66-13.75,1.38l-19.77,2.10c-3.76.40-7.43.84-10.93,2.67-6.55,3.41-13.23,6.58-20,9.57a29.64,29.64,0,0,0-12.48,9.74,123.49,123.49,0,0,1-10.38,12.87c-4.10,4.30-6.19,9.51-8.19,14.83a4.23,4.23,0,0,1-2.23,2.69c-2.52,1-4.53,2.90-7,4.05a6.65,6.65,0,0,1-7.77-1.66c-2-2.66-4.20-5.22-6.07-8a2.23,2.23,0,0,0-2.52-1c-3.35.40-6.70.80-10,1.30-3.54.52-7.06,0-10.56-.29-6.50-.59-13-1.77-19.47-2.26-3.47-.26-6.25-1.84-9.17-3.26a6.56,6.56,0,0,0-3.07-.77c-4.71,0-9.43,0-14.14,0-1.65,0-3.31-.11-4.85.71a2.43,2.43,0,0,1-2.12.05c-3.32-1.58-6.68-.22-10,.27-2.06,0-3.90,1.58-6.14.71a1.87,1.87,0,0,0-2.23.74c-.71,1.22-4.20,2.06-5.13,1.16-1.20-1.16-2.57-.73-3.85-1,1.22-2.06.43-3.41-1.33-4.77-1.53-1.18-1.56-3.28-1.73-5a14.88,14.88,0,0,1,.51-6.36,11.34,11.34,0,0,1,2.28-3.86c.36-.37.83-.77.58-1.30-1-2.05.80-3,1.45-4.51.74-1.67,2.10-2.28,3.18-3.37.39-.40.05-1,.20-1.45.36-1.19.43-2.49,2.33-2.62a2.42,2.42,0,0,0,2.54-2.15c.08-1.31-2-.73-1.76-2.08.18-1.05,2.17-.61,1.84-1.69-1.11-3.64,1.62-4.59,3.84-6,.85-.52.95-1.07.16-1.87-1.05-1-.69-2.32.82-2.52a4.65,4.65,0,0,0,2.62-1.24,3.29,3.29,0,0,1,3.07-.50c1.56.37,2.31.32,2.18-1.78-.10-1.64-.63-3.61,1-5.12.44-.40.62-1.10,1.38-1,.95.10,1.18-.74,1.18-1.22,0-1.46-1-2.80-.45-4.43.19-.59-1.10-.51-1.63-.57-1-.13-1-.77-1-1.34,0-.74.64-.60,1.11-.63,4.40-.18,8.81-.35,13.21-.55q3.35-.15,6.68-.43c1.06-.09,1.38.34,1.43,1.33.08,1.64.24,3.29.44,4.93.15,1.22.57,2.12,2.10,1.39a24,24,0,0,0,2.72-1.13c3.61-2.36,7.71-1.30,11.56-1.53,6.58-.39,13.20.06,19.79-.24,9-.42,18-.09,26.92-.47,6.37-.27,12.74-.34,19.10-.34l147.40-.06c1.90,0,2.68.39,2.56,2.41C574.44,436,574.60,438.36,574.62,440.67Z"
                            onClick={() => setSelectedRegion("NJR")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>نجران</title>
                          </path>

                          {/* Northern Borders */}
                          <path 
                            id="Path_39" 
                            data-svg-aria="area-active-9" 
                            data-name="Path 39" 
                            data-title="الحدود الشمالية" 
                            data-code="NRTH" 
                            className={`vectorMap-country vectorMap-blue ${selectedRegion === "NRTH" ? "is-active" : ""}`}
                            fill={selectedRegion === "NRTH" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "NRTH" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M103.43,14c.82-1.56,2.48-1.41,3.81-1.74q14.52-3.67,29.10-7.14c2.39-.56,3.95-2.29,5.63-3.70A5.86,5.86,0,0,1,147.25.18c11,1.88,22,3.88,33.09,5.54,5.10.76,9.10,3.63,13.40,5.92,7,3.73,13.90,7.63,20.75,11.62,8.07,4.71,17,7.27,25.48,11.13,2.51,1.15,4.56,2.93,6.77,4.47q11.37,7.88,22.58,16,15.23,11,30.36,22c9.80,7.21,19.47,14.61,29.33,21.74,2.05,1.49,4.92.65,7.40,1,2.20.35,4.51,0,6.63,1-3.52,2.41-3.72,4.36-3,8.66.55,3.18.87,6.57-.37,10-2.22,6-4,12.24-6,18.37-.74,2.27-1.35,2.39-3,.76-.63-.60-1.11-1.60-2.29-.76-.38.27-.76-.25-1.13-.46a34.69,34.69,0,0,1-8.18-6.95c-1.34-1.48-1.60-3.58-2.25-5.42a1.79,1.79,0,0,0-2.05-1.50h-.07a123.80,123.80,0,0,0-12.46.88c-.21,0-.48,0-.63.11-2.58,2.16-4.90.66-7.30-.44-2.07-.95-4.43-.88-6.55-1.78a4.60,4.60,0,0,1-2.28-1.23c-1.14-1.35-4.19-.39-5.32,1.48-2,3.30-3.93,3.72-7,1.50a7.72,7.72,0,0,0-3.35-.93c-2.16-.42-2.69-1.13-2.12-3.14.18-.65.35-1.27-.21-1.81a8,8,0,0,0-5.23-2.29,2.71,2.71,0,0,1-3-2.18c-.47-1.70-1.40-2.49-3-2.40-1.34.07-2.62-.83-4-.11a1,1,0,0,1-1.27-.70l0-.13a5.47,5.47,0,0,0-2.58-3.23,5.72,5.72,0,0,1-2.30-2.52c-1-2.63-3.30-3.17-5.68-3.24-3.89-.10-7.53-1.54-11.36-2-1.35-.17-2.22-2.58-1.92-4.40a2.73,2.73,0,0,0-.85-2.64c-1.20-1.45-2.47-3.18-2.10-5.48.18-1,.12-2.60-1.93-1.74-.85.36-1.51,0-1.40-1.19a2.86,2.86,0,0,0-.19-1.68c-.76-1.27.32-2.33.22-3.51-.14-1.78,1.26-1.29,2.22-1.43a.49.49,0,0,0,.34-.22,6.44,6.44,0,0,1,6.06-3.19c.54,0,1-.12,1.10-.74.41-3.40,3.12-3.63,5.65-4.06a3.85,3.85,0,0,0,1.57-.53c1.44-.94,1.43-2.10.21-2.88-2.59-1.65-4.37-4.08-6.48-6.18a3.37,3.37,0,0,0-3-1.23,3.41,3.41,0,0,1-2.49-.47c-.87-.62-1.88-1.17-.22-2.32,2-1.38,1.62-2.62-.56-3.60A15.86,15.86,0,0,0,219.76,50c-3-.09-6.52-.81-9.25,1.58-1,.85-1.09.13-1-.64a12.92,12.92,0,0,0,.31-2.70c-.47-2.91-3.70-5-6.73-4.54s-6.22,1-9.35,1.24c-2.68.21-5-1.33-7.51-2-1.43-.40-2.89-.67-4.35-1a2.31,2.31,0,0,0-2.36,1.13c-2,2.44-3.72,2.47-6.33.71-1.81-1.23-3.90-2-5.64-3.43-.75-.60-1.70,0-2.39.49-1.82,1.23-3.18.68-4.44-.88-1.12-1.39-4.56-2.26-5.95-1.28-1.80,1.27-2.89,1.24-5.13.19a13.56,13.56,0,0,0-8.77-1.11,18.64,18.64,0,0,1-2.34.27c-2,.27-4.14.18-5.77,1.68a2.26,2.26,0,0,1-2.63.37c-3.24-1.92-6.50-1.40-9.74-.28-2.10.73-4.33,0-6.39.82-.32.13-.72.06-1,.16-.71.22-1.59,1.24-2,.54a3.61,3.61,0,0,1-.62-3,4.35,4.35,0,0,0,.33-1.88,3,3,0,0,1,2-3.40c2.21-1,2.13-2.94.06-4.19a1.51,1.51,0,0,1-.74-1.44c0-.85-.09-1.71-.16-2.57-.22-2.68-1.39-4.17-4.14-4.74-1.38-.28-2.59-1.45-3.85-2.26-.85-.54-.62-1.44-.44-2.16C103.42,15.08,103.82,14.61,103.43,14Z"
                            onClick={() => setSelectedRegion("NRTH")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>الحدود الشمالية</title>
                          </path>

                          {/* Al-Jouf */}
                          <path 
                            id="Path_40" 
                            data-svg-aria="area-active-10" 
                            data-name="Path 40" 
                            data-title="الجوف" 
                            data-code="JOF" 
                            className={`vectorMap-country vectorMap-green ${selectedRegion === "JOF" ? "is-active" : ""}`}
                            fill={selectedRegion === "JOF" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "JOF" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M85.56,73.19,85.48,73c3.62-1.85,4.16-5.78,5.83-8.88,1.21-2.23,2.48-4,4.92-4.91,2.18-.83,4.23-2,6.33-3.06s2.11-1.67.45-3.33Q88.34,38.14,73.63,23.47c-.31-.31-.59-.64-.91-.93-1-.84-1.22-1.25.42-1.66,8.52-2.07,17-4.30,25.51-6.44,1-.26,2-.9,3.08-.40.54,1.33-1,2.78.20,4.05a12.74,12.74,0,0,0,5.57,3.41c2.36.67,2.81,2.14,2.78,4.26,0,1.72-.19,3.48,2,4.46,1.16.51-.12,1.45-.63,1.60-2.28.63-2.74,2.32-2.72,4.29,0,1.60-.56,3.11-.11,4.82.53,2,1.39,3.15,3,2.09,2.11-1.36,4.39-1.14,6.56-1.47,2.38-.36,4.66-1.42,7.18-1,1.40.20,2.67.06,3.95,1.17s2.84-.14,4.05-.75c3.76-1.90,7.71-2,11.70-1.48,1.83.22,3.87,0,5.28,1.86a2.06,2.06,0,0,0,2.54,0,13.48,13.48,0,0,1,1.70-.85c1.95-1,3.62-1.12,5.26.82,1.32,1.57,3,2.58,5.24,1,1.57-1.10,3,.24,4.12,1.10a12.67,12.67,0,0,0,7.73,2.95,2,2,0,0,0,1.65-.73c2.06-2.67,4.59-2.29,7.27-1.21,1.18.48,2.40.84,3.59,1.30,3.44,1.35,6.81.07,10.21-.22,1.93-.16,3.87-.52,5.79.08,2.17.67,3,1.90,2.28,4.06a3.77,3.77,0,0,0,.53,3c.58,1.10,2,1.49,2.70.54,2-2.81,5.34-2.21,7.43-1.70,1.85.45,4.15.08,5.83,1.50.37.31,1.05.29.53,1-2.12,2.81-1.25,5.67,2.11,5.47s4.41,2,6,3.63a24.13,24.13,0,0,0,2.80,2.55c.44.33,1.26.47,1,1.13-.15.38-.90.68-1.42.74-1.76.21-3.88.23-4.68,1.90-1.25,2.61-3.35,3.11-5.78,3.35-.43,0-.54.29-.75.60a6.55,6.55,0,0,1-4.08,2.86c-1.58.38-2.49.81-1.28,2.76.60,1,.18,2.56.25,3.88a18.77,18.77,0,0,0,.20,2.12c.35,2,1.19,2.56,3.09,1.10a11.41,11.41,0,0,0,3,7.32c.52.56.15,2,.21,3,.09,1.82-1.35,1-2.15,1.26-2.30.86-4.78,1.31-5,4.70-.08,1.29-1.21,2.52-.71,4.10.34,1.06-.65.62-1.05.62-5.15,0-10.30,0-15.45.07-3.55,0-7.10,0-10.65,0-1.81,0-2.87,1.67-4.50,2.18-4.60,1.41-8.68,4.27-13.26,5.49s-8.28,3.82-12,6.62a8.21,8.21,0,0,1-4.61,1.38,4.50,4.50,0,0,0-2.50.40c-2.46,1.54-5.39,1.10-8.05,1.83-1.41.39-.79-.85-.69-1.08.80-1.73.29-3.41-.14-5s-1.42-2.57-3.32-1.88a1.76,1.76,0,0,1-2.37-.75,2,2,0,0,1-.17-.47,31.55,31.55,0,0,1-1.27-4c-.64-3.45-3.39-4.34-6.14-5.11-1.08-.30-1.64-.60-1-1.58s-.54-1.61-.53-2.48c0-1.66-.10-3.34,0-5a1.73,1.73,0,0,0-1.90-2.16A7.31,7.31,0,0,1,124,93.87a1.72,1.72,0,0,0-2.43-.10,1.86,1.86,0,0,0-.43.63c-.52.83-1.08,1.65-1.67,2.44-.45.60-1,1.12-1.83.60s-1.33-.10-1.86.47a1.23,1.23,0,0,0,0,1.72l.05,0c1.64,1.88-.65,2.91-1.11,4.17-.40,1.10-2.23-.10-3.35-.28-.90-.15-.55-1.77-.30-2.50.73-2.10,1.12-4.43,3.06-5.94a1.82,1.82,0,0,0,.62-2.51,1.75,1.75,0,0,0-.60-.61c-2-1.25-2.53-3.36-3.60-5.15-.10-.17-.23-.49-.31-.48-2.38.25-4.10-1.74-6.39-1.84-1,0-1.56.62-2.33.83-2,.50-4,0-6,.08-.80,0-.70-.52-.60-1,.37-2,0-4.06-.10-6.09,0-1.34-1.32-1.53-2.24-2s-2.22-.74-3-1.73C88.60,73.23,87.09,73.14,85.56,73.19Z"
                            onClick={() => setSelectedRegion("JOF")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>الجوف</title>
                          </path>

                          {/* Al-Qassim */}
                          <path 
                            id="Path_42" 
                            data-svg-aria="area-active-11" 
                            data-name="Path 42" 
                            data-title="القصيم" 
                            data-code="QSM" 
                            className={`vectorMap-country ${selectedRegion === "QSM" ? "is-active" : ""}`}
                            fill={selectedRegion === "QSM" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "QSM" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M277.87,248.78a29.73,29.73,0,0,1-1.28,3.57,2.64,2.64,0,0,1-3.43,1.46l-.14-.06a5.78,5.78,0,0,0-6.84,1c-2.29,2.70-4.83,1.24-7.22,1.69a1.40,1.40,0,0,1-1.65-1,16.49,16.49,0,0,0-1.73-3.13c-.94-1.31-1-3.61-2.54-4a20.36,20.36,0,0,0-6.70,0c-3.05.36-2.91.46-3.80-2.54A44.25,44.25,0,0,0,237,234.43c-1.06-1.64-3.24-3.59-6.42-2.12s-7.06-.76-9-3.86c-1.50-2.37-2.88-4.91-5.40-6.48-.81-.50-.62-1.13-.21-1.86,1.36-2.40,3.22-4.74,6.52-4.17.93.16,1.77.20,2.33-1,.33-.71,1.43-.78,2.33-.78,1.13,0,2-.32,1.50-1.78-.21-.69-.10-1,.94-.89a5.28,5.28,0,0,0,5.95-3.69c.26-.86.52-1.33,1.48-1.55a2.35,2.35,0,0,0,1.52-1.41c.55-2.72,2.73-3.75,4.72-5.10,1.49-1,3.92-1.76,2.07-4.58-.36-.54.89-1.83,1.68-2.53s.76-1.58,2.41-1.32c3.36.54,7.44-.55,9.10-2.90s4-4.69,5.44-7.44c.13-.25.24-.69.41-.71,3.19-.45,4.30-4.21,7.31-4.70,3.59-.57,5.27-3.31,7.22-5.74.78-1,1.10-2.18,2.70-1.36.33.16,1,.13,1-.44-.17-2.50,2-3.30,3.44-4.29a3.22,3.22,0,0,0,1.33-4.35,2.39,2.39,0,0,0-.13-.21c-.81-1.64-.54-3.38-1.07-5a2.33,2.33,0,0,1,1.32-3c2.28-1.24,4.26-3,6.56-4.22a13,13,0,0,1,6.81-1.53c4,.32,6.58-2,9.45-4a20.27,20.27,0,0,0,2.30-2c2.74-2.50,2.84-1.84.56-4.81,1.39-1,2.18-3,3.93-3.28,1.94-.31,2.58,1.92,3.89,2.91,1.61,1.20,3.06,2.60,4.70,3.72a2.15,2.15,0,0,1,1,2.10c-.06,7.31,3.28,9.90,8.78,12.18,1.94.81,2.92,1.32,1.73,3.66-2.44,4.80-2.64,10.16-3.12,15.40-.22,2.41-.55,2.73-2.25,1.24-2.55-2.24-5.31-.82-8-.93-.06,0-.13.08-.19.09-4.52,1-4.65,1-5.22,5.43a51.77,51.77,0,0,0,1.33,19.12c1.48,6.06,5.38,10.45,8.83,15.23a3.90,3.90,0,0,0,.59.63c3.58,3,1.72,6.24.50,9.47-.37,1-1,.56-1.55.32-2.08-.88-4.18-1.74-6.22-2.69-1-.45-1.81-.39-2.26.47-1.47,2.82-4.23,2.87-6.77,3.16-2.85.32-5.39.90-6.80,3.74a2,2,0,0,1-2.15,1.11c-1.66-.08-3.33,0-5,0a3.89,3.89,0,0,0-3.64,3.46c-.05.61.46,1.40-.64,1.78a3.26,3.26,0,0,1-3.25-.20c-.65-.45-.60-1.90-1.80-1.50a5.40,5.40,0,0,0-3.16,2.07,11.74,11.74,0,0,1-3.88,3.57,6,6,0,0,1-3.74,1.30c-1.44-.05-3.80,2.14-4,3.44a.92.92,0,0,0,.36,1c1.58.94.85,2.72.47,3.42-1.20,2.20.13,2.11,1.53,2.23Z"
                            onClick={() => setSelectedRegion("QSM")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>القصيم</title>
                          </path>

                          {/* Al-Baha */}
                          <path 
                            id="Path_44" 
                            data-svg-aria="area-active-12" 
                            data-name="Path 44" 
                            data-title="الباحة" 
                            data-code="BHA" 
                            className={`vectorMap-country ${selectedRegion === "BHA" ? "is-active" : ""}`}
                            fill={selectedRegion === "BHA" ? colors.primary + "40" : "#ddd"}
                            stroke={selectedRegion === "BHA" ? colors.primary : "#fff"}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M214.07,425.64c1-2.26.19-2.78-1.30-2.35a1.38,1.38,0,0,1-1.55-.25c-.52-.56.28-.84.47-1.20.59-1.12.50-1.83-.78-2.34-1-.41-2-1.05-3-1.51-1.43-.64-3-1.10-1.30-3.12.47-.55.63-1.89-.50-1.79-2.36.21-3.13-1.89-3.91-3-1-1.49-2.69-3.25-1.60-5.77.33-.76.60-1.63,1.20-1.94,2.08-1,3.21-2.85,4.27-4.74.75-1.36,1.54-1.68,2.74-.42s2.47.74,2.83-.85c.39-1.75,1.44-3.09,2.24-4.60,1.34-2.55,3-5.21,2.56-8.36-.17-1.25.51-1.70,1.51-2.20s1.32.05,1.73.80a2.32,2.32,0,0,0,2,1.09c2.75.10,4.30,1.91,5.72,3.88.87,1.20,1.43,1.84,3.08.73,1.28-.86,3.32.16,4.85-.87a.45.45,0,0,1,.28.21c.60,2.74,2.61,2.37,4.59,2.12.89-.11,1.36,0,.90,1.18a2.94,2.94,0,0,0,.42,1.78c.67,1,.12,1.43-.71,1.75a5.75,5.75,0,0,0-3.84,4.20c-.41,1.62-1.86,2.54-2.82,3.79-1.67,2.14-1.69,4.74-1.88,7.26a3.85,3.85,0,0,1-.92,2.40,3.27,3.27,0,0,0-1.08,2.94A2.38,2.38,0,0,1,228,417a2.44,2.44,0,0,1-.54,0,5.33,5.33,0,0,0-3.53.91c-1.30.81-1.39,1.59-1.30,3,0,.41.47,3.29-2.10,2.35C219.15,425.60,216.23,423.54,214.07,425.64Z"
                            onClick={() => setSelectedRegion("BHA")}
                            style={{ cursor: "pointer" }}
                          >
                            <title>الباحة</title>
                          </path>

                          {/* Jazan - Group */}
                          <g className="area-13-group map-area-group" data-svg-aria="area-active-13" data-title="جيزان" data-code="JZN">
                            <path 
                              id="Path_13" 
                              data-name="Path 13" 
                              data-title="جيزان" 
                              data-code="JZN" 
                              className={`vectorMap-country ${selectedRegion === "JZN" ? "is-active" : ""}`}
                              fill={selectedRegion === "JZN" ? colors.primary + "40" : "#ddd"}
                              stroke={selectedRegion === "JZN" ? colors.primary : "#fff"}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M233,526.23c-.76-.05-1.68.28-2.09-.69-.35-.8-.89-.59-1.39-.34a2.88,2.88,0,0,1-2.49-.29,1.34,1.34,0,0,1-.9-1.66.85.85,0,0,1,.09-.22c.39-.8,1.07-.89,1.76-.22.36.36.77.85,1.12,0,.15-.35.72-.88-.25-1.08-.24,0-.62-.63-.55-.81.69-1.68-.56-3.91.12-4.87,1.84-2.62,1-2.90-1.51-2.75-.4,0-.58-1-1.3-.55l.05.05a2.51,2.51,0,0,1,1.43-2.88c1.42-.56,2.33.83,3.44,1.50.1-1-.66-2.44.4-2.7,1.39-.36,2.64-2.42,4.37-.7.51.5,1.2.3,1.81.44,1.09.26,2.16,1.23,1.19,2.08-2,1.75.82,2,.69,3,2.6.13,3.76,2.14,4.95,4.09a8.47,8.47,0,0,0,1.1-1c.59-.73,1-.24,1.38.18s.82,1.27.1,1.62c-1.23.61-.93,1.73-1.50,2.76,1.18-.07,2.26-.62,2.79.63.21.5.72,1.07.2,1.57a1.2,1.2,0,0,1-1.41,0A8.22,8.22,0,0,1,246,523c-1.91,2.39-3.19.4-4.66-.6a1.12,1.12,0,0,0-1.3.25c1.32.75,2.16,1.67.77,3.06-1,1-1.87.5-1.94-.54-.09-1.23-.63-1.28-1.58-1.66a44.78,44.78,0,0,0-5.92-2.2c-.38-.09-.7-.23-1,.1-.54.66.29.6.5.83.45.51.54,1.28,1.4,1.51,1.55.42,1.58,1.4.73,2.57Z"
                              onClick={() => setSelectedRegion("JZN")}
                              style={{ cursor: "pointer" }}
                            >
                              <title>جيزان</title>
                            </path>
                          </g>
                        </g>
                      </g>
                    </g>
                    
                    {/* Region Markers */}
                    <g data-code="JOF" className="vectorMap--marker" data-count="2" transform="translate(135,50) scale(2)">
                      {selectedRegion === "JOF" && (
                        <>
                          <circle opacity="0.28" cx="14.5" cy="14" r="14" fill={colors.primary} />
                          <circle cx="14.5" cy="14" r="6" fill={colors.primary} />
                          <text x="22" y="12" fontSize="6px" fill={colors.white} fontWeight="bold">2</text>
                        </>
                      )}
                    </g>
                    
                    <g data-code="HAIL" className="vectorMap--marker is-active is-markerAdded is-activePlace" data-count="10" transform="translate(198,140) scale(2)">
                      {selectedRegion === "HAIL" && (
                        <>
                          <circle opacity="0.28" cx="14.5" cy="14" r="14" fill={colors.primary} />
                          <circle cx="14.5" cy="14" r="6" fill={colors.primary} />
                          <text x="22" y="12" fontSize="6px" fill={colors.white} fontWeight="bold">10</text>
                        </>
                      )}
                    </g>
                    
                  </svg>
                </div>
              </div>
            </motion.div>

     
          </div>
        </div>

        {/* Footer */}
        <motion.div 
          className="mt-5 pt-4 border-top"
          style={{ borderColor: colors.border }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Optional footer content */}
        </motion.div>
      </div>
    </section>
  );
}