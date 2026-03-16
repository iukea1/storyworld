'use client';

import { Starfield } from '@/components/Starfield';
import { LogoConcept1 } from '@/components/Logo';
import { Download, BookOpen, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function StoryComplete() {
  return (
    <main className="min-h-screen bg-warm-cream text-ink relative overflow-hidden flex flex-col">
      <Starfield />
      
      {/* Celebration effect */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-sunflower/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-candy/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-horizon/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <nav className="relative z-10 px-6 py-6 flex justify-center items-center max-w-7xl mx-auto w-full">
        <Link href="/">
          <LogoConcept1 />
        </Link>
      </nav>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-4xl mx-auto w-full text-center">
        
        <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-ember animate-in slide-in-from-bottom-4 fade-in duration-700">
          The End!
        </h1>
        <p className="font-lora text-xl text-ink/80 mb-12 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-150">
          What an amazing adventure. Your story is ready.
        </p>

        {/* Book Mockup */}
        <div className="mb-16 relative w-72 h-[360px] mx-auto perspective-[1000px] animate-in zoom-in-95 fade-in duration-1000 delay-300">
          <div className="w-full h-full bg-white rounded-r-2xl rounded-l-sm shadow-2xl shadow-ember/10 border-l-8 border-ember flex flex-col items-center justify-center p-8 transform rotate-y-[-10deg] rotate-x-[2deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-500">
            <div className="w-40 h-40 bg-candy/10 rounded-full mb-8 overflow-hidden relative border-4 border-warm-cream shadow-inner">
               <Image src="https://picsum.photos/seed/space-cat-nebula/300/300" alt="Cover art" fill sizes="160px" className="object-cover" />
            </div>
            <h4 className="font-playfair text-ink font-bold text-2xl mb-3 text-center leading-tight">Luna&apos;s Space Adventure</h4>
            <div className="w-12 h-px bg-ink/10 mb-3" />
            <p className="font-nunito text-ink/60 text-xs uppercase tracking-widest text-center font-bold">Written by Leo, age 6</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500">
          <button className="bg-ember text-white font-nunito font-bold text-lg px-8 py-4 rounded-full hover:bg-ember/90 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-ember/20">
            <Download className="w-5 h-5" /> Download your book (PDF)
          </button>
          
          <button className="bg-sunflower text-ember font-nunito font-bold text-lg px-8 py-4 rounded-full hover:bg-sunflower/90 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-sunflower/20">
            <BookOpen className="w-5 h-5" /> Order a printed copy — from $14.99
          </button>
        </div>

        <Link href="/characters" className="text-ink/60 hover:text-ember font-nunito font-bold flex items-center gap-2 transition-colors animate-in slide-in-from-bottom-4 fade-in duration-700 delay-700">
          Start a new adventure <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
}
