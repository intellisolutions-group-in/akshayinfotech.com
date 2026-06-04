import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Insights, News & Tech Trends | Akshay Infotech",
  description: "Read our technical team's reviews of web security practices, AWS KMS token pipelines, and headless GraphQL commerce optimizations.",
  alternates: {
    canonical: "https://akshayinfotech.com/resources/insights",
  },
  openGraph: {
    title: "Engineering Insights, News & Tech Trends | Akshay Infotech",
    description: "Read our technical team's reviews of web security practices, AWS KMS token pipelines, and headless GraphQL commerce optimizations.",
    url: "https://akshayinfotech.com/resources/insights",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Insights, News & Tech Trends | Akshay Infotech",
    description: "Read our technical team's reviews of web security practices, AWS KMS token pipelines, and headless GraphQL commerce optimizations.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
