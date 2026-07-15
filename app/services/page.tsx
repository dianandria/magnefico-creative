import ServicesClient from "./ServicesClient"; // Sesuaikan path jika berbeda

// Di sinilah Anda mengatur Title yang dinamis/spesifik untuk halaman ini
export const metadata = {
  title: "Services - Magnefico Creative",
  description: "Explore our range of creative services and discover how we can help bring your vision to life!",
};

export default function ServicesPage() {
  // Panggil Client Component di sini
  return <ServicesClient />;
}