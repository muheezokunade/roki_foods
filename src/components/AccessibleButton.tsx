"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

export const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    loading = false,
    disabled,
    children,
    ...props 
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-[color:var(--leaf-900)] text-white hover:bg-[color:var(--leaf-600)] focus:ring-[color:var(--sun-400)]",
      secondary: "bg-[color:var(--mist-100)] text-[color:var(--leaf-900)] hover:bg-[color:var(--clay-300)] focus:ring-[color:var(--leaf-600)]",
      ghost: "text-[color:var(--leaf-900)] hover:bg-[color:var(--mist-100)] focus:ring-[color:var(--leaf-600)]",
      outline: "border border-[color:var(--clay-300)]/60 text-[color:var(--leaf-900)] hover:bg-[color:var(--mist-100)] focus:ring-[color:var(--leaf-600)]"
    };
    
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        )}
        {children}
      </button>
    );
  }
);

AccessibleButton.displayName = "AccessibleButton";
