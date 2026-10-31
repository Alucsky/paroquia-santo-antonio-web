import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import {
  LuCalendarHeart,
  LuInfo,
  LuInstagram,
  LuMessageCircle,
  LuSparkles,
} from "react-icons/lu";
import { BrandMark } from "@/components/layout/brand-mark";
import { OfficeHours } from "@/components/schedule/office-hours";
import { UpcomingCelebrations } from "@/components/schedule/upcoming-celebrations";
import { WeeklySchedule } from "@/components/schedule/weekly-schedule";
import { InfoCard } from "@/components/shared/info-card";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Seo } from "@/components/shared/seo";
import { VisitSection } from "@/components/shared/visit-section";
import { celebrations } from "@/content/celebrations";
import { parish } from "@/content/parish";
import { toIntlLocale } from "@/lib/i18n";
import { withTranslations } from "@/lib/static-translations";
import { toWhatsappLink } from "@/utils/contact-links";
import { formatTime } from "@/utils/upcoming-celebrations";

export default function SchedulePage() {
  const { t } = useTranslation("schedule");
  const { t: tCommon } = useTranslation("common");
  const { locale } = useRouter();
  const intlLocale = toIntlLocale(locale);
  const monthly = celebrations.filter(
    (item) => item.recurrence.type !== "weekly",
  );

  return (
    <>
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        lead={t("hero.lead")}
      >
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="5">
          <Box
            bg="paper.card"
            borderWidth="1px"
            borderColor="line.hairline"
            rounded="card"
            p={{ base: "5", md: "7" }}
          >
            <Text textStyle="eyebrow" color="brand.fg" mb="2">
              {t("upcoming.title")}
            </Text>
            <UpcomingCelebrations limit={4} />
          </Box>
          <Stack
            gap="6"
            justify="space-between"
            bg="ink.solid"
            color="ink.contrast"
            rounded="card"
            p={{ base: "6", md: "8" }}
            position="relative"
            overflow="hidden"
            data-testid="schedule-notice"
          >
            <BrandMark
              position="absolute"
              right={{ base: "-8", md: "-6" }}
              bottom={{ base: "-6", md: "-4" }}
              boxSize={{ base: "40", md: "56" }}
              color="accent.onDark"
              opacity="0.07"
              pointerEvents="none"
            />
            <HStack gap="2.5" color="accent.onDark">
              <LuInfo size="18" aria-hidden="true" />
              <Text textStyle="eyebrow">{t("notice.eyebrow")}</Text>
            </HStack>
            <Stack gap="3" position="relative">
              <Text
                fontFamily="heading"
                fontSize={{ base: "2xl", md: "3xl" }}
                lineHeight="1.15"
                letterSpacing="-0.01em"
                textWrap="balance"
              >
                {t("notice.title")}
              </Text>
              <Text color="whiteAlpha.700" textWrap="pretty">
                {t("notice.description", {
                  instagram: parish.social.instagramHandle,
                })}
              </Text>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              flexWrap="wrap"
              gap="3"
              position="relative"
            >
              <Button asChild variant="light" size="md">
                <a
                  href={parish.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuInstagram aria-hidden="true" />
                  {t("notice.instagram")}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="md"
                color="white"
                borderColor="whiteAlpha.400"
                _hover={{ bg: "whiteAlpha.100" }}
              >
                <a
                  href={toWhatsappLink(parish.contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LuMessageCircle aria-hidden="true" />
                  {t("notice.whatsapp")}
                </a>
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </PageHero>

      <Box as="section" py={{ base: "16", md: "24" }}>
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <Reveal>
            <SectionHeading
              eyebrow={t("weekly.eyebrow")}
              title={t("weekly.title")}
              mb={{ base: "8", md: "12" }}
            />
          </Reveal>
          <Reveal delay={1}>
            <WeeklySchedule />
          </Reveal>
        </Container>
      </Box>

      <Box as="section" pb={{ base: "16", md: "24" }}>
        <Container maxW="page" px={{ base: "5", md: "8" }}>
          <Reveal>
            <SectionHeading
              eyebrow={t("monthly.eyebrow")}
              title={t("monthly.title")}
              mb={{ base: "8", md: "12" }}
            />
          </Reveal>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "6", md: "8" }}>
            {monthly.map((item, index) => (
              <Reveal key={item.id} delay={index}>
                <InfoCard
                  index={index}
                  icon={
                    item.kind === "adoration" ? LuSparkles : LuCalendarHeart
                  }
                  eyebrow={t(`monthly.items.${item.id}.when`)}
                  title={tCommon(`celebrations.${item.id}.title`)}
                  data-testid="monthly-celebration"
                >
                  <Text
                    fontFamily="heading"
                    fontSize="3xl"
                    fontWeight="600"
                    lineHeight="1"
                  >
                    {formatTime(item.time, intlLocale)}
                  </Text>
                  <Text color="ink.muted" fontSize="sm">
                    {t(`monthly.items.${item.id}.description`)}
                  </Text>
                </InfoCard>
              </Reveal>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box as="section" py={{ base: "16", md: "24" }} bg="paper.subtle">
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
        </Container>
      </Box>

      <VisitSection />
    </>
  );
}

export const getStaticProps = withTranslations(["schedule"]);
