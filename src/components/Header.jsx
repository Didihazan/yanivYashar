import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import './Header.css';

const LOGO_URL =
    "https://res.cloudinary.com/dwsvrbbw5/image/upload/v1757248571/Screenshot_2025-09-05_084041-removebg-preview_xmkb9t.png";

const Header = () => {
    // ... כל הלוגיקה נשארת זהה ...
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    const menuItems = [
        { id: "home", label: "בית" },
        { id: "testimonials", label: "המלצות" },
        { id: "gallery", label: "גלריה" },
        { id: "about", label: "אודות" },
        { id: "contact", label: "צור קשר" },
    ];

    const linkBase = "transition-colors focus:outline-none focus:ring-2 rounded-sm whitespace-nowrap"; // הוספנו whitespace-nowrap
    const linkColors = isScrolled
        ? "text-gray-800 hover:text-orange-600 focus:ring-orange-500"
        : "text-white/90 hover:text-white focus:ring-white/70";


    return (
        <>
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/80 backdrop-blur-md shadow-sm"
                        : "bg-transparent"
                }`}
                dir="rtl"
            >
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between relative md:grid md:grid-cols-3">

                        <div className="hidden md:flex justify-start">
                            <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 group" aria-label="חזרה לראש הדף">
                                <img
                                    src={LOGO_URL}
                                    alt="יניב ישר – לוגו"
                                    className="h-9 w-auto select-none pointer-events-none header-logo-image"
                                />
                            </button>
                        </div>

                        <div className="hidden md:flex justify-center">
                            {/* שינוי 1: הרווח בין הפריטים גמיש עכשיו */}
                            <ul className="flex items-center gap-4 lg:gap-8" role="menubar">
                                {menuItems.map((item) => (
                                    <li key={item.id} role="none">
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            /* שינוי 2: גודל הפונט גמיש ונוסף איסור על שבירת שורה */
                                            className={`desktop-nav-link text-base lg:text-lg font-medium ${linkBase} ${linkColors}`}
                                            role="menuitem"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden md:block"></div>

                        {/* מבנה למובייל נשאר זהה */}
                        <div className="md:hidden flex items-center justify-between w-full">
                            {/* ... קוד המובייל ... */}
                            <button
                                onClick={() => setIsMobileMenuOpen((v) => !v)}
                                className={`p-2 rounded-full focus:outline-none z-50 transition-colors ${ isMobileMenuOpen ? 'text-white' : linkColors }`}
                                aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                            </button>

                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 group" aria-label="חזרה לראש הדף">
                                    <img
                                        src={LOGO_URL}
                                        alt="יניב ישר – לוגו"
                                        className="h-9 w-auto select-none pointer-events-none header-logo-image"
                                    />
                                </button>
                            </div>

                            <div className="w-7 h-7"></div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* תפריט מובייל נשאר זהה */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay md:hidden">
                    {/* ... קוד תפריט המובייל ... */}
                    <div className="mobile-menu-content">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="mobile-nav-link"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;