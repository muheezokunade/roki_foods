"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Users, Globe, ArrowRight, CheckCircle, Award } from "lucide-react";

const practices = [
  {
    icon: Recycle,
    title: "Zero Waste Process",
    description: "Every byproduct is transformed into valuable products like soaps, fertilizers, and biofuels.",
    details: "Our circular model ensures 99.8% waste reduction through innovative processing techniques."
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description: "Fair wages, training programs, and local partnerships that build lasting prosperity.",
    details: "We work directly with 200+ local farmers, providing fair trade prices and skill development."
  },
  {
    icon: Globe,
    title: "Ecosystem Protection",
    description: "Sustainable harvesting practices that preserve biodiversity and soil health.",
    details: "Our methods protect 15,000+ hectares of forest while maintaining agricultural productivity."
  },
  {
    icon: Award,
    title: "Third-Party Verified",
    description: "Certified by leading sustainability organizations and transparent reporting.",
    details: "RSPO, Fair Trade, and Rainforest Alliance certified with annual impact assessments."
  }
];

const impactStats = [
  { number: "99.8%", label: "Waste Reduction", description: "Circular processing efficiency" },
  { number: "200+", label: "Local Farmers", description: "Direct partnerships" },
  { number: "15,000+", label: "Hectares Protected", description: "Forest conservation" },
  { number: "3x", label: "Fair Wages", description: "Above market rates" }
];

const timeline = [
  {
    year: "2020",
    title: "Foundation",
    description: "Started with a vision for sustainable palm oil production"
  },
  {
    year: "2021",
    title: "First Partnership",
    description: "Established relationships with 50 local farmers"
  },
  {
    year: "2022",
    title: "Zero Waste Achievement",
    description: "Achieved 95% waste reduction through circular processing"
  },
  {
    year: "2023",
    title: "Certification",
    description: "Received RSPO and Fair Trade certifications"
  },
  {
    year: "2024",
    title: "Expansion",
    description: "Reached 200+ farmers and 99.8% waste reduction"
  }
];

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2ED] via-[#F4F3EF] to-[#D5D1C6]/20" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#2E7D32]/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#C7A15A]/10 rounded-full blur-xl" />
        
        <div className="relative z-10 mx-auto container-fluid px-4 pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl ml-auto text-center md:text-right"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#D5D1C6]/60 rounded-full px-4 py-2 mb-8"
            >
              <Leaf className="h-4 w-4 text-[#2E7D32]" />
              <span 
                className="text-sm font-bold text-[#0B3D2E] tracking-wider uppercase"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  lineHeight: '20px',
                  letterSpacing: '0.1em'
                }}
              >
                Our Commitment
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#0B3D2E] mb-6"
              style={{
                fontFamily: 'BaskervilleSerial, serif',
                fontSize: 'clamp(48px, 6vw, 80px)',
                fontWeight: '400',
                lineHeight: 'clamp(56px, 7vw, 88px)'
              }}
            >
              Sustainable
              <br />
              <span className="text-[#2E7D32]">Future</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl md:ml-auto mb-12 leading-relaxed"
            >
              Our zero‑waste circular model reuses byproducts and reduces emissions while supporting local livelihoods. 
              Every purchase makes a positive impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end"
            >
              <a
                href="#practices"
                className="inline-block bg-[#0B3D2E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2E7D32] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Our Practices
              </a>
              <a
                href="#impact"
                className="inline-block border-2 border-[#0B3D2E] text-[#0B3D2E] px-8 py-4 rounded-full font-medium hover:bg-[#0B3D2E] hover:text-white transition-all duration-300"
              >
                View Impact
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-[#2E7D32]/60 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-[#2E7D32] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Impact Stats */}
      <section id="impact" className="py-24 bg-white">
        <div className="mx-auto container-fluid px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#2E7D32]/10 rounded-full text-sm font-medium text-[#2E7D32] mb-4">
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6"
              style={{
                fontFamily: 'BaskervilleSerial, serif',
                fontWeight: '400'
              }}
            >
              Measurable Results
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
              Real numbers that demonstrate our commitment to people and planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#2E7D32] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-[#0B3D2E] mb-1">{stat.label}</div>
                <div className="text-sm text-[#1A1A1A]/70">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section id="practices" className="py-24 bg-[#EEF2ED]/30">
        <div className="mx-auto container-fluid px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#2E7D32]/10 rounded-full text-sm font-medium text-[#2E7D32] mb-4">
              Our Practices
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6"
              style={{
                fontFamily: 'BaskervilleSerial, serif',
                fontWeight: '400'
              }}
            >
              Sustainable Methods
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
              Four pillars of sustainability that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#D5D1C6]/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2E7D32]/10 rounded-2xl mb-6 group-hover:bg-[#2E7D32]/20 transition-colors">
                    <practice.icon className="h-7 w-7 text-[#2E7D32]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0B3D2E] mb-3">{practice.title}</h3>
                  <p className="text-[#1A1A1A]/70 leading-relaxed mb-4">{practice.description}</p>
                  <div className="text-sm text-[#2E7D32] font-medium">{practice.details}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto container-fluid px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#2E7D32]/10 rounded-full text-sm font-medium text-[#2E7D32] mb-4">
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6"
              style={{
                fontFamily: 'BaskervilleSerial, serif',
                fontWeight: '400'
              }}
            >
              Milestones
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
              Key moments in our sustainability journey.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#D5D1C6]/60"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-8 mb-12 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-[#2E7D32] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-[#0B3D2E] mb-2">{item.title}</h3>
                    <p className="text-[#1A1A1A]/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B3D2E]">
        <div className="mx-auto container-fluid px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6"
              style={{
                fontFamily: 'BaskervilleSerial, serif',
                fontWeight: '400'
              }}
            >
              Join Our Mission
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Every purchase supports sustainable practices and local communities. 
              Be part of the change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-2 bg-white text-[#0B3D2E] px-8 py-4 rounded-full font-medium hover:bg-[#EEF2ED] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/learn" 
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#0B3D2E] transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}



