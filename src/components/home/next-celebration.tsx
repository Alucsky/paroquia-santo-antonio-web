import { Box, HStack, Link, Skeleton, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { celebrations } from "@/content/celebrations";
import { useNow } from "@/hooks/use-now";
import { toIntlLocale } from "@/lib/i18n";
import {
  capitalizeFirst,
  formatCalendarDate,
  formatSpokenTime,
  formatWeekday,
  getUpcomingCelebrations,
  getWeekday,
  lowerFirst,
  type UpcomingCelebration,
} from "@/utils/upcoming-celebrations";

export function NextCelebration() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const intlLocale = toIntlLocale(locale);
  const now = useNow();
  const upcoming = now
    ? getUpcomingCelebrations(now, celebrations, { limit: 3 })
    : null;

  const dayLabel = (item: UpcomingCelebration) => {
    if (item.daysAhead === 0) return t("upcoming.today");
    if (item.daysAhead === 1) return t("upcoming.tomorrow");
    if (item.daysAhead < 7)
      return formatWeekday(getWeekday(item.date), intlLocale);
    return formatCalendarDate(item.date, intlLocale, {
      day: "numeric",
      month: "long",
    });
  };

  const [next, ...later] = upcoming ?? [];

  return (
    <Stack
      gap="4"
      color="white"
      borderLeftWidth="2px"
      borderColor="accent.onDark"
      pl={{ base: "5", md: "8" }}
      aria-live="polite"
      data-testid="next-celebration"
    >
      <HStack gap="2.5">
        <Box
          as="span"
          boxSize="2.5"
          rounded="full"
          bg="terracotta.300"
          animation="pulseDot 2s infinite"
          flexShrink="0"
        />
        <Text textStyle="eyebrow" color="accent.onDark">
          {t("upcoming.eyebrow")}
        </Text>
      </HStack>
      {next ? (
        <>
          <Text
            as="p"
            fontFamily="heading"
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            lineHeight="1.02"
            letterSpacing="-0.03em"
            data-testid="next-celebration-headline"
          >
            {capitalizeFirst(dayLabel(next))},
            <br />
            {t("upcoming.at")}{" "}
            <Text as="span" fontStyle="italic" color="accent.onDark">
              {formatSpokenTime(next.celebration.time, intlLocale)}
            </Text>
            .
          </Text>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.800"
            lineHeight="1.6"
            data-testid="next-celebration-details"
          >
            {t(`celebrations.${next.celebration.id}.title`)}.
            {later.length > 0 ? (
              <>
                {" "}
                {t("upcoming.then")}{" "}
                {later
                  .map((item) =>
                    t(
                      t(`celebrations.${item.celebration.id}.title`) ===
                        t(`celebrations.${next.celebration.id}.title`)
                        ? "upcoming.dayAt"
                        : "upcoming.dayAtTitled",
                      {
                        day: lowerFirst(dayLabel(item)),
                        time: formatSpokenTime(
                          item.celebration.time,
                          intlLocale,
                        ),
                        title: t(`celebrations.${item.celebration.id}.title`),
                      },
                    ),
                  )
                  .join(t("upcoming.and"))}
                .
              </>
            ) : null}
          </Text>
        </>
      ) : (
        <Stack gap="3" data-testid="next-celebration-loading">
          <Skeleton
            h={{ base: "20", md: "28" }}
            w="80%"
            rounded="md"
            variant="shine"
            css={{
              "--start-color": "rgba(255,255,255,0.08)",
              "--end-color": "rgba(255,255,255,0.18)",
            }}
          />
          <Skeleton
            h="5"
            w="90%"
            rounded="md"
            variant="shine"
            css={{
              "--start-color": "rgba(255,255,255,0.08)",
              "--end-color": "rgba(255,255,255,0.18)",
            }}
          />
        </Stack>
      )}
      <Link
        asChild
        textStyle="eyebrow"
        color="accent.onDark"
        _hover={{ color: "white", textDecoration: "none" }}
        w="fit-content"
      >
        <NextLink href="/horarios">{t("upcoming.allTimes")} →</NextLink>
      </Link>
    </Stack>
  );
}
