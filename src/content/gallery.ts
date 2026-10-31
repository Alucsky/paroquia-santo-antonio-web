export type GalleryImage = {
  key: string;
  src: string;
  width: number;
  height: number;
};

export const parishLifeGallery: GalleryImage[] = [
  {
    key: "choir",
    src: "/images/vida-paroquial/coral-altar.jpg",
    width: 1024,
    height: 722,
  },
  {
    key: "baptism",
    src: "/images/vida-paroquial/batismo.jpg",
    width: 1024,
    height: 682,
  },
  {
    key: "patronFeast",
    src: "/images/vida-paroquial/padres-festa-padroeiro.jpg",
    width: 1024,
    height: 682,
  },
  {
    key: "confirmation",
    src: "/images/vida-paroquial/crisma.jpg",
    width: 1024,
    height: 681,
  },
  {
    key: "missionaryChildhood",
    src: "/images/vida-paroquial/infancia-missionaria.jpg",
    width: 1024,
    height: 768,
  },
  {
    key: "ministers",
    src: "/images/vida-paroquial/ministros.jpg",
    width: 1024,
    height: 576,
  },
];

export const churchImages = {
  facade: {
    src: "/images/igreja/fachada-banner-1.jpg",
    width: 1400,
    height: 500,
  },
  facadeAlt: {
    src: "/images/igreja/fachada-banner-2.jpg",
    width: 1400,
    height: 500,
  },
  nave: { src: "/images/igreja/interior-nave.jpg", width: 614, height: 768 },
  altar: { src: "/images/igreja/interior-altar.jpg", width: 1024, height: 768 },
  celebration: {
    src: "/images/igreja/altar-celebracao.jpg",
    width: 1024,
    height: 682,
  },
  feast: { src: "/images/igreja/fachada-festa.jpg", width: 600, height: 450 },
} as const;

export const saintPortrait = {
  src: "/images/santo-antonio/zurbaran-santo-antonio.jpg",
  width: 1040,
  height: 1600,
  sourceUrl:
    "https://commons.wikimedia.org/wiki/File:Francisco_de_Zurbar%C3%A1n_-_Sto_Antonio_de_Padua.jpg",
} as const;
