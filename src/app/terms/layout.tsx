import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Licensing Agreements | Akshay Infotech",
  description: "Review terms governing website access, service contracts, intellectual property rights, and SLA parameters.",
  alternates: {
    canonical: "https://akshayinfotech.com/terms",
  },
  openGraph: {
    title: "Terms of Service & Licensing Agreements | Akshay Infotech",
    description: "Review terms governing website access, service contracts, intellectual property rights, and SLA parameters.",
    url: "https://akshayinfotech.com/terms",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Licensing Agreements | Akshay Infotech",
    description: "Review terms governing website access, service contracts, intellectual property rights, and SLA parameters.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
