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

