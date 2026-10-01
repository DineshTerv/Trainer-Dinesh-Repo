import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Colleges from './components/Colleges';
import Projects from './components/Projects';
import DSA from './components/DSA';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PosterModal from './components/PosterModal';
import CertModal from './components/CertModal';

export default function App() {
  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  // Scroll reveal observer
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleOpenCert = (src, title, subtitle) => {
    setActiveCert({ src, title, subtitle });
  };

  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience onOpenPoster={() => setIsPosterOpen(true)} />
        <Colleges />
        <Projects />
        <DSA />
        <Certifications onOpenCert={handleOpenCert} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Lightbox Modals */}
      <PosterModal isOpen={isPosterOpen} onClose={() => setIsPosterOpen(false)} />
      <CertModal certData={activeCert} onClose={() => setActiveCert(null)} />
    </div>
  );
}
