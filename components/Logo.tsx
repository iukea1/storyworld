import { BookOpen, Sparkles } from 'lucide-react';

export function LogoConcept1() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center gap-2 mb-1">
        <div className="relative text-ember">
          <BookOpen className="w-6 h-6" />
          <Sparkles className="w-3 h-3 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <span className="font-playfair font-bold text-2xl text-ember tracking-wide">StoryWorld</span>
      </div>
      <span className="font-nunito text-[10px] uppercase tracking-widest text-ink/60 ml-8">Where stories begin</span>
    </div>
  );
}

export function LogoConcept2() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <span className="font-playfair font-black text-3xl text-ember tracking-tighter relative">
        StoryWorld
        <span className="absolute -top-2 -right-3 text-sunflower text-lg">✦</span>
      </span>
      <span className="font-nunito text-[9px] uppercase tracking-[0.2em] text-ink/50 mt-1">Where stories begin</span>
    </div>
  );
}
