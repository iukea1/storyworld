import Image from 'next/image';
import { motion } from 'motion/react';

interface CharacterCardProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  themeColor: 'horizon' | 'candy' | 'ember' | 'sunflower';
  onClick?: () => void;
  selected?: boolean;
}

const themeStyles = {
  horizon: { bg: 'bg-horizon/10', badge: 'bg-horizon/20 text-horizon' },
  candy: { bg: 'bg-candy/10', badge: 'bg-candy/20 text-candy' },
  ember: { bg: 'bg-ember/10', badge: 'bg-ember/20 text-ember' },
  sunflower: { bg: 'bg-sunflower/10', badge: 'bg-sunflower/20 text-ember' },
};

export function CharacterCard({ name, role, description, imageUrl, themeColor, onClick, selected }: CharacterCardProps) {
  const theme = themeStyles[themeColor];

  return (
    <motion.div 
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer relative overflow-hidden h-full
        ${selected ? 'border-ember shadow-[0_20px_40px_rgba(232,82,10,0.15)] ring-2 ring-ember/20' : 'border-ink/5 shadow-sm hover:shadow-2xl'}
      `}
    >
      <div className={`aspect-square rounded-xl ${theme.bg} mb-6 relative overflow-hidden`}>
        <Image 
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={`object-cover transition-all duration-700 ${selected ? 'scale-110 opacity-100' : 'opacity-90 group-hover:opacity-100 group-hover:scale-105'}`}
          referrerPolicy="no-referrer"
        />
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-ember/10 flex items-center justify-center"
          >
            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
              <div className="w-6 h-6 bg-ember rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-playfair text-2xl font-bold text-ink">{name}</h3>
        <span className={`${theme.badge} font-nunito text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full`}>{role}</span>
      </div>
      <p className="font-lora text-ink/70 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
