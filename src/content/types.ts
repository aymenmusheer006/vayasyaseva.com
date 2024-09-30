export interface NavigationItem {
  name: string;
  href: string; 
  icon: React.ElementType;
}

export interface Header {
  logo: string;
  navigation: NavigationItem[];
  contactButton: string;
}

export interface HeroSection {
  id: string;
  headline: string;
  subheading: string;
  ctaButton: {
    label: string;
    href: string;
  };
}

export interface AboutSection {
  id: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

export interface ServicesSection {
  id: string;
  title: string;
  cards: ServiceCard[];
}

export interface Statistic {
  stat: string;
  description: string;
  isRollingNumber?: boolean;
  image?: string;
}

export interface ImpactSection {
  id: string;
  title: string;
  statistics: Statistic[];
}

export interface FAQSection {
  id: string;
  title: string;
  questions: FAQQuestion[];
}

export interface FAQQuestion {
  question: string;
  answer: string;
}

export interface ContactSection {
  id: string;
  title: string;
  contactMethodsTitle: string;
  fields: ContactField[];
  // Directly contact without form
  contactMethods: ContactMethod[];
}

export interface ContactField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

export interface ContactMethod {
  name: string;
  value: string;
  icon: React.ElementType;
  href: string;
}

export interface Footer {
  copyright: string;
}

export interface WebsiteContent {
  header: Header;
  aboutSection: AboutSection;
  heroSection: HeroSection;
  servicesSection: ServicesSection;
  impactSection: ImpactSection;
  faqSection: FAQSection;
  contactSection: ContactSection;
  footer: Footer;
}
