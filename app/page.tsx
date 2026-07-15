"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import PartnersMarquee from "@/components/PartnersMarquee";
import VideoSection from "@/components/VideoSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

// Interface
export interface SettingsData {
  hero_image: string;
  hero_title: string;
  hero_subtitle: string;
  home_video: string;
  home_video_title: string;
  cta_title: string;
  cta_subtitle: string;
  contact_email: string;
  footer_copyright: string;
}

export interface ClientData {
  id: number;
  name: string;
  logo_path: string;
  is_active: string;
  sort_order: string;
  logo_url: string;
}

export interface PortfolioData {
  id?: number; // Optional, just in case the API doesn't return an ID
  title: string;
  description: string | null;
  client_name: string;
  year: string;
  main_image_url: string;
  categories: string[];
  slug: string;
  is_featured: boolean;
}

export default function Home() {
  const [settings, setSettings] = useState<SettingsData | null>(null);
  const [clients, setClients] = useState<ClientData[]>([]);
  const [portfolios, setPortfolios] = useState<PortfolioData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

        if (!baseUrl || !apiKey) {
          console.warn("API URL atau API Key belum di-set di file .env");
          return;
        }

        const headers = {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        };

        // Fetch settings and clients simultaneously for better performance
        const [settingsRes, clientsRes, portfoliosRes] = await Promise.all([
          fetch(`${baseUrl}/settings`, { method: "GET", headers }),
          fetch(`${baseUrl}/clients`, { method: "GET", headers }),
          fetch(`${baseUrl}/portfolios?is_featured=1`, { method: "GET", headers })
        ]);

        const settingsResult = await settingsRes.json();
        const clientsResult = await clientsRes.json();
        const portfoliosResult = await portfoliosRes.json();

        // setting
        if (settingsResult.success) {
          setSettings(settingsResult.data);
        }
        
        // client
        if (clientsResult.success) {
          // Filter to only include active clients if needed, and sort them
          const activeClients = clientsResult.data
            .filter((c: ClientData) => c.is_active === "1")
            .sort((a: ClientData, b: ClientData) => Number(a.sort_order) - Number(b.sort_order));
            
          setClients(activeClients);
        }

        // portfolio
        if (portfoliosResult.success) {
          setPortfolios(portfoliosResult.data);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Tampilkan PageLoader selama data masih di-fetch
  if (isLoading) {
    return <PageLoader />;
  }

  // Opsional: Jika gagal fetch data, cegah error dengan me-render null atau UI fallback
  if (!settings) {
    return null; 
  }
  return (
    <>
      <PageLoader />
      <Navbar />
      <main
        id="main-content"
        className="transition-all duration-700 ease-out min-h-screen"
      >
        
        <Hero data={settings} clients={clients} />
        {/* <PartnersMarquee /> */}
        <VideoSection data={settings} />
        <FeaturedWorks portfolios={portfolios} />
        <Expertise />
      </main>
      <Footer />
    </>
  );
}