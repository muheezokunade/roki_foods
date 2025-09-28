"use client";

import { useState } from "react";
import { ArrowRight, TreePine, Users, Award, Heart, Leaf, MapPin, Clock } from "lucide-react";

const aboutSections = [
  {
    id: "farm",
    title: "Our Farm",
    icon: TreePine,
    description: "Discover the sustainable practices and regenerative agriculture that make our palm oil unique.",
    color: "from-[color:var(--leaf-600)] to-[color:var(--leaf-900)]"
  },
  {
    id: "process",
    title: "Our Process",
    icon: Leaf,
    description: "From harvest to bottle, learn about our zero-waste circular production methods.",
    color: "from-[color:var(--leaf-900)] to-[color:var(--leaf-600)]"
  },
  {
    id: "sustainability",
    title: "Sustainability",
    icon: Heart,
    description: "Our commitment to environmental stewardship and community empowerment.",
    color: "from-[color:var(--leaf-600)] to-[color:var(--sun-400)]"
  },
  {
    id: "rewards",
    title: "Rewards",
    icon: Award,
    description: "Join our community program and earn rewards for sustainable choices.",
    color: "from-[color:var(--sun-400)] to-[color:var(--leaf-600)]"
  },
  {
    id: "faqs",
    title: "FAQs",
    icon: Users,
    description: "Find answers to common questions about palm oil, sustainability, and our practices.",
    color: "from-[color:var(--leaf-900)] to-[color:var(--sun-400)]"
  }
];

const farmStats = [
  { label: "Acres Protected", value: "2,500+", icon: TreePine },
  { label: "Farmers Supported", value: "500+", icon: Users },
  { label: "Zero Waste", value: "100%", icon: Leaf },
  { label: "Years of Practice", value: "15+", icon: Clock }
];

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("farm");

  return (
    <main className="min-h-screen bg-[color:var(--cream-50)]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[color:var(--leaf-900)] to-[color:var(--leaf-600)] text-[color:var(--cream-50)]">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-display font-semibold mb-6">
              About Roki Foods
            </h1>
            <p className="text-lg md:text-xl text-[color:var(--cream-50)]/80 mb-8 leading-relaxed">
              We're on a mission to transform the palm oil industry through sustainable practices, 
              community empowerment, and zero-waste circularity. Every bottle tells a story of 
              environmental stewardship and social responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Farm Stats */}
      <section className="py-16 bg-white">
        <div className="mx-auto container-fluid px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {farmStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--leaf-900)] flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-[color:var(--cream-50)]" />
                  </div>
                  <div className="text-3xl font-bold text-[color:var(--leaf-900)] mb-2">{stat.value}</div>
                  <div className="text-sm text-[color:var(--bark-900)]/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-[color:var(--mist-100)]/50">
        <div className="mx-auto container-fluid px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {aboutSections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                    activeSection === section.id
                      ? "bg-[color:var(--leaf-900)] text-white shadow-lg"
                      : "bg-white text-[color:var(--leaf-900)] hover:bg-[color:var(--mist-100)] border border-[color:var(--clay-300)]/60"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      <section className="py-16">
        <div className="mx-auto container-fluid px-4">
          {activeSection === "farm" && (
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-display font-semibold text-[color:var(--leaf-900)] mb-6">
                    Our Sustainable Farm
                  </h2>
                  <p className="text-[color:var(--bark-900)]/70 mb-6 leading-relaxed">
                    Located in the heart of West Africa, our farm practices regenerative agriculture 
                    that enriches the soil, protects biodiversity, and supports local communities. 
                    We believe that sustainable palm oil production can coexist with thriving ecosystems.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[color:var(--leaf-600)] mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-medium text-[color:var(--leaf-900)] mb-1">Regenerative Agriculture</h3>
                        <p className="text-sm text-[color:var(--bark-900)]/70">We use cover crops, composting, and natural pest management to build healthy soil.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[color:var(--leaf-600)] mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-medium text-[color:var(--leaf-900)] mb-1">Biodiversity Protection</h3>
                        <p className="text-sm text-[color:var(--bark-900)]/70">We maintain wildlife corridors and protect native species throughout our operations.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[color:var(--leaf-600)] mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-medium text-[color:var(--leaf-900)] mb-1">Community Partnership</h3>
                        <p className="text-sm text-[color:var(--bark-900)]/70">We work directly with local farmers, providing fair wages and sustainable farming education.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-[color:var(--leaf-600)]/20 to-[color:var(--leaf-900)]/30 border border-[color:var(--clay-300)]/60 flex items-center justify-center">
                    <div className="text-center text-[color:var(--cream-50)]">
                      <div className="text-6xl mb-4">🌱</div>
                      <div className="text-lg font-medium">Our Farm</div>
                      <div className="text-sm opacity-80">Farm photos coming soon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "process" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-semibold text-[color:var(--leaf-900)] mb-6">
                  Our Zero-Waste Process
                </h2>
                <p className="text-[color:var(--bark-900)]/70 text-lg leading-relaxed">
                  Every part of our harvest is utilized through innovative circular processing methods.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Harvest", description: "Hand-picked at peak ripeness by local farmers" },
                  { step: "02", title: "Cold Press", description: "Gentle extraction preserves nutrients and flavor" },
                  { step: "03", title: "Filter", description: "Natural filtration for pure, clean oil" },
                  { step: "04", title: "Circular Use", description: "Byproducts become soap, fuel, and compost" }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[color:var(--leaf-900)] flex items-center justify-center">
                      <span className="text-[color:var(--cream-50)] font-bold">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-2">{step.title}</h3>
                    <p className="text-sm text-[color:var(--bark-900)]/70">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "sustainability" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-semibold text-[color:var(--leaf-900)] mb-6">
                  Our Sustainability Commitment
                </h2>
                <p className="text-[color:var(--bark-900)]/70 text-lg leading-relaxed">
                  We're committed to environmental stewardship and social responsibility in everything we do.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Environmental Impact",
                    items: [
                      "Zero deforestation commitment",
                      "Carbon negative operations",
                      "Water conservation practices",
                      "Wildlife habitat protection"
                    ]
                  },
                  {
                    title: "Social Impact",
                    items: [
                      "Fair trade partnerships",
                      "Community education programs",
                      "Women's empowerment initiatives",
                      "Local economic development"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-8">
                    <h3 className="text-xl font-semibold text-[color:var(--leaf-900)] mb-6">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[color:var(--leaf-600)] flex-shrink-0"></div>
                          <span className="text-[color:var(--bark-900)]/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "rewards" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-semibold text-[color:var(--leaf-900)] mb-6">
                  Roki Rewards Program
                </h2>
                <p className="text-[color:var(--bark-900)]/70 text-lg leading-relaxed">
                  Earn points for sustainable choices and unlock exclusive benefits.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { title: "Earn Points", description: "Get points for purchases, reviews, and referrals" },
                    { title: "Redeem Rewards", description: "Use points for discounts, free products, and exclusive items" },
                    { title: "Special Access", description: "Early access to new products and limited editions" }
                  ].map((benefit, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[color:var(--sun-400)] flex items-center justify-center">
                        <Award className="h-6 w-6 text-[color:var(--bark-900)]" />
                      </div>
                      <h3 className="font-semibold text-[color:var(--leaf-900)] mb-2">{benefit.title}</h3>
                      <p className="text-sm text-[color:var(--bark-900)]/70">{benefit.description}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <button className="bg-[color:var(--leaf-900)] text-[color:var(--cream-50)] px-8 py-3 rounded-full font-medium hover:bg-[color:var(--leaf-600)] transition-colors">
                    Join Rewards Program
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === "faqs" && (
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-semibold text-[color:var(--leaf-900)] mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-[color:var(--bark-900)]/70 text-lg leading-relaxed">
                  Find answers to common questions about our products and practices.
                </p>
              </div>
              <div className="space-y-6">
                {[
                  {
                    question: "Is palm oil healthy for cooking?",
                    answer: "Yes, when sourced sustainably like ours, palm oil is rich in vitamin E and antioxidants. It has a high smoke point, making it ideal for high-heat cooking methods."
                  },
                  {
                    question: "How do you ensure zero waste?",
                    answer: "We utilize every part of the palm fruit. The oil is extracted, fibers become soap, shells become fuel, and organic waste becomes compost for our farms."
                  },
                  {
                    question: "Are your products certified organic?",
                    answer: "Yes, all our products are USDA Organic certified and follow strict organic farming practices without synthetic pesticides or fertilizers."
                  },
                  {
                    question: "How do you support local communities?",
                    answer: "We work directly with local farmers, providing fair wages, education, and sustainable farming training. We also invest in community infrastructure and education programs."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-3">{faq.question}</h3>
                    <p className="text-[color:var(--bark-900)]/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[color:var(--leaf-900)] to-[color:var(--leaf-600)] text-[color:var(--cream-50)]">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
              Ready to make a difference?
            </h2>
            <p className="text-lg text-[color:var(--cream-50)]/80 mb-8">
              Join thousands of conscious consumers who choose sustainable palm oil for their kitchens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/learn"
                className="inline-flex items-center justify-center gap-2 bg-[color:var(--sun-400)] text-[color:var(--bark-900)] px-8 py-3 rounded-full font-medium hover:bg-[color:var(--sun-400)]/90 transition-colors"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[color:var(--cream-50)]/30 text-[color:var(--cream-50)] px-8 py-3 rounded-full font-medium hover:bg-[color:var(--cream-50)]/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



