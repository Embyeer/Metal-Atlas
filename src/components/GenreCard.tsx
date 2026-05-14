import React from 'react';
import { motion } from 'motion/react';
import { Genre } from '../data/genres';

interface GenreCardProps {
  genre: Genre;
  isSelected: boolean;
  onClick: () => void;
}

const GenreCard: React.FC<GenreCardProps> = ({ genre, isSelected, onClick }) => {
  return (
    <motion.div
      layout
      onClick={onClick}
      whileHover={{ scale: 1.01, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
      whileTap={{ scale: 0.99 }}
      className={`relative cursor-pointer p-4 rounded-lg border transition-all duration-200 ${
        isSelected 
          ? 'bg-white/10 border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.15)]' 
          : 'bg-white/5 border-white/10 hover:border-white/20'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className={`text-sm font-bold uppercase tracking-wider ${isSelected ? 'text-orange-500' : 'text-zinc-200'}`}>
          {genre.name}
        </h3>
        <div 
          className="w-1.5 h-1.5 rounded-full" 
          style={{ 
            backgroundColor: genre.color, 
            boxShadow: isSelected ? `0 0 8px ${genre.color}` : 'none' 
          }}
        />
      </div>
      
      <p className="text-[10px] text-zinc-500 line-clamp-1 uppercase tracking-tight">
        {genre.bands.slice(0, 3).join(' // ')}
      </p>

      {isSelected && (
        <motion.div
          layoutId="active-indicator"
          className="absolute -right-1 top-2 bottom-2 w-0.5 bg-orange-500 rounded-full"
        />
      )}
    </motion.div>
  );
};

export default GenreCard;
