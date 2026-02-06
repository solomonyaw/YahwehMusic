
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Creator from './components/Creator';
import Albums from './components/Albums';
import Upcoming from './components/Upcoming';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-amber-500/30">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Creator />
        <Albums />
        <Upcoming />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
