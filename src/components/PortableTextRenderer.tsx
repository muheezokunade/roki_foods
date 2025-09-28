"use client";

import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

// Custom components for PortableText rendering
const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset) return null;
      
      return (
        <div className="my-8">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[color:var(--clay-300)]/60">
            <Image
              src={urlFor(value).width(800).height(450).url()}
              alt={value.alt || 'Content image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
            />
          </div>
          {value.caption && (
            <p className="text-sm text-[color:var(--bark-900)]/60 mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    code: ({ value }: { value: any }) => (
      <pre className="bg-[color:var(--mist-100)] rounded-lg p-4 overflow-x-auto my-6">
        <code className="text-sm text-[color:var(--bark-900)]">
          {value.code}
        </code>
      </pre>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-3xl md:text-4xl font-display font-semibold text-[color:var(--leaf-900)] mb-6 mt-8 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-[color:var(--leaf-900)] mb-4 mt-8 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-xl md:text-2xl font-display font-semibold text-[color:var(--leaf-900)] mb-3 mt-6 first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-lg md:text-xl font-semibold text-[color:var(--leaf-900)] mb-3 mt-6 first:mt-0">
        {children}
      </h4>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-[color:var(--bark-900)]/80 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[color:var(--leaf-600)] pl-6 py-2 my-6 italic text-[color:var(--bark-900)]/70 bg-[color:var(--mist-100)]/30 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-[color:var(--bark-900)]/80">
        {children}
      </ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-[color:var(--bark-900)]/80">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold text-[color:var(--leaf-900)]">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children: React.ReactNode }) => (
      <code className="bg-[color:var(--mist-100)] px-2 py-1 rounded text-sm font-mono text-[color:var(--bark-900)]">
        {children}
      </code>
    ),
    link: ({ children, value }: { children: React.ReactNode; value: any }) => (
      <a 
        href={value.href} 
        className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] underline underline-offset-2 transition-colors"
        target={value.blank ? '_blank' : undefined}
        rel={value.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
};

interface PortableTextRendererProps {
  content: any;
  className?: string;
}

export function PortableTextRenderer({ content, className = '' }: PortableTextRendererProps) {
  if (!content) return null;

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  );
}



