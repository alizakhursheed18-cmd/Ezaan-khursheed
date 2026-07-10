import { Flame, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Our Menu' },
    { id: 'features', label: 'Why Choose Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Booking' }
  ];

  return (
    <footer id="footer-section" className="bg-stone-950 border-t border-stone-900 pt-16 pb-8 relative overflow-hidden">
      
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-900 text-left">
          
          {/* Column 1: Brand details (Col span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <button
              id="footer-logo"
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
            >
              <div className="bg-gradient-to-tr from-orange-600 to-amber-500 p-2 rounded-xl text-stone-950 shadow-md">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-serif text-xl font-bold text-white tracking-tight block leading-none">
                  MEERUT
                </span>
                <span className="text-[9px] uppercase font-mono tracking-widest text-amber-500 block">
                  Kabab & Grill
                </span>
              </div>
            </button>
            
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm font-light">
              Meerut Kabab serves the finest traditional Pakistani barbecue and charcoal grill items, prepared fresh daily by seasoned masters in the heart of Shah Faisal, Karachi.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a
                id="social-fb"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-orange-600 border border-stone-850 hover:border-orange-500 text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="social-ig"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-orange-600 border border-stone-850 hover:border-orange-500 text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="social-yt"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-orange-600 border border-stone-850 hover:border-orange-500 text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="social-tiktok"
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-stone-900 hover:bg-orange-600 border border-stone-850 hover:border-orange-500 text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer font-bold text-xs"
              >
                <span className="font-mono text-center block">TK</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-quick-link-${link.id}`}
                    onClick={() => scrollToSection(link.id)}
                    className="text-stone-400 hover:text-amber-500 text-sm transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-mono font-bold uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-3 text-sm text-stone-400">
              <p className="leading-relaxed">
                📍 15, Rafah e Aam Society, Shah Faisal Colony, Shah Faisal Town, Karachi, Pakistan
              </p>
              <p className="font-mono">
                📞 <a href="tel:+923110362673" className="hover:text-amber-500 transition-colors">+92 311 0362673</a>
              </p>
              <p className="text-xs text-orange-500/80 font-mono">
                💬 Available on WhatsApp for takeaways!
              </p>
            </div>
            
            <div className="pt-2">
              <button
                id="footer-contact-btn"
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 w-full sm:w-auto bg-stone-900 hover:bg-orange-600 text-amber-500 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-stone-850 hover:border-orange-500 transition-all cursor-pointer text-center"
              >
                Contact Us
              </button>
            </div>
          </div>

        </div>

        {/* Footer Bottom (Copyright) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p id="footer-copyright">
            © {new Date().getFullYear()} Meerut Kabab. All Rights Reserved. Designed in Karachi, Pakistan.
          </p>
          <div className="flex items-center space-x-4">
            <button onClick={() => scrollToSection('about')} className="hover:text-stone-300 cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => scrollToSection('contact')} className="hover:text-stone-300 cursor-pointer">Terms of Service</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
