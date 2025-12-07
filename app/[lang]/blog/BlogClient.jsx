"use client";

import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import usePagination from "@/hooks/UsePagination";
import Link from "next/link";
import { toast } from "react-toastify";
import { IoSearch } from "react-icons/io5";
import styles from "./blog.module.css";

const translations = {
  en: {
    heading: "ORVEXCO Engineering Insights",
    intro:
      "Welcome to the ORVEXCO blog — your trusted source for engineering innovations, construction advancements, and industrial technologies. Explore expert articles, project highlights, and insights into modern fabrication methods. Stay informed with updates from our engineering team and discover how ORVEXCO is shaping the future of industrial development across global markets.",
    searchPlaceholder: "Search for articles, updates, or news",
    noArticles: "No articles available",
    noResults: "No articles found matching your query",
    readMore: "Read More",
  },

  ar: {
    heading: "مدونة أورفكسو الهندسية",
    intro:
      "مرحبًا بك في مدونة أورفكسو — مصدرك الموثوق للابتكارات الهندسية، وتطورات البناء، والتقنيات الصناعية الحديثة. استكشف مقالات الخبراء، وأبرز المشاريع، والرؤى حول أساليب التصنيع الحديثة. تابع آخر الأخبار من فريقنا الهندسي واكتشف كيف تسهم أورفكسو في تشكيل مستقبل التطوير الصناعي في الأسواق العالمية.",
    searchPlaceholder: "ابحث عن مقالات أو تحديثات أو أخبار",
    noArticles: "لا توجد مقالات متاحة",
    noResults: "لم يتم العثور على مقالات مطابقة لبحثك",
    readMore: "اقرأ المزيد",
  },
};


export default function BlogClient({ articles, lang }) {
  const t = translations[lang] || translations.en;

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const articlesToDisplay = searchResult.length > 0 ? searchResult : articles;

  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setcurrentPageIndex,
    displayPage,
  } = usePagination(9, articlesToDisplay.length); // 3 columns × 3 rows

  const currentArticles = articlesToDisplay.slice(startPageIndex, endPageIndex);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery !== "") {
      const result = articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (result.length > 0) {
        setcurrentPageIndex(1);
        setSearchResult(result);
      } else {
        toast.info(t.noResults);
      }
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResult([]);
    }
  }, [searchQuery]);

  return (
    <div className={styles.blogContainer}>
      <div className="container ">
        <div className="d-flex flex-column align-items-center text-center mb-5">
          <h1 className="fs-1 fw-bold mb-3">{t.heading}</h1>
          <div className="w-md-75 text-white">{t.intro}</div>
        </div>

        {/* 🔍 Search */}
        <div className="d-flex justify-content-center mb-4">
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button type="submit" className={styles.searchButton}>
              <IoSearch style={{ width: "20px", height: "20px", color: "#fff" }} />
            </button>
          </form>
        </div>

        {/* 📰 Articles */}
        {articlesToDisplay.length > 0 ? (
          <div className={styles.articlesGrid}>
            {currentArticles.map((article) => (
              <div
                key={article.id}
                className={styles.articleCard}
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <div className={styles.articleOverlay}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>
                    {article.excerpt || article.title.slice(0, 100) + "..."}
                  </p>
                  <Link
                    href={`/${lang}/article/${article.slug.replace(/\s+/g, "_")}`}
                    className={styles.readMore}
                  >
                    {t.readMore}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h5 className="text-center my-5">{t.noArticles}</h5>
        )}

        {/* 📑 Pagination */}
        {articlesToDisplay.length > 9 && (
          <div className={styles.paginationWrapper}>
            <Pagination
              count={totalPages}
              page={currentPageIndex}
              onChange={(e, page) => displayPage(page)}
              className="custom-pagination"
            />
          </div>
        )}
      </div>
    </div>
  );
}
