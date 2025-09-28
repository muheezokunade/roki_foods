"use client";

import Image from "next/image";

export function VideoBanner() {
  return (
    <section className="py-16">
      <div className="mx-auto container-fluid px-4">
        <div className="rounded-2xl overflow-hidden border border-[color:var(--clay-300)]/60 bg-[color:var(--mist-100)] relative">
          <div className="w-full h-[260px] md:h-[420px] bg-gradient-to-br from-[color:var(--leaf-600)]/20 to-[color:var(--leaf-900)]/30 flex items-center justify-center">
            <div className="text-center text-[color:var(--cream-50)]">
              <div className="text-4xl mb-2">🌱</div>
              <div className="text-lg font-medium">Sustainable Harvest</div>
              <div className="text-sm opacity-80">Video content coming soon</div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-[color:var(--bark-900)]/70">
          Farm footage placeholder — replace with hero reel when available.
        </div>
      </div>
    </section>
  );
}


