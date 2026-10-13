import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { residences, typologyRange } from '../data/site';

interface SitesPageProps {
  onNavigate: (page: string, siteId?: string) => void;
}

export function SitesPage({ onNavigate }: SitesPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-[#f04230] mb-4">Nos Résidences</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Des appartements haut standing à Dely Brahim, Chéraga, Beb Ezzouar et Draria
          </p>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residences.map((site) => (
              <Card
                key={site.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#f04230] cursor-pointer group"
                onClick={() => onNavigate('site-detail', site.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={site.cover}
                    alt={site.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {site.status && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-100 text-green-700 border-green-300 flex items-center gap-2">
                        <CheckCircle className="text-green-500" size={20} />
                        {site.status}
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl text-[#1a1a1a] mb-3">{site.name}</h3>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-2 text-[#f04230]" />
                    {site.location}
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{site.summary}</p>

                  <div className="flex gap-4 mb-4 text-sm text-gray-500">
                    <div>
                      <span className="text-[#f04230]">Typologies:</span> {typologyRange(site)}
                    </div>
                    {site.units && (
                      <div>
                        <span className="text-[#f04230]">Logements:</span> {site.units}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-end pt-4 border-t border-gray-200">
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
            Notre équipe est là pour vous renseigner sur nos résidences ou planifier une visite
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
