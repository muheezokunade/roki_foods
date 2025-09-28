export function PromoBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-8 bg-[#2E7D32] text-white text-center text-xs grid place-items-center">
      Limited time: seasonal harvest — 20% off select products ·
      <a href="/learn" className="underline underline-offset-4 ml-1">Learn more</a>
    </div>
  );
}


