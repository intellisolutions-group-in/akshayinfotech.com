import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Technology Stack & Framework Selections | Akshay Infotech",
  description: "Discover why we build using Next.js 15, React 19, TypeScript, PostgreSQL databases, Docker containers, and AWS KMS security.",
  alternates: {
    canonical: "https://akshayinfotech.com/company/technologies",
  },
  openGraph: {
    title: "Our Technology Stack & Framework Selections | Akshay Infotech",
    description: "Discover why we build using Next.js 15, React 19, TypeScript, PostgreSQL databases, Docker containers, and AWS KMS security.",
    url: "https://akshayinfotech.com/company/technologies",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Technology Stack & Framework Selections | Akshay Infotech",
    description: "Discover why we build using Next.js 15, React 19, TypeScript, PostgreSQL databases, Docker containers, and AWS KMS security.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
