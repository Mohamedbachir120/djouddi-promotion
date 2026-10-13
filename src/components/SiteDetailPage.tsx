import { ArrowLeft, MapPin, Home, Building, CheckCircle, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { amenities, company, GalleryImage, residences, showApartment, typologyRange } from '../data/site';

interface SiteDetailPageProps {
  siteId: string;
  onNavigate: (page: string, siteId?: string) => void;
}

function Gallery({ images, alt }: { images: GalleryImage[]; alt: string }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <figure key={index} className="relative h-64 rounded-lg overflow-hidden group">
          <ImageWithFallback
            src={image.src}
            alt={`${alt} - ${image.caption}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function SiteDetailPage({ siteId, onNavigate }: SiteDetailPageProps) {
  const site = residences.find((r) => r.id === siteId) ?? residences[0];

  const features = [
    { icon: Home, title: 'Typologies', value: typologyRange(site) },
    { icon: Building, title: 'Logements', value: site.units ?? 'Appartements haut standing' },
    { icon: MapPin, title: 'Localisation', value: site.location },
    { icon: CheckCircle, title: 'Commodités', value: `${amenities.length} équipements` },
  ];

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
            Retour aux résidences
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative h-[500px] overflow-hidden">
        <ImageWithFallback src={site.cover} alt={site.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="max-w-7xl mx-auto">
            {site.status && <Badge className="bg-[#f04230] text-white mb-4">{site.status}</Badge>}
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
                  <div className="space-y-4">
                    {site.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Features Grid */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl text-[#1a1a1a] mb-6">Caractéristiques</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
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

              {/* Typologies */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl text-[#1a1a1a] mb-6">Les Typologies</h2>
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-3 bg-[#1a1a1a] text-white">
                      <div className="p-4">Typologie</div>
                      <div className="p-4 col-span-2">Superficie</div>
                    </div>
                    {site.typologies.map((typology) => (
                      <div key={typology.type} className="grid grid-cols-3 border-t border-gray-200">
                        <div className="p-4 text-[#f04230]">{typology.type}</div>
                        <div className="p-4 col-span-2 text-gray-700">
                          {typology.surface ?? 'Nous consulter'}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Commodités */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-3xl text-[#1a1a1a] mb-6">Les Commodités</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {amenities.map((amenity) => (
                      <div
                        key={amenity.id}
                        className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-[#f04230]/10 transition-colors"
                      >
                        <div className="w-12 h-12 bg-[#f04230]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <amenity.icon className="text-[#f04230]" size={24} />
                        </div>
                        <div>
                          <h4 className="text-[#1a1a1a] mb-1">{amenity.name}</h4>
                          <p className="text-sm text-gray-600">{amenity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              {site.gallery.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-3xl text-[#1a1a1a] mb-6">Galerie photos</h2>
                    <Gallery images={site.gallery} alt={site.name} />
                  </CardContent>
                </Card>
              )}

              {/* Construction chronology */}
              {site.chronology && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-3xl text-[#1a1a1a] mb-6">Suivi du chantier</h2>
                    <div className="space-y-8">
                      {site.chronology.map((phase, index) => (
                        <div key={phase.title}>
                          <h3 className="text-xl text-[#1a1a1a] mb-4">
                            <span className="text-[#f04230]">{index + 1}.</span> {phase.title}
                          </h3>
                          <Gallery images={phase.images} alt={site.name} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Show apartment */}
              {site.showApartment && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-3xl text-[#1a1a1a] mb-6">Appartement Témoin</h2>
                    <Gallery images={showApartment} alt="Appartement témoin" />
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="bg-[#1a1a1a] text-white sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#f04230] mb-4">Intéressé par ce projet ?</h3>
                  <p className="text-gray-300 mb-6">
                    Contactez-nous pour obtenir des informations sur cette résidence ou planifier une visite.
                  </p>
                  <div className="space-y-3">
                    <a href={`tel:${company.phones[0].replace(/\s/g, '')}`} className="block">
                      <Button className="w-full bg-[#f04230] text-white hover:bg-[#f04230]/90">
                        <Phone className="mr-2" size={20} />
                        {company.phones[0]}
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      className="w-full border-[#f04230] text-[#f04230] hover:bg-[#f04230] hover:text-white"
                      onClick={() => onNavigate('contact')}
                    >
                      Planifier une visite
                    </Button>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-2">Typologies</p>
                    <p className="text-white">{site.typologies.map((t) => t.type).join(', ')}</p>
                  </div>
                  {site.units && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-400 mb-2">Logements</p>
                      <p className="text-white">{site.units}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
