import { SettingsData, ClientData } from "../app/page"; // Adjust import path based on where Home is located
import Link from "next/link";
import FadeUp from '@/components/FadeUp';

interface HeroProps {
  data: SettingsData;
  clients: ClientData[];
}

export default function Hero({ data, clients }: HeroProps) {
  return (
    <div
      className="hero-bg relative isolate min-h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat overflow-hidden pt-32 lg:pt-24"
    >
        <FadeUp delay={0.2}>
          <div
            className="container-box flex flex-col-reverse lg:flex-row py-12 lg:py-20 gap-10 lg:gap-0 items-center"
          >
            <div className="w-full lg:w-1/2 text-left z-10 lg:pr-10 px-6 mb:px-12">
              <h1 className="hero-heading text-white mb-6 leading-tight">
                {data.hero_title}
              </h1>
              <p
                className="hero-sub-heading text-gray-200 mb-10 leading-relaxed text-lg lg:text-xl"
              >
                {data.hero_subtitle}
              </p>
              <div className="flex items-center gap-x-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-4 px-8 py-3 border border-white/30 rounded-full text-white text-sm tracking-widest font-bold hover:bg-[#f3723b] hover:border-[#597a9e] hover:text-black transition-all group"
                >
                  KNOW US BETTER
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
              <div className="relative w-[350px] aspect-[3/4] overflow-hidden rounded-[999px] shadow-2xl">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover object-center"
                >
                  <source src={data.hero_image} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="w-full mt-auto pb-10 overflow-hidden">
              <h2 className="text-[#f3723b] text-xl md:text-2xl uppercase tracking-[0.3em] text-center mb-12 md:mb-5 font-['Averta-Bold'] mt-5">
                  PARTNERS & CLIENTS
              </h2>

              <div className="container-box">
                  {/* Wrapper utama: flex dan overflow-hidden agar sejajar dan yang keluar batas terpotong */}
                  <div className="carousel relative flex w-full overflow-hidden group">
                  
                  {/* Group 1: berjalan dari kanan ke kiri */}
                  <div className="flex animate-marquee shrink-0 items-center justify-around gap-12 px-6 min-w-full">
                    {clients.map((client) => (
                      <div key={`g1-${client.id}`} className="w-24 md:w-32 flex justify-center">
                        <img 
                          src={client.logo_url}
                          alt={client.name}
                          className="w-[100px] h-[100px]" />
                      </div>
                    ))}
                  </div>

                  {/* Group 2 (Clone): untuk ilusi berulang tanpa jeda */}
                  <div aria-hidden="true" className="flex animate-marquee shrink-0 items-center justify-around gap-12 px-6 min-w-full">
                    {clients.map((client) => (
                      <div key={`g2-${client.id}`} className="w-24 md:w-32 flex justify-center">
                        <img 
                          src={client.logo_url}
                          alt={client.name}
                          className="w-[100px] h-[100px]" />
                      </div>
                    ))}
                  </div>

                  </div>
                </div>
          </div>
        </FadeUp>
    </div>
  );
}