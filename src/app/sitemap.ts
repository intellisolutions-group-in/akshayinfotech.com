import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akshayinfotech.com";
  const now = new Date();
  
  const coreRoutes = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/solutions`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/company`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.3 },
    { url: `${baseUrl}/security`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const serviceRoutes = [
    "web-development",
    "mobile-development",
    "ui-ux-design",
    "cloud-solutions",
    "devops",
    "ai-automation",
    "seo-optimization",
    "ecommerce",
    "cyber-security",
    "it-consulting"
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
    "custom-platforms",
    "product-one",
    "product-two"
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
    "why-choose-us",
    "leadership",
    "our-story"
  ].map((company) => ({
    url: `${baseUrl}/company/${company}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = [
    "maximizing-lighthouse-scores",
    "secure-telehealth-pipelines",
    "headless-commerce-conversions",
    "kubernetes-deployment-pipelines"
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...solutionRoutes,
    ...resourceRoutes,
    ...companyRoutes,
    ...blogRoutes
  ];
}
