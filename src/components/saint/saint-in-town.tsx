import { Box, Container, Grid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { churchImages } from "@/content/gallery";
import { parish } from "@/content/parish";

export function SaintInTown() {
  const { t } = useTranslation("saint");

  return (
    <Box
      as="section"
      bg="brand.solid"
      color="white"
      py={{ base: "16", md: "28" }}
      overflow="hidden"
      data-testid="saint-in-town"
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1.1fr 0.9fr" }}
          gap={{ base: "10", lg: "16" }}
          alignItems="center"
        >
          <Reveal>
            <Stack gap="8">
              <SectionHeading
                tone="light"
                eyebrow={t("town.eyebrow")}
                title={t("town.title")}
                lead={t("town.lead", {
                  arrival: parish.devoteesArrivalYear,
                  founded: parish.foundedYear,
                })}
              />
              <Box
                as="blockquote"
                borderLeftWidth="2px"
                borderColor="gold.200"
                pl="5"
              >
                <Text
                  fontFamily="heading"
                  fontStyle="italic"
                  fontSize={{ base: "xl", md: "2xl" }}
                  lineHeight="1.35"
                >
                  “{t("town.quote")}”
                </Text>
                <Text mt="3" fontSize="sm" color="whiteAlpha.800">
                  {t("town.quoteSource")}
                </Text>
              </Box>
            </Stack>
          </Reveal>
          <Reveal
            delay={1}
            position="relative"
            rounded="card"
            overflow="hidden"
            aspectRatio={4 / 3}
          >
            <Image
              src={churchImages.altar.src}
              alt={t("town.imageAlt")}
              fill
              sizes="(min-width: 992px) 40vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Reveal>
        </Grid>
      </Container>
    </Box>
  );
}
