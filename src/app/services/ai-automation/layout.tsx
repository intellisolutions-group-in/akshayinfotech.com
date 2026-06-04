import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Automation & LLM Integration Services | Akshay Infotech",
  description: "Integrate custom cognitive agents, Large Language Models (LLM), secure RAG vector pipelines, and automated support bots built by Akshay Infotech.",
  alternates: {
    canonical: "https://akshayinfotech.com/services/ai-automation",
  },
  openGraph: {
    title: "Enterprise AI Automation & LLM Integration Services | Akshay Infotech",
    description: "Integrate custom cognitive agents, Large Language Models (LLM), secure RAG vector pipelines, and automated support bots built by Akshay Infotech.",
    url: "https://akshayinfotech.com/services/ai-automation",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Automation & LLM Integration Services | Akshay Infotech",
    description: "Integrate custom cognitive agents, Large Language Models (LLM), secure RAG vector pipelines, and automated support bots built by Akshay Infotech.",
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
