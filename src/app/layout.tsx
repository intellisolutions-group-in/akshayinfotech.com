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
    default: "Akshay Infotech | Engineering Digital Excellence",
    template: "%s | Akshay Infotech",
  },
  description: "Akshay Infotech is a premium IT consulting and software engineering firm specializing in enterprise web development, mobile apps, cloud migrations, and AI automation.",
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
    "Akshay Infotech",
  ],
  authors: [{ name: "Akshay Infotech Team" }],
  creator: "Akshay Infotech",
  publisher: "Akshay Infotech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://akshayinfotech.com"),
  openGraph: {
    title: "Akshay Infotech | Engineering Digital Excellence",
    description: "Enterprise-ready software engineering, cloud computing, AI automation, and custom digital transformation.",
    url: "https://akshayinfotech.com",
    siteName: "Akshay Infotech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Akshay Infotech - Engineering Digital Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Infotech | Engineering Digital Excellence",
    description: "Enterprise-ready software engineering, cloud computing, AI automation, and custom digital transformation.",
    images: ["/og-image.jpg"],
    creator: "@AkshayInfotech",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://akshayinfotech.com/#organization",
        "name": "Akshay Infotech",
        "url": "https://akshayinfotech.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://akshayinfotech.com/#logo",
          "url": "https://akshayinfotech.com/logo-light.png",
          "caption": "Akshay Infotech Logo"
        },
        "sameAs": [
          "https://twitter.com/AkshayInfotech",
          "https://www.linkedin.com/company/akshayinfotech"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://akshayinfotech.com/#website",
        "url": "https://akshayinfotech.com",
        "name": "Akshay Infotech",
        "description": "Akshay Infotech is a premium IT consulting and software engineering firm specializing in enterprise web development, mobile apps, cloud migrations, and AI automation.",
        "publisher": {
          "@id": "https://akshayinfotech.com/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://akshayinfotech.com/#service",
        "name": "Akshay Infotech",
        "url": "https://akshayinfotech.com",
        "image": "https://akshayinfotech.com/logo-light.png",
        "priceRange": "$$$",
        "telephone": "+1 (617) 555-0192",
        "email": "info@akshayinfoctech.net",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "75 State Street, Suite 100",
          "addressLocality": "Boston",
          "addressRegion": "MA",
          "postalCode": "02109",
          "addressCountry": "US"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white`}>
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
