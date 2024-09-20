interface NavigationItem {
  label: string;
  link: string;
}

interface Header {
  logo: string;
  navigation: NavigationItem[];
  contactButton: string;
}

interface HeroSection {
  headline: string;
  subheading: string;
  ctaButton: string;
}

interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

interface ServicesSection {
  title: string;
  cards: ServiceCard[];
}

interface Statistic {
  stat: string;
  description: string;
  image?: string;
}

interface ImpactSection {
  title: string;
  statistics: Statistic[];
}

interface Footer {
  copyright: string;
}

export interface WebsiteContent {
  header: Header;
  heroSection: HeroSection;
  servicesSection: ServicesSection;
  impactSection: ImpactSection;
  footer: Footer;
}
