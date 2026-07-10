import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';
import { Search, Flame, Sparkles, MapPin, ExternalLink, Info, Phone, MessageCircle } from 'lucide-react';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSpicyOnly, setShowSpicyOnly] = useState<boolean>(false);

  const categories = ['All', 'BBQ Specials', 'Grilled Specials'];

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSpicy = !showSpicyOnly || item.isSpicy;
      return matchesCategory && matchesSearch && matchesSpicy;
    });
  }, [selectedCategory, searchQuery, showSpicyOnly]);

  const mapsUrl = "https://www.google.com/maps/place/Meerut+Kabab/@24.8809116,67.1729169,3a,75y,90t/data=!3m8!1e2!3m6!1sCIABIhCADN6I_IQGjCovs-kVA3CR!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2FAHRPTWnsNOKXcjFXE_hiPcO6QjTdN3F6nREYjD9D5_JoDfQ5HrwkLvo7wdD51-wsFXrHUu6u0X3jV-yP_qxaMiw79RudGf6IdqVZ5xGpr0l3K_oYVae8Uf85wUpqgFZYrxt7rHCGJtqyY_JBL3E%3Dw114-h86-k-no!7i4608!8i3456!4m7!3m6!1s0x3eb339002f0f88fb:0xa2859559627a1612!8m2!3d24.8808781!4d67.1729609!10e5!16s%2Fg%2F11yfkddm3_?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D#";

  const handleWhatsAppOrder = (item: MenuItem) => {
    const text = `🔥 *Meerut Kabab - Inquiry* 🔥\n\nHi! I saw the *${item.name}* (Rs. ${item.price}) on your website. I'd like to ask about availability and place a takeaway order.`;
    window.open(`https://wa.me/923110362673?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-950/20 via-transparent to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full text-xs font-mono text-orange-400 uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 animate-pulse" />
            <span>Pure Charcoal Delights</span>
          </div>
          <h2 id="menu-title" className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Signature Specials
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Savor the rich culinary heritage of Karachi's authentic live-fire street BBQ. Every boti, tikka, and kabab is marinated fresh daily and grilled on sizzling open coals.
          </p>
        </div>

        {/* GOOGLE MAPS PROMO BANNER (Highly styled visual bento block) */}
        <div id="google-maps-menu-promo" className="mb-16 bg-gradient-to-br from-stone-950 to-stone-900 rounded-3xl border border-stone-800 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden group">
          {/* Subtle grid pattern / fire lights */}
          <div className="absolute inset-0 bg-stone-950/50 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl group-hover:bg-orange-600/15 transition-all duration-700 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column - Promotion Text */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Google Maps Featured Location</span>
              </span>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                See Our Live Grills, Real Customer Photos & Full Menu Cards
              </h3>
              
              <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
                Take a direct look at our bustling open-air grill station in Shah Faisal colony, Karachi! Browse through the genuine food photographs, verified guest ratings, and physical menu charts uploaded live by hundreds of our daily local food lovers on Google Maps.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-stone-400 text-xs sm:text-sm pt-2">
                <div className="flex items-center space-x-1">
                  <span className="text-amber-500 font-bold">★ 4.3</span>
                  <span>Google Rating</span>
                </div>
                <span className="text-stone-700">•</span>
                <div className="flex items-center space-x-1">
                  <span className="text-orange-500 font-bold">150+</span>
                  <span>Authentic Reviews</span>
                </div>
                <span className="text-stone-700">•</span>
                <div className="flex items-center space-x-1">
                  <span className="text-emerald-500 font-bold">Live</span>
                  <span>Street Prep Photos</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual Card & Link Action */}
            <div className="lg:col-span-5 flex flex-col justify-center items-stretch sm:items-center lg:items-end w-full">
              <div className="bg-stone-900 border border-stone-800 p-5 rounded-2xl w-full max-w-sm text-left shadow-lg relative group-hover:border-orange-500/30 transition-colors duration-300">
                {/* Simulated Google Place card header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-white text-base font-bold tracking-tight">Meerut Kabab</h4>
                    <p className="text-xs font-mono text-stone-500 mt-0.5">Shah Faisal Colony, Karachi</p>
                  </div>
                  <div className="bg-orange-600/10 p-2 rounded-xl text-orange-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                {/* Styled image thumbnail mimicking map street view snippet */}
                <div className="mt-4 aspect-video rounded-xl overflow-hidden relative border border-stone-850">
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600" 
                    alt="Meerut Live Charcoal Grill"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-3">
                    <p className="text-[10px] sm:text-xs font-sans text-stone-300 font-medium">
                      📸 View of our smoking-hot charcoal skewers
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <a
                    id="maps-direct-promo-btn"
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-orange-600/10 hover:shadow-orange-500/20 transition-all duration-300 group-hover:scale-[1.01]"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Grid */}
        <div className="mb-10 bg-stone-950 border border-stone-850 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`menu-cat-tab-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-md'
                    : 'text-stone-400 hover:text-white hover:bg-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Spicy filter */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1 sm:flex-initial sm:w-60">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-stone-500" />
              </span>
              <input
                id="menu-search-input"
                type="text"
                placeholder="Search barbecue dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 hover:border-stone-750 focus:border-orange-500 focus:outline-none rounded-xl pl-9 pr-4 py-2 text-stone-300 text-xs sm:text-sm placeholder-stone-500 transition-colors font-mono"
              />
            </div>

            {/* Spicy Toggle */}
            <button
              id="menu-spicy-toggle"
              onClick={() => setShowSpicyOnly(!showSpicyOnly)}
              className={`flex items-center justify-center space-x-1.5 px-3.5 py-2 rounded-xl border transition-all text-xs font-mono font-bold uppercase tracking-wider cursor-pointer ${
                showSpicyOnly
                  ? 'bg-orange-600/10 border-orange-500 text-orange-400'
                  : 'bg-stone-900 border-stone-800 hover:border-stone-750 text-stone-400 hover:text-stone-300'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${showSpicyOnly ? 'text-orange-500' : 'text-stone-500'}`} />
              <span>Spicy 🔥</span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="popLayout">
          {filteredItems.length > 0 ? (
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  id={`menu-item-card-${item.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-stone-950 border border-stone-850 hover:border-orange-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                >
                  {/* Item Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-stone-900 border-b border-stone-900">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Dark gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />

                    {/* Spicy & Popular Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                      {item.isPopular && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-amber-500 text-stone-950 text-[10px] font-bold font-mono uppercase tracking-wider shadow">
                          <Sparkles className="w-3 h-3 fill-stone-950" />
                          <span>Popular</span>
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-orange-600 text-white text-[10px] font-bold font-mono uppercase tracking-wider shadow">
                          <Flame className="w-3 h-3 fill-white" />
                          <span>Spicy</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Item Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-500 transition-colors">
                          {item.name}
                        </h3>
                        <span className="font-mono text-base font-bold text-amber-500 shrink-0">
                          Rs. {item.price}
                        </span>
                      </div>
                      <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Quick WhatsApp Inquiry Action */}
                    <div className="mt-5 pt-4 border-t border-stone-900 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                        Category: {item.category}
                      </span>
                      <button
                        id={`menu-item-order-btn-${item.id}`}
                        onClick={() => handleWhatsAppOrder(item)}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-stone-900 hover:bg-orange-600 border border-stone-800 hover:border-orange-500 text-stone-300 hover:text-white rounded-lg text-xs font-mono font-medium tracking-wide transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Inquire</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              id="menu-empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center border border-dashed border-stone-800 rounded-3xl"
            >
              <Info className="w-10 h-10 text-stone-600 mx-auto mb-3" />
              <p className="text-stone-400 font-mono text-sm">No dishes match your specific filters.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setShowSpicyOnly(false); }}
                className="mt-3 text-xs font-mono font-bold text-amber-500 hover:text-orange-500 uppercase tracking-widest underline underline-offset-4 cursor-pointer"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic ordering notice card */}
        <div className="mt-16 bg-stone-950 border border-stone-850 p-5 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 bg-orange-600/10 rounded-xl text-orange-500 shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-white text-sm font-bold font-mono">How to Place Orders?</h4>
            <p className="text-stone-400 text-xs mt-1 leading-relaxed">
              We prepare all meats fresh over live coals. You can choose to dine in with family, take away, or message us on WhatsApp with your selected items at <a href="tel:+923110362673" className="text-amber-500 hover:underline font-mono font-semibold">+92 311 0362673</a>!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
