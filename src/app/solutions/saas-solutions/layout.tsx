import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Application Development & Scaling Retainers | Akshay Infotech",
  description: "Orchestrate multi-tenant database clusters, secure subscription pathways, and automated tenant provisioning with Akshay Infotech.",
  alternates: {
    canonical: "https://akshayinfotech.com/solutions/saas-solutions",
  },
  openGraph: {
    title: "SaaS Application Development & Scaling Retainers | Akshay Infotech",
    description: "Orchestrate multi-tenant database clusters, secure subscription pathways, and automated tenant provisioning with Akshay Infotech.",
    url: "https://akshayinfotech.com/solutions/saas-solutions",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Application Development & Scaling Retainers | Akshay Infotech",
    description: "Orchestrate multi-tenant database clusters, secure subscription pathways, and automated tenant provisioning with Akshay Infotech.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
