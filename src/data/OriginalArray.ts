const TeachersArray = [
  {
    language: "Polish",
    flag: "https://flagcdn.com/48x36/pl.png",
    native: true,
    name: "Dawid Czaskowski",
    email: "Dawid-Czaskowski@gmail.com",
    skypeID: "Dawid-Czaskowski.languages",
    teachingPlatform: "TutorConnect/Dawid-Czaskowski",
    whatsApp: "+1 (555) 123-4567",
    experience: "5 years",
    country: "Poland",
    price: 17,
    time: "Morning Evening",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    reviews: "50",
    rating: 5,
    id: 0,
  },
  {
    language: "French",
    flag: "https://flagcdn.com/48x36/fr.png",
    native: true,
    name: "Gilles Simon",
    email: "Gilles-Simon@gmail.com",
    skypeID: "Gilles-Simon.languages",
    teachingPlatform: "TutorConnect/Gilles-Simon",
    whatsApp: "+1 (555) 123-4792",
    experience: "2 years",
    country: "France",
    price: 15,
    time: "Morning Afternoon Evening",
    days: ["Mon", "Thu", "Fri", "Sat"],
    reviews: "32",
    rating: 4.6,
    id: 1,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/ar.png",
    native: true,
    name: "David Ferrer",
    email: "David-Ferrer@gmail.com",
    skypeID: "David-Ferrer.languages",
    teachingPlatform: "TutorConnect/David-Ferrer",
    whatsApp: "+1 (555) 342-2924",
    experience: "1 year",
    country: "Argentina",
    price: 14,
    time: "Morning",
    days: ["Sat", "Sun"],
    reviews: "5",
    rating: 5,
    id: 2,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/es.png",
    native: true,
    name: "Feliciano Lopez",
    email: "Feliciano-Lopez@gmail.com",
    skypeID: "Feliciano-Lopez.languages",
    teachingPlatform: "TutorConnect/Feliciano-Lopez",
    experience: "10 years",
    country: "Spain",
    price: 45,
    time: "Evening",
    days: ["Mon", "Tue", "Wed", "Thu ", "Fri", "Sat ", "Sun "],
    reviews: "78",
    rating: 5,
    id: 3,
  },
  {
    language: "Russian",
    flag: "https://flagcdn.com/48x36/ru.png",
    native: true,
    name: "Daniil Medvedev",
    email: "Daniil-Medvedev@gmail.com",
    skypeID: "Daniil-Medvedev.languages",
    teachingPlatform: "TutorConnect/Daniil-Medvedev",
    whatsApp: "+1 (555) 385-4610",
    experience: "3 years",
    country: "Russia",
    price: 20,
    time: "Afternoon",
    days: ["Mon ", "Tue ", "Thu ", "Fri"],
    reviews: "27",
    rating: 4,
    id: 4,
  },
  {
    language: "Russian",
    flag: "https://flagcdn.com/48x36/ua.png",
    native: true,
    name: "Sergiy Stakhovsky",
    email: "Sergiy-Stakhovsky@gmail.com",
    skypeID: "Sergiy-Stakhovsky.languages",
    teachingPlatform: "TutorConnect/Sergiy-Stakhovsky",
    whatsApp: "+1 (555) 476-3620",
    experience: "3 years",
    country: "Ukraine",
    price: 10,
    time: "Afternoon Evening",
    days: ["Mon ", "Tue ", "Wed"],
    reviews: "15",
    rating: 4.8,
    id: 5,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/it.png",
    native: false,
    name: "Lorenzo Gutti",
    email: "Lorenzo-Gutti@gmail.com",
    skypeID: "Lorenzo-Gutti.languages",
    teachingPlatform: "TutorConnect/Lorenzo-Gutti",
    experience: "3 years",
    country: "Italy",
    price: 13,
    time: "Morning Afternoon Evening",
    days: ["Sat ", "Sun "],
    reviews: "14",
    rating: 4.6,
    id: 6,
  },
  {
    language: "Polish",
    flag: "https://flagcdn.com/48x36/pl.png",
    native: true,
    name: "Zbigniew Glik",
    email: "Zbigniew-Glik@gmail.com",
    skypeID: "Zbigniew-Glik.languages",
    teachingPlatform: "TutorConnect/Zbigniew-Glik",
    whatsApp: "+1 (555) 472-4766",
    experience: "5 years",
    country: "Poland",
    price: 9,
    time: "Morning Afternoon",
    days: ["Mon", "Tue", "Wed", "Thu"],
    reviews: "35",
    rating: 5,
    id: 7,
  },
  {
    language: "Polish",
    flag: "https://flagcdn.com/48x36/ru.png",
    native: false,
    name: "Yuri Gavralov",
    email: "Yuri-Gavralov@gmail.com",
    skypeID: "Yuri-Gavralov.languages",
    teachingPlatform: "TutorConnect/Yuri-Gavralov",
    whatsApp: "+1 (555) 431-3298",
    experience: "1 year",
    country: "Russia",
    price: 10,
    time: "Evening",
    days: ["Tue ", "Wed", "Thu"],
    reviews: "7",
    rating: 5,
    id: 8,
  },
  {
    language: "Polish",
    flag: "https://flagcdn.com/48x36/pl.png",
    native: true,
    name: "Hubert Hurkacz",
    email: "Hubert-Hurkacz@gmail.com",
    skypeID: "Hubert-Hurkacz.languages",
    teachingPlatform: "TutorConnect/Hubert-Hurkacz",
    whatsApp: "+1 (555) 492-3091",
    experience: "1 year",
    country: "Poland",
    price: 8,
    time: "Evening",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    reviews: "6",
    rating: 4,
    id: 9,
  },
  {
    language: "Polish",
    flag: "https://flagcdn.com/48x36/pl.png",
    native: true,
    name: "Iga Swiatek",
    email: "Iga-Swiatek@gmail.com",
    skypeID: "Iga-Swiatek.languages",
    teachingPlatform: "TutorConnect/Iga-Swiatek",
    experience: "4 years",
    country: "Poland",
    price: 15,
    time: "Afternoon Evening",
    days: ["Thu", "Fri", "Sat", "Sun"],
    reviews: "39",
    rating: 4.8,
    id: 10,
  },
  {
    language: "French",
    flag: "https://flagcdn.com/48x36/fr.png",
    native: true,
    name: "Sophie Moreau",
    email: "Sophie-Moreau@gmail.com",
    skypeID: "Sophie-Moreau.languages",
    teachingPlatform: "TutorConnect/Sophie-Moreau",
    whatsApp: "+1 (555) 328-9709",
    experience: "2 years",
    country: "France",
    price: 20,
    time: "Morning",
    days: ["Mon ", "Fri ", "Sat "],
    reviews: "16",
    rating: 4.6,
    id: 11,
  },
  {
    language: "French",
    flag: "https://flagcdn.com/48x36/ch.png",
    native: true,
    name: "Amélie Bernard",
    email: "Amélie-Bernard@gmail.com",
    skypeID: "Amélie-Bernard.languages",
    teachingPlatform: "TutorConnect/Amélie-Bernard",
    whatsApp: "+1 (555) 683-3099",
    experience: "10 years",
    country: "Switzerland",
    price: 17,
    time: "Morning Afternoon Evening",
    days: ["Mon ", "Tue ", "Wed ", "Sun "],
    reviews: "67",
    rating: 5,
    id: 12,
  },
  {
    language: "French",
    flag: "https://flagcdn.com/48x36/it.png",
    native: false,
    name: "Simone Bolelli",
    email: "Simone-Bolelli@gmail.com",
    skypeID: "Simone-Bolelli.languages",
    teachingPlatform: "TutorConnect/Simone-Bolelli",
    whatsApp: "+1 (555) 691-4820",
    experience: "2 years",
    country: "France",
    price: 13,
    time: "Afternoon Evening",
    days: ["Sat ", "Sun "],
    reviews: "23",
    rating: 5,
    id: 13,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/es.png",
    native: true,
    name: "Carmen Garcia",
    email: "Carmen-Garcia@gmail.com",
    skypeID: "Carmen-Garcia.languages",
    teachingPlatform: "TutorConnect/Carmen-Garcia",
    whatsApp: "+1 (555) 309-7809",
    experience: "3 years",
    country: "Spain",
    price: 13,
    time: "Morning Afternoon",
    days: ["Tue ", "Wed ", "Thurs", "Fri"],
    reviews: "31",
    rating: 5,
    id: 14,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/ar.png",
    native: true,
    name: "Beatriz Silva",
    email: "Beatriz-Silva@gmail.com",
    skypeID: "Beatriz-Silva.languages",
    teachingPlatform: "TutorConnect/Beatriz-Silva",
    experience: "1 year",
    country: "Argentina",
    price: 15,
    time: "Morning, Evening",
    days: ["Mon ", "Tue "],
    reviews: "8",
    rating: 4.5,
    id: 15,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/it.png",
    native: false,
    name: "Federica Ferrara",
    email: "Federica-Ferrara@gmail.com",
    skypeID: "Federica-Ferrar.languages",
    teachingPlatform: "TutorConnect/Federica-Ferrar",
    experience: "3 years",
    country: "Italy",
    price: 15,
    time: "Morning, Evening",
    days: ["Mon ", "Tue "],
    reviews: "20",
    rating: 5,
    id: 16,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/es.png",
    native: true,
    name: "Carlos Alcaraz",
    email: "Carlos-Alcaraz@gmail.com",
    skypeID: "Carlos-Alcaraz.languages",
    teachingPlatform: "TutorConnect/Carlos-Alcaraz",
    whatsApp: "+1 (555) 123-4567",
    experience: "8 years",
    country: "Spain",
    price: 19,
    time: "Morning, Afternoon, Evening",
    days: ["Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat ", "Sun "],
    reviews: "60",
    rating: 4.3,
    id: 17,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/es.png",
    native: true,
    name: "Rafa Nadal",
    email: "Rafa-Nadal@gmail.com",
    skypeID: "Rafa-Nadal.languages",
    teachingPlatform: "TutorConnect/Rafa-Nadal",
    whatsApp: "+1 (555) 987-6543",
    experience: "4 years",
    country: "Spain",
    price: 13,
    time: "Afternoon, Evening",
    days: ["Mon", "Fri ", "Sat ", "Sun "],
    reviews: "32",
    rating: 4.5,
    id: 18,
  },
  {
    language: "Italian",
    flag: "https://flagcdn.com/48x36/it.png",
    native: true,
    name: "Francesca Moretti",
    email: "Francesca-Moretti@gmail.com",
    skypeID: "Francesca-Moretti.languages",
    teachingPlatform: "TutorConnect/Francesca-Moretti",
    experience: "4 years",
    country: "Italy",
    price: 22,
    time: "Morning, Afternoon, Evening",
    days: ["Thu ", "Fri ", "Sat ", "Sun "],
    reviews: "33",
    rating: 4.7,
    id: 19,
  },
  {
    language: "Italian",
    flag: "https://flagcdn.com/48x36/it.png",
    native: true,
    name: "Giulia Ricci",
    email: "Giulia-Ricci@gmail.com",
    skypeID: "Giulia-Ricci.languages",
    teachingPlatform: "TutorConnect/Giulia-Ricci",
    whatsApp: "+1 (555) 876-5432",
    experience: "2 years",
    country: "Italy",
    price: 12,
    time: "Afternoon, Evening",
    days: ["Mon ", "Fri ", "Sat"],
    reviews: "15",
    rating: 5,
    id: 20,
  },
  {
    language: "Italian",
    flag: "https://flagcdn.com/48x36/it.png",
    native: true,
    name: "Matteo Bianchi",
    email: "Matteo-Bianchi@gmail.com",
    skypeID: "Matteo-Bianchi.languages",
    teachingPlatform: "TutorConnect/Matteo-Bianchi",
    whatsApp: "+1 (555) 111-2222",
    experience: "1 years",
    country: "Italy",
    price: 7,
    time: "Morning, Afternoon",
    days: ["Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat "],
    reviews: "4",
    rating: 5,
    id: 21,
  },
  {
    language: "German",
    flag: "https://flagcdn.com/48x36/de.png",
    native: true,
    name: "Hannah Schäfer",
    email: "Hannah-Schäfer@gmail.com",
    skypeID: "Hannah-Schäfer.languages",
    teachingPlatform: "TutorConnect/Hannah-Schäfer",
    whatsApp: "+1 (555) 333-4444",
    experience: "25 years",
    country: "Germany",
    price: 25,
    time: "Morning, Evening",
    days: ["Mon ", "Tue ", "Wed ", "Sun"],
    reviews: "130",
    rating: 4.8,
    id: 22,
  },
  {
    language: "German",
    flag: "https://flagcdn.com/48x36/at.png",
    native: true,
    name: "Lukas Schumacher",
    email: "Lukas-Schumacher@gmail.com",
    skypeID: "Lukas-Schumacher.languages",
    teachingPlatform: "TutorConnect/Lukas-Schumacher",
    whatsApp: "+1 (555) 555-6666",
    experience: "6 years",
    country: "Austria",
    price: 14,
    time: "Morning, Afternoon, Evening",
    days: ["Wed ", "Thu", "Fri"],
    reviews: "40",
    rating: 5,
    id: 23,
  },
  {
    language: "German",
    flag: "https://flagcdn.com/48x36/de.png",
    native: true,
    name: "Markus Schneider",
    email: "Markus-Schneider@gmail.com",
    skypeID: "Markus-Schneider.languages",
    teachingPlatform: "TutorConnect/Markus-Schneider",
    whatsApp: "+1 (555) 777-8888",
    experience: "4 years",
    country: "Germany",
    price: 17,
    time: "Afternoon, Evening",
    days: ["Mon ", "Wed", "Sat"],
    reviews: "28",
    rating: 4.5,
    id: 24,
  },
  {
    language: "German",
    flag: "https://flagcdn.com/48x36/de.png",
    native: true,
    name: "Lisa Koch",
    email: "Lisa-Koch@gmail.com",
    skypeID: "Lisa-Koch.languages",
    teachingPlatform: "TutorConnect/Lisa-Koch",
    whatsApp: "+1 (555) 999-0000",
    experience: "2 years",
    country: "Germany",
    price: 12,
    time: "Afternoon",
    days: ["Mon ", "Tue", "Wed"],
    reviews: "15",
    rating: 4.8,
    id: 25,
  },
  {
    language: "German",
    flag: "https://flagcdn.com/48x36/de.png",
    native: true,
    name: "Julia Fischer",
    email: "Julia-Fischer@gmail.com",
    skypeID: "Julia-Fischer.languages",
    teachingPlatform: "TutorConnect/Julia-Fischer",
    whatsApp: "+1 (555) 111-2222",
    experience: "5 years",
    country: "Germany",
    price: 15,
    time: "Evening",
    days: ["Sat ", "Sun "],
    reviews: "30",
    rating: 5,
    id: 26,
  },
  {
    language: "Japanese",
    flag: "https://flagcdn.com/48x36/jp.png",
    native: true,
    name: "Takashi Tanaka",
    email: "Takashi-Tanaka@gmail.com",
    skypeID: "Takashi-Tanaka.languages",
    teachingPlatform: "TutorConnect/Takashi-Tanaka",
    whatsApp: "+1 (555) 333-4444",
    experience: "10 years",
    country: "Japan",
    price: 30,
    time: "Evening",
    days: ["Thu", "Fri", "Sat ", "Sun"],
    reviews: "45",
    rating: 4.7,
    id: 27,
  },
  {
    language: "Japanese",
    flag: "https://flagcdn.com/48x36/jp.png",
    native: true,
    name: "Ayumi Takahashi",
    email: "Ayumi-Takahashi@gmail.com",
    skypeID: "Ayumi-Takahashi.languages",
    teachingPlatform: "TutorConnect/Ayumi-Takahashi",
    whatsApp: "+1 (555) 555-6666",
    experience: "1 year",
    country: "Japan",
    price: 8,
    time: "Morning, Afternoon, Evening",
    days: ["Fri", "Sat ", "Sun"],
    reviews: "4",
    rating: 5,
    id: 28,
  },
  {
    language: "French",
    flag: "https://flagcdn.com/48x36/fr.png",
    native: true,
    name: "Jean Dupont",
    email: "Jean-Dupont@gmail.com",
    skypeID: "Jean-Dupont.languages",
    teachingPlatform: "TutorConnect/Jean-Dupont",
    whatsApp: "+1 (555) 777-8888",
    experience: "3 years",
    country: "France",
    price: 20,
    time: "afternoon",
    days: ["Mon", "Tue", "Wed"],
    reviews: "12",
    rating: 4.2,
    id: 29,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/es.png",
    native: true,
    name: "Laura Sánchez",
    email: "Laura-Sánchez@gmail.com",
    skypeID: "Laura-Sánchez.languages",
    teachingPlatform: "TutorConnect/Laura-Sánchez",
    whatsApp: "+1 (555) 999-0000",
    experience: "6 years",
    country: "Spain",
    price: 18,
    time: "Morning, Evening",
    days: ["Tue", "Wed", "Thu"],
    reviews: "22",
    rating: 4.8,
    id: 30,
  },
  {
    language: "French",
    flag: "https://flagcdn.com/48x36/fr.png",
    native: true,
    name: "Victoria Navarro",
    email: "Victoria-Navarro@gmail.com",
    skypeID: "Victoria-Navarro.languages",
    teachingPlatform: "TutorConnect/Victoria-Navarro",
    whatsApp: "+1 (555) 111-2222",
    experience: "3 years",
    country: "France",
    price: 20,
    time: "afternoon",
    days: ["Mon", "Tue", "Wed"],
    reviews: "12",
    rating: 4.2,
    id: 31,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/es.png",
    native: true,
    name: "Maria Rodriguez",
    email: "Maria-Rodriguez@gmail.com",
    skypeID: "Maria-Rodriguez.languages",
    teachingPlatform: "TutorConnect/Maria-Rodriguez",
    whatsApp: "+1 (555) 333-4444",
    experience: "6 years",
    country: "Spain",
    price: 18,
    time: "Morning, Evening",
    days: ["Tue", "Wed", "Thu"],
    reviews: "22",
    rating: 4.8,
    id: 32,
  },

  {
    language: "Italian",
    flag: "https://flagcdn.com/48x36/it.png",
    native: true,
    name: "Marco Rossi",
    email: "Marco-Rossi@gmail.com",
    skypeID: "Marco-Rossi.languages",
    teachingPlatform: "TutorConnect/Marco-Rossi",
    whatsApp: "+1 (555) 111-2222",
    experience: "8 years",
    country: "Italy",
    price: 25,
    time: "Morning, Afternoon",
    days: ["Wed", "Thu", "Fri"],
    reviews: "15",
    rating: 4.5,
    id: 33,
  },
  {
    language: "Russian",
    flag: "https://flagcdn.com/48x36/ru.png",
    native: true,
    name: "Elena Petrova",
    email: "Elena-Petrova@gmail.com",
    skypeID: "Elena-Petrova.languages",
    teachingPlatform: "TutorConnect/Elena-Petrova",
    whatsApp: "+1 (555) 333-4444",
    experience: "4 years",
    country: "Russia",
    price: 12,
    time: "Evening",
    days: ["Mon", "Tue", "Wed", "Thu"],
    reviews: "8",
    rating: 4.0,
    id: 34,
  },
  {
    language: "French",
    flag: "https://flagcdn.com/48x36/fr.png",
    native: true,
    name: "Emma Lefèvre",
    email: "Emma-Lefevre@gmail.com",
    skypeID: "Emma-Lefevre.languages",
    teachingPlatform: "TutorConnect/Emma-Lefevre",
    whatsApp: "+1 (555) 555-6666",
    experience: "3 years",
    country: "France",
    price: 20,
    time: "afternoon",
    days: ["Mon", "Tue", "Wed"],
    reviews: "12",
    rating: 4.2,
    id: 35,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/es.png",
    native: true,
    name: "Ana Ruiz",
    email: "Ana-Ruiz@gmail.com",
    skypeID: "Ana-Ruiz.languages",
    teachingPlatform: "TutorConnect/Ana-Ruiz",
    whatsApp: "+1 (555) 777-8888",
    experience: "6 years",
    country: "Spain",
    price: 18,
    time: "Morning, Evening",
    days: ["Tue", "Wed", "Thu"],
    reviews: "22",
    rating: 4.8,
    id: 36,
  },
  {
    language: "Italian",
    flag: "https://flagcdn.com/48x36/it.png",
    native: true,
    name: "Giuseppe Rossi",
    email: "Giuseppe-Rossi@gmail.com",
    skypeID: "Giuseppe-Rossi.languages",
    teachingPlatform: "TutorConnect/Giuseppe-Rossi",
    whatsApp: "+1 (555) 999-0000",
    experience: "8 years",
    country: "Italy",
    price: 25,
    time: "Morning, Afternoon",
    days: ["Wed", "Thu", "Fri"],
    reviews: "15",
    rating: 4.5,
    id: 37,
  },
  {
    language: "Russian",
    flag: "https://flagcdn.com/48x36/ru.png",
    native: true,
    name: "Svetlana Ivanova",
    email: "Svetlana-Ivanova@gmail.com",
    skypeID: "Svetlana-Ivanova.languages",
    teachingPlatform: "TutorConnect/Svetlana-Ivanova",
    experience: "4 years",
    country: "Russia",
    price: 12,
    time: "Evening",
    days: ["Mon", "Tue", "Wed", "Thu"],
    reviews: "8",
    rating: 4.0,
    id: 38,
  },
  {
    language: "Polish",
    flag: "https://flagcdn.com/48x36/pl.png",
    native: true,
    name: "Marek Kowalski",
    email: "Marek-Kowalski@gmail.com",
    skypeID: "Marek-Kowalski.languages",
    teachingPlatform: "TutorConnect/Marek-Kowalski",
    whatsApp: "+1 (555) 333-4444",
    experience: "5 years",
    country: "Poland",
    price: 16,
    time: "Evening",
    days: ["Mon", "Tue", "Thu", "Fri"],
    reviews: "10",
    rating: 4.3,
    id: 39,
  },
  {
    language: "Chinese",
    flag: "https://flagcdn.com/48x36/cn.png",
    native: true,
    name: "Li Wei",
    email: "Li-Wei@gmail.com",
    skypeID: "Li-Wei.languages",
    teachingPlatform: "TutorConnect/Li-Wei",
    whatsApp: "+1 (555) 555-6666",
    experience: "6 years",
    country: "China",
    price: 22,
    time: "Morning, Afternoon",
    days: ["Mon", "Wed", "Fri"],
    reviews: "18",
    rating: 4.7,
    id: 40,
  },
  {
    language: "Mandarin",
    flag: "https://flagcdn.com/48x36/cn.png",
    native: true,
    name: "Chen Wei",
    email: "Chen-Wei@gmail.com",
    skypeID: "Chen-Wei.languages",
    teachingPlatform: "TutorConnect/Chen-Wei",
    whatsApp: "+1 (555) 777-8888",
    experience: "7 years",
    country: "China",
    price: 28,
    time: "Afternoon, Evening",
    days: ["Tue", "Fri", "Sun"],
    reviews: "20",
    rating: 4.9,
    id: 41,
  },
  {
    language: "Japanese",
    flag: "https://flagcdn.com/48x36/jp.png",
    native: true,
    name: "Hiroshi Nakamura",
    email: "Hiroshi-Nakamura@gmail.com",
    skypeID: "Hiroshi-Nakamura.languages",
    teachingPlatform: "TutorConnect/Hiroshi-Nakamura",
    experience: "9 years",
    country: "Japan",
    price: 26,
    time: "Morning, Afternoon",
    days: ["Wed", "Sat"],
    reviews: "25",
    rating: 4.6,
    id: 42,
  },
  {
    language: "Portuguese",
    flag: "https://flagcdn.com/48x36/pt.png",
    native: true,
    name: "Ana Silva",
    email: "Ana-Silva@gmail.com",
    skypeID: "Ana-Silva.languages",
    teachingPlatform: "TutorConnect/Ana-Silva",
    whatsApp: "+1 (555) 333-4444",
    experience: "4 years",
    country: "Portugal",
    price: 20,
    time: "Evening",
    days: ["Mon", "Thu"],
    reviews: "14",
    rating: 4.4,
    id: 43,
  },
  {
    language: "Danish",
    flag: "https://flagcdn.com/48x36/dk.png",
    native: true,
    name: "Lars Jensen",
    email: "Lars-Jensen@gmail.com",
    skypeID: "Lars-Jensen.languages",
    teachingPlatform: "TutorConnect/Lars-Jensen",
    whatsApp: "+1 (555) 555-6666",
    experience: "6 years",
    country: "Denmark",
    price: 22,
    time: "Morning",
    days: ["Tue", "Wed", "Fri"],
    reviews: "12",
    rating: 4.1,
    id: 44,
  },
  {
    language: "Swedish",
    flag: "https://flagcdn.com/48x36/se.png",
    native: true,
    name: "Eva Andersson",
    email: "Eva-Andersson@gmail.com",
    skypeID: "Eva-Andersson.languages",
    teachingPlatform: "TutorConnect/Eva-Andersson",
    whatsApp: "+1 (555) 777-8888",
    experience: "5 years",
    country: "Sweden",
    price: 18,
    time: "Evening",
    days: ["Mon", "Thu"],
    reviews: "16",
    rating: 4.7,
    id: 45,
  },
  {
    language: "Ukrainian",
    flag: "https://flagcdn.com/48x36/ua.png",
    native: true,
    name: "Olena Petrovych",
    email: "Olena-Petrovych@gmail.com",
    skypeID: "Olena-Petrovych.languages",
    teachingPlatform: "TutorConnect/Olena-Petrovych",
    experience: "3 years",
    country: "Ukraine",
    price: 15,
    time: "Afternoon",
    days: ["Tue", "Sat"],
    reviews: "10",
    rating: 4.3,
    id: 46,
  },
  {
    language: "Czech",
    flag: "https://flagcdn.com/48x36/cz.png",
    native: true,
    name: "Martin Novak",
    email: "Martin-Novak@gmail.com",
    skypeID: "Martin-Novak.languages",
    teachingPlatform: "TutorConnect/Martin-Novak",
    whatsApp: "+1 (555) 111-2222",
    experience: "7 years",
    country: "Czech Republic",
    price: 24,
    time: "Evening",
    days: ["Mon", "Wed", "Fri"],
    reviews: "18",
    rating: 4.8,
    id: 47,
  },
  {
    language: "French",
    flag: "https://flagcdn.com/48x36/fr.png",
    native: true,
    name: "Sophie Martin",
    email: "Sophie-Martin@gmail.com",
    skypeID: "Sophie-Martin.languages",
    teachingPlatform: "TutorConnect/Sophie-Martin",
    whatsApp: "+1 (555) 333-4444",
    experience: "5 years",
    country: "France",
    price: 20,
    time: "Morning, Afternoon",
    days: ["Tue", "Fri"],
    reviews: "17",
    rating: 4.5,
    id: 48,
  },
  {
    language: "German",
    flag: "https://flagcdn.com/48x36/de.png",
    native: true,
    name: "Maximilian Müller",
    email: "Maximilian-Muller@gmail.com",
    skypeID: "Maximilian-Muller.languages",
    teachingPlatform: "TutorConnect/Maximilian-Muller",
    experience: "6 years",
    country: "Germany",
    price: 22,
    time: "Morning, Evening",
    days: ["Wed", "Sat"],
    reviews: "21",
    rating: 4.7,
    id: 49,
  },
  {
    language: "Spanish",
    flag: "https://flagcdn.com/48x36/es.png",
    native: true,
    name: "Carlos Hernandez",
    email: "Carlos-Hernandez@gmail.com",
    skypeID: "Carlos-Hernandez.languages",
    teachingPlatform: "TutorConnect/Carlos-Hernandez",
    whatsApp: "+1 (555) 777-8888",
    experience: "4 years",
    country: "Spain",
    price: 18,
    time: "Afternoon",
    days: ["Mon", "Wed", "Fri", "Sat"],
    reviews: "14",
    rating: 4.2,
    id: 50,
  },
  {
    language: "Italian",
    flag: "https://flagcdn.com/48x36/it.png",
    native: true,
    name: "Giulia Bianchi",
    email: "Giulia-Bianchi@gmail.com",
    skypeID: "Giulia-Bianchi.languages",
    teachingPlatform: "TutorConnect/Giulia-Bianchi",
    whatsApp: "+1 (555) 999-0000",
    experience: "3 years",
    country: "Italy",
    price: 19,
    time: "Morning",
    days: ["Tue", "Thu"],
    reviews: "12",
    rating: 4.0,
    id: 51,
  },
  {
    language: "Russian",
    flag: "https://flagcdn.com/48x36/ru.png",
    native: true,
    name: "Ivan Petrov",
    email: "Ivan-Petrov@gmail.com",
    skypeID: "Ivan-Petrov.languages",
    teachingPlatform: "TutorConnect/Ivan-Petrov",
    experience: "7 years",
    country: "Russia",
    price: 24,
    time: "Afternoon, Evening",
    days: ["Mon", "Thu", "Sat"],
    reviews: "20",
    rating: 4.6,
    id: 52,
  },
  {
    language: "Polish",
    flag: "https://flagcdn.com/48x36/pl.png",
    native: true,
    name: "Katarzyna Nowak",
    email: "Katarzyna-Nowak@gmail.com",
    skypeID: "Katarzyna-Nowak.languages",
    teachingPlatform: "TutorConnect/Katarzyna-Nowak",
    whatsApp: "+1 (555) 333-4444",
    experience: "5 years",
    country: "Poland",
    price: 21,
    time: "Morning",
    days: ["Wed"],
    reviews: "16",
    rating: 4.4,
    id: 53,
  },
  {
    language: "Chinese",
    flag: "https://flagcdn.com/48x36/cn.png",
    native: true,
    name: "Wang Li",
    email: "Wang-Li@gmail.com",
    skypeID: "Wang-Li.languages",
    teachingPlatform: "TutorConnect/Wang-Li",
    whatsApp: "+1 (555) 555-6666",
    experience: "6 years",
    country: "China",
    price: 26,
    time: "Morning, Afternoon, Evening",
    days: ["Tue", "Fri", "Sun"],
    reviews: "19",
    rating: 4.8,
    id: 54,
  },
];

export default TeachersArray;
