import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Cloud Architecture & Managed Hosting | Akshay Infotech",
  description: "Deploy secure, autoscaling multi-region AWS and Google Cloud environments with CDN caching and edge server latency optimization.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/cloud-solutions",
  },
  openGraph: {
    title: "Enterprise Cloud Architecture & Managed Hosting | Akshay Infotech",
    description: "Deploy secure, autoscaling multi-region AWS and Google Cloud environments with CDN caching and edge server latency optimization.",
    url: "https://akshayinfotech.com/services/cloud-solutions",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Cloud Architecture & Managed Hosting | Akshay Infotech",
    description: "Deploy secure, autoscaling multi-region AWS and Google Cloud environments with CDN caching and edge server latency optimization.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
