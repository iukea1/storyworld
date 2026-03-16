import Image from 'next/image';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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
  horizon: { bg: 'bg-horizon/10', badge: 'bg-horizon/20 text-horizon border-transparent' },
  candy: { bg: 'bg-candy/10', badge: 'bg-candy/20 text-candy border-transparent' },
  ember: { bg: 'bg-ember/10', badge: 'bg-ember/20 text-ember border-transparent' },
  sunflower: { bg: 'bg-sunflower/10', badge: 'bg-sunflower/20 text-ember border-transparent' },
};

export function CharacterCard({ name, role, description, imageUrl, themeColor, onClick, selected }: CharacterCardProps) {
  const theme = themeStyles[themeColor];

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer h-full"
    >
      <Card className={cn(
        "p-6 rounded-2xl transition-all duration-300 relative overflow-hidden h-full border",
        selected
          ? "border-ember shadow-[0_20px_40px_rgba(232,82,10,0.15)] ring-2 ring-ember/20"
          : "border-ink/5 shadow-sm hover:shadow-2xl"
      )}>
        <CardContent className="p-0">
          <div className={`aspect-square rounded-xl ${theme.bg} mb-6 relative overflow-hidden`}>
            <Image
              src={imageUrl}
              alt={name}
              fill
              className={cn(
                "object-cover transition-all duration-700",
                selected ? "scale-110 opacity-100" : "opacity-90 group-hover:opacity-100 group-hover:scale-105"
              )}
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
            <Badge variant="outline" className={cn(theme.badge, "font-nunito text-[10px] uppercase tracking-widest font-bold px-3 py-1")}>
              {role}
            </Badge>
          </div>
          <p className="font-lora text-ink/70 text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
