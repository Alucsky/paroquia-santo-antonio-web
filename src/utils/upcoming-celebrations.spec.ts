import { type Celebration, celebrations } from "@/content/celebrations";
import {
  addDays,
  capitalizeFirst,
  formatCalendarDate,
  formatTime,
  formatWeekday,
  getUpcomingCelebrations,
  getWeekday,
  getZonedNow,
  occursOn,
  toMinutes,
} from "@/utils/upcoming-celebrations";

const at = (iso: string) => new Date(iso);

describe("upcoming celebrations", () => {
  it("should be able to read the current date and time in the parish time zone", () => {
    expect(getZonedNow(at("2026-11-01T02:30:00Z"))).toEqual({
      year: 2026,
      month: 10,
      day: 31,
      minutes: 23 * 60 + 30,
    });
  });

  it("should be able to convert a time string to minutes", () => {
    expect(toMinutes("08:30")).toBe(510);
    expect(toMinutes("19:00")).toBe(1140);
  });

  it("should be able to add days across month and year boundaries", () => {
    expect(addDays({ year: 2026, month: 12, day: 31 }, 1)).toEqual({
      year: 2027,
      month: 1,
      day: 1,
    });
    expect(addDays({ year: 2026, month: 3, day: 1 }, -1)).toEqual({
      year: 2026,
      month: 2,
      day: 28,
    });
  });

  it("should be able to tell the weekday of a calendar date", () => {
    expect(getWeekday({ year: 2026, month: 11, day: 1 })).toBe(0);
    expect(getWeekday({ year: 2026, month: 11, day: 4 })).toBe(3);
  });

  it("should be able to match weekly, monthly day and nth weekday recurrences", () => {
    expect(
      occursOn(
        { type: "weekly", weekday: 3 },
        { year: 2026, month: 11, day: 4 },
      ),
    ).toBe(true);
    expect(
      occursOn(
        { type: "monthly-day", day: 13 },
        { year: 2026, month: 11, day: 13 },
      ),
    ).toBe(true);
    expect(
      occursOn(
        { type: "monthly-day", day: 13 },
        { year: 2026, month: 11, day: 14 },
      ),
    ).toBe(false);
    expect(
      occursOn(
        { type: "monthly-nth-weekday", nth: 1, weekday: 5 },
        { year: 2026, month: 11, day: 6 },
      ),
    ).toBe(true);
    expect(
      occursOn(
        { type: "monthly-nth-weekday", nth: 1, weekday: 5 },
        { year: 2026, month: 11, day: 13 },
      ),
    ).toBe(false);
    expect(
      occursOn(
        { type: "monthly-nth-weekday", nth: 4, weekday: 6 },
        { year: 2026, month: 11, day: 28 },
      ),
    ).toBe(true);
  });

  it("should be able to list the next celebrations in chronological order", () => {
    const upcoming = getUpcomingCelebrations(
      at("2026-10-31T12:00:00Z"),
      celebrations,
      { limit: 4 },
    );

    expect(
      upcoming.map((item) => [
        item.celebration.id,
        item.date.day,
        item.daysAhead,
      ]),
    ).toEqual([
      ["sunday-morning-mass", 1, 1],
      ["sunday-evening-mass", 1, 1],
      ["health-mass", 4, 4],
      ["sacred-heart-mass", 6, 6],
    ]);
  });

  it("should not be able to list a celebration that already started today", () => {
    const upcoming = getUpcomingCelebrations(
      at("2026-11-01T12:00:00Z"),
      celebrations,
      { limit: 1 },
    );

    expect(upcoming[0]?.celebration.id).toBe("sunday-evening-mass");
    expect(upcoming[0]?.daysAhead).toBe(0);
  });

  it("should be able to include the monthly adoration on the 13th", () => {
    const upcoming = getUpcomingCelebrations(
      at("2026-11-12T23:00:00Z"),
      celebrations,
      { limit: 1 },
    );

    expect(upcoming[0]?.celebration.id).toBe("eucharistic-adoration");
    expect(upcoming[0]?.date).toEqual({ year: 2026, month: 11, day: 13 });
  });

  it("should not be able to find celebrations beyond the horizon", () => {
    const rare: Celebration[] = [
      {
        id: "rare",
        kind: "mass",
        recurrence: { type: "monthly-day", day: 31 },
        time: "10:00",
      },
    ];

    expect(
      getUpcomingCelebrations(at("2026-11-01T12:00:00Z"), rare, {
        horizonDays: 5,
      }),
    ).toEqual([]);
  });

  it("should be able to format dates, times and weekdays for each locale", () => {
    expect(formatTime("08:30", "pt-BR")).toBe("8:30");
    expect(formatTime("19:00", "en-US")).toBe("7:00 PM");
    expect(formatWeekday(0, "pt-BR")).toBe("domingo");
    expect(formatWeekday(3, "es-ES")).toBe("miércoles");
    expect(formatCalendarDate({ year: 2026, month: 11, day: 4 }, "pt-BR")).toBe(
      "quarta-feira, 4 de novembro",
    );
  });

  it("should be able to capitalize only the first letter", () => {
    expect(capitalizeFirst("quarta-feira, 4 de novembro")).toBe(
      "Quarta-feira, 4 de novembro",
    );
  });
});

describe("formatSpokenTime", () => {
  it("should be able to write times the Brazilian way", async () => {
    const { formatSpokenTime } = await import("@/utils/upcoming-celebrations");
    expect(formatSpokenTime("08:30", "pt-BR")).toBe("8h30");
    expect(formatSpokenTime("19:00", "pt-BR")).toBe("19h");
    expect(formatSpokenTime("19:00", "en-US")).toBe("7:00 PM");
  });
});
