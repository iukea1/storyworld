'use client';

import { Starfield } from '@/components/Starfield';
import { LogoConcept1 } from '@/components/Logo';
import { CharacterCard } from '@/components/CharacterCard';
import { PricingSection } from '@/components/PricingSection';
import { Mic, Sparkles, BookOpen, ShieldCheck, Ban, Lock, CheckCircle2, ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

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

export default function LandingPage() {
  return (
    <main className="flex-col flex min-h-screen">
      {/* Nav */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LogoConcept1 />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-6 font-nunito text-sm font-semibold text-ink/70"
        >
          <Link href="#how-it-works" className="hover:text-ember transition-colors">How it works</Link>
          <Link href="#characters" className="hover:text-ember transition-colors">Characters</Link>
          <Link href="#pricing" className="hover:text-ember transition-colors">Pricing</Link>
        </motion.div>
      </nav>

      {/* Section 1 - Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-warm-cream pt-20">
        {/* Sunrise Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-horizon/20 via-candy/10 to-warm-cream pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sunflower/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center mt-10"
        >
          <motion.h1 
            variants={fadeInUp}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-ink leading-[1.1] mb-6 tracking-tight"
          >
            Your child&apos;s<br />
            <span className="italic text-ember font-medium">epic adventure</span><br />
            starts here
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="font-lora text-lg md:text-xl text-ink/70 max-w-2xl mb-10 leading-relaxed"
          >
            Talk, imagine, create. Watch your story come alive with original artwork — page by page.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link href="/characters" className="bg-ember text-white font-nunito font-bold text-lg px-8 py-4 rounded-full hover:bg-ember/90 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-ember/20">
              Make your first free story <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#how-it-works" className="text-ink/70 font-nunito font-bold text-lg px-8 py-4 rounded-full hover:bg-ink/5 transition-colors flex items-center gap-2">
              See how it works <ChevronDown className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 animate-bounce text-ink/30"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Section 2 - How It Works */}
      <section id="how-it-works" className="bg-parchment text-ink py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12 md:gap-8"
          >
            {/* Step 1 */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-horizon/20 rounded-full flex items-center justify-center mb-6 text-horizon">
                <Mic className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3">Your child talks</h3>
              <p className="font-lora text-ink/70 text-lg">They describe what happens next. No typing needed.</p>
            </motion.div>
            {/* Step 2 */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-candy/20 rounded-full flex items-center justify-center mb-6 text-candy">
                <Sparkles className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3">The story comes to life</h3>
              <p className="font-lora text-ink/70 text-lg">A full illustrated page appears in seconds — their words, brought to life.</p>
            </motion.div>
            {/* Step 3 */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-sunflower/20 rounded-full flex items-center justify-center mb-6 text-ember">
                <BookOpen className="w-10 h-10" />
              </div>
              <h3 className="font-playfair text-2xl font-bold mb-3">Keep it forever</h3>
              <p className="font-lora text-ink/70 text-lg">Download the PDF or order a real printed book delivered to your door.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Characters */}
      <section id="characters" className="bg-warm-cream text-ink py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-nunito text-ember font-bold tracking-widest uppercase text-sm mb-4 block">Meet the heroes</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">Choose your companion</h2>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <CharacterCard 
                name="Bear" 
                role="Detective Dog" 
                description="Always sniffing out the next big mystery." 
                imageUrl="https://picsum.photos/seed/bear-detective/400/400" 
                themeColor="horizon" 
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CharacterCard 
                name="Luna" 
                role="Space Cat" 
                description="Ready to explore the farthest galaxies." 
                imageUrl="https://picsum.photos/seed/cat-space/400/400" 
                themeColor="candy" 
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CharacterCard 
                name="Pip" 
                role="Dragon Chef" 
                description="Baking magical treats with a little fire." 
                imageUrl="https://picsum.photos/seed/dragon-chef/400/400" 
                themeColor="ember" 
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CharacterCard 
                name="Mochi" 
                role="Wizard Bunny" 
                description="Pulling spells out of a very deep hat." 
                imageUrl="https://picsum.photos/seed/bunny-wizard/400/400" 
                themeColor="sunflower" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - The Keepsake Moment */}
      <section className="bg-parchment text-ink py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Floating Book Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: -15 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-16 relative w-64 h-80 mx-auto perspective-[1000px]"
          >
            <div className="w-full h-full bg-warm-cream rounded-r-2xl rounded-l-sm shadow-2xl shadow-sunflower/20 border-l-8 border-ember flex flex-col items-center justify-center p-6 transform rotate-y-[-15deg] rotate-x-[5deg] animate-float">
              <div className="w-32 h-32 bg-horizon/20 rounded-full mb-6 overflow-hidden relative">
                 <Image src="https://picsum.photos/seed/storybook-cover/200/200" alt="Cover art" fill className="object-cover" />
              </div>
              <h4 className="font-playfair text-ink font-bold text-xl mb-2 text-center">The Great Space Race</h4>
              <p className="font-nunito text-ink/60 text-xs uppercase tracking-widest text-center">Written by Leo, age 6</p>
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair italic text-4xl md:text-5xl font-medium mb-8 text-ember"
          >
            &quot;The memory isn&apos;t the story. It&apos;s making it together.&quot;
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-lora text-xl text-ink/70 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            A child&apos;s voice directing the adventure. A parent reading it back at bedtime. A book on the shelf years later that starts with &apos;This story was written by…&apos;
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-sunflower/10 border border-sunflower/20 rounded-full px-6 py-3 font-nunito text-sm text-ember"
          >
            <BookOpen className="w-5 h-5" />
            <span>Every story can become a real book — delivered to your door.</span>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Safety & Trust */}
      <section className="bg-warm-cream text-ink py-24 px-6 border-t border-ink/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Built for little imaginations.<br/>Trusted by parents.</h2>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-horizon/10 rounded-full flex items-center justify-center shrink-0 text-horizon">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-nunito font-bold text-lg mb-1">Age-Appropriate Always</h4>
                <p className="font-lora text-ink/70">Every story is reviewed for ages 4–10 before your child sees it.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-candy/10 rounded-full flex items-center justify-center shrink-0 text-candy">
                <Ban className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-nunito font-bold text-lg mb-1">Zero Distractions</h4>
                <p className="font-lora text-ink/70">No ads, no external links, no gamification. Just pure storytelling.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-sunflower/10 rounded-full flex items-center justify-center shrink-0 text-ember">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-nunito font-bold text-lg mb-1">Privacy First</h4>
                <p className="font-lora text-ink/70">No personal data collected from children. Your family&apos;s stories are private.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-horizon/10 rounded-full flex items-center justify-center shrink-0 text-horizon">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-nunito font-bold text-lg mb-1">COPPA Compliant</h4>
                <p className="font-lora text-ink/70">Built from the ground up to meet the highest standards of child safety online.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PricingSection />

      {/* Footer */}
      <footer className="bg-ink text-warm-cream py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <LogoConcept1 />
            <p className="font-nunito text-warm-cream/50 text-sm mt-4">© 2026 StoryWorld. All rights reserved.</p>
          </div>
          <div className="flex gap-8 font-nunito text-sm font-semibold">
            <Link href="#" className="hover:text-sunflower transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-sunflower transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-sunflower transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
