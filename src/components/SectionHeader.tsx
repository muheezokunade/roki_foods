export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-[72ch] mx-auto">
      <div className="text-[color:var(--leaf-600)] uppercase tracking-wide text-xs mb-2">{eyebrow}</div>
      <h2 className="text-3xl md:text-4xl font-[var(--font-display)] text-[color:var(--leaf-900)]">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-[color:var(--bark-900)]/80 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}



