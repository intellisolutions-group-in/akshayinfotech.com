import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nexoratech.com";
  const now = new Date();
  
  const coreRoutes = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/solutions`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/company`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const serviceRoutes = [
    "web-development",
    "mobile-development",
    "ui-ux-design",
    "cloud-solutions",
    "devops",
    "ai-automation",
    "seo-optimization",
    "ecommerce"
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const productRoutes = [
    "business-software",
    "cloud-solutions",
    "enterprise-applications",
    "custom-platforms"
  ].map((product) => ({
    url: `${baseUrl}/products/${product}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const solutionRoutes = [
    "enterprise-solutions",
    "saas-solutions",
    "digital-transformation",
    "cloud-migration"
  ].map((solution) => ({
    url: `${baseUrl}/solutions/${solution}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const resourceRoutes = [
    "case-studies",
    "insights"
  ].map((resource) => ({
    url: `${baseUrl}/resources/${resource}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const companyRoutes = [
    "about-us",
    "our-process",
    "technologies",
    "industries",
    "why-choose-us"
  ].map((company) => ({
    url: `${baseUrl}/company/${company}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...solutionRoutes,
    ...resourceRoutes,
    ...companyRoutes
  ];
}
