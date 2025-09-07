import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StoriesSection from './components/StoriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
// Import LegalModals is handled in Footer component

const App = () => {
    return (
        <div className="font-sans" dir="rtl">
            <Header />
            <main>
                <HeroSection />
                <StoriesSection />
                <TestimonialsSection />
                <AboutSection />
                <GallerySection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;