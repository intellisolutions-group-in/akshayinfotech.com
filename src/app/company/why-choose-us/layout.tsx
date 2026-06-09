import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Choose Akshay Infotech for Software Engineering",
  description: "Sub-second load times, 100% type safety, zero-trust data security frameworks, and comprehensive performance and telemetry tracking.",
  alternates: {
    canonical: "https://akshayinfotech.com/company/why-choose-us",
  },
  openGraph: {
    title: "Why Choose Akshay Infotech for Software Engineering",
    description: "Sub-second load times, 100% type safety, zero-trust data security frameworks, and comprehensive performance and telemetry tracking.",
    url: "https://akshayinfotech.com/company/why-choose-us",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Akshay Infotech for Software Engineering",
    description: "Sub-second load times, 100% type safety, zero-trust data security frameworks, and comprehensive performance and telemetry tracking.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
