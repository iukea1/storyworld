'use client';

import { useState, useEffect } from 'react';
import { Mic, Send, Sparkles, Image as ImageIcon, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Starfield } from '@/components/Starfield';

export default function StoryStudio() {
  const [storyText, setStoryText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [activePage, setActivePage] = useState(3);
  
  const fullText = "Luna adjusted her space helmet and looked out the window. The stars were twinkling like tiny diamonds scattered across a dark purple blanket. 'Computer, set course for the Bubblegum Nebula!' she announced. Suddenly, a strange, friendly alien tapped on the glass...";

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setStoryText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="bg-warm-cream text-ink flex flex-col h-screen overflow-hidden">
      {/* Top Bar */}
      <header className="h-16 border-b border-ink/5 flex items-center justify-between px-6 shrink-0 bg-white z-20">
        <div className="flex items-center gap-4">
          <Link href="/characters" className="font-nunito text-sm text-ink/60 hover:text-ink transition-colors">
            &larr; Back
          </Link>
          <div className="h-4 w-px bg-ink/10" />
          <span className="font-playfair font-bold text-ember">Luna&apos;s Space Adventure</span>
        </div>
        <Link href="/complete" className="bg-ember text-white hover:bg-ember/90 font-nunito text-sm font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-2 shadow-md shadow-ember/10">
          Finish Story <ArrowRight className="w-4 h-4" />
        </Link>
      </header>

      {/* Main Split Layout */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Panel: Illustration (60%) */}
        <div className="w-full md:w-[60%] bg-parchment relative border-r border-ink/5 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activePage}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 relative m-6 rounded-2xl overflow-hidden shadow-2xl shadow-ink/10 border border-ink/5"
            >
              <Image
                src={`https://picsum.photos/seed/space-cat-nebula-${activePage}/1200/1600`}
                alt="Story illustration"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Page Badge */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md text-ink font-nunito font-bold text-xs px-3 py-1.5 rounded-full border border-ink/10 shadow-sm">
                Page {activePage}
              </div>
              {/* Character Avatar */}
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-2 border-sunflower overflow-hidden shadow-lg"
              >
                <Image src="https://picsum.photos/seed/cat-space/200/200" alt="Luna" fill sizes="64px" className="object-cover" />
              </motion.div>
              
              {/* Magic Sparkles Overlay */}
              {isTyping && (
                <div className="absolute inset-0 pointer-events-none">
                  <Starfield />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Panel: Story Text & Input (40%) */}
        <div className="w-full md:w-[40%] flex flex-col bg-warm-cream relative">
          {/* Story Text Area */}
          <div className="flex-1 p-8 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-lora text-xl md:text-2xl leading-relaxed text-ink/90 italic"
            >
              {storyText}
              {isTyping && (
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-6 bg-sunflower ml-1 align-middle" 
                />
              )}
            </motion.div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-ink/5 z-10">
            {/* Quick Prompts */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="whitespace-nowrap bg-horizon/10 hover:bg-horizon/20 border border-horizon/10 text-horizon font-nunito text-xs font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" /> Add a twist!
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="whitespace-nowrap bg-candy/10 hover:bg-candy/20 border border-candy/10 text-candy font-nunito text-xs font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" /> New friend appears!
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="whitespace-nowrap bg-sunflower/10 hover:bg-sunflower/20 border border-sunflower/10 text-ember font-nunito text-xs font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" /> Jump forward!
              </motion.button>
            </div>

            {/* Input Field */}
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="What happens next?" 
                className="w-full bg-parchment border border-ink/10 rounded-full py-4 pl-6 pr-24 font-nunito text-ink placeholder:text-ink/40 focus:outline-none focus:border-ember focus:ring-2 focus:ring-ember/20 focus:bg-white transition-all shadow-inner"
              />
              <div className="absolute right-2 flex items-center gap-1">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-ink/30 hover:text-horizon hover:bg-horizon/10 transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-ember text-white flex items-center justify-center hover:bg-ember/90 transition-transform active:scale-95 shadow-md shadow-ember/20">
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip: Page Thumbnails */}
      <div className="h-24 bg-white border-t border-ink/5 flex items-center px-6 gap-4 overflow-x-auto scrollbar-hide shrink-0 z-20">
        <div className="flex items-center gap-3">
          {/* Page 1 */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            onClick={() => setActivePage(1)}
            className={`w-16 h-16 rounded-lg overflow-hidden relative border cursor-pointer transition-all ${activePage === 1 ? 'border-ember ring-2 ring-ember/20' : 'border-ink/10 opacity-60 hover:opacity-100'}`}
          >
            <Image src="https://picsum.photos/seed/page1/100/100" alt="Page 1" fill sizes="64px" className="object-cover" />
            <div className="absolute bottom-1 right-1 bg-ink/60 text-white text-[10px] px-1.5 rounded">1</div>
          </motion.div>
          {/* Page 2 */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            onClick={() => setActivePage(2)}
            className={`w-16 h-16 rounded-lg overflow-hidden relative border cursor-pointer transition-all ${activePage === 2 ? 'border-ember ring-2 ring-ember/20' : 'border-ink/10 opacity-60 hover:opacity-100'}`}
          >
            <Image src="https://picsum.photos/seed/page2/100/100" alt="Page 2" fill sizes="64px" className="object-cover" />
            <div className="absolute bottom-1 right-1 bg-ink/60 text-white text-[10px] px-1.5 rounded">2</div>
          </motion.div>
          {/* Page 3 */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            onClick={() => setActivePage(3)}
            className={`w-16 h-16 rounded-lg overflow-hidden relative border cursor-pointer transition-all ${activePage === 3 ? 'border-ember ring-2 ring-ember/20' : 'border-ink/10 opacity-60 hover:opacity-100'}`}
          >
            <Image src="https://picsum.photos/seed/space-cat-nebula-3/100/100" alt="Page 3" fill sizes="64px" className="object-cover" />
            <div className="absolute bottom-1 right-1 bg-ink/60 text-white text-[10px] px-1.5 rounded">3</div>
          </motion.div>
          {/* Add New Page */}
          <motion.div 
            whileHover={{ scale: 1.05, borderColor: 'var(--color-ember)' }}
            className="w-16 h-16 rounded-lg border border-dashed border-ink/20 flex items-center justify-center text-ink/30 hover:text-ember cursor-pointer transition-colors"
          >
            <ImageIcon className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
