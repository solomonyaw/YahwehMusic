
import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-[pulse_8s_infinite]"
        style={{
          backgroundImage: `url(${IMAGES.COVER})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-block px-4 py-1 border border-amber-500/30 rounded-full bg-amber-500/10 text-amber-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
          Technology meets Worship
        </div>
        <h1 className="font-display text-6xl md:text-9xl font-bold mb-4 gold-gradient drop-shadow-2xl">
          Yahweh Music
        </h1>
        <p className="text-xl md:text-3xl italic font-light text-slate-300 mb-8 tracking-wide">
          AI-Powered Gospel Music for God’s Glory
        </p>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Harnessing the cutting-edge power of Artificial Intelligence to magnify the King of Kings, delivering the pure and unadulterated Word of God through transformative soundscapes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#albums" className="w-full sm:w-auto px-10 py-4 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded-full transition-all text-center tracking-widest uppercase">
            Listen Now
          </a>
          <a href="#about" className="w-full sm:w-auto px-10 py-4 border-2 border-slate-700 hover:border-amber-500/50 text-slate-300 hover:text-amber-500 rounded-full transition-all text-center tracking-widest uppercase">
            Our Mission
          </a>
        </div>
      </div>

      {/* Decorative Waveform */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none">
        <div className="flex items-end justify-center gap-1 h-full px-4">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 bg-amber-500 animate-bounce" 
              style={{ 
                height: `${Math.random() * 80 + 20}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${Math.random() * 1 + 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
