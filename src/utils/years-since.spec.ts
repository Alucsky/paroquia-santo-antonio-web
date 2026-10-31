import { yearsSince } from "@/utils/years-since";

describe("yearsSince", () => {
  it("should be able to count the years since a given year", () => {
    expect(yearsSince(1959, new Date("2026-10-31T12:00:00Z"))).toBe(67);
  });

  it("should be able to use the current date by default", () => {
    expect(yearsSince(new Date().getFullYear())).toBe(0);
  });
});
