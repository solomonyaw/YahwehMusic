
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-100 mb-6">Join the Community</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
          Be the first to hear new AI-generated worship sessions, teaching devotionals, and updates from Solomon Yaw Adeklo. 
          No spam, just Spirit-filled content.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="flex-1 bg-slate-900 border border-slate-800 rounded-full px-8 py-4 text-slate-200 focus:outline-none focus:border-amber-500 transition-all shadow-inner"
            required
          />
          <button 
            type="submit"
            className="px-10 py-4 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold rounded-full transition-all tracking-widest uppercase text-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        
        <p className="mt-8 text-slate-600 text-sm italic">
          "Sing unto him, sing psalms unto him: talk ye of all his wondrous works." — 1 Chronicles 16:9
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
