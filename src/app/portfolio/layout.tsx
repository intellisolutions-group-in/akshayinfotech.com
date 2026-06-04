import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Engineering Portfolio & Case Studies | Akshay Infotech",
  description: "Explore a catalog of our custom web portals, high-security databases, SaaS dashboards, and automated CI/CD configurations.",
  alternates: {
    canonical: "https://akshayinfotech.com/portfolio",
  },
  openGraph: {
    title: "Our Engineering Portfolio & Case Studies | Akshay Infotech",
    description: "Explore a catalog of our custom web portals, high-security databases, SaaS dashboards, and automated CI/CD configurations.",
    url: "https://akshayinfotech.com/portfolio",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Engineering Portfolio & Case Studies | Akshay Infotech",
    description: "Explore a catalog of our custom web portals, high-security databases, SaaS dashboards, and automated CI/CD configurations.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
