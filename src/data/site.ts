// Real content and media for Djoudi Promotion, taken from https://djoudi-promotion.com/
// and the reference-djoudi-audit media folder.
import {
  Car,
  Tv,
  ArrowUpDown,
  Dumbbell,
  Shield,
  Wind,
  ShowerHead,
  CookingPot,
  Building,
  Baby,
} from 'lucide-react';

export const company = {
  name: 'Djoudi Promotion',
  phones: ['023 21 18 02', '0561 89 71 66', '0560 94 46 85'],
  email: 'contact@djoudi-promotion.com',
  address: ['Ilot Cadastral N°01 - Section 15', 'Ain Allah, Dely Brahim, Alger, Algérie'],
  addressNote: 'Rendez nous visite à notre siege qui se situe au sein de la résidence le versant',
  mapEmbedUrl: 'https://maps.google.com/maps?q=QX3P%2BRQ%20Dely%20Ibrahim&t=m&z=15&output=embed&iwloc=near',
  socials: {
    facebook: 'https://web.facebook.com/profile.php?id=100094258637986',
    instagram: 'https://www.instagram.com/djoudi_promotion_immobiliere/',
    linkedin: 'https://www.linkedin.com/in/djoudi-promotion-361252282/',
    youtube: 'https://www.youtube.com/@DjoudiPromotion/videos',
    tiktok: 'https://www.tiktok.com/@djoudipromotion',
  },
};

export const media = {
  heroVideo: '/videos/lux-drone-1280.mp4',
  heroPoster: '/videos/lux-poster.jpg',
  about: '/images/lux/render-balcon.jpg',
  headquarters: '/images/company/siege.jpg',
};

export const aboutText =
  "est un promoteur immobilier de référence basé à Alger, reconnu pour son expertise et son savoir-faire dans le domaine de la construction et de la promotion immobilière. Forts de plusieurs années d'expérience, nous concevons des projets qui allient esthétique, fonctionnalité et qualité. Notre mission est de transformer vos rêves immobiliers en réalité en créant des espaces de vie modernes, confortables et adaptés aux besoins de nos clients";

export const whyText =
  "nous sommes fiers de notre expertise dans le développement de biens immobiliers de haute qualité. Nous mettons tout en œuvre pour vous offrir des projets d'exception qui répondent à vos attentes les plus exigeantes. Voici quelques raisons pour lesquelles vous devriez nous faire confiance :";

export const investText =
  "Acquérir un bien immobilier avec Djoudi Promotion, c'est opter pour un investissement sécurisé et pérenne. Nos résidences, conçues avec soin selon des normes internationales, offrent un cadre de vie alliant haut standing, confort moderne et commodités. Que ce soit pour y vivre ou pour louer, nos biens représentent une valeur sûre pour construire un patrimoine solide.";

export const partnerParagraphs = [
  "Djoudi Promotion est une société spécialisée dans la promotion immobilière, dédiée à la création de biens d'exception et à l'implantation de projets prestigieux sur le marché immobilier algérien. Grâce à nos réalisations de qualité, nous avons bâti une réputation de sérieux et de fiabilité.",
  "Forte de son expérience et de son ancrage local, Djoudi Promotion est fière de ses projets emblématiques qui reflètent notre expertise et notre engagement envers l'excellence.",
  'Notre mission : concevoir et commercialiser des constructions immobilières pensées pour répondre aux besoins de nos clients et garantir leur satisfaction.',
  'Avec Djoudi Promotion, vous choisissez une vision audacieuse et un engagement à respecter les plus hauts standards pour vos projets immobiliers.',
];

// Headings the contact page gives the four paragraphs above.
export const partnerLabels = ['Notre métier', 'Notre expérience', 'Notre mission', 'Notre engagement'];

export const contactIntro =
  'nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans la réalisation de vos projets immobiliers haut de gamme. Que vous souhaitiez obtenir des informations sur nos résidences ou planifier une visite, notre équipe est là pour vous.';

// "Les Commodités" — identical list on every residence page of the original site.
export const amenities = [
  {
    id: 'parking',
    icon: Car,
    name: 'Parking sous-sol',
    description: 'Places de stationnement en sous-sol pour les résidents.',
  },
  {
    id: 'cable-tv',
    icon: Tv,
    name: 'Maintenance câble TV',
    description: 'Réseau de câble TV entretenu pour tous les appartements.',
  },
  {
    id: 'ascenseur',
    icon: ArrowUpDown,
    name: 'Ascenseur',
    description: 'Ascenseurs desservant tous les étages de la résidence.',
  },
  {
    id: 'sport',
    icon: Dumbbell,
    name: 'Salle de sport',
    description: 'Une salle de sport au sein de la résidence.',
  },
  {
    id: 'securite',
    icon: Shield,
    name: 'Sécurité 24/7',
    description: 'Un environnement sécurisé et clôturé, surveillé jour et nuit.',
    image: '/images/lux/lux-phase3-completed-dji0187.jpg',
  },
  {
    id: 'climatisation',
    icon: Wind,
    name: 'Climatisation centralisée',
    description: 'Climatisation centralisée, isolation thermique et phonique et chauffage central.',
    image: '/images/appartement-temoin/dsc04920-living-sofa.jpg',
  },
  {
    id: 'douches',
    icon: ShowerHead,
    name: 'Douches italiennes',
    description: 'Salles de bain aménagées avec douche italienne.',
    image: '/images/appartement-temoin/dsc04940-bathroom.jpg',
  },
  {
    id: 'cuisine',
    icon: CookingPot,
    name: 'Cuisine équipée',
    description: 'Des cuisines entièrement équipées livrées avec chaque appartement.',
    image: '/images/appartement-temoin/dsc04925-kitchen.jpg',
  },
  {
    id: 'gestion',
    icon: Building,
    name: 'Gestion intérieure',
    description:
      "Djoudi Promotion assure la gestion intérieur en maintenant le calme et la sérénité à l'intérieur de la résidence.",
    image: '/images/lux/lux-phase3-courtyard-img158.jpg',
  },
  {
    id: 'jeux',
    icon: Baby,
    name: 'Aires de jeux',
    description: 'Des aires de jeux et espaces verts pour toute la famille.',
    image: '/images/lux/render-cour.jpg',
  },
];

export interface Typology {
  type: string;
  surface?: string;
}

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface Residence {
  id: string;
  name: string;
  location: string;
  cover: string;
  /** CSS object-position for the cover photo when it is cropped. */
  coverFocus?: string;
  /** Shown on the cover when it does not depict the building itself. */
  coverNote?: string;
  summary: string;
  description: string[];
  status?: string;
  units?: string;
  typologies: Typology[];
  gallery: GalleryImage[];
  chronology?: { title: string; images: GalleryImage[] }[];
  showApartment: boolean;
}

export const showApartment: GalleryImage[] = [
  { src: '/images/appartement-temoin/dsc04913-living-dining.jpg', caption: 'Séjour et salle à manger' },
  { src: '/images/appartement-temoin/dsc04920-living-sofa.jpg', caption: 'Salon' },
  { src: '/images/appartement-temoin/dsc04925-kitchen.jpg', caption: 'Cuisine équipée' },
  { src: '/images/appartement-temoin/dsc04930-bedroom.jpg', caption: 'Chambre parentale' },
  { src: '/images/appartement-temoin/dsc04940-bathroom.jpg', caption: 'Salle de bain avec douche italienne' },
  { src: '/images/appartement-temoin/dsc04950-balcony-view.jpg', caption: 'Balcon' },
  { src: '/images/appartement-temoin/dsc04955-living-closeup.jpg', caption: 'Coin salon' },
];

export const residences: Residence[] = [
  {
    id: 'le-versant',
    name: 'Résidence Le Versant',
    location: 'Dely Brahim, Alger',
    cover: '/images/le-versant/render-jour.jpg',
    coverFocus: '55% 40%',
    summary:
      'Le Versant offre des appartements haut de gamme dans un cadre sécurisé, avec une vue imprenable sur Dely Brahim, alliant confort et luxe.',
    description: [
      "Le Versant Offre le meilleur confort en termes d'emplacement et d'infrastructure avec une vue qui surplombe Dely Brahim. L'architecture et l'infrastructure qu'offre Le Versant prends en considération tout les détails qui comptent pour assurer vôtre confort.",
      "Tout ceci dans un environnement sécurisé et clôturé en assurant un séjour luxueux à l'intérieur et autour de vôtre maison. Djoudi Promotion, Bien plus que des appartements de Luxe.",
    ],
    typologies: [
      { type: 'F3', surface: '132m2 - 136 m2' },
      { type: 'F4', surface: '156 m2 - 167m2' },
      { type: 'F5', surface: '276 m2 – 290 m2' },
    ],
    gallery: [
      { src: '/images/le-versant/render-jour.jpg', caption: 'Perspective de jour' },
      { src: '/images/le-versant/render-nuit.jpg', caption: 'Perspective de nuit' },
    ],
    showApartment: true,
  },
  {
    id: 'lux',
    name: 'Résidence Lux 1 & 2',
    location: 'Chéraga, Alger',
    cover: '/images/lux/lux-phase3-completed-dji0182.jpg',
    status: 'Livré',
    units: '156 logements',
    summary:
      'À Chéraga, Dar diaf constituée de 156 logements en rdc+11 étages. Djoudi Promotion vous offre la résidence parfaite pour toute famille.',
    description: [
      "À Chéraga, Dar diaf constituée de 156 logements en rdc+11 étages. Djoudi Promotion vous offre la résidence parfaite pour toute famille. Suffisamment près de la ville tout en étant loin des difficultés de cette dernière. L'architecture et l'infrastructure qu'offre La Résidence LUX prends en considération tout les détails qui comptent pour assurer vôtre confort.",
      "Tout ceci dans un environnement sécurisé et clôturé en assurant un séjour luxueux à l'intérieur et autour de vôtre maison. Des Appartements de luxe avec une Climatisation Centralisé, une isolation Thermique et Phonique Chauffage centrale, Cuisine équipée et une Salle de Bain Aménagé avec Douche italienne.",
    ],
    typologies: [{ type: 'F3' }, { type: 'F4' }, { type: 'F5' }],
    gallery: [
      { src: '/images/lux/lux-phase3-completed-dji0182.jpg', caption: 'La résidence livrée' },
      { src: '/images/lux/lux-phase3-completed-dji0187.jpg', caption: 'Vue aérienne' },
      { src: '/images/lux/render-cour.jpg', caption: 'La cour intérieure' },
      { src: '/images/lux/render-balcon.jpg', caption: 'Vue depuis un balcon' },
      { src: '/images/lux/lux-phase3-courtyard-img158.jpg', caption: 'La cour aménagée' },
      { src: '/images/lux/lux-phase2-panorama-bibron11.jpg', caption: 'La résidence dans son quartier' },
    ],
    chronology: [
      {
        title: 'Gros œuvre',
        images: [
          { src: '/images/lux/lux-phase1-structural-dji0018.jpg', caption: 'Structure en béton' },
          { src: '/images/lux/lux-phase1-structural-dji0041.jpg', caption: 'Dalles et poteaux' },
          { src: '/images/lux/lux-phase1-structural-dji0046.jpg', caption: 'Élévation de la structure' },
        ],
      },
      {
        title: 'Finitions',
        images: [
          { src: '/images/lux/lux-phase2-finishing-bibron01.jpg', caption: 'Façades et vitrages' },
          { src: '/images/lux/lux-phase2-finishing-bibron06.jpg', caption: 'Terrasses et garde-corps' },
          { src: '/images/lux/lux-phase2-finishing-bibron08.jpg', caption: 'Les deux tours avant livraison' },
        ],
      },
      {
        title: 'Livraison',
        images: [
          { src: '/images/lux/lux-phase3-completed-dji0182.jpg', caption: 'La résidence au coucher du soleil' },
          { src: '/images/lux/lux-phase3-completed-dji0187.jpg', caption: 'Toitures et façades achevées' },
          { src: '/images/lux/lux-phase3-courtyard-img158.jpg', caption: 'La cour centrale' },
        ],
      },
    ],
    showApartment: true,
  },
  {
    id: 'la-baie-dalger',
    name: "Résidence La Baie d'Alger",
    location: 'Beb Ezzouar, Alger',
    // No exterior photo of this residence exists in the reference media; the
    // original page itself only shows the show apartment.
    cover: '/images/appartement-temoin/dsc04950-balcony-view.jpg',
    coverNote: 'Appartement témoin',
    units: '147 appartements',
    summary:
      "Avec une vue sur Mer qui surplombe la magnifique Baie d'Alger, Djoudi Promotion allie la luxure et haut standing avec le paysage merveilleux qu'offre la Baie de nôtre capitale.",
    description: [
      "Avec une vue sur Mer qui surplombe la magnifique Baie d'Alger, Djoudi Promotion allie la luxure et haut standing avec le paysage merveilleux qu'offre la Baie de nôtre capitale à travers la Résidence la Baie d'Alger. La Résidence la Baie d'Alger comprenant un total de 147 appartements répartis dans deux cages d'escalier distinctes Offre le nécessaire et plus pour vôtre confort, des aires de jeux, espaces verts et centres de loisirs.",
      "Les appartements sont toujours digne du standing et la qualité des Résidences Djoudi Promotion avec climatisation centralisée, isolation thermique et phonique, fenêtres coulissantes en Alu et volets roulants, cuisine équipée et douches italiennes et chauffage centrale. Djoudi Promotion assure la gestion intérieur en maintenant le calme et la sérénité à l'intérieur de la résidence.",
    ],
    typologies: [
      { type: 'F2', surface: '78m2 -82m2' },
      { type: 'F3', surface: '162m2 – 128 m2 -138m2-132m2-140m2' },
      { type: 'F4', surface: '161m2 – 180m2 -202 m2-171 m2' },
      { type: 'F5', surface: '217m2 – 219 m2' },
      { type: 'F6', surface: '313 m2- 299 m2 -402 m2' },
    ],
    gallery: [],
    showApartment: true,
  },
  {
    id: 'colina-del-viento',
    name: 'Résidence Colina del Viento',
    location: 'Draria, Alger',
    cover: '/images/colina-del-viento/render.jpg',
    coverFocus: '40% 50%',
    summary:
      "Située au cœur de l'un des quartiers les plus prestigieux de Draria, la Résidence Colina del Viento distingue par son architecture moderne et élégante.",
    description: [
      "Située au cœur de l'un des quartiers les plus prestigieux de Draria, la Résidence Colina del Viento distingue par son architecture moderne et élégante. Avec ses façades sublimées, elle incarne un cadre de vie raffiné et harmonieux.",
      "Ce projet immobilier contemporain s'intègre parfaitement à son environnement et s'élève sur plusieurs niveaux. Il propose une variété d'appartements, du F2,F3,F4,F5 en simplex, répartis sur quatre blocs entourant une vaste esplanade. Véritable espace de détente et de convivialité, cette dernière est agrémentée d'une aire de jeux, offrant un cadre idéal pour toute la famille.",
      "Pensée pour un quotidien confortable et dynamique, la résidence bénéficie d'un emplacement stratégique, à proximité des principaux axes autoroutiers, des zones commerçantes, des infrastructures sportives et des espaces dédiés au bien-être et aux loisirs.",
    ],
    typologies: [
      { type: 'F3', surface: '94m2-95m2-103m2-118m2' },
      { type: 'F4', surface: '119m2-129m2-144m2' },
      { type: 'F5', surface: '197m2' },
    ],
    gallery: [{ src: '/images/colina-del-viento/render.jpg', caption: 'Perspective de la résidence' }],
    showApartment: false,
  },
];

export const typologyRange = (r: Residence) =>
  r.typologies.length > 1
    ? `${r.typologies[0].type} à ${r.typologies[r.typologies.length - 1].type}`
    : r.typologies[0]?.type ?? '';
