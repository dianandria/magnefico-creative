import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import FadeUp from "@/components/FadeUp";

// 1. Definisikan Interface sesuai response API
interface NavigationNode {
  title: string;
  slug: string;
}

interface RelatedProject {
  title: string;
  slug: string;
  category_name: string;
  main_image_url: string | null;
}

interface PortfolioDetail {
  id: number;
  title: string;
  client_name: string;
  year: string;
  description: string | null;
  slug: string;
  is_featured: boolean;
  sort_order: string;
  main_image_url: string;
  image_gallery_urls: string[];
  navigation?: {
    prev: NavigationNode | null;
    next: NavigationNode | null;
  };
  related_projects?: RelatedProject[];
  categories: string[];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface WorkDetailClientProps {
  slug: string;
}

export default async function WorkDetail({ slug }: WorkDetailClientProps) {
//   const { slug } = slug;

  // 2. Fetch Data dari API
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  let detail: PortfolioDetail | null = null;

  try {
    const response = await fetch(`${baseUrl}/portfolios/${slug}`, {
      method: "GET",
      headers: {
        "x-api-key": apiKey as string,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    const result = await response.json();

    if (result.success && result.data) {
      detail = result.data;
    }
  } catch (error) {
    console.error("Error fetching detail:", error);
  }

  // 3. Jika data tidak ditemukan, alihkan ke halaman 404
  if (!detail) {
    notFound();
  }

  return (
    <>
      <PageLoader />
      <div className="opac-bg min-h-screen bg-[#0b1015]">
        <Navbar />
        
        <FadeUp delay={0.4}>
          {/* --- Bagian Hero & Detail --- */}
          <main className="gm-detail-hero">
            <div className="gm-detail-header">
              <h1 className="hero-heading text-white">{detail.title}</h1>
              <p className="gm-detail-subtitle">
                Designing promotion needs for annual computer exhibitions in Bandung.
              </p>
            </div>

            <div className="gm-detail-grid">
              <div className="gm-detail-desc-col">
                {detail.description ? (
                  <div 
                    className="gm-detail-desc-text"
                    dangerouslySetInnerHTML={{ __html: detail.description }} 
                  />
                ) : (
                  <>
                    <p className="gm-detail-desc-text">
                      Together with APKOM and Toast event organizer, we are designing their promotion needs for their annual computer exhibitions. The design work include Banner in different sizes, ticket, gate design, and much more.
                    </p>
                    <p className="gm-detail-desc-text">
                      Our goal was to create an energetic, tech-forward visual identity that draws attention and drives attendance across various demographic segments.
                    </p>
                  </>
                )}

                <Link href="#" className="gm-btn-visit">
                  Visit Website
                  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>

              <div className="gm-detail-meta-col">
                <ul className="gm-meta-list">
                  <li className="gm-meta-item">
                    <span className="gm-meta-label">Client</span>
                    <span className="gm-meta-value">{detail.client_name}</span>
                  </li>
                  <li className="gm-meta-item">
                    <span className="gm-meta-label">Workscope</span>
                    <span className="gm-meta-value highlight">{detail.categories?.join(', ')}</span>
                  </li>
                  {/* <li className="gm-meta-item">
                    <span className="gm-meta-label">Industry</span>
                    <span className="gm-meta-value">Technology / Event</span>
                  </li> */}
                  <li className="gm-meta-item">
                    <span className="gm-meta-label">Year</span>
                    <span className="gm-meta-value">{detail.year}</span>
                  </li>
                </ul>
              </div>
            </div>
          </main>

          {/* --- Bagian Galeri Gambar --- */}
          <section className="gm-detail-gallery">
            <div className="gm-gallery-full">
              <img 
                src={detail.main_image_url || "/assets/image/detail4.png"} 
                alt={`${detail.title} Banner Promotion`} 
              />
            </div>

            {detail.image_gallery_urls && detail.image_gallery_urls.length > 0 ? (
              <>
                {detail.image_gallery_urls.length > 0 && (
                  <div className="gm-gallery-highlight">
                    <div className="gm-gallery-highlight-grid">
                      <div className="gm-gallery-highlight-col">
                        <img src={detail.image_gallery_urls[0]} alt="Gallery 1" />
                      </div>
                      {detail.image_gallery_urls[1] && (
                        <div className="gm-gallery-highlight-col offset">
                          <img src={detail.image_gallery_urls[1]} alt="Gallery 2" />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {detail.image_gallery_urls[2] && (
                  <div className="gm-gallery-single">
                    <img src={detail.image_gallery_urls[2]} alt="Gallery 3" />
                  </div>
                )}

                {detail.image_gallery_urls.length > 3 && (
                  <div className="gm-gallery-stacked">
                    {detail.image_gallery_urls.slice(3, 5).map((url, idx) => (
                      <img key={idx} src={url} alt={`Gallery Stacked ${idx + 1}`} />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {/* <div className="gm-gallery-highlight">
                  <div className="gm-gallery-highlight-grid">
                    <div className="gm-gallery-highlight-col">
                      <img src="/assets/image/detail1.png" alt="Poster 1" />
                    </div>
                    <div className="gm-gallery-highlight-col offset">
                      <img src="/assets/image/detail2.png" alt="Poster 2" />
                    </div>
                  </div>
                </div>

                <div className="gm-gallery-single">
                  <img src="/assets/image/detail3.png" alt="Poster 3" />
                </div>

                <div className="gm-gallery-stacked">
                  <img src="/assets/image/detail5.png" alt="Banner 2" />
                  <img src="/assets/image/detail6.png" alt="Banner 3" />
                </div> */}
              </>
            )}
          </section>

          {/* --- Bagian Proyek Terkait (Data Dinamis) --- */}
          {detail.related_projects && detail.related_projects.length > 0 && (
            <section className="gm-related-section mt-16 pt-16 pb-20 border-t border-white/10">
              <div className="gm-related-container mx-auto max-w-[1200px] px-[20px]">
                <h3 className="gm-related-title text-2xl text-white font-bold mb-8">
                  Related Projects
                </h3>
                
                {/* Ubah di sini: gunakan gap-1.5 (6px) atau gap-2 (8px) untuk jarak yang sangat tipis */}
                <div className="gm-related-grid grid grid-cols-1 md:grid-cols-3 gap-1.5 md:gap-2">
                  
                  {detail.related_projects.map((project, index) => (
                    <Link 
                      href={`/our-works/${project.slug}`} 
                      key={index} 
                      className="works-portfolio-card group relative block overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[4/3] bg-white/5"
                    >
                      {/* Gambar Background */}
                      <img 
                        src={project.main_image_url || "/assets/image/placeholder.png"} 
                        alt={project.title} 
                        className="works-card-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      
                      {/* Gradien gelap di bagian bawah */}
                      <div className="works-card-overlay absolute inset-0 bg-gradient-to-t from-[#0b1015]/90 via-[#0b1015]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                      
                      {/* Konten Teks di Kiri Bawah */}
                      <div className="works-card-content absolute bottom-0 left-0 p-6 sm:p-8 z-10 transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-[10px] sm:text-xs text-white/80 font-bold tracking-[0.2em] uppercase mb-1 sm:mb-2 block drop-shadow-md">
                          {project.category_name}
                        </span>
                        {/* Jika ingin judulnya tidak muncul kecuali saat di-hover (seperti gambar Erin), 
                            Anda bisa menambahkan class penyesuaian opasitas di baris bawah ini */}
                        <h4 className="works-card-title text-lg sm:text-xl font-bold text-white drop-shadow-md transition-opacity duration-300">
                          {project.title}
                        </h4>
                      </div>
                    </Link>
                  ))}

                </div>
              </div>
            </section>
          )}

          {/* --- Bagian Pagination (Data Dinamis) --- */}
          <div className="gm-pagination-section">
            <div className="gm-pagination-container">
              {/* Tombol Prev */}
              {detail.navigation?.prev ? (
                <Link href={`/our-works/${detail.navigation.prev.slug}`} className="gm-page-link left group">
                  <span className="gm-page-label">Prev Project</span>
                  <span className="gm-page-title">&larr; {detail.navigation.prev.title}</span>
                </Link>
              ) : (
                <div className="gm-page-link left"></div> // Placeholder untuk menjaga layout flexbox
              )}

              {/* Tombol Next */}
              {detail.navigation?.next ? (
                <Link href={`/our-works/${detail.navigation.next.slug}`} className="gm-page-link right group">
                  <span className="gm-page-label">Next Project</span>
                  <span className="gm-page-title">{detail.navigation.next.title} &rarr;</span>
                </Link>
              ) : (
                <div className="gm-page-link right"></div> // Placeholder untuk menjaga layout flexbox
              )}
            </div>
          </div>
        </FadeUp>

      </div>
      <Footer />
    </>
  );
}