"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User, Search, Filter, BookOpen, ChefHat, Leaf, Heart, HelpCircle } from "lucide-react";

const categories = ["All", "Recipes", "Cooking Tips", "Sustainability", "Health & Wellness", "FAQs"];

const content = [
  {
    id: 1,
    type: "Recipe",
    category: "Recipes",
    title: "Seasonal Palm Stew with Wild Greens",
    excerpt: "A nourishing, one-pot meal that celebrates seasonal ingredients and zero-waste cooking techniques.",
    author: "Chef Maria",
    readTime: "8 min read",
    image: "/vercel.svg",
    tags: ["Seasonal", "One-Pot", "Zero Waste"],
    featured: true
  },
  {
    id: 2,
    type: "Article",
    category: "Cooking Tips",
    title: "The Art of Frying with Palm Oil",
    excerpt: "Master the perfect fry with our comprehensive guide to temperature control and flavor enhancement.",
    author: "Chef David",
    readTime: "12 min read",
    image: "/vercel.svg",
    tags: ["Cooking Tips", "Technique", "Flavor"],
    featured: false
  },
  {
    id: 3,
    type: "Article",
    category: "Sustainability",
    title: "From Byproduct to Beautiful Soap",
    excerpt: "Discover how we transform palm oil processing waste into luxurious, natural soaps.",
    author: "Sarah Chen",
    readTime: "6 min read",
    image: "/vercel.svg",
    tags: ["Circular Economy", "Craft", "Zero Waste"],
    featured: false
  },
  {
    id: 4,
    type: "FAQ",
    category: "FAQs",
    title: "Is palm oil healthy for cooking?",
    excerpt: "Learn about the nutritional benefits and cooking properties of sustainably sourced palm oil.",
    author: "Dr. Nutrition",
    readTime: "4 min read",
    image: "/vercel.svg",
    tags: ["Health", "Nutrition", "Cooking"],
    featured: false
  },
  {
    id: 5,
    type: "Article",
    category: "Health & Wellness",
    title: "Understanding Palm Oil's Nutritional Profile",
    excerpt: "A deep dive into the vitamins, antioxidants, and health benefits of quality palm oil.",
    author: "Dr. Wellness",
    readTime: "10 min read",
    image: "/vercel.svg",
    tags: ["Health", "Nutrition", "Vitamins"],
    featured: false
  },
  {
    id: 6,
    type: "Recipe",
    category: "Recipes",
    title: "Golden Fried Plantains with Palm Oil",
    excerpt: "A traditional West African recipe that showcases palm oil's perfect frying properties.",
    author: "Chef Amina",
    readTime: "15 min read",
    image: "/vercel.svg",
    tags: ["Traditional", "Fried", "Plantains"],
    featured: false
  }
];

const categoryIcons = {
  "Recipes": ChefHat,
  "Cooking Tips": BookOpen,
  "Sustainability": Leaf,
  "Health & Wellness": Heart,
  "FAQs": HelpCircle,
  "All": BookOpen
};

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContent = content.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredContent = content.filter(item => item.featured);

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
              <BookOpen className="h-4 w-4 text-[#2E7D32]" />
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
                Learn & Discover
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
              Learn &
              <br />
              <span className="text-[#2E7D32]">Discover</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Explore sustainable cooking techniques, traditional recipes, and the science behind palm oil. 
              Your journey to conscious cooking starts here.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative max-w-md mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1A1A1A]/40" />
              <input
                type="text"
                placeholder="Search articles, recipes, and FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border border-[#D5D1C6]/60 bg-white text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:ring-2 focus:ring-[#C7A15A] shadow-lg"
              />
            </motion.div>
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

      {/* Featured Content */}
      {featuredContent.length > 0 && (
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
                Featured This Week
              </div>
              <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6"
                style={{
                  fontFamily: 'BaskervilleSerial, serif',
                  fontWeight: '400'
                }}
              >
                Must-Read Content
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredContent.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a href={`/learn/${item.id}`} className="block">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#D5D1C6]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="relative h-64 bg-gradient-to-br from-[#2E7D32]/20 to-[#0B3D2E]/30">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="text-6xl mb-3">📖</div>
                            <div className="text-sm opacity-80">Featured content</div>
                          </div>
                        </div>
                        <div className="absolute top-6 left-6">
                          <span className="bg-[#C7A15A] text-[#1A1A1A] text-sm font-medium px-4 py-2 rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="bg-[#EEF2ED] text-[#0B3D2E] text-xs px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#0B3D2E] mb-3 group-hover:text-[#2E7D32] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-[#1A1A1A]/60">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{item.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{item.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-[#2E7D32] font-medium text-sm group-hover:text-[#0B3D2E] transition-colors">
                            <span>Read more</span>
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filters */}
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
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categories.indexOf(category) * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#0B3D2E] text-white shadow-lg"
                      : "bg-[#EEF2ED] text-[#0B3D2E] hover:bg-[#D5D1C6] hover:scale-105"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {category}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-24 bg-[#EEF2ED]/20">
        <div className="mx-auto container-fluid px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <a href={`/learn/${item.id}`} className="block">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#D5D1C6]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-48 bg-gradient-to-br from-[#2E7D32]/20 to-[#0B3D2E]/30">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-4xl mb-2">📖</div>
                          <div className="text-sm opacity-80">Article image</div>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#C7A15A] text-[#1A1A1A] text-xs font-medium px-3 py-1 rounded-full">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-[#EEF2ED] text-[#0B3D2E] text-xs px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                        {item.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="bg-[#EEF2ED] text-[#0B3D2E] text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-[#0B3D2E] mb-3 group-hover:text-[#2E7D32] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-4">
                        {item.excerpt}
                      </p>
                          <div className="flex items-center justify-between text-xs text-[#1A1A1A]/60">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{item.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{item.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-[#2E7D32] font-medium text-sm group-hover:text-[#0B3D2E] transition-colors">
                          <span>Read</span>
                          <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          {filteredContent.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-[#0B3D2E] mb-2">No content found</h3>
              <p className="text-[#1A1A1A]/70">Try adjusting your search or filter criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

