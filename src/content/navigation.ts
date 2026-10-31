import { routes } from "@/content/routes";

export type NavigationItem = {
  key: string;
  href: string;
};

export const primaryNavigation: NavigationItem[] = [
  { key: "schedule", href: routes.schedule },
  { key: "sacraments", href: routes.sacraments },
  { key: "saint", href: routes.saintAnthony },
  { key: "communities", href: routes.communities },
  { key: "ministries", href: routes.ministries },
  { key: "parish", href: routes.parish },
];

export const contactNavigation: NavigationItem = {
  key: "contact",
  href: routes.contact,
};

export const externalLinks = [
  { key: "liturgy", href: "https://liturgia.cnbb.org.br/" },
  { key: "bible", href: "https://www.bibliacatolica.com.br/" },
  { key: "saintOfTheDay", href: "https://santo.cancaonova.com/" },
  { key: "diocese", href: "http://www.curiadiocesana.com.br/" },
  { key: "vatican", href: "https://www.vatican.va/" },
] as const;
