import { Metadata } from "next";
import { ArrowLeft, Play, Image as ImageIcon, Share2, Download, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

// Mock data - in real app this would come from Sanity CMS
const mediaData = {
  1: {
    id: 1,
    type: "image",
    category: "Farm",
    title: "Sustainable Palm Grove",
    description: "Our regenerative farming practices protect biodiversity while producing premium palm oil. This image shows the lush canopy of our palm trees, which provide habitat for local wildlife and help maintain soil health.",
    fullImage: "/vercel.svg",
    thumbnail: "/vercel.svg",
    tags: ["Agriculture", "Sustainability", "Nature"],
    date: "December 15, 2024",
    location: "West Africa",
    photographer: "Maria Santos",
    alt: "Sustainable palm grove with lush green canopy"
  },
  2: {
    id: 2,
    type: "video",
    category: "Process",
    title: "Cold Pressing Process",
    description: "Watch how we gently extract oil to preserve nutrients and flavor. Our cold pressing method ensures that the natural properties of the palm fruit are maintained throughout the extraction process.",
    videoUrl: "/vercel.svg",
    thumbnail: "/vercel.svg",
    tags: ["Production", "Quality", "Traditional"],
    date: "December 10, 2024",
    location: "Processing Facility",
    videographer: "David Chen",
    duration: "2:30"
  }
};

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const media = mediaData[params.id as keyof typeof mediaData];
  
  if (!media) {
    return {
      title: "Media Not Found",
    };
  }

  return {
    title: media.title,
    description: media.description,
  };
}

export default function MediaDetailPage({ params }: PageProps) {
  const media = mediaData[params.id as keyof typeof mediaData];

  if (!media) {
    return (
      <main className="min-h-screen bg-[color:var(--cream-50)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[color:var(--leaf-900)] mb-4">Media Not Found</h1>
          <Link href="/gallery" className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)]">
            ← Back to Gallery
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[color:var(--cream-50)]">
      {/* Media Header */}
      <section className="py-16 bg-gradient-to-br from-[color:var(--leaf-900)] to-[color:var(--leaf-600)] text-[color:var(--cream-50)]">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 text-[color:var(--cream-50)]/80 hover:text-[color:var(--cream-50)] transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Link>
            
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[color:var(--sun-400)] text-[color:var(--bark-900)] text-sm font-medium px-3 py-1 rounded-full">
                {media.category}
              </span>
              <span className="bg-[color:var(--cream-50)]/20 text-[color:var(--cream-50)] text-sm px-3 py-1 rounded-full">
                {media.type}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              {media.title}
            </h1>
            
            <p className="text-lg text-[color:var(--cream-50)]/80 mb-8 leading-relaxed">
              {media.description}
            </p>

            <div className="flex items-center gap-6 text-sm text-[color:var(--cream-50)]/70">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{media.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{media.location}</span>
              </div>
              {media.type === "video" && media.duration && (
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  <span>{media.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Media Content */}
      <section className="py-16">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Media */}
              <div className="lg:col-span-3">
                <div className="relative rounded-2xl overflow-hidden border border-[color:var(--clay-300)]/60 bg-white shadow-lg">
                  {media.type === "video" ? (
                    <div className="relative aspect-video bg-gradient-to-br from-[color:var(--leaf-600)]/20 to-[color:var(--leaf-900)]/30">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-[color:var(--cream-50)]">
                          <Play className="h-16 w-16 mx-auto mb-4" />
                          <div className="text-lg font-medium">Video Player</div>
                          <div className="text-sm opacity-80">Video content coming soon</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-gradient-to-br from-[color:var(--leaf-600)]/20 to-[color:var(--leaf-900)]/30">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-[color:var(--cream-50)]">
                          <ImageIcon className="h-16 w-16 mx-auto mb-4" />
                          <div className="text-lg font-medium">High-Resolution Image</div>
                          <div className="text-sm opacity-80">Image content coming soon</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Tags */}
                  <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {media.tags.map((tag) => (
                        <span key={tag} className="bg-[color:var(--mist-100)] text-[color:var(--leaf-900)] text-sm px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Actions</h3>
                    <div className="space-y-3">
                      <button className="flex items-center gap-3 w-full text-left text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                      <button className="flex items-center gap-3 w-full text-left text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] transition-colors">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>

                  {/* Credits */}
                  <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                    <h3 className="font-semibold text-[color:var(--leaf-900)] mb-4">Credits</h3>
                    <div className="space-y-2 text-sm text-[color:var(--bark-900)]/70">
                      <div>
                        <span className="font-medium">Photographer:</span> {media.photographer || media.videographer}
                      </div>
                      <div>
                        <span className="font-medium">Date:</span> {media.date}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {media.location}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Media */}
      <section className="py-16 bg-[color:var(--mist-100)]/30">
        <div className="mx-auto container-fluid px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-display font-semibold text-[color:var(--leaf-900)] mb-8">
              Related Media
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* This would be populated with related media from CMS */}
              <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                <div className="aspect-video bg-gradient-to-br from-[color:var(--leaf-600)]/20 to-[color:var(--leaf-900)]/30 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center text-[color:var(--cream-50)]">
                    <ImageIcon className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-xs opacity-80">Related image</div>
                  </div>
                </div>
                <h3 className="font-semibold text-[color:var(--leaf-900)] mb-2">More Farm Photos</h3>
                <p className="text-[color:var(--bark-900)]/70 text-sm mb-4">Explore more images from our sustainable farm.</p>
                <Link href="/gallery" className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] text-sm font-medium">
                  View more →
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                <div className="aspect-video bg-gradient-to-br from-[color:var(--leaf-600)]/20 to-[color:var(--leaf-900)]/30 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center text-[color:var(--cream-50)]">
                    <Play className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-xs opacity-80">Related video</div>
                  </div>
                </div>
                <h3 className="font-semibold text-[color:var(--leaf-900)] mb-2">Process Videos</h3>
                <p className="text-[color:var(--bark-900)]/70 text-sm mb-4">Watch more videos about our production process.</p>
                <Link href="/gallery" className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] text-sm font-medium">
                  View more →
                </Link>
              </div>
              <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-6">
                <div className="aspect-video bg-gradient-to-br from-[color:var(--leaf-600)]/20 to-[color:var(--leaf-900)]/30 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center text-[color:var(--cream-50)]">
                    <ImageIcon className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-xs opacity-80">Related image</div>
                  </div>
                </div>
                <h3 className="font-semibold text-[color:var(--leaf-900)] mb-2">Community Stories</h3>
                <p className="text-[color:var(--bark-900)]/70 text-sm mb-4">Meet the people behind our sustainable practices.</p>
                <Link href="/about" className="text-[color:var(--leaf-600)] hover:text-[color:var(--leaf-900)] text-sm font-medium">
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



