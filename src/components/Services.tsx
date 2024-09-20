import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { content } from "../content/content";

export default function ServicesSection({ id }: { id: string }) {
  const servicesSection = content.servicesSection;
  return (
    <Box as="section" py={16} px={8} id={id}>
      {/* Section Title */}
      <Heading as="h2" size="xl" mb={8}>
        {servicesSection.title}
      </Heading>

      {/* Cards Grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={1}>
        {servicesSection.cards.map((card, index) => (
          <SingleService
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

const SingleService = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  const bg = useColorModeValue("brand.100", "brand.900");

  return (
    <VStack
      p={4}
      borderRadius="xl"
      borderWidth={1}
      borderColor="brand.200"
      spacing={4}
      bg={bg}
      position="relative"
      bgImage={image}
      bgSize="cover"
      bgPosition="center"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgGradient: "linear(to-b, transparent, brand.50)",
        zIndex: 1,
        borderRadius: "xl",
      }}
    >
      {/* Content Layer */}
      <VStack position="relative" zIndex={2} spacing={4} minH={300} justify={"end"}>
        <Heading as="h3" size="md" color="brand.500">
          {title}
        </Heading>
        <Text fontSize="md" color="gray.600">
          {description}
        </Text>
      </VStack>
    </VStack>
  );
};
