import { Mountain, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Travel Guides', href: '/travel-guides' },
    { name: 'Estimated Costs', href: '/estimated-costs' },
    { name: 'About', href: '/about' },
  ];

  return (
    <footer className="bg-gradient-mountain text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="h-8 w-8" />
              <span className="text-2xl font-bold">Northern Pakistan</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Discover the untamed beauty of Pakistan's northern regions. From the towering peaks of Hunza to the serene lakes of Skardu, embark on unforgettable adventures in the land of pure beauty.
            </p>
            <p className="text-white/80">
              Your ultimate guide to exploring the majestic landscapes, rich culture, and hidden gems of Northern Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <p className="text-white/80">
              Stay connected for the latest travel updates, breathtaking photos, and insider tips from Northern Pakistan.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-12 text-center text-white/80">
          <p>© {currentYear} Northern Pakistan Travel Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;