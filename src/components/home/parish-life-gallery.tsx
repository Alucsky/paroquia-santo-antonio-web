import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { parishLifeGallery } from "@/content/gallery";

const layout = [
  { colSpan: { base: 2, md: 2 }, rowSpan: { base: 1, md: 2 } },
  { colSpan: { base: 1, md: 1 }, rowSpan: { base: 1, md: 1 } },
  { colSpan: { base: 1, md: 1 }, rowSpan: { base: 1, md: 1 } },
  { colSpan: { base: 1, md: 1 }, rowSpan: { base: 1, md: 1 } },
  { colSpan: { base: 1, md: 1 }, rowSpan: { base: 1, md: 1 } },
  { colSpan: { base: 2, md: 1 }, rowSpan: { base: 1, md: 1 } },
];

export function ParishLifeGallery() {
  const { t } = useTranslation("home");

  return (
    <Box
      as="section"
      py={{ base: "16", md: "28" }}
      bg="paper.subtle"
      data-testid="parish-life-gallery"
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Reveal>
          <SectionHeading
            eyebrow={t("gallery.eyebrow")}
            title={t("gallery.title")}
            lead={t("gallery.lead")}
            mb={{ base: "10", md: "14" }}
          />
        </Reveal>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          autoRows={{ base: "9rem", sm: "12rem", md: "14rem" }}
          gap={{ base: "2", md: "4" }}
        >
          {parishLifeGallery.map((image, index) => (
            <GridItem key={image.key} {...layout[index]}>
              <Reveal delay={index} h="full">
                <Box
                  as="figure"
                  position="relative"
                  h="full"
                  rounded={{ base: "lg", md: "card" }}
                  overflow="hidden"
                  role="group"
                  m="0"
                >
                  <Image
                    src={image.src}
                    alt={t(`gallery.items.${image.key}`)}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.8s cubic-bezier(0.2,0.7,0.2,1)",
                    }}
                  />
                  <Box
                    as="figcaption"
                    position="absolute"
                    insetX="0"
                    bottom="0"
                    p={{ base: "2.5", md: "4" }}
                    bg="linear-gradient(0deg, rgba(26,21,17,0.75), rgba(26,21,17,0))"
                    color="white"
                  >
                    <Text
                      fontSize={{ base: "xs", md: "sm" }}
                      fontWeight="600"
                      lineClamp={1}
                    >
                      {t(`gallery.items.${image.key}`)}
                    </Text>
                  </Box>
                </Box>
              </Reveal>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
