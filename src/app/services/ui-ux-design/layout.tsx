import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise UI/UX Design Systems & Wireframing | Akshay Infotech",
  description: "Design accessible, user-tested, and visually stunning digital products.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/ui-ux-design",
  },
  openGraph: {
    title: "Enterprise UI/UX Design Systems & Wireframing | Akshay Infotech",
    description: "Design accessible, user-tested, and visually stunning digital products.",
    url: "https://akshayinfotech.com/services/ui-ux-design",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise UI/UX Design Systems & Wireframing | Akshay Infotech",
    description: "Design accessible, user-tested, and visually stunning digital products.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
