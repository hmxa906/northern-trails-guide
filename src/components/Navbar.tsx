import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll listener with requestAnimationFrame for performance
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const onScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Travel Guides', href: '/travel-guides' },
    { name: 'Estimated Costs', href: '/estimated-costs' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (href) => location.pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
      transition-all duration-500 
      ${isScrolled ? 'bg-white/80 backdrop-blur shadow-lg py-2' : 'bg-white/60 backdrop-blur-lg py-2'} 
      rounded-full px-6 max-w-5xl whitespace-nowrap`}
    >
      <div className="flex items-center justify-between">
   <Link to="/" className="flex items-center space-x-2 overflow-hidden transition-all duration-300">
  <Mountain className="h-7 w-7 text-primary" />

  {!isScrolled && (
    <motion.span
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.3 }}
      className="text-xl font-bold bg-gradient-mountain bg-clip-text text-transparent"
    >
      Northern Pakistan
    </motion.span>
  )}
</Link>



        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative px-3 py-2 font-medium transition-all duration-300 ease-in-out
              hover:text-primary hover:scale-105 
              ${isActive(link.href) ? 'text-primary' : 'text-gray-700'}`}
            >
              {link.name}
              {isActive(link.href) && (
                <span
                  className="absolute inset-x-1 -bottom-1 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 
                  animate-[pulse_1.5s_infinite]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 px-4 rounded-lg transition-colors hover:bg-muted ${isActive(link.href) ? 'text-primary bg-muted' : 'text-foreground'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
