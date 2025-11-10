import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // For this static demo, we only simulate sending.
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
  };

  return (
    <section id="contact" className="relative bg-gray-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mulai Diskusi</h2>
          <p className="mt-3 text-gray-300">Sampaikan kebutuhan Anda—kami akan balas secepatnya.</p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-gray-200">Nama</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none ring-emerald-500/0 transition focus:ring-2"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-200">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none ring-emerald-500/0 transition focus:ring-2"
                  placeholder="email@domain.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-200">Pesan</label>
                <textarea
                  rows="4"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-400 outline-none ring-emerald-500/0 transition focus:ring-2"
                  placeholder="Ceritakan kebutuhan proyek Anda..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:brightness-110 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === 'loading' ? 'Mengirim...' : status === 'success' ? 'Terkirim!' : 'Kirim Pesan'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold">Kenapa memilih kami?</h3>
              <p className="mt-2 text-sm text-gray-300">
                Fokus pada hasil. Kami menggabungkan desain memikat, performa, dan strategi konversi untuk
                menghadirkan landing page yang berdampak.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-semibold">Desain modern</p>
                <p className="text-xs text-gray-300">Tipografi bersih, visual 3D, dan animasi halus.</p>
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-semibold">Siap konversi</p>
                <p className="text-xs text-gray-300">CTA jelas, hierarki informasi tepat.</p>
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-semibold">Integrasi cepat</p>
                <p className="text-xs text-gray-300">CRM, analitik, dan automasi.</p>
              </li>
              <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-semibold">Ramah mobile</p>
                <p className="text-xs text-gray-300">Responsif di semua perangkat.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(16,185,129,0.15),transparent),radial-gradient(30%_20%_at_90%_10%,rgba(59,130,246,0.15),transparent)]" />
    </section>
  );
};

export default Contact;
