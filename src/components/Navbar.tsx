"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const itemCount = useCartStore((s) => s.totalQuantity);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-8 inset-x-0 z-[70] transition-colors ${
        scrolled ? "bg-white/90 backdrop-blur border-b border-[#D5D1C6]/60" : "bg-white/30 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto container-fluid px-4 py-3 flex items-center justify-between">
        <Link href="/" className={`font-semibold tracking-tight ${scrolled ? 'text-[#0B3D2E]' : 'text-white'}`}>
          Roki Foods
        </Link>
        <nav className={`hidden md:flex gap-8 text-sm ${scrolled ? 'text-[#0B3D2E]' : 'text-white'}`}>
          <Link className="hover:underline underline-offset-8" href="/learn">Learn</Link>
          <Link className="hover:underline underline-offset-8" href="/story">Our Story</Link>
          <Link className="hover:underline underline-offset-8" href="/sustainability">Sustainability</Link>
          <Link className="hover:underline underline-offset-8" href="/gallery">Gallery</Link>
          <Link className="hover:underline underline-offset-8" href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-2 rounded-full hover:scale-105 transition-transform">
            <Search className={`h-5 w-5 ${scrolled ? 'text-[#0B3D2E]' : 'text-white'}`} />
          </button>
          <button aria-label="Cart" className="relative p-2 rounded-full hover:scale-105 transition-transform" onClick={() => useCartStore.getState().open()}>
            <ShoppingBag className={`h-5 w-5 ${scrolled ? 'text-[#0B3D2E]' : 'text-white'}`} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-[#2E7D32] text-white rounded-full h-5 w-5 grid place-items-center">
                {itemCount}
              </span>
            )}
          </button>
          <button className="md:hidden p-2" aria-label="Menu" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X className={`h-6 w-6 ${scrolled ? 'text-[#0B3D2E]' : 'text-white'}`} /> : <Menu className={`h-6 w-6 ${scrolled ? 'text-[#0B3D2E]' : 'text-white'}`} />}
          </button>
        </div>
      </div>
      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#D5D1C6]/60 bg-white/95 backdrop-blur">
          <div className="px-6 py-6 space-y-1">
            <div className="text-xs uppercase tracking-wide text-[#2E7D32] mb-4">Navigation</div>
            <Link href="/learn" onClick={() => setMobileOpen(false)} className="block py-3 text-[#0B3D2E] font-medium hover:text-[#2E7D32] transition-colors">Learn</Link>
            <Link href="/story" onClick={() => setMobileOpen(false)} className="block py-3 text-[#0B3D2E] font-medium hover:text-[#2E7D32] transition-colors">Our Story</Link>
            <Link href="/sustainability" onClick={() => setMobileOpen(false)} className="block py-3 text-[#0B3D2E] font-medium hover:text-[#2E7D32] transition-colors">Sustainability</Link>
            <div className="border-t border-[#D5D1C6]/40 my-4" />
            <Link href="/gallery" onClick={() => setMobileOpen(false)} className="block py-2 text-[#1A1A1A]/80 hover:text-[#2E7D32] transition-colors">Gallery</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-[#1A1A1A]/80 hover:text-[#2E7D32] transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}


