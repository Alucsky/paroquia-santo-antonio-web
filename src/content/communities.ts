export type CommunityKind = "community" | "neighborhood";

export type ArrivalPrecision = "year" | "circa" | "decade";

export type Community = {
  slug: string;
  name: string;
  kind: CommunityKind;
  arrival: { year: number; precision: ArrivalPrecision } | null;
  families: string | null;
};

export const communities: Community[] = [
  {
    slug: "sao-jose-do-canoas",
    name: "São José do Canoas",
    kind: "community",
    arrival: { year: 1973, precision: "year" },
    families:
      "Julio Kosiske, Ivo Miguel Rizilo, Kazimiro Mezalira e família Kanini",
  },
  {
    slug: "santa-terezinha",
    name: "Santa Terezinha",
    kind: "community",
    arrival: { year: 1956, precision: "year" },
    families: "Andretti, Biasi e Farias de Lima",
  },
  {
    slug: "sao-judas-tadeu-jacutinga",
    name: "São Judas Tadeu – Jacutinga",
    kind: "community",
    arrival: { year: 1961, precision: "year" },
    families: "Sarturi, Martins Moreira, Matachinski e Dalbosco",
  },
  {
    slug: "linha-benetti",
    name: "Linha Benetti",
    kind: "community",
    arrival: { year: 1972, precision: "year" },
    families: "Claudino Benetti, João Menegati e Vicente Vodzinsk",
  },
  {
    slug: "linha-ibiaca",
    name: "Linha Ibiaçá",
    kind: "community",
    arrival: { year: 1966, precision: "year" },
    families: "Tozetto, Silvestre e Panisson",
  },
  {
    slug: "sao-luiz",
    name: "São Luiz",
    kind: "community",
    arrival: { year: 1971, precision: "year" },
    families: "Valdomiro Carminatti, Miguel Bettiato e Olacir Frigotto",
  },
  {
    slug: "volta-grande",
    name: "Volta Grande",
    kind: "community",
    arrival: { year: 1962, precision: "year" },
    families: "Décio Paulo do Nascimento, Alexandre Veisinqui e Leandro Costa",
  },
  {
    slug: "flor-da-serra",
    name: "Flor da Serra",
    kind: "community",
    arrival: null,
    families: null,
  },
  {
    slug: "sao-cristovao",
    name: "São Cristóvão",
    kind: "community",
    arrival: { year: 1960, precision: "decade" },
    families:
      "Nezzelo, Refatti, Peretto, Zampiva, Zanella, Besson, Parizzoto, Dall'Agnol, Nicolau, Dalpasqualle e da Silva Rechi",
  },
  {
    slug: "santa-cruz",
    name: "Santa Cruz",
    kind: "community",
    arrival: { year: 1960, precision: "year" },
    families: "Dario Chaxin, Luiz Minatto e Pedro de Cesaro Cavaler",
  },
  {
    slug: "sao-bras",
    name: "São Brás",
    kind: "community",
    arrival: { year: 1949, precision: "circa" },
    families: "Fávero, Refatti e Tiarão",
  },
  {
    slug: "sao-francisco-do-bandeira",
    name: "São Francisco do Bandeira",
    kind: "community",
    arrival: { year: 1964, precision: "year" },
    families:
      "Pascoal Restelatto, Alvarino Simoneto, Severino Devens, Ângelo Dal Bosco e Noemio Argino de Oliveira",
  },
  {
    slug: "sao-miguel-do-canoas",
    name: "São Miguel do Canoas",
    kind: "community",
    arrival: { year: 1955, precision: "year" },
    families:
      "Antonio Pagani, Zeferino Teixeira de Camargo, Albino Zanela, Fermino Caranhato e Duelino Dalpra",
  },
  {
    slug: "santa-luzia-do-bandeira",
    name: "Santa Luzia do Bandeira",
    kind: "community",
    arrival: { year: 1973, precision: "year" },
    families:
      "Gabriel Meurer, Valentim Coradeli, Primo Ganassini, Francisco Rizotto e Angelo Bertoldo",
  },
  {
    slug: "piracema",
    name: "Piracema",
    kind: "community",
    arrival: { year: 1950, precision: "circa" },
    families: "Nuernberg e Teixeira de Camargo",
  },
  {
    slug: "sao-pedro-do-bandeira",
    name: "São Pedro do Bandeira",
    kind: "community",
    arrival: { year: 1975, precision: "year" },
    families: "Fernandes, Stopassole, Iung, Blauzius e Posa",
  },
  {
    slug: "vila-canarinho",
    name: "Vila Canarinho",
    kind: "community",
    arrival: { year: 1998, precision: "year" },
    families:
      "Antonio e Rosmari da Silva, Celso e Tereza Campos de Oliveira, Rivelino e Cleovânia dos Anjos, Vilso e Ivete Cavaller",
  },
  {
    slug: "sao-francisco-de-assis",
    name: "São Francisco de Assis",
    kind: "neighborhood",
    arrival: { year: 1983, precision: "year" },
    families: "Ângelo e Carmem Marmentini",
  },
  {
    slug: "margarida-galvan",
    name: "Margarida Galvan",
    kind: "neighborhood",
    arrival: { year: 1999, precision: "year" },
    families:
      "Sergio Lorenzi, José Orivaldo de Oliveira, Porfírio Meira e todo o povo do bairro",
  },
  {
    slug: "bairro-da-luz",
    name: "Bairro da Luz",
    kind: "neighborhood",
    arrival: { year: 1990, precision: "year" },
    families: "Ivo Piolla, Luiza e Vitto Marcon, Verildo Vescovi",
  },
  {
    slug: "jardim-da-colina",
    name: "Jardim da Colina",
    kind: "neighborhood",
    arrival: { year: 1985, precision: "year" },
    families: "Mário Cheron, Valdemar de Almeida e José Wilamowski",
  },
  {
    slug: "vitoria",
    name: "Vitória",
    kind: "neighborhood",
    arrival: null,
    families: "Aparecido Silva, Romildo Cruz e família Mozetto",
  },
];
