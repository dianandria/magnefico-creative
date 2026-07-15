"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import FadeUp from "@/components/FadeUp";

// Import CSS dasar Swiper
import 'swiper/css';

interface PortfolioItem {
  title: string;
  description: string | null;
  client_name: string;
  year: string;
  main_image_url: string;
  categories: string[];
  slug: string;
  is_featured: string;
}

interface CategoryItem {
  id: number;
  name: string;
  slug: string;
}

export default function OurWorks() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // State untuk menyimpan index accordion yang sedang terbuka (null = tidak ada yang buka)
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

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

  // Fetch Portfolios
  useEffect(() => {
    const controller = new AbortController();

    const fetchPortfolios = async () => {
      setIsLoading(true);
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

        const url =
          activeFilter === "all"
            ? `${baseUrl}/portfolios`
            : `${baseUrl}/portfolios?category=${activeFilter}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        });

        const result = await response.json();

        if (result.success) {
          setPortfolioData(result.data);
        }
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error("Error fetching portfolios:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolios();

    return () => {
      controller.abort();
    };
  }, [activeFilter]);

  return (
    <>
      <PageLoader />
      <Navbar />

      <main id="main-content" className="our-works-page">
        <FadeUp delay={0.4}>
          <div className="hero-bg hero-section relative isolate our-works-hero">
            <div className="absolute inset-0 -z-10 opac-bg"></div>

            <div className="flex mx-auto max-w-[1200px] px-[20px] w-full">
              <div className="w-full lg:basis-2/3 text-left p-4 pl-0">
                <h1 className="hero-heading text-5xl tracking-tight text-white sm:text-7xl">
                  Our Works
                </h1>

                <div className="mt-6 lg:hidden">
                  <label htmlFor="mobile-filter" className="sr-only">
                    Select a category
                  </label>

                  <select
                    id="mobile-filter"
                    className="mobile-filter-select"
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                  >
                    <option value="all">ALL</option>

                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6 hidden lg:flex items-center gap-x-4">
                  <button
                    className={`btn-filter-tab filter-btn ${
                      activeFilter === "all" ? "active" : ""
                    }`}
                    data-filter="all"
                    onClick={() => setActiveFilter("all")}
                  >
                    ALL
                  </button>

                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`btn-filter-tab filter-btn whitespace-nowrap ${
                        activeFilter === cat.slug ? "active" : ""
                      }`}
                      data-filter={cat.slug}
                      onClick={() => setActiveFilter(cat.slug)}
                    >
                      {cat.name.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <section className="mx-auto pt-5 max-w-[1200px] px-[20px] mb-30 mt-8">
            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#f3723b]"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioData.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/our-works/${item.slug}`}
                    className="works-portfolio-card portfolio-item group"
                    data-category={item.categories?.[0] || "all"}
                  >
                    <img
                      src={item.main_image_url}
                      className="works-card-img"
                      alt={item.title}
                    />

                    <div className="works-card-overlay"></div>

                    <div className="works-card-content">
                      <h3 className="works-card-title">{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!isLoading && portfolioData.length === 0 && (
              <div className="text-center text-gray-400 py-10 w-full">
                No works found in this category.
              </div>
            )}
          </section>
        </FadeUp>

        <div id="footer-placeholder"></div>
      </main>

      <Footer />
    </>
  );
}