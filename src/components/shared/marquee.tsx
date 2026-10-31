import { Box, HStack, Text } from "@chakra-ui/react";

type Props = {
  items: string[];
};

export function Marquee({ items }: Props) {
  const sequence = ["original", "copy"].flatMap((copy) =>
    items.map((item) => ({ id: `${copy}-${item}`, item })),
  );

  return (
    <Box
      bg="ink.solid"
      color="ink.contrast"
      overflow="hidden"
      py={{ base: "4", md: "5" }}
      aria-hidden="true"
      data-testid="marquee"
    >
      <HStack gap="0" w="max-content" animation="marquee 38s linear infinite">
        {sequence.map(({ id, item }) => (
          <HStack key={id} gap="0" flexShrink="0">
            <Text
              fontFamily="heading"
              fontStyle="italic"
              fontSize={{ base: "xl", md: "3xl" }}
              px={{ base: "5", md: "8" }}
              whiteSpace="nowrap"
            >
              {item}
            </Text>
            <Text color="accent.onDark" fontSize={{ base: "lg", md: "2xl" }}>
              ✦
            </Text>
          </HStack>
        ))}
      </HStack>
    </Box>
  );
}
