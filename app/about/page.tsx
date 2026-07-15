import AboutClient from "./AboutClient"; // Sesuaikan path jika berbeda

// Di sinilah Anda mengatur Title yang dinamis/spesifik untuk halaman ini
export const metadata = {
  title: "About - Magnefico Creative",
  description: "Learn more about Magnefico Creative and our mission to deliver exceptional digital experiences.",
};

export default function AboutPage() {
  // Panggil Client Component di sini
  return <AboutClient />;
}