import { ArrowRight, Award, Building2, Heart, MapPin, Shield, Star, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface HomePageProps {
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
  },
  {
    id: 'jardins-hydra',
    name: 'Les Jardins de Hydra',
    location: 'Hydra',
    image: 'https://images.unsplash.com/photo-1747555094127-9a922d56a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTIwMTU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activities: 10,
    status: 'En vente',
  },
  {
    id: 'perle-zeralda',
    name: 'La Perle de Zeralda',
    location: 'Zeralda',
    image: 'https://images.unsplash.com/photo-1505138074712-436c81be4f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGNvbXBsZXglMjBhZXJpYWx8ZW58MXx8fHwxNzYxMjU1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activities: 12,
    status: 'En construction',
  },
];

const features = [
  {
    icon: Award,
    title: 'Qualité Premium',
    description: 'Des matériaux de haute qualité et des finitions impeccables pour un confort optimal.',
  },
  {
    icon: Building2,
    title: 'Innovation',
    description: 'Architecture moderne et solutions innovantes pour un style de vie contemporain.',
  },
  {
    icon: MapPin,
    title: 'Emplacements Privilégiés',
    description: 'Des sites stratégiquement situés dans les meilleurs quartiers d\'Alger.',
  },
  {
    icon: Shield,
    title: 'Sécurité 24/7',
    description: 'Surveillance continue et systèmes de sécurité de pointe pour votre tranquillité.',
  },
];

const testimonials = [
  {
    name: 'Karim B.',
    role: 'Propriétaire - Résidence El Bahdja',
    content: 'Un investissement exceptionnel ! La qualité de construction et les équipements sont vraiment haut de gamme.',
    rating: 5,
  },
  {
    name: 'Sarah M.',
    role: 'Propriétaire - Les Jardins de Hydra',
    content: 'Cadre de vie magnifique, service client irréprochable. Je recommande vivement Djoudi Promotion.',
    rating: 5,
  },
  {
    name: 'Ahmed K.',
    role: 'Propriétaire - La Perle de Zeralda',
    content: 'L\'emplacement est parfait et les installations sont au-delà de mes attentes. Une vraie perle !',
    rating: 5,
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1505138074712-436c81be4f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGNvbXBsZXglMjBhZXJpYWx8ZW58MXx8fHwxNzYxMjU1NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Complexe immobilier de luxe"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-holder-blur absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 to-[#1a1a1a]/70" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <div className="bg-black bg-opacity-75 rounded-3xl p-8 md:p-12 shadow-2xl border border-white border-opacity-10">
            <h1 className="text-5xl md:text-6xl mb-6 text-white drop-shadow-lg">
              Vivez l'excellence avec Djoudi Promotion
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
              Découvrez des résidences haut de gamme alliant prestige, confort et innovation
            </p>
            <Button
              onClick={() => onNavigate('sites')}
              className="bg-[#f04230] text-white hover:bg-[#f04230]/90 px-8 py-6"
            >
              Découvrir nos sites
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
        
      </section>

      {/* Nos Sites Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#1a1a1a] mb-4">Nos Sites d'Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos projets immobiliers situés dans les meilleurs quartiers d'Alger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sites.map((site) => (
              <Card
                key={site.id}
                className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-[#f04230] cursor-pointer group"
                onClick={() => onNavigate('site-detail', site.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#f04230] text-white px-3 py-1 rounded-full">
                    {site.status}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#1a1a1a] mb-2">{site.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={16} className="mr-2 text-[#f04230]" />
                    {site.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{site.activities} activités</span>
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
              Voir tous nos sites
            </Button>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#1a1a1a] mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Djoudi Promotion s'engage à vous offrir le meilleur en matière d'immobilier haut de gamme
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

      {/* Testimonials */}
      <section className="py-20 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#f04230] mb-4">Témoignages de nos clients</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Découvrez ce que nos clients satisfaits disent de leurs expériences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-[#f04230]/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-[#f04230] fill-[#f04230]" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#f04230] rounded-full flex items-center justify-center mr-3">
                      <Users className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-white">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Heart className="text-[#f04230] mx-auto mb-6" size={48} />
          <h2 className="text-4xl mb-6">Prêt à investir dans votre avenir ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactez-nous dès aujourd'hui pour découvrir nos offres exclusives
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
