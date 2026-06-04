import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise IT Services & Software Solutions | Akshay Infotech",
  description: "Explore enterprise software development, React/Next.js engineering, AI automation, cloud systems, cyber security, and DevOps by Akshay Infotech.",
  alternates: {
    canonical: "https://akshayinfotech.com/services",
  },
  openGraph: {
    title: "Enterprise IT Services & Software Solutions | Akshay Infotech",
    description: "Explore enterprise software development, React/Next.js engineering, AI automation, cloud systems, cyber security, and DevOps by Akshay Infotech.",
    url: "https://akshayinfotech.com/services",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise IT Services & Software Solutions | Akshay Infotech",
    description: "Explore enterprise software development, React/Next.js engineering, AI automation, cloud systems, cyber security, and DevOps by Akshay Infotech.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
