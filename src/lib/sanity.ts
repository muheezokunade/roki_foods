import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yourProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Content fetching functions
export async function getSiteSettings() {
  return await client.fetch(`
    *[_type == "siteSettings"][0] {
      title,
      description,
      heroTitle,
      heroSubtitle,
      heroImage,
      heroCtaPrimary,
      heroCtaSecondary,
      promoBarText,
      promoBarCta
    }
  `);
}

export async function getFeaturedProducts() {
  return await client.fetch(`
    *[_type == "product" && featured == true] | order(_createdAt desc) [0...6] {
      _id,
      title,
      slug,
      price,
      image,
      category->{title, slug},
      description,
      featured
    }
  `);
}

export async function getProducts() {
  return await client.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      price,
      image,
      category->{title, slug},
      description,
      featured,
      inStock
    }
  `);
}

export async function getProduct(slug: string) {
  return await client.fetch(`
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      price,
      image,
      category->{title, slug},
      description,
      body,
      inStock,
      seo
    }
  `, { slug });
}

export async function getCategories() {
  return await client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `);
}

export async function getPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      image,
      category,
      tags,
      featured
    }
  `);
}

export async function getPost(slug: string) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      image,
      category,
      tags,
      body,
      seo
    }
  `, { slug });
}

export async function getRecipes() {
  return await client.fetch(`
    *[_type == "recipe"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      image,
      category,
      tags,
      prepTime,
      cookTime,
      servings,
      difficulty,
      featured
    }
  `);
}

export async function getRecipe(slug: string) {
  return await client.fetch(`
    *[_type == "recipe" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      author,
      publishedAt,
      image,
      category,
      tags,
      prepTime,
      cookTime,
      servings,
      difficulty,
      ingredients,
      instructions,
      notes,
      seo
    }
  `, { slug });
}

export async function getTestimonials() {
  return await client.fetch(`
    *[_type == "testimonial"] | order(_createdAt desc) {
      _id,
      quote,
      author,
      location,
      rating,
      image,
      featured
    }
  `);
}

export async function getTimelineSteps() {
  return await client.fetch(`
    *[_type == "timelineStep"] | order(order asc) {
      _id,
      title,
      description,
      icon,
      order
    }
  `);
}

export async function getImpactStats() {
  return await client.fetch(`
    *[_type == "impactStat"] | order(_createdAt desc) {
      _id,
      label,
      value,
      description,
      icon
    }
  `);
}

export async function getMediaItems() {
  return await client.fetch(`
    *[_type == "mediaItem"] | order(_createdAt desc) {
      _id,
      title,
      type,
      category,
      description,
      image,
      video,
      tags,
      date,
      location,
      photographer
    }
  `);
}



