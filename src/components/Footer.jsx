import React from 'react';
import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { LOGO_URL } from '../utils/constants'; // ייבוא הלוגו
import LegalModals from './LegalModals';
import WebediaFooterLogo from "./WebediaFooterLogo.jsx";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-gray-400 pt-20 pb-8">
            <div className="container mx-auto px-4 text-center">

                {/* --- חלק עליון ממותג --- */}
                <div className="mb-12">
                    <button onClick={scrollToTop} className="inline-block mb-6" aria-label="חזרה לראש העמוד">
                        <img src={LOGO_URL} alt="יניב ישר - לוגו" className="h-12 w-auto mx-auto header-logo-image" />
                    </button>
                    <p className="text-xl md:text-2xl font-light text-gray-200 mb-8">
                        בואו נתחיל לתעד את הסיפור שלכם.
                    </p>
                    <div className="flex justify-center items-center gap-6 text-gray-300">
                        <a href="tel:050-7973104" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                            <Phone size={20} />
                            <span>שיחה</span>
                        </a>
                        <a href="https://wa.me/972507973104" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                            <MessageCircle size={20} />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* --- רשתות חברתיות ובר תחתון --- */}
                <div className="border-t border-gray-400 pt-8">
                    <div className="flex justify-center gap-6 mb-6">
                        <a href="https://instagram.com/yaniv_photography" target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם" className="text-gray-300 hover:text-white transition-colors"><Instagram /></a>
                        <a href="https://facebook.com/yaniv.photography" target="_blank" rel="noopener noreferrer" aria-label="פייסבוק" className="text-gray-300 hover:text-white transition-colors"><Facebook /></a>
                    </div>
                    <div className="text-sm text-gray-400">
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
                            <LegalModals />
                        </div>
                        <p className="mb-4">
                            © {new Date().getFullYear()} יניב ישר - צילום אירועים. כל הזכויות שמורות.
                        </p>
                        <WebediaFooterLogo/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;