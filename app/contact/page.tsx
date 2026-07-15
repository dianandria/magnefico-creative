import ContactClient from "./ContactClient"; // Sesuaikan path jika berbeda

// Di sinilah Anda mengatur Title yang dinamis/spesifik untuk halaman ini
export const metadata = {
  title: "Contact - Magnefico Creative",
  description: "Have a project in mind? Have a chat with us and we will try to give our best input!",
};

export default function ContactPage() {
  // Panggil Client Component di sini
  return <ContactClient />;
}