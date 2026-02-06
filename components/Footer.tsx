
import React from 'react';
import { IMAGES, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img src={IMAGES.LOGO} alt="Yahweh Music" className="h-12" />
            <p className="text-slate-500 text-sm leading-relaxed">
              Using technology to glorify God. Yahweh Music is a ministry dedicated to spreading the unadulterated Word of God through AI-powered worship.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Ministry</a></li>
              <li><a href="#creator" className="hover:text-amber-500 transition-colors">About Solomon</a></li>
              <li><a href="#albums" className="hover:text-amber-500 transition-colors">Music Archive</a></li>
              <li><a href="#upcoming" className="hover:text-amber-500 transition-colors">New Release</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Devotionals</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Spoken Word</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">AI Process</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold uppercase tracking-widest text-sm mb-6">Mission</h4>
            <p className="text-slate-500 text-sm italic font-light">
              "To spread the pure and unadulterated Word of God using every tool available for creative expression in obedience to His calling."
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Yahweh Music. Created by <span className="text-slate-400">Solomon Yaw Adeklo</span>.
          </p>
          <p className="text-slate-600 text-xs tracking-widest uppercase">
            Soli Deo Gloria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
