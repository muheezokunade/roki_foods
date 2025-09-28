"use client";

import Script from "next/script";

interface StructuredDataProps {
  data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}

// Pre-built structured data components
export function OrganizationStructuredData() {
  const data = {
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
  };

  return <StructuredData data={data} />;
}

export function WebsiteStructuredData() {
  const data = {
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
  };

  return <StructuredData data={data} />;
}

export function ProductStructuredData({ product }: { product: any }) {
  const data = {
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
  };

  return <StructuredData data={data} />;
}

export function ArticleStructuredData({ article }: { article: any }) {
  const data = {
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
  };

  return <StructuredData data={data} />;
}

export function RecipeStructuredData({ recipe }: { recipe: any }) {
  const data = {
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
  };

  return <StructuredData data={data} />;
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://rokifoods.com${item.url}`,
    })),
  };

  return <StructuredData data={data} />;
}

export function FAQStructuredData({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const data = {
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
  };

  return <StructuredData data={data} />;
}
