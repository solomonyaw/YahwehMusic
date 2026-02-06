
import React from 'react';
import { ALBUMS } from '../constants';

const Albums: React.FC = () => {
  return (
    <section id="albums" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold gold-gradient">Albums by Yahweh Music</h2>
          <p className="mt-4 text-slate-400 tracking-widest uppercase text-sm">Three Collections Released for His Glory</p>
        </div>

        <div className="space-y-32">
          {ALBUMS.map((album, index) => (
            <div key={album.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-display font-bold text-amber-500 opacity-50">0{index + 1}</span>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-100">{album.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-lg font-light">
                  {album.description}
                </p>
                
                {album.bookCover && (
                   <div className="flex items-center gap-6 p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <img src={album.bookCover} alt={album.bookTitle} className="w-16 h-24 object-cover shadow-lg rounded" />
                    <div>
                      <p className="text-xs text-amber-500 font-bold uppercase tracking-widest mb-1">Inspiration</p>
                      <p className="text-slate-200 text-sm">{album.bookTitle}</p>
                    </div>
                  </div>
                )}

                <div className="pt-4">
                  <a 
                    href={album.playlistUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-amber-500 font-bold hover:gap-4 transition-all"
                  >
                    Watch Full Playlist
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-amber-500/20 rounded-2xl blur group-hover:bg-amber-500/30 transition-all"></div>
                  <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${album.youtubeId}`}
                      title={album.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square rounded-xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all">
                      <img src={album.cover} alt={`${album.title} Cover`} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                   </div>
                   {album.bookCover ? (
                     <div className="aspect-square rounded-xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all">
                        <img src={album.bookCover} alt="Inspiration Cover" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                     </div>
                   ) : (
                     <div className="aspect-square rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-6 text-center">
                        <p className="text-xs text-slate-500 tracking-widest uppercase">Pure Word Focused Worship</p>
                     </div>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Albums;
