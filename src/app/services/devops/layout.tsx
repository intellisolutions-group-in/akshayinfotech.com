import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure CI/CD Pipelines & DevOps Consulting Services | Akshay Infotech",
  description: "Automate code deployments with Docker, Kubernetes clusters, and Terraform scripts to resolve configuration drift and scaling delays.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/devops",
  },
  openGraph: {
    title: "Secure CI/CD Pipelines & DevOps Consulting Services | Akshay Infotech",
    description: "Automate code deployments with Docker, Kubernetes clusters, and Terraform scripts to resolve configuration drift and scaling delays.",
    url: "https://akshayinfotech.com/services/devops",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure CI/CD Pipelines & DevOps Consulting Services | Akshay Infotech",
    description: "Automate code deployments with Docker, Kubernetes clusters, and Terraform scripts to resolve configuration drift and scaling delays.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
