"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  interest: z.enum(["general", "wholesale", "community"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "info@rokifoods.com",
    description: "We'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+234 (0) 123 456 7890",
    description: "Mon-Fri, 8AM-6PM WAT"
  },
  {
    icon: MapPin,
    title: "Headquarters",
    details: "Uyo, Akwa Ibom State",
    description: "Nigeria"
  },
  {
    icon: MapPin,
    title: "Branch Office",
    details: "Lagos, Nigeria",
    description: "Business District"
  }
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<{ 
    name: string; 
    email: string; 
    interest: "general" | "wholesale" | "community"; 
    message: string 
  }>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

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
              <Mail className="h-4 w-4 text-[#2E7D32]" />
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
                Get in Touch
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
              Let's Connect
              <br />
              <span className="text-[#2E7D32]">Together</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-[#1A1A1A]/80 max-w-2xl md:ml-auto mb-12 leading-relaxed"
            >
              Have questions about our sustainable palm oil or want to partner with us? 
              We'd love to hear from you and will respond within 24 hours.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end"
            >
              <a
                href="#contact-form"
                className="inline-block bg-[#0B3D2E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2E7D32] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Send Message
              </a>
              <a
                href="#contact-info"
                className="inline-block border-2 border-[#0B3D2E] text-[#0B3D2E] px-8 py-4 rounded-full font-medium hover:bg-[#0B3D2E] hover:text-white transition-all duration-300"
              >
                Contact Info
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

      {/* Contact Info */}
      <section id="contact-info" className="py-24 bg-white">
        <div className="mx-auto container-fluid px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#2E7D32]/10 rounded-full text-sm font-medium text-[#2E7D32] mb-4">
              Contact Information
            </div>
            <h2 className="text-4xl md:text-5xl text-[#0B3D2E] mb-6 font-bold">
              Ways to Reach Us
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 max-w-2xl mx-auto">
              Choose the method that works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl border border-[#D5D1C6]/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2E7D32]/10 rounded-2xl mb-6">
                  <info.icon className="h-8 w-8 text-[#2E7D32]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0B3D2E] mb-2">{info.title}</h3>
                <p className="text-[#1A1A1A] font-medium mb-1">{info.details}</p>
                <p className="text-sm text-[#1A1A1A]/70">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 bg-[#EEF2ED]/30">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-2 bg-[#2E7D32]/10 rounded-full text-sm font-medium text-[#2E7D32] mb-4">
                Send a Message
              </div>
              <h2 className="text-3xl md:text-4xl text-[#0B3D2E] mb-6 font-bold">
                Let's Start a Conversation
              </h2>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-12 text-center shadow-sm border border-[#D5D1C6]/60"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2E7D32]/10 rounded-full mb-6">
                  <CheckCircle className="h-10 w-10 text-[#2E7D32]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0B3D2E] mb-4">Message Sent!</h3>
                <p className="text-[#1A1A1A]/70 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 bg-[#0B3D2E] text-white px-6 py-3 rounded-full font-medium hover:bg-[#2E7D32] transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#D5D1C6]/60"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#0B3D2E] mb-2">
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-xl border border-[#D5D1C6]/60 bg-[#EEF2ED]/30 text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-[#0B3D2E] mb-2">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-[#D5D1C6]/60 bg-[#EEF2ED]/30 text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0B3D2E] mb-2">
                      Interest
                    </label>
                    <select
                      {...register("interest")}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D1C6]/60 bg-[#EEF2ED]/30 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="wholesale">Wholesale Partnership</option>
                      <option value="community">Community Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#0B3D2E] mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-[#D5D1C6]/60 bg-[#EEF2ED]/30 text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-2 bg-[#0B3D2E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#2E7D32] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}