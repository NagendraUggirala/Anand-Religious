// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext'; // Import the ModalProvider
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';

import BookingPage from './pages/BookingPage';
import HowItWorksPage from './pages/HowItWorksPage';
import VedicKnowledgePage from './pages/VedicKnowledgePage';
import TestimonialsPage from './pages/TestimonialsPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component

function App() {
  return (
    <ModalProvider> {/* Wrap everything with ModalProvider */}
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop /> {/* Add ScrollToTop component here */}
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
             
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/vedic-knowledge" element={<VedicKnowledgePage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;