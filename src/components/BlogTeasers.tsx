import { SectionHeader } from "./SectionHeader";
import { ArrowRight, Clock, User } from "lucide-react";

export function BlogTeasers() {
  const posts = [
    { 
      slug: "palm-stew", 
      title: "Seasonal Palm Stew with Wild Greens", 
      excerpt: "A nourishing, one-pot meal that celebrates seasonal ingredients and zero-waste cooking techniques. Perfect for cool evenings and sustainable living.",
      category: "Recipe",
      readTime: "8 min read",
      author: "Chef Maria",
      image: "/vercel.svg",
      tags: ["Seasonal", "One-Pot", "Zero Waste"]
    },
    { 
      slug: "frying-guide", 
      title: "The Art of Frying with Palm Oil", 
      excerpt: "Master the perfect fry with our comprehensive guide to temperature control, flavor enhancement, and achieving that coveted golden crisp.",
      category: "Guide",
      readTime: "12 min read",
      author: "Chef David",
      image: "/vercel.svg",
      tags: ["Cooking Tips", "Technique", "Flavor"]
    },
    { 
      slug: "soap-craft", 
      title: "From Byproduct to Beautiful Soap", 
      excerpt: "Discover how we transform palm oil processing waste into luxurious, natural soaps through our innovative circular craft process.",
      category: "Sustainability",
      readTime: "6 min read",
      author: "Sarah Chen",
      image: "/vercel.svg",
      tags: ["Circular Economy", "Craft", "Zero Waste"]
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto container-fluid px-4">
        <SectionHeader eyebrow="Visual Stories" title="Latest gallery & stories" subtitle="Discover our sustainable farm, community stories, and behind-the-scenes content." />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <a href={`/gallery/${post.slug}`} className="block">
                <div className="relative rounded-2xl overflow-hidden border border-[color:var(--clay-300)]/60 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-[color:var(--leaf-600)]/20 to-[color:var(--leaf-900)]/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-[color:var(--cream-50)]">
                        <div className="text-4xl mb-2">📖</div>
                        <div className="text-sm opacity-80">Article image</div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[color:var(--sun-400)] text-[color:var(--bark-900)] text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-[color:var(--mist-100)] text-[color:var(--leaf-900)] text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[color:var(--leaf-900)] mb-3 group-hover:text-[color:var(--leaf-600)] transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[color:var(--bark-900)]/70 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-[color:var(--bark-900)]/60 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-[color:var(--leaf-600)] font-medium text-sm group-hover:text-[color:var(--leaf-900)] transition-colors">
                      <span>Read more</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a 
            href="/gallery" 
            className="inline-flex items-center gap-2 text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors font-medium"
          >
            View all gallery items
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}


