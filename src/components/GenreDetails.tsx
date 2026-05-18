import React from 'react';
import { motion } from 'motion/react';
import { Genre, GENRES } from '../data/genres';
import { Music, BookOpen, Zap, Layers, ArrowRight } from 'lucide-react';
import FretboardDiagram from './FretboardDiagram';
import { SCALE_PATTERNS } from '../data/scalesData';
import { bands as BANDS, Band } from '../data/bands';

interface GenreDetailsProps {
  genre: Genre;
  onSelectGenre: (id: string) => void;
  onSelectBand: (band: Band) => void;
}

const AlbumArt: React.FC<{ src?: string; alt: string; index: number }> = ({ src, alt, index }) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [retry, setRetry] = React.useState(0);

  const fallback = (
    <div className="w-full h-full flex items-center justify-center text-[10px] font-mono text-zinc-600 bg-zinc-900 select-none">
      {String(index + 1).padStart(2, '0')}
    </div>
  );

  if (!src || error) return fallback;

  // Proxy all external URLs via images.weserv.nl for reliability and resizing
  const processedSrc = src.startsWith('http') && !src.includes('weserv.nl')
    ? `https://images.weserv.nl/?url=${encodeURIComponent(src)}&w=200&h=200&fit=cover`
    : src;

  return (
    <div className="relative w-full h-full bg-zinc-900 overflow-hidden rounded-lg">
      <div className={`transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex items-center justify-center bg-zinc-900 z-10`}>
        <div className="w-3 h-3 border border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
      </div>
      <img 
        key={`${processedSrc}-${retry}`}
        src={processedSrc} 
        alt={alt} 
        className={`w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out ${loading ? 'opacity-0' : 'opacity-100'}`}
        referrerPolicy="no-referrer"
        onLoad={() => {
          setLoading(false);
          setError(false);
        }}
        onError={() => {
          console.warn(`Failed to load image: ${processedSrc}`);
          if (retry < 1) {
            setRetry(r => r + 1);
          } else {
            setError(true);
            setLoading(false);
          }
        }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
    </div>
  );
};

const GenreDetails: React.FC<GenreDetailsProps> = ({ genre, onSelectGenre, onSelectBand }) => {
  const influences = GENRES.filter(g => genre.influences.includes(g.id));

  const handleBandClick = (bandName: string) => {
    const foundBand = BANDS.find(b => b.name.toLowerCase() === bandName.toLowerCase());
    if (foundBand) {
      onSelectBand(foundBand);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      {/* Detail Header */}
      <section className="relative min-h-[18rem] flex flex-col justify-end p-8 md:p-12 border border-white/10 rounded-3xl overflow-hidden bg-grid group/header">
        {/* Abstract Background Elements */}
        <div 
          className="absolute inset-0 opacity-20 group-hover/header:opacity-30 transition-opacity duration-1000"
          style={{ 
            background: `radial-gradient(circle at 70% 30%, ${genre.color}33 0%, transparent 60%)` 
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/5 blur-[120px] pointer-events-none" />
        
        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-white/10" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-white/10" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div 
              className="w-1.5 h-6 rounded-full" 
              style={{ backgroundColor: genre.color }}
            />
          </div>
          
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-6xl md:text-8xl italic-black text-white uppercase leading-[0.8] mb-8"
          >
            {genre.name}
          </motion.h2>
          
          <div className="max-w-2xl">
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
              {genre.description}
            </p>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-2 md:px-0">
        {/* Left Column: Deep Context */}
        <div className="lg:col-span-7 space-y-8">
          {/* History / Full Bio */}
          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none uppercase font-black text-4xl select-none">
            </div>
            <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
              <BookOpen size={14} /> Origins & Technical History
            </h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed first-letter:text-6xl first-letter:font-black first-letter:text-orange-500 first-letter:mr-4 first-letter:float-left first-letter:mt-1 pt-2">
                {genre.history}
              </p>
            </div>
          </section>

          {/* Essential Listening */}
          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
               <Music size={14} /> Emblematic Songs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {genre.songs.map((song, i) => (
                <motion.div 
                  key={song.title} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-black/40 border border-white/5 rounded-2xl flex items-center gap-5 group hover:border-orange-500/30 transition-all cursor-default"
                >
                  <div className="w-16 h-16 rounded-xl bg-zinc-900 border border-white/10 overflow-hidden flex-shrink-0 group-hover:border-orange-500/50 transition-all duration-500 relative flex items-center justify-center">
                    <AlbumArt src={song.albumCover} alt={`${song.artist} - ${song.title}`} index={i} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-[11px] font-black text-white uppercase tracking-wider truncate mb-1">{song.title}</p>
                    <button 
                      onClick={() => handleBandClick(song.artist)}
                      className="text-[9px] text-zinc-500 hover:text-orange-500 uppercase font-bold tracking-[0.2em] transition-colors cursor-pointer"
                    >
                      {song.artist}
                    </button>
                  </div>
                  <div className="h-10 w-px bg-white/5 group-hover:bg-orange-500/20 transition-colors mx-1" />
                  <Music size={12} className="text-zinc-800 group-hover:text-orange-500/50 transition-colors flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Important Bands */}
          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
               <Layers size={14} /> Important Bands
            </h3>
            <div className="flex flex-wrap gap-2">
              {genre.bands.map(band => (
                <button 
                  key={band} 
                  onClick={() => handleBandClick(band)}
                  className="px-4 py-2 bg-black/40 border border-white/5 rounded-lg text-[10px] font-black text-zinc-400 uppercase tracking-[0.15em] hover:text-white hover:border-orange-500/30 hover:bg-orange-500/5 transition-all cursor-pointer"
                >
                  {band}
                </button>
              ))}
            </div>
          </section>

          {/* Lineage */}
          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/5 blur-[40px] rounded-full pointer-events-none" />
            <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
               <ArrowRight size={14} /> Ancestral Records
            </h3>
            {influences.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {influences.map(inf => (
                  <button
                    key={inf.id}
                    onClick={() => onSelectGenre(inf.id)}
                    className="w-full flex items-center justify-between p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-orange-500/40 group transition-all relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-5 relative z-10">
                      <div 
                        className="w-1 mx-2 h-10 rounded-full opacity-50 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(249,115,22,0.3)]" 
                        style={{ backgroundColor: inf.color }} 
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.3em] mb-1">Influence Point</span>
                        <span className="text-[11px] font-black text-zinc-400 group-hover:text-white uppercase tracking-[0.25em] transition-colors">{inf.name}</span>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-orange-500 opacity-20 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all relative z-10" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl border border-dashed border-zinc-800 text-center">
                <p className="text-[9px] text-zinc-600 font-bold uppercase tracking-[0.5em]">No upstream parent records detected.</p>
              </div>
            )}
          </section>
        </div>

        {/* Right Column: Technical Stats */}
        <div className="lg:col-span-5 space-y-8">
          {/* Musical Theory */}
          <section className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm overflow-hidden">
            <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-[0.25em] mb-10 flex items-center gap-3">
              <Zap size={14} /> Harmonic DNA & Scaling
            </h3>
            <div className="space-y-10">
              {genre.scales.map((scale, i) => {
                const patterns = SCALE_PATTERNS[scale];
                return (
                  <div key={scale} className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex flex-col gap-1 items-center">
                        {[1, 2, 3].map(dot => (
                          <div key={dot} className={`w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-orange-500' : 'bg-zinc-700'}`} />
                        ))}
                      </div>
                      <span className="text-[11px] font-black text-zinc-100 uppercase tracking-[0.3em]">{scale}</span>
                    </div>
                    <div className="bg-black/40 p-1 rounded-xl border border-white/5">
                      {patterns && <FretboardDiagram patterns={patterns} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default GenreDetails;
