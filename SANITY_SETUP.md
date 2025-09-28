# Sanity CMS Setup Guide

This guide will help you set up and configure Sanity CMS for the Roki Foods website.

## Prerequisites

1. A Sanity account (sign up at [sanity.io](https://sanity.io))
2. Node.js and npm installed
3. The project dependencies installed (`npm install`)

## Setup Steps

### 1. Create a Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Click "Create project"
3. Choose "Clean project with no predefined schemas"
4. Name your project "Roki Foods CMS"
5. Choose a dataset name (e.g., "production")
6. Note down your Project ID

### 2. Configure Environment Variables

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Update `.env.local` with your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_TOKEN=your_sanity_token_here
   ```

### 3. Get Your Sanity Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to "API" tab
4. Click "Add API token"
5. Name it "Roki Foods Website"
6. Give it "Editor" permissions
7. Copy the token to your `.env.local` file

### 4. Start Sanity Studio

```bash
npm run studio
```

This will start the Sanity Studio at `http://localhost:3333`

### 5. Seed Initial Content

Run the seed script to populate your CMS with initial content:

```bash
npm run seed
```

This will create:
- Site settings
- Product categories
- Sample products
- Blog posts and recipes
- Testimonials
- Timeline steps
- Impact statistics
- Media items

## Content Management

### Accessing the Studio

- **Development**: `npm run studio` (runs on port 3333)
- **Production**: Deploy to Sanity's hosting or your own server

### Content Types

The CMS includes the following content types:

1. **Site Settings** - Global site configuration
2. **Products** - E-commerce product catalog
3. **Categories** - Product categorization
4. **Posts** - Blog articles and content
5. **Recipes** - Cooking recipes with ingredients
6. **Testimonials** - Customer reviews
7. **Timeline Steps** - Process explanation steps
8. **Impact Stats** - Company statistics
9. **Media Items** - Photos and videos

### Adding Images

1. In Sanity Studio, click the image field
2. Upload images or drag and drop
3. Add alt text for accessibility
4. Images are automatically optimized by Sanity

### Content Workflow

1. **Draft**: Content is saved as draft by default
2. **Review**: Use the "Review" tab to preview content
3. **Publish**: Click "Publish" to make content live
4. **Unpublish**: Use "Unpublish" to remove from live site

## API Usage

### Fetching Content in Components

```typescript
import { useFeaturedProducts } from '@/hooks/useSanityData';

export function MyComponent() {
  const { data: products, loading, error } = useFeaturedProducts();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  
  return (
    <div>
      {products?.map(product => (
        <div key={product._id}>{product.title}</div>
      ))}
    </div>
  );
}
```

### Server-Side Rendering

```typescript
import { getFeaturedProducts } from '@/lib/sanity';

export async function getServerSideProps() {
  const products = await getFeaturedProducts();
  
  return {
    props: { products }
  };
}
```

## Troubleshooting

### Common Issues

1. **"Project not found" error**
   - Check your Project ID in `.env.local`
   - Ensure the project exists in your Sanity account

2. **"Unauthorized" error**
   - Check your SANITY_TOKEN in `.env.local`
   - Ensure the token has proper permissions

3. **Content not appearing**
   - Check if content is published (not just saved as draft)
   - Verify the dataset name matches your configuration

4. **Images not loading**
   - Ensure images are uploaded to Sanity (not external URLs)
   - Check image permissions and CORS settings

### Getting Help

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router-live-preview)
- [Sanity Community](https://www.sanity.io/community)

## Production Deployment

### Sanity Studio

Deploy the studio to Sanity's hosting:

```bash
npm run sanity-build
sanity deploy
```

### Environment Variables

Ensure these are set in your production environment:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_TOKEN` (for server-side operations)

### CDN Configuration

Sanity automatically provides a CDN for images and assets. No additional configuration needed.



