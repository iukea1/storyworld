'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
}

export function MagicCursor() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const addParticle = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    const colors = ['#ffd060', '#e8520a', '#68c8f0', '#ff9090'];
    const newParticle: Particle = {
      id,
      x,
      y,
      targetX: x + (Math.random() * 40 - 20),
      targetY: y + (Math.random() * 40 - 20),
      size: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    setParticles((prev) => [...prev.slice(-15), newParticle]);
    
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 800);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (Math.random() > 0.7) {
        addParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [addParticle]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Main Cursor Glow */}
      <motion.div
        className="absolute w-8 h-8 bg-sunflower/20 rounded-full blur-xl"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 1, x: p.x, y: p.y }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              y: p.targetY,
              x: p.targetX
            }}
            exit={{ opacity: 0 }}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 10px ${p.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
