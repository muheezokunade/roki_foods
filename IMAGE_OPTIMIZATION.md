# Image Optimization Guide

This guide covers image optimization strategies for the Roki Foods website to ensure fast loading times and excellent user experience.

## Overview

The website uses Next.js Image component with Sanity CMS integration for optimal image delivery. All images are automatically optimized for different devices and screen sizes.

## Image Components

### OptimizedImage
The main image component that handles:
- Automatic format conversion (WebP, AVIF)
- Responsive sizing
- Lazy loading
- Blur placeholders
- Error handling

```typescript
import { OptimizedImage } from '@/components/OptimizedImage';

<OptimizedImage
  src={sanityImageObject}
  alt="Product description"
  width={600}
  height={600}
  className="object-cover"
/>
```

### Specialized Components
- `ProductImage` - For product photos (600x600px)
- `HeroImage` - For hero sections (full width)
- `CardImage` - For card layouts (400x300px)
- `ThumbnailImage` - For small previews (200x200px)

## Image Formats

### Supported Formats
1. **WebP** - Primary format for modern browsers
2. **AVIF** - Next-generation format for supported browsers
3. **JPEG** - Fallback for older browsers
4. **SVG** - For icons and simple graphics

### Format Selection
Next.js automatically serves the best format based on browser support:
- AVIF for Chrome 85+, Firefox 93+
- WebP for Chrome 23+, Firefox 65+, Safari 14+
- JPEG for all other browsers

## Image Sizes and Breakpoints

### Device Sizes
```javascript
[640, 750, 828, 1080, 1200, 1920, 2048, 3840]
```

### Common Use Cases
- **Hero images**: 1920x1080px
- **Product images**: 800x800px
- **Card images**: 400x300px
- **Thumbnails**: 200x200px

### Responsive Sizes
```typescript
const sizes = {
  hero: '(max-width: 768px) 100vw, 100vw',
  product: '(max-width: 768px) 100vw, 50vw',
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px',
  thumbnail: '(max-width: 768px) 25vw, 200px'
};
```

## Sanity CMS Integration

### Image URLs
Sanity automatically provides optimized image URLs:

```typescript
import { urlFor } from '@/lib/sanity';

const imageUrl = urlFor(imageObject)
  .width(800)
  .height(600)
  .quality(85)
  .format('webp')
  .url();
```

### Parameters
- `width()` - Image width in pixels
- `height()` - Image height in pixels
- `quality()` - JPEG/WebP quality (1-100)
- `format()` - Output format (webp, jpeg, png)
- `fit()` - How to fit the image (crop, fill, scale)

## Placeholder Images

### Development Placeholders
SVG placeholders are generated for development:

```bash
npm run generate:placeholders
```

### Blur Placeholders
Base64-encoded blur placeholders for smooth loading:

```typescript
const blurDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`;
```

## Performance Optimization

### Lazy Loading
Images are lazy-loaded by default (except above-the-fold images with `priority={true}`):

```typescript
<OptimizedImage
  src={image}
  alt="Description"
  priority={false} // Default
/>
```

### Caching
- **Browser cache**: 1 year for static images
- **CDN cache**: Sanity's global CDN
- **Next.js cache**: Optimized images cached locally

### Compression
- **Quality**: 85% (good balance of size/quality)
- **Progressive JPEG**: For better perceived performance
- **Lossless optimization**: Automatic during build

## Best Practices

### 1. Image Dimensions
- Use exact dimensions when possible
- Avoid oversized images
- Consider aspect ratios for different devices

### 2. Alt Text
- Always provide descriptive alt text
- Include relevant keywords for SEO
- Keep alt text concise but informative

### 3. File Naming
- Use descriptive filenames
- Include dimensions for clarity
- Use hyphens instead of spaces

### 4. Content Delivery
- Use Sanity's CDN for global delivery
- Enable compression
- Set appropriate cache headers

## Monitoring and Analytics

### Core Web Vitals
Monitor these metrics:
- **LCP** (Largest Contentful Paint) - Should be < 2.5s
- **CLS** (Cumulative Layout Shift) - Should be < 0.1
- **FID** (First Input Delay) - Should be < 100ms

### Tools
- **Lighthouse** - Performance auditing
- **PageSpeed Insights** - Real-world performance
- **WebPageTest** - Detailed analysis

## Troubleshooting

### Common Issues

1. **Images not loading**
   - Check Sanity project ID and dataset
   - Verify image permissions
   - Check network connectivity

2. **Slow loading**
   - Reduce image dimensions
   - Lower quality setting
   - Enable lazy loading

3. **Layout shift**
   - Set explicit dimensions
   - Use aspect-ratio CSS
   - Reserve space for images

### Debug Mode
Enable Next.js image debugging:

```javascript
// next.config.js
module.exports = {
  images: {
    unoptimized: process.env.NODE_ENV === 'development'
  }
};
```

## Migration Guide

### From Static Images
1. Move images to Sanity CMS
2. Update image references
3. Replace `<img>` with `<OptimizedImage>`
4. Add proper alt text
5. Test on different devices

### From Other CDNs
1. Export images from current CDN
2. Upload to Sanity
3. Update image URLs
4. Test performance improvements

## Future Enhancements

### Planned Features
- **AI-powered alt text** generation
- **Automatic image cropping** for different layouts
- **Advanced compression** algorithms
- **Real-time optimization** based on user device

### Experimental Features
- **Responsive images** with art direction
- **Image preloading** for critical content
- **Progressive enhancement** for slow connections
