import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic IT Consulting & Systems Architecture | Akshay Infotech",
  description: "Architect highly available, secure software setups. Align technology systems with business constraints, security laws, and budgets.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/it-consulting",
  },
  openGraph: {
    title: "Strategic IT Consulting & Systems Architecture | Akshay Infotech",
    description: "Architect highly available, secure software setups. Align technology systems with business constraints, security laws, and budgets.",
    url: "https://akshayinfotech.com/services/it-consulting",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic IT Consulting & Systems Architecture | Akshay Infotech",
    description: "Architect highly available, secure software setups. Align technology systems with business constraints, security laws, and budgets.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
