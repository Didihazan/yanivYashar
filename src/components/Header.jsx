import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const menuItems = [
        { id: 'home', label: 'בית' },
        { id: 'testimonials', label: 'המלצות' },
        { id: 'about', label: 'אודות' },
        { id: 'gallery', label: 'גלריה' },
        { id: 'contact', label: 'צור קשר' }
    ];

    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8" role="menubar">
                        {menuItems.map(item => (
                            <li key={item.id} role="none">
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-gray-700 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
                                    role="menuitem"
                                    aria-label={`עבור לסקשן ${item.label}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                        aria-label={isMobileMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full p-0.5">
                                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                                        <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="text-xl font-bold text-gray-800">יניב ישר</span>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
                        <ul className="flex flex-col space-y-2 mt-4" role="menu">
                            {menuItems.map(item => (
                                <li key={item.id} role="none">
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="w-full text-right py-3 px-4 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                                        role="menuitem"
                                        aria-label={`עבור לסקשן ${item.label}`}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;