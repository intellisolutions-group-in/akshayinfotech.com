import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Code2, ShieldAlert, Award, TrendingUp, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse our custom software development case studies, including health, logistics, and retail projects.",
};

const detailedProjects = [
  {
    id: "health-pulse",
    title: "HealthPulse Telemedicine Portal",
    category: "Healthcare Technology",
    image: "/project-1.png",
    challenge: "Developing an online consulting system that complies with strict data transmission and health record encryption standards, while supporting low-latency video feeds.",
    solution: "We built a React-based client dashboard integrated with Node.js and WebRTC. Audio/video channels are encrypted using SRTP, and patient records are stored in a partitioned, encrypted PostgreSQL database.",
    impact: "High volumes of successful consultations with enterprise-level video transmission stability.",
    technologies: ["Next.js", "WebRTC", "PostgreSQL", "Node.js", "AWS KMS", "Tailwind CSS"],
    results: ["Highly secure data architecture", "Sub-second latency video feeds", "Automated patient intake charts"],
  },
  {
    id: "swift-route",
    title: "SwiftRoute Logistics Mobile App",
    category: "Logistics & Supply Chain",
    image: "/project-2.png",
    challenge: "Tracking hundreds of active delivery drivers in real time without draining device batteries, while calculating dynamically changing traffic paths.",
    solution: "A React Native app using native geolocation background bridges that batches updates. Path calculations are computed using Go services combined with customized Google Maps API caching layers.",
    impact: "Significant reduction in delivery path times and substantial improvement in driver device battery retention.",
    technologies: ["React Native", "TypeScript", "Go (Golang)", "Docker", "Google Maps API", "Redis"],
    results: ["Low-power background tracking", "Batch coordinate sync loops", "Dynamically updating traffic route maps"],
  },
  {
    id: "luxe-hour",
    title: "LuxeHour Storefront Retailer",
    category: "E-Commerce",
    image: "/project-3.png",
    challenge: "Handling sudden high-concurrency spikes during product drops without page load degradation or transaction failure rates.",
    solution: "Migrated legacy monolith to a headless storefront built on Next.js. Page assets are cached on Cloudflare Edge networks. Checkout is processed asynchronously through Stripe queues.",
    impact: "Drastic improvement in page load speed, resulting in a substantial increase in conversion rates.",
    technologies: ["Next.js", "Tailwind CSS", "Stripe API", "Cloudflare Workers", "PostgreSQL", "Docker"],
    results: ["Sub-second global loading times", "Asynchronous Stripe transaction queues", "Elastic autoscaling Kubernetes containers"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      
      {/* Page Header */}
      <section className="bg-section-bg pt-32 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-bold text-primary tracking-wider uppercase mb-3 block">
            Our Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-text-main tracking-tight mb-5">
            Software Systems We Deployed
          </h1>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Review detailed reports of how we engineered solutions for compliance-level healthcare, high-frequency logistics, and high-concurrency retail projects.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section id="projects" className="py-20 scroll-mt-24">
        <div id="case-studies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 scroll-mt-24">
          
          {detailedProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                id={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-slate-100/50 pb-20 last:border-0 last:pb-0 scroll-mt-24"
              >
                
                {/* Image & Stats block */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-slate-100 shadow-md bg-slate-50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-w-7xl) 40vw, 100vw"
                    />
                  </div>
                  
                  {/* Mini Stats Card */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex items-start space-x-3.5">
                    <div className="h-10 w-10 rounded-xl bg-light-blue text-primary flex items-center justify-center shrink-0">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-text-muted uppercase tracking-wider">Project Impact</h4>
                      <p className="text-xs sm:text-sm font-bold text-text-main leading-snug">{project.impact}</p>
                    </div>
                  </div>
                </div>

                {/* Case Study Details */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div>
                    <span className="bg-light-blue text-primary text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-primary/10">
                      {project.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main mt-4">
                      {project.title}
                    </h2>
                  </div>

                  {/* Challenge and Solution */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <ShieldAlert className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-text-main uppercase tracking-wider">The Challenge</h4>
                        <p className="text-xs sm:text-sm text-text-body mt-1 leading-relaxed">{project.challenge}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-text-main uppercase tracking-wider">Our Solution</h4>
                        <p className="text-xs sm:text-sm text-text-body mt-1 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results Bullet list */}
                  <div className="border-t border-slate-100 pt-5">
                    <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">Key Project Deliverables</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {project.results.map((r) => (
                        <div key={r} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-500 shrink-0" />
                          <span className="text-xs font-semibold text-text-main">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div>
                    <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2.5">Technologies Utilized</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="bg-white border border-slate-200 text-[10px] sm:text-xs text-text-main font-semibold px-2.5 py-1.5 rounded-lg shadow-2xs flex items-center"
                        >
                          <Code2 className="h-3 w-3 mr-1 text-primary/70" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call to action */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/95 group"
                    >
                      Partner on a similar solution
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}
