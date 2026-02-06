
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold gold-gradient inline-block">The Vision</h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Yahweh Music is a pioneering gospel music platform dedicated exclusively to glorifying God through the innovative application of Artificial Intelligence.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-600/20 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-200">Uncompromised Truth</h4>
                  <p className="text-slate-400">Our mission is to spread God’s Word without compromise, ensuring every lyric and melody aligns with the purity of the Gospel.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-600/20 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-200">Digital Evangelism</h4>
                  <p className="text-slate-400">We utilize technology as a tool for modern ministry, creating spoken word, teaching-inspired albums, and soulful worship for a digital age.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-600/20 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-200">Innovative Worship</h4>
                  <p className="text-slate-400">Breaking boundaries by blending AI-generated soundscapes with timeless faith traditions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl">
              <div className="aspect-square flex flex-col justify-center items-center text-center p-6 space-y-6">
                <div className="w-20 h-20 bg-amber-600/10 flex items-center justify-center rounded-full border border-amber-600/30">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-amber-500">Pure Word. Modern Reach.</h3>
                <p className="text-slate-400 font-light">
                  "Go ye into all the world, and preach the gospel to every creature." — Mark 16:15
                </p>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                <p className="text-sm text-slate-500 italic">Yahweh Music is the fruit of technology used in obedience to the Divine call.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
