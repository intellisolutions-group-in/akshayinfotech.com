"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, ArrowRight, Star, Heart, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    desc: "Premium medical coverage, gym memberships, and mental health resources.",
  },
  {
    icon: GraduationCap,
    title: "Learning Stipends",
    desc: "Annual budgets for courses, certifications, tech conferences, and books.",
  },
  {
    icon: Star,
    title: "Remote First",
    desc: "Flexible working hours and dynamic home office equipment allowances.",
  },
];

const jobs = [
  {
    role: "Senior React Developer",
    type: "Full Time / Hybrid",
    team: "Engineering",
  },
  {
    role: "Cloud DevOps Engineer",
    type: "Full Time / Hybrid",
    team: "Infrastructure",
  },
  {
    role: "Lead UI/UX Designer",
    type: "Full Time / Hybrid",
    team: "Design",
  },
];

export default function CareersSection() {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Text Content & Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-sm font-bold text-primary tracking-wider uppercase mb-3 block">
                Join Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight mb-5">
                Build the Future of Digital Infrastructure
              </h2>
              <p className="text-base text-text-body leading-relaxed">
                At Akshay Infotech, we hire engineers who love solving complex problems. We foster a collaborative, zero-ego culture focused on building beautiful, fast, and secure products.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-xl bg-light-blue text-primary flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-main mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary/95 shadow-md rounded-xl transition-all hover:translate-y-[-1px] group"
              >
                View Open Positions
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Column 2: Image & Job Postings */}
          <div className="lg:col-span-6 space-y-8">
            {/* Image Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.0, ease: "easeOut" }}
              className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-slate-100 shadow-md bg-slate-50"
            >
              <Image
                src="/careers-bg.png"
                alt="Akshay Infotech software team collaboration"
                fill
                className="object-cover"
                sizes="(max-w-7xl) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </motion.div>

            {/* Quick Openings Cards */}
            <div className="space-y-3">
              <h3 className="text-[13px] sm:text-sm font-bold text-text-muted tracking-wider uppercase mb-1">
                Featured Openings
              </h3>
              
              {jobs.map((job, index) => (
                <motion.div
                  key={job.role}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.4, ease: "easeOut" }}
                  className="bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-primary/20 p-4 rounded-xl flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="h-9 w-9 rounded-lg bg-white border border-slate-100 text-text-muted group-hover:text-primary group-hover:border-primary/10 flex items-center justify-center transition-colors">
                      <Briefcase className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">
                        {job.role}
                      </h4>
                      <p className="text-xs text-text-muted">
                        {job.team} &bull; {job.type}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/careers#apply-${job.role.toLowerCase().replace(/\s+/g, "-")}`}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-text-muted group-hover:text-primary group-hover:border-primary/20 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
