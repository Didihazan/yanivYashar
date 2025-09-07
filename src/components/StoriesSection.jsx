import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const StoriesSection = () => {
    const [activeStory, setActiveStory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const stories = [
        {
            id: 'weddings',
            title: 'חתונות',
            images: ['חתונה 1', 'חתונה 2', 'חתונה 3', 'חתונה 4', 'חתונה 5']
        },
        {
            id: 'bar-mitzvah',
            title: 'בר מצווה',
            images: ['בר מצווה 1', 'בר מצווה 2', 'בר מצווה 3']
        },
        {
            id: 'bat-mitzvah',
            title: 'בת מצווה',
            images: ['בת מצווה 1', 'בת מצווה 2', 'בת מצווה 3', 'בת מצווה 4']
        },
        {
            id: 'events',
            title: 'אירועים',
            images: ['אירוע 1', 'אירוע 2', 'אירוע 3']
        },
        {
            id: 'portraits',
            title: 'פורטרטים',
            images: ['פורטרט 1', 'פורטרט 2']
        }
    ];

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeStory();
            }
        };

        if (activeStory) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [activeStory]);

    const openStory = (storyId) => {
        setActiveStory(storyId);
        setCurrentImageIndex(0);
    };

    const closeStory = () => {
        setActiveStory(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        const story = stories.find(s => s.id === activeStory);
        if (story && currentImageIndex < story.images.length - 1) {
            setCurrentImageIndex(prev => prev + 1);
        } else {
            // עבור לסטורי הבא
            const currentStoryIndex = stories.findIndex(s => s.id === activeStory);
            if (currentStoryIndex < stories.length - 1) {
                setActiveStory(stories[currentStoryIndex + 1].id);
                setCurrentImageIndex(0);
            } else {
                closeStory();
            }
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(prev => prev - 1);
        } else {
            // עבור לסטורי הקודם
            const currentStoryIndex = stories.findIndex(s => s.id === activeStory);
            if (currentStoryIndex > 0) {
                const prevStory = stories[currentStoryIndex - 1];
                setActiveStory(prevStory.id);
                setCurrentImageIndex(prevStory.images.length - 1);
            }
        }
    };

    return (
        <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    הסטוריז שלי
                </h2>

                {/* סטוריז גריד - כמו אינסטגרם */}
                <div className="max-w-md mx-auto">
                    {/* במובייל - שורה אחת עם גלילה אופקית */}
                    <div className="md:hidden">
                        <div className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide">
                            {stories.map((story) => (
                                <button
                                    key={story.id}
                                    onClick={() => openStory(story.id)}
                                    className="flex-shrink-0 flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2"
                                    aria-label={`פתח סטורי ${story.title}`}
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-0.5 group-active:scale-95 transition-transform">
                                        <div className="w-full h-full rounded-full bg-white p-0.5">
                                            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium overflow-hidden">
                                                {story.title}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-700 font-medium text-center max-w-[4rem] truncate">
                                        {story.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* בטאבלט ודסקטופ - גריד */}
                    <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-5 gap-32 justify-items-center">
                        {stories.map((story) => (
                            <button
                                key={story.id}
                                onClick={() => openStory(story.id)}
                                className="flex flex-col items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-3"
                                aria-label={`פתח סטורי ${story.title}`}
                            >
                                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-0.5 group-hover:scale-105 transition-transform">
                                    <div className="w-full h-full rounded-full bg-white p-0.5">
                                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm font-medium">
                                            {story.title}
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-700 font-medium text-center">
                                    {story.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* מודל סטורי - מסך מלא כמו אינסטגרם */}
            {activeStory && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    {/* פס התקדמות */}
                    <div className="absolute top-4 left-4 right-4 flex gap-1 z-20">
                        {stories.find(s => s.id === activeStory)?.images.map((_, index) => (
                            <div
                                key={index}
                                className="flex-1 h-0.5 bg-white/30 rounded overflow-hidden"
                            >
                                <div
                                    className={`h-full bg-white transition-all duration-300 ${
                                        index === currentImageIndex ? 'w-full' :
                                            index < currentImageIndex ? 'w-full' : 'w-0'
                                    }`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* כותרת וכפתור סגירה */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                        <div className="flex items-center gap-3 text-white">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-purple-600 p-0.5">
                                <div className="w-full h-full rounded-full bg-black/20 flex items-center justify-center">
                                    <span className="text-xs font-bold">
                                        {stories.find(s => s.id === activeStory)?.title.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            <span className="font-medium">
                                {stories.find(s => s.id === activeStory)?.title}
                            </span>
                        </div>

                        <button
                            onClick={closeStory}
                            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="סגור סטורי"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* ניווט בדסקטופ */}
                    <button
                        onClick={prevImage}
                        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-20 p-3 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="תמונה קודמת"
                        disabled={currentImageIndex === 0}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextImage}
                        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-20 p-3 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="תמונה הבאה"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* תוכן הסטורי עם פאוז על לחיצה */}
                    <div
                        className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-gray-900 to-black"
                    >
                        <div className="text-white text-center p-8 max-w-md">
                            <div className="text-2xl md:text-3xl font-bold mb-4">
                                {stories.find(s => s.id === activeStory)?.title}
                            </div>
                            <div className="text-lg mb-6 opacity-80">
                                תמונה {currentImageIndex + 1} מתוך {stories.find(s => s.id === activeStory)?.images.length}
                            </div>
                            <div className="text-base opacity-70 mb-8">
                                {stories.find(s => s.id === activeStory)?.images[currentImageIndex]}
                            </div>

                            {/* כפתורי ניווט למובייל */}
                            <div className="flex justify-center gap-4 md:hidden">
                                <button
                                    onClick={prevImage}
                                    disabled={currentImageIndex === 0}
                                    className="bg-white/20 hover:bg-white/30 disabled:opacity-30 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                                >
                                    הקודמת
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                                >
                                    הבאה
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* אזורי מגע למובייל - כמו אינסטגרם */}
                    <div
                        className="md:hidden absolute right-0 top-0 bottom-0 w-1/3 z-10"
                        onClick={prevImage}
                        aria-label="תמונה קודמת"
                    />
                    <div
                        className="md:hidden absolute left-0 top-0 bottom-0 w-1/3 z-10"
                        onClick={nextImage}
                        aria-label="תמונה הבאה"
                    />
                </div>
            )}

            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default StoriesSection;