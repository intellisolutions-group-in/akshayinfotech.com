import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sectors We Serve | Custom Software & Cloud Architectures",
  description: "Secure, compliant web development and database engineering for Healthcare, SaaS, FinTech, Education, and Headless Commerce markets.",
  alternates: {
    canonical: "https://akshayinfotech.com/company/industries",
  },
  openGraph: {
    title: "Sectors We Serve | Custom Software & Cloud Architectures",
    description: "Secure, compliant web development and database engineering for Healthcare, SaaS, FinTech, Education, and Headless Commerce markets.",
    url: "https://akshayinfotech.com/company/industries",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sectors We Serve | Custom Software & Cloud Architectures",
    description: "Secure, compliant web development and database engineering for Healthcare, SaaS, FinTech, Education, and Headless Commerce markets.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
