import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import ScrollAnimationProvider from "@/components/ui/ScrollAnimationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nexora Technologies | Engineering Digital Excellence",
    template: "%s | Nexora Technologies",
  },
  description: "Nexora Technologies is a premium IT consulting and software engineering firm specializing in enterprise web development, mobile apps, cloud migrations, and AI automation.",
  keywords: [
    "IT Company",
    "Software Development",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Architecture",
    "DevOps",
    "AI Automation",
    "SEO Optimization",
    "E-commerce Solutions",
    "Nexora Technologies",
  ],
  authors: [{ name: "Nexora Technologies Team" }],
  creator: "Nexora Technologies",
  publisher: "Nexora Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nexoratech.com"),
  openGraph: {
    title: "Nexora Technologies | Engineering Digital Excellence",
    description: "Enterprise-ready software engineering, cloud computing, AI automation, and custom digital transformation.",
    url: "https://nexoratech.com",
    siteName: "Nexora Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexora Technologies - Engineering Digital Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Technologies | Engineering Digital Excellence",
    description: "Enterprise-ready software engineering, cloud computing, AI automation, and custom digital transformation.",
    images: ["/og-image.jpg"],
    creator: "@NexoraTechnologies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white`}
      >
        <Preloader />
        <ScrollAnimationProvider />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
