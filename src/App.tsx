import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GENRES, Genre } from './data/genres';
import GenreCard from './components/GenreCard';
import GenreDetails from './components/GenreDetails';
import MetalGraph from './components/MetalGraph';
import { Github, Info, Menu, X } from 'lucide-react';

export default function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(null);

  const selectedGenre = GENRES.find(g => g.id === selectedGenreId);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedGenreId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSelectGenre = (id: string) => {
    // Toggle logic: if clicking the same node, close it. Otherwise, open the new one.
    setSelectedGenreId(prev => prev === id ? null : id);
  };

  return (
    <div className="h-screen text-zinc-100 flex flex-col font-sans overflow-hidden bg-black">
      {/* Header */}
      <header className="h-16 flex-shrink-0 border-b border-white/10 bg-black/50 flex items-center justify-between px-8 backdrop-blur-md z-50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-orange-600 rounded-sm rotate-45 flex items-center justify-center shadow-lg shadow-orange-900/50">
            <span className="text-black font-black -rotate-45">M</span>
          </div>
          <h1 className="text-2xl italic-black">
            METAL-GRAPH <span className="text-orange-500 not-italic tracking-normal text-sm font-bold ml-1">v1.0</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <span className="text-orange-500 border-b border-orange-500 pb-1">Evolutionary Map</span>
          <a href="#" className="p-2 border border-white/10 rounded hover:bg-white/5 transition-colors">
            <Github size={14} />
          </a>
        </nav>
      </header>

      {/* Main Graph Area */}
      <main className="flex-grow relative bg-grid">
        <MetalGraph 
          selectedId={selectedGenreId || ''} 
          onSelectGenre={handleSelectGenre} 
        />
        
        {/* Genre Modal */}
        <AnimatePresence>
          {selectedGenre && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedGenreId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="absolute inset-x-4 inset-y-4 md:inset-x-20 md:inset-y-20 z-50 overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] custom-scrollbar"
              >
                {/* Modal Corner Accents */}
                <div className="sticky top-0 left-0 right-0 h-0 z-[70] pointer-events-none">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-orange-500/20 rounded-tl-3xl" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-orange-500/20 rounded-tr-3xl" />
                </div>

                <div className="sticky top-0 right-0 p-6 flex justify-end z-[60] pointer-events-none">
                  <button 
                    onClick={() => setSelectedGenreId(null)}
                    className="p-3 bg-black/80 border border-white/10 rounded-full hover:bg-orange-500 hover:border-orange-500 transition-all text-zinc-400 hover:text-black pointer-events-auto backdrop-blur-md group"
                  >
                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
                <div className="px-6 md:px-16 pb-16">
                  <GenreDetails 
                    genre={selectedGenre} 
                    onSelectGenre={setSelectedGenreId} 
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Global UI Overlays */}
        <div className="absolute bottom-8 left-8 p-4 bg-black/80 border border-white/10 rounded-lg backdrop-blur-md max-w-xs pointer-events-none">
          <h3 className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-2">Instructions</h3>
          <p className="text-[10px] text-zinc-500 leading-relaxed uppercase">
            Click nodes to explore DNA // Drag to navigate // Scroll to zoom // Influences are connected by nodes.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="h-12 border-t border-white/10 bg-black flex-shrink-0 flex items-center justify-between px-8 text-[10px] uppercase tracking-tighter text-zinc-500 font-mono">
        <div>SYS_READY: NODE_THRASH_CONNECTED</div>
        <div className="hidden sm:block">FILE: METAL_EVOLUTION_DATABASE.LOG</div>
        <div>AUTH: MATE-INFO_PROGRAMMER_X</div>
      </footer>
    </div>
  );
}

