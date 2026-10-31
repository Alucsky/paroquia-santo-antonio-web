import { Box, Flex, HStack, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { celebrations } from "@/content/celebrations";
import { useNow } from "@/hooks/use-now";
import { toIntlLocale } from "@/lib/i18n";
import {
  capitalizeFirst,
  formatCalendarDate,
  formatTime,
  getUpcomingCelebrations,
  type UpcomingCelebration,
} from "@/utils/upcoming-celebrations";

const PLACEHOLDER_KEYS = ["first", "second", "third", "fourth", "fifth"];

type Props = {
  limit?: number;
  tone?: "light" | "dark";
};

export function UpcomingCelebrations({ limit = 3, tone = "light" }: Props) {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const now = useNow();
  const intlLocale = toIntlLocale(locale);
  const upcoming = now
    ? getUpcomingCelebrations(now, celebrations, { limit })
    : null;

  const dayLabel = (item: UpcomingCelebration) => {
    if (item.daysAhead === 0) return t("upcoming.today");
    if (item.daysAhead === 1) return t("upcoming.tomorrow");
    return capitalizeFirst(formatCalendarDate(item.date, intlLocale));
  };

  const muted = tone === "light" ? "ink.subtle" : "whiteAlpha.700";
  const divider = tone === "light" ? "line.hairline" : "whiteAlpha.200";

  return (
    <Stack gap="0" aria-live="polite" data-testid="upcoming-celebrations">
      {upcoming === null
        ? PLACEHOLDER_KEYS.slice(0, limit).map((key) => (
            <Skeleton key={key} h="14" my="2" rounded="lg" />
          ))
        : upcoming.map((item, index) => (
            <Flex
              key={`${item.celebration.id}-${item.date.month}-${item.date.day}`}
              align="center"
              gap="4"
              py="3.5"
              borderTopWidth={index === 0 ? "0" : "1px"}
              borderColor={divider}
              data-testid="upcoming-celebrations-item"
            >
              <Box
                minW="16"
                fontFamily="heading"
                fontSize={index === 0 ? "3xl" : "2xl"}
                fontWeight="600"
                lineHeight="1"
                letterSpacing="-0.03em"
              >
                {formatTime(item.celebration.time, intlLocale)}
              </Box>
              <Stack gap="0.5" flex="1" minW="0">
                <Text fontWeight="700" lineClamp={1}>
                  {t(`celebrations.${item.celebration.id}.title`)}
                </Text>
                <HStack gap="2" fontSize="sm" color={muted}>
                  {index === 0 ? (
                    <Box
                      as="span"
                      boxSize="2"
                      rounded="full"
                      bg="terracotta.400"
                      animation="pulseDot 2s infinite"
                      flexShrink="0"
                    />
                  ) : null}
                  <Text as="span" lineClamp={1}>
                    {dayLabel(item)}
                  </Text>
                </HStack>
              </Stack>
            </Flex>
          ))}
    </Stack>
  );
}
