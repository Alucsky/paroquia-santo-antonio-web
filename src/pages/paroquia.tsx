import {
  Box,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { OfficeHours } from "@/components/schedule/office-hours";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Seo } from "@/components/shared/seo";
import { VisitSection } from "@/components/shared/visit-section";
import { communities } from "@/content/communities";
import { churchImages } from "@/content/gallery";
import { ministries } from "@/content/ministries";
import { parish } from "@/content/parish";
import { withTranslations } from "@/lib/static-translations";
import { yearsSince } from "@/utils/years-since";

type Milestone = {
  year: string;
  text: string;
};

export default function ParishPage() {
  const { t } = useTranslation("parish");
  const milestones = t("history.milestones", {
    returnObjects: true,
  }) as Milestone[];

  const stats = [
    { key: "years", value: yearsSince(parish.foundedYear) },
    { key: "communities", value: communities.length },
    { key: "ministries", value: ministries.length },
  ];

  return (
    <>
      <Seo
        title={t("seo.title")}
        description={t("seo.description")}
        image={churchImages.nave.src}
      />
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        lead={t("hero.lead")}
      >
        <SimpleGrid columns={3} gap={{ base: "3", md: "6" }} maxW="3xl">
          {stats.map((stat) => (
            <Box
              key={stat.key}
              borderTopWidth="2px"
              borderColor="line.strong"
              pt="3"
              data-testid="parish-stat"
            >
              <Text
                fontFamily="heading"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="500"
                lineHeight="1"
                color="brand.solid"
                letterSpacing="-0.04em"
              >
                {stat.value}
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                color="ink.muted"
                mt="1"
              >
                {t(`stats.${stat.key}`)}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </PageHero>

      <Box as="section" py={{ base: "16", md: "24" }}>
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: "10", lg: "16" }}
            alignItems="center"
          >
            <Reveal
              position="relative"
              rounded="card"
              overflow="hidden"
              aspectRatio={{ base: 4 / 5, md: 4 / 5 }}
              maxH={{ base: "28rem", lg: "none" }}
            >
              <Image
                src={churchImages.nave.src}
                alt={t("history.imageAlt")}
                fill
                sizes="(min-width: 992px) 45vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </Reveal>
            <Reveal delay={1}>
              <Stack gap="8">
                <SectionHeading
                  eyebrow={t("history.eyebrow")}
                  title={t("history.title")}
                  lead={t("history.lead")}
                />
                <Stack
                  as="ol"
                  gap="0"
                  listStyleType="none"
                  p="0"
                  m="0"
                  borderTopWidth="1px"
                  borderColor="line.strong"
                >
                  {milestones.map((milestone) => (
                    <Grid
                      as="li"
                      key={milestone.year}
                      templateColumns="5rem 1fr"
                      gap="4"
                      py="4"
                      borderBottomWidth="1px"
                      borderColor="line.hairline"
                      data-testid="parish-milestone"
                    >
                      <Text
                        fontFamily="heading"
                        fontSize="2xl"
                        fontWeight="600"
                        color="brand.fg"
                        lineHeight="1.1"
                      >
                        {milestone.year}
                      </Text>
                      <Text color="ink.muted">{milestone.text}</Text>
                    </Grid>
                  ))}
                </Stack>
                <Text fontSize="xs" color="ink.subtle">
                  {t("history.source")}
                </Text>
              </Stack>
            </Reveal>
          </Grid>
        </Container>
      </Box>

      <Box
        as="section"
        py={{ base: "16", md: "24" }}
        bg="ink.solid"
        color="white"
      >
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ base: "8", md: "12" }}
            alignItems="center"
          >
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow={t("matrix.eyebrow")}
                title={t("matrix.title")}
                lead={t("matrix.lead")}
              />
            </Reveal>
            <Grid templateColumns="1fr 1fr" gap="3">
              {[churchImages.celebration, churchImages.feast].map(
                (image, index) => (
                  <Reveal
                    key={image.src}
                    delay={index}
                    position="relative"
                    rounded="card"
                    overflow="hidden"
                    aspectRatio={3 / 4}
                  >
                    <Image
                      src={image.src}
                      alt={t(`matrix.images.${index}`)}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Reveal>
                ),
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box as="section" py={{ base: "16", md: "24" }}>
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <Reveal>
            <SectionHeading
              eyebrow={t("office.eyebrow")}
              title={t("office.title")}
              lead={t("office.lead")}
              mb={{ base: "8", md: "12" }}
            />
          </Reveal>
          <Reveal delay={1}>
            <OfficeHours />
          </Reveal>
          <Reveal delay={2} mt="8">
            <Stack
              direction={{ base: "column", md: "row" }}
              gap="4"
              align={{ md: "center" }}
              bg="paper.subtle"
              rounded="card"
              p={{ base: "5", md: "7" }}
            >
              <Box
                bg="white"
                rounded="full"
                p="2"
                flexShrink="0"
                alignSelf="flex-start"
              >
                <Image
                  src="/images/marca/brasao-diocese.png"
                  alt=""
                  width={56}
                  height={55}
                />
              </Box>
              <Box>
                <Heading
                  as="h3"
                  fontFamily="heading"
                  fontWeight="600"
                  fontSize="xl"
                >
                  {parish.diocese}
                </Heading>
                <Text color="ink.muted" fontSize="sm">
                  {t("diocese.description")}
                </Text>
              </Box>
            </Stack>
          </Reveal>
        </Container>
      </Box>

      <VisitSection />
    </>
  );
}

export const getStaticProps = withTranslations(["parish"]);
