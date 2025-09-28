"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AccessibleHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "display" | "section" | "card" | "eyebrow";
  children: React.ReactNode;
}

export const AccessibleHeading = forwardRef<HTMLHeadingElement, AccessibleHeadingProps>(
  ({ className, level, variant = "section", children, ...props }, ref) => {
    const baseStyles = "font-semibold text-[color:var(--leaf-900)]";
    
    const variants = {
      display: "text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight",
      section: "text-2xl md:text-3xl font-display font-semibold leading-tight",
      card: "text-lg md:text-xl font-display font-medium leading-tight",
      eyebrow: "text-sm uppercase tracking-wide text-[color:var(--leaf-600)] font-medium"
    };

    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
      <HeadingTag
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </HeadingTag>
    );
  }
);

AccessibleHeading.displayName = "AccessibleHeading";
