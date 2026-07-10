import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'food' | 'interior' | 'kitchen'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredGallery = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => filter === 'all' || item.category === filter);
  }, [filter]);

  // Lightbox navigation
  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredGallery.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredGallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 bg-stone-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-8 h-0.5 bg-orange-600" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-orange-500 font-bold">
              AMBANCE & VISUALS
            </span>
            <div className="w-8 h-0.5 bg-orange-600" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Culinary Gallery
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Take a visual tour of Meerut Kabab. Experience the glow of our charcoal grills, the clean family environment, and our freshly baked traditional flatbreads.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(['all', 'food', 'interior', 'kitchen'] as const).map((cat) => (
            <button
              key={cat}
              id={`gallery-tab-${cat}`}
              onClick={() => {
                setFilter(cat);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                filter === cat
                  ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-stone-950 font-bold shadow-lg shadow-orange-600/10'
                  : 'bg-stone-900 hover:bg-stone-850 text-stone-400 hover:text-white border border-stone-850'
              }`}
            >
              {cat === 'all' ? 'All Photos' : cat === 'interior' ? 'Dining & Space' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          id="gallery-images-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                id={`gallery-item-${item.id}`}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-stone-850 hover:border-orange-500/20 shadow-lg cursor-pointer bg-stone-900"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10" />

                {/* Corner details */}
                <div className="absolute top-4 right-4 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-orange-500/10 text-[10px] font-mono uppercase tracking-widest text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {item.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-gradient-to-tr from-orange-600 to-amber-500 p-4 rounded-full text-stone-950 shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5 text-stone-950 font-bold" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-6 right-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h3 className="text-white text-base font-bold tracking-tight">{item.title}</h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 mt-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Meerut Authentic BBQ</span>
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Immersive Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              id="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-stone-950/98 z-[100] cursor-pointer"
            />

            {/* Lightbox Modal Content */}
            <motion.div
              id="lightbox-modal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[110] flex flex-col items-center justify-center p-4 sm:p-8"
            >
              {/* Image Frame Wrapper */}
              <div className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center">
                
                {/* Left Toggle Button */}
                <button
                  id="btn-lightbox-prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-2 sm:-left-16 p-3 rounded-full bg-stone-900/60 hover:bg-orange-600 hover:text-white border border-stone-800 text-stone-300 hover:scale-105 transition-all z-20 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Expanded Image */}
                <img
                  src={filteredGallery[lightboxIndex].url}
                  alt={filteredGallery[lightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-stone-800 shadow-2xl select-none"
                />

                {/* Right Toggle Button */}
                <button
                  id="btn-lightbox-next"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-2 sm:-right-16 p-3 rounded-full bg-stone-900/60 hover:bg-orange-600 hover:text-white border border-stone-800 text-stone-300 hover:scale-105 transition-all z-20 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Footer text */}
              <div className="mt-6 text-center space-y-2 max-w-lg">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500 bg-stone-900 px-3 py-1 rounded border border-orange-500/10">
                  {filteredGallery[lightboxIndex].category}
                </span>
                <h4 className="text-white text-lg font-bold tracking-tight">
                  {filteredGallery[lightboxIndex].title}
                </h4>
                <p className="text-xs text-stone-500 font-mono">
                  Image {lightboxIndex + 1} of {filteredGallery.length}
                </p>
              </div>

              {/* Close Button */}
              <button
                id="btn-lightbox-close"
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-stone-900/60 hover:bg-orange-600 text-stone-300 hover:text-white hover:scale-105 transition-all border border-stone-800 cursor-pointer z-50"
              >
                <X className="w-6 h-6" />
              </button>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
