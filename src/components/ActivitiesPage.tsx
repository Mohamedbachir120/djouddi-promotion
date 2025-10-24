import { Car, Waves, TreePine, Dumbbell, Baby, Shield, Camera, Home, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ActivitiesPageProps {
  onNavigate: (page: string, siteId?: string) => void;
}

const activities = [
  {
    id: 'parking',
    icon: Car,
    name: 'Parking Sécurisé',
    description:
      'Parkings couverts et souterrains avec places de stationnement sécurisées pour résidents et visiteurs. Système de contrôle d\'accès automatisé.',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjExODYxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sites: ['El Bahdja', 'Jardins de Hydra', 'Perle de Zeralda'],
    availableAt: 6,
  },
  {
    id: 'pool',
    icon: Waves,
    name: 'Piscines',
    description:
      'Piscines modernes chauffées toute l\'année, avec espaces détente et zones pour enfants. Certains sites disposent de piscines olympiques et de complexes aquatiques.',
    image: 'https://images.unsplash.com/photo-1724688078741-6d89e587e809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2ltbWluZyUyMHBvb2x8ZW58MXx8fHwxNzYxMTk4NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sites: ['El Bahdja', 'Jardins de Hydra', 'Perle de Zeralda'],
    availableAt: 6,
  },
  {
    id: 'gardens',
    icon: TreePine,
    name: 'Jardins Paysagers',
    description:
      'Vastes espaces verts aménagés avec végétation luxuriante, allées piétonnes, zones de repos et fontaines. Des espaces naturels pour la détente et les promenades.',
    image: 'https://images.unsplash.com/photo-1612143241883-35889d1d65ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnYXJkZW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxMjU1NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sites: ['El Bahdja', 'Jardins de Hydra', 'Perle de Zeralda'],
    availableAt: 6,
  },
  {
    id: 'gym',
    icon: Dumbbell,
    name: 'Salles de Sport',
    description:
      'Centres fitness équipés d\'appareils de musculation dernière génération, espaces cardio, et cours collectifs. Certains sites disposent de spas et saunas.',
    image: 'https://images.unsplash.com/photo-1744551472726-24a3eb12e82a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaXRuZXNzJTIwZ3ltfGVufDF8fHx8MTc2MTI1NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sites: ['El Bahdja', 'Jardins de Hydra', 'Perle de Zeralda'],
    availableAt: 6,
  },
  {
    id: 'playground',
    icon: Baby,
    name: 'Aires de Jeux',
    description:
      'Espaces de jeux sécurisés et modernes pour enfants de tous âges, avec équipements certifiés et zones ombragées pour le confort des parents.',
    image: 'https://images.unsplash.com/photo-1649486116192-8cdcf218daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBwYXJrfGVufDF8fHx8MTc2MTI1NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sites: ['El Bahdja', 'Jardins de Hydra', 'Perle de Zeralda'],
    availableAt: 6,
  },
  {
    id: 'security',
    icon: Shield,
    name: 'Sécurité 24/7',
    description:
      'Surveillance continue avec agents de sécurité, contrôle d\'accès, et systèmes d\'alarme. Tranquillité d\'esprit garantie pour tous les résidents.',
    image: 'https://images.unsplash.com/photo-1627392661510-c8b7c825db29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMG1vZGVybnxlbnwxfHx8fDE3NjEyNTU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sites: ['El Bahdja', 'Jardins de Hydra', 'Perle de Zeralda'],
    availableAt: 6,
  },
  {
    id: 'surveillance',
    icon: Camera,
    name: 'Vidéosurveillance',
    description:
      'Systèmes de vidéosurveillance haute définition couvrant tous les espaces communs. Technologies intelligentes pour une sécurité optimale.',
    image: 'https://images.unsplash.com/photo-1627392661510-c8b7c825db29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMG1vZGVybnxlbnwxfHx8fDE3NjEyNTU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sites: ['El Bahdja', 'Jardins de Hydra', 'Perle de Zeralda'],
    availableAt: 6,
  },
  {
    id: 'concierge',
    icon: Home,
    name: 'Conciergerie',
    description:
      'Service de conciergerie professionnel pour assister les résidents dans leur quotidien. Gestion des colis, réservations, et services personnalisés.',
    image: 'https://images.unsplash.com/photo-1505138074712-436c81be4f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGNvbXBsZXglMjBhZXJpYWx8ZW58MXx8fHwxNzYxMjU1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    sites: ['El Bahdja', 'Jardins de Hydra', 'Perle de Zeralda'],
    availableAt: 5,
  },
];

export function ActivitiesPage({ onNavigate }: ActivitiesPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-[#f04230] mb-4">Activités & Loisirs</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Djoudi Promotion vous offre une gamme complète d'équipements et de services pour enrichir votre
            quotidien et celui de votre famille
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-[#f04230] mb-2">8+</div>
              <p className="text-gray-600">Types d'activités</p>
            </div>
            <div>
              <div className="text-4xl text-[#f04230] mb-2">6</div>
              <p className="text-gray-600">Sites équipés</p>
            </div>
            <div>
              <div className="text-4xl text-[#f04230] mb-2">24/7</div>
              <p className="text-gray-600">Sécurité</p>
            </div>
            <div>
              <div className="text-4xl text-[#f04230] mb-2">100%</div>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#f04230] group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#f04230] rounded-lg flex items-center justify-center">
                      <activity.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      Disponible dans {activity.availableAt} sites
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#1a1a1a] mb-3">{activity.name}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">Sites proposant cette activité :</p>
                    <div className="flex flex-wrap gap-2">
                      {activity.sites.map((site, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-[#f04230] text-[#f04230]"
                        >
                          {site}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#1a1a1a] mb-4">Un cadre de vie exceptionnel</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tous nos sites sont conçus pour offrir un équilibre parfait entre confort, sécurité et loisirs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-2 border-[#f04230]/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-[#f04230]" size={32} />
                </div>
                <h3 className="text-xl text-[#1a1a1a] mb-3">Sécurité Premium</h3>
                <p className="text-gray-600">
                  Systèmes de sécurité de pointe et surveillance 24h/24 pour votre tranquillité d'esprit
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-[#f04230]/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="text-[#f04230]" size={32} />
                </div>
                <h3 className="text-xl text-[#1a1a1a] mb-3">Bien-être & Sport</h3>
                <p className="text-gray-600">
                  Équipements sportifs modernes et espaces de bien-être pour prendre soin de vous
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-[#f04230]/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="text-[#f04230]" size={32} />
                </div>
                <h3 className="text-xl text-[#1a1a1a] mb-3">Espaces Familiaux</h3>
                <p className="text-gray-600">
                  Aires de jeux sécurisées et espaces verts pour le bonheur de toute la famille
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl text-[#f04230] mb-6">Découvrez nos résidences</h2>
          <p className="text-xl text-gray-300 mb-8">
            Visitez nos sites pour découvrir toutes ces activités et équipements en personne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('sites')}
              className="bg-[#f04230] text-white hover:bg-[#f04230]/90 px-8 py-6"
            >
              Voir nos sites
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-[#f04230] text-[#f04230] hover:bg-[#f04230] hover:text-white px-8 py-6"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
