import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Engine Optimization & Core Web Vitals Audit | Akshay Infotech",
  description: "Enhance organic rank with semantic HTML structures, page loading speed boosts, structured JSON-LD schemas, and Google Search index mapping.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/seo-optimization",
  },
  openGraph: {
    title: "Search Engine Optimization & Core Web Vitals Audit | Akshay Infotech",
    description: "Enhance organic rank with semantic HTML structures, page loading speed boosts, structured JSON-LD schemas, and Google Search index mapping.",
    url: "https://akshayinfotech.com/services/seo-optimization",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Optimization & Core Web Vitals Audit | Akshay Infotech",
    description: "Enhance organic rank with semantic HTML structures, page loading speed boosts, structured JSON-LD schemas, and Google Search index mapping.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
