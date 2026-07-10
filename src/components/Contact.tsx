import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ReservationInquiry, ContactMessage } from '../types';
import { MapPin, Phone, MessageSquare, Compass, Star, Clock, Calendar, Users, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [activeFormTab, setActiveFormTab] = useState<'booking' | 'message'>('booking');
  
  // Table Booking Form State
  const [bookingForm, setBookingForm] = useState<ReservationInquiry>({
    name: '',
    phone: '',
    date: '',
    time: '18:00',
    guests: 4,
    notes: ''
  });
  const [bookingErrors, setBookingErrors] = useState<{ [key: string]: string }>({});
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // General Message Form State
  const [messageForm, setMessageForm] = useState<ContactMessage>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [messageErrors, setMessageErrors] = useState<{ [key: string]: string }>({});
  const [messageSuccess, setMessageSuccess] = useState(false);

  // Validate and submit Table Booking
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!bookingForm.name.trim()) errors.name = 'Name is required';
    if (!bookingForm.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(bookingForm.phone.trim())) {
      errors.phone = 'Enter a valid Pakistani or international phone number';
    }
    if (!bookingForm.date) errors.date = 'Date is required';
    if (!bookingForm.time) errors.time = 'Time is required';
    if (bookingForm.guests <= 0) errors.guests = 'Must have at least 1 guest';

    if (Object.keys(errors).length > 0) {
      setBookingErrors(errors);
      return;
    }

    setBookingErrors({});
    // Generate simulated reference code
    const refCode = `MK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setBookingSuccess(true);

    // Reset Form
    setTimeout(() => {
      setBookingForm({
        name: '',
        phone: '',
        date: '',
        time: '18:00',
        guests: 4,
        notes: ''
      });
      setBookingSuccess(false);
    }, 4000);
  };

  // Validate and submit General Message
  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!messageForm.name.trim()) errors.name = 'Name is required';
    if (!messageForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(messageForm.email.trim())) {
      errors.email = 'Enter a valid email address';
    }
    if (!messageForm.phone.trim()) {
      errors.phone = 'Phone is required';
    }
    if (!messageForm.message.trim() || messageForm.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    if (Object.keys(errors).length > 0) {
      setMessageErrors(errors);
      return;
    }

    setMessageErrors({});
    setMessageSuccess(true);

    // Reset Form
    setTimeout(() => {
      setMessageForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setMessageSuccess(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Decorative Warm Backlighting */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-8 h-0.5 bg-orange-600" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-orange-500 font-bold">
              LOCATIONS & INQUIRIES
            </span>
            <div className="w-8 h-0.5 bg-orange-600" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Connect With Meerut Kabab
          </h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base leading-relaxed">
            Reserve a table for your family gathering, place a fast takeaway order, or get direct directions to our branch in Shah Faisal Colony, Karachi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Details, Info & Google Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Essential Contact Card */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-950 p-8 rounded-3xl border border-stone-850 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-stone-850 pb-4">
                <div className="text-left">
                  <h3 className="text-white text-2xl font-serif font-bold">Meerut Kabab</h3>
                  <span className="text-xs font-mono text-orange-500 uppercase tracking-widest mt-1 block">Barbecue Restaurant</span>
                </div>
                <div className="flex items-center space-x-1 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <span className="text-xs font-bold font-mono">4.5 / 5.0</span>
                </div>
              </div>

              {/* Informational Rows */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 text-left">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white text-sm font-semibold">Our Address</h4>
                    <p className="text-stone-400 text-sm mt-1 leading-relaxed">
                      15, Rafah e Aam Society,<br />
                      Shah Faisal Colony, Shah Faisal Town,<br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-left border-t border-stone-900 pt-4">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white text-sm font-semibold">Phone Number</h4>
                    <p className="text-stone-400 text-sm mt-1 font-mono hover:text-white transition-colors">
                      +92 311 0362673
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 text-left border-t border-stone-900 pt-4">
                  <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white text-sm font-semibold">Services & Hours</h4>
                    <p className="text-stone-400 text-sm mt-1 leading-relaxed">
                      Dine-in • Takeaway available<br />
                      Open Daily: 4:00 PM – 2:00 AM (PST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Frame */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-900">
                <a
                  id="contact-call-btn"
                  href="tel:+923110362673"
                  className="py-3 bg-stone-900 hover:bg-orange-600 text-stone-200 hover:text-white rounded-xl border border-stone-850 hover:border-orange-500 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>

                <a
                  id="contact-whatsapp-btn"
                  href="https://wa.me/923110362673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-green-600/10 hover:bg-green-600 text-green-500 hover:text-stone-950 rounded-xl border border-green-500/20 hover:border-green-500 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 animate-pulse" />
                  <span>WhatsApp</span>
                </a>

                <a
                  id="contact-directions-btn"
                  href="https://www.google.com/maps/search/?api=1&query=Meerut+Kabab+Rafah+e+Aam+Society+Shah+Faisal+Colony+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-stone-950 rounded-xl border border-amber-500/20 hover:border-amber-500 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <Compass className="w-4 h-4" />
                  <span>Directions</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Map Frame */}
            <div className="relative overflow-hidden aspect-video rounded-3xl border border-stone-850 shadow-xl bg-stone-900">
              <iframe
                id="google-maps-iframe"
                src="https://maps.google.com/maps?q=15,+Rafah+e+Aam+Society,+Shah+Faisal+Colony,+Karachi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[250px] border-0 filter grayscale brightness-[0.7] contrast-[1.2] hover:grayscale-0 transition-all duration-700 pointer-events-auto"
                allowFullScreen
                loading="lazy"
                title="Meerut Kabab Google Map Location"
              />
            </div>

          </div>

          {/* Right Column: Multi-Tab Forms Container */}
          <div className="lg:col-span-7 bg-gradient-to-br from-stone-900 to-stone-950 p-6 sm:p-8 rounded-3xl border border-stone-850 shadow-xl">
            
            {/* Form Tabs Switcher */}
            <div className="flex border-b border-stone-900 pb-6 mb-6">
              <button
                id="tab-booking"
                onClick={() => setActiveFormTab('booking')}
                className={`w-1/2 pb-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                  activeFormTab === 'booking'
                    ? 'border-orange-500 text-amber-500'
                    : 'border-transparent text-stone-500 hover:text-stone-300'
                }`}
              >
                Table Inquiry
              </button>
              <button
                id="tab-message"
                onClick={() => setActiveFormTab('message')}
                className={`w-1/2 pb-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-colors cursor-pointer ${
                  activeFormTab === 'message'
                    ? 'border-orange-500 text-amber-500'
                    : 'border-transparent text-stone-500 hover:text-stone-300'
                }`}
              >
                Send Message
              </button>
            </div>

            <AnimatePresence mode="wait">
              
              {/* Form 1: Table booking Inquiry */}
              {activeFormTab === 'booking' && (
                <motion.div
                  key="booking-tab-content"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {bookingSuccess ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-white text-xl font-bold font-serif">Inquiry Received!</h3>
                      <p className="text-stone-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Your table reservation inquiry is securely registered under reference code <strong className="text-amber-500 font-mono text-base block mt-1">{bookingRef}</strong>.
                      </p>
                      <p className="text-stone-500 text-xs max-w-xs mx-auto">
                        Our branch team will contact you on your mobile number shortly to verify.
                      </p>
                    </div>
                  ) : (
                    <form id="booking-inquiry-form" onSubmit={handleBookingSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name field */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-stone-300 text-xs font-mono font-medium">Your Name</label>
                          <input
                            id="booking-input-name"
                            type="text"
                            placeholder="e.g. Hammad Khan"
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                            className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-750 focus:outline-none"
                          />
                          {bookingErrors.name && (
                            <p className="text-[10px] text-red-500 font-mono mt-1">{bookingErrors.name}</p>
                          )}
                        </div>

                        {/* Mobile Phone Field */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-stone-300 text-xs font-mono font-medium">Phone Number</label>
                          <input
                            id="booking-input-phone"
                            type="tel"
                            placeholder="e.g. 03110362673"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                            className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-750 focus:outline-none font-mono"
                          />
                          {bookingErrors.phone && (
                            <p className="text-[10px] text-red-500 font-mono mt-1">{bookingErrors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Date Picker */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-stone-300 text-xs font-mono font-medium flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-orange-500" />
                            <span>Select Date</span>
                          </label>
                          <input
                            id="booking-input-date"
                            type="date"
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                            className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none"
                          />
                          {bookingErrors.date && (
                            <p className="text-[10px] text-red-500 font-mono mt-1">{bookingErrors.date}</p>
                          )}
                        </div>

                        {/* Time Slots */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-stone-300 text-xs font-mono font-medium flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-amber-500" />
                            <span>Select Time</span>
                          </label>
                          <select
                            id="booking-input-time"
                            value={bookingForm.time}
                            onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                            className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none"
                          >
                            <option value="16:00">04:00 PM</option>
                            <option value="17:00">05:00 PM</option>
                            <option value="18:00">06:00 PM</option>
                            <option value="19:00">07:00 PM</option>
                            <option value="20:00">08:00 PM</option>
                            <option value="21:00">09:00 PM</option>
                            <option value="22:00">10:00 PM</option>
                            <option value="23:00">11:00 PM</option>
                            <option value="00:00">12:00 AM</option>
                            <option value="01:00">01:00 AM</option>
                          </select>
                        </div>

                        {/* Guest Counts */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-stone-300 text-xs font-mono font-medium flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-orange-400" />
                            <span>Guests Count</span>
                          </label>
                          <select
                            id="booking-input-guests"
                            value={bookingForm.guests}
                            onChange={(e) => setBookingForm({ ...bookingForm, guests: parseInt(e.target.value) })}
                            className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 focus:outline-none"
                          >
                            <option value={1}>1 Person</option>
                            <option value={2}>2 Persons</option>
                            <option value={3}>3 Persons</option>
                            <option value={4}>4 Persons (Standard)</option>
                            <option value={6}>6 Persons (Family)</option>
                            <option value={8}>8 Persons (Large Table)</option>
                            <option value={12}>12+ (Gathering)</option>
                          </select>
                        </div>
                      </div>

                      {/* Special Notes */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-stone-300 text-xs font-mono font-medium">Special Requests (Optional)</label>
                        <textarea
                          id="booking-input-notes"
                          rows={3}
                          placeholder="e.g. Need high chair for child, birthday celebration space, extra mild spices..."
                          value={bookingForm.notes}
                          onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-750 focus:outline-none resize-none"
                        />
                      </div>

                      {/* Submit reservation */}
                      <button
                        id="btn-submit-booking-inquiry"
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-500 text-stone-950 font-bold text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-orange-600/10 hover:shadow-orange-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 text-stone-950" />
                        <span>Submit Reservation Inquiry</span>
                      </button>

                    </form>
                  )}
                </motion.div>
              )}

              {/* Form 2: General message */}
              {activeFormTab === 'message' && (
                <motion.div
                  key="message-tab-content"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {messageSuccess ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-white text-xl font-bold font-serif">Message Sent!</h3>
                      <p className="text-stone-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you for contacting Meerut Kabab. Your general query is received and routed to our customer support. We will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form id="contact-message-form" onSubmit={handleMessageSubmit} className="space-y-4">
                      
                      {/* Name */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-stone-300 text-xs font-mono font-medium">Your Name</label>
                        <input
                          id="message-input-name"
                          type="text"
                          placeholder="e.g. Sameer Siddiqui"
                          value={messageForm.name}
                          onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-750 focus:outline-none"
                        />
                        {messageErrors.name && (
                          <p className="text-[10px] text-red-500 font-mono mt-1">{messageErrors.name}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-stone-300 text-xs font-mono font-medium">Email Address</label>
                          <input
                            id="message-input-email"
                            type="email"
                            placeholder="e.g. sameer@gmail.com"
                            value={messageForm.email}
                            onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                            className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-750 focus:outline-none"
                          />
                          {messageErrors.email && (
                            <p className="text-[10px] text-red-500 font-mono mt-1">{messageErrors.email}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-stone-300 text-xs font-mono font-medium">Phone Number</label>
                          <input
                            id="message-input-phone"
                            type="tel"
                            placeholder="e.g. +92 300 1234567"
                            value={messageForm.phone}
                            onChange={(e) => setMessageForm({ ...messageForm, phone: e.target.value })}
                            className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-750 focus:outline-none font-mono"
                          />
                          {messageErrors.phone && (
                            <p className="text-[10px] text-red-500 font-mono mt-1">{messageErrors.phone}</p>
                          )}
                        </div>
                      </div>

                      {/* Message Body */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-stone-300 text-xs font-mono font-medium">Your Message</label>
                        <textarea
                          id="message-input-body"
                          rows={4}
                          placeholder="Write your suggestions, franchise queries, or complaints..."
                          value={messageForm.message}
                          onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                          className="w-full bg-stone-950 border border-stone-850 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-stone-200 placeholder-stone-750 focus:outline-none resize-none"
                        />
                        {messageErrors.message && (
                          <p className="text-[10px] text-red-500 font-mono mt-1">{messageErrors.message}</p>
                        )}
                      </div>

                      {/* Submit Message */}
                      <button
                        id="btn-submit-contact-message"
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-500 text-stone-950 font-bold text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-orange-600/10 hover:shadow-orange-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
                      >
                        <Send className="w-4 h-4 text-stone-950" />
                        <span>Send Message</span>
                      </button>

                    </form>
                  )}
                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
