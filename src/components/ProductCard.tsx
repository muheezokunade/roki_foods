"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/stores/cart-store";

export function ProductCard({
  id,
  title,
  price,
  image,
  href,
}: {
  id: string;
  title: string;
  price: number;
  image: string;
  href: string;
}) {
  const add = useCartStore((s) => s.add);

  return (
    <div className="group rounded-2xl border border-[color:var(--clay-300)]/60 bg-white shadow-sm overflow-hidden">
      <Link href={href} className="block">
        <div className="relative h-56 bg-[color:var(--mist-100)]">
          <Image src={image} alt={title} fill className="object-contain transition-transform group-hover:scale-[1.02]" />
          <span className="absolute left-3 top-3 text-[11px] tracking-wide uppercase bg-white/90 border border-[color:var(--clay-300)]/60 px-2 py-1 rounded-full text-[color:var(--leaf-600)]">Sustainable</span>
        </div>
      </Link>
      <div className="p-4">
        <Link href={href} className="font-medium text-[color:var(--leaf-900)] line-clamp-2">{title}</Link>
        <div className="text-[color:var(--bark-900)]/70">${price.toFixed(2)}</div>
        <button
          className="mt-3 rounded-full bg-[color:var(--leaf-900)] text-white px-4 py-2 hover:scale-[1.02] transition-transform"
          onClick={() => add({ id, title, price, image })}
        >
          Quick add
        </button>
      </div>
    </div>
  );
}


