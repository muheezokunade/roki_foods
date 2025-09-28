"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag, ArrowRight } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";

const products = [
  { id: "palm-500", title: "Roki Palm Oil — 500ml", price: 7.5, image: "/vercel.svg", category: "oil" },
  { id: "palm-1l", title: "Roki Palm Oil — 1L", price: 12.0, image: "/vercel.svg", category: "oil" },
  { id: "palm-2l", title: "Roki Palm Oil — 2L", price: 22.0, image: "/vercel.svg", category: "oil" },
  { id: "coconut-500", title: "Roki Coconut Oil — 500ml", price: 8.5, image: "/vercel.svg", category: "oil" },
  { id: "seasoning", title: "Palm Oil Seasoning Blend", price: 6.0, image: "/vercel.svg", category: "seasoning" },
  { id: "gift-set", title: "Starter Gift Set", price: 25.0, image: "/vercel.svg", category: "gift" },
];

const categories = ["all", "oil", "seasoning", "gift"];

export function FeaturedProducts() {
  const add = useCartStore((s) => s.add);
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, filteredProducts.length - itemsPerView);

  const nextSlide = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex(prev => Math.max(prev - 1, 0));

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto container-fluid px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[color:var(--leaf-600)]/10 rounded-full text-sm font-medium text-[color:var(--leaf-600)] mb-4">
            Shop
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-[color:var(--leaf-900)] mb-6">
            Featured products
          </h2>
          <p className="text-lg text-[color:var(--bark-900)]/80 max-w-2xl mx-auto">
            Kitchen staples crafted with care and traceable sourcing.
          </p>
        </motion.div>
        
        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[color:var(--leaf-900)] text-white shadow-lg"
                  : "bg-[color:var(--mist-100)] text-[color:var(--leaf-900)] hover:bg-[color:var(--clay-300)] hover:scale-105"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.slice(0, 6).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[color:var(--clay-300)]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 bg-gradient-to-br from-[color:var(--mist-100)] to-[color:var(--cream-50)]">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    fill 
                    className="object-contain p-8" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[color:var(--leaf-900)] mb-2">{product.title}</h3>
                  <div className="text-2xl font-bold text-[color:var(--leaf-600)] mb-4">${product.price.toFixed(2)}</div>
                  <button 
                    className="w-full group/btn inline-flex items-center justify-center gap-2 bg-[color:var(--leaf-900)] text-white px-6 py-3 rounded-full font-medium hover:bg-[color:var(--leaf-600)] transition-all duration-300 hover:scale-105" 
                    onClick={() => add({ id: product.id, title: product.title, price: product.price, image: product.image })}
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="/learn" 
            className="group inline-flex items-center gap-2 text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors font-medium"
          >
            Learn more
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


