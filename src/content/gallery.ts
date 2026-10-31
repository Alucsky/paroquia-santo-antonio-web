export type GalleryImage = {
  key: string;
  src: string;
  width: number;
  height: number;
};

export const parishLifeGallery: GalleryImage[] = [
  {
    key: "choir",
    src: "/images/parish-life/choir-altar.jpg",
    width: 1024,
    height: 722,
  },
  {
    key: "baptism",
    src: "/images/parish-life/baptism.jpg",
    width: 1024,
    height: 682,
  },
  {
    key: "patronFeast",
    src: "/images/parish-life/priests-patron-feast.jpg",
    width: 1024,
    height: 682,
  },
  {
    key: "confirmation",
    src: "/images/parish-life/confirmation.jpg",
    width: 1024,
    height: 681,
  },
  {
    key: "missionaryChildhood",
    src: "/images/parish-life/missionary-childhood.jpg",
    width: 1024,
    height: 768,
  },
  {
    key: "ministers",
    src: "/images/parish-life/ministers.jpg",
    width: 1024,
    height: 576,
  },
];

export const churchImages = {
  facade: {
    src: "/images/church/facade-banner-1.jpg",
    width: 1400,
    height: 500,
  },
  facadeAlt: {
    src: "/images/church/facade-banner-2.jpg",
    width: 1400,
    height: 500,
  },
  nave: { src: "/images/church/interior-nave.jpg", width: 614, height: 768 },
  altar: { src: "/images/church/interior-altar.jpg", width: 1024, height: 768 },
  celebration: {
    src: "/images/church/altar-celebration.jpg",
    width: 1024,
    height: 682,
  },
  feast: { src: "/images/church/facade-feast.jpg", width: 600, height: 450 },
} as const;

export const saintPortrait = {
  src: "/images/saint-anthony/zurbaran-saint-anthony.jpg",
  width: 1040,
  height: 1600,
  sourceUrl:
    "https://commons.wikimedia.org/wiki/File:Francisco_de_Zurbar%C3%A1n_-_Sto_Antonio_de_Padua.jpg",
} as const;
