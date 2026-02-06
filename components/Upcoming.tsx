
import React from 'react';
import { IMAGES } from '../constants';

const Upcoming: React.FC = () => {
  return (
    <section id="upcoming" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-glass border border-amber-500/30 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>

          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={IMAGES.ORIGINAL_SIN_COVER} 
                alt="The Original Sin Cover" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-amber-500 font-bold tracking-widest uppercase text-sm">Release Pending</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-sm font-bold tracking-[0.4em] text-amber-500 uppercase mb-2">Upcoming Single</h2>
              <h3 className="text-3xl font-display font-bold text-slate-100">The Original Sin</h3>
              <p className="text-slate-400 mt-2">Yahweh Music</p>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-slate-100">Divine Revelations through Sound</h4>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Experience the next chapter of Yahweh Music's mission. "The Original Sin" explores the foundational theology of faith through an immersive soundscape of spoken word and haunting AI orchestration.
              </p>
            </div>
            
            <div className="p-8 border-2 border-dashed border-slate-700 rounded-2xl bg-slate-950/50 flex flex-col items-center justify-center min-h-[200px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-slate-500 font-medium tracking-widest uppercase text-xs">Video Premiere Coming Soon</p>
              <p className="text-amber-500/70 mt-2 text-sm italic">Stay Tuned for the Spiritual Experience</p>
            </div>

            <div className="flex justify-center lg:justify-start">
               <button className="px-8 py-3 bg-slate-100 text-slate-950 font-bold rounded-full hover:bg-amber-500 transition-colors tracking-widest uppercase text-sm">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
