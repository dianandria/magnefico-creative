"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullscreenMenuOpen, setIsFullscreenMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Cek apakah ini halaman home
  const isHome = pathname === '/';
  
  const isActive = (path: string) => pathname === path;

  // Fungsi helper untuk menentukan class berdasarkan path aktif (Desktop Menu)
  const getLinkClass = (path: string) => {
    const isLinkActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
    return `text-sm font-bold uppercase tracking-widest transition-colors duration-300 font-averta ${
      isLinkActive ? "text-[#f3723b]" : "text-white hover:text-[#f3723b]"
    }`;
  };

  // Fungsi helper KHUSUS untuk Mobile Menu
  const getMobileLinkClass = (path: string) => {
    const isLinkActive = path === "/" ? pathname === "/" : pathname.startsWith(path);
    return `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-300 ${
      isLinkActive ? "text-[#f3723b]" : "text-white hover:text-[#f3723b]"
    }`;
  };

  // useEffect untuk mendeteksi event scroll pada window
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? isHome
              ? "bg-[url('/web-v2/assets/image/home-bg.png')] bg-cover bg-center border-b border-gray-800 shadow-lg"
              : "opac-bg border-b border-gray-800 shadow-lg" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-5 w-full">
          <div className="flex lg:flex-1">
            <Link href="/" className="p-0.5">
              <span className="sr-only">Magnefico Creative</span>
              <Image src="/web-v2/assets/image/logo.svg" alt="Logo" className="h-10 md:h-14 w-auto" width={56} height={56} />
            </Link>
          </div>

          <div className="flex items-center gap-x-8 md:gap-x-12">
            <div className="hidden lg:flex lg:gap-x-10">
              <Link href="/" className={getLinkClass("/")}>HOME</Link>
              <Link href="/our-works" className={getLinkClass("/our-works")}>WORKS</Link>
              <Link href="/services" className={getLinkClass("/services")}>SERVICE</Link>
              <Link href="/contact" className={getLinkClass("/contact")}>CONTACT</Link>
            </div>

            <div className="pl-0 lg:pl-8 lg:border-l lg:border-white/20 flex items-center">
              <button
                onClick={() => setIsFullscreenMenuOpen(true)}
                className="hidden lg:inline-flex -m-2.5 items-center justify-center rounded-md p-2.5 text-white hover:text-[#f3723b] transition duration-300 cursor-pointer"
              >
                <svg className="size-9" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex lg:hidden -m-2.5 items-center justify-center rounded-md p-2.5 text-white hover:text-[#f3723b] transition duration-300 cursor-pointer"
              >
                <svg className="size-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="relative z-50 lg:hidden">
            <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0b1015] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <Image 
                    src="/web-v2/assets/image/logo.svg" 
                    alt="Logo" 
                    width={100}
                    height={40}
                    className="h-10 md:h-14 w-auto"
                  />
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-200 hover:text-[#f3723b]">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 space-y-2 py-6">
                {/* --- PERUBAHAN DI SINI: Menerapkan getMobileLinkClass dan otomatis tutup menu --- */}
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/")}>HOME</Link>
                <Link href="/our-works" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/our-works")}>WORKS</Link>
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/services")}>SERVICE</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/contact")}>CONTACT</Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/about")}>ABOUT</Link>
                <Link href="/articles" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass("/articles")}>ARTICLES</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* --- Area Fullscreen Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col justify-between transition-opacity duration-500 ease-in-out ${
          isFullscreenMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center"
          style={{ backgroundImage: `url('${process.env.BASE_PATH}/assets/image/home-bg.png')` }}
        ></div>
        <div className="absolute inset-0 z-[-1] bg-black/60"></div>
        <div className="absolute top-0 right-0 p-6 md:p-12 z-20">
          <button
            onClick={() => setIsFullscreenMenuOpen(false)}
            id="close-fullscreen-menu"
            className="text-white hover:text-[#f3723b] transition transform hover:rotate-90 duration-300 cursor-pointer"
          >
            <svg
              className="size-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.0"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center w-full h-full px-4">
          <nav className="flex flex-col items-center justify-center gap-y-6 md:gap-y-12 w-full max-w-6xl mx-auto">
            {/* Baris Pertama */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
              <Link
                href="/"
                onClick={() => setIsFullscreenMenuOpen(false)}
                className={`menu-item group transition-all duration-700 ease-out relative text-3xl md:text-5xl font-['Averta-Regular'] hover:text-white ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8"
                } ${isActive('/') ? "text-white font-bold" : "text-gray-400 font-light"}`}
              >
                Home
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#f3723b] transition-all duration-300 group-hover:w-full ${
                  isActive('/') ? "w-full" : "w-0"
                }`}></span>
              </Link>
              <span
                className={`menu-item transition-all duration-700 ease-out hidden md:block text-gray-600 text-4xl ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-8"
                }`}
              >
                /
              </span>
              <Link
                href="/about"
                onClick={() => setIsFullscreenMenuOpen(false)}
                className={`menu-item group transition-all duration-700 ease-out relative text-3xl md:text-5xl font-['Averta-Regular'] hover:text-white ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"
                } ${isActive('/about') ? "text-white font-bold" : "text-gray-400 font-light"}`}
              >
                About
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#f3723b] transition-all duration-300 group-hover:w-full ${
                  isActive('/about') ? "w-full" : "w-0"
                }`}></span>
              </Link>
              <span
                className={`menu-item transition-all duration-700 ease-out hidden md:block text-gray-600 text-4xl ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"
                }`}
              >
                /
              </span>
              <Link
                href="/our-works"
                onClick={() => setIsFullscreenMenuOpen(false)}
                className={`menu-item group transition-all duration-700 ease-out relative text-3xl md:text-5xl font-['Averta-Regular'] hover:text-white ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8"
                } ${isActive('/our-works') ? "text-white font-bold" : "text-gray-400 font-light"}`}
              >
                Work
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#f3723b] transition-all duration-300 group-hover:w-full ${
                  isActive('/our-works') ? "w-full" : "w-0"
                }`}></span>
              </Link>
            </div>

            {/* Baris Kedua */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
              <Link
                href="/services"
                onClick={() => setIsFullscreenMenuOpen(false)}
                className={`menu-item group transition-all duration-700 ease-out relative text-3xl md:text-5xl font-['Averta-Regular'] hover:text-white ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"
                } ${isActive('/services') ? "text-white font-bold" : "text-gray-400 font-light"}`}
              >
                Service
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#f3723b] transition-all duration-300 group-hover:w-full ${
                  isActive('/services') ? "w-full" : "w-0"
                }`}></span>
              </Link>
              <span
                className={`menu-item transition-all duration-700 ease-out hidden md:block text-gray-600 text-4xl ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"
                }`}
              >
                /
              </span>
              <Link
                href="/articles"
                onClick={() => setIsFullscreenMenuOpen(false)}
                className={`menu-item group transition-all duration-700 ease-out relative text-3xl md:text-5xl font-['Averta-Regular'] hover:text-white ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8"
                } ${isActive('/articles') ? "text-white font-bold" : "text-gray-400 font-light"}`}
              >
                Articles
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#f3723b] transition-all duration-300 group-hover:w-full ${
                  isActive('/articles') ? "w-full" : "w-0"
                }`}></span>
              </Link>
              <span
                className={`menu-item transition-all duration-700 ease-out hidden md:block text-gray-600 text-4xl ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8"
                }`}
              >
                /
              </span>
              <Link
                href="/contact"
                onClick={() => setIsFullscreenMenuOpen(false)}
                className={`menu-item group transition-all duration-700 ease-out relative text-3xl md:text-5xl font-['Averta-Regular'] hover:text-white ${
                  isFullscreenMenuOpen ? "opacity-100 translate-y-0 delay-600" : "opacity-0 translate-y-8"
                } ${isActive('/contact') ? "text-white font-bold" : "text-gray-400 font-light"}`}
              >
                Contact
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-[#f3723b] transition-all duration-300 group-hover:w-full ${
                  isActive('/contact') ? "w-full" : "w-0"
                }`}></span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}