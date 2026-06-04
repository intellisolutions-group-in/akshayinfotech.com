import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Case Studies & Technical Insights | Akshay Infotech",
  description: "Read deep-dives on Next.js speed configurations, Kubernetes migrations, secure telehealth portals, and headless retail setups.",
  alternates: {
    canonical: "https://akshayinfotech.com/resources",
  },
  openGraph: {
    title: "Client Case Studies & Technical Insights | Akshay Infotech",
    description: "Read deep-dives on Next.js speed configurations, Kubernetes migrations, secure telehealth portals, and headless retail setups.",
    url: "https://akshayinfotech.com/resources",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Technical Insights | Akshay Infotech",
    description: "Read deep-dives on Next.js speed configurations, Kubernetes migrations, secure telehealth portals, and headless retail setups.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
