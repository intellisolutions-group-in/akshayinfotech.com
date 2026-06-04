import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Enterprise Software & ERP Systems | Akshay Infotech",
  description: "Develop secure custom dashboard systems, user access controls, real-time inventory systems, and automated ERP links for scale.",
  alternates: {
    canonical: "https://akshayinfotech.com/solutions/enterprise-solutions",
  },
  openGraph: {
    title: "Custom Enterprise Software & ERP Systems | Akshay Infotech",
    description: "Develop secure custom dashboard systems, user access controls, real-time inventory systems, and automated ERP links for scale.",
    url: "https://akshayinfotech.com/solutions/enterprise-solutions",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Enterprise Software & ERP Systems | Akshay Infotech",
    description: "Develop secure custom dashboard systems, user access controls, real-time inventory systems, and automated ERP links for scale.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
