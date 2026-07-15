import { Metadata } from "next";
import ArticleDetailClient from "./ArticleDetailClient";

// 1. Ubah tipe params menjadi Promise (Untuk Next.js 15+)
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // 2. Tambahkan await untuk mengekstrak nilai params
  const resolvedParams = await params; 
  
  // 3. Beri fallback string kosong ('') untuk berjaga-jaga jika slug tetap undefined
  const slug = resolvedParams?.slug || ""; 

  // Sekarang .split() aman digunakan
  const formattedTitle = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle || 'Article'} - Magnefico Creative`,
    description: `Read more about ${formattedTitle}.`,
  };
}

// Lakukan hal yang sama (await params) di komponen utama Anda
export default async function ArticleDetailPage({ params }: PageProps) {
  // const resolvedParams = await params;
  // const slug = resolvedParams?.slug || "";
  const { slug } = await params;

  return (
    <main>
      {/* <h1>Detail Halaman: {slug}</h1> */}
      <ArticleDetailClient />
    </main>
  );
}