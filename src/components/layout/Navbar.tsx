"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, ChevronDown, Cpu, ArrowRight,
  Globe, Smartphone, Palette, Cloud, Terminal, Brain, Search, ShoppingBag,
  Building2, Layers, Zap, Database, Briefcase, BookOpen,
  Info, Workflow, Code2, Network, Award, Phone, Shield
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    columns: 2,
    dropdown: [
      { name: "Web Development", href: "/services/web-development", desc: "Premium custom web apps and dynamic portals", icon: Globe },
      { name: "Mobile Development", href: "/services/mobile-development", desc: "Native & cross-platform iOS & Android apps", icon: Smartphone },
      { name: "UI/UX Design", href: "/services/ui-ux-design", desc: "Stunning, human-centric visual interfaces", icon: Palette },
      { name: "Cloud Solutions", href: "/services/cloud-solutions", desc: "Scalable public, private & hybrid cloud architecture", icon: Cloud },
      { name: "AI & Machine Learning", href: "/services/ai-automation", desc: "Intelligent neural network models & custom AI", icon: Brain },
      { name: "Cyber Security", href: "/services/cyber-security", desc: "Zero-trust environments and threat mitigation", icon: Shield },
      { name: "DevOps Engineering", href: "/services/devops", desc: "CI/CD pipelines, container cluster networks & IaC", icon: Terminal },
      { name: "IT Consulting", href: "/services/it-consulting", desc: "Digital transformation blueprints & architecture", icon: Briefcase },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    columns: 2,
    dropdown: [
      { name: "Enterprise Solutions", href: "/solutions/enterprise-solutions", desc: "Robust custom systems for large organizations", icon: Building2 },
      { name: "SaaS Solutions", href: "/solutions/saas-solutions", desc: "Multi-tenant cloud architectures & SaaS platforms", icon: Layers },
      { name: "Digital Transformation", href: "/solutions/digital-transformation", desc: "Modernize legacy systems and digitize workflows", icon: Zap },
      { name: "Cloud Migration", href: "/solutions/cloud-migration", desc: "Safe, zero-downtime migration of data & workloads", icon: Database },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    columns: 1,
    dropdown: [
      { name: "Case Studies", href: "/resources/case-studies", desc: "Real-world project showcases and proven results", icon: Briefcase },
      { name: "Insights & Articles", href: "/resources/insights", desc: "Technology trends, industry news & dev insights", icon: BookOpen },
    ],
  },
  {
    name: "Company",
    href: "/company",
    columns: 2,
    dropdown: [
      { name: "About Us", href: "/company/about-us", desc: "Who we are, our mission, vision and leadership", icon: Info },
      { name: "Our Process", href: "/company/our-process", desc: "Agile delivery process & quality assurances", icon: Workflow },
      { name: "Technologies", href: "/company/technologies", desc: "Modern tech stacks and frameworks we utilize", icon: Code2 },
      { name: "Industries We Serve", href: "/company/industries", desc: "Tailored IT solutions for various global sectors", icon: Network },
      { name: "Why Choose Us", href: "/company/why-choose-us", desc: "Our core advantages, reliability & support models", icon: Award },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  const toggleMobileDropdown = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  const useDarkNavbar = !scrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-300 border shadow-md ${
        useDarkNavbar
          ? "top-4 rounded-full bg-slate-950/20 backdrop-blur-md py-3.5 px-6 border-white/10 shadow-none text-white"
          : mobileMenuOpen
            ? "top-4 rounded-3xl bg-white/95 backdrop-blur-lg py-4 px-6 border-slate-200/50"
            : scrolled
              ? "top-3 rounded-full bg-white/90 backdrop-blur-xl py-2 px-5 shadow-lg border-slate-200/50"
              : "top-4 rounded-full bg-white/75 backdrop-blur-md py-3.5 px-6 shadow-sm border-slate-200/50"
      }`}
    >
      <div className="flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src={useDarkNavbar ? "/logo-dark.png" : "/logo-light.png"}
            alt="Akshay Infotech Logo"
            className="h-8 sm:h-9 w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation Link List */}
        <nav className="hidden lg:flex items-center space-x-0.5">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            if (item.dropdown) {
              const isDropdownOpen = dropdownOpen === item.name;
              const isWide = item.columns && item.columns > 1;
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    className={`flex items-center px-3.5 py-1.5 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                      useDarkNavbar
                        ? isActive ? "text-blue-400 bg-white/5" : "text-slate-200 hover:text-blue-400"
                        : isActive ? "text-primary bg-light-blue/40" : "text-text-body hover:text-primary"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute left-1/2 -translate-x-1/2 mt-2 rounded-2xl border shadow-xl p-3.5 z-50 origin-top transition-all duration-300 ${
                          useDarkNavbar
                            ? "bg-slate-950/95 backdrop-blur-2xl border-slate-800 text-white shadow-2xl"
                            : "bg-white/95 backdrop-blur-xl border-slate-200/50"
                        } ${
                          isWide ? "w-[560px] sm:w-[600px] grid grid-cols-2 gap-2" : "w-72 grid grid-cols-1 gap-1"
                        }`}
                      >
                        {item.dropdown.map((subItem) => {
                          const SubIcon = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`flex items-start p-2.5 rounded-xl transition-all-smooth group/item text-left ${
                                useDarkNavbar
                                  ? "hover:bg-white/5 hover:text-blue-400"
                                  : "hover:bg-light-blue/20 hover:text-primary"
                              }`}
                            >
                              <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 mr-3 transition-all duration-200 ${
                                useDarkNavbar
                                  ? "bg-slate-900 border border-slate-800 text-slate-400 group-hover/item:bg-blue-600 group-hover/item:border-blue-600 group-hover/item:text-white"
                                  : "bg-slate-50 border border-slate-100 text-text-muted group-hover/item:bg-primary group-hover/item:border-primary group-hover/item:text-white"
                              }`}>
                                <SubIcon className="h-4.5 w-4.5" />
                              </div>
                              <div>
                                <h5 className={`text-[13px] sm:text-sm font-bold transition-colors leading-tight ${
                                  useDarkNavbar ? "text-slate-200 group-hover/item:text-blue-400" : "text-text-main group-hover/item:text-primary"
                                }`}>
                                  {subItem.name}
                                </h5>
                                <p className={`text-xs mt-0.5 leading-normal font-medium ${
                                  useDarkNavbar ? "text-slate-400" : "text-text-muted"
                                }`}>
                                  {subItem.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3.5 py-1.5 text-sm font-semibold rounded-full transition-colors group/link block"
              >
                <span className={`transition-colors duration-300 ${
                  useDarkNavbar
                    ? isActive ? "text-blue-400" : "text-slate-200 hover:text-blue-400"
                    : isActive ? "text-primary" : "text-text-body hover:text-primary"
                }`}>
                  {item.name}
                </span>
                <span
                  className={`absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-primary scale-x-0 transition-transform duration-200 origin-left group-hover/link:scale-x-100 ${
                    isActive ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button & Mobile Burger */}
        <div className="flex items-center space-x-3 shrink-0">
          <Link
            href="/contact"
            className={`hidden sm:inline-flex items-center justify-center px-4.5 py-2 text-xs font-bold rounded-full transition-all hover:translate-y-[-1px] group active:translate-y-0 ${
              useDarkNavbar
                ? "text-slate-900 bg-white hover:bg-slate-100 shadow-lg shadow-white/5"
                : "text-white bg-primary hover:bg-primary/95 shadow-md shadow-primary/10"
            }`}
          >
            Get Started
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Toggle Button for Mobile Screens */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              useDarkNavbar ? "text-white hover:bg-white/10" : "text-text-body hover:bg-slate-100"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
          </button>
        </div>

      </div>

      {/* Mobile Nav Links Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden mt-4 pt-2 border-t border-slate-100 overflow-hidden"
          >
            <div className="space-y-1 pb-4">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                if (item.dropdown) {
                  const isDropdownOpen = dropdownOpen === item.name;
                  return (
                    <div key={item.name} className="space-y-0.5">
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`flex items-center justify-between w-full px-4 py-2 text-sm font-semibold rounded-xl transition-colors cursor-pointer ${
                          isActive ? "text-primary bg-light-blue/20" : "text-text-body hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`h-4.5 w-4.5 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 overflow-hidden border-l border-slate-100 ml-4 space-y-0.5 my-1"
                          >
                            {item.dropdown.map((subItem) => {
                              const SubIcon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center px-4 py-2 text-xs font-medium text-text-body hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                                >
                                  <SubIcon className="h-3.5 w-3.5 mr-2 text-text-muted" />
                                  <span>{subItem.name}</span>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                      isActive ? "text-primary bg-light-blue/20" : "text-text-body hover:bg-slate-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              <div className="pt-3 px-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-2.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 rounded-full shadow-md transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
