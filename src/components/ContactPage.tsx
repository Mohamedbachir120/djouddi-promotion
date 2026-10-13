import { Building2, Mail, MapPin, Phone, Users, Award, Target, Home } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { aboutText, company, contactIntro, media, partnerParagraphs, residences } from '../data/site';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

const values = [
  { icon: Building2, title: 'Notre métier' },
  { icon: Award, title: 'Notre expérience' },
  { icon: Target, title: 'Notre mission' },
  { icon: Users, title: 'Notre engagement' },
];

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-[#f04230] mb-4">N'hésitez pas à nous contacter</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Chez Djoudi Promotion, {contactIntro}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[#0A1128] mb-6">Qui sommes-nous ?</h2>
              <p className="text-gray-700 mb-6">
                <span className="text-[#f04230]">Djoudi Promotion</span> {aboutText}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 bg-[#f04230]/10 border-[#f04230]">
                  <CardContent className="pt-6">
                    <Building2 className="text-[#f04230] mx-auto mb-3" size={40} />
                    <div className="text-3xl text-[#0A1128] mb-2">{residences.length}</div>
                    <p className="text-gray-600">Résidences</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 bg-[#f04230]/10 border-[#f04230]">
                  <CardContent className="pt-6">
                    <Home className="text-[#f04230] mx-auto mb-3" size={40} />
                    <div className="text-3xl text-[#0A1128] mb-2">F2 à F6</div>
                    <p className="text-gray-600">Appartements haut standing</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={media.headquarters}
                alt="Entrée du siège de Djoudi Promotion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#0A1128] mb-4">Votre partenaire immobilier à Alger</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-[#f04230]" size={32} />
                  </div>
                  <h3 className="text-xl text-[#0A1128] mb-3">{value.title}</h3>
                  <p className="text-gray-600">{partnerParagraphs[index]}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#0A1128] mb-4">Contactez-nous</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre équipe est là pour vous renseigner sur nos résidences ou planifier une visite
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl text-[#0A1128] mb-6">Envoyez-nous un message</h3>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom</Label>
                    <Input id="name" type="text" placeholder="Votre nom" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre.email@exemple.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="05XX XX XX XX" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Votre message..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>
                  <Button className="w-full bg-[#f04230] text-white hover:bg-[#f04230]/90">Envoyer</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f04230]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#f04230]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#0A1128] mb-2">Numéro de téléphone</h4>
                      {company.phones.map((phone) => (
                        <p key={phone} className="text-gray-600">
                          <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-[#f04230]">
                            {phone}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f04230]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#f04230]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#0A1128] mb-2">Email</h4>
                      <p className="text-gray-600">
                        <a href={`mailto:${company.email}`} className="hover:text-[#f04230]">
                          {company.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f04230]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#f04230]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#0A1128] mb-2">Adresse</h4>
                      <p className="text-gray-600">
                        {company.address[0]}
                        <br />
                        {company.address[1]}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">{company.addressNote}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Card */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-[#0A1128] mb-4">Notre localisation</h4>
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      title="Djoudi Promotion - Dely Brahim"
                      src={company.mapEmbedUrl}
                      className="w-full h-full"
                      loading="lazy"
                      style={{ border: 0 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-[#f04230] mb-6">Prêt à découvrir nos projets ?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Le Versant, Lux 1 &amp; 2, La Baie d'Alger et Colina del Viento
          </p>
          <Button
            onClick={() => onNavigate('sites')}
            className="bg-[#f04230] text-white hover:bg-[#f04230]/90 px-8 py-6"
          >
            Découvrir nos résidences
          </Button>
        </div>
      </section>
    </div>
  );
}
