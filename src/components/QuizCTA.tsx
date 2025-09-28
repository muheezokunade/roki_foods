"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export function QuizCTA() {
  return (
    <section className="py-12 bg-gradient-to-r from-[color:var(--leaf-900)] to-[color:var(--leaf-600)] text-[color:var(--cream-50)]">
      <div className="mx-auto container-fluid px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-[color:var(--sun-400)]" />
              <span className="text-sm font-medium text-[color:var(--sun-400)]">Personalized Recommendations</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">
              Find your perfect palm oil match
            </h3>
            <p className="text-[color:var(--cream-50)]/80 text-sm md:text-base">
              Take our quick quiz to discover which Roki products best fit your cooking style and values.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a 
              href="/quiz"
              className="inline-flex items-center gap-2 bg-[color:var(--sun-400)] text-[color:var(--bark-900)] px-6 py-3 rounded-full font-medium hover:bg-[color:var(--sun-400)]/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Start Quiz
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



