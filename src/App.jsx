import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-gray-950 py-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Nexus Landing. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
