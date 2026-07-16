import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp, MessageCircle, QrCode } from 'lucide-react';

interface FloatingActionsProps {
  onOpenQR: () => void;
}

export default function FloatingActions({ onOpenQR }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="floating-actions-container" className="fixed bottom-6 left-6 sm:left-auto sm:right-6 z-40 flex flex-row sm:flex-col items-center gap-3">
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="floating-back-to-top"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="p-3 bg-stone-900 hover:bg-orange-600 text-amber-500 hover:text-white rounded-2xl border border-stone-800 hover:border-orange-500 shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all cursor-pointer group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating QR Code Button */}
      <motion.button
        id="floating-qr-action"
        onClick={onOpenQR}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="p-3.5 bg-stone-900 hover:bg-orange-600 text-amber-500 hover:text-white rounded-2xl border border-stone-800 hover:border-orange-500 shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center cursor-pointer group"
        title="Get Menu QR Code"
      >
        <QrCode className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      </motion.button>

      {/* Floating Call Button */}
      <motion.a
        id="floating-phone-action"
        href="tel:+923110362673"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="p-3.5 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl shadow-2xl shadow-orange-600/30 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center cursor-pointer"
        title="Call Meerut Kabab"
      >
        <Phone className="w-5 h-5" />
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        id="floating-whatsapp-action"
        href="https://wa.me/923110362673"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative p-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 rounded-2xl shadow-2xl shadow-emerald-500/20 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center cursor-pointer group"
        title="Chat on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-2xl border-2 border-emerald-500/40 animate-ping group-hover:animate-none" />
        <MessageCircle className="w-5 h-5 fill-stone-950 text-stone-950" />
      </motion.a>

    </div>
  );
}
