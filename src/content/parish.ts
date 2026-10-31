export const parish = {
  name: "Paróquia Santo Antônio de Pádua",
  shortName: "Santo Antônio",
  city: "Dois Vizinhos",
  state: "PR",
  foundedYear: 1959,
  devoteesArrivalYear: 1956,
  diocese: "Diocese de Palmas – Francisco Beltrão",
  address: {
    street: "Rua Prudente de Morais, 628",
    district: "Centro",
    postalBox: "Caixa Postal 38",
    zipCode: "85660-000",
    city: "Dois Vizinhos",
    state: "Paraná",
  },
  coordinates: { latitude: -25.743676, longitude: -53.057857 },
  contact: {
    phone: "(46) 3536-1108",
    whatsapp: "(46) 98814-8964",
    catechesisWhatsapp: "(46) 99903-5168",
    email: "santoantoniodoisvizinhos@gmail.com",
  },
  social: {
    instagram: "https://www.instagram.com/paroquiasantoantoniodv",
    instagramHandle: "@paroquiasantoantoniodv",
    youtube: "https://www.youtube.com/channel/UC-Whqe7Y0n4gli3GKBmQqeA",
  },
} as const;

export const credits = {
  developer: "Samuel Molinari",
  developerUrl: "https://www.linkedin.com/in/samuel-molinari/",
} as const;

export const officeHours = {
  secretary: {
    weekdays: [1, 2, 3, 4, 5],
    periods: [
      { from: "08:00", to: "11:45" },
      { from: "13:15", to: "17:30" },
    ],
  },
  priests: {
    weekdays: [3],
    periods: [
      { from: "09:00", to: "11:00" },
      { from: "14:00", to: "17:00" },
    ],
  },
} as const;
