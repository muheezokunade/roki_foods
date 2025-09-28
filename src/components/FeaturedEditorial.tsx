export function FeaturedEditorial() {
  return (
    <section className="py-16">
      <div className="mx-auto container-fluid px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl aspect-[4/3] bg-[color:var(--mist-100)] border border-[color:var(--clay-300)]/60" />
        <div>
          <div className="text-[color:var(--leaf-600)] uppercase tracking-wide text-xs">From the farm</div>
          <h2 className="mt-2 text-3xl font-[var(--font-display)] text-[color:var(--leaf-900)]">Seasonal harvest, gentle craft</h2>
          <p className="mt-3 text-[color:var(--bark-900)]/85 max-w-[60ch]">We work with smallholder stewards to harvest at peak freshness. Byproducts become new goods—keeping value local and waste low.</p>
          <div className="mt-6 flex gap-3">
            <a href="/sustainability" className="rounded-full bg-[color:var(--leaf-900)] text-white px-6 py-3">Explore sustainability</a>
            <a href="/community" className="rounded-full border border-[color:var(--clay-300)]/60 px-6 py-3">Meet the community</a>
          </div>
        </div>
      </div>
    </section>
  );
}





