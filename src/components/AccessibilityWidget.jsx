import React, { useState, useEffect } from 'react';
import { Accessibility, X, Type, Eye, Contrast, Volume2, RotateCcw, EyeOff } from 'lucide-react';

const AccessibilityWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [settings, setSettings] = useState({
        fontSize: 100,
        highContrast: false,
        grayscale: false,
        invertColors: false,
        readingGuide: false,
        reduceMotion: false
    });

    // טעינת הגדרות מ-localStorage
    useEffect(() => {
        const savedSettings = localStorage.getItem('accessibilitySettings');
        const hiddenUntil = localStorage.getItem('accessibilityHiddenUntil');

        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }

        if (hiddenUntil && new Date() < new Date(hiddenUntil)) {
            setIsHidden(true);
        }
    }, []);

    // שמירת הגדרות ב-localStorage
    useEffect(() => {
        localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
        applySettings();
    }, [settings]);

    const applySettings = () => {
        const root = document.documentElement;

        // גודל טקסט
        root.style.fontSize = `${settings.fontSize}%`;

        // ניגודיות גבוהה
        if (settings.highContrast) {
            root.style.filter = 'contrast(150%) brightness(1.2)';
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }

        // גווני אפור
        if (settings.grayscale) {
            const currentFilter = root.style.filter || '';
            root.style.filter = currentFilter + ' grayscale(100%)';
            document.body.classList.add('grayscale');
        } else {
            document.body.classList.remove('grayscale');
        }

        // היפוך צבעים
        if (settings.invertColors) {
            const currentFilter = root.style.filter || '';
            root.style.filter = currentFilter + ' invert(1) hue-rotate(180deg)';
            document.body.classList.add('invert-colors');
        } else {
            document.body.classList.remove('invert-colors');
        }

        // ללא ניגודיות וגווני אפור והיפוך - איפוס
        if (!settings.highContrast && !settings.grayscale && !settings.invertColors) {
            root.style.filter = '';
        }

        // הפחתת תנועה
        if (settings.reduceMotion) {
            root.style.setProperty('--animation-duration', '0s');
            document.body.classList.add('reduce-motion');
        } else {
            root.style.removeProperty('--animation-duration');
            document.body.classList.remove('reduce-motion');
        }

        // מדריך קריאה
        if (settings.readingGuide) {
            document.body.classList.add('reading-guide');
            addReadingGuide();
        } else {
            document.body.classList.remove('reading-guide');
            removeReadingGuide();
        }
    };

    const addReadingGuide = () => {
        if (document.getElementById('reading-guide')) return;

        const guide = document.createElement('div');
        guide.id = 'reading-guide';
        guide.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            z-index: 9999;
            pointer-events: none;
            transition: top 0.1s ease;
        `;
        document.body.appendChild(guide);

        const moveGuide = (e) => {
            guide.style.top = e.clientY + 'px';
        };

        document.addEventListener('mousemove', moveGuide);
        guide.moveHandler = moveGuide;
    };

    const removeReadingGuide = () => {
        const guide = document.getElementById('reading-guide');
        if (guide) {
            if (guide.moveHandler) {
                document.removeEventListener('mousemove', guide.moveHandler);
            }
            guide.remove();
        }
    };

    const toggleSetting = (setting) => {
        setSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    const changeFontSize = (change) => {
        setSettings(prev => ({
            ...prev,
            fontSize: Math.max(75, Math.min(200, prev.fontSize + change))
        }));
    };

    const resetSettings = () => {
        setSettings({
            fontSize: 100,
            highContrast: false,
            grayscale: false,
            invertColors: false,
            readingGuide: false,
            reduceMotion: false
        });

        // איפוס מלא של הסגנונות
        document.documentElement.style.fontSize = '';
        document.documentElement.style.filter = '';
        document.body.className = document.body.className.replace(/\b(high-contrast|grayscale|invert-colors|reduce-motion|reading-guide)\b/g, '');
        removeReadingGuide();
        localStorage.removeItem('accessibilitySettings');
    };

    const hideWidget = () => {
        const hideUntil = new Date();
        hideUntil.setHours(hideUntil.getHours() + 24); // הסתרה ל-24 שעות
        localStorage.setItem('accessibilityHiddenUntil', hideUntil.toISOString());
        setIsHidden(true);
        setIsOpen(false);
    };

    const openAccessibilityStatement = () => {
        setIsOpen(false);
        const button = document.querySelector('[data-modal="accessibility"]');
        if (button) button.click();
    };

    const openPrivacyPolicy = () => {
        setIsOpen(false);
        const button = document.querySelector('[data-modal="privacy"]');
        if (button) button.click();
    };

    const reportAccessibilityIssue = () => {
        setIsOpen(false);
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            // פוקוס על שדה ההודעה
            setTimeout(() => {
                const messageField = document.querySelector('textarea[placeholder="הודעה"]');
                if (messageField) {
                    messageField.focus();
                    messageField.value = 'דיווח על בעיית נגישות: ';
                }
            }, 500);
        }
    };

    if (isHidden) return null;

    return (
        <>
            {/* אייקון צף מודרני */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 group"
                aria-label="פתח תפריט נגישות"
                title="נגישות"
            >
                <Accessibility className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* תפריט נגישות מודרני */}
            {isOpen && (
                <div className="fixed left-4 top-1/2 transform -translate-y-1/2 translate-x-20 z-50 bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 w-80 max-h-[80vh] overflow-y-auto">
                    {/* כותרת */}
                    <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                            <Accessibility className="w-5 h-5 text-blue-600" />
                            <h3 className="font-bold text-gray-800">הגדרות נגישות</h3>
                        </div>
                        <div className="flex gap-1">
                            <button
                                onClick={hideWidget}
                                className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                                aria-label="הסתר לחות"
                                title="הסתר ל-24 שעות"
                            >
                                <EyeOff className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                                aria-label="סגור תפריט נגישות"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* גודל טקסט */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <Type className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-gray-700">גודל טקסט</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                            <button
                                onClick={() => changeFontSize(-10)}
                                className="bg-white hover:bg-gray-100 border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                aria-label="הקטן טקסט"
                            >
                                א-
                            </button>
                            <div className="flex-1 text-center">
                                <span className="text-sm font-medium text-gray-600">{settings.fontSize}%</span>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full transition-all"
                                        style={{ width: `${((settings.fontSize - 75) / 125) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                            <button
                                onClick={() => changeFontSize(10)}
                                className="bg-white hover:bg-gray-100 border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                aria-label="הגדל טקסט"
                            >
                                א+
                            </button>
                        </div>
                    </div>

                    {/* הגדרות חזותיות */}
                    <div className="space-y-4 mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Eye className="w-4 h-4 text-blue-600" />
                            הגדרות חזותיות
                        </h4>

                        {[
                            { key: 'highContrast', label: 'ניגודיות גבוהה', icon: Contrast },
                            { key: 'grayscale', label: 'גווני אפור', icon: Eye },
                            { key: 'invertColors', label: 'היפוך צבעים', icon: Eye },
                            { key: 'readingGuide', label: 'מדריך קריאה', icon: Type },
                            { key: 'reduceMotion', label: 'הפחתת תנועה', icon: Volume2 }
                        ].map(({ key, label, icon: Icon }) => (
                            <label key={key} className="flex items-center justify-between cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
                                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{label}</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={settings[key]}
                                        onChange={() => toggleSetting(key)}
                                        className="sr-only"
                                    />
                                    <div className={`w-11 h-6 rounded-full transition-colors ${settings[key] ? 'bg-blue-600' : 'bg-gray-300'}`}>
                                        <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform mt-1 ${settings[key] ? 'translate-x-6' : 'translate-x-1'}`}></div>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>

                    {/* כפתורי פעולה */}
                    <div className="space-y-3 mb-6">
                        <button
                            onClick={resetSettings}
                            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                        >
                            <RotateCcw className="w-4 h-4" />
                            איפוס הגדרות
                        </button>
                    </div>

                    {/* קישורים */}
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                        <button
                            onClick={reportAccessibilityIssue}
                            className="w-full text-right text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 rounded-lg transition-colors"
                        >
                            📞 דווח על בעיית נגישות
                        </button>
                        <button
                            onClick={openAccessibilityStatement}
                            className="w-full text-right text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-2 rounded-lg transition-colors"
                        >
                            📋 הצהרת נגישות מלאה
                        </button>
                        <div className="text-xs text-gray-500 text-center pt-2">
                            רכז נגישות: יניב ישר | 050-1234567
                        </div>
                    </div>
                </div>
            )}

            {/* רקע שקוף לסגירה */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default AccessibilityWidget;