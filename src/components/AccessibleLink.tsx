"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AccessibleLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "default" | "button" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  children: React.ReactNode;
}

export const AccessibleLink = forwardRef<HTMLAnchorElement, AccessibleLinkProps>(
  ({ 
    className, 
    href, 
    variant = "default", 
    size = "md",
    external = false,
    children,
    ...props 
  }, ref) => {
    const baseStyles = "transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variants = {
      default: "text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] focus:ring-[color:var(--sun-400)]",
      button: "inline-flex items-center justify-center rounded-full font-medium bg-[color:var(--leaf-900)] text-white hover:bg-[color:var(--leaf-600)] focus:ring-[color:var(--sun-400)]",
      ghost: "text-[color:var(--leaf-900)] hover:text-[color:var(--leaf-600)] focus:ring-[color:var(--leaf-600)]"
    };
    
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };

    const linkProps = {
      className: cn(
        baseStyles,
        variants[variant],
        variant === "button" && sizes[size],
        className
      ),
      ...(external && {
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${children} (opens in new tab)`
      }),
      ...props
    };

    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          {...linkProps}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={ref}
        href={href}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }
);

AccessibleLink.displayName = "AccessibleLink";
