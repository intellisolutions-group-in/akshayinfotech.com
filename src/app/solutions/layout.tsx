import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Technology Solutions & Cloud Migrations | Akshay Infotech",
  description: "Accelerate growth. Discover custom solutions for digital transformation, cloud migration, SaaS portals, and enterprise security.",
  alternates: {
    canonical: "https://akshayinfotech.com/solutions",
  },
  openGraph: {
    title: "Enterprise Technology Solutions & Cloud Migrations | Akshay Infotech",
    description: "Accelerate growth. Discover custom solutions for digital transformation, cloud migration, SaaS portals, and enterprise security.",
    url: "https://akshayinfotech.com/solutions",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Technology Solutions & Cloud Migrations | Akshay Infotech",
    description: "Accelerate growth. Discover custom solutions for digital transformation, cloud migration, SaaS portals, and enterprise security.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
