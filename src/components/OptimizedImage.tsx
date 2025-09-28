"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/lib/sanity";

interface OptimizedImageProps {
  src?: any; // Sanity image object
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  quality?: number;
  fallback?: string;
}

// Generate a simple blur placeholder
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f4f3ef" offset="20%" />
      <stop stop-color="#eef2ed" offset="50%" />
      <stop stop-color="#f4f3ef" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f4f3ef" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  sizes,
  placeholder = "blur",
  blurDataURL,
  quality = 85,
  fallback = "/placeholder-image.jpg"
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Generate image URL from Sanity
  const imageUrl = src ? urlFor(src)
    .width(width || 800)
    .height(height || 600)
    .quality(quality)
    .format('webp')
    .url() : fallback;

  // Generate blur placeholder
  const defaultBlurDataURL = blurDataURL || `data:image/svg+xml;base64,${toBase64(shimmer(width || 800, height || 600))}`;

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  if (imageError) {
    return (
      <div 
        className={`bg-[color:var(--mist-100)] flex items-center justify-center ${className}`}
        style={fill ? {} : { width, height }}
      >
        <div className="text-center text-[color:var(--bark-900)]/40">
          <div className="text-4xl mb-2">🖼️</div>
          <div className="text-sm">Image unavailable</div>
        </div>
      </div>
    );
  }

  const imageProps = {
    src: imageUrl,
    alt,
    className: `${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`,
    priority,
    onLoad: handleLoad,
    onError: handleError,
    quality,
    placeholder: placeholder as "blur" | "empty",
    blurDataURL: placeholder === "blur" ? defaultBlurDataURL : undefined,
    ...(fill ? { fill: true } : { width, height }),
    ...(sizes && { sizes }),
  };

  return <Image {...imageProps} />;
}

// Specialized components for different use cases
export function ProductImage({ src, alt, className = "" }: { src?: any; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={600}
      height={600}
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
    />
  );
}

export function HeroImage({ src, alt, className = "" }: { src?: any; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      sizes="100vw"
      priority
    />
  );
}

export function CardImage({ src, alt, className = "" }: { src?: any; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={400}
      height={300}
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
    />
  );
}

export function ThumbnailImage({ src, alt, className = "" }: { src?: any; alt: string; className?: string }) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={200}
      height={200}
      className={`object-cover ${className}`}
      sizes="(max-width: 768px) 25vw, 200px"
    />
  );
}



