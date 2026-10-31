import { Box, type BoxProps, Heading, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

const TILTS = [-2.4, 1.8, -1.2, 2.2, -1.8, 1.2];

type Props = Omit<BoxProps, "title"> & {
  index?: number;
  media?: ReactNode;
  mediaSize?: "sm" | "md";
  eyebrow?: string;
  title: ReactNode;
  titleAs?: "h2" | "h3";
  description?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  tilt?: boolean;
};

export function tiltFor(index: number): number {
  return TILTS[index % TILTS.length];
}

export function HolyCard({
  index = 0,
  media,
  mediaSize = "md",
  eyebrow,
  title,
  titleAs = "h3",
  description,
  footer,
  children,
  tilt = true,
  ...rest
}: Props) {
  const angle = tilt ? tiltFor(index) : 0;
  const mediaDimensions =
    mediaSize === "md"
      ? {
          w: { base: "6.5rem", md: "7.5rem" },
          h: { base: "8rem", md: "9.5rem" },
        }
      : { w: "4.5rem", h: "5.5rem" };

  return (
    <Box
      position="relative"
      h="full"
      bg="paper.holy"
      p="2.5"
      transform={{
        base: `rotate(${angle * 0.5}deg)`,
        md: `rotate(${angle}deg)`,
      }}
      boxShadow="0 18px 30px -18px rgba(26, 21, 17, 0.45), 0 2px 4px rgba(26, 21, 17, 0.08)"
      transition="transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.35s ease"
      _hover={{
        transform: "rotate(0deg) translateY(-6px)",
        boxShadow:
          "0 28px 40px -20px rgba(26, 21, 17, 0.5), 0 2px 4px rgba(26, 21, 17, 0.08)",
      }}
      _focusWithin={{ transform: "rotate(0deg) translateY(-6px)" }}
      {...rest}
    >
      <Box borderWidth="1px" borderColor="frame.gold" p="1" h="full">
        <Stack
          borderWidth="1px"
          borderColor="frame.gold"
          px={{ base: "4", md: "5" }}
          pt={{ base: "5", md: "6" }}
          pb={{ base: "5", md: "6" }}
          gap="2.5"
          align="center"
          textAlign="center"
          position="relative"
          h="full"
        >
          <Text
            as="span"
            aria-hidden="true"
            position="absolute"
            top="1"
            left="2"
            fontSize="xs"
            color="frame.gold"
          >
            ✦
          </Text>
          <Text
            as="span"
            aria-hidden="true"
            position="absolute"
            top="1"
            right="2"
            fontSize="xs"
            color="frame.gold"
          >
            ✦
          </Text>
          {media ? (
            <Box
              position="relative"
              {...mediaDimensions}
              mb="1.5"
              borderWidth="2px"
              borderColor="frame.gold"
              borderTopRadius="full"
              borderBottomRadius="sm"
              overflow="hidden"
              flexShrink="0"
            >
              {media}
            </Box>
          ) : null}
          {eyebrow ? (
            <Text
              textStyle="eyebrow"
              fontSize="2xs"
              letterSpacing="0.2em"
              color="brand.fg"
            >
              — {eyebrow} —
            </Text>
          ) : null}
          <Heading
            as={titleAs}
            fontFamily="heading"
            fontStyle="italic"
            fontWeight="500"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="-0.02em"
            lineHeight="1.05"
            textWrap="balance"
            overflowWrap="anywhere"
          >
            {title}
          </Heading>
          {description ? (
            <Text
              fontSize="sm"
              color="ink.muted"
              lineHeight="1.5"
              textWrap="pretty"
            >
              {description}
            </Text>
          ) : null}
          {children}
          {footer ? (
            <Box mt="auto" pt="2" w="full">
              {footer}
            </Box>
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
}
