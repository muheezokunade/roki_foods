import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MiniCartDrawer } from "@/components/MiniCartDrawer";
import { PromoBar } from "@/components/PromoBar";
import { AccessibilityProvider } from "@/components/AccessibilityProvider";

const displaySerif = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodySans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Roki Foods — Pure palm oil, responsibly crafted",
    template: "%s | Roki Foods",
  },
  description:
    "Sustainable palm oil with zero-waste circularity. Seasonal harvesting, community empowerment, and a calm, natural kitchen staple.",
  metadataBase: new URL("https://roki-foods.example"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <body className={`${displaySerif.variable} ${bodySans.variable} antialiased`}>
        <AccessibilityProvider>
          <Providers>
            <PromoBar />
            <header role="banner">
              <Navbar />
            </header>
            <main id="main-content" role="main">
              {children}
            </main>
            <MiniCartDrawer />
            <Footer />
          </Providers>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
