"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import FadeUp from "@/components/FadeUp";

interface ArticleDetail {
  id: number;
  title: string;
  slug: string;
  category: string;
  author_name: string;
  published_date: string;
  image_path: string;
  content: string;
  is_active: boolean;
  sort_order: string;
  created_at: string;
  updated_at: string;
  image_url: string;
}

interface NextRead {
  title: string;
  slug: string;
}

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [article, setArticle] = useState<ArticleDetail | null>(null);
  const [nextRead, setNextRead] = useState<NextRead | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticleDetail = async () => {
      setIsLoading(true);
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

        const response = await fetch(`${baseUrl}/articles/${slug}`, {
          method: "GET",
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (result.success && result.data) {
          setArticle(result.data.article);
          setNextRead(result.data.next_read);
        }
      } catch (error) {
        console.error("Error fetching article detail:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchArticleDetail();
    }
  }, [slug]);

  // Format tanggal: FEB 18, 2026
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options).toUpperCase();
  };

  if (isLoading) {
    return (
      <>
        <PageLoader />
        <Navbar />
        {/* Background warna presisi menyesuaikan gambar */}
        <main className="min-h-screen bg-[#10141d] pt-40 pb-20 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </main>
        <Footer />
      </>
    );
  }

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen opac-bg pt-40 pb-20 flex justify-center items-center text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link href="/articles" className="text-orange-500 hover:text-white transition-colors">
              Return to Insights
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* Main Wrapper: Warna background biru sangat gelap persis gambar */}
      <FadeUp>
        <main className="min-h-screen bg-[#10141d] pt-32 pb-24 animate-fade-in-up font-['Averta-Regular']">
          
          {/* Kontainer Lebar untuk Header & Tombol Back (max-w-[1100px]) */}
          <div className="mx-auto max-w-[1200px]">
            
            {/* Tombol Back */}
            <div className="container-box mb-10">
              <Link href="/articles" className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-fit group">
                <div className="p-1.5 border border-gray-700 rounded-full group-hover:border-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                </div>
                <span className="font-bold text-[11px] tracking-[0.15em] uppercase">Back</span>
              </Link>
            </div>

            {/* Hero Detail Article */}
            <section className="container-box mb-20">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                  
                  <div className="w-full lg:w-5/12">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                      src={article.image_url} 
                      alt={article.title} 
                      className="w-full h-full object-cover" 
                      />
                  </div>
                  </div>

                  <div className="w-full lg:w-7/12 flex flex-col justify-center">
                  <div className="mb-6">
                      <span className="article-tag">{article.category}</span>
                  </div>

                  <h1 className="article-hero-title">
                      {article.title}
                  </h1>

                  <div className="flex items-center gap-12 text-sm text-gray-400 font-bold tracking-wider uppercase border-t border-gray-800 pt-8 w-full">
                      <div>
                      <span className="meta-label">Date</span>
                      {formatDate(article.published_date)}
                      </div>
                      <div>
                      <span className="meta-label">Author</span>
                      {article.author_name}
                      </div>
                      
                      {/* <div className="ml-auto flex gap-4">
                        <a href="#" className="hover:text-white transition">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#" className="hover:text-white transition">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                      </div> */}
                  </div>
                  </div>
                  
              </div>
            </section>
          </div>

          {/* Kontainer Artikel: Dibuat lebih sempit (max-w-[840px]) untuk Readability */}
          <section className="container-box">
            <div className="max-w-4xl mx-auto border-t border-gray-800 pt-16">
              <article 
                className="
                  w-full 
                  text-[#cbd5e1] /* gray-300 yang kalem */
                  text-[15px] md:text-[16px] 
                  leading-[1.8] md:leading-[1.9]
                  
                  /* Styling Paragraf */
                  [&>p]:mb-7 
                  
                  /* Styling H2 */
                  [&>h2]:text-[24px] md:[&>h2]:text-[28px] 
                  [&>h2]:font-['Averta-Bold'] 
                  [&>h2]:text-white 
                  [&>h2]:mt-12 
                  [&>h2]:mb-4 
                  
                  /* Styling H3 */
                  [&>h3]:text-[18px] md:[&>h3]:text-[20px] 
                  [&>h3]:font-['Averta-Bold'] 
                  [&>h3]:text-white 
                  [&>h3]:mt-10 
                  [&>h3]:mb-3 
                  
                  /* Styling Lists */
                  [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-8 [&>ul>li]:mb-2 [&>ul>li]:pl-1
                  [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-8 [&>ol>li]:mb-5 [&>ol>li]:pl-1
                  
                  /* Styling tag Bold di List (sebagai sub-judul) */
                  [&_strong]:text-white 
                  [&_strong]:font-['Averta-Bold'] 
                  [&_ol>li>strong]:block 
                  [&_ol>li>strong]:mb-1 
                  [&_ol>li>strong]:text-[17px]
                  
                  /* Hack untuk mengubah style Paragraf yang berisi Quote dari Steve Jobs (opsional) */
                  [&>p:nth-last-of-type(2)]:border-l-2
                  [&>p:nth-last-of-type(2)]:border-[#f97316]
                  [&>p:nth-last-of-type(2)]:pl-5
                  [&>p:nth-last-of-type(2)]:italic
                  [&>p:nth-last-of-type(2)]:text-white
                  
                  [&_a]:text-[#f97316] hover:[&_a]:text-orange-400 [&_a]:underline
                "
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </section>

          {/* Kontainer Bawah Next Read (Kembali lebar) */}
          {nextRead && (
            <section className="mx-auto max-w-[1100px] px-6 mt-20 pt-10 border-t border-gray-800">
              <div className="flex justify-end">
                <div className="text-right max-w-[450px]">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase block mb-4">
                    NEXT READ
                  </span>
                  <h4 className="text-[22px] md:text-[26px] font-['Averta-Bold'] text-white leading-[1.3] mb-8">
                    {nextRead.title}
                  </h4>
                  <Link 
                    href={`/articles/${nextRead.slug}`} 
                    className="inline-block border border-gray-500 text-white text-[11px] font-bold tracking-[0.15em] uppercase rounded-full px-8 py-3.5 transition-all duration-300 hover:border-[#f97316] hover:bg-[#f97316] hover:text-white"
                  >
                    READ ARTICLE
                  </Link>
                </div>
              </div>
            </section>
          )}

        </main>
      </FadeUp>

      <Footer />
    </>
  );
}