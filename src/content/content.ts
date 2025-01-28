import { BsQuestion } from "react-icons/bs";
import { FaMailBulk, FaPhone, FaSchool, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiBuilding2Fill } from "react-icons/ri";
import { WebsiteContent } from "./types";

export const content: WebsiteContent = {
  header: {
    logo: "FSWS",
    navigation: [
      { name: "About Us", href: "about", icon: RiBuilding2Fill },
      { name: "Services", href: "services", icon: FaUser },
      { name: "Why Us?", href: "why-us", icon: FaSchool },
      { name: "FAQs", href: "faq", icon: BsQuestion },
      { name: "Contact", href: "contact", icon: FaMailBulk },
    ],
    contactButton: "Contact Us",
  },
  heroSection: {
    id: "homie",
    headline: "lol no",
    subheading: "Innovative waste solutions for a cleaner tomorrow.",
    ctaButton: {
      label: "Get in touch",
      href: "contact",
    },
  },
  clientsSection: {
    id: "clients",
    title: "Our Clients",
    clients: [
      {
        name: "ITC Limited",
        image: "/assets/clients/ITC-light.png",
        darkImage: "/assets/clients/ITC-dark.png",
      },
      {
        name: "Wipro",
        image: "/assets/clients/Wipro-light.png",
        darkImage: "/assets/clients/Wipro-dark.png",
      },
 
  
    ],
  },
  aboutSection: {
    id: "about",
    title: "Who We Are",
    description:
      "First Source Waste Solutions is a leading provider of waste management services. We help businesses reduce waste, recycle efficiently, and achieve their sustainability goals. Our team of experts works closely with clients to develop customized waste management solutions that are cost-effective and environmentally friendly.",
  },
  servicesSection: {
    id: "services",
    title: "Our Services",
    cards: [
      {
        title: "Loading/Unloading",
        description:
          "Safe, efficient, and compliant disposal services tailored to your business.",
        image: "/assets/services/industrial-waste.webp",
      },
      {
        title: "Housekeeping",
        description:
          "Innovative recycling technologies to reduce landfill usage and save resources.",
        image: "/assets/services/recycling.webp",
      },
      {
        title: "Construction",
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
    id: "why-us",
    title: "We make change happen.",
    statistics: [
      {
        stat: "5,000 Tons",
        description: "Waste diverted from landfills",
        isRollingNumber: true,
      },
      {
        stat: "500,000 kg",
        description: "Industrial ash transformed into products",
        isRollingNumber: true,
      },
      {
        stat: "Zero-Waste",
        description: "communities supported",
      },
    ],
  },
  faqSection: {
    id: "faq",
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "What types of waste do you manage?",
        answer:
          "We manage all types of non-hazardous solid waste including industrial waste, recyclables, and organic waste.",
      },
      {
        question: "How do you help businesses reduce waste?",
        answer:
          "Our waste audits identify inefficiencies and recommend strategies to minimize waste generation and maximize recycling.",
      },
      {
        question: "Do you offer custom waste management plans?",
        answer:
          "Yes, we provide tailored waste management solutions to meet the specific needs of your business or industry. We assess your requirements and design a plan that maximizes efficiency and sustainability.",
      },
      {
        question: "How do your waste audits work?",
        answer:
          "Our waste audits analyze your current waste disposal practices to identify areas for improvement. We provide actionable recommendations to reduce waste, enhance recycling, and lower overall costs.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We cater to a wide range of industries including manufacturing, construction, retail, hospitality, and more. If you're unsure, contact us and we'll discuss how we can support your business.",
      },
      {
        question: "Can you help us achieve zero waste?",
        answer:
          "Absolutely. Our zero-waste consulting services guide you through the process of minimizing waste generation and increasing recycling to reach your sustainability goals.",
      },
      {
        question:
          "Are your services compliant with local and national regulations?",
        answer:
          "Yes, we ensure that all our waste management practices comply with local, state, and federal regulations, so you can be confident in staying fully compliant while reducing environmental impact.",
      },
    ],
  },
  contactSection: {
    id: "contact",
    contactMethodsTitle: "Contact Us Directly",
    enableForm: false,

    title: "Or send us a message",
    fields: [
      {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
      },
      {
        id: "message",
        label: "Message",
        type: "textarea",
        placeholder: "Enter your message",
      },
    ],
    contactMethods: [
      {
        name: "Email",
        value: "help@fsws.in",
        icon: IoMail,
        href: "mailto:help@fsws.in",
      },
      {
        name: "Phone",
        value: "+91 90688 55443",
        icon: FaPhone,
        href: "tel:+919068855443",
      },
      {
        name:"Alternate Phone",
        value:"+91 74095 16090",
        href:"tel:+917409516090",
        icon: FaPhone,
      }
    ],
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} First Source Waste Solutions. All Rights Reserved.`,
  },
};
