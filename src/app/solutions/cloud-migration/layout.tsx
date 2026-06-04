import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zero-Downtime Cloud Migration & Database Re-Hosting | Akshay Infotech",
  description: "Migrate legacy databases and servers to secure, auto-scaling Kubernetes setups and serverless databases without operations disruption.",
  alternates: {
    canonical: "https://akshayinfotech.com/solutions/cloud-migration",
  },
  openGraph: {
    title: "Zero-Downtime Cloud Migration & Database Re-Hosting | Akshay Infotech",
    description: "Migrate legacy databases and servers to secure, auto-scaling Kubernetes setups and serverless databases without operations disruption.",
    url: "https://akshayinfotech.com/solutions/cloud-migration",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero-Downtime Cloud Migration & Database Re-Hosting | Akshay Infotech",
    description: "Migrate legacy databases and servers to secure, auto-scaling Kubernetes setups and serverless databases without operations disruption.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
