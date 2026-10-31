export type Recurrence =
  | { type: "weekly"; weekday: number }
  | { type: "monthly-nth-weekday"; nth: number; weekday: number }
  | { type: "monthly-day"; day: number };

export type CelebrationKind = "mass" | "adoration" | "sacrament";

export type Celebration = {
  id: string;
  kind: CelebrationKind;
  recurrence: Recurrence;
  time: string;
};

export const celebrations: Celebration[] = [
  {
    id: "sunday-morning-mass",
    kind: "mass",
    recurrence: { type: "weekly", weekday: 0 },
    time: "08:30",
  },
  {
    id: "sunday-evening-mass",
    kind: "mass",
    recurrence: { type: "weekly", weekday: 0 },
    time: "19:00",
  },
  {
    id: "health-mass",
    kind: "mass",
    recurrence: { type: "weekly", weekday: 3 },
    time: "19:00",
  },
  {
    id: "sacred-heart-mass",
    kind: "mass",
    recurrence: { type: "monthly-nth-weekday", nth: 1, weekday: 5 },
    time: "15:00",
  },
  {
    id: "eucharistic-adoration",
    kind: "adoration",
    recurrence: { type: "monthly-day", day: 13 },
    time: "08:30",
  },
];

export const sacramentCelebrations: Celebration[] = [
  {
    id: "baptism",
    kind: "sacrament",
    recurrence: { type: "monthly-nth-weekday", nth: 4, weekday: 6 },
    time: "09:00",
  },
  {
    id: "wedding-afternoon",
    kind: "sacrament",
    recurrence: { type: "weekly", weekday: 6 },
    time: "17:00",
  },
  {
    id: "wedding-evening",
    kind: "sacrament",
    recurrence: { type: "weekly", weekday: 6 },
    time: "20:00",
  },
  {
    id: "marriage-validation",
    kind: "sacrament",
    recurrence: { type: "weekly", weekday: 3 },
    time: "19:00",
  },
];
