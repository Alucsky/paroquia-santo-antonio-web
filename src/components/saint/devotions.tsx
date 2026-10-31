import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const devotionKeys = ["novena", "bread", "lost", "marriage"] as const;

export function Devotions() {
  const { t } = useTranslation("saint");

  return (
    <Box as="section" py={{ base: "16", md: "28" }} data-testid="devotions">
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Reveal>
          <SectionHeading
            eyebrow={t("devotions.eyebrow")}
            title={t("devotions.title")}
            lead={t("devotions.lead")}
            mb={{ base: "10", md: "14" }}
          />
        </Reveal>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="0"
          borderTopWidth="1px"
          borderColor="line.strong"
        >
          {devotionKeys.map((key, index) => (
            <Reveal
              key={key}
              delay={index}
              py={{ base: "6", md: "10" }}
              pr={{ md: index % 2 === 0 ? "10" : "0" }}
              pl={{ md: index % 2 === 1 ? "10" : "0" }}
              borderBottomWidth="1px"
              borderLeftWidth={{ base: "0", md: index % 2 === 1 ? "1px" : "0" }}
              borderColor="line.hairline"
              data-testid="devotions-item"
            >
              <Text
                fontFamily="heading"
                fontSize={{ base: "4xl", md: "5xl" }}
                color="brand.solid"
                lineHeight="1"
                fontWeight="500"
              >
                {String(index + 1).padStart(2, "0")}
              </Text>
              <Heading
                as="h3"
                fontFamily="heading"
                fontWeight="600"
                fontSize={{ base: "2xl", md: "3xl" }}
                letterSpacing="-0.02em"
                mt="4"
              >
                {t(`devotions.items.${key}.title`)}
              </Heading>
              <Text color="ink.muted" mt="3" maxW="prose">
                {t(`devotions.items.${key}.description`)}
              </Text>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
