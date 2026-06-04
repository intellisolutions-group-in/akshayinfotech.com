import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Native iOS & Android Mobile App Development | Akshay Infotech",
  description: "Develop React Native, Swift, and Kotlin mobile apps with offline database sync, background sync loops, and push notifications.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/mobile-development",
  },
  openGraph: {
    title: "Native iOS & Android Mobile App Development | Akshay Infotech",
    description: "Develop React Native, Swift, and Kotlin mobile apps with offline database sync, background sync loops, and push notifications.",
    url: "https://akshayinfotech.com/services/mobile-development",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Native iOS & Android Mobile App Development | Akshay Infotech",
    description: "Develop React Native, Swift, and Kotlin mobile apps with offline database sync, background sync loops, and push notifications.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
