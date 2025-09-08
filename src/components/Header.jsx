// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL =
    "https://res.cloudinary.com/dwsvrbbw5/image/upload/v1757248571/Screenshot_2025-09-05_084041-removebg-preview_xmkb9t.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll(); // סטטוס התחלתי
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    const menuItems = [
        { id: "home", label: "בית" },
        { id: "testimonials", label: "המלצות" },
        { id: "about", label: "אודות" },
        { id: "gallery", label: "גלריה" },
        { id: "contact", label: "צור קשר" },
    ];

    const linkBase =
        "transition-colors px-2 py-1 rounded focus:outline-none";
    const linkColors = isScrolled
        ? "text-gray-800 hover:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        : "text-white/90 hover:text-white focus:ring-2 focus:ring-white/70";

    return (
        <header
            className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
                isScrolled
                    ? "bg-white/95 backdrop-blur shadow-sm"
                    : "bg-transparent"
            }`}
            dir="rtl"
        >
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    {/* ניווט דסקטופ - עם רווח מהצד */}
                    <ul className="hidden md:flex items-center gap-8 ml-12" role="menubar">
                        {menuItems.map((item) => (
                            <li key={item.id} role="none">
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`${linkBase} ${linkColors} text-xl`}
                                    role="menuitem"
                                    aria-label={`עבור לסקשן ${item.label}`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* כפתור תפריט מובייל */}
                    <button
                        onClick={() => setIsMobileMenuOpen((v) => !v)}
                        className={`md:hidden p-2 rounded focus:outline-none ${
                            isScrolled
                                ? "text-gray-800 hover:text-blue-600 focus:ring-2 focus:ring-blue-500"
                                : "text-white/90 hover:text-white focus:ring-2 focus:ring-white/70"
                        }`}
                        aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-8 h-8" />
                        ) : (
                            <Menu className="w-8 h-8" />
                        )}
                    </button>

                    {/* לוגו */}
                    <div className="flex items-center">
                        {/* במובייל - לוגו במרכז */}
                        <button
                            onClick={() => scrollToSection("home")}
                            className="md:hidden absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 group"
                            aria-label="חזרה לראש הדף"
                        >
                            <img
                                src={LOGO_URL}
                                alt="יניב ישר – לוגו"
                                className="h-9 w-auto select-none pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                            />
                            <span
                                className={`text-xl font-bold transition-colors ${
                                    isScrolled ? "text-gray-900" : "text-white"
                                }`}
                            >
                            </span>
                        </button>

                        {/* בדסקטופ - לוגו בצד עם רווח */}
                        <button
                            onClick={() => scrollToSection("home")}
                            className="hidden md:flex items-center gap-2 group mr-8"
                            aria-label="חזרה לראש הדף"
                        >
                            <img
                                src={LOGO_URL}
                                alt="יניב ישר – לוגו"
                                className="h-9 w-auto select-none pointer-events-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
                            />
                            <span
                                className={`text-xl font-bold transition-colors ${
                                    isScrolled ? "text-gray-900" : "text-white"
                                }`}
                            >
                            </span>
                        </button>
                    </div>
                </div>

                {/* תפריט מובייל מודרני */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100">
                        <ul className="flex flex-col space-y-1 p-4" role="menu">
                            {menuItems.map((item) => (
                                <li key={item.id} role="none">
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="w-full text-right py-4 px-4 text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg text-lg font-medium"
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