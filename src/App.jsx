import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StoriesSection from './components/StoriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import AccessibilityWidget from "./components/AccessibilityWidget.jsx";

const App = () => {
    return (
        <div className="font-Heebo" dir="rtl">
            <Header />
            <main>
                <HeroSection />
                <StoriesSection />
                <TestimonialsSection />
                <GallerySection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
            <CookieConsent />
            <AccessibilityWidget />
        </div>
    );
};

export default App;