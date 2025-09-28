"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Image as ImageIcon, Filter, Grid, List, Camera } from "lucide-react";

const mediaCategories = ["All", "Farm", "Process", "Community", "Products", "Lifestyle"];

const mediaItems = [
  {
    id: 1,
    type: "image",
    category: "Farm",
    title: "Sustainable Palm Grove",
    description: "Our regenerative farming practices protect biodiversity while producing premium palm oil.",
    thumbnail: "/vercel.svg",
    tags: ["Agriculture", "Sustainability", "Nature"]
  },
  {
    id: 2,
    type: "video",
    category: "Process",
    title: "Cold Pressing Process",
    description: "Watch how we gently extract oil to preserve nutrients and flavor.",
    thumbnail: "/vercel.svg",
    tags: ["Production", "Quality", "Traditional"]
  },
  {
    id: 3,
    type: "image",
    category: "Community",
    title: "Local Farmers",
    description: "Meet the farmers who make our sustainable palm oil possible.",
    thumbnail: "/vercel.svg",
    tags: ["People", "Community", "Partnership"]
  },
  {
    id: 4,
    type: "image",
    category: "Products",
    title: "Premium Palm Oil",
    description: "Our carefully crafted palm oil in various sizes for every kitchen.",
    thumbnail: "/vercel.svg",
    tags: ["Products", "Quality", "Packaging"]
  },
  {
    id: 5,
    type: "video",
    category: "Lifestyle",
    title: "Cooking with Roki",
    description: "See how chefs and home cooks use our palm oil in their kitchens.",
    thumbnail: "/vercel.svg",
    tags: ["Cooking", "Lifestyle", "Recipes"]
  },
  {
    id: 6,
    type: "image",
    category: "Farm",
    title: "Wildlife Habitat",
    description: "Protected areas within our farm support local wildlife and biodiversity.",
    thumbnail: "/vercel.svg",
    tags: ["Wildlife", "Conservation", "Biodiversity"]
  },
  {
    id: 7,
    type: "image",
    category: "Process",
    title: "Zero Waste Workshop",
    description: "Our circular processing facility where every part of the harvest is utilized.",
    thumbnail: "/vercel.svg",
    tags: ["Zero Waste", "Innovation", "Circular Economy"]
  },
  {
    id: 8,
    type: "video",
    category: "Community",
    title: "Education Program",
    description: "Training local farmers in sustainable agriculture techniques.",
    thumbnail: "/vercel.svg",
    tags: ["Education", "Training", "Development"]
  },
  {
    id: 9,
    type: "image",
    category: "Lifestyle",
    title: "Farm to Table",
    description: "The journey from our sustainable farm to your kitchen table.",
    thumbnail: "/vercel.svg",
    tags: ["Journey", "Traceability", "Quality"]
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredMedia = mediaItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#EEF2ED] via-[#F4F3EF] to-[#D5D1C6]/20" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#2E7D32]/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#C7A15A]/10 rounded-full blur-xl" />
        
        <div className="relative z-10 mx-auto container-fluid px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#D5D1C6]/60 rounded-full px-4 py-2 mb-8"
            >
              <Camera className="h-4 w-4 text-[#2E7D32]" />
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
                Visual Stories
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
              Visual
              <br />
              <span className="text-[#2E7D32]">Gallery</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Explore our sustainable farm, meet our community, and see the journey from harvest to your kitchen. 
              Every image tells a story of environmental stewardship and social responsibility.
            </motion.p>
          </motion.div>
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

      {/* Filters and Controls */}
      <section className="py-16 bg-white border-y border-[#D5D1C6]/30">
        <div className="mx-auto container-fluid px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 text-[#0B3D2E] font-medium mb-4">
              <Filter className="h-5 w-5" />
              <span>Filter by category</span>
            </div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {mediaCategories.map((category) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: mediaCategories.indexOf(category) * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#0B3D2E] text-white shadow-lg"
                      : "bg-[#EEF2ED] text-[#0B3D2E] hover:bg-[#D5D1C6] hover:scale-105"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 bg-[#EEF2ED] rounded-full p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "grid" 
                    ? "bg-[#0B3D2E] text-white" 
                    : "text-[#0B3D2E] hover:bg-[#D5D1C6]"
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === "list" 
                    ? "bg-[#0B3D2E] text-white" 
                    : "text-[#0B3D2E] hover:bg-[#D5D1C6]"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid/List */}
      <section className="py-24 bg-[#EEF2ED]/20">
        <div className="mx-auto container-fluid px-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-3xl overflow-hidden border border-[#D5D1C6]/60 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    {/* Media Thumbnail */}
                    <div className="relative h-64 bg-gradient-to-br from-[#2E7D32]/20 to-[#0B3D2E]/30">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          {item.type === "video" ? (
                            <>
                              <Play className="h-12 w-12 mx-auto mb-2" />
                              <div className="text-sm opacity-80">Video content</div>
                            </>
                          ) : (
                            <>
                              <ImageIcon className="h-12 w-12 mx-auto mb-2" />
                              <div className="text-sm opacity-80">Image content</div>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#C7A15A] text-[#1A1A1A] text-xs font-medium px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>

                      {/* Type Indicator */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-[#1A1A1A] text-xs font-medium px-2 py-1 rounded-full">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-[#0B3D2E] mb-2 group-hover:text-[#2E7D32] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="bg-[#EEF2ED] text-[#0B3D2E] text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredMedia.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="flex gap-6 bg-white rounded-3xl border border-[#D5D1C6]/60 p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    {/* Thumbnail */}
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#2E7D32]/20 to-[#0B3D2E]/30">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          {item.type === "video" ? (
                            <Play className="h-8 w-8 mx-auto" />
                          ) : (
                            <ImageIcon className="h-8 w-8 mx-auto" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="bg-[#C7A15A] text-[#1A1A1A] text-xs font-medium px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span className="bg-[#EEF2ED] text-[#0B3D2E] text-xs px-2 py-1 rounded-full">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-[#0B3D2E] mb-2 group-hover:text-[#2E7D32] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="bg-[#EEF2ED] text-[#0B3D2E] text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredMedia.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-xl font-medium text-[#0B3D2E] mb-2">No media found</h3>
              <p className="text-[#1A1A1A]/70">Try selecting a different category.</p>
            </motion.div>
          )}
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
              Want to see more?
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Follow us on social media for behind-the-scenes content and updates from our farm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/about"
                className="group inline-flex items-center gap-2 bg-white text-[#0B3D2E] px-8 py-4 rounded-full font-medium hover:bg-[#EEF2ED] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn About Us
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-[#0B3D2E] transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}



