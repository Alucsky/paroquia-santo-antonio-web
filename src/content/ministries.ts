export type MinistryGroup =
  | "liturgy"
  | "formation"
  | "family"
  | "charity"
  | "movements";

export type Ministry = {
  slug: string;
  group: MinistryGroup;
};

export const ministryGroups: MinistryGroup[] = [
  "liturgy",
  "formation",
  "family",
  "charity",
  "movements",
];

export const ministries: Ministry[] = [
  { slug: "liturgy", group: "liturgy" },
  { slug: "music", group: "liturgy" },
  { slug: "altar-servers", group: "liturgy" },
  { slug: "extraordinary-ministers", group: "liturgy" },
  { slug: "apostleship-of-prayer", group: "liturgy" },
  { slug: "catechesis", group: "formation" },
  { slug: "youth", group: "formation" },
  { slug: "youth-retreat", group: "formation" },
  { slug: "pastoral-council", group: "formation" },
  { slug: "family", group: "family" },
  { slug: "family-groups", group: "family" },
  { slug: "pilgrim-chapel", group: "family" },
  { slug: "children", group: "charity" },
  { slug: "elderly", group: "charity" },
  { slug: "prison", group: "charity" },
  { slug: "tithe", group: "charity" },
  { slug: "charismatic-renewal", group: "movements" },
  { slug: "cursillo", group: "movements" },
  { slug: "lareira", group: "movements" },
  { slug: "legion-of-mary", group: "movements" },
];
