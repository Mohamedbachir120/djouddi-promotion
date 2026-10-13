import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { company, residences } from '../data/site';

interface FooterProps {
  onNavigate: (page: string, siteId?: string) => void;
}

function TikTok({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.38-2.48V9.66a5.73 5.73 0 0 0-.79-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.29 1.37V7.29a4.28 4.28 0 0 1-3.24-1.47z" />
    </svg>
  );
}

const socials = [
  { href: company.socials.facebook, label: 'Facebook', icon: <Facebook size={20} /> },
  { href: company.socials.instagram, label: 'Instagram', icon: <Instagram size={20} /> },
  { href: company.socials.linkedin, label: 'LinkedIn', icon: <Linkedin size={20} /> },
  { href: company.socials.youtube, label: 'YouTube', icon: <Youtube size={20} /> },
  { href: company.socials.tiktok, label: 'TikTok', icon: <TikTok /> },
];

export function Footer({ onNavigate }: FooterProps) {
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
              Appartements haut standing. Durabilité, confort et standing inégalés.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-[#f04230] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#f04230] mb-4">Contactez-nous</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {company.address[0]}, {company.address[1]}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  {company.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="block hover:text-[#f04230] transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="text-gray-300 hover:text-[#f04230] transition-colors">
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#f04230] mb-4">Liens</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-300 hover:text-[#f04230] transition-colors"
                >
                  Accueil
                </button>
              </li>
              {residences.map((site) => (
                <li key={site.id}>
                  <button
                    onClick={() => onNavigate('site-detail', site.id)}
                    className="text-gray-300 hover:text-[#f04230] transition-colors text-left"
                  >
                    {site.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-300 hover:text-[#f04230] transition-colors"
                >
                  Contact
                </button>
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
          <p>&copy; {new Date().getFullYear()} Djoudi Promotion. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
