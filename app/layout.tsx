import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Magnefico Creative",
  description: "Designing and Building Intelligent Digital Experiences",
  icons: {
    icon: 'web-v2/assets/image/logo.svg', // Referensi ke folder public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="opac-bg overflow-x-hidden text-white font-['Averta-Regular']">
        {children}
      </body>
    </html>
  );
}