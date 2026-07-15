import WorkClient from "./WorkClient"; // Sesuaikan path jika berbeda

// Di sinilah Anda mengatur Title yang dinamis/spesifik untuk halaman ini
export const metadata = {
  title: "Our Works - Magnefico Creative",
  description: "Explore our portfolio and see how we've helped businesses like yours achieve their goals!",
};

export default function OurWorksPage() {
  // Panggil Client Component di sini
  return <WorkClient />;
}