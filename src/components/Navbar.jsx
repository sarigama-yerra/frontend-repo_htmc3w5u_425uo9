import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-gray-900/70 px-4 py-3 text-white backdrop-blur"
        >
          <a href="#home" className="text-sm font-semibold tracking-tight">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Nexus Landing
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white">
              Harga
            </a>
            <a href="#blog" className="text-sm text-gray-300 hover:text-white">
              Blog
            </a>
            <a
              href="#contact"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:brightness-110"
            >
              Hubungi Kami
            </a>
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;
