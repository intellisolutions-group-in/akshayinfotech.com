import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Cyber Security Audits & Threat Mitigation | Akshay Infotech",
  description: "Implement secure end-to-end encrypted databases, zero-trust token systems, data security guidelines, and active network penetration testing.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/cyber-security",
  },
  openGraph: {
    title: "Enterprise Cyber Security Audits & Threat Mitigation | Akshay Infotech",
    description: "Implement secure end-to-end encrypted databases, zero-trust token systems, data security guidelines, and active network penetration testing.",
    url: "https://akshayinfotech.com/services/cyber-security",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Cyber Security Audits & Threat Mitigation | Akshay Infotech",
    description: "Implement secure end-to-end encrypted databases, zero-trust token systems, data security guidelines, and active network penetration testing.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
