"use client";

import { usePathname } from "next/navigation";
import Link from "next/link"; // Next.js highly recommends using <Link> instead of <a>

export default function Footer() {
  const pathname = usePathname(); // Get the current URL path

  return (
    <footer className="footer-wrapper">
        <div
          className="container-box flex flex-col md:flex-row justify-between gap-12"
        >
          <div className="flex flex-col space-y-6 md:w-2/3">
            <h2 className="footer-title">
              Ready to work with us ?
            </h2>
            <p className="text-gray-500 text-sm font-['Averta-Regular']">
              Level up your business with us!
            </p>
            <Link
              href="/contact"
              className="inline-block w-fit px-6 py-3 border border-gray-500 text-white hover:bg-gray-800 transition duration-300 rounded-md font-['Averta-Regular']"
              >CONTACT US</Link>
            <p className="text-xs text-gray-600 mt-8 pt-4 font-['Averta-Regular']">
              @Copyright Magnefico Creative 2026<br />All rights reserved.
            </p>
          </div>

          <div className="flex flex-col space-y-4 md:w-1/3 font-['Averta-Bold']">
            <h3
              className="footer-heading"
            >
              MENU
            </h3>
            <Link
              href="/"
              className={`footer-link transition duration-300 ${
                pathname === "/" ? " text-white" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`footer-link transition duration-300 ${
                pathname === "/about" ? " text-white" : ""
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/our-works"
              className={`footer-link transition duration-300 ${
                pathname === "/our-works" ? " text-white" : ""
              }`}
            >
              WORKS
            </Link>
            <Link
              href="/services"
              className={`footer-link transition duration-300 ${
                pathname === "/services" ? " text-white" : ""
              }`}
            >
              SERVICE
            </Link>
            <Link
              href="/articles"
              className={`footer-link transition duration-300 ${
                pathname === "/articles" ? " text-white" : ""
              }`}
            >
              ARTICLES
            </Link>
            <Link
              href="/contact"
              className={`footer-link transition duration-300 ${
                pathname === "/contact" ? " text-white" : ""
              }`}
            >
              CONTACT
            </Link>
          </div>

          <div className="flex flex-col space-y-4 md:w-1/3 font-['Averta-Bold']">
            <h3
              className="footer-heading"
            >
              SOCIAL
            </h3>
            <a href="https://www.instagram.com/magnefico.creative" target="_blank" className="footer-link transition duration-300"
              >INSTAGRAM</a>
            <a href="#" className="footer-link transition duration-300"
              >TIKTOK</a>
          </div>
        </div>
      </footer>
  );
}