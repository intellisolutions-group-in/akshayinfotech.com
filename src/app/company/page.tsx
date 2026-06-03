"use client";

import React from "react";
import Link from "next/link";
import { Info, Workflow, Code2, Network, Award, Phone, ArrowRight } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../../components/ui/ScrollReveal";

const companyLinks = [
  { slug: "about-us", title: "About Us", desc: "Our core values, founding vision, and leadership team guiding software delivery.", icon: Info },
  { slug: "our-process", title: "Our Process", desc: "Detailed breakdown of our agile engineering model and quality checkpoints.", icon: Workflow },
  { slug: "technologies", title: "Technologies", desc: "Our technical foundations: React, Next.js, Go, Kubernetes, and Cloud architectures.", icon: Code2 },
  { slug: "industries", title: "Industries We Serve", desc: "Tailored IT integrations for Finance, Healthcare, Retail, and Logistics sectors.", icon: Network },
  { slug: "why-choose-us", title: "Why Choose Us", desc: "Proven SLA track records, high security practices, and custom software systems.", icon: Award },
  { slug: "contact", title: "Contact Us", desc: "Direct communication channels to get started with scoping your project.", icon: Phone }
];

export default function CompanyOverview() {
  React.useEffect(() => {
    document.title = "Company | Nexora Technologies";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-section-bg pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-bold text-primary tracking-wider uppercase mb-3 block">
              Who We Are
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-6">
              Nexora <span className="text-gradient">Technologies</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-text-body max-w-3xl mx-auto leading-relaxed">
              We are an enterprise software engineering firm building high-reliability cloud architectures, custom corporate portals, and stunning design frameworks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyLinks.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.slug} direction="scale">
                  <div className="bg-white border border-slate-200/60 p-8 rounded-3xl hover:shadow-lg transition-all flex flex-col justify-between h-full">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-light-blue text-primary flex items-center justify-center mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-text-main mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-text-body leading-relaxed mb-6">{item.desc}</p>
                    </div>
                    
                    <Link
                      href={item.slug === "contact" ? "/contact" : `/company/${item.slug}`}
                      className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/95 group mt-auto cursor-pointer"
                    >
                      Learn More
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-150/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main text-center mb-16">Driven by Quality & Integrity</h2>
          </ScrollReveal>
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <StaggerItem>
              <div className="space-y-4">
                <h4 className="text-base font-bold text-text-main">Client Centricity</h4>
                <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                  We align our sprint targets directly with your business timelines, ensuring transparency and weekly demo releases.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4">
                <h4 className="text-base font-bold text-text-main">Engineering Excellence</h4>
                <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                  We avoid code shortcuts, writing comprehensive unit tests and automated security scans into every single repository.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="space-y-4">
                <h4 className="text-base font-bold text-text-main">Continuous Security</h4>
                <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                  We enforce row-level safety, credentials isolation, and cloud VPC restrictions into our architectures as default.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
