"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading screen hilang setelah komponen di-mount
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0b1015] flex items-center justify-center transition-opacity duration-500 ease-out">
      <Image
        src="/web-v2/assets/image/logo.svg"
        alt="Magnefico Loading"
        className="w-24 md:w-32 h-auto animate-pulse"
        width={128}
        height={128}
      />
    </div>
  );
}