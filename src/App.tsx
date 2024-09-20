import { Flex, useColorModeValue } from "@chakra-ui/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ImpactSection from "./components/Impact";
import ServicesSection from "./components/Services";

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
      <Hero id="hero" />
      <ServicesSection id="services" />
      <ImpactSection id="impact" />
    </Flex>
  );
}
