import { motion } from 'motion/react';
import { Shield, Sparkles, CheckCircle, Clock } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Absolute Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Overlapping Photo Layout */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent z-10 pointer-events-none" />
            
            {/* Background design elements */}
            <div className="absolute -left-6 -top-6 w-24 h-24 border-t-2 border-l-2 border-orange-500/20 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -right-6 -bottom-6 w-24 h-24 border-b-2 border-r-2 border-amber-500/20 rounded-br-3xl pointer-events-none" />

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden aspect-[4/5] shadow-xl shadow-stone-950/50"
              >
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600"
                  alt="Ustaad grilling seekh kabab on live coals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
              
              <div className="bg-gradient-to-br from-stone-900 to-stone-950 p-6 rounded-3xl border border-stone-800 text-center relative overflow-hidden shadow-lg shadow-orange-600/5 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-4xl sm:text-5xl font-serif font-black text-amber-500 block">4.5</span>
                <span className="text-xs uppercase tracking-widest font-mono text-stone-400 mt-2 block">Google Rating</span>
                <div className="flex justify-center text-amber-400 text-sm mt-1">★★★★★</div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-gradient-to-br from-stone-900 to-stone-950 p-6 rounded-3xl border border-stone-800 text-center relative overflow-hidden shadow-lg shadow-amber-500/5 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-3xl sm:text-4xl font-serif font-black text-orange-500 block">100%</span>
                <span className="text-xs uppercase tracking-widest font-mono text-stone-400 mt-2 block">Halal & Fresh</span>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-3xl overflow-hidden aspect-[4/5] shadow-xl shadow-stone-950/50"
              >
                <img
                  src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=600"
                  alt="Delicious hot BBQ platters"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Side: Copywriting */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-0.5 bg-orange-600" />
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-orange-500 font-bold">
                  OUR CULINARY HERITAGE
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Authentic Pakistani BBQ <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400">
                  Crafted Over Burning Embers
                </span>
              </h2>
            </div>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-light">
              Meerut Kabab is Karachi's premier destination for genuine, sizzling barbecue. Rooted in authentic spice marinades and slow-smoke charcoal grilling techniques, our expert ustaads bring you tender kababs, robust tikkas, and traditional favorites that burst with rich local flavors.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              We are dedicated to providing a premium dining experience centered on raw culinary craftsmanship. From carefully curated, daily-purchased meats to our immaculately kept hygienic open kitchen, we ensure every dish served carries the unmistakable smokey aroma that BBQ lovers crave, in a warm family environment.
            </p>

            {/* Structured Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="flex items-start space-x-3 bg-stone-900/40 p-4 rounded-2xl border border-stone-800/60 hover:border-orange-500/20 transition-all">
                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold">Fresh Ingredients</h4>
                  <p className="text-stone-400 text-xs mt-1">100% fresh meat and house-ground spice blends purchased daily.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-stone-900/40 p-4 rounded-2xl border border-stone-800/60 hover:border-orange-500/20 transition-all">
                <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold">Hygienic Kitchen</h4>
                  <p className="text-stone-400 text-xs mt-1">Immaculate open grill kitchen adhering to strict quality protocols.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-stone-900/40 p-4 rounded-2xl border border-stone-800/60 hover:border-orange-500/20 transition-all">
                <Sparkles className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold">Family Environment</h4>
                  <p className="text-stone-400 text-xs mt-1">Cozy, respectful, and fully structured seating space for your family.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-stone-900/40 p-4 rounded-2xl border border-stone-800/60 hover:border-orange-500/20 transition-all">
                <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-semibold">Fast Takeaway Service</h4>
                  <p className="text-stone-400 text-xs mt-1">Efficient order preparation and secure thermal packing for home dining.</p>
                </div>
              </div>

            </div>

            {/* Quick Pricing Note */}
            <div className="p-4 bg-orange-600/5 border border-orange-500/20 rounded-2xl flex items-center justify-between">
              <span className="text-xs sm:text-sm text-stone-300">
                ⭐ Premium quality BBQ made accessible at affordable prices.
              </span>
              <span className="text-amber-400 font-mono text-sm font-bold shrink-0 ml-2">
                Rs. 1 - 1,000 / person
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
