export function ImpactStats() {
  const stats = [
    { label: "Waste repurposed", value: "98", suffix: "%" },
    { label: "Community partners", value: "42", suffix: "+" },
    { label: "Emissions reduced", value: "36", suffix: "%" },
  ];
  return (
    <section className="py-14 bg-[#EEF2ED]/60 border-y border-[#D5D1C6]/60">
      <div className="mx-auto container-fluid px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label} className="p-6">
            <div className="text-4xl text-[#0B3D2E]">{s.value}<span className="text-[#2E7D32]">{s.suffix}</span></div>
            <div className="mt-2 text-sm text-[#1A1A1A]/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}



