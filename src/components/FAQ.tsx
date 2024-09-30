import { Box, Heading, useColorModeValue, VStack } from "@chakra-ui/react";
import { content } from "../content/content";
import { FAQQuestion } from "../content/types";

export default function FAQSection({ id }: { id: string }) {
  const faqSection = content.faqSection;
  const headingColor = useColorModeValue("brand.600", "brand.100");

  return (
    <Box as="section" py={16} px={8} id={id} maxW="container.xl" w="full">
      {/* Section title */}
      <Heading as="h2" size="xl" mb={8} color={headingColor}>
        {faqSection.title}
      </Heading>

      {/* FAQ questions */}
      <VStack spacing={4} align="stretch">
        {faqSection.questions.map((q, index) => (
          <SingleFAQ key={index} question={q.question} answer={q.answer} />
        ))}
      </VStack>
    </Box>
  );
}

const SingleFAQ = ({ question, answer }: FAQQuestion) => {
  const headingColor = useColorModeValue("brand.800", "brand.100");

  return (
    <VStack align="stretch" spacing={2}>
      <Heading as="h3" size="md" color={headingColor}>
        {question}
      </Heading>
      <Box>{answer}</Box>
    </VStack>
  );
};
