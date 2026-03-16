import { CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
          <Card className="rounded-3xl p-8 border-ink/5">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-playfair text-2xl font-bold mb-2">The Spark</CardTitle>
              <CardDescription className="font-lora text-ink/60 text-sm h-10">Perfect for weekly bedtime stories</CardDescription>
            </CardHeader>
            <CardContent className="p-0 mb-8">
              <div className="mb-8">
                <span className="font-nunito text-4xl font-bold text-ink">$8</span>
                <span className="font-nunito text-ink/50">/mo</span>
              </div>
              <ul className="space-y-4 font-lora text-sm text-ink/80">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Up to 4 new adventures every month</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Unlimited reading of saved stories</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> PDF downloads included</li>
              </ul>
            </CardContent>
            <CardFooter className="p-0">
              <Button variant="outline" className="w-full">Choose Spark</Button>
            </CardFooter>
          </Card>

          {/* Standard (Highlighted) */}
          <Card className="rounded-3xl p-8 border-2 border-sunflower relative transform md:-translate-y-4 shadow-2xl shadow-sunflower/20">
            <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sunflower text-ember font-nunito font-bold text-xs uppercase tracking-widest px-4 py-1">
              Recommended
            </Badge>
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-playfair text-2xl font-bold mb-2 text-ember">The Studio</CardTitle>
              <CardDescription className="font-lora text-ink/60 text-sm h-10">Unlimited creativity, one story at a time</CardDescription>
            </CardHeader>
            <CardContent className="p-0 mb-8">
              <div className="mb-8">
                <span className="font-nunito text-4xl font-bold text-ink">$25</span>
                <span className="font-nunito text-ink/50">/mo</span>
              </div>
              <ul className="space-y-4 font-lora text-sm text-ink/80">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Up to 15 new adventures every month</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Premium illustration styles</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> 1 free printed book per year</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Audio narration included</li>
              </ul>
            </CardContent>
            <CardFooter className="p-0">
              <Button variant="default" className="w-full">Choose Studio</Button>
            </CardFooter>
          </Card>

          {/* Unlimited */}
          <Card className="rounded-3xl p-8 border-ink/5">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="font-playfair text-2xl font-bold mb-2">The Library</CardTitle>
              <CardDescription className="font-lora text-ink/60 text-sm h-10">For the child who never stops imagining</CardDescription>
            </CardHeader>
            <CardContent className="p-0 mb-8">
              <div className="mb-8">
                <span className="font-nunito text-4xl font-bold text-ink">$50</span>
                <span className="font-nunito text-ink/50">/mo</span>
              </div>
              <ul className="space-y-4 font-lora text-sm text-ink/80">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Unlimited adventures every month</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> All premium features</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> 3 free printed books per year</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-ember shrink-0" /> Priority printing & shipping</li>
              </ul>
            </CardContent>
            <CardFooter className="p-0">
              <Button variant="outline" className="w-full">Choose Library</Button>
            </CardFooter>
          </Card>
        </div>

        <p className="text-center font-nunito text-sm text-ink/50 mt-12">First month free. Cancel anytime. No commitment.</p>
      </div>
    </section>
  );
}
