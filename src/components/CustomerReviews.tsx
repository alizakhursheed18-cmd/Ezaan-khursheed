import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data';
import { Review } from '../types';
import { Quote, Star, PenTool, Check, MessageSquare } from 'lucide-react';

export default function CustomerReviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>(REVIEWS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle new review submission
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!newAuthor.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!newText.trim() || newText.length < 10) {
      setErrorMsg('Please write a detailed review (at least 10 characters).');
      return;
    }

    const newReview: Review = {
      id: `custom-rev-${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      text: newText,
      date: 'Just now',
      avatar: newAuthor.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || 'U'
    };

    setReviewsList((prev) => [newReview, ...prev]);
    setIsSuccess(true);
    
    // Clear Form after success
    setTimeout(() => {
      setNewAuthor('');
      setNewRating(5);
      setNewText('');
      setIsSuccess(false);
      setIsFormOpen(false);
    }, 2000);
  };

  return (
    <section id="reviews" className="py-24 bg-stone-900 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-stone-950 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid with aggregate rating */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 text-left">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-0.5 bg-orange-600" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-orange-500 font-bold">
                CUSTOMER LOGS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              What Food Lovers Say
            </h2>
            <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Real feedback from local residents, families, and kebab enthusiasts in Shah Faisal Town, Karachi. We strive to maintain excellence in every single bite.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row items-center justify-between lg:justify-end gap-6 bg-stone-950/40 p-6 rounded-3xl border border-stone-850 w-full">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-1 text-amber-400">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="text-xl font-bold text-white ml-1">4.5</span>
                <span className="text-stone-500 text-sm">/ 5.0</span>
              </div>
              <p className="text-xs text-stone-400 mt-1">Based on 11+ Google Reviews</p>
            </div>
            <button
              id="btn-trigger-review"
              onClick={() => setIsFormOpen(true)}
              className="px-5 py-3 bg-stone-900 hover:bg-orange-600 text-amber-500 hover:text-white border border-stone-800 hover:border-orange-500 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 cursor-pointer w-full sm:w-auto justify-center"
            >
              <PenTool className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div id="reviews-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((rev) => (
            <motion.div
              key={rev.id}
              layout
              id={`review-card-${rev.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-stone-950/50 p-6 rounded-3xl border border-stone-850 hover:border-orange-500/20 shadow-md flex flex-col justify-between group hover:shadow-orange-600/5 transition-all duration-300 relative"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-stone-800 group-hover:text-orange-500/10 transition-colors pointer-events-none">
                <Quote className="w-8 h-8 rotate-180" />
              </div>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'fill-amber-500 text-amber-500' : 'text-stone-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="mt-6 pt-4 border-t border-stone-900 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-full flex items-center justify-center text-stone-950 font-bold text-sm tracking-tight shadow-md shrink-0">
                  {rev.avatar || 'U'}
                </div>
                <div className="text-left">
                  <h4 className="text-white text-sm font-bold leading-none">{rev.author}</h4>
                  <span className="text-[10px] text-stone-500 mt-1 block font-mono">{rev.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Write Review Modal Popup */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="review-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              id="review-modal-box"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="fixed inset-x-4 top-[10%] sm:top-[15%] md:top-[20%] mx-auto max-w-lg bg-stone-950 border border-stone-800 p-6 sm:p-8 rounded-3xl z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-stone-900">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-orange-500" />
                  <h3 className="text-white font-bold text-lg">Submit Kebab Review</h3>
                </div>
                <button
                  id="btn-close-review-modal"
                  onClick={() => setIsFormOpen(false)}
                  className="p-1 rounded-lg hover:bg-stone-900 text-stone-400 hover:text-white cursor-pointer"
                >
                  <Quote className="w-5 h-5 rotate-180" />
                </button>
              </div>

              {isSuccess ? (
                <div className="py-12 text-center space-y-4 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg font-bold">Review Posted Successfully!</h4>
                  <p className="text-stone-400 text-sm max-w-xs">
                    Thank you for your valuable feedback. It has been added to our live review list.
                  </p>
                </div>
              ) : (
                <form id="submit-review-form" onSubmit={handleSubmitReview} className="space-y-4 pt-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-stone-300 text-xs font-mono font-medium">Your Name</label>
                    <input
                      id="review-input-name"
                      type="text"
                      placeholder="e.g. Asad Siddiqui"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none"
                    />
                  </div>

                  {/* Stars Rating Selector */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-stone-300 text-xs font-mono font-medium block">Kebab Rating</label>
                    <div className="flex items-center space-x-2 bg-stone-900 p-3 rounded-xl border border-stone-800">
                      {Array.from({ length: 5 }).map((_, idx) => {
                        const starValue = idx + 1;
                        return (
                          <button
                            type="button"
                            key={idx}
                            id={`btn-star-select-${starValue}`}
                            onClick={() => setNewRating(starValue)}
                            className="p-1 text-stone-500 hover:scale-125 transition-transform cursor-pointer focus:outline-none"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                starValue <= newRating ? 'fill-amber-500 text-amber-500' : 'text-stone-600'
                              }`}
                            />
                          </button>
                        );
                      })}
                      <span className="text-xs font-mono text-amber-500 ml-2 font-bold">
                        {newRating === 5 ? 'Excellent!' : newRating === 4 ? 'Very Good!' : newRating === 3 ? 'Good' : newRating === 2 ? 'Fair' : 'Poor'}
                      </span>
                    </div>
                  </div>

                  {/* Text area */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-stone-300 text-xs font-mono font-medium">Write Review</label>
                    <textarea
                      id="review-input-text"
                      rows={4}
                      placeholder="Share your experience here... (What did you order? How was the service?)"
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-600 focus:outline-none resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-red-500 font-mono text-left">{errorMsg}</p>
                  )}

                  {/* Submission buttons */}
                  <div className="pt-4 flex gap-3">
                    <button
                      type="button"
                      id="btn-cancel-review"
                      onClick={() => setIsFormOpen(false)}
                      className="w-1/2 py-3 bg-stone-900 hover:bg-stone-850 text-stone-400 font-bold text-xs uppercase tracking-wider rounded-xl border border-stone-850 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      id="btn-submit-review"
                      className="w-1/2 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/15 cursor-pointer"
                    >
                      Submit Review
                    </button>
                  </div>

                </form>
              )}

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
