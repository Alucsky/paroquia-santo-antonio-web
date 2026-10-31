import type { Celebration, Recurrence } from "@/content/celebrations";

export const PARISH_TIME_ZONE = "America/Sao_Paulo";

export type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

export type UpcomingCelebration = {
  celebration: Celebration;
  date: CalendarDate;
  daysAhead: number;
};

type ZonedNow = CalendarDate & { minutes: number };

export function getZonedNow(now: Date, timeZone = PARISH_TIME_ZONE): ZonedNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value ?? 0);

  return {
    year: value("year"),
    month: value("month"),
    day: value("day"),
    minutes: value("hour") * 60 + value("minute"),
  };
}

export function toMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function addDays(date: CalendarDate, amount: number): CalendarDate {
  const shifted = new Date(
    Date.UTC(date.year, date.month - 1, date.day + amount),
  );
  return {
    year: shifted.getUTCFullYear(),
    month: shifted.getUTCMonth() + 1,
    day: shifted.getUTCDate(),
  };
}

export function getWeekday(date: CalendarDate): number {
  return new Date(Date.UTC(date.year, date.month - 1, date.day)).getUTCDay();
}

export function occursOn(recurrence: Recurrence, date: CalendarDate): boolean {
  switch (recurrence.type) {
    case "weekly":
      return getWeekday(date) === recurrence.weekday;
    case "monthly-day":
      return date.day === recurrence.day;
    case "monthly-nth-weekday":
      return (
        getWeekday(date) === recurrence.weekday &&
        Math.ceil(date.day / 7) === recurrence.nth
      );
  }
}

export function getUpcomingCelebrations(
  now: Date,
  celebrations: Celebration[],
  { limit = 3, horizonDays = 45, timeZone = PARISH_TIME_ZONE } = {},
): UpcomingCelebration[] {
  const today = getZonedNow(now, timeZone);
  const upcoming: UpcomingCelebration[] = [];

  for (let daysAhead = 0; daysAhead <= horizonDays; daysAhead++) {
    const date = addDays(today, daysAhead);
    const sameDay = celebrations
      .filter((celebration) => occursOn(celebration.recurrence, date))
      .filter(
        (celebration) =>
          daysAhead > 0 || toMinutes(celebration.time) >= today.minutes,
      )
      .sort((a, b) => toMinutes(a.time) - toMinutes(b.time));

    for (const celebration of sameDay) {
      upcoming.push({ celebration, date, daysAhead });
      if (upcoming.length === limit) return upcoming;
    }
  }

  return upcoming;
}

export function capitalizeFirst(value: string): string {
  return value.charAt(0).toLocaleUpperCase() + value.slice(1);
}

export function formatCalendarDate(
  date: CalendarDate,
  locale: string,
  options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  },
): string {
  return new Intl.DateTimeFormat(locale, {
    ...options,
    timeZone: "UTC",
  }).format(new Date(Date.UTC(date.year, date.month - 1, date.day)));
}

export function formatTime(time: string, locale: string): string {
  const [hours, minutes] = time.split(":").map(Number);
  return new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(2000, 0, 1, hours, minutes)));
}

export function formatWeekday(weekday: number, locale: string): string {
  return formatCalendarDate(
    { year: 2023, month: 1, day: 1 + weekday },
    locale,
    {
      weekday: "long",
    },
  );
}
