import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BlogSection from "@/components/home/BlogSection";
import TechStack from "@/components/home/TechStack";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import CtaSection from "@/components/home/CtaSection";
import ScrollProgressTimeline from "@/components/ui/ScrollProgressTimeline";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akshay Infotech | Custom Software Engineering & IT Consulting",
  description: "Akshay Infotech builds high-performance web applications, native mobile apps, secure cloud migrations, and custom AI agent automation workflows.",
  alternates: {
    canonical: "https://akshayinfotech.com",
  },
  openGraph: {
    title: "Akshay Infotech | Custom Software Engineering & IT Consulting",
    description: "Akshay Infotech builds high-performance web applications, native mobile apps, secure cloud migrations, and custom AI agent automation workflows.",
    url: "https://akshayinfotech.com",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Infotech | Custom Software Engineering & IT Consulting",
    description: "Akshay Infotech builds high-performance web applications, native mobile apps, secure cloud migrations, and custom AI agent automation workflows.",
  }
};

export default function Home() {
  return (
    <>
      <ScrollProgressTimeline />
      
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <WhyChooseUs />

      <TechStack />

      <BlogSection />

      <FAQSection />

      <ContactSection />

      <CtaSection />
    </>
  );
}

