import {
  Box,
  Container,
  Grid,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { LuMessageCircle } from "react-icons/lu";
import { HolyCard } from "@/components/shared/holy-card";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { Seo } from "@/components/shared/seo";
import { ministries, ministryGroups } from "@/content/ministries";
import { parish } from "@/content/parish";
import { withTranslations } from "@/lib/static-translations";
import { toWhatsappLink } from "@/utils/contact-links";

export default function MinistriesPage() {
  const { t } = useTranslation("ministries");

  return (
    <>
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title", { count: ministries.length })}
        lead={t("hero.lead")}
      />
      {ministryGroups.map((group, groupIndex) => {
        const items = ministries.filter((ministry) => ministry.group === group);
        return (
          <Box
            as="section"
            key={group}
            py={{ base: "12", md: "20" }}
            bg={groupIndex % 2 === 1 ? "paper.subtle" : "paper.canvas"}
            data-testid={`ministry-group-${group}`}
          >
            <Container maxW="page" px={{ base: "5", md: "8" }}>
              <Grid
                templateColumns={{ base: "1fr", lg: "0.8fr 2fr" }}
                gap={{ base: "8", lg: "16" }}
              >
                <Reveal>
                  <Stack gap="3" position={{ lg: "sticky" }} top={{ lg: "28" }}>
                    <Text
                      fontFamily="heading"
                      fontSize="5xl"
                      lineHeight="1"
                      color="brand.solid"
                      fontWeight="500"
                    >
                      {String(groupIndex + 1).padStart(2, "0")}
                    </Text>
                    <Heading
                      as="h2"
                      textStyle="display"
                      fontWeight="500"
                      fontSize={{ base: "3xl", md: "4xl" }}
                    >
                      {t(`groups.${group}.title`)}
                    </Heading>
                    <Text color="ink.muted">
                      {t(`groups.${group}.description`)}
                    </Text>
                  </Stack>
                </Reveal>
                <SimpleGrid
                  columns={{ base: 1, sm: 2 }}
                  gap={{ base: "7", md: "8" }}
                  px={{ base: "2", md: "0" }}
                >
                  {items.map((ministry, index) => (
                    <Reveal key={ministry.slug} delay={index}>
                      <HolyCard
                        index={index + groupIndex}
                        title={t(`items.${ministry.slug}.title`)}
                        description={t(`items.${ministry.slug}.description`)}
                        data-testid="ministry-card"
                      />
                    </Reveal>
                  ))}
                </SimpleGrid>
              </Grid>
            </Container>
          </Box>
        );
      })}
      <Box as="section" py={{ base: "16", md: "24" }}>
        <Container maxW="3xl" px={{ base: "5", md: "8" }} textAlign="center">
          <Reveal>
            <Stack gap="5" align="center">
              <Heading
                as="h2"
                textStyle="display"
                fontWeight="500"
                fontSize={{ base: "3xl", md: "5xl" }}
                textWrap="balance"
              >
                {t("join.title")}
              </Heading>
              <Text color="ink.muted" fontSize={{ base: "md", md: "lg" }}>
                {t("join.description")}
              </Text>
              <Link
                href={toWhatsappLink(
                  parish.contact.whatsapp,
                  t("join.whatsappMessage"),
                )}
                target="_blank"
                rel="noopener noreferrer"
                display="inline-flex"
                alignItems="center"
                gap="2"
                bg="brand.solid"
                color="white"
                px="7"
                h="14"
                rounded="full"
                fontWeight="700"
                _hover={{ bg: "brand.emphasized", textDecoration: "none" }}
              >
                <LuMessageCircle aria-hidden="true" />
                {t("join.action")}
              </Link>
            </Stack>
          </Reveal>
        </Container>
      </Box>
    </>
  );
}

export const getStaticProps = withTranslations(["ministries"]);
