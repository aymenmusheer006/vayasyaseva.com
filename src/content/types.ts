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
  ctaButton: string;
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

export interface Footer {
  copyright: string;
}

export interface WebsiteContent {
  header: Header;
  heroSection: HeroSection;
  servicesSection: ServicesSection;
  impactSection: ImpactSection;
  footer: Footer;
}
