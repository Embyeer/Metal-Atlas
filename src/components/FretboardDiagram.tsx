import React, { useState } from 'react';
import { ScalePattern } from '../data/scalesData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FretboardDiagramProps {
  patterns: ScalePattern[];
}

const FretboardDiagram: React.FC<FretboardDiagramProps> = ({ patterns }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pattern = patterns[currentIndex];
  
  const strings = ['E', 'B', 'G', 'D', 'A', 'E'];
  const totalFrets = 5; // We show 5 frets context
  const minFret = Math.min(...pattern.positions.map(p => p.fret));
  const startFret = Math.max(0, minFret - 1);
  
  const width = 220;
  const height = 120;
  const padding = 20;
  const labelWidth = 15;
  
  const fretSpacing = (width - 2 * padding - labelWidth) / totalFrets;
  const stringSpacing = (height - 2 * padding) / (strings.length - 1);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : patterns.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < patterns.length - 1 ? prev + 1 : 0));
  };

  if (!pattern) return null;

  return (
    <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4 overflow-hidden group">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">{pattern.name}</span>
          <span className="text-[8px] text-zinc-600 font-mono uppercase">Position {currentIndex + 1} of {patterns.length}</span>
        </div>
        
        {patterns.length > 1 && (
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-lg bg-black/60 border border-white/20 hover:bg-orange-500/30 hover:border-orange-500 transition-all text-zinc-100 cursor-pointer flex items-center justify-center active:scale-95 z-10"
              aria-label="Previous Position"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-lg bg-black/60 border border-white/20 hover:bg-orange-500/30 hover:border-orange-500 transition-all text-zinc-100 cursor-pointer flex items-center justify-center active:scale-95 z-10"
              aria-label="Next Position"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
      
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="max-w-[440px]">
        {/* Fret Number Indicator */}
        <text
          x={padding + labelWidth}
          y={padding - 5}
          fontSize="10"
          fill="#f97316"
          fontWeight="bold"
          fontFamily="monospace"
        >
          {startFret > 0 ? `fret ${startFret}` : 'nut'}
        </text>

        {/* String Labels */}
        {strings.map((note, i) => (
          <text
            key={`label-${i}`}
            x={padding}
            y={padding + i * stringSpacing + 3}
            fontSize="10"
            fill="#71717a"
            fontWeight="bold"
            fontFamily="monospace"
          >
            {note}
          </text>
        ))}

        {/* Frets */}
        {Array.from({ length: totalFrets + 1 }).map((_, i) => (
          <line
            key={`fret-${i}`}
            x1={padding + labelWidth + i * fretSpacing}
            y1={padding}
            x2={padding + labelWidth + i * fretSpacing}
            y2={height - padding}
            stroke={(startFret === 0 && i === 0) || (startFret > 0 && i === 0) ? "#f97316" : "#333"}
            strokeWidth={i === 0 ? 3 : 1}
          />
        ))}

        {/* Strings */}
        {strings.map((_, i) => (
          <line
            key={`string-${i}`}
            x1={padding + labelWidth}
            y1={padding + i * stringSpacing}
            x2={width - padding}
            y2={padding + i * stringSpacing}
            stroke="#444"
            strokeWidth={1.5}
          />
        ))}

        {/* Notes */}
        {pattern.positions.map((pos, i) => {
          const x = padding + labelWidth + (pos.fret - startFret + 0.5) * fretSpacing;
          const y = padding + (pos.string - 1) * stringSpacing;
          
          if (x < padding + labelWidth || x > width - padding) return null;

          return (
            <circle
              key={`note-${i}`}
              cx={x}
              cy={y}
              r={4}
              fill={pos.isRoot ? "#f97316" : "#fff"}
              className={pos.isRoot ? "drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" : ""}
            />
          );
        })}
      </svg>
      {startFret > 0 && (
         <div className="mt-2 text-[10px] text-orange-500/80 font-mono font-bold italic text-right uppercase tracking-wider">
           Fret Range: {startFret} — {startFret + totalFrets}
         </div>
      )}
    </div>
  );
};

export default FretboardDiagram;
