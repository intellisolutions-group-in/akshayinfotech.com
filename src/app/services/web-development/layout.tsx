import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Web Development & Next.js React Engineering | Akshay Infotech",
  description: "Build responsive, high-performance web applications using React Server Components, TypeScript, and clean modular designs.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/web-development",
  },
  openGraph: {
    title: "Bespoke Web Development & Next.js React Engineering | Akshay Infotech",
    description: "Build responsive, high-performance web applications using React Server Components, TypeScript, and clean modular designs.",
    url: "https://akshayinfotech.com/services/web-development",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Web Development & Next.js React Engineering | Akshay Infotech",
    description: "Build responsive, high-performance web applications using React Server Components, TypeScript, and clean modular designs.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
