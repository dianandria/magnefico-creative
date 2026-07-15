import ArticleClient from "./ArticleClient"; // Sesuaikan path jika berbeda

// Di sinilah Anda mengatur Title yang dinamis/spesifik untuk halaman ini
export const metadata = {
  title: "Articles - Magnefico Creative",
  description: "Explore our latest articles and insights on digital creativity and innovation.",
};

export default function ArticlePage() {
  // Panggil Client Component di sini
  return <ArticleClient />;
}