// components/FadeUp.tsx
"use client"; // Wajib ditambahkan agar Framer Motion bisa bekerja

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number; // Opsional: untuk membuat efek berurutan (stagger)
}

export default function FadeUp({ children, delay = 0 }: FadeUpProps) {
  return (
    <motion.div
      // Kondisi awal (sebelum animasi): transparan dan posisi agak di bawah
      initial={{ opacity: 0, y: 40 }}
      
      // Kondisi akhir (setelah animasi): terlihat jelas dan posisi normal
      animate={{ opacity: 1, y: 0 }}
      
      // Pengaturan transisi
      transition={{
        duration: 0.8, // Durasi dalam detik
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94] // Custom ease curve untuk efek mulus (cubic-bezier)
      }}
    >
      {children}
    </motion.div>
  );
}