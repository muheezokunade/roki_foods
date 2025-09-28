import { TreePine, Hand, Droplets, Recycle } from "lucide-react";

export function Timeline() {
  const steps = [
    { 
      icon: TreePine, 
      title: "Wild Grove Care", 
      body: "We nourish palms and protect biodiversity through regenerative farming practices.",
      step: "01"
    },
    { 
      icon: Hand, 
      title: "Seasonal Harvest", 
      body: "Fruit is hand-picked at peak ripeness by local farmers who know each tree.",
      step: "02"
    },
    { 
      icon: Droplets, 
      title: "Cold Pressing", 
      body: "Gentle extraction preserves nutrients and flavor without heat or chemicals.",
      step: "03"
    },
    { 
      icon: Recycle, 
      title: "Zero Waste", 
      body: "Every part is utilized—fibers become soap, shells become fuel and compost.",
      step: "04"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[color:var(--leaf-900)] text-[color:var(--cream-50)]">
      <div className="mx-auto container-fluid px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <div className="text-[color:var(--sun-400)] uppercase tracking-wide text-sm mb-4">Our Process</div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              From Farm to Table
            </h2>
            <p className="text-[color:var(--cream-50)]/80 text-lg mb-8 leading-relaxed">
              Every bottle of Roki palm oil begins with a commitment to the land, the community, and the future. 
              Our four-step process ensures purity, sustainability, and zero waste.
            </p>
            
            {/* Process steps */}
            <div className="space-y-6">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[color:var(--sun-400)]/20 flex items-center justify-center group-hover:bg-[color:var(--sun-400)]/30 transition-colors">
                        <IconComponent className="h-6 w-6 text-[color:var(--sun-400)]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-[color:var(--sun-400)]">{step.step}</span>
                        <h3 className="font-medium text-[color:var(--cream-50)]">{step.title}</h3>
                      </div>
                      <p className="text-[color:var(--cream-50)]/70 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[color:var(--leaf-600)]/30 to-[color:var(--leaf-900)]/50 border border-[color:var(--sun-400)]/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <div className="text-lg font-medium text-[color:var(--cream-50)]">Sustainable Process</div>
                <div className="text-sm text-[color:var(--cream-50)]/70 mt-2">Visual coming soon</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[color:var(--sun-400)]/20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-[color:var(--sun-400)]/30 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


