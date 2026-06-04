import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policies & Zero-Trust Infrastructure | Akshay Infotech",
  description: "Review our security protocols, including KMS encryption, token validation, secure TURN server policies, and WORM log storage.",
  alternates: {
    canonical: "https://akshayinfotech.com/security",
  },
  openGraph: {
    title: "Security Policies & Zero-Trust Infrastructure | Akshay Infotech",
    description: "Review our security protocols, including KMS encryption, token validation, secure TURN server policies, and WORM log storage.",
    url: "https://akshayinfotech.com/security",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Policies & Zero-Trust Infrastructure | Akshay Infotech",
    description: "Review our security protocols, including KMS encryption, token validation, secure TURN server policies, and WORM log storage.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
