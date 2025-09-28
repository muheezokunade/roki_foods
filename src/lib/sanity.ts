import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'demo',
  apiVersion: '2024-01-01',
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Content fetching functions
export async function getSiteSettings() {
  try {
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
  } catch (error) {
    console.warn('Sanity not available, using fallback data');
    return {
      title: 'Roki Foods',
      description: 'Sustainable palm oil with zero-waste circularity',
      heroTitle: 'Sustainability Grows Here',
      heroSubtitle: 'Pure palm oil, responsibly crafted',
      heroCtaPrimary: 'Learn More',
      heroCtaSecondary: 'Our Story',
      promoBarText: 'Limited time: seasonal harvest — 20% off select products',
      promoBarCta: 'Learn more'
    };
  }
}

export async function getFeaturedProducts() {
  try {
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
  } catch (error) {
    console.warn('Sanity not available, using fallback data');
    return [];
  }
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
  try {
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
  } catch (error) {
    console.warn('Sanity not available, using fallback data');
    return [];
  }
}

export async function getPost(slug: string) {
  try {
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
  } catch (error) {
    console.warn('Sanity not available, using fallback data');
    return null;
  }
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



