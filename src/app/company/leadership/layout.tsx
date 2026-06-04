import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Leadership Team & Systems Directors | Akshay Infotech",
  description: "Meet the executive team directing custom software design, multi-cloud operations, and compliance security audits at Akshay Infotech.",
  alternates: {
    canonical: "https://akshayinfotech.com/company/leadership",
  },
  openGraph: {
    title: "Our Leadership Team & Systems Directors | Akshay Infotech",
    description: "Meet the executive team directing custom software design, multi-cloud operations, and compliance security audits at Akshay Infotech.",
    url: "https://akshayinfotech.com/company/leadership",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Leadership Team & Systems Directors | Akshay Infotech",
    description: "Meet the executive team directing custom software design, multi-cloud operations, and compliance security audits at Akshay Infotech.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
