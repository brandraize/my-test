"use client";
import { useState } from "react";
import "./product.css";

export default function Products({ lang = "en" }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    // Add categories when needed
    // Example:
    // { key: "All", label: lang === "ar" ? "الكل" : "All" },
    // { key: "Web Development", label: lang === "ar" ? "تطوير الويب" : "Web Development" },
  ];

  const products = [
    // Example product:
    // { name: "Project 1", img: "/images/project1.jpg", category: "Web Development", link: "#" },
  ];



}
