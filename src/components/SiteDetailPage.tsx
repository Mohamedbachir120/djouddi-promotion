import {
  ArrowLeft,
  MapPin,
  Bed,
  Car,
  TreePine,
  Waves,
  Dumbbell,
  Baby,
  Shield,
  Camera,
  Home,
  Building,
  CheckCircle,
  Phone,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface SiteDetailPageProps {
  siteId: string;
  onNavigate: (page: string, siteId?: string) => void;
}

const sitesData: Record<string, any> = {
  'el-bahdja': {
    name: 'Résidence El Bahdja',
    location: 'Alger Centre',
    mainImage: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjExODYxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gallery: [
      'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjExODYxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzYxMTk4NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1612143241883-35889d1d65ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxMjU1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1744551472726-24a3eb12e82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaXRuZXNzJTIwZ3ltfGVufDF8fHx8MTc2MTI1NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    status: 'Livré',
    surface: '15 000 m²',
    apartments: 120,
    description:
      'Résidence El Bahdja est un complexe résidentiel haut de gamme situé en plein cœur d\'Alger. Alliant élégance architecturale et confort moderne, cette résidence offre un cadre de vie exceptionnel pour les familles exigeantes. Les finitions premium et les équipements de pointe garantissent une qualité de vie incomparable.',
    longDescription:
      'Le projet se distingue par son architecture contemporaine et ses espaces généreux. Chaque appartement a été conçu pour maximiser la lumière naturelle et offrir des vues dégagées. La résidence bénéficie d\'un emplacement stratégique avec un accès facile aux principaux axes routiers, aux commerces, et aux établissements scolaires de renom.',
    features: [
      { icon: Home, title: 'Appartements F2 à F5', value: '120 logements' },
      { icon: Building, title: 'Surface totale', value: '15 000 m²' },
      { icon: MapPin, title: 'Localisation', value: 'Alger Centre' },
      { icon: CheckCircle, title: 'Statut', value: 'Livré' },
    ],
    activities: [
      { icon: Car, name: 'Parking couvert', description: 'Places de stationnement sécurisées' },
      { icon: Waves, name: 'Piscine', description: 'Piscine chauffée toute saison' },
      { icon: TreePine, name: 'Jardin paysager', description: 'Espaces verts aménagés' },
      { icon: Dumbbell, name: 'Salle de sport', description: 'Équipements modernes' },
      { icon: Baby, name: 'Aire de jeux', description: 'Pour les enfants' },
      { icon: Shield, name: 'Sécurité 24/7', description: 'Surveillance continue' },
      { icon: Camera, name: 'Vidéosurveillance', description: 'Systèmes de sécurité avancés' },
      { icon: Home, name: 'Conciergerie', description: 'Service de qualité' },
    ],
  },
  'jardins-hydra': {
    name: 'Les Jardins de Hydra',
    location: 'Hydra',
    mainImage: 'https://images.unsplash.com/photo-1747555094127-9a922d56a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTIwMTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gallery: [
      'https://images.unsplash.com/photo-1747555094127-9a922d56a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTIwMTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1612143241883-35889d1d65ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxMjU1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzYxMTk4NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1744551472726-24a3eb12e82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaXRuZXNzJTIwZ3ltfGVufDF8fHx8MTc2MTI1NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    status: 'En vente',
    surface: '20 000 m²',
    apartments: 150,
    description:
      'Les Jardins de Hydra représentent l\'alliance parfaite entre luxe et nature. Situé dans le quartier le plus prestigieux d\'Alger, ce projet offre un cadre de vie exceptionnel avec des espaces verts généreux et des équipements haut de gamme.',
    longDescription:
      'Ce complexe résidentiel unique bénéficie d\'un environnement verdoyant exceptionnel avec plus de 8000 m² d\'espaces paysagers. L\'architecture élégante s\'intègre harmonieusement dans son environnement tout en offrant des prestations modernes et luxueuses.',
    features: [
      { icon: Home, title: 'Appartements F3 à F6', value: '150 logements' },
      { icon: Building, title: 'Surface totale', value: '20 000 m²' },
      { icon: MapPin, title: 'Localisation', value: 'Hydra' },
      { icon: CheckCircle, title: 'Statut', value: 'En vente' },
    ],
    activities: [
      { icon: Car, name: 'Parking souterrain', description: '2 niveaux de parking' },
      { icon: Waves, name: 'Piscine olympique', description: 'Piscine 25m chauffée' },
      { icon: TreePine, name: 'Parc paysager', description: '8000 m² d\'espaces verts' },
      { icon: Dumbbell, name: 'Centre fitness', description: 'Équipements premium' },
      { icon: Baby, name: 'Crèche', description: 'Garderie sur place' },
      { icon: Shield, name: 'Sécurité renforcée', description: 'Contrôle d\'accès' },
      { icon: Camera, name: 'Vidéosurveillance', description: 'Système intelligent' },
      { icon: Home, name: 'Club house', description: 'Espace de réception' },
      { icon: Dumbbell, name: 'Spa & Sauna', description: 'Espace bien-être' },
      { icon: TreePine, name: 'Terrains de sport', description: 'Tennis et basket' },
    ],
  },
  'perle-zeralda': {
    name: 'La Perle de Zeralda',
    location: 'Zeralda',
    mainImage: 'https://images.unsplash.com/photo-1505138074712-436c81be4f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGNvbXBsZXglMjBhZXJpYWx8ZW58MXx8fHwxNzYxMjU1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    gallery: [
      'https://images.unsplash.com/photo-1505138074712-436c81be4f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGNvbXBsZXglMjBhZXJpYWx8ZW58MXx8fHwxNzYxMjU1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzYxMTk4NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1649486116192-8cdcf218daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBwYXJrfGVufDF8fHx8MTc2MTI1NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1612143241883-35889d1d65ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxMjU1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    status: 'En construction',
    surface: '30 000 m²',
    apartments: 200,
    description:
      'La Perle de Zeralda est le plus grand projet de Djoudi Promotion. Ce complexe résidentiel moderne avec vue sur mer offre une gamme complète d\'équipements et de loisirs pour toute la famille.',
    longDescription:
      'Situé à quelques minutes de la mer, ce projet d\'envergure redéfinit le concept de résidence balnéaire de luxe. Avec ses 30 000 m² de surface, il propose un véritable art de vivre avec des infrastructures sportives et de loisirs exceptionnelles.',
    features: [
      { icon: Home, title: 'Appartements F2 à F7', value: '200 logements' },
      { icon: Building, title: 'Surface totale', value: '30 000 m²' },
      { icon: MapPin, title: 'Localisation', value: 'Zeralda - Vue mer' },
      { icon: CheckCircle, title: 'Statut', value: 'En construction' },
    ],
    activities: [
      { icon: Car, name: 'Parking 3 niveaux', description: 'Places visiteurs incluses' },
      { icon: Waves, name: 'Complexe aquatique', description: 'Piscines couverte et extérieure' },
      { icon: TreePine, name: 'Parc naturel', description: '10 000 m² d\'espaces verts' },
      { icon: Dumbbell, name: 'Complexe sportif', description: 'Salle omnisports' },
      { icon: Baby, name: 'Aire de jeux XXL', description: 'Multiple zones de jeux' },
      { icon: Shield, name: 'Sécurité premium', description: 'Contrôle biométrique' },
      { icon: Camera, name: 'Vidéosurveillance IA', description: 'Intelligence artificielle' },
      { icon: Home, name: 'Village commercial', description: 'Commerces de proximité' },
      { icon: Dumbbell, name: 'Spa & Wellness', description: 'Centre de bien-être' },
      { icon: TreePine, name: 'Complexe sportif', description: 'Tennis, basket, foot' },
      { icon: Waves, name: 'Plage privée', description: 'Accès direct à la plage' },
      { icon: Home, name: 'Restaurant panoramique', description: 'Vue mer' },
    ],
  },
};

export function SiteDetailPage({ siteId, onNavigate }: SiteDetailPageProps) {
  const site = sitesData[siteId] || sitesData['el-bahdja'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate('sites')}
            className="text-[#1a1a1a] hover:text-[#f04230]"
          >
            <ArrowLeft className="mr-2" size={20} />
            Retour aux sites
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src={site.mainImage}
          alt={site.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="max-w-7xl mx-auto">
            <Badge className="bg-[#f04230] text-white mb-4">{site.status}</Badge>
            <h1 className="text-5xl mb-4 text-[#f04230]">{site.name}</h1>
            <div className="flex items-center text-xl">
              <MapPin className="mr-2" size={24} />
              {site.location}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl text-[#1a1a1a] mb-4">À propos du projet</h2>
                  <p className="text-gray-700 mb-4">{site.description}</p>
                  <p className="text-gray-700">{site.longDescription}</p>
                </CardContent>
              </Card>

              {/* Features Grid */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl text-[#1a1a1a] mb-6">Caractéristiques</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {site.features.map((feature: any, index: number) => (
                      <div
                        key={index}
                        className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg"
                      >
                        <feature.icon className="text-[#f04230] mb-2" size={32} />
                        <p className="text-sm text-gray-600 mb-1">{feature.title}</p>
                        <p className="text-[#1a1a1a]">{feature.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Activities & Amenities */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl text-[#1a1a1a] mb-6">Activités & Équipements</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {site.activities.map((activity: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-[#f04230]/10 transition-colors"
                      >
                        <div className="w-12 h-12 bg-[#f04230]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <activity.icon className="text-[#f04230]" size={24} />
                        </div>
                        <div>
                          <h4 className="text-[#1a1a1a] mb-1">{activity.name}</h4>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl text-[#1a1a1a] mb-6">Galerie photos</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {site.gallery.map((image: string, index: number) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={image}
                          alt={`${site.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="bg-[#1a1a1a] text-white sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#f04230] mb-4">Intéressé par ce projet ?</h3>
                  <p className="text-gray-300 mb-6">
                    Contactez nos conseillers pour plus d'informations ou pour planifier une visite.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-[#f04230] text-white hover:bg-[#f04230]/90">
                      <Phone className="mr-2" size={20} />
                      Demander une visite
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-[#f04230] text-[#f04230] hover:bg-[#f04230] hover:text-white"
                      onClick={() => onNavigate('contact')}
                    >
                      Contacter un conseiller
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-2">Disponibilité</p>
                    <p className="text-white">{site.status}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-400 mb-2">Logements disponibles</p>
                    <p className="text-white">{site.apartments} appartements</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
