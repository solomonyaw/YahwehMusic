
import React from 'react';
import { IMAGES, SOCIAL_LINKS } from '../constants';

const Creator: React.FC = () => {
  return (
    <section id="creator" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-100 mb-4">About the Creator</h2>
          <div className="h-1 w-20 bg-amber-600 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="absolute inset-0 border-4 border-amber-500/30 rounded-3xl rotate-6"></div>
            <div className="absolute inset-0 border-4 border-slate-700/50 rounded-3xl -rotate-3 transition-transform hover:rotate-0"></div>
            <img 
              src={IMAGES.CREATOR_AVATAR} 
              alt="Solomon Yaw Adeklo" 
              className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h3 className="text-3xl font-display font-bold text-amber-500">Solomon Yaw Adeklo</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Solomon Yaw Adeklo is a software developer, AI enthusiast, and visionary graduate of Valley View University with a fervent heart for God's work. As the Co-Founder of 
              <a href={SOCIAL_LINKS.HANDBILL} target="_blank" rel="noreferrer" className="text-amber-500 hover:underline mx-1">Handbill</a>, 
              he applies cutting-edge innovation to address real-world challenges.
            </p>
            <p className="text-slate-400 leading-relaxed italic">
              "Inspired and instructed by the Holy Spirit, I embraced Artificial Intelligence not just as a tool, but as a medium for ministry. Through Yahweh Music, we seek to transcend boundaries and reach souls with the unadulterated Word of God through the beauty of technology."
            </p>
            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href={SOCIAL_LINKS.GITHUB} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg hover:border-amber-500 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Profile
              </a>
              <a 
                href={SOCIAL_LINKS.HANDBILL} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg hover:border-amber-500 transition-colors"
              >
                Explore Handbill
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;
