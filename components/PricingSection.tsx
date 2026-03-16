import { CheckCircle2 } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="bg-warm-cream text-ink py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">Start the adventure</h2>
          <p className="font-lora text-ink/70 text-lg">Choose the perfect plan for your little author.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Starter */}
          <div className="bg-white rounded-3xl p-8 border border-ink/5 shadow-sm">
            <h3 className="font-playfair text-2xl font-bold mb-2">The Spark</h3>
            <p className="font-lora text-ink/60 text-sm mb-6 h-10">Perfect for weekly bedtime stories</p>
            <div className="mb-8">
              <span className="font-nunito text-4xl font-bold text-ink">$8</span>
              <span className="font-nunito text-ink/50">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 font-lora text-sm text-ink/80">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Up to 4 new adventures every month</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Unlimited reading of saved stories</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> PDF downloads included</li>
            </ul>
            <button className="w-full py-3 rounded-full font-nunito font-bold border border-ink/20 hover:bg-ink/5 transition-colors">Choose Spark</button>
          </div>

          {/* Standard (Highlighted) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-sunflower relative transform md:-translate-y-4 shadow-2xl shadow-sunflower/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sunflower text-ember font-nunito font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full">
              Recommended
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-2 text-ember">The Studio</h3>
            <p className="font-lora text-ink/60 text-sm mb-6 h-10">Unlimited creativity, one story at a time</p>
            <div className="mb-8">
              <span className="font-nunito text-4xl font-bold text-ink">$25</span>
              <span className="font-nunito text-ink/50">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 font-lora text-sm text-ink/80">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Up to 15 new adventures every month</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Premium illustration styles</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> 1 free printed book per year</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Audio narration included</li>
            </ul>
            <button className="w-full py-3 rounded-full font-nunito font-bold bg-ember text-white hover:bg-ember/90 transition-colors shadow-lg shadow-ember/20">Choose Studio</button>
          </div>

          {/* Unlimited */}
          <div className="bg-white rounded-3xl p-8 border border-ink/5 shadow-sm">
            <h3 className="font-playfair text-2xl font-bold mb-2">The Library</h3>
            <p className="font-lora text-ink/60 text-sm mb-6 h-10">For the child who never stops imagining</p>
            <div className="mb-8">
              <span className="font-nunito text-4xl font-bold text-ink">$50</span>
              <span className="font-nunito text-ink/50">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 font-lora text-sm text-ink/80">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Unlimited adventures every month</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> All premium features</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> 3 free printed books per year</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Priority printing & shipping</li>
            </ul>
            <button className="w-full py-3 rounded-full font-nunito font-bold border border-ink/20 hover:bg-ink/5 transition-colors">Choose Library</button>
          </div>
        </div>

        <p className="text-center font-nunito text-sm text-ink/50 mt-12">First month free. Cancel anytime. No commitment.</p>
      </div>
    </section>
  );
}
