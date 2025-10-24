import { ArrowRight, MapPin, Building, CheckCircle, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

interface SitesPageProps {
  onNavigate: (page: string, siteId?: string) => void;
}

const sites = [
  {
    id: 'el-bahdja',
    name: 'Résidence El Bahdja',
    location: 'Alger Centre',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjExODYxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activities: 8,
    status: 'Livré',
    description: 'Résidence de standing en plein cœur d\'Alger, offrant un confort exceptionnel.',
    surface: '15 000 m²',
    apartments: 120,
  },
  {
    id: 'jardins-hydra',
    name: 'Les Jardins de Hydra',
    location: 'Hydra',
    image: 'https://images.unsplash.com/photo-1747555094127-9a922d56a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTIwMTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activities: 10,
    status: 'En vente',
    description: 'Luxe et verdure dans le quartier le plus prisé d\'Alger.',
    surface: '20 000 m²',
    apartments: 150,
  },
  {
    id: 'perle-zeralda',
    name: 'La Perle de Zeralda',
    location: 'Zeralda',
    image: 'https://images.unsplash.com/photo-1505138074712-436c81be4f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGNvbXBsZXglMjBhZXJpYWx8ZW58MXx8fHwxNzYxMjU1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activities: 12,
    status: 'En construction',
    description: 'Un complexe résidentiel moderne avec vue sur mer et espaces de loisirs.',
    surface: '30 000 m²',
    apartments: 200,
  },
  {
    id: 'palais-bouzareah',
    name: 'Le Palais de Bouzareah',
    location: 'Bouzareah',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjExODYxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activities: 9,
    status: 'En vente',
    description: 'Architecture raffinée dans un cadre paisible avec vue panoramique.',
    surface: '18 000 m²',
    apartments: 130,
  },
  {
    id: 'eden-dely-ibrahim',
    name: 'Eden de Dely Ibrahim',
    location: 'Dely Ibrahim',
    image: 'https://images.unsplash.com/photo-1747555094127-9a922d56a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTIwMTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activities: 11,
    status: 'En construction',
    description: 'Résidence familiale moderne avec équipements de loisirs complets.',
    surface: '25 000 m²',
    apartments: 180,
  },
  {
    id: 'azur-cheraga',
    name: 'Azur de Cheraga',
    location: 'Cheraga',
    image: 'https://images.unsplash.com/photo-1505138074712-436c81be4f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGNvbXBsZXglMjBhZXJpYWx8ZW58MXx8fHwxNzYxMjU1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activities: 10,
    status: 'Livré',
    description: 'Design contemporain et prestations haut de gamme.',
    surface: '22 000 m²',
    apartments: 160,
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Livré':
      return <CheckCircle className="text-green-500" size={20} />;
    case 'En construction':
      return <Clock className="text-orange-500" size={20} />;
    default:
      return <Building className="text-blue-500" size={20} />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Livré':
      return 'bg-green-100 text-green-700 border-green-300';
    case 'En construction':
      return 'bg-orange-100 text-orange-700 border-orange-300';
    default:
      return 'bg-blue-100 text-blue-700 border-blue-300';
  }
};

export function SitesPage({ onNavigate }: SitesPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-[#f04230] mb-4">Nos Sites Immobiliers</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Découvrez notre portfolio de résidences haut de gamme situées dans les meilleurs quartiers d'Alger
          </p>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sites.map((site) => (
              <Card
                key={site.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#f04230] cursor-pointer group"
                onClick={() => onNavigate('site-detail', site.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(site.status)} flex items-center gap-2`}>
                      {getStatusIcon(site.status)}
                      {site.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#1a1a1a] mb-3">{site.name}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-2 text-[#f04230]" />
                    {site.location}
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{site.description}</p>

                  <div className="flex gap-4 mb-4 text-sm text-gray-500">
                    <div>
                      <span className="text-[#f04230]">Surface:</span> {site.surface}
                    </div>
                    <div>
                      <span className="text-[#f04230]">Logements:</span> {site.apartments}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-[#1a1a1a]">{site.activities} activités</span>
                    <Button
                      variant="ghost"
                      className="text-[#f04230] hover:text-[#1a1a1a] hover:bg-[#f04230]/10 group-hover:translate-x-1 transition-transform"
                    >
                      Découvrir
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[#f04230] mb-6">Vous avez des questions ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Notre équipe d'experts est à votre disposition pour vous accompagner dans votre projet
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-[#f04230] text-white hover:bg-[#f04230]/90 px-8 py-6"
          >
            Contactez-nous
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
