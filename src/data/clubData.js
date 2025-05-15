// src/data/clubData.js
const clubData = {
  name: "Club Enactus",
  logo: "logo.png",
  description: "Enactus est un réseau mondial qui inspire les jeunes à utiliser l'entrepreneuriat pour résoudre les défis sociaux et économiques. Enactus Maroc, fondé en 2003, fait partie de ce réseau et offre aux étudiants l'opportunité de concrétiser des projets innovants ayant un impact direct sur leur communauté.",
  objective: "Encourager les étudiants à développer des projets d'entrepreneuriat social et durable pour répondre aux besoins de la communauté.",
  members: [
   
   { id: 1, name: "Maryam BADRI", role: " Vice Team Leader", photo: "maryam.png" },
    { id: 2, name: "Basma JAWHAR", role: "Event Manager", photo: "basma.png" },
    { id: 3, name: "Imane OUAZZANI CHAHDI", role: " Head of partnerships", photo: "imane.png" },
    { id: 4, name: "Ammar MASSAOUDI ", role: "Communication Manager", photo: "ammar.png" },

  ],
  events: [
    {
      id: 1,
      title: "Atelier Design Thinking",
      date: "15 Mai 2025",
      location: "Amphi 4",
      description: "Un atelier pour apprendre à identifier des problèmes sociaux et concevoir des solutions innovantes."
    },
    {
      id: 2,
      title: "Challenge Enactus Campus",
      date: "22 Mai 2025",
      location: "Amphi 3",
      description: "Une compétition interne pour sélectionner les meilleurs projets à présenter au concours national."
    },
    {
      id: 3,
      title: "Conférence: L'Entrepreneuriat Social au Maroc",
      date: "5 Juin 2025",
      location: "Amphi 7",
      description: "Des intervenants inspirants partagent leurs parcours dans l'impact social à travers l'entrepreneuriat."
    }
  ],
  contact: {
    email: "enactus@universite.edu",
    phone: "+212 522 123 456",
    socials: {
      instagram: "@Enactus",
      linkedin: "Club Enactus",
      twitter: "@Enactus"
    }
  }
};

export default clubData;
