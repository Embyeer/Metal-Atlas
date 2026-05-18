import React from 'react';
import { motion } from 'motion/react';
import { X, Calendar, Globe, Users, Disc, Music, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { Band } from '../data/bands';
import { ALBUM_COVERS } from '../data/albumCovers';
import { useEffect } from 'react';
import { AnimatePresence } from 'motion/react';

interface BandModalProps {
  band: Band;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 20 : direction < 0 ? -20 : 0,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 20 : direction > 0 ? -20 : 0,
    opacity: 0,
  }),
};

export const BandModal: React.FC<BandModalProps> = ({ band, onClose, onNext, onPrevious, direction }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrevious();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrevious]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        className="bg-zinc-900 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrevious(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-orange-500 rounded-full text-white/70 hover:text-black transition-all border border-white/10 group hidden md:block"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/40 hover:bg-orange-500 rounded-full text-white/70 hover:text-black transition-all border border-white/10 group hidden md:block"
        >
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/50 hover:text-white transition-all border border-white/10"
        >
          <X size={20} />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={band.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="flex flex-col md:flex-row w-full overflow-hidden"
          >
            {/* Left Side: Images & Basic Info */}
            <div className="w-full md:w-2/5 relative h-64 md:h-auto flex-shrink-0">
              <img
                src={band.imageUrl}
                alt={band.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className="text-4xl font-black italic-black uppercase tracking-tighter mb-2">
                  {band.name}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-orange-600/20 border border-orange-500/30 text-orange-500 text-[10px] uppercase font-bold tracking-widest rounded-full">
                    {band.genre}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 md:hidden mb-6">
                  <button 
                    onClick={onPrevious}
                    className="p-2 bg-white/5 border border-white/10 rounded-lg text-white/70"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={onNext}
                    className="p-2 bg-white/5 border border-white/10 rounded-lg text-white/70"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                <div className="space-y-3 text-xs text-white/60">
                  <div className="flex items-center gap-3">
                    <Calendar size={14} className="text-orange-500" />
                    <span>Formed: {band.formed}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={14} className="text-orange-500" />
                    <span>Origin: {band.origin}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Detailed Info */}
            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-zinc-900">
              <section className="mb-10">
                <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
                  <BookOpen size={14} /> The Story
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {band.description}
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Members */}
                <section>
                  <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
                    <Users size={14} /> Line-up
                  </h3>
                  <ul className="space-y-2">
                    {band.members.map((member, i) => (
                      <li key={i} className="text-sm text-zinc-300 flex items-center gap-2">
                        <span className="w-1 h-1 bg-orange-500 rounded-full" />
                        {member}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Popular Songs */}
                <section>
                  <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.25em] mb-4 flex items-center gap-3">
                    <Music size={14} /> Anthems
                  </h3>
                  <ul className="space-y-2">
                    {band.mostKnownSongs.map((song, i) => (
                      <li key={i} className="text-sm text-zinc-300 flex items-center gap-2">
                        <span className="w-1 h-1 bg-orange-500 rounded-full" />
                        {song}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="mt-10 pt-10 border-t border-white/5">
                <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
                  <Disc size={14} /> Essential Discography
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {band.albums.map((album, i) => {
                    const coverUrl = album.coverUrl || ALBUM_COVERS[album.title];
                    return (
                      <div key={i} className="group cursor-default">
                        <div className="aspect-square bg-zinc-800 rounded-lg mb-2 overflow-hidden border border-white/5 group-hover:border-orange-500/30 transition-colors">
                          {coverUrl ? (
                            <img src={coverUrl} alt={album.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-zinc-800 italic-black text-[10px] opacity-10 uppercase p-4 text-center">
                              {album.title}
                            </div>
                          )}
                        </div>
                        <div className="text-[10px] font-bold text-zinc-200 truncate">{album.title}</div>
                        <div className="text-[9px] text-zinc-500">{album.year}</div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
