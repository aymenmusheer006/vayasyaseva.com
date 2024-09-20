import { WebsiteContent } from "./types";

export const content: WebsiteContent = {
  header: {
    logo: "FSWS",
    navigation: [
      { label: "Sustainability", link: "/#sustainability" },
      { label: "About", link: "/#about" },
      { label: "Services", link: "/#services" },
      { label: "Contact", link: "/#contact" },
    ],
    contactButton: "Contact Us",
  },
  heroSection: {
    headline: "Zero Waste. Maximum Impact.",
    subheading: "Innovative waste solutions for a cleaner tomorrow.",
    ctaButton: "Get Started",
  },
  servicesSection: {
    title: "Our Solutions",
    cards: [
      {
        title: "Industrial Waste Disposal",
        description:
          "Safe, efficient, and compliant disposal services tailored to your business.",
        image: "/assets/services/industrial-waste.webp",
      },
      {
        title: "Recycling & Reuse",
        description:
          "Innovative recycling technologies to reduce landfill usage and save resources.",
        image: "/assets/services/recycling.webp",
      },
      {
        title: "Waste Audits",
        description:
          "Streamline your processes, minimize waste, and save money with our expert audits.",
        image: "/assets/services/waste-audit.webp",
      },
      {
        title: "Consulting Services",
        description:
          "Navigate regulations and find efficient waste management strategies.",
        image: "/assets/services/consulting.webp",
      },
    ],
  },
  impactSection: {
    title: "We make change happen.",
    statistics: [
      {
        stat: "5,000 Tons",
        description: "of waste diverted from landfills",
      },
      {
        stat: "500,000 kg",
        description: "of industrial ash transformed into products",
      },
      {
        stat: "Zero-Waste",
        description: "communities supported",
      },
    ],
  },
  footer: {
    copyright: "© 2024 First Source Waste Solutions. All Rights Reserved.",
  },
};
