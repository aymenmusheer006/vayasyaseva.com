import { Flex, useColorModeValue } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImpactSection from "./components/Impact";
import ServicesSection from "./components/Services";
import { content } from "./content/content";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  const bg = useColorModeValue("brand.50", "brand.950");
  return (
    // Future plans for router
    <Flex
      scrollBehavior={"smooth"}
      bg={bg}
      direction={"column"}
      align={"center"}
    >
      <Navbar />
      <Hero id={content.heroSection.id} />
      <ServicesSection id={content.servicesSection.id} />
      <ImpactSection id={content.impactSection.id} />
      <Contact id={content.contactSection.id} />
      <Footer />
    </Flex>
  );
}
