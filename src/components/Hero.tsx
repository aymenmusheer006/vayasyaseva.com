import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { content } from "../content/content";

export default function Hero({ id }: { id: string }) {
  const videoCoverGradient = useColorModeValue(
    "linear(to-b, brand.50, transparent, brand.50)",
    "linear(to-b, brand.950,transparent, brand.950)"
  );
  const textColor = useColorModeValue("brand.700", "brand.100");
  return (
    <Box
      position="relative"
      id={id}
      overflow="hidden"
      width={"100%"}
      color={textColor}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/assets/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <Box position="relative" py={32} bgGradient={videoCoverGradient} px={8} color={textColor}>
        <Heading as="h1" size="3xl" mb={4} py={2} px={4}>
          {content.heroSection.headline}
        </Heading>
        <Text fontSize="xl" mb={8}  py={2} px={4}>
          {content.heroSection.subheading}
        </Text>

        <Button size="lg">Get Started</Button>
      </Box>
    </Box>
  );
}
