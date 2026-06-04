import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headless E-Commerce Development & Payment Integrations | Akshay Infotech",
  description: "Build lightning-fast headless e-commerce storefronts querying Shopify and Stripe APIs to maximize conversion rates and sub-second displays.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/ecommerce",
  },
  openGraph: {
    title: "Headless E-Commerce Development & Payment Integrations | Akshay Infotech",
    description: "Build lightning-fast headless e-commerce storefronts querying Shopify and Stripe APIs to maximize conversion rates and sub-second displays.",
    url: "https://akshayinfotech.com/services/ecommerce",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Headless E-Commerce Development & Payment Integrations | Akshay Infotech",
    description: "Build lightning-fast headless e-commerce storefronts querying Shopify and Stripe APIs to maximize conversion rates and sub-second displays.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
