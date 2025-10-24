import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#f04230] rounded-lg flex items-center justify-center">
                <span className="text-white">DP</span>
              </div>
              <span className="text-[#f04230]">Djoudi Promotion</span>
            </div>
            <p className="text-gray-300 mb-4">
              Excellence et prestige dans l'immobilier haut de gamme.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#f04230] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#f04230] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#f04230] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#f04230] mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">Alger, Algérie</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">+213 XX XX XX XX</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">contact@djoudipromotion.dz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#f04230] mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f04230] transition-colors">
                  Nos Sites
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f04230] transition-colors">
                  Activités
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f04230] transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#f04230] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div>
            <h3 className="text-[#f04230] mb-4">Contact rapide</h3>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Textarea
                placeholder="Votre message"
                rows={3}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-[#f04230] text-white hover:bg-[#f04230]/90">
                Envoyer
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; 2025 Djoudi Promotion. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
