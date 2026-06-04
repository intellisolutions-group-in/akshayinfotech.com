import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Systems Architects & Consultation | Akshay Infotech",
  description: "Consult with our director of engineering. Schedule discovery calls to audit your database latency and API structures.",
  alternates: {
    canonical: "https://akshayinfotech.com/contact",
  },
  openGraph: {
    title: "Contact Systems Architects & Consultation | Akshay Infotech",
    description: "Consult with our director of engineering. Schedule discovery calls to audit your database latency and API structures.",
    url: "https://akshayinfotech.com/contact",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Systems Architects & Consultation | Akshay Infotech",
    description: "Consult with our director of engineering. Schedule discovery calls to audit your database latency and API structures.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
