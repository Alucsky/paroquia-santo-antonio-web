export function yearsSince(year: number, now: Date = new Date()): number {
  return now.getFullYear() - year;
}
