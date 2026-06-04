import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Akshay Infotech | Custom Software Engineering Company",
  description: "Meet the engineers, designers, and systems architects building performant, secure, and compliant cloud systems and modern web interfaces.",
  alternates: {
    canonical: "https://akshayinfotech.com/company/about-us",
  },
  openGraph: {
    title: "About Akshay Infotech | Custom Software Engineering Company",
    description: "Meet the engineers, designers, and systems architects building performant, secure, and compliant cloud systems and modern web interfaces.",
    url: "https://akshayinfotech.com/company/about-us",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Akshay Infotech | Custom Software Engineering Company",
    description: "Meet the engineers, designers, and systems architects building performant, secure, and compliant cloud systems and modern web interfaces.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
