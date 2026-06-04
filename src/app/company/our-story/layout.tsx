import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story & Engineering Milestones | Akshay Infotech",
  description: "Tracing our journey from a small web development group to an enterprise software engineering company serving global scale clients.",
  alternates: {
    canonical: "https://akshayinfotech.com/company/our-story",
  },
  openGraph: {
    title: "Our Story & Engineering Milestones | Akshay Infotech",
    description: "Tracing our journey from a small web development group to an enterprise software engineering company serving global scale clients.",
    url: "https://akshayinfotech.com/company/our-story",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story & Engineering Milestones | Akshay Infotech",
    description: "Tracing our journey from a small web development group to an enterprise software engineering company serving global scale clients.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
