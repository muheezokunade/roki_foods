import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Shield, Award, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--clay-300)]/60 bg-[color:var(--mist-100)]/40">
      {/* Main Footer Content */}
      <div className="mx-auto container-fluid px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
          {/* Explore */}
          <div>
            <div className="font-semibold text-[color:var(--leaf-900)] mb-4">Explore</div>
            <ul className="space-y-2 text-[color:var(--bark-900)]/80">
              <li><a href="/learn" className="hover:text-[color:var(--leaf-600)] transition-colors">Learn</a></li>
              <li><a href="/gallery" className="hover:text-[color:var(--leaf-600)] transition-colors">Gallery</a></li>
              <li><a href="/sustainability" className="hover:text-[color:var(--leaf-600)] transition-colors">Sustainability</a></li>
              <li><a href="/contact" className="hover:text-[color:var(--leaf-600)] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <div className="font-semibold text-[color:var(--leaf-900)] mb-4">Learn</div>
            <ul className="space-y-2 text-[color:var(--bark-900)]/80">
              <li><a href="/learn" className="hover:text-[color:var(--leaf-600)] transition-colors">Articles & Recipes</a></li>
              <li><a href="/learn?category=recipes" className="hover:text-[color:var(--leaf-600)] transition-colors">Cooking Tips</a></li>
              <li><a href="/learn?category=sustainability" className="hover:text-[color:var(--leaf-600)] transition-colors">Sustainability</a></li>
              <li><a href="/learn?category=faqs" className="hover:text-[color:var(--leaf-600)] transition-colors">FAQs</a></li>
              <li><a href="/quiz" className="hover:text-[color:var(--leaf-600)] transition-colors">Product Quiz</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <div className="font-semibold text-[color:var(--leaf-900)] mb-4">About</div>
            <ul className="space-y-2 text-[color:var(--bark-900)]/80">
              <li><a href="/about" className="hover:text-[color:var(--leaf-600)] transition-colors">Our Story</a></li>
              <li><a href="/about#farm" className="hover:text-[color:var(--leaf-600)] transition-colors">Our Farm</a></li>
              <li><a href="/about#process" className="hover:text-[color:var(--leaf-600)] transition-colors">Our Process</a></li>
              <li><a href="/gallery" className="hover:text-[color:var(--leaf-600)] transition-colors">Media Gallery</a></li>
              <li><a href="/community" className="hover:text-[color:var(--leaf-600)] transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="font-semibold text-[color:var(--leaf-900)] mb-4">Support</div>
            <ul className="space-y-2 text-[color:var(--bark-900)]/80">
              <li><a href="/contact" className="hover:text-[color:var(--leaf-600)] transition-colors">Contact Us</a></li>
              <li><a href="/legal/returns" className="hover:text-[color:var(--leaf-600)] transition-colors">Returns & Exchanges</a></li>
              <li><a href="/legal/shipping" className="hover:text-[color:var(--leaf-600)] transition-colors">Shipping Info</a></li>
              <li><a href="/legal/privacy" className="hover:text-[color:var(--leaf-600)] transition-colors">Privacy Policy</a></li>
              <li><a href="/legal/terms" className="hover:text-[color:var(--leaf-600)] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <div className="font-semibold text-[color:var(--leaf-900)] mb-4">Stay Connected</div>
            <p className="text-[color:var(--bark-900)]/80 mb-4">Get seasonal harvest updates and sustainable living tips.</p>
            <form className="mb-6">
              <div className="flex items-center gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 rounded-full border px-4 py-2 bg-white/80 placeholder:text-[color:var(--bark-900)]/50 border-[color:var(--clay-300)]/60 focus:outline-none focus:ring-2 focus:ring-[color:var(--sun-400)]" 
                />
                <button className="rounded-full px-4 py-2 bg-[color:var(--leaf-900)] text-white hover:bg-[color:var(--leaf-600)] transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </form>
            <p className="text-xs text-[color:var(--bark-900)]/60 mb-4">We respect your privacy. Unsubscribe anytime.</p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-full bg-white border border-[color:var(--clay-300)]/60 hover:bg-[color:var(--mist-100)] transition-colors">
                <Facebook className="h-4 w-4 text-[color:var(--leaf-900)]" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-[color:var(--clay-300)]/60 hover:bg-[color:var(--mist-100)] transition-colors">
                <Instagram className="h-4 w-4 text-[color:var(--leaf-900)]" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white border border-[color:var(--clay-300)]/60 hover:bg-[color:var(--mist-100)] transition-colors">
                <Twitter className="h-4 w-4 text-[color:var(--leaf-900)]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Trust Badges */}
      <div className="border-t border-[color:var(--clay-300)]/60 py-8 bg-white/50">
        <div className="mx-auto container-fluid px-4">
          <div className="text-center mb-6">
            <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Certifications & Trust</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2 text-[color:var(--bark-900)]/70">
                <Shield className="h-5 w-5 text-[color:var(--leaf-600)]" />
                <span className="text-sm">USDA Organic</span>
              </div>
              <div className="flex items-center gap-2 text-[color:var(--bark-900)]/70">
                <Award className="h-5 w-5 text-[color:var(--leaf-600)]" />
                <span className="text-sm">B-Corp Certified</span>
              </div>
              <div className="flex items-center gap-2 text-[color:var(--bark-900)]/70">
                <Leaf className="h-5 w-5 text-[color:var(--leaf-600)]" />
                <span className="text-sm">Zero Waste</span>
              </div>
              <div className="flex items-center gap-2 text-[color:var(--bark-900)]/70">
                <Shield className="h-5 w-5 text-[color:var(--leaf-600)]" />
                <span className="text-sm">Fair Trade</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-t border-[color:var(--clay-300)]/60 py-6 bg-white/30">
        <div className="mx-auto container-fluid px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[color:var(--bark-900)]/70">
              <Mail className="h-4 w-4 text-[color:var(--leaf-600)]" />
              <span className="text-sm">hello@rokifoods.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[color:var(--bark-900)]/70">
              <Phone className="h-4 w-4 text-[color:var(--leaf-600)]" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[color:var(--bark-900)]/70">
              <MapPin className="h-4 w-4 text-[color:var(--leaf-600)]" />
              <span className="text-sm">West Africa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="border-t border-[color:var(--clay-300)]/60 py-6 bg-[color:var(--leaf-900)] text-[color:var(--cream-50)]">
        <div className="mx-auto container-fluid px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div>
              © {new Date().getFullYear()} Roki Foods. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="/legal/privacy" className="hover:text-[color:var(--sun-400)] transition-colors">Privacy Policy</a>
              <a href="/legal/terms" className="hover:text-[color:var(--sun-400)] transition-colors">Terms of Service</a>
              <a href="/legal/accessibility" className="hover:text-[color:var(--sun-400)] transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


