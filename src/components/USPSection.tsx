"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Users, Sprout } from "lucide-react";

const usps = [
  { icon: Sprout, title: "Seasonal Harvests", body: "Picked at peak freshness to protect ecosystems and flavor." },
  { icon: Recycle, title: "Zero Waste", body: "A circular model that repurposes byproducts into new value." },
  { icon: Users, title: "Community-Powered", body: "Fair pay and training programs that build local resilience." },
  { icon: Leaf, title: "Sustainably Sourced", body: "Traceable, transparent, and third‑party verified practices." },
];

export function USPSection() {
  return (
    <section className="py-24 bg-[#EEF2ED]/30">
      <div className="mx-auto container-fluid px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#2E7D32]/10 rounded-full text-sm font-medium text-[#2E7D32] mb-4">
            Why Roki
          </div>
          <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6">
            Sustainability at every step
          </h2>
          <p className="text-lg text-[#1A1A1A]/80 max-w-3xl mx-auto">
            Roki's zero‑waste circular model turns byproducts into new life — nourishing communities while protecting the land.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#D5D1C6]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2E7D32]/10 rounded-2xl mb-6 group-hover:bg-[#2E7D32]/20 transition-colors">
                  <usp.icon className="h-7 w-7 text-[#2E7D32]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B3D2E] mb-3">{usp.title}</h3>
                <p className="text-[#1A1A1A]/70 leading-relaxed">{usp.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



