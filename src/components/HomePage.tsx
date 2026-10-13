import { ArrowRight, Award, Building2, Heart, MapPin, Shield, Sofa } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
  aboutText,
  investText,
  media,
  partnerParagraphs,
  residences,
  typologyRange,
  whyText,
} from '../data/site';

interface HomePageProps {
  onNavigate: (page: string, siteId?: string) => void;
}

const features = [
  {
    icon: Award,
    title: 'Haut standing',
    description: 'Des appartements haut standing conçus avec soin selon des normes internationales.',
  },
  {
    icon: Building2,
    title: 'Durabilité',
    description: 'Un investissement sécurisé et pérenne, une valeur sûre pour construire un patrimoine solide.',
  },
  {
    icon: Sofa,
    title: 'Confort',
    description:
      'Climatisation centralisée, isolation thermique et phonique, cuisine équipée et douche italienne.',
  },
  {
    icon: Shield,
    title: 'Sécurité 24/7',
    description: 'Des résidences dans un environnement sécurisé et clôturé.',
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={media.heroVideo}
          poster={media.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-holder-blur absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 to-[#1a1a1a]/70" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <div className="bg-black bg-opacity-75 rounded-3xl p-8 md:p-12 shadow-2xl border border-white border-opacity-10">
            <h1 className="text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">Djoudi Promotion</h1>
            <p className="text-xl md:text-2xl mb-4 drop-shadow-lg">
              Appartements haut standing. Durabilité, confort et standing inégalés.
            </p>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-lg italic">
              Une expérience de Vie Luxueuse
            </p>
            <Button
              onClick={() => onNavigate('sites')}
              className="bg-[#f04230] text-white hover:bg-[#f04230]/90 px-8 py-6"
            >
              Découvrir nos résidences
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={media.about}
                alt="Résidence Lux, vue depuis un balcon sur la cour intérieure"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl text-[#1a1a1a] mb-6">Qui sommes-nous ?</h2>
              <p className="text-gray-700 text-lg">
                <span className="text-[#f04230]">Djoudi Promotion</span> {aboutText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Résidences */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#1a1a1a] mb-4">Nos Projets</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos résidences haut standing à Alger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residences.map((site) => (
              <Card
                key={site.id}
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-[#f04230] cursor-pointer group"
                onClick={() => onNavigate('site-detail', site.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={site.cover}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {site.status && (
                    <div className="absolute top-4 right-4 bg-[#f04230] text-white px-3 py-1 rounded-full">
                      {site.status}
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#1a1a1a] mb-2">{site.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2 text-[#f04230]" />
                    {site.location}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{site.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{typologyRange(site)}</span>
                    <Button
                      variant="ghost"
                      className="text-[#f04230] hover:text-[#1a1a1a] hover:bg-[#f04230]/10"
                    >
                      Découvrir
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('sites')}
              variant="outline"
              className="border-[#f04230] text-[#f04230] hover:bg-[#f04230] hover:text-white"
            >
              Voir toutes nos résidences
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi Djoudi Promotion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#1a1a1a] mb-4">Pourquoi Djoudi Promotion ?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Chez <span className="text-[#f04230]">Djoudi Promotion</span>, {whyText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-[#f04230]" size={32} />
                  </div>
                  <h3 className="text-xl text-[#1a1a1a] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investir / Partenaire */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-lg border-[#f04230]/30">
              <CardContent className="p-8">
                <h2 className="text-3xl text-[#f04230] mb-6">Investir dans l'immobilier avec Djoudi Promotion</h2>
                <p className="text-gray-200">{investText}</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-[#f04230]/30">
              <CardContent className="p-8">
                <h2 className="text-3xl text-[#f04230] mb-6">Votre partenaire immobilier à Alger</h2>
                <div className="space-y-4">
                  {partnerParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-gray-200">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Heart className="text-[#f04230] mx-auto mb-6" size={48} />
          <h2 className="text-4xl mb-6">N'hésitez pas à nous contacter</h2>
          <p className="text-xl text-gray-300 mb-8">
            Que vous souhaitiez obtenir des informations sur nos résidences ou planifier une visite, notre
            équipe est là pour vous.
          </p>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-[#f04230] text-white hover:bg-[#f04230]/90 px-8 py-6"
          >
            Nous contacter
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
