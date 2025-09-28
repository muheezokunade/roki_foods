#!/usr/bin/env node

/**
 * Sanity Seed Script
 * 
 * This script populates Sanity CMS with initial content for Roki Foods.
 * Run with: node scripts/seedSanity.js
 * 
 * Make sure to set your SANITY_PROJECT_ID and SANITY_DATASET environment variables.
 */

const { createClient } = require('@sanity/client');
const { 
  siteSettingsSeed,
  productsSeed,
  categoriesSeed,
  postsSeed,
  recipesSeed,
  testimonialsSeed,
  timelineStepsSeed,
  impactStatsSeed,
  mediaItemsSeed
} = require('../src/lib/seedData.ts');

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'yourProjectId',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // Required for write operations
});

async function seedSanity() {
  console.log('🌱 Starting Sanity seed...');

  try {
    // Seed categories first (products reference them)
    console.log('📁 Seeding categories...');
    for (const category of categoriesSeed) {
      await client.createOrReplace(category);
      console.log(`✅ Created category: ${category.title}`);
    }

    // Seed products
    console.log('🛍️ Seeding products...');
    for (const product of productsSeed) {
      await client.createOrReplace(product);
      console.log(`✅ Created product: ${product.title}`);
    }

    // Seed site settings
    console.log('⚙️ Seeding site settings...');
    await client.createOrReplace(siteSettingsSeed);
    console.log('✅ Created site settings');

    // Seed posts
    console.log('📝 Seeding posts...');
    for (const post of postsSeed) {
      await client.createOrReplace(post);
      console.log(`✅ Created post: ${post.title}`);
    }

    // Seed recipes
    console.log('🍳 Seeding recipes...');
    for (const recipe of recipesSeed) {
      await client.createOrReplace(recipe);
      console.log(`✅ Created recipe: ${recipe.title}`);
    }

    // Seed testimonials
    console.log('💬 Seeding testimonials...');
    for (const testimonial of testimonialsSeed) {
      await client.createOrReplace(testimonial);
      console.log(`✅ Created testimonial: ${testimonial.author}`);
    }

    // Seed timeline steps
    console.log('⏰ Seeding timeline steps...');
    for (const step of timelineStepsSeed) {
      await client.createOrReplace(step);
      console.log(`✅ Created timeline step: ${step.title}`);
    }

    // Seed impact stats
    console.log('📊 Seeding impact stats...');
    for (const stat of impactStatsSeed) {
      await client.createOrReplace(stat);
      console.log(`✅ Created impact stat: ${stat.label}`);
    }

    // Seed media items
    console.log('📸 Seeding media items...');
    for (const media of mediaItemsSeed) {
      await client.createOrReplace(media);
      console.log(`✅ Created media item: ${media.title}`);
    }

    console.log('🎉 Sanity seed completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Visit /studio to view your content');
    console.log('2. Add images to your content items');
    console.log('3. Customize content as needed');
    console.log('4. Publish your content');

  } catch (error) {
    console.error('❌ Error seeding Sanity:', error);
    process.exit(1);
  }
}

// Run the seed function
seedSanity();



