import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { LuBriefcase, LuUserRound } from "react-icons/lu";
import { InfoCard } from "@/components/shared/info-card";
import { officeHours } from "@/content/parish";
import { toIntlLocale } from "@/lib/i18n";
import { formatTime, formatWeekday } from "@/utils/upcoming-celebrations";

type Period = { from: string; to: string };

function formatWeekdayRange(
  weekdays: readonly number[],
  locale: string,
): string {
  if (weekdays.length === 1) return formatWeekday(weekdays[0], locale);
  return `${formatWeekday(weekdays[0], locale)} – ${formatWeekday(weekdays[weekdays.length - 1], locale)}`;
}

export function OfficeHours() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();
  const intlLocale = toIntlLocale(locale);

  const blocks = [
    { key: "secretary", icon: LuBriefcase, data: officeHours.secretary },
    { key: "priests", icon: LuUserRound, data: officeHours.priests },
  ];

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={{ base: "3", md: "5" }}
      data-testid="office-hours"
    >
      {blocks.map(({ key, icon, data }) => (
        <InfoCard
          key={key}
          icon={icon}
          eyebrow={formatWeekdayRange(data.weekdays, intlLocale)}
          title={t(`officeHours.${key}`)}
        >
          <Stack gap="2">
            {data.periods.map((period: Period) => (
              <Box
                key={period.from}
                display="flex"
                justifyContent="space-between"
                borderTopWidth="1px"
                borderColor="line.hairline"
                pt="2"
              >
                <Text color="ink.muted" fontSize="sm">
                  {t(
                    Number(period.from.slice(0, 2)) < 12
                      ? "officeHours.morning"
                      : "officeHours.afternoon",
                  )}
                </Text>
                <Text fontWeight="700" fontVariantNumeric="tabular-nums">
                  {formatTime(period.from, intlLocale)} –{" "}
                  {formatTime(period.to, intlLocale)}
                </Text>
              </Box>
            ))}
          </Stack>
        </InfoCard>
      ))}
    </SimpleGrid>
  );
}
