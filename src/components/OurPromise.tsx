"use client";

import { motion } from "framer-motion";

export function OurPromise() {
  const stats = [
    {
      number: "25",
      label: "YEARS",
      description: "From soil to shelf, we put people and planet first, crafting the highest-quality palm oil to support sustainable livelihoods and forest conservation."
    },
    {
      number: "1,500",
      label: "ACRES",
      description: "1,500+ Acres of Certified Sustainable (RSPO) palm oil plantations in Nigerian agricultural regions, preserving biodiversity while producing premium oil."
    },
    {
      number: "100",
      label: "PERCENT",
      description: "100% transparency. We get to the root of responsible sourcing, going to the ends of the earth to find & grow the purest palm oil."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#F4F3EF] to-white">
      <div className="mx-auto container-fluid px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
          >
            Our Promise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B3D2E] mb-8"
          >
            The Purest Palm Oil on Earth
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[#EEF2ED] to-[#D5D1C6] rounded-2xl overflow-hidden relative border border-[#D5D1C6]/60">
              {/* Placeholder for Nigerian palm plantation landscape */}
              <div className="absolute inset-0 bg-[#2E7D32]/10" />
              
              {/* Overlay content to simulate a landscape image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-[#0B3D2E]">
                  <div className="text-6xl mb-3">🌴</div>
                  <div className="text-lg font-medium mb-2">Nigerian Palm Plantations</div>
                  <div className="text-sm">Sustainable cultivation in harmony with nature</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Side */}
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-[#D5D1C6]/60 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  {/* Large Number */}
                  <div className="flex-shrink-0">
                    <div className="text-5xl md:text-6xl font-bold text-[#0B3D2E] leading-none">
                      {stat.number}
                    </div>
                    <div className="text-sm font-semibold text-[#C7A15A] tracking-wide uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="flex-1 pt-2">
                    <p className="text-[#1A1A1A]/80 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#1A1A1A]/80 mb-8 leading-relaxed">
              Every drop of Roki Foods palm oil represents our unwavering commitment to environmental stewardship, 
              fair trade practices, and the highest quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sustainability"
                className="inline-block bg-[#0B3D2E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2E7D32] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Our Sustainability Practices
              </a>
              <a
                href="/story"
                className="inline-block border-2 border-[#0B3D2E] text-[#0B3D2E] px-8 py-4 rounded-full font-medium hover:bg-[#0B3D2E] hover:text-white transition-all duration-300"
              >
                Read Our Story
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
