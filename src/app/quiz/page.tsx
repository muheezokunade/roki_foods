import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Quiz",
  description: "Find your perfect palm oil match with our personalized quiz",
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-[color:var(--cream-50)]">
      <div className="mx-auto container-fluid px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">🔍</div>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-[color:var(--leaf-900)] mb-4">
              Product Quiz
            </h1>
            <p className="text-[color:var(--bark-900)]/70 text-lg">
              Coming soon! Take our personalized quiz to discover which Roki products best match your cooking style and sustainability values.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[color:var(--clay-300)]/60 p-8 mb-8">
            <h2 className="text-xl font-medium text-[color:var(--leaf-900)] mb-4">
              What to expect:
            </h2>
            <ul className="text-left space-y-3 text-[color:var(--bark-900)]/70">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[color:var(--leaf-600)] mt-2 flex-shrink-0"></div>
                <span>Quick questions about your cooking preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[color:var(--leaf-600)] mt-2 flex-shrink-0"></div>
                <span>Understanding your sustainability priorities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[color:var(--leaf-600)] mt-2 flex-shrink-0"></div>
                <span>Personalized product recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[color:var(--leaf-600)] mt-2 flex-shrink-0"></div>
                <span>Custom recipe suggestions</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/learn"
              className="inline-flex items-center justify-center px-6 py-3 bg-[color:var(--leaf-900)] text-[color:var(--cream-50)] rounded-full font-medium hover:bg-[color:var(--leaf-600)] transition-colors"
            >
              Learn More
            </a>
            <a 
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-[color:var(--clay-300)] text-[color:var(--leaf-900)] rounded-full font-medium hover:bg-[color:var(--mist-100)] transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}



