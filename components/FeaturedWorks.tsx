"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation } from 'swiper/modules';

// Import CSS Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards"; 

import { PortfolioData } from "@/app/page";

interface FeaturedWorksProps {
  portfolios?: PortfolioData[]; 
}

export default function FeaturedWorks({ portfolios = [] }: FeaturedWorksProps) {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  if (!portfolios || portfolios.length === 0) {
    return (
      <section className="bg-[#0b1015] py-20 min-h-[50vh] flex items-center justify-center">
        <p className="text-gray-400 tracking-widest uppercase">No featured works available.</p>
      </section>
    );
  }

  const handleSlideChange = (activeIndex: number) => {
    setIsFading(true);
    setTimeout(() => {
      setDisplayIndex(activeIndex);
      setIsFading(false);
    }, 200);
  };

  const activeProject = portfolios[displayIndex] || portfolios[0];

  return (
    <section className="bg-[#0b1015] py-20 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none z-0"></div>

      <div className="container-box relative z-10 w-full px-4 md:px-10 mx-auto">
        <h2 className="text-[#f3723b] text-xl md:text-2xl uppercase tracking-[0.3em] text-center mb-1 font-['Averta-Bold']">
          FEATURED WORKS
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24 h-auto md:h-[600px]">
          
          {/* --- Swiper Section --- */}
          <div className="relative w-full md:w-5/12 flex justify-center items-center pt-10 pb-6 md:pt-20 md:pb-20 group">
            
            {/* Tombol Kiri Kustom (Menggunakan SVG persis seperti gambar) */}
            <button className="custom-prev-btn absolute left-0 md:-left-4 lg:-left-10 z-20 text-white hover:text-[#f3723b] transition-colors cursor-pointer bg-transparent border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                initialSlide={0}
                centeredSlides={true}
                rewind={true} 
                autoplay={{
                    delay: 3000, 
                    disableOnInteraction: false, 
                }}
                // Hubungkan config ke class custom kita, BUKAN bawaan Swiper
                navigation={{
                  prevEl: '.custom-prev-btn',
                  nextEl: '.custom-next-btn',
                }}
                modules={[EffectCards, Autoplay, Navigation]}
                cardsEffect={{
                    perSlideOffset: 15,  
                    perSlideRotate: 5,   
                    rotate: true,
                    slideShadows: true,  
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
                className="swiper mySwiper w-full max-w-[300px] h-[420px] md:max-w-[350px] md:h-[500px] px-5 md:px-0"
            >
              {portfolios.map((project) => (
                <SwiperSlide
                  key={project.slug} 
                  className="swiper-slide rounded-[30px] overflow-hidden shadow-2xl border border-white/10"
                >
                  <img
                    src={project.main_image_url}
                    className="w-full h-full object-cover justify-center"
                    alt={project.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol Kanan Kustom (Menggunakan SVG persis seperti gambar) */}
            <button className="custom-next-btn absolute right-0 md:-right-4 lg:-right-10 z-20 text-white hover:text-[#f3723b] transition-colors cursor-pointer bg-transparent border-none outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-14 md:h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* --- Project Info Section --- */}
          {activeProject && (
            <div 
              id="project-info" 
              className={`w-full md:w-6/12 text-left px-9 md:px-5 md:pl-10 transition-all duration-200 ease-in-out ${
                isFading ? "opacity-50 translate-y-2.5" : "opacity-100 translate-y-0"
              }`}
            >
              <h1 id="p-title" className="text-white text-5xl md:text-7xl font-bold mb-2 font-['Averta-Bold'] leading-tight">
                {activeProject.title}
              </h1>
              <div className="mb-8">
                <h2 id="p-category" className="text-[#f3723b] text-2xl md:text-3xl font-bold mb-1 font-['Averta-Bold']">
                  {activeProject.categories?.join(", ") || "Project"}
                </h2>
                <h3 id="p-client" className="text-white text-lg md:text-2xl font-['Averta-Regular']">
                  {activeProject.client_name}
                </h3>
                <p id="p-year" className="text-gray-500 text-sm mt-1 font-['Averta-Regular']">
                  {activeProject.year}
                </p>
              </div>
              <p id="p-desc" className="text-gray-400 leading-relaxed max-w-lg mb-10 font-['Averta-Regular'] text-lg min-h-[80px]">
                {activeProject.description || "Explore the details of this featured project."}
              </p>
              
              <Link
                href={`/our-works/${activeProject.slug}`}
                className="btn-outline-primary group inline-flex items-center gap-4 px-8 py-3 border border-white/30 rounded-full text-white text-sm tracking-widest font-bold hover:bg-[#f3723b] hover:border-[#597a9e] hover:text-black transition-all"
              >
                SEE DETAILS
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}