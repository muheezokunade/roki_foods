import { Metadata } from "next";
import { ArrowLeft, Clock, User, Share2, BookOpen } from "lucide-react";
import Link from "next/link";

// Mock data - in real app this would come from Sanity CMS
const contentData = {
  1: {
    id: 1,
    type: "Recipe",
    category: "Recipes",
    title: "Seasonal Palm Stew with Wild Greens",
    excerpt: "A nourishing, one-pot meal that celebrates seasonal ingredients and zero-waste cooking techniques.",
    author: "Chef Maria",
    readTime: "8 min read",
    publishDate: "December 15, 2024",
    image: "/vercel.svg",
    tags: ["Seasonal", "One-Pot", "Zero Waste"],
    content: `
      <h2>Ingredients</h2>
      <ul>
        <li>2 tablespoons Roki palm oil</li>
        <li>1 large onion, diced</li>
        <li>3 cloves garlic, minced</li>
        <li>2 cups mixed wild greens (kale, spinach, or local greens)</li>
        <li>1 cup seasonal vegetables (carrots, sweet potato, or squash)</li>
        <li>4 cups vegetable broth</li>
        <li>1 cup cooked beans or lentils</li>
        <li>Salt and pepper to taste</li>
        <li>Fresh herbs for garnish</li>
      </ul>

      <h2>Instructions</h2>
      <ol>
        <li>Heat Roki palm oil in a large pot over medium heat.</li>
        <li>Add diced onion and cook until translucent, about 5 minutes.</li>
        <li>Add garlic and cook for another minute until fragrant.</li>
        <li>Add seasonal vegetables and cook for 5-7 minutes until slightly softened.</li>
        <li>Pour in vegetable broth and bring to a gentle simmer.</li>
        <li>Add wild greens and cooked beans, simmer for 10-15 minutes.</li>
        <li>Season with salt and pepper to taste.</li>
        <li>Serve hot, garnished with fresh herbs.</li>
      </ol>

      <h2>Why This Recipe Works</h2>
      <p>This stew showcases the versatility of palm oil in creating rich, flavorful dishes while maintaining our commitment to zero-waste cooking. The palm oil adds a subtle depth of flavor that complements the earthiness of the wild greens.</p>

      <h2>Zero-Waste Tips</h2>
      <ul>
        <li>Save vegetable scraps to make your own broth</li>
        <li>Use the stems of greens in the cooking process</li>
        <li>Compost any unused vegetable parts</li>
        <li>Store leftovers in reusable containers</li>
      </ul>
    `
  },
  2: {
    id: 2,
    type: "Article",
    category: "Cooking Tips",
    title: "The Art of Frying with Palm Oil",
    excerpt: "Master the perfect fry with our comprehensive guide to temperature control and flavor enhancement.",
    author: "Chef David",
    readTime: "12 min read",
    publishDate: "December 10, 2024",
    image: "/vercel.svg",
    tags: ["Cooking Tips", "Technique", "Flavor"],
    content: `
      <h2>Understanding Palm Oil's Frying Properties</h2>
      <p>Palm oil has a high smoke point of around 450°F (232°C), making it ideal for high-heat cooking methods like frying. Its neutral flavor profile allows the natural taste of your ingredients to shine through.</p>

      <h2>Temperature Control</h2>
      <p>The key to perfect frying is maintaining consistent temperature. Use a deep-fry thermometer to monitor oil temperature:</p>
      <ul>
        <li><strong>Shallow frying:</strong> 350-375°F (177-190°C)</li>
        <li><strong>Deep frying:</strong> 350-375°F (177-190°C)</li>
        <li><strong>Stir-frying:</strong> 400-425°F (204-218°C)</li>
      </ul>

      <h2>Best Practices</h2>
      <ol>
        <li>Heat oil gradually to prevent burning</li>
        <li>Don't overcrowd the pan - this lowers temperature</li>
        <li>Use a slotted spoon to remove food from oil</li>
        <li>Drain on paper towels or a wire rack</li>
        <li>Season immediately after frying while still hot</li>
      </ol>

      <h2>Oil Management</h2>
      <p>Proper oil management ensures consistent results and extends the life of your cooking oil. Filter used oil through a fine mesh strainer and store in a cool, dark place for reuse.</p>
    `
  }
};

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = contentData[params.id as keyof typeof contentData];
  
  if (!content) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: content.title,
    description: content.excerpt,
  };
}

export default function LearnArticlePage({ params }: PageProps) {
  const content = contentData[params.id as keyof typeof contentData];

  if (!content) {
    return (
      <main className="min-h-screen bg-[color:var(--cream-50)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[color:var(--leaf-900)] mb-4">Article Not Found</h1>
          <Link href="/learn" className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)]">
            ← Back to Learn Hub
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[color:var(--cream-50)]">
      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-[color:var(--leaf-900)] to-[color:var(--leaf-600)] text-[color:var(--cream-50)]">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/learn" 
              className="inline-flex items-center gap-2 text-[color:var(--cream-50)]/80 hover:text-[color:var(--cream-50)] transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Learn Hub
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[color:var(--sun-400)] text-[color:var(--bark-900)] text-sm font-medium px-3 py-1 rounded-full">
                {content.type}
              </span>
              <span className="bg-[color:var(--cream-50)]/20 text-[color:var(--cream-50)] text-sm px-3 py-1 rounded-full">
                {content.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              {content.title}
            </h1>
            
            <p className="text-lg text-[color:var(--cream-50)]/80 mb-8 leading-relaxed">
              {content.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-[color:var(--cream-50)]/70">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{content.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{content.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>{content.publishDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-3">
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-[color:var(--bark-900)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: content.content }}
                  />
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8">
                  {/* Tags */}
                  <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6 mb-6">
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {content.tags.map((tag) => (
                        <span key={tag} className="bg-[color:var(--mist-100)] text-[color:var(--leaf-900)] text-sm px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Share */}
                  <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Share</h3>
                    <button className="flex items-center gap-2 text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share this article</span>
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[color:var(--mist-100)]/30">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-[color:var(--leaf-900)] mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* This would be populated with related content from CMS */}
              <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                <h3 className="font-semibold text-[color:var(--leaf-900)] mb-2">More Cooking Tips</h3>
                <p className="text-[color:var(--bark-900)]/70 text-sm mb-4">Discover more techniques for perfect cooking with palm oil.</p>
                <Link href="/learn" className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] text-sm font-medium">
                  Explore more →
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                <h3 className="font-semibold text-[color:var(--leaf-900)] mb-2">Sustainability Guide</h3>
                <p className="text-[color:var(--bark-900)]/70 text-sm mb-4">Learn about our commitment to sustainable palm oil production.</p>
                <Link href="/sustainability" className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



