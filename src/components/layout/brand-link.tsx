import { Box, HStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useTranslation } from "next-i18next";
import { BrandMark } from "@/components/layout/brand-mark";

type Props = {
  tone?: "dark" | "light";
};

export function BrandLink({ tone = "dark" }: Props) {
  const { t } = useTranslation("common");
  const color = tone === "dark" ? "ink.fg" : "white";

  return (
    <Link
      asChild
      color={color}
      _hover={{ textDecoration: "none" }}
      aria-label={t("brand.homeLabel")}
      data-testid="brand-link"
    >
      <NextLink href="/">
        <HStack gap="3">
          <BrandMark
            boxSize={{ base: "9", md: "10" }}
            color={tone === "dark" ? "brand.solid" : "accent.onDark"}
          />
          <Box lineHeight="1">
            <Text
              fontFamily="heading"
              fontWeight="600"
              fontSize={{ base: "md", md: "lg" }}
              letterSpacing="-0.02em"
            >
              {t("brand.name")}
            </Text>
            <Text textStyle="eyebrow" fontSize="2xs" mt="1" opacity="0.7">
              {t("brand.place")}
            </Text>
          </Box>
        </HStack>
      </NextLink>
    </Link>
  );
}
