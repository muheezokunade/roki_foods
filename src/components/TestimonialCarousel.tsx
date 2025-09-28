"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { 
    quote: "Roki palm oil has transformed our cooking. The flavor is incredible and knowing it's sustainably sourced makes every meal feel better.", 
    author: "Sharon J.", 
    location: "Portland, OR",
    rating: 5,
    image: "/vercel.svg"
  },
  { 
    quote: "Finally, a palm oil I can feel good about using. The quality is outstanding and the company's commitment to zero waste is inspiring.", 
    author: "Grace W.", 
    location: "Austin, TX",
    rating: 5,
    image: "/vercel.svg"
  },
  { 
    quote: "Love the transparency and impact. Every purchase supports local farmers and sustainable practices. The taste is unmatched.", 
    author: "Karen O.", 
    location: "Seattle, WA",
    rating: 5,
    image: "/vercel.svg"
  },
  { 
    quote: "As a professional chef, I demand the best ingredients. Roki delivers exceptional quality while supporting the communities that grow it.", 
    author: "Marcus T.", 
    location: "San Francisco, CA",
    rating: 5,
    image: "/vercel.svg"
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  const nextSlide = () => setIndex((i) => (i + 1) % total);
  const prevSlide = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F4F3EF]">
      <div className="mx-auto container-fluid px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#2E7D32]/10 text-[#2E7D32] px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            Customer Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0B3D2E] mb-6">
            What our community says
          </h2>
          <p className="text-lg text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Discover why thousands of families trust Roki Foods for their sustainable palm oil needs.
          </p>
        </div>

        {/* Desktop Moving Carousel */}
        <div className="hidden lg:block relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="flex-shrink-0 w-full px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden border border-[#D5D1C6]/60 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                        {/* Image Section */}
                        <div className="relative h-64 md:h-auto bg-gradient-to-br from-[#2E7D32]/20 to-[#0B3D2E]/30">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="text-5xl mb-3">👤</div>
                              <div className="text-sm opacity-80">Verified Customer</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-1 mb-6">
                            {[...Array(testimonial.rating)].map((_, j) => (
                              <Star key={j} className="h-6 w-6 fill-[#C7A15A] text-[#C7A15A]" />
                            ))}
                          </div>
                          <blockquote className="text-[#1A1A1A]/90 mb-8 leading-relaxed text-xl md:text-2xl italic font-light">
                            "{testimonial.quote}"
                          </blockquote>
                          <div>
                            <div className="font-semibold text-[#0B3D2E] text-xl">{testimonial.author}</div>
                            <div className="text-[#1A1A1A]/60 mt-1">{testimonial.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-[#D5D1C6]/60 flex items-center justify-center hover:scale-105 transition-transform z-10"
          >
            <ChevronLeft className="h-6 w-6 text-[#0B3D2E]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-[#D5D1C6]/60 flex items-center justify-center hover:scale-105 transition-transform z-10"
          >
            <ChevronRight className="h-6 w-6 text-[#0B3D2E]" />
          </button>

          {/* Desktop Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                aria-label={`Go to slide ${i + 1}`} 
                onClick={() => setIndex(i)} 
                className={`h-3 w-3 rounded-full transition-colors ${
                  i === index ? "bg-[#0B3D2E]" : "bg-[#D5D1C6]"
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="flex-shrink-0 w-full px-4">
                  <div className="relative rounded-2xl overflow-hidden border border-[#D5D1C6]/60 bg-white shadow-lg">
                    <div className="relative h-40 bg-gradient-to-br from-[#2E7D32]/20 to-[#0B3D2E]/30">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-3xl mb-1">👤</div>
                          <div className="text-xs opacity-80">Verified Customer</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-[#C7A15A] text-[#C7A15A]" />
                        ))}
                      </div>
                      <blockquote className="text-[#1A1A1A]/90 mb-4 leading-relaxed text-sm italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-[#0B3D2E] text-sm">{testimonial.author}</div>
                          <div className="text-xs text-[#1A1A1A]/60">{testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-[#D5D1C6]/60 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <ChevronLeft className="h-5 w-5 text-[#0B3D2E]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-[#D5D1C6]/60 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <ChevronRight className="h-5 w-5 text-[#0B3D2E]" />
          </button>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                aria-label={`Go to slide ${i + 1}`} 
                onClick={() => setIndex(i)} 
                className={`h-3 w-3 rounded-full transition-colors ${
                  i === index ? "bg-[#0B3D2E]" : "bg-[#D5D1C6]"
                }`} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


