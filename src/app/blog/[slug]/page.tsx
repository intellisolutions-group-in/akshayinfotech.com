import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, blogPosts } from "../blogData";
import BlogDetailClient from "./BlogDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = articles[slug];
  
  if (!post) {
    return {
      title: "Article Not Found | Akshay Infotech",
    };
  }

  const siteUrl = "https://akshayinfotech.com";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const ogImageUrl = `${siteUrl}/og/${post.slug}.jpg`;

  return {
    title: `${post.title} | Akshay Infotech Technical Blog`,
    description: post.desc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.desc,
      url: canonicalUrl,
      type: "article",
      siteName: "Akshay Infotech",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = articles[slug];

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedSlugs
    .map((s) => articles[s])
    .filter(Boolean);

  return (
    <article className="bg-[#03050c] text-slate-100 min-h-screen relative overflow-hidden pt-28 pb-16">
      {/* Background Watermark name patterns */}
      <div className="absolute top-1/3 left-10 text-[9px] font-black tracking-widest text-slate-500/[0.012] select-none pointer-events-none uppercase rotate-90 origin-left hidden lg:block">
        Akshay Infotech Enterprise System Architecture
      </div>
      <div className="absolute bottom-1/3 right-10 text-[9px] font-black tracking-widest text-slate-500/[0.012] select-none pointer-events-none uppercase -rotate-90 origin-right hidden lg:block">
        Akshay Infotech Enterprise System Architecture
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <BlogDetailClient post={post} relatedPosts={relatedPosts} />
      </div>

      {/* JSON-LD Article Schema for premium SEO validation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": post.title,
            "description": post.desc,
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author,
              "jobTitle": post.authorRole,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Akshay Infotech",
              "logo": "https://akshayinfotech.com/icon.svg",
            },
          }),
        }}
      />
    </article>
  );
}
