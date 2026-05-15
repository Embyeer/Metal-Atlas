import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GENRES } from './data/genres';
import GenreDetails from './components/GenreDetails';
import MetalGraph from './components/MetalGraph';
import { BandsList } from './components/BandsList';
import { BandModal } from './components/BandModal';
import { Band } from './data/bands';
import { Github, X } from 'lucide-react';

type Tab = 'map' | 'bands';

export default function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('map');
  const [selectedBand, setSelectedBand] = useState<Band | null>(null);

  const selectedGenre = GENRES.find(g => g.id === selectedGenreId);

  // Close modals on Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedGenreId(null);
        setSelectedBand(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSelectGenre = (id: string) => {
    setSelectedGenreId(prev => prev === id ? null : id);
  };

  return (
    <div className="h-screen text-zinc-100 flex flex-col font-sans overflow-hidden bg-black">
      {/* Header */}
      <header className="h-16 flex-shrink-0 border-b border-white/10 bg-black/50 flex items-center justify-between px-8 backdrop-blur-md z-[60]">
        <div className="flex items-center gap-2">
          <a href="https://www.fontspace.com/category/metallica" className="hover:opacity-80 transition-opacity">
            <img 
              src="https://see.fontimg.com/api/rf5/3wAM/ZGIwYjNiM2JiYTdhNGU3OTgyMGQ2MjMzYTE4MTk1NTMudHRm/TWV0YWwgQXRsYXM/vtks-rude-metal.png?r=fs&h=65&w=1000&fg=000000&bg=FFFFFF&tb=1&s=65" 
              alt="Metal Atlas Logo"
              className="h-12 invert brightness-150 rendering-pixelated"
            />
          </a>
          <span className="text-orange-500 text-[10px] font-bold opacity-50 self-end mb-2">V3.0-alpha</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <button 
            onClick={() => setActiveTab('map')}
            className={`transition-all pb-1 border-b-2 ${activeTab === 'map' ? 'text-orange-500 border-orange-500' : 'text-zinc-500 border-transparent hover:text-zinc-300'}`}
          >
            Evolutionary Map
          </button>
          <button 
            onClick={() => setActiveTab('bands')}
            className={`transition-all pb-1 border-b-2 ${activeTab === 'bands' ? 'text-orange-500 border-orange-500' : 'text-zinc-500 border-transparent hover:text-zinc-300'}`}
          >
            Bands
          </button>
          <a 
            href="https://github.com/Embyeer/Metal-Atlas/tree/main" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-white/10 rounded hover:bg-white/5 transition-colors ml-4"
          >
            <Github size={14} />
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'map' ? (
            <motion.div 
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <MetalGraph 
                selectedId={selectedGenreId || ''} 
                onSelectGenre={handleSelectGenre} 
              />
              
              {/* Instructions Overlay */}
              <div className="absolute bottom-6 left-6 p-3 bg-black/80 border border-white/10 rounded-lg backdrop-blur-md max-w-[200px] pointer-events-none z-10">
                <h3 className="text-[9px] font-bold text-orange-500 uppercase tracking-widest mb-1">Instructions</h3>
                <p className="text-[9px] text-zinc-500 leading-tight uppercase">
                  Click nodes to explore DNA // Drag to navigate // Scroll to zoom // Influences are connected.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="bands"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="w-full h-full"
            >
              <BandsList onSelectBand={setSelectedBand} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Genre Modal */}
        <AnimatePresence>
          {selectedGenre && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedGenreId(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-x-4 inset-y-4 md:inset-x-20 md:inset-y-20 z-50 overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] custom-scrollbar"
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

        {/* Band Modal */}
        <AnimatePresence>
          {selectedBand && (
            <BandModal 
              band={selectedBand} 
              onClose={() => setSelectedBand(null)} 
            />
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="h-12 border-t border-white/10 bg-black flex-shrink-0 flex items-center justify-between px-8 text-[10px] uppercase tracking-tighter text-zinc-500 font-mono">
        <div>SYS_READY: {activeTab === 'map' ? 'NODE_THRASH_CONNECTED' : 'BAND_DIRECTORY_ACTIVE'}</div>
        <div className="hidden sm:block">FILE: {activeTab === 'map' ? 'METAL_ATLAS_ROOT.LOG' : 'ARCHIVE_BANDS_METAL.LOG'}</div>
        <div>AUTH: MATE-INFO_PROGRAMMER_X</div>
      </footer>
    </div>
  );
}

