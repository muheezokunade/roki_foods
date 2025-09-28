// SEO utilities and structured data for Roki Foods

import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: "website" | "article" | "product";
    url?: string;
    image?: string;
    siteName?: string;
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    image?: string;
    creator?: string;
  };
  structuredData?: any;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    openGraph,
    twitter,
  } = config;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rokifoods.com";
  const fullTitle = title.includes("Roki Foods") ? title : `${title} | Roki Foods`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "Roki Foods" }],
    creator: "Roki Foods",
    publisher: "Roki Foods",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonical ? `${baseUrl}${canonical}` : undefined,
    },
    openGraph: {
      title: openGraph?.title || fullTitle,
      description: openGraph?.description || description,
      type: openGraph?.type || "website",
      url: openGraph?.url ? `${baseUrl}${openGraph.url}` : undefined,
      images: openGraph?.image ? [
        {
          url: openGraph.image,
          width: 1200,
          height: 630,
          alt: openGraph.title || fullTitle,
        }
      ] : undefined,
      siteName: openGraph?.siteName || "Roki Foods",
      locale: "en_US",
    },
    twitter: {
      card: twitter?.card || "summary_large_image",
      title: twitter?.title || fullTitle,
      description: twitter?.description || description,
      images: twitter?.image ? [twitter.image] : undefined,
      creator: twitter?.creator || "@rokifoods",
    },
    other: {
      "application-name": "Roki Foods",
      "apple-mobile-web-app-title": "Roki Foods",
      "msapplication-TileColor": "#0B3D2E",
      "theme-color": "#0B3D2E",
    },
  };
}

// Structured Data Schemas
export const structuredDataSchemas = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Roki Foods",
    url: "https://rokifoods.com",
    logo: "https://rokifoods.com/logo.png",
    description: "Sustainable palm oil and natural products from West Africa. Zero waste, community empowerment, and regenerative farming practices.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "West Africa",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "hello@rokifoods.com",
    },
    sameAs: [
      "https://facebook.com/rokifoods",
      "https://instagram.com/rokifoods",
      "https://twitter.com/rokifoods",
    ],
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Roki Foods",
    url: "https://rokifoods.com",
    description: "Sustainable palm oil and natural products from West Africa",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rokifoods.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },

  product: (product: any) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Roki Foods",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Roki Foods",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Certification",
        value: "USDA Organic",
      },
      {
        "@type": "PropertyValue",
        name: "Sustainability",
        value: "Zero Waste",
      },
    ],
  }),

  article: (article: any) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.mainImage,
    author: {
      "@type": "Person",
      name: article.author?.name || "Roki Foods",
    },
    publisher: {
      "@type": "Organization",
      name: "Roki Foods",
      logo: {
        "@type": "ImageObject",
        url: "https://rokifoods.com/logo.png",
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://rokifoods.com/gallery/${article.slug}`,
    },
  }),

  recipe: (recipe: any) => ({
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.excerpt,
    image: recipe.mainImage,
    author: {
      "@type": "Person",
      name: recipe.author?.name || "Roki Foods",
    },
    datePublished: recipe.publishedAt,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    totalTime: recipe.totalTime,
    recipeYield: recipe.servings,
    recipeCategory: recipe.category,
    recipeCuisine: "West African",
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    nutrition: {
      "@type": "NutritionInformation",
      calories: recipe.nutrition?.calories,
      fatContent: recipe.nutrition?.fat,
      proteinContent: recipe.nutrition?.protein,
    },
  }),

  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://rokifoods.com${item.url}`,
    })),
  }),

  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Roki Foods",
    description: "Sustainable palm oil and natural products from West Africa",
    url: "https://rokifoods.com",
    telephone: "+1-555-123-4567",
    email: "hello@rokifoods.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "West Africa",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, PayPal",
    currenciesAccepted: "USD, EUR, GBP",
  },
};

// SEO helpers
export const seoHelpers = {
  // Generate meta description from content
  generateDescription: (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    
    const truncated = cleanContent.substring(0, maxLength - 3);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  },

  // Generate keywords from content
  generateKeywords: (content: string, additional: string[] = []): string[] => {
    const baseKeywords = [
      "Roki Foods",
      "sustainable palm oil",
      "organic palm oil",
      "West African products",
      "zero waste",
      "community empowerment",
      "regenerative farming",
      "natural products",
      "ethical sourcing",
      "fair trade"
    ];

    // Extract keywords from content (simplified)
    const contentWords = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3)
      .slice(0, 10);

    return [...baseKeywords, ...additional, ...contentWords].slice(0, 20);
  },

  // Generate canonical URL
  generateCanonical: (path: string): string => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rokifoods.com";
    return `${baseUrl}${path}`;
  },

  // Generate Open Graph image URL
  generateOGImage: (title: string, subtitle?: string): string => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rokifoods.com";
    const params = new URLSearchParams({
      title: title,
      ...(subtitle && { subtitle }),
      template: "rokifoods",
    });
    return `${baseUrl}/api/og?${params.toString()}`;
  },
};

// Common SEO configurations
export const commonSEO = {
  home: {
    title: "Roki Foods - Sustainable Palm Oil & Natural Products",
    description: "Discover sustainable palm oil and natural products from West Africa. Zero waste, community empowerment, and regenerative farming practices. Shop ethically sourced products today.",
    keywords: ["sustainable palm oil", "organic products", "West African food", "zero waste", "ethical sourcing"],
  },

  shop: {
    title: "Shop - Sustainable Palm Oil & Natural Products",
    description: "Browse our collection of sustainable palm oil, seasonings, and natural products. All products are ethically sourced with zero waste practices.",
    keywords: ["palm oil", "natural products", "organic seasonings", "sustainable food"],
  },

  about: {
    title: "Our Story - Sustainable Farming & Community Impact",
    description: "Learn about Roki Foods' mission to create sustainable palm oil through regenerative farming, community empowerment, and zero waste practices.",
    keywords: ["sustainable farming", "community impact", "regenerative agriculture", "zero waste"],
  },

  recipes: {
    title: "Recipes & Cooking Tips - Sustainable Palm Oil",
    description: "Discover delicious recipes and cooking tips using sustainable palm oil. From traditional West African dishes to modern culinary creations.",
    keywords: ["palm oil recipes", "cooking tips", "West African cuisine", "sustainable cooking"],
  },

  sustainability: {
    title: "Sustainability - Zero Waste & Environmental Impact",
    description: "Explore our commitment to sustainability, zero waste practices, and positive environmental impact through regenerative farming.",
    keywords: ["sustainability", "zero waste", "environmental impact", "regenerative farming"],
  },
};
