import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Open Positions in Software Engineering | Akshay Infotech",
  description: "Join our team of React developers, systems architects, and DevOps engineers. Enjoy remote-first flexibility and learning stipends.",
  alternates: {
    canonical: "https://akshayinfotech.com/careers",
  },
  openGraph: {
    title: "Careers & Open Positions in Software Engineering | Akshay Infotech",
    description: "Join our team of React developers, systems architects, and DevOps engineers. Enjoy remote-first flexibility and learning stipends.",
    url: "https://akshayinfotech.com/careers",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Open Positions in Software Engineering | Akshay Infotech",
    description: "Join our team of React developers, systems architects, and DevOps engineers. Enjoy remote-first flexibility and learning stipends.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
