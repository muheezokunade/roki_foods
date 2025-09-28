"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";

interface AddToCartButtonProps {
  product: {
    _id: string;
    title: string;
    price: number;
    image?: any;
    slug?: { current: string };
  };
  quantity?: number;
  className?: string;
}

export function AddToCartButton({ product, quantity = 1, className = "" }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const addToCart = useCartStore((state) => state.add);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity
    });
    
    setIsAdding(false);
    setAdded(true);
    
    // Reset added state after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`
        flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200
        ${added 
          ? 'bg-[color:var(--leaf-600)] text-white' 
          : 'bg-[color:var(--leaf-900)] text-white hover:bg-[color:var(--leaf-600)]'
        }
        ${isAdding ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'}
        ${className}
      `}
    >
      {isAdding ? (
        <>
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Adding...</span>
        </>
      ) : added ? (
        <>
          <Check className="h-4 w-4" />
          <span>Added!</span>
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4" />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  );
}



