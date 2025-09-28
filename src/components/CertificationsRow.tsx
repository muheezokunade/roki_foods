"use client";

import { Shield, Leaf, Users, Award } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "Organic Certified",
    description: "USDA Organic certification ensures our palm oil meets the highest standards for purity and sustainability.",
    badge: "USDA Organic"
  },
  {
    icon: Leaf,
    title: "Zero Waste",
    description: "Every part of our harvest is utilized through circular processing, leaving no waste behind.",
    badge: "Zero Waste"
  },
  {
    icon: Users,
    title: "Fair Trade",
    description: "Supporting local communities through fair wages and sustainable farming practices.",
    badge: "Fair Trade"
  },
  {
    icon: Award,
    title: "B-Corp Certified",
    description: "Certified B Corporation meeting rigorous standards of social and environmental performance.",
    badge: "B-Corp"
  }
];

export function CertificationsRow() {
  return (
    <section className="py-16 bg-[#EEF2ED]/50">
      <div className="mx-auto container-fluid px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0B3D2E] mb-4">
            Trusted by Nature
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto">
            Our certifications and commitments ensure you're getting the purest, most responsibly sourced palm oil available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#0B3D2E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-[#F4F3EF]" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#C7A15A] text-[#1A1A1A] text-xs font-medium px-2 py-1 rounded-full">
                    {cert.badge}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-[#0B3D2E] mb-3">
                  {cert.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-12 pt-8 border-t border-[#D5D1C6]/40">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[#1A1A1A]/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2E7D32]"></div>
              <span>Non-GMO Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2E7D32]"></div>
              <span>Gluten Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2E7D32]"></div>
              <span>Kosher Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2E7D32]"></div>
              <span>Vegan Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


