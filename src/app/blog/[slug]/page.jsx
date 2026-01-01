// src/app/blog/[slug]/page.jsx
import { posts } from "../../data/posts";// Pastikan import path-nya benar (naik 3 level)

export default async function BlogDetail({ params }) {
  // 1. Ambil slug dari URL (di Next.js 15+, params harus di-await)
  const { slug } = await params;

  // 2. Cari data yang sesuai dengan slug
  const post = posts.find((p) => p.slug === slug);

  // 3. Handle jika data tidak ditemukan
  if (!post) {
    return (
      <div className="text-center text-red-500 mt-10">
        Artikel tidak ditemukan!
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      
      {/* --- INI BAGIAN BARU (TUGAS 2) --- */}
      <div className="text-sm text-gray-500 mb-6 border-b pb-4">
        <span className="font-semibold text-gray-700">Penulis:</span> {post.author} | 
        <span className="font-semibold text-gray-700 ml-1">Tanggal:</span> {post.date}
      </div>
      {/* --------------------------------- */}

      <div className="prose lg:prose-xl text-gray-800 leading-relaxed">
        <p>{post.content}</p>
      </div>

      <div className="mt-10">
        <a href="/blog" className="text-blue-600 hover:underline">
          &larr; Kembali ke Daftar
        </a>
      </div>
    </article>
  );
}