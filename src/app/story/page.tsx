"use client";

import { motion } from "framer-motion";
import { ArrowRight, TreePine, Users, Award, Heart, Leaf, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function StoryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://cdn.businessday.ng/2019/07/oil-palm-plantation.jpg"
            alt="Nigerian Palm Oil Plantation"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-10" />
        </div>
        
        <div className="relative z-20 mx-auto container-fluid px-4 pb-20 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-white/60 rounded-full px-6 py-3 mb-8 shadow-lg"
            >
              <Heart className="h-4 w-4 text-[#2E7D32]" />
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
                Our Journey
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-8 font-bold"
              style={{
                fontFamily: 'BaskervilleSerial, serif',
                fontSize: 'clamp(56px, 8vw, 96px)',
                fontWeight: '400',
                lineHeight: 'clamp(64px, 9vw, 104px)',
                textShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
            >
              Our Story of
              <br />
              <span className="text-[#C7A15A]">Purpose & Progress</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed"
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}
            >
              From banking to agriculture — transforming Nigeria's palm oil industry through sustainable practices and community empowerment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <a
                href="#founder"
                className="inline-block bg-white text-[#0B3D2E] px-10 py-5 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl text-lg"
              >
                Meet Our Founder
              </a>
              <a
                href="#achievements"
                className="inline-block border-2 border-white text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-[#0B3D2E] transition-all duration-300 text-lg shadow-xl"
              >
                Our Achievements
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
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
              Our Foundation
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6 font-bold">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#D5D1C6]/60 bg-[#EEF2ED]/50 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2E7D32]/10 rounded-2xl mb-6">
                <TreePine className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-4">Our Mission</h3>
              <p className="text-[#1A1A1A]/85 leading-relaxed">
                At Roki Oil Palm, our mission is to transform Nigeria's palm oil sector by producing high-quality, traceable palm oil and maximizing every by-product through zero-waste processing. We are committed to reducing Free Fatty Acid (FFA) levels, ensuring global-standard quality, and creating inclusive opportunities for women and youth.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#D5D1C6]/60 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2E7D32]/10 rounded-2xl mb-6">
                <Leaf className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-4">Our Vision</h3>
              <p className="text-[#1A1A1A]/85 leading-relaxed">
                To become a leading integrated oil palm processor and exporter in Africa.
              </p>
            </motion.div>
        </div>
        </div>
      </section>

      {/* Founder Note */}
      <section id="founder" className="py-24 bg-[#EEF2ED]/30">
        <div className="mx-auto container-fluid px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-3xl border border-[#D5D1C6]/60 bg-white p-8 md:p-12 shadow-sm">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-[#C7A15A]/10 rounded-full text-sm font-medium text-[#C7A15A] mb-6">
                  From our founder
                </div>
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#2E7D32]/20 to-[#0B3D2E]/30 rounded-full flex items-center justify-center">
                    <div className="text-3xl">👩🏾‍💼</div>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-[#0B3D2E] text-xl">Ifeyinwa Ogar</div>
                    <div className="text-[#1A1A1A]/60">Founder & CEO</div>
                  </div>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-[#1A1A1A]/90 leading-relaxed">
                <p className="text-xl mb-6">
                  "Roki Foods Ltd was born from a bold decision. I left a successful banking career to pursue my passion for agriculture and food systems. I saw firsthand the inefficiencies in Nigeria's palm oil value chain and the struggles of smallholder farmers, especially women, to access fair markets and sustainable income."
                </p>
                <p className="mb-6">
                  What started as a small idea of sourcing and packaging food bundles quickly evolved into a vision to transform palm oil production in Nigeria and beyond. From our headquarters in Uyo, Akwa Ibom State, with a branch in Lagos, Roki has grown into a multi-faceted agribusiness focused on producing, processing, packaging, and exporting palm oil and its by-products.
                </p>
                <p>
                  Today, we provide white-label palm oil supplies to African stores abroad and retail stores locally, including our innovative 500ml souvenir palm oil packaging that brings cultural heritage to events and global markets.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Achievements */}
      <section id="achievements" className="py-24 bg-white">
        <div className="mx-auto container-fluid px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#2E7D32]/10 rounded-full text-sm font-medium text-[#2E7D32] mb-4">
              Key Achievements
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6 font-bold">
              Pivotal Moments
            </h2>
            <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
              From empowering farmers to international recognition, here are the milestones that define our journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#D5D1C6]/60 bg-[#EEF2ED]/50 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2E7D32]/10 rounded-2xl mb-6">
                <Users className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-4">500+ Women Empowered</h3>
              <p className="text-[#1A1A1A]/85 leading-relaxed">
                Engaged 500+ women farmers and processors, providing jobs, training, and stable markets across Nigeria's palm oil value chain.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#D5D1C6]/60 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#C7A15A]/10 rounded-2xl mb-6">
                <Award className="h-7 w-7 text-[#C7A15A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-4">WEIDE Fund Recognition</h3>
              <p className="text-[#1A1A1A]/85 leading-relaxed">
                Selected as a beneficiary of the WEIDE Fund Discovery Grant in 2025, alongside 12 months of technical support by the WTO to expand our export readiness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#D5D1C6]/60 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2E7D32]/10 rounded-2xl mb-6">
                <MapPin className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-4">International Trade Fairs</h3>
              <p className="text-[#1A1A1A]/85 leading-relaxed">
                Invited to exhibit at major international trade fairs, including IATF, showcasing Nigerian palm oil excellence to global markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#D5D1C6]/60 bg-[#EEF2ED]/50 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#C7A15A]/10 rounded-2xl mb-6">
                <TreePine className="h-7 w-7 text-[#C7A15A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B3D2E] mb-4">40,000L Export Capacity</h3>
              <p className="text-[#1A1A1A]/85 leading-relaxed">
                Built a distribution capacity of up to 40,000 litres of palm oil at a go for export markets, establishing Roki as a serious player in international trade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
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
              Community Impact
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6 font-bold">
              Growing Together
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
              Our commitment extends beyond production to building resilient communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#D5D1C6]/60 bg-[#EEF2ED]/60 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2E7D32]/10 rounded-2xl mb-6">
                <Award className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2E7D32] mb-3">Training</h3>
              <p className="text-[#1A1A1A]/85 leading-relaxed">Workshops on safe processing, regenerative practices, and small business skills.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#D5D1C6]/60 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2E7D32]/10 rounded-2xl mb-6">
                <Users className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2E7D32] mb-3">Fair Pay</h3>
              <p className="text-[#1A1A1A]/85 leading-relaxed">Transparent pricing and long‑term contracts that build resilient incomes.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#D5D1C6]/60 bg-[#EEF2ED]/60 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2E7D32]/10 rounded-2xl mb-6">
                <Leaf className="h-7 w-7 text-[#2E7D32]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2E7D32] mb-3">Waste Reuse</h3>
              <p className="text-[#1A1A1A]/85 leading-relaxed">Byproducts become soap, compost, or fuel—keeping value in the community.</p>
            </motion.div>
        </div>
        </div>
      </section>

      {/* Photo Gallery */}
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
              Behind the Scenes
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6 font-bold">A Day in Season</h2>
            <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
              From grove care to harvest, discover the daily rhythms of sustainable palm oil production.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
          {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-2xl bg-[#EEF2ED] border border-[#D5D1C6]/60 hover:shadow-lg transition-all duration-300 flex items-center justify-center group cursor-pointer"
              >
                <div className="text-center text-[#2E7D32]/60 group-hover:text-[#2E7D32] transition-colors">
                  <div className="text-3xl mb-2">📸</div>
                  <div className="text-xs">Photo {i + 1}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B3D2E]">
        <div className="mx-auto container-fluid px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-bold">
              From Grove to Your Kitchen
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Taste the calm, circular difference. Small batches, big impact, transparent sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/learn" 
                className="group inline-flex items-center gap-2 bg-white text-[#0B3D2E] px-8 py-4 rounded-full font-medium hover:bg-[#EEF2ED] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More
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


