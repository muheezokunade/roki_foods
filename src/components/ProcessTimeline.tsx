"use client";

import { motion } from "framer-motion";
import { Sprout, Heart, Leaf, FlaskConical } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      number: "STEP 1",
      title: "Sustainable cultivation begins",
      description: "We partner with smallholder farmers to cultivate oil palms using regenerative practices that enrich soil health and preserve biodiversity in Nigerian agricultural regions.",
      icon: Sprout,
    },
    {
      number: "STEP 2", 
      title: "Nurture & harvest with care",
      description: "Our farmers hand-select only the ripest fruit bunches at peak maturity, ensuring maximum oil content while maintaining the natural ecosystem balance.",
      icon: Heart,
    },
    {
      number: "STEP 3",
      title: "Extract with zero waste",
      description: "Every part of the palm fruit is utilized through our circular processing methods, extracting pure oil while converting waste into biomass energy and organic fertilizer.",
      icon: Leaf,
    },
    {
      number: "STEP 4", 
      title: "Test for purity & quality",
      description: "Each batch undergoes rigorous testing for contaminants and quality markers in our certified laboratory. Only oil meeting our highest standards reaches your table.",
      icon: FlaskConical,
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F4F3EF]">
      <div className="mx-auto container-fluid px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6"
          >
            Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[#0B3D2E] mb-6"
          >
            From Seed to Sustainability
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto"
          >
            Discover how we craft the world's purest palm oil through time-honored traditions and innovative sustainable practices.
          </motion.p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-[#2E7D32] to-[#0B3D2E] rounded-2xl overflow-hidden relative">
              {/* Placeholder for palm plantation image */}
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/80 text-center">
                  <Sprout className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Sustainable Palm Cultivation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps Side */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#2E7D32]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#2E7D32]/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-[#2E7D32]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-[#2E7D32] tracking-wide uppercase mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-serif text-[#0B3D2E] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#1A1A1A]/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line (not for last item) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 mt-20 w-px h-8 bg-gradient-to-b from-[#2E7D32]/30 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#D5D1C6]/30 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif text-[#0B3D2E] mb-4">
              Experience the difference
            </h3>
            <p className="text-[#1A1A1A]/70 mb-8 leading-relaxed">
              Taste the purity that comes from generations of sustainable farming wisdom combined with modern quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/learn"
                className="inline-block bg-[#0B3D2E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2E7D32] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Learn More
              </a>
              <a
                href="/story"
                className="inline-block border-2 border-[#2E7D32] text-[#2E7D32] px-8 py-4 rounded-full font-medium hover:bg-[#2E7D32] hover:text-white transition-all duration-300"
              >
                Learn Our Story
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
