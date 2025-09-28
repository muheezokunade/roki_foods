"use client";

import { useCartStore } from "@/stores/cart-store";
import Image from "next/image";

export function MiniCartDrawer() {
  const { isOpen, close, items, remove, totalPrice } = useCartStore();

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[60] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={close}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-[color:var(--cream-50)] shadow-xl border-l border-[color:var(--clay-300)]/60 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[color:var(--clay-300)]/60">
          <h2 className="text-lg font-medium text-[color:var(--leaf-900)]">Your Cart</h2>
          <button onClick={close} className="rounded-full px-3 py-1 border">Close</button>
        </div>
        <div className="p-4 space-y-4 overflow-auto h-[calc(100%-150px)]">
          {items.length === 0 && (
            <p className="text-sm text-[color:var(--bark-900)]/70">Your cart is empty.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 items-center">
              <div className="relative h-16 w-16 rounded-lg bg-[color:var(--mist-100)] overflow-hidden border border-[color:var(--clay-300)]/60">
                <Image src={item.image} alt={item.title} fill className="object-contain" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-[color:var(--leaf-900)]">{item.title}</div>
                <div className="text-xs text-[color:var(--bark-900)]/70">Qty {item.quantity}</div>
              </div>
              <div className="text-sm">${(item.price * item.quantity).toFixed(2)}</div>
              <button className="text-xs underline ml-2" onClick={() => remove(item.id)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-[color:var(--clay-300)]/60">
          <div className="flex items-center justify-between text-sm mb-3">
            <span>Subtotal</span>
            <span className="font-medium">${totalPrice.toFixed(2)}</span>
          </div>
          <button disabled className="w-full rounded-full bg-[color:var(--leaf-900)] text-white px-4 py-3 opacity-70 cursor-not-allowed">
            Checkout (configure Paystack/Flutterwave first)
          </button>
          <p className="mt-2 text-xs text-[color:var(--bark-900)]/60">Payments are not yet connected. See README for setup.</p>
        </div>
      </aside>
    </div>
  );
}


