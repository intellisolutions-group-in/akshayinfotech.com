import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Security | Akshay Infotech",
  description: "Read our privacy guidelines detailing secure data storage, log audits, client cookie usage, and encryption parameters.",
  alternates: {
    canonical: "https://akshayinfotech.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy & Data Security | Akshay Infotech",
    description: "Read our privacy guidelines detailing secure data storage, log audits, client cookie usage, and encryption parameters.",
    url: "https://akshayinfotech.com/privacy",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Data Security | Akshay Infotech",
    description: "Read our privacy guidelines detailing secure data storage, log audits, client cookie usage, and encryption parameters.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
