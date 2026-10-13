import { Shield, Sofa, Baby, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { amenities, residences } from '../data/site';

interface ActivitiesPageProps {
  onNavigate: (page: string, siteId?: string) => void;
}

export function ActivitiesPage({ onNavigate }: ActivitiesPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-[#f04230] mb-4">Les Commodités</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Des appartements de luxe et des résidences pensées pour vôtre confort, à l'intérieur et autour de
            vôtre maison
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-[#f04230] mb-2">{amenities.length}</div>
              <p className="text-gray-600">Commodités</p>
            </div>
            <div>
              <div className="text-4xl text-[#f04230] mb-2">{residences.length}</div>
              <p className="text-gray-600">Résidences</p>
            </div>
            <div>
              <div className="text-4xl text-[#f04230] mb-2">24/7</div>
              <p className="text-gray-600">Sécurité</p>
            </div>
            <div>
              <div className="text-4xl text-[#f04230] mb-2">F2 à F6</div>
              <p className="text-gray-600">Typologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity) => (
              <Card
                key={amenity.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#f04230] group"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]">
                  {amenity.image ? (
                    <>
                      <ImageWithFallback
                        src={amenity.image}
                        alt={amenity.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <amenity.icon className="text-[#f04230]/30" size={120} />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#f04230] rounded-lg flex items-center justify-center">
                      <amenity.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      Disponible dans {residences.length} résidences
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#1a1a1a] mb-3">{amenity.name}</h3>
                  <p className="text-gray-600 mb-4">{amenity.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-2">Résidences proposant cette commodité :</p>
                    <div className="flex flex-wrap gap-2">
                      {residences.map((site) => (
                        <Badge
                          key={site.id}
                          variant="outline"
                          className="border-[#f04230] text-[#f04230] cursor-pointer"
                          onClick={() => onNavigate('site-detail', site.id)}
                        >
                          {site.name.replace('Résidence ', '')}
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
            <h2 className="text-4xl text-[#1a1a1a] mb-4">Bien plus que des appartements de Luxe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un cadre de vie alliant haut standing, confort moderne et commodités
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-2 border-[#f04230]/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-[#f04230]" size={32} />
                </div>
                <h3 className="text-xl text-[#1a1a1a] mb-3">Sécurité</h3>
                <p className="text-gray-600">
                  Un environnement sécurisé et clôturé, et une gestion intérieure qui maintient le calme et la
                  sérénité
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-[#f04230]/20">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sofa className="text-[#f04230]" size={32} />
                </div>
                <h3 className="text-xl text-[#1a1a1a] mb-3">Confort</h3>
                <p className="text-gray-600">
                  Climatisation centralisée, isolation thermique et phonique, chauffage central, cuisine équipée
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
                  Des aires de jeux et espaces verts, un cadre idéal pour toute la famille
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
            Planifiez une visite pour découvrir nos résidences et notre appartement témoin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('sites')}
              className="bg-[#f04230] text-white hover:bg-[#f04230]/90 px-8 py-6"
            >
              Voir nos résidences
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
