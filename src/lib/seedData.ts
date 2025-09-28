// Seed data for Sanity CMS
// This would typically be run as a script to populate the CMS with initial content

export const siteSettingsSeed = {
  _type: 'siteSettings',
  title: 'Roki Foods',
  description: 'Sustainable palm oil with zero-waste circularity. Seasonal harvesting, community empowerment, and a calm, natural kitchen staple.',
  heroTitle: 'Pure palm oil, responsibly crafted',
  heroSubtitle: 'Sustainable palm oil with zero-waste circularity. Seasonal harvesting, community empowerment, and a calm, natural kitchen staple.',
  heroCtaPrimary: 'Shop Now',
  heroCtaSecondary: 'Learn More',
  promoBarText: 'Limited time: seasonal harvest — 20% off select products',
  promoBarCta: 'Shop now'
};

export const productsSeed = [
  {
    _type: 'product',
    title: 'Roki Palm Oil — 500ml',
    slug: { current: 'roki-palm-oil-500ml' },
    price: 7.5,
    description: 'Our signature palm oil, cold-pressed from sustainably harvested fruit. Perfect for everyday cooking.',
    category: { _ref: 'oil-category' },
    featured: true,
    inStock: true
  },
  {
    _type: 'product',
    title: 'Roki Palm Oil — 1L',
    slug: { current: 'roki-palm-oil-1l' },
    price: 12.0,
    description: 'Our signature palm oil in a larger size. Cold-pressed from sustainably harvested fruit.',
    category: { _ref: 'oil-category' },
    featured: true,
    inStock: true
  },
  {
    _type: 'product',
    title: 'Roki Palm Oil — 2L',
    slug: { current: 'roki-palm-oil-2l' },
    price: 22.0,
    description: 'Our signature palm oil in our largest size. Perfect for families and commercial kitchens.',
    category: { _ref: 'oil-category' },
    featured: true,
    inStock: true
  },
  {
    _type: 'product',
    title: 'Roki Coconut Oil — 500ml',
    slug: { current: 'roki-coconut-oil-500ml' },
    price: 8.5,
    description: 'Cold-pressed coconut oil from our sustainable farms. Rich in flavor and nutrients.',
    category: { _ref: 'oil-category' },
    featured: false,
    inStock: true
  },
  {
    _type: 'product',
    title: 'Palm Oil Seasoning Blend',
    slug: { current: 'palm-oil-seasoning-blend' },
    price: 6.0,
    description: 'A carefully crafted blend of herbs and spices, perfect for enhancing your palm oil dishes.',
    category: { _ref: 'seasoning-category' },
    featured: false,
    inStock: true
  },
  {
    _type: 'product',
    title: 'Starter Gift Set',
    slug: { current: 'starter-gift-set' },
    price: 25.0,
    description: 'Perfect introduction to Roki products. Includes 500ml palm oil, seasoning blend, and recipe cards.',
    category: { _ref: 'gift-category' },
    featured: false,
    inStock: true
  }
];

export const categoriesSeed = [
  {
    _type: 'category',
    _id: 'oil-category',
    title: 'Oil',
    slug: { current: 'oil' },
    description: 'Our premium cold-pressed oils'
  },
  {
    _type: 'category',
    _id: 'seasoning-category',
    title: 'Seasoning',
    slug: { current: 'seasoning' },
    description: 'Herbs and spice blends'
  },
  {
    _type: 'category',
    _id: 'gift-category',
    title: 'Gift',
    slug: { current: 'gift' },
    description: 'Gift sets and bundles'
  }
];

export const postsSeed = [
  {
    _type: 'post',
    title: 'Seasonal Palm Stew with Wild Greens',
    slug: { current: 'seasonal-palm-stew-wild-greens' },
    excerpt: 'A nourishing, one-pot meal that celebrates seasonal ingredients and zero-waste cooking techniques.',
    author: 'Chef Maria',
    publishedAt: '2024-12-15T00:00:00Z',
    category: 'Recipe',
    tags: ['Seasonal', 'One-Pot', 'Zero Waste'],
    featured: true
  },
  {
    _type: 'post',
    title: 'The Art of Frying with Palm Oil',
    slug: { current: 'art-of-frying-palm-oil' },
    excerpt: 'Master the perfect fry with our comprehensive guide to temperature control and flavor enhancement.',
    author: 'Chef David',
    publishedAt: '2024-12-10T00:00:00Z',
    category: 'Guide',
    tags: ['Cooking Tips', 'Technique', 'Flavor'],
    featured: false
  },
  {
    _type: 'post',
    title: 'From Byproduct to Beautiful Soap',
    slug: { current: 'byproduct-to-beautiful-soap' },
    excerpt: 'Discover how we transform palm oil processing waste into luxurious, natural soaps.',
    author: 'Sarah Chen',
    publishedAt: '2024-12-05T00:00:00Z',
    category: 'Sustainability',
    tags: ['Circular Economy', 'Craft', 'Zero Waste'],
    featured: false
  }
];

export const recipesSeed = [
  {
    _type: 'recipe',
    title: 'Golden Fried Plantains with Palm Oil',
    slug: { current: 'golden-fried-plantains-palm-oil' },
    excerpt: 'A traditional West African recipe that showcases palm oil\'s perfect frying properties.',
    author: 'Chef Amina',
    publishedAt: '2024-12-12T00:00:00Z',
    category: 'Traditional',
    tags: ['Traditional', 'Fried', 'Plantains'],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    featured: false
  }
];

export const testimonialsSeed = [
  {
    _type: 'testimonial',
    quote: 'Roki palm oil has transformed our cooking. The flavor is incredible and knowing it\'s sustainably sourced makes every meal feel better.',
    author: 'Sharon J.',
    location: 'Portland, OR',
    rating: 5,
    featured: true
  },
  {
    _type: 'testimonial',
    quote: 'Finally, a palm oil I can feel good about using. The quality is outstanding and the company\'s commitment to zero waste is inspiring.',
    author: 'Grace W.',
    location: 'Austin, TX',
    rating: 5,
    featured: true
  },
  {
    _type: 'testimonial',
    quote: 'Love the transparency and impact. Every purchase supports local farmers and sustainable practices. The taste is unmatched.',
    author: 'Karen O.',
    location: 'Seattle, WA',
    rating: 5,
    featured: true
  },
  {
    _type: 'testimonial',
    quote: 'As a professional chef, I demand the best ingredients. Roki delivers exceptional quality while supporting the communities that grow it.',
    author: 'Marcus T.',
    location: 'San Francisco, CA',
    rating: 5,
    featured: true
  }
];

export const timelineStepsSeed = [
  {
    _type: 'timelineStep',
    title: 'Wild Grove Care',
    description: 'We nourish palms and protect biodiversity through regenerative farming practices.',
    icon: 'TreePine',
    order: 1
  },
  {
    _type: 'timelineStep',
    title: 'Seasonal Harvest',
    description: 'Fruit is hand-picked at peak ripeness by local farmers who know each tree.',
    icon: 'Hand',
    order: 2
  },
  {
    _type: 'timelineStep',
    title: 'Cold Pressing',
    description: 'Gentle extraction preserves nutrients and flavor without heat or chemicals.',
    icon: 'Droplets',
    order: 3
  },
  {
    _type: 'timelineStep',
    title: 'Zero Waste',
    description: 'Every part is utilized—fibers become soap, shells become fuel and compost.',
    icon: 'Recycle',
    order: 4
  }
];

export const impactStatsSeed = [
  {
    _type: 'impactStat',
    label: 'Acres Protected',
    value: '2,500+',
    description: 'Biodiversity-rich land under our protection',
    icon: 'TreePine'
  },
  {
    _type: 'impactStat',
    label: 'Farmers Supported',
    value: '500+',
    description: 'Local farmers in our fair trade network',
    icon: 'Users'
  },
  {
    _type: 'impactStat',
    label: 'Zero Waste',
    value: '100%',
    description: 'Circular processing with no waste',
    icon: 'Leaf'
  },
  {
    _type: 'impactStat',
    label: 'Years of Practice',
    value: '15+',
    description: 'Sustainable farming experience',
    icon: 'Clock'
  }
];

export const mediaItemsSeed = [
  {
    _type: 'mediaItem',
    title: 'Sustainable Palm Grove',
    type: 'image',
    category: 'Farm',
    description: 'Our regenerative farming practices protect biodiversity while producing premium palm oil.',
    tags: ['Agriculture', 'Sustainability', 'Nature'],
    date: '2024-12-15T00:00:00Z',
    location: 'West Africa',
    photographer: 'Maria Santos'
  },
  {
    _type: 'mediaItem',
    title: 'Cold Pressing Process',
    type: 'video',
    category: 'Process',
    description: 'Watch how we gently extract oil to preserve nutrients and flavor.',
    tags: ['Production', 'Quality', 'Traditional'],
    date: '2024-12-10T00:00:00Z',
    location: 'Processing Facility',
    photographer: 'David Chen'
  },
  {
    _type: 'mediaItem',
    title: 'Local Farmers',
    type: 'image',
    category: 'Community',
    description: 'Meet the farmers who make our sustainable palm oil possible.',
    tags: ['People', 'Community', 'Partnership'],
    date: '2024-12-08T00:00:00Z',
    location: 'West Africa',
    photographer: 'Sarah Chen'
  }
];



