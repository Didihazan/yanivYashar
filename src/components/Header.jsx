import React from 'react';

const Header = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Navigation Menu */}
                    <ul className="hidden md:flex items-center gap-8" role="menubar">
                        {[
                            { id: 'home', label: 'בית' },
                            { id: 'testimonials', label: 'המלצות' },
                            { id: 'about', label: 'אודות' },
                            { id: 'gallery', label: 'גלריה' },
                            { id: 'contact', label: 'צור קשר' }
                        ].map(item => (
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
                        className="md:hidden p-2 text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                        aria-label="תפריט ניווט"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center gap-1">
                            <span className="w-full h-0.5 bg-current"></span>
                            <span className="w-full h-0.5 bg-current"></span>
                            <span className="w-full h-0.5 bg-current"></span>
                        </div>
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
            </nav>
        </header>
    );
};

export default Header;