"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://www.gaiaherbs.com/cdn/shop/videos/c/vp/04eedefc4f8248559842909d6d0e0c5e/04eedefc4f8248559842909d6d0e0c5e.HD-1080p-7.2Mbps-57598770.mp4?v=0" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Content - responsive positioning */}
      <div className="relative z-10 h-screen flex items-end md:justify-end justify-center">
        <div className="max-w-lg mx-8 mb-16 text-center md:text-right">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-white mb-4"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '24px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              THE PUREST PALM OIL ON EARTH
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white mb-8 text-3xl md:text-5xl lg:text-6xl"
              style={{
                fontFamily: 'BaskervilleSerial, serif',
                fontWeight: 400,
                lineHeight: '1.1'
              }}
            >
              Sustainability Grows Here
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a 
                href="/learn" 
                className="inline-block bg-[#0B3D2E] text-white px-6 py-3 md:px-8 rounded-full font-medium hover:bg-[#2E7D32] transition-all duration-300 hover:scale-105 shadow-lg"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                LEARN MORE
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
  );
}


