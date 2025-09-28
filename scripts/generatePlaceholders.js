#!/usr/bin/env node

/**
 * Placeholder Image Generator
 * 
 * This script generates placeholder images for development and testing.
 * Run with: node scripts/generatePlaceholders.js
 */

const fs = require('fs');
const path = require('path');

// Create placeholder images directory structure
const placeholderDir = path.join(process.cwd(), 'public', 'images', 'placeholders');

const placeholderImages = [
  { name: 'palm-oil.jpg', category: 'product', description: 'Premium palm oil bottle' },
  { name: 'coconut-oil.jpg', category: 'product', description: 'Cold-pressed coconut oil' },
  { name: 'seasoning.jpg', category: 'product', description: 'Herbs and spice blend' },
  { name: 'farm.jpg', category: 'farm', description: 'Sustainable palm grove' },
  { name: 'process.jpg', category: 'process', description: 'Cold pressing facility' },
  { name: 'community.jpg', category: 'community', description: 'Local farmers' },
  { name: 'recipe.jpg', category: 'recipe', description: 'Cooking with palm oil' },
  { name: 'blog.jpg', category: 'blog', description: 'Educational content' },
  { name: 'lifestyle.jpg', category: 'lifestyle', description: 'Sustainable living' },
  { name: 'hero.jpg', category: 'hero', description: 'Roki Foods hero image' }
];

// SVG template for placeholder images
const generateSVG = (width, height, text, bgColor = '#f4f3ef', textColor = '#2e7d32') => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dy=".3em">
    ${text}
  </text>
</svg>`;

// Create directory structure
function createDirectories() {
  const dirs = [
    'public/images',
    'public/images/placeholders',
    'public/images/products',
    'public/images/farm',
    'public/images/process',
    'public/images/community',
    'public/images/recipes',
    'public/images/blog',
    'public/images/lifestyle'
  ];

  dirs.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });
}

// Generate placeholder images
function generatePlaceholders() {
  console.log('🎨 Generating placeholder images...');

  placeholderImages.forEach(({ name, category, description }) => {
    const svgContent = generateSVG(800, 600, description);
    const filePath = path.join(placeholderDir, name.replace('.jpg', '.svg'));
    
    fs.writeFileSync(filePath, svgContent);
    console.log(`✅ Generated: ${name.replace('.jpg', '.svg')}`);
  });
}

// Create README for images
function createImageReadme() {
  const readmeContent = `# Image Assets

This directory contains placeholder images for development and testing.

## Structure

- \`placeholders/\` - SVG placeholder images for development
- \`products/\` - Product images (to be added)
- \`farm/\` - Farm and agriculture images (to be added)
- \`process/\` - Manufacturing process images (to be added)
- \`community/\` - Community and people images (to be added)
- \`recipes/\` - Recipe and cooking images (to be added)
- \`blog/\` - Blog and article images (to be added)
- \`lifestyle/\` - Lifestyle and usage images (to be added)

## Image Guidelines

### Dimensions
- **Hero images**: 1920x1080px (16:9 aspect ratio)
- **Product images**: 800x800px (1:1 aspect ratio)
- **Card images**: 400x300px (4:3 aspect ratio)
- **Thumbnails**: 200x200px (1:1 aspect ratio)

### Formats
- **Primary**: WebP (for modern browsers)
- **Fallback**: JPEG (for older browsers)
- **Development**: SVG placeholders

### Optimization
- Compress images before uploading
- Use appropriate dimensions for use case
- Include alt text for accessibility
- Consider lazy loading for below-the-fold images

## Adding Real Images

1. Replace placeholder SVGs with actual images
2. Use descriptive filenames (e.g., \`palm-oil-500ml.jpg\`)
3. Optimize images for web (compress, resize)
4. Update Sanity CMS with new image references
5. Test on different devices and screen sizes

## Tools

- **Compression**: [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/)
- **Resizing**: [Canva](https://canva.com/), [GIMP](https://www.gimp.org/)
- **Format conversion**: [CloudConvert](https://cloudconvert.com/)
`;

  const readmePath = path.join(process.cwd(), 'public', 'images', 'README.md');
  fs.writeFileSync(readmePath, readmeContent);
  console.log('✅ Created images README');
}

// Main execution
function main() {
  console.log('🚀 Starting placeholder image generation...');
  
  try {
    createDirectories();
    generatePlaceholders();
    createImageReadme();
    
    console.log('\n🎉 Placeholder images generated successfully!');
    console.log('\nNext steps:');
    console.log('1. Replace SVG placeholders with real images');
    console.log('2. Upload images to Sanity CMS');
    console.log('3. Update image references in components');
    console.log('4. Test image loading and optimization');
    
  } catch (error) {
    console.error('❌ Error generating placeholders:', error);
    process.exit(1);
  }
}

// Run the script
main();



