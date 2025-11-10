import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Tren Desain Web 2025',
    excerpt:
      'Dari glassmorphism ke skeuomorphism modern—bagaimana memilih gaya yang sesuai brand Anda.',
    tag: 'Desain',
  },
  {
    title: 'Meningkatkan Konversi dengan Micro-interactions',
    excerpt:
      'Interaksi kecil yang berdampak besar pada pengalaman pengguna dan penjualan.',
    tag: 'UX',
  },
  {
    title: 'Checklist Performa untuk Landing Page Cepat',
    excerpt:
      'Audit sederhana yang bisa Anda lakukan untuk memangkas waktu muat hingga 40%.',
    tag: 'Performance',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="relative bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wawasan & Blog</h2>
          <p className="mt-3 text-gray-600">Tips singkat untuk meningkatkan pengalaman dan konversi.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-gray-200"
            >
              <span className="inline-flex rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                {post.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <span className="mt-3 inline-block text-sm font-semibold text-emerald-700 group-hover:text-emerald-600">
                Baca selengkapnya →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
