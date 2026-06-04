import { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Integration Plans & Billing Structures | Akshay Infotech",
  description: "Simple, per-node billing plans for cloud orchestration, SaaS platform setups, and dedicated enterprise support packages.",
  alternates: {
    canonical: "https://akshayinfotech.com/pricing",
  },
  openGraph: {
    title: "System Integration Plans & Billing Structures | Akshay Infotech",
    description: "Simple, per-node billing plans for cloud orchestration, SaaS platform setups, and dedicated enterprise support packages.",
    url: "https://akshayinfotech.com/pricing",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "System Integration Plans & Billing Structures | Akshay Infotech",
    description: "Simple, per-node billing plans for cloud orchestration, SaaS platform setups, and dedicated enterprise support packages.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
