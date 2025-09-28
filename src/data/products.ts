export type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  size: string;
  badges: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "palm-500",
    slug: "roki-palm-oil-500ml",
    title: "Roki Palm Oil — 500ml",
    price: 7.5,
    image: "/vercel.svg",
    size: "500ml",
    badges: ["Sustainable", "Zero Waste"],
    description: "Cold-pressed, sustainably harvested palm oil for everyday cooking.",
  },
  {
    id: "palm-1l",
    slug: "roki-palm-oil-1l",
    title: "Roki Palm Oil — 1L",
    price: 12,
    image: "/vercel.svg",
    size: "1L",
    badges: ["Sustainable"],
    description: "Balanced flavor and high heat stability for your kitchen.",
  },
  {
    id: "palm-2l",
    slug: "roki-palm-oil-2l",
    title: "Roki Palm Oil — 2L",
    price: 22,
    image: "/vercel.svg",
    size: "2L",
    badges: ["Family Size", "Circular"],
    description: "Value size for families and batch cooking.",
  },
];

export function findBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}



