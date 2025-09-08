import React from 'react';
import LegalModals from './LegalModals';
import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import WebediaFooterLogo from "./WebediaFooterLogo.jsx";

// This helper function can be moved to a utils file if you use it elsewhere
const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
    const navLinks = [
        { id: "home", label: "בית" },
        { id: "testimonials", label: "המלצות" },
        { id: "gallery", label: "אלבום" },
        { id: "about", label: "אודות" },
        { id: "contact", label: "צור קשר" },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 text-center md:text-right">

                    {/* Column 1: Brand & Social */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full p-0.5">
                                    <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-white">יניב ישר</span>
                        </div>
                        <p className="max-w-xs text-gray-400 mb-6">
                            מצלמים שמחה. מתמחה בלכידת הרגעים האמיתיים והמרגשים ביותר באירוע שלכם.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://instagram.com/yaniv_photography" target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
                            <a href="https://facebook.com/yaniv.photography" target="_blank" rel="noopener noreferrer" aria-label="פייסבוק" className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">ניווט מהיר</h3>
                        <ul className="space-y-3">
                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <button onClick={() => scrollToSection(link.id)} className="hover:text-blue-400 transition-colors">
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">דברו איתי</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <a href="tel:050-7973104" className="hover:text-blue-400 transition-colors">050-7973104</a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <MessageCircle className="w-5 h-5 text-green-400" />
                                <a href="https://wa.me/972507973104" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar: Legal & Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
                        <LegalModals />
                    </div>
                    {/*<p className="mb-2">*/}
                    {/*    רכז נגישות: יניב ישר | <a href="mailto:accessibility@yaniv-photography.com" className="hover:text-gray-300 underline">accessibility@yaniv-photography.com</a>*/}
                    {/*</p>*/}
                    <p>
                        © {new Date().getFullYear()} יניב ישר - צילום אירועים. כל הזכויות שמורות.
                    </p>
                    <WebediaFooterLogo/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;