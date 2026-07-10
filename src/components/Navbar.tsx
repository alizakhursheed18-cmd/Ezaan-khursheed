import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Flame, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = ['home', 'about', 'menu', 'features', 'reviews', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Menu' },
    { id: 'features', label: 'Why Choose Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Booking' }
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/95 backdrop-blur-md border-b border-orange-500/10 shadow-lg py-3'
          : 'bg-gradient-to-b from-stone-950/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <button 
            id="nav-logo"
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
          >
            <div className="bg-gradient-to-tr from-orange-600 to-amber-500 p-2 rounded-xl text-stone-950 shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight block leading-none">
                MEERUT
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-amber-500 block">
                Kabab & Grill
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                  activeSection === link.id
                    ? 'text-amber-500'
                    : 'text-stone-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-orange-600 to-amber-500 rounded"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              id="cta-nav-phone"
              href="tel:+923110362673"
              className="flex items-center space-x-2 text-stone-300 hover:text-amber-500 transition-colors duration-300 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-orange-500" />
              <span>+92 311 0362673</span>
            </a>
            <button
              id="cta-nav-order"
              onClick={() => scrollToSection('menu')}
              className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold text-sm rounded-xl shadow-md shadow-orange-600/20 hover:shadow-orange-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              id="nav-hamburger"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 cursor-pointer"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-stone-950/98 border-b border-orange-500/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-orange-600/20 to-amber-500/10 text-amber-500 border-l-4 border-orange-500'
                      : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-stone-900 flex flex-col space-y-3 px-4">
                <a
                  id="mobile-cta-phone"
                  href="tel:+923110362673"
                  className="flex items-center space-x-3 text-stone-300 hover:text-amber-500 py-2"
                >
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">+92 311 0362673</span>
                </a>
                <button
                  id="mobile-cta-order"
                  onClick={() => scrollToSection('menu')}
                  className="w-full text-center py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold rounded-xl shadow-md cursor-pointer"
                >
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
