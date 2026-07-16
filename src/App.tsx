import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerReviews from './components/CustomerReviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QRCodeModal from './components/QRCodeModal';

export default function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <div id="meerut-kabab-app" className="min-h-screen bg-stone-950 font-sans text-stone-200 antialiased overflow-x-hidden selection:bg-orange-600 selection:text-white">
      {/* Sticky Navigation Hub */}
      <Navbar onOpenQR={() => setIsQRModalOpen(true)} />

      {/* Main Single Page Content Sections */}
      <main id="main-content-flow">
        
        {/* Fullscreen Hero Landing */}
        <Hero />

        {/* Narrative About Us Section */}
        <AboutUs />

        {/* Dynamic Category Toggled Menu with Google Maps Link */}
        <Menu />

        {/* Standard Pillars & Features Grid */}
        <WhyChooseUs />

        {/* Local Testimonials & Write Review Portal */}
        <CustomerReviews />

        {/* Immersive Gallery & Lightbox Viewer */}
        <Gallery />

        {/* Location cards, Embedded Map, Booking Inquiry & Contact Forms */}
        <Contact />

      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Float Stack (WhatsApp, Direct Call, Scroll Up) */}
      <FloatingActions onOpenQR={() => setIsQRModalOpen(true)} />

      {/* Interactive QR Menu Modal */}
      <AnimatePresence>
        {isQRModalOpen && (
          <QRCodeModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
