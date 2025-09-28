"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function LifestyleCard() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto container-fluid px-4">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-[color:var(--leaf-600)]/20 to-[color:var(--leaf-900)]/40">
            <div className="absolute inset-0 bg-[color:var(--leaf-900)]/30"></div>
            
            {/* Placeholder content for now */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-[color:var(--cream-50)]">
                <div className="text-8xl mb-6">🍳</div>
                <div className="text-2xl font-display font-medium mb-2">Cooking with Purpose</div>
                <div className="text-lg opacity-80">Lifestyle image coming soon</div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-96">
              <div className="bg-[color:var(--cream-50)]/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-[color:var(--clay-300)]/20">
                <div className="text-[color:var(--leaf-600)] uppercase tracking-wide text-xs mb-3">
                  Sustainable Living
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-[color:var(--leaf-900)] mb-4">
                  Every meal is a choice for the planet
                </h3>
                <p className="text-[color:var(--bark-900)]/70 mb-6 leading-relaxed">
                  When you choose Roki palm oil, you're not just cooking—you're supporting regenerative agriculture, 
                  fair trade practices, and zero-waste circularity. Every drop tells a story of sustainability.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[color:var(--leaf-900)]">100%</div>
                    <div className="text-xs text-[color:var(--bark-900)]/60">Zero Waste</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-[color:var(--leaf-900)]">500+</div>
                    <div className="text-xs text-[color:var(--bark-900)]/60">Farmers</div>
                  </div>
                </div>

                <a 
                  href="/sustainability" 
                  className="inline-flex items-center gap-2 text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors font-medium"
                >
                  Learn about our impact
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



