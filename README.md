Roki Foods — Marketing & Ecommerce (Gaia-inspired)

Tech
- Next.js App Router (TypeScript), Tailwind CSS, shadcn/ui
- Framer Motion, React Hook Form + Zod, Zustand
- Sanity CMS (Studio at /studio)
- next-seo, ESLint + Prettier

Develop
```bash
npm run dev # http://localhost:3001
```

Sanity Studio
```bash
# set env vars in .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production

npm run dev # then open http://localhost:3001/studio
```

Payments (Paystack/Flutterwave)
- Integration seam in cart checkout button (`MiniCartDrawer`). Enable when provider SDK is configured.
- Replace disabled button with provider redirect/init and success/cancel handlers.

Images
- Replace placeholder images in `components/Hero` and product data with real assets. Use next/image with AVIF/WebP and blurDataURL.

Deploy
- Recommended: Vercel. Set SANITY envs and build.
