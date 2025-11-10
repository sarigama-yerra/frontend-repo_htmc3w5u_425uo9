import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Rp 1,5 jt',
    description: 'Cocok untuk individu/UMKM yang butuh landing page cepat.',
    features: ['1 Halaman responsif', 'Integrasi formulir', 'Optimasi dasar SEO', 'Deploy gratis'],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 'Rp 3,9 jt',
    description: 'Pilihan terpopuler untuk brand dan startup.',
    features: [
      '3-5 Halaman + blog',
      'Animasi interaktif',
      'Integrasi analitik & CRM',
      'Optimasi performa lanjut',
    ],
    highlighted: true,
  },
  {
    name: 'Pro',
    price: 'Rp 7,5 jt',
    description: 'Untuk kebutuhan kustom dan skala lebih besar.',
    features: [
      'Desain kustom penuh',
      'Komponen premium',
      'Integrasi API/otomasi',
      'Support prioritas',
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Paket Harga</h2>
          <p className="mt-3 text-gray-600">
            Pilih paket yang sesuai dengan tahap pertumbuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`${
                tier.highlighted
                  ? 'ring-2 ring-emerald-500 shadow-emerald-200'
                  : 'ring-1 ring-gray-200'
              } relative rounded-2xl bg-white p-6 shadow-sm`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 right-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  Terpopuler
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-1 text-3xl font-bold text-gray-900">{tier.price}</p>
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  tier.highlighted
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:brightness-110'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Pilih Paket
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
