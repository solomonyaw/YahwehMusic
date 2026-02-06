
import React from 'react';
import { IMAGES } from '../constants';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 shadow-2xl py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={IMAGES.LOGO} alt="Yahweh Music Logo" className="h-10 md:h-12 w-auto" />
          <span className="hidden md:block font-display text-xl font-bold tracking-wider text-amber-500">YAHWEH MUSIC</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase text-slate-300">
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#creator" className="hover:text-amber-500 transition-colors">Creator</a>
          <a href="#albums" className="hover:text-amber-500 transition-colors">Albums</a>
          <a href="#upcoming" className="hover:text-amber-500 transition-colors">New Release</a>
          <button className="px-6 py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded-full transition-all">
            SUBSCRIBE
          </button>
        </div>

        {/* Mobile Menu Placeholder - Simplified for focus */}
        <button className="lg:hidden text-amber-500 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
