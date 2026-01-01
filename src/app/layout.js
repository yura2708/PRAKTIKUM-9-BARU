'use client' // WAJIB ADA: Agar hook usePathname bisa jalan

import "./globals.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import hook untuk cek URL

// Metadata tidak bisa dipasang di Client Component secara langsung di layout
// Jadi kita hapus export metadata di sini (atau dipindah ke file terpisah),
// tapi untuk latihan ini kita abaikan dulu metadatanya.

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Ambil URL yang sedang aktif

  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        <nav className="p-4 bg-white shadow-md flex gap-4 items-center">
          
          {/* LOGIKA: Jika pathname sama dengan '/', pakai warna Biru. Jika tidak, Abu-abu */}
          <Link 
            href="/" 
            className={pathname === "/" ? "font-bold text-blue-600" : "text-gray-600 hover:text-blue-500"}
          >
            Home
          </Link>

          {/* LOGIKA: Jika pathname diawali '/blog', pakai warna Biru */}
          <Link 
            href="/blog" 
            className={pathname.startsWith("/blog") ? "font-bold text-blue-600" : "text-gray-600 hover:text-blue-500"}
          >
            Blog
          </Link>

          <Link 
            href="/about" 
            className={pathname === "/about" ? "font-bold text-blue-600" : "text-gray-600 hover:text-blue-500"}
          >
            About
          </Link>
        </nav>

        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}