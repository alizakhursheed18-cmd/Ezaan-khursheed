import React from 'react';
import { motion } from 'motion/react';
import { FEATURES } from '../data';
import { Leaf, Flame, ShieldCheck, Coins, Users, Zap, Award, Sparkles } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Leaf,
  Flame,
  ShieldCheck,
  Coins,
  Users,
  Zap,
  Award,
  Sparkles,
};

export default function WhyChooseUs() {
  return (
    <section id="features" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-500/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-orange-500/3 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-8 h-0.5 bg-orange-600" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-orange-500 font-bold">
              OUR UNCOMPROMISING STANDARDS
            </span>
            <div className="w-8 h-0.5 bg-orange-600" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Why Choose Meerut Kabab
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            From clay ovens to hot glowing coals, we combine hygienic cooking and seasoned expertise to bring you the premium street barbecue experience.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feat, index) => {
            const IconComponent = iconMap[feat.iconName] || Sparkles;
            
            return (
              <motion.div
                key={feat.id}
                id={`feature-card-${feat.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group p-8 bg-stone-900/40 rounded-3xl border border-stone-800 hover:border-orange-500/30 shadow-lg hover:shadow-orange-600/5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                {/* Accent Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 bg-stone-900 border border-stone-850 rounded-2xl flex items-center justify-center text-orange-500 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <IconComponent className="w-5 h-5 text-orange-500" />
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-white text-base sm:text-lg font-bold group-hover:text-amber-400 transition-colors">
                    {feat.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Inline check indicator */}
                <div className="mt-6 flex items-center justify-end">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-orange-500/30 group-hover:text-orange-500/70 transition-colors duration-300 flex items-center space-x-1">
                    <span>✓ APPROVED</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 rounded-3xl border border-stone-800 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-600/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              THE KARACHI STREET TASTE Standard
            </span>
            <p className="text-white text-base sm:text-lg font-light leading-relaxed">
              "We maintain a clean, open barbecue station because we have nothing to hide. See your seekh kababs skewered and chicken tikkas roasted live in front of you."
            </p>
            <div className="text-xs text-stone-500 font-mono">
              — Meerut Kabab Master Chef Ustaad
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
