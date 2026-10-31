import { Box, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export function SaintTimeline() {
  const { t } = useTranslation("saint");
  const entries = t("timeline.items", {
    returnObjects: true,
  }) as TimelineEntry[];

  return (
    <Box
      as="section"
      py={{ base: "16", md: "28" }}
      data-testid="saint-timeline"
    >
      <Container maxW="page" px={{ base: "5", md: "8" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "0.8fr 1.2fr" }}
          gap={{ base: "10", lg: "20" }}
        >
          <Reveal
            position={{ lg: "sticky" }}
            top={{ lg: "28" }}
            alignSelf="start"
          >
            <SectionHeading
              eyebrow={t("timeline.eyebrow")}
              title={t("timeline.title")}
              lead={t("timeline.lead")}
            />
          </Reveal>
          <Stack
            as="ol"
            gap="0"
            listStyleType="none"
            m="0"
            p="0"
            position="relative"
          >
            <Box
              aria-hidden="true"
              position="absolute"
              left={{ base: "1.15rem", md: "1.4rem" }}
              top="3"
              bottom="3"
              w="1px"
              bg="line.hairline"
            />
            {entries.map((entry, index) => (
              <Reveal
                as="li"
                key={`${entry.year}-${entry.title}`}
                delay={index % 3}
                position="relative"
                pl={{ base: "12", md: "16" }}
                pb={{ base: "8", md: "10" }}
                data-testid="saint-timeline-item"
              >
                <Box
                  position="absolute"
                  left="0"
                  top="0"
                  boxSize={{ base: "9", md: "11" }}
                  rounded="full"
                  bg={
                    index === entries.length - 1 ? "brand.solid" : "paper.card"
                  }
                  borderWidth="1px"
                  borderColor={
                    index === entries.length - 1
                      ? "brand.solid"
                      : "line.hairline"
                  }
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color={index === entries.length - 1 ? "white" : "brand.fg"}
                  fontSize="xs"
                  fontWeight="800"
                >
                  {String(index + 1).padStart(2, "0")}
                </Box>
                <Text textStyle="eyebrow" color="brand.fg">
                  {entry.year}
                </Text>
                <Heading
                  as="h3"
                  fontFamily="heading"
                  fontWeight="600"
                  fontSize={{ base: "xl", md: "2xl" }}
                  letterSpacing="-0.02em"
                  mt="1.5"
                >
                  {entry.title}
                </Heading>
                <Text color="ink.muted" mt="2" maxW="prose">
                  {entry.description}
                </Text>
              </Reveal>
            ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}
