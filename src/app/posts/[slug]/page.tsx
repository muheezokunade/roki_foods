import { Metadata } from "next";
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PortableTextRenderer } from "@/components/PortableTextRenderer";
import { urlFor } from "@/lib/sanity";
import { getPost, getPosts } from "@/lib/sanity";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [urlFor(post.image).width(1200).height(630).url()] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[color:var(--cream-50)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[color:var(--leaf-900)] mb-4">Post Not Found</h1>
          <Link href="/learn" className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)]">
            ← Back to Learn Hub
          </Link>
        </div>
      </main>
    );
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className="min-h-screen bg-[color:var(--cream-50)]">
      {/* Post Header */}
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
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              {post.title}
            </h1>
            
            <p className="text-lg text-[color:var(--cream-50)]/80 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[color:var(--cream-50)]/70">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Article</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-16">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-3">
                {/* Post Image */}
                {post.image && (
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-[color:var(--clay-300)]/60 mb-8">
                    <Image
                      src={urlFor(post.image).width(800).height(450).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
                    />
                  </div>
                )}

                {/* Post Body */}
                {post.body && (
                  <PortableTextRenderer content={post.body} />
                )}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                      <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                          <span key={tag} className="bg-[color:var(--mist-100)] text-[color:var(--leaf-900)] text-sm px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Share */}
                  <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Share</h3>
                    <button className="flex items-center gap-3 w-full text-left text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share this article</span>
                    </button>
                  </div>

                  {/* Author */}
                  <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Author</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[color:var(--leaf-600)] flex items-center justify-center">
                        <User className="h-5 w-5 text-[color:var(--cream-50)]" />
                      </div>
                      <div>
                        <div className="font-medium text-[color:var(--leaf-900)]">{post.author}</div>
                        <div className="text-sm text-[color:var(--bark-900)]/60">Content Writer</div>
                      </div>
                    </div>
                  </div>

                  {/* Table of Contents */}
                  <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Table of Contents</h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#introduction" className="block text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors">
                        Introduction
                      </a>
                      <a href="#main-content" className="block text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors">
                        Main Content
                      </a>
                      <a href="#conclusion" className="block text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors">
                        Conclusion
                      </a>
                    </nav>
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-[color:var(--leaf-900)] mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* This would be populated with related posts from CMS */}
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
              <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                <h3 className="font-semibold text-[color:var(--leaf-900)] mb-2">Health & Wellness</h3>
                <p className="text-[color:var(--bark-900)]/70 text-sm mb-4">Discover the health benefits of sustainable palm oil.</p>
                <Link href="/learn" className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] text-sm font-medium">
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



