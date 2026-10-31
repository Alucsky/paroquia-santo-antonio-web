import { Heading, Stack, type StackProps, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = Omit<StackProps, "title"> & {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  as = "h2",
  ...rest
}: Props) {
  return (
    <Stack gap="4" maxW="3xl" {...rest}>
      <Text
        textStyle="eyebrow"
        color={tone === "dark" ? "brand.fg" : "accent.onDark"}
      >
        {eyebrow}
      </Text>
      <Heading
        as={as}
        textStyle="display"
        fontSize={
          as === "h1"
            ? { base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }
            : { base: "3xl", sm: "4xl", md: "5xl" }
        }
        color={tone === "dark" ? "ink.fg" : "white"}
        textWrap="balance"
      >
        {title}
      </Heading>
      {lead ? (
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color={tone === "dark" ? "ink.muted" : "whiteAlpha.800"}
          maxW="2xl"
          textWrap="pretty"
        >
          {lead}
        </Text>
      ) : null}
    </Stack>
  );
}
