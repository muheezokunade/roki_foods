import { Hero } from "@/components/Hero";
import { USPSection } from "@/components/USPSection";
// import { FeaturedProducts } from "@/components/FeaturedProducts";
import { TrustMarkers } from "@/components/TrustMarkers";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ImpactStats } from "@/components/ImpactStats";
import { CertificationsRow } from "@/components/CertificationsRow";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { OurPromise } from "@/components/OurPromise";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustMarkers />
      <USPSection />
      <ProcessTimeline />
      <OurPromise />
      <TestimonialCarousel />
      <ImpactStats />
      <CertificationsRow />
    </main>
  );
}
