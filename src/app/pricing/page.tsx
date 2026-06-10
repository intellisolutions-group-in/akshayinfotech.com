"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "../../components/ui/ScrollReveal";

const plans = [
  {
    name: "Free Evaluation",
    price: "Free",
    period: "",
    desc: "Standard evaluation and developer testing of our capabilities.",
    features: [
      "Access to standard open-source boilerplates",
      "Documentation templates and guides",
      "Standard community discussion forums",
      "Email support for setup and discovery queries"
    ],
    popular: false,
    cta: "Start Evaluation"
  },
  {
    name: "Enterprise Retainer",
    price: "Custom",
    period: "",
    desc: "Bespoke architectures and dedicated engineering allocations.",
    features: [
      "Unlimited dedicated developers",
      "Dedicated solutions architect resource",
      "Dedicated secure VPC setups and cloud isolation",
      "Custom SLA support response guarantees",
      "Weekly and monthly sprint performance reviews",
      "Direct communication channel integrations"
    ],
    popular: true,
    cta: "Contact Solutions Architect"
  }
];

const faqs = [
  { q: "How does billing work for custom developer resources?", a: "Developer allocations are billed on a monthly rolling retainer basis. You can scale up or scale down active engineers assigned to your project with reasonable advance notice to your dedicated solutions architect." },
  { q: "Are custom integrations included in the plans?", a: "Yes, standard API endpoints and hooks are included. Custom legacy database migrations or custom ERP middleware systems are evaluated and scoped by our architect during onboarding." },
  { q: "How do we scale our development resources?", a: "You can request additional developer allocations or change support response parameters at any time. Adjustments are discussed and applied dynamically by your dedicated solutions architect." }
];

export default function PricingPage() {
  React.useEffect(() => {
    document.title = "Pricing Plans | Akshay Infotech";
  }, []);

  return (
    <div className="bg-white">
      
      {/* Page Header */}
      <section className="bg-section-bg pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ScrollReveal>
            <span className="text-xs font-bold text-primary tracking-wider uppercase bg-light-blue px-3.5 py-1.5 rounded-full border border-primary/10 inline-block">
              Flexible Retainers
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight">
              Flexible Retainers Built for Growth
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
              Review transparent billing plans designed to provide high-quality developer resources and stable infrastructure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <StaggerItem key={plan.name} direction="scale">
                <div
                  className={`rounded-3xl border p-8 flex flex-col justify-between relative transition-all duration-300 h-full ${
                    plan.popular 
                      ? "bg-slate-50 border-primary shadow-md scale-102" 
                      : "bg-white border-slate-100 shadow-xs hover:border-primary/20"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-text-main mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-text-body leading-relaxed mb-6">{plan.desc}</p>
                    
                    <div className="flex items-baseline mb-6 border-b border-slate-100 pb-6">
                      <span className="text-4xl font-extrabold text-text-main">{plan.price}</span>
                      <span className="text-xs font-semibold text-text-muted ml-1">{plan.period}</span>
                    </div>

                    <ul className="space-y-3.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start space-x-2.5 text-xs sm:text-sm text-text-body">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href="/contact"
                      className={`flex items-center justify-center w-full px-5 py-3.5 text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors ${
                        plan.popular
                          ? "text-white bg-primary hover:bg-primary/95"
                          : "text-text-main bg-slate-50 hover:bg-slate-100 border border-slate-200/60"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollReveal>
              <span className="text-xs font-bold text-primary tracking-wider uppercase mb-2 block">
                Billing support
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
                Pricing & Retainer FAQs
              </h2>
            </ScrollReveal>
          </div>

          <StaggerContainer staggerDelay={0.12} className="space-y-6">
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6.5 space-y-2.5">
                  <div className="flex items-center space-x-2 text-sm font-bold text-text-main">
                    <HelpCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-body leading-relaxed pl-7">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
              Need a Custom Billing Model?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-sm text-text-body max-w-lg mx-auto">
              Discuss hybrid cloud nodes, specialized database support hours, or custom dedicated engineering plans with our financial operations lead.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-xl shadow-md transition-colors"
              >
                Get Custom Proposal
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
