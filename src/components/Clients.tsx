import { Box, Flex, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { content } from "../content/content";

export const ClientsSection = ({ id }: { id: string }) => {
  const { clientsSection } = content; // Destructuring the clientsSection from content
  const headingColor = "brand.600";

  return (
		<Box
			as="section"
			py={16}
			px={8}
			id={id}
			maxW="container.xl"
			w="full"
		>
			{/* Section title */}
			<Heading as="h2" size="xl" mb={8} color={headingColor}>
			{clientsSection.title}
			</Heading>
			{/* Statistics grid */}
			<Grid
			templateColumns={{
				base: "repeat(2, 1fr)",
				lg: "repeat(4, 1fr)",
			}}
			gap={8}
			justifyContent="space-evenly"
			alignItems="center"
			>
			{clientsSection.clients.map((client) => (
				<GridItem key={client.name} as={Flex} justify="center">
				<Image src={client.image} alt={client.name} boxSize="100px" />
				</GridItem>
			))}
			</Grid>
		</Box>
  );
};
