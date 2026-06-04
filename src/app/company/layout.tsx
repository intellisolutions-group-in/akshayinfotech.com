import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise IT Development Company & Team | Akshay Infotech",
  description: "Akshay Infotech is a software engineering and IT consulting firm constructing high-speed web apps, custom software, and cloud systems.",
  alternates: {
    canonical: "https://akshayinfotech.com/company",
  },
  openGraph: {
    title: "Enterprise IT Development Company & Team | Akshay Infotech",
    description: "Akshay Infotech is a software engineering and IT consulting firm constructing high-speed web apps, custom software, and cloud systems.",
    url: "https://akshayinfotech.com/company",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise IT Development Company & Team | Akshay Infotech",
    description: "Akshay Infotech is a software engineering and IT consulting firm constructing high-speed web apps, custom software, and cloud systems.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
