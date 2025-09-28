"use client";

export function TrustMarkers() {
  const items = [
    { label: "Zero Waste", desc: "Circular by design" },
    { label: "Seasonal", desc: "Harvested at peak" },
    { label: "Community", desc: "Fair pay & training" },
    { label: "Traceable", desc: "Transparent sourcing" },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.label} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{item.label}</div>
              <div className="text-xs text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}