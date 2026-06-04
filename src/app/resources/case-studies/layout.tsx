import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS, Cloud & Web Engineering Case Studies | Akshay Infotech",
  description: "Explore real outcomes: sub-second checkouts, zero-trust telemedicine portals, and multi-region database syncing results.",
  alternates: {
    canonical: "https://akshayinfotech.com/resources/case-studies",
  },
  openGraph: {
    title: "SaaS, Cloud & Web Engineering Case Studies | Akshay Infotech",
    description: "Explore real outcomes: sub-second checkouts, zero-trust telemedicine portals, and multi-region database syncing results.",
    url: "https://akshayinfotech.com/resources/case-studies",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS, Cloud & Web Engineering Case Studies | Akshay Infotech",
    description: "Explore real outcomes: sub-second checkouts, zero-trust telemedicine portals, and multi-region database syncing results.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
