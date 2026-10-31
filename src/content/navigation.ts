export type NavigationItem = {
  key: string;
  href: string;
};

export const primaryNavigation: NavigationItem[] = [
  { key: "schedule", href: "/horarios" },
  { key: "sacraments", href: "/sacramentos" },
  { key: "saint", href: "/santo-antonio" },
  { key: "communities", href: "/comunidades" },
  { key: "ministries", href: "/pastorais" },
  { key: "parish", href: "/paroquia" },
];

export const contactNavigation: NavigationItem = {
  key: "contact",
  href: "/contato",
};

export const externalLinks = [
  { key: "liturgy", href: "https://liturgia.cnbb.org.br/" },
  { key: "bible", href: "https://www.bibliacatolica.com.br/" },
  { key: "saintOfTheDay", href: "https://santo.cancaonova.com/" },
  { key: "diocese", href: "http://www.curiadiocesana.com.br/" },
  { key: "vatican", href: "https://www.vatican.va/" },
] as const;
