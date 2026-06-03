import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  desc: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
}

const articles: Record<string, BlogPost> = {
  "maximizing-lighthouse-scores": {
    slug: "maximizing-lighthouse-scores",
    title: "How We Achieved a Perfect 100/100 Lighthouse Performance Rating on Next.js 15",
    desc: "A detailed breakdown of server component optimization, route segment configs, code splitting triggers, and modern WebP image sizing rules.",
    category: "Engineering",
    date: "May 25, 2026",
    author: "Elena Rostova",
    readTime: "6 min read",
    content: [
      "In modern web development, achieving top-tier page loading speed is not just an vanity metric; it directly correlates with search listings organic visibility and user retention rates. During our recent infrastructure redesign sprint, we set out to target a perfect 100/100 score across all Lighthouse audits.",
      "First, we leveraged the Next.js App Router and shifted heavy components from client rendering to React Server Components (RSC). By loading modules on the server, we minimized client-side JavaScript hydration footprints from 350kB down to a mere 78kB. This directly resolved the First Input Delay (FID) metrics on slower mobile devices.",
      "Second, we configured dynamic asset prefetching and set strict rules for loading images. By leveraging Next.js Image component, images are automatically rendered as WebP variants, scaled correctly based on CSS viewport size, and loaded lazily unless declared with the high-priority attribute.",
      "Finally, we moved static content chunks onto edge delivery networks (CDNs). Using edge caching routes ensures page requests resolve within milliseconds from the nearest edge datacenter rather than requesting dynamic server computations."
    ]
  },
  "secure-telehealth-pipelines": {
    slug: "secure-telehealth-pipelines",
    title: "Engineering Telehealth Applications: Setting Up HIPAA-Compliant WebRTC Video Consultations",
    desc: "A walkthrough of setting up secure TURN servers, database logging rules, JWT token generation, and secure socket gateways.",
    category: "Security",
    date: "May 18, 2026",
    author: "Marcus Vance",
    readTime: "9 min read",
    content: [
      "Building telemedicine platforms requires strict adherence to security and compliance protocols. The Health Insurance Portability and Accountability Act (HIPAA) mandates secure data storage, transit encryption, and comprehensive access audits.",
      "Our team approached the client's WebRTC video consulting platform with a zero-trust network design. Every patient-doctor session is brokered using short-lived JSON Web Tokens (JWT) signed by our internal KMS engine. These tokens grant temporary access keys to secure TURN/STUN servers.",
      "Crucially, none of the video consult stream records are stored on public servers. All ephemeral signaling packets are sent through secure WebSocket tunnels that employ TLS 1.3 encryption. For storage of patient metadata, we configure strict access logs inside AWS RDS instances utilizing KMS keys.",
      "Additionally, we built automated reporting engines that log every administrative access and configuration update. These logs are stored on immutable storage buckets (WORM), providing clean logs for yearly compliance audits."
    ]
  },
  "headless-commerce-conversions": {
    slug: "headless-commerce-conversions",
    title: "Headless E-Commerce: Migrating from Legacy Retail Templates to Headless Next.js Commerce",
    desc: "Why sub-second page loads directly reduce abandoned carts, and how to connect Next.js APIs to Shopify store catalogs seamlessly.",
    category: "E-Commerce",
    date: "May 10, 2026",
    author: "Sarah Jenkins",
    readTime: "8 min read",
    content: [
      "In retail commerce, slow checkout times lead directly to loss of conversions. Research indicates that a one-second delay in page load speeds can reduce conversion parameters by up to 20%.",
      "During our migration sprint for LuxeHour, we decoupled the front-end storefront layout from the legacy backend database. We built a headless Next.js storefront that queries catalog information through GraphQL APIs.",
      "Using incremental static regeneration (ISR), product listing pages are compiled statically once and distributed globally. If an item price or description is updated inside the Shopify backend, webhook triggers invalidate the specific cache on edge networks, regenerating the page in the background.",
      "This headless setup achieves a 0.7-second page response time globally. It also ensures checkout operations are tokenized and processed securely using Stripe Checkout gateways, bypassing client credentials exposure completely."
    ]
  },
  "kubernetes-deployment-pipelines": {
    slug: "kubernetes-deployment-pipelines",
    title: "Automating Multi-Cloud Infrastructure Deployments with Terraform and Kubernetes",
    desc: "How we configure continuous integration pipelines to lint infrastructure templates, check AWS IAM roles, and roll upgrades automatically.",
    category: "Cloud",
    date: "April 29, 2026",
    author: "Devon Miller",
    readTime: "11 min read",
    content: [
      "Deploying updates across multiple cloud service environments without automated systems invites configuration drift and security leaks. Infrastructure-as-Code (IaC) is critical to maintaining system sync.",
      "We orchestrate our deployment loops using Terraform files. The configurations define VPC boundaries, subnets, Kubernetes clusters, and security policies. These files are stored in Git repositories, enabling code review before any system modifications occur.",
      "Our continuous integration pipeline automatically runs dynamic checks on every merge request: first, linting syntax parameters; second, scanning for open firewall ports or overly permissive IAM roles; and third, validating configurations in a sandbox outpost.",
      "Once approved, Terraform applies updates. For container services, Kubernetes handles rolling rollouts. Pod configurations are upgraded progressively, validating live health checks before decommissioning staler nodes."
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = articles[slug];
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: `${post.title} | AuraDev Systems`,
    description: post.desc,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = articles[slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen mt-16">
      
      {/* Article Header Hero */}
      <header className="bg-section-bg py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-bold text-primary hover:text-primary/95 group"
          >
            <ArrowLeft className="mr-1.5 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Articles
          </Link>
          
          <div className="space-y-4">
            <span className="bg-light-blue text-primary text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-primary/10 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-main leading-tight">
              {post.title}
            </h1>
            <p className="text-base text-text-body leading-relaxed">
              {post.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-text-muted pt-4 border-t border-slate-200/50">
            <div className="flex items-center space-x-1.5">
              <User className="h-4 w-4 text-primary" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="h-4 w-4 text-primary" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-text-body leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Bottom Nav CTA */}
          <div className="border-t border-slate-100 pt-10 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-text-muted">
              Looking for support on a similar engineering challenge?
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
            >
              Consult our Engineer
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}
