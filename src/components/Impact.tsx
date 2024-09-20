import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { content } from "../content/content";

export default function ImpactSection({ id }: { id: string }) {
  const impactSection = content.impactSection;
  return (
    <Box as="section" py={16} px={8} textAlign="center" id={id}>
      {/* Section title */}
      <Heading as="h2" size="xl" mb={8}>
        {impactSection.title}
      </Heading>

      {/* Statistics grid */}
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={1}>
        {impactSection.statistics.map((statItem, index) => (
          <SingleStat
            key={index}
            stat={statItem.stat}
            description={statItem.description}
            image={statItem.image}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

const SingleStat = ({
  stat,
  description,
  image,
}: {
  stat: string;
  description: string;
  image?: string;
}) => {
  return (
    <VStack
      spacing={4}
      borderWidth={1}
      borderRadius="lg"
      w={"full"}
      borderColor={"brand.200"}
      color="white"
      backgroundImage={image}
      minH={200}
      justify="center"
    >
      <Heading as="h3" size="xl">
        {stat}
      </Heading>
      <Text fontSize="lg" color="brand.100">
        {description}
      </Text>
    </VStack>
  );
};
