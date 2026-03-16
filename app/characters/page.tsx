'use client';

import { useState } from 'react';
import { Starfield } from '@/components/Starfield';
import { CharacterCard } from '@/components/CharacterCard';
import { LogoConcept2 } from '@/components/Logo';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function CharacterPicker() {
  const [selectedChar, setSelectedChar] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-warm-cream text-ink relative overflow-hidden flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-horizon/10 via-candy/5 to-warm-cream pointer-events-none" />

      <nav className="relative z-10 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <LogoConcept2 />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
          </Button>
        </motion.div>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="font-nunito text-ember font-bold tracking-widest uppercase text-sm mb-4 block">Step 1</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold">Choose your hero</h1>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16"
        >
          <motion.div variants={fadeInUp}>
            <CharacterCard
              name="Bear"
              role="Detective Dog"
              description="Always sniffing out the next big mystery."
              imageUrl="https://picsum.photos/seed/bear-detective/400/400"
              themeColor="horizon"
              selected={selectedChar === 'Bear'}
              onClick={() => setSelectedChar('Bear')}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CharacterCard
              name="Luna"
              role="Space Cat"
              description="Ready to explore the farthest galaxies."
              imageUrl="https://picsum.photos/seed/cat-space/400/400"
              themeColor="candy"
              selected={selectedChar === 'Luna'}
              onClick={() => setSelectedChar('Luna')}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CharacterCard
              name="Pip"
              role="Dragon Chef"
              description="Baking magical treats with a little fire."
              imageUrl="https://picsum.photos/seed/dragon-chef/400/400"
              themeColor="ember"
              selected={selectedChar === 'Pip'}
              onClick={() => setSelectedChar('Pip')}
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CharacterCard
              name="Mochi"
              role="Wizard Bunny"
              description="Pulling spells out of a very deep hat."
              imageUrl="https://picsum.photos/seed/bunny-wizard/400/400"
              themeColor="sunflower"
              selected={selectedChar === 'Mochi'}
              onClick={() => setSelectedChar('Mochi')}
            />
          </motion.div>
        </motion.div>

        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {selectedChar ? (
              <motion.div
                key="cta"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
              >
                <Button asChild className="shadow-xl shadow-ember/20">
                  <Link href="/studio">
                    Start this adventure <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="hint"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-ink/40 font-nunito text-sm animate-pulse"
              >
                Select a character to continue
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
