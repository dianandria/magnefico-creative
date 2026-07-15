"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/FadeUp";

interface ArticleItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  author_name: string;
  published_date: string;
  image_path: string;
  is_active: boolean;
  sort_order: string;
  image_url: string;
}

interface CategoryItem {
  id: number;
  name: string;
  slug: string;
}

export default function InsightsPage() {
  const router = useRouter();
  
  const [activeFilter, setActiveFilter] = useState("all");
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [allArticles, setAllArticles] = useState<ArticleItem[]>([]);
  const [displayedArticles, setDisplayedArticles] = useState<ArticleItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Kategori
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

        const response = await fetch(`${baseUrl}/portfolio-categories`, {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        if (result.success) {
          setCategories(result.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch Semua Artikel
  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

        const response = await fetch(`${baseUrl}/articles`, {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (result.success) {
          setAllArticles(result.data);
          setDisplayedArticles(result.data);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Filter Lokal
  useEffect(() => {
    if (activeFilter === "all") {
      setDisplayedArticles(allArticles);
    } else {
      const filtered = allArticles.filter(
        (article) => article.category?.toLowerCase() === activeFilter.toLowerCase()
      );
      setDisplayedArticles(filtered);
    }
  }, [activeFilter, allArticles]);

  return (
    <>
      <PageLoader />
      <Navbar />

      <FadeUp delay={0.4}>
        <main id="main-content" className="animate-fade-in-up opac-bg transition-all duration-700 ease-out min-h-screen flex flex-col">
          
          {/* HERO SECTION */}
          <section
            id="hero-section"
            onClick={() => router.push("/articles/collaborative-efforts")}
            className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden shrink-0 cursor-pointer group"
          >
            <div id="custom-cursor" className="fixed top-0 left-0 z-50 pointer-events-none opacity-0 scale-50 transition-transform duration-200 ease-out mix-blend-difference hidden md:block">
              <div className="hero-cursor-label flex items-center gap-2 text-white">
                READ ARTICLE
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.4] transition-transform duration-700 ease-out group-hover:scale-105"
              alt="Insights Hero"
            />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-14 md:mt-24 pointer-events-none">
              <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-gray-300 mb-4 uppercase">
                Featured Article
              </p>
              <h1 className="text-3xl md:text-6xl font-['Averta-Bold'] text-white leading-tight mb-8">
                Collaborative Efforts: How UX Designers & Analysts Create Solutions
              </h1>
            </div>
          </section>

          {/* FILTER SECTION */}
          <div className="container-box mt-20 mb-10 shrink-0 mx-auto max-w-[1200px] px-[20px]">
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8">
              <h2 className="text-sm font-bold tracking-[0.15em] text-gray-400 uppercase mb-4 md:mb-0">
                All Articles
              </h2>

              <div className="w-full md:hidden">
                <select
                  id="mobile-filter"
                  value={activeFilter ?? "all"}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="mobile-filter-select block w-full rounded-md border-gray-600 bg-gray-800 text-white py-3 px-4 focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="all">ALL</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hidden md:flex items-center gap-x-4">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`btn-filter-tab filter-btn ${
                    activeFilter === "all" ? "active text-orange-500" : "text-gray-400"
                  }`}
                >
                  ALL
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.slug)}
                    className={`btn-filter-tab filter-btn ${
                      activeFilter === cat.slug ? "active text-orange-500" : "text-gray-400"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ARTICLES GRID */}
          <section className="container-box !pb-40 grow mx-auto max-w-[1200px] px-[20px]">
            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500"></div>
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16"
              >
                <AnimatePresence>
                  {displayedArticles.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link href={`/articles/${item.slug}`} className="group block h-full cursor-pointer">
                        <article className="flex flex-col h-full">
                          {/* Wrapper Gambar */}
                          <div className="overflow-hidden rounded-xl mb-6 aspect-video relative">
                            <img
                              src={item.image_url}
                              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              alt={item.title}
                            />
                          </div>
                          
                          <div className="flex flex-col grow">
                            {/* Label Kategori */}
                            <span className="text-[11px] md:text-xs font-semibold text-[#f97316] uppercase tracking-widest mb-3">
                              {item.category}
                            </span>
                            
                            {/* Judul: Berubah jadi oranye saat di hover */}
                            <h3 className="text-xl md:text-[22px] font-['Averta-Bold'] text-white group-hover:text-[#f97316] transition-colors duration-300 leading-[1.4] mb-8 grow">
                              {item.title}
                            </h3>
                            
                            {/* Tombol Button: Berubah jadi solid orange saat di hover */}
                            <div className="mt-auto">
                              <span className="inline-block border border-gray-400 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full px-6 py-2.5 transition-all duration-300 group-hover:border-[#f97316] group-hover:bg-[#f97316] group-hover:text-white">
                                READ ARTICLE
                              </span>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {!isLoading && displayedArticles.length === 0 && (
              <div className="text-center text-gray-400 py-10">
                No articles found in this category.
              </div>
            )}
          </section>

        </main>
      </FadeUp>

      <Footer />
    </>
  );
}