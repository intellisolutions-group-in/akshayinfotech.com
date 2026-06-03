import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights | AuraDev Systems",
  description: "Read the latest engineering articles, DevOps setup tutorials, and cloud architecture reviews from our technical team.",
};

const blogPosts = [
  {
    slug: "maximizing-lighthouse-scores",
    title: "How We Achieved a Perfect 100/100 Lighthouse Performance Rating on Next.js 15",
    desc: "A detailed breakdown of server component optimization, route segment configs, code splitting triggers, and modern WebP image sizing rules.",
    category: "Engineering",
    date: "May 25, 2026",
    author: "Elena Rostova",
    readTime: "6 min read"
  },
  {
    slug: "secure-telehealth-pipelines",
    title: "Engineering Telehealth Applications: Setting Up HIPAA-Compliant WebRTC Video Consultations",
    desc: "A walkthrough of setting up secure TURN servers, database logging rules, JWT token generation, and secure socket gateways.",
    category: "Security",
    date: "May 18, 2026",
    author: "Marcus Vance",
    readTime: "9 min read"
  },
  {
    slug: "headless-commerce-conversions",
    title: "Headless E-Commerce: Migrating from Legacy Retail Templates to Headless Next.js Commerce",
    desc: "Why sub-second page loads directly reduce abandoned carts, and how to connect Next.js APIs to Shopify store catalogs seamlessly.",
    category: "E-Commerce",
    date: "May 10, 2026",
    author: "Sarah Jenkins",
    readTime: "8 min read"
  },
  {
    slug: "kubernetes-deployment-pipelines",
    title: "Automating Multi-Cloud Infrastructure Deployments with Terraform and Kubernetes",
    desc: "How we configure continuous integration pipelines to lint infrastructure templates, check AWS IAM roles, and roll upgrades automatically.",
    category: "Cloud",
    date: "April 29, 2026",
    author: "Devon Miller",
    readTime: "11 min read"
  }
];

const featuredPost = {
  slug: "maximizing-lighthouse-scores",
  title: "How We Achieved a Perfect 100/100 Lighthouse Performance Rating on Next.js 15",
  desc: "A detailed breakdown of server component optimization, route segment configs, code splitting triggers, and modern WebP image sizing rules. Read our step-by-step optimization roadmap to secure top Google search listings.",
  category: "Engineering",
  date: "May 25, 2026",
  author: "Elena Rostova",
  readTime: "6 min read"
};

const categories = ["All Insights", "Engineering", "Cloud", "Security", "E-Commerce"];

export default function BlogPage() {
  return (
    <div className="bg-white">
      
      {/* Blog Hero Header */}
      <section className="bg-section-bg py-24 border-b border-slate-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
            Engineering Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
            The AuraDev Tech Blog
          </h1>
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            Deep-dives into modern web architectures, compliance-level security designs, and serverless compute deployments.
          </p>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-4">
            Featured Article
          </span>
          
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="bg-light-blue text-primary text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-primary/10 inline-block">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-sm text-text-body leading-relaxed">
                {featuredPost.desc}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-xs text-text-muted pt-2">
                <div className="flex items-center space-x-1.5">
                  <User className="h-4 w-4 text-primary" />
                  <span>By {featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{featuredPost.date}</span>
                </div>
                <div>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-left lg:text-right">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
              >
                Read Featured Post
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills & Article List Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Categories Filter Bar */}
          <div className="flex flex-wrap gap-2.5 mb-12 pb-6 border-b border-slate-100">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={`text-xs font-semibold px-4.5 py-2.5 rounded-full border transition-all ${
                  idx === 0
                    ? "bg-primary text-white border-primary shadow-xs"
                    : "bg-white text-text-main border-slate-200/60 hover:border-primary/20 hover:bg-slate-50/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-xs hover:border-primary/20 hover:shadow-sm transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="bg-light-blue text-primary text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-primary/10 inline-block">
                    {post.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-text-main leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                    {post.desc}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-[11px] text-text-muted">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-bold text-primary hover:underline group"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
