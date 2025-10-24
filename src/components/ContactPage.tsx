import { Building2, Mail, MapPin, Phone, Clock, Users, Award, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-[#f04230] mb-4">Contact & À propos</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Découvrez Djoudi Promotion, votre partenaire de confiance pour l'immobilier haut de gamme en
            Algérie
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-[#0A1128] mb-6">Notre Vision</h2>
              <p className="text-gray-700 mb-4">
                Depuis sa création, <span className="text-[#f04230]">Djoudi Promotion</span> s'est imposée
                comme un acteur majeur de la promotion immobilière haut de gamme en Algérie. Notre mission
                est de créer des espaces de vie exceptionnels qui allient élégance, confort et innovation.
              </p>
              <p className="text-gray-700 mb-4">
                Chaque projet que nous développons est le fruit d'une réflexion approfondie sur les besoins
                de nos clients et les tendances actuelles en matière d'habitat. Nous nous engageons à
                respecter les délais, à maintenir des standards de qualité élevés et à offrir un service
                client irréprochable.
              </p>
              <p className="text-gray-700">
                Notre portefeuille comprend plusieurs résidences prestigieuses situées dans les meilleurs
                quartiers d'Alger, offrant à nos clients un cadre de vie exceptionnel et des équipements de
                premier ordre.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 bg-[#f04230]/10 border-[#f04230]">
                <CardContent className="pt-6">
                  <Building2 className="text-[#f04230] mx-auto mb-3" size={40} />
                  <div className="text-3xl text-[#0A1128] mb-2">6+</div>
                  <p className="text-gray-600">Sites immobiliers</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-[#f04230]/10 border-[#f04230]">
                <CardContent className="pt-6">
                  <Users className="text-[#f04230] mx-auto mb-3" size={40} />
                  <div className="text-3xl text-[#0A1128] mb-2">1000+</div>
                  <p className="text-gray-600">Familles satisfaites</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-[#f04230]/10 border-[#f04230]">
                <CardContent className="pt-6">
                  <Award className="text-[#f04230] mx-auto mb-3" size={40} />
                  <div className="text-3xl text-[#0A1128] mb-2">15+</div>
                  <p className="text-gray-600">Années d'expérience</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-[#f04230]/10 border-[#f04230]">
                <CardContent className="pt-6">
                  <Target className="text-[#f04230] mx-auto mb-3" size={40} />
                  <div className="text-3xl text-[#0A1128] mb-2">100%</div>
                  <p className="text-gray-600">Engagement qualité</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#0A1128] mb-4">Nos Valeurs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[#f04230]" size={32} />
                </div>
                <h3 className="text-xl text-[#0A1128] mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Nous visons l'excellence dans chaque aspect de nos projets
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-[#f04230]" size={32} />
                </div>
                <h3 className="text-xl text-[#0A1128] mb-3">Innovation</h3>
                <p className="text-gray-600">Solutions modernes et créatives pour chaque projet</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#f04230]" size={32} />
                </div>
                <h3 className="text-xl text-[#0A1128] mb-3">Confiance</h3>
                <p className="text-gray-600">
                  Transparence et engagement envers nos clients
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#f04230]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="text-[#f04230]" size={32} />
                </div>
                <h3 className="text-xl text-[#0A1128] mb-3">Qualité</h3>
                <p className="text-gray-600">Matériaux premium et finitions impeccables</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#0A1128] mb-4">Contactez-nous</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl text-[#0A1128] mb-6">Envoyez-nous un message</h3>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Votre nom"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+213 XX XX XX XX"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Objet de votre message"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet ou posez-nous vos questions..."
                      rows={5}
                      className="mt-2"
                    />
                  </div>
                  <Button className="w-full bg-[#f04230] text-white hover:bg-[#f04230]/90">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f04230]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#f04230]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#0A1128] mb-2">Adresse</h4>
                      <p className="text-gray-600">
                        123 Avenue de l'Indépendance
                        <br />
                        Alger, Algérie
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f04230]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#f04230]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#0A1128] mb-2">Téléphone</h4>
                      <p className="text-gray-600">+213 XX XX XX XX XX</p>
                      <p className="text-gray-600">+213 XX XX XX XX XX</p>
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
                      <p className="text-gray-600">contact@djoudipromotion.dz</p>
                      <p className="text-gray-600">info@djoudipromotion.dz</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#f04230]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#f04230]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-[#0A1128] mb-2">Horaires</h4>
                      <p className="text-gray-600">Dimanche - Jeudi: 9h00 - 18h00</p>
                      <p className="text-gray-600">Samedi: 9h00 - 14h00</p>
                      <p className="text-gray-600">Vendredi: Fermé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Card */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-[#0A1128] mb-4">Notre localisation</h4>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="mx-auto mb-2" size={48} />
                      <p>Carte interactive</p>
                      <p className="text-sm">Alger, Algérie</p>
                    </div>
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
            Explorez nos résidences exceptionnelles et trouvez le logement de vos rêves
          </p>
          <Button
            onClick={() => onNavigate('sites')}
            className="bg-[#f04230] text-white hover:bg-[#f04230]/90 px-8 py-6"
          >
            Découvrir nos sites
          </Button>
        </div>
      </section>
    </div>
  );
}