import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { type Celebration, celebrations } from "@/content/celebrations";
import { toIntlLocale } from "@/lib/i18n";
import { formatTime, formatWeekday } from "@/utils/upcoming-celebrations";

const WEEK_ORDER = [0, 1, 2, 3, 4, 5, 6];

function weeklyOn(weekday: number): Celebration[] {
  return celebrations
    .filter(
      (item) =>
        item.recurrence.type === "weekly" &&
        item.recurrence.weekday === weekday,
    )
    .sort((a, b) => a.time.localeCompare(b.time));
}

export function WeeklySchedule() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const intlLocale = toIntlLocale(locale);

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        lg: "repeat(7, 1fr)",
      }}
      gap="0"
      borderWidth="1px"
      borderColor="line.hairline"
      rounded="card"
      overflow="hidden"
      bg="paper.card"
      data-testid="weekly-schedule"
    >
      {WEEK_ORDER.map((weekday) => {
        const items = weeklyOn(weekday);
        const hasItems = items.length > 0;
        return (
          <Box
            key={weekday}
            p="5"
            borderColor="line.hairline"
            borderBottomWidth={{ base: "1px", lg: "0" }}
            borderRightWidth={{ base: "0", sm: "1px" }}
            bg={hasItems ? "paper.card" : "paper.canvas"}
            minH={{ lg: "44" }}
            data-testid="weekly-schedule-day"
          >
            <Text
              textStyle="eyebrow"
              color={hasItems ? "brand.fg" : "ink.subtle"}
              mb="3"
            >
              {formatWeekday(weekday, intlLocale)}
            </Text>
            {hasItems ? (
              <Stack gap="3">
                {items.map((item) => (
                  <Box key={item.id}>
                    <Text
                      fontFamily="heading"
                      fontSize="2xl"
                      fontWeight="600"
                      lineHeight="1"
                    >
                      {formatTime(item.time, intlLocale)}
                    </Text>
                    <Text fontSize="sm" color="ink.muted" mt="1">
                      {t(`celebrations.${item.id}.title`)}
                    </Text>
                  </Box>
                ))}
              </Stack>
            ) : (
              <Text fontSize="sm" color="ink.subtle">
                {t("weekly.noMass")}
              </Text>
            )}
          </Box>
        );
      })}
    </Grid>
  );
}
