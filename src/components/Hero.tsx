import { motion } from 'motion/react';
import { HERO_BG } from '../data';
import { Flame, ArrowRight, UtensilsCrossed } from 'lucide-react';

export default function Hero() {
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-stone-950 overflow-hidden pt-16"
    >
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={HERO_BG}
          alt="Charcoal Grilling Barbecue Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.35] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-stone-950/40 to-stone-950" />
        
        {/* Animated Fire Ember Sparkles */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-orange-600/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Decorative side accent lines */}
      <div className="absolute left-6 bottom-12 hidden xl:flex flex-col items-center space-y-4 z-10">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-orange-500/60 [writing-mode:vertical-lr] select-none">
          ESTABLISHED IN KARACHI
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-orange-500/60 to-transparent" />
      </div>

      <div className="absolute right-6 bottom-12 hidden xl:flex flex-col items-center space-y-4 z-10">
        <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-amber-500/60 [writing-mode:vertical-lr] select-none">
          SECURE DINE-IN & TAKEAWAY
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-amber-500/60 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        
        {/* Small Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600/20 to-amber-500/20 border border-orange-500/30 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md shadow-inner"
        >
          <Flame className="w-4 h-4 text-orange-500 animate-pulse" />
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-medium">
            Authentic BBQ Taste Since Day One
          </span>
        </motion.div>

        {/* Main Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]"
        >
          Freshly Grilled <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 drop-shadow-[0_2px_10px_rgba(234,88,12,0.2)]">
            Kababs & Tikka
          </span>
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-stone-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Freshly Grilled Kababs & Traditional Pakistani Flavors. Experience the sizzle of premium charcoal barbecue in the heart of Shah Faisal, Karachi.
        </motion.p>

        {/* Rating and quick details badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-stone-400 text-sm font-mono"
        >
          <div className="flex items-center space-x-1.5">
            <span className="text-amber-400 font-bold">⭐ 4.5/5</span>
            <span className="text-stone-600">|</span>
            <span>11+ Google Reviews</span>
          </div>
          <span className="hidden sm:inline text-stone-700">•</span>
          <div>Dine-in & Fast Takeaway</div>
          <span className="hidden sm:inline text-stone-700">•</span>
          <div className="text-orange-500 font-semibold">Rs. 1–1,000 / person</div>
        </motion.div>

        {/* Interactive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            id="hero-order-now"
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-stone-950 font-bold text-base rounded-2xl shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-105 active:scale-98 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <UtensilsCrossed className="w-5 h-5 text-stone-950" />
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4 text-stone-950 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            id="hero-view-menu"
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto px-8 py-4 bg-stone-900/80 hover:bg-stone-800/80 text-white font-bold text-base rounded-2xl border border-stone-800 hover:border-amber-500/40 backdrop-blur-md hover:scale-105 active:scale-98 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>View Menu</span>
          </button>
        </motion.div>

      </div>

      {/* Bottom fade visual indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />
    </section>
  );
}
