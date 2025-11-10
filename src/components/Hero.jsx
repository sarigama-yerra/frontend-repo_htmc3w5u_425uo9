import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-950 text-white">
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur">
                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Live 3D • Interactive
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Bangun kehadiran digital yang modern, interaktif, dan berkelas
              </h1>
              <p className="max-w-prose text-base text-gray-300 sm:text-lg">
                Landing page bertema teknologi dengan objek 3D interaktif, animasi halus, dan desain yang
                berfokus pada konversi. Cocok untuk produk, portofolio, atau startup Anda.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#pricing"
                  className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  Lihat Paket Harga
                </a>
                <a
                  href="#contact"
                  className="rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-12"
            >
              <h2 className="mb-3 text-lg font-semibold text-white">Tentang</h2>
              <p className="max-w-xl text-sm leading-relaxed text-gray-300">
                Kami merancang landing page dengan pendekatan desain sistem modern: tipografi apik, grid rapi,
                interaksi halus, dan performa cepat. Fokus kami: menyampaikan nilai produk dengan jelas dan
                mendorong tindakan pengunjung.
              </p>
            </motion.div>
          </div>

          <div className="relative h-[420px] w-full sm:h-[520px] lg:h-[620px]">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/10 to-transparent" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-[0] bg-[radial-gradient(80%_60%_at_10%_10%,rgba(34,197,94,0.08),transparent),radial-gradient(60%_40%_at_90%_10%,rgba(59,130,246,0.08),transparent)]" />
    </section>
  );
};

export default Hero;
