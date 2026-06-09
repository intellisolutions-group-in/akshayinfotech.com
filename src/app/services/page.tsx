"use client";

import React from "react";
import Link from "next/link";
import { 
  Code, Smartphone, Palette, Cpu, Cloud, Terminal, TrendingUp, ShoppingCart, 
  CheckCircle, ArrowRight, Layers, Shield, Settings, Server 
} from "lucide-react";
import { motion } from "framer-motion";
import AnalyticalCard from "../../components/shared/AnalyticalCard";
import ScrollReveal, { StaggerContainer, StaggerItem, ImageReveal } from "../../components/ui/ScrollReveal";


const detailedServices = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Code,
    summary: "High-performance, secure, and modern websites crafted using React, Next.js, and clean software architecture.",
    desc: "We engineer production-ready web platforms designed for speed and accessibility. From complex SaaS products to high-performance corporate websites, our codebases are built using modern rendering patterns, server component optimization, and clean architectural splits.",
    features: ["Server-Side Rendering (SSR) & Static Site Generation (SSG)", "Strict TypeScript configurations", "Next.js App Router expertise", "State management & secure cookie sessions"],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS"],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    icon: Smartphone,
    summary: "Native and cross-platform iOS and Android apps engineered with React Native, Swift, and Kotlin for optimal performance.",
    desc: "We build native-feeling mobile applications with seamless offline syncs, fluid animations, and robust device integrations. Our applications pass strict App Store and Play Store audit protocols and maintain high performance metrics under low network bandwidths.",
    features: ["Cross-platform React Native codebases", "Native Swift & Kotlin bridge integrations", "Secure local database storage (MMKV/WatermelonDB)", "Real-time push notifications & background syncs"],
    tech: ["React Native", "TypeScript", "Swift", "Kotlin", "Expo", "Firebase"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    summary: "Beautiful, user-centric, and accessible interfaces designed via wireframing, prototyping, and user testing.",
    desc: "Our design system integrates psychology and user feedback into aesthetic wireframes and high-fidelity mockups. We construct component systems in Figma that ensure frictionless user journeys.",
    features: ["Interactive Figma wireframing & prototyping", "Atomic design system creation", "Comprehensive user persona research & heatmaps"],
    tech: ["Figma", "Adobe CC", "Principle", "Tailwind CSS", "Storybook"],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    icon: Cpu,
    summary: "Intelligent AI workflows, LLM integrations, custom chatbots, and neural processing to scale your productivity.",
    desc: "We integrate state-of-the-art Large Language Models and custom cognitive agents into your business operations. Automate tedious email loops, document parsing, and database entry with neural integrations that operate with 99% accuracy.",
    features: ["Custom OpenAI GPT & Anthropic Claude integrations", "Retrieval-Augmented Generation (RAG) vector pipelines", "Automated customer support chat agents", "LangChain & LlamaIndex workflow pipelines"],
    tech: ["Python", "OpenAI API", "LangChain", "Pinecone", "Hugging Face", "FastAPI"],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    icon: Cloud,
    summary: "Secure and elastic cloud hosting, containerized servers, API gateways, and serverless compute configurations.",
    desc: "Deploy your systems on world-class server architectures. We design highly available, multi-region cloud setups that autoscale in response to peak demands, ensuring your business stays online 24/7 without exceeding your operational budgets.",
    features: ["Multi-region AWS & Google Cloud architectures", "Serverless compute setups (AWS Lambda/Edge)", "Relational and non-relational database clusters", "CDN caching & Cloudflare edge security"],
    tech: ["AWS", "Google Cloud", "Cloudflare", "Kubernetes", "PostgreSQL", "Redis"],
  },
  {
    id: "devops",
    title: "DevOps Integration",
    icon: Terminal,
    summary: "Automated CI/CD pipelines, Docker, Kubernetes hosting, and secure infrastructure-as-code orchestration.",
    desc: "We bridge the gap between engineering and system stability. Our DevOps engineers automate your deployment loops with secure GitOps workflows, ensuring every code merge passes security audits, unit tests, and performance profiles before going live.",
    features: ["GitHub Actions & GitLab CI/CD automation", "Infrastructure-as-Code (Terraform/Pulumi)", "Docker container orchestration & Helm charts", "Prometheus & Grafana application performance metrics"],
    tech: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    icon: TrendingUp,
    summary: "Advanced semantic markup, page-speed acceleration, keyword optimization, and rankings strategy.",
    desc: "Rank on the first page of search results. We optimize your page loading times, semantic HTML tags, metadata bindings, and site indexability parameters. Accelerate organic traffic and conversions with clean, structured schema metadata.",
    features: ["Perfect Lighthouse & Web Vitals scoring", "JSON-LD structured data & schema markup", "Keyword auditing & competitor analysis maps", "XML sitemaps & robots.txt optimizations"],
    tech: ["Google Search Console", "Lighthouse", "Ahrefs", "Screaming Frog", "Next.js Metadata API"],
  },
  {
    id: "e-commerce",
    title: "E-Commerce",
    icon: ShoppingCart,
    summary: "Robust retail gateways, secure cart management, inventory integrations, and fast transaction processes.",
    desc: "Transform your physical storefront into a high-performance digital commerce machine. We build fast, headless retail channels with localized payment support, dynamic currency exchanges, and seamless connections to inventory warehouses.",
    features: ["Headless Shopify & custom storefront APIs", "Stripe, PayPal, and Apple Pay payment checkouts", "Real-time stock audits & supplier integrations", "Subscription management & automated invoice generation"],
    tech: ["Shopify Storefront API", "Stripe API", "Next.js Commerce", "PostgreSQL", "Strapi CMS"],
  },
];

export default function ServicesPage() {
  React.useEffect(() => {
    document.title = "Services";
  }, []);

  return (
    <div className="bg-white">
      
      {/* Page Header */}
      <section className="bg-section-bg pt-32 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-bold text-primary tracking-wider uppercase mb-3 block">
              Our Expertise
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-5">
              Services We Deliver
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              From modern web engineering to complex AI pipelines, we build enterprise-grade software to accelerate your business goals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {detailedServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center scroll-mt-24 pt-4 border-b border-slate-100/50 pb-16 last:border-0 last:pb-0`}
              >
                
                {/* Content Side */}
                <ScrollReveal 
                  direction={isEven ? "left" : "right"} 
                  delay={0.1}
                  className={`lg:col-span-7 space-y-6 ${isEven ? "" : "lg:order-2"}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-light-blue text-primary flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-sm sm:text-base text-text-body leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start space-x-2.5">
                        <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-text-body">{feat}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* Tech & Summary Side */}
                <ScrollReveal 
                  direction={isEven ? "right" : "left"} 
                  delay={0.25}
                  className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}
                >
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6.5 space-y-6 shadow-sm">
                    <div>
                      <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                        Core Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tech.map((t) => (
                          <span
                            key={t}
                            className="bg-white border border-slate-200/60 text-xs text-text-main font-semibold px-3 py-1.5 rounded-lg shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-200/50 pt-5">
                      <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
                        Service Summary
                      </h4>
                      <p className="text-xs text-text-body leading-relaxed">
                        {service.summary}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="flex items-center justify-center w-full px-5 py-3 text-xs font-semibold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors group"
                    >
                      Request Consultation
                      <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </ScrollReveal>

              </div>
            );
          })}

        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-sm font-bold text-primary tracking-wider uppercase mb-2 block">
                How We Work
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
                Our Development Methodology
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-sm text-text-body mt-2">
                We follow a strict, high-communication agile process to ensure your code goes to production reliably.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", name: "Discover & Scope", desc: "We sit down to analyze system bottlenecks, APIs, dependencies, and requirements.", icon: Layers },
              { step: "02", name: "Design System", desc: "Figma wireframes and interface design mapping to secure user flows.", icon: Palette },
              { step: "03", name: "Agile Development", desc: "Weekly code merges, automated linting, unit test validation, and constant communication.", icon: Code },
              { step: "04", name: "Launch & Support", desc: "Gradual deployments, DNS setup, SEO configuration, sitemap submission, and 24/7 logging.", icon: Server },
            ].map((m) => {
              const MIcon = m.icon;
              return (
                <StaggerItem key={m.step}>
                  <AnalyticalCard
                    initialHeight={160}
                    expandedHeight={240}
                    className="bg-white group h-full"
                  >
                    <div className="h-full flex flex-col justify-between w-full relative">
                      <div className="absolute top-4 right-6 text-3xl font-black transition-colors duration-300 font-mono select-none text-slate-100 group-hover:text-primary/10">
                        {m.step}
                      </div>

                      <div>
                        <div className="h-10 w-10 rounded-lg bg-light-blue text-primary flex items-center justify-center mb-4 border border-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                          <MIcon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-bold text-text-main transition-colors duration-300 group-hover:text-primary group-hover:font-bold">
                          {m.name}
                        </h3>
                      </div>

                      <motion.div
                        variants={{
                          initial: { opacity: 0, y: 10 },
                          hover: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                        className="flex-grow flex flex-col justify-start"
                      >
                        <p className="text-xs text-text-body leading-relaxed mt-4">
                          {m.desc}
                        </p>
                      </motion.div>
                    </div>
                  </AnalyticalCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </section>

    </div>
  );
}
