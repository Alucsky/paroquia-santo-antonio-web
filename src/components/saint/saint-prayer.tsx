import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { BrandMark } from "@/components/layout/brand-mark";
import { Reveal } from "@/components/shared/reveal";

export function SaintPrayer() {
  const { t } = useTranslation("saint");
  const lines = t("prayer.lines", { returnObjects: true }) as string[];

  return (
    <Box as="section" py={{ base: "16", md: "28" }} data-testid="saint-prayer">
      <Container maxW="3xl" px={{ base: "5", md: "8" }}>
        <Reveal>
          <Stack
            gap="6"
            align="center"
            textAlign="center"
            bg="paper.card"
            borderWidth="1px"
            borderColor="line.hairline"
            rounded="3xl"
            px={{ base: "6", md: "14" }}
            py={{ base: "10", md: "16" }}
          >
            <BrandMark boxSize="10" />
            <Text textStyle="eyebrow" color="brand.fg">
              {t("prayer.eyebrow")}
            </Text>
            <Heading
              as="h2"
              textStyle="display"
              fontWeight="500"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              {t("prayer.title")}
            </Heading>
            <Stack
              gap="3"
              fontFamily="heading"
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="1.6"
              color="ink.muted"
            >
              {lines.map((line) => (
                <Text key={line}>{line}</Text>
              ))}
            </Stack>
            <Text
              fontFamily="heading"
              fontStyle="italic"
              fontSize={{ base: "xl", md: "2xl" }}
              color="brand.fg"
            >
              {t("prayer.closing")}
            </Text>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}
