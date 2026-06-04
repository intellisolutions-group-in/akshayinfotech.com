import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Digital Transformation Consulting | Akshay Infotech",
  description: "Re-engineer obsolete business workflows and paper logs into secure, high-efficiency cloud platforms, APIs, and dashboard systems.",
  alternates: {
    canonical: "https://akshayinfotech.com/solutions/digital-transformation",
  },
  openGraph: {
    title: "Enterprise Digital Transformation Consulting | Akshay Infotech",
    description: "Re-engineer obsolete business workflows and paper logs into secure, high-efficiency cloud platforms, APIs, and dashboard systems.",
    url: "https://akshayinfotech.com/solutions/digital-transformation",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Digital Transformation Consulting | Akshay Infotech",
    description: "Re-engineer obsolete business workflows and paper logs into secure, high-efficiency cloud platforms, APIs, and dashboard systems.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
