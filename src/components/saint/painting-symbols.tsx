import { Box, Container, Grid, SimpleGrid } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { HolyCard } from "@/components/shared/holy-card";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { saintPortrait } from "@/content/gallery";

const symbols = [
  { key: "child", zoom: "560%", focus: "14% 9%" },
  { key: "book", zoom: "420%", focus: "4% 86%" },
  { key: "lily", zoom: "520%", focus: "24% 95%" },
  { key: "habit", zoom: "300%", focus: "52% 42%" },
] as const;

export function PaintingSymbols() {
  const { t } = useTranslation("saint");

  return (
    <Box
      as="section"
      bg="paper.subtle"
      py={{ base: "16", md: "28" }}
      data-testid="painting-symbols"
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1.4fr" }}
          gap={{ base: "10", lg: "16" }}
          alignItems="start"
        >
          <Reveal>
            <SectionHeading
              eyebrow={t("symbols.eyebrow")}
              title={t("symbols.title")}
              lead={t("symbols.lead")}
            />
          </Reveal>
          <SimpleGrid
            columns={{ base: 1, sm: 2 }}
            gap={{ base: "8", md: "10" }}
            px={{ base: "2", md: "0" }}
          >
            {symbols.map(({ key, zoom, focus }, index) => (
              <Reveal key={key} delay={index}>
                <HolyCard
                  index={index}
                  eyebrow={String(index + 1).padStart(2, "0")}
                  media={
                    <Box
                      position="absolute"
                      inset="0"
                      backgroundImage={`url(${saintPortrait.src})`}
                      backgroundSize={zoom}
                      backgroundPosition={focus}
                      backgroundRepeat="no-repeat"
                      role="img"
                      aria-label={t(`symbols.items.${key}.title`)}
                    />
                  }
                  title={t(`symbols.items.${key}.title`)}
                  description={t(`symbols.items.${key}.description`)}
                  data-testid="painting-symbols-card"
                />
              </Reveal>
            ))}
          </SimpleGrid>
        </Grid>
      </Container>
    </Box>
  );
}
