import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: "%s | Roki Foods",
  defaultTitle: "Roki Foods — Pure palm oil, responsibly crafted",
  description:
    "Sustainable palm oil with zero-waste circular model. Seasonal harvests, community empowerment, and calm, natural design.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Roki Foods",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};

export default config;



