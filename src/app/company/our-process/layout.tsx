import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software Workflow & Agile Process | Akshay Infotech",
  description: "Discover our agile process: Discovery, Atomic Layout system creation, Type-safe API integrations, and Edge telemetry optimization.",
  alternates: {
    canonical: "https://akshayinfotech.com/company/our-process",
  },
  openGraph: {
    title: "Enterprise Software Workflow & Agile Process | Akshay Infotech",
    description: "Discover our agile process: Discovery, Atomic Layout system creation, Type-safe API integrations, and Edge telemetry optimization.",
    url: "https://akshayinfotech.com/company/our-process",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Software Workflow & Agile Process | Akshay Infotech",
    description: "Discover our agile process: Discovery, Atomic Layout system creation, Type-safe API integrations, and Edge telemetry optimization.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
