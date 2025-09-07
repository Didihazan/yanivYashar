import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const StoriesSection = () => {
    const [activeStory, setActiveStory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const stories = [
        {
            id: 'weddings',
            title: 'חתונות',
            images: ['חתונה 1', 'חתונה 2', 'חתונה 3']
        },
        {
            id: 'bar-mitzvah',
            title: 'בר מצווה',
            images: ['בר מצווה 1', 'בר מצווה 2', 'בר מצווה 3']
        },
        {
            id: 'bat-mitzvah',
            title: 'בת מצווה',
            images: ['בת מצווה 1', 'בת מצווה 2', 'בת מצווה 3']
        },
        {
            id: 'events',
            title: 'אירועים',
            images: ['אירוע 1', 'אירוע 2', 'אירוע 3']
        }
    ];

    // Close modal on Escape key
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
            // Move to next story
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
        }
    };

    return (
        <>
            {/* Stories Grid - Responsive */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-2xl mx-auto">
                    {stories.map((story) => (
                        <button
                            key={story.id}
                            onClick={() => openStory(story.id)}
                            className="flex flex-col items-center gap-2 md:gap-3 group focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg p-2"
                            aria-label={`פתח סטורי ${story.title}`}
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-orange-500 p-1 group-hover:scale-105 transition-transform">
                                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs sm:text-sm font-medium">
                                    {story.title}
                                </div>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-700 font-medium text-center">
                                {story.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Story Modal - Full responsive */}
            {activeStory && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    {/* Progress Bar */}
                    <div className="absolute top-4 left-4 right-4 flex gap-1 z-20">
                        {stories.find(s => s.id === activeStory)?.images.map((_, index) => (
                            <div
                                key={index}
                                className="flex-1 h-1 bg-white/30 rounded"
                            >
                                <div
                                    className={`h-full bg-white rounded transition-all duration-300 ${
                                        index === currentImageIndex ? 'w-full' : index < currentImageIndex ? 'w-full' : 'w-0'
                                    }`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={closeStory}
                        className="absolute top-4 right-4 text-white z-20 p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="סגור סטורי"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Navigation Arrows - Desktop RTL corrected */}
                    <button
                        onClick={nextImage}
                        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-20 p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="תמונה הבאה"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={prevImage}
                        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-20 p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="תמונה קודמת"
                        disabled={currentImageIndex === 0}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Area - Touch responsive */}
                    <div className="w-full h-full flex items-center justify-center relative">
                        <div className="text-white text-center p-4">
                            <h3 className="text-xl md:text-2xl font-bold mb-4">
                                {stories.find(s => s.id === activeStory)?.title}
                            </h3>
                            <div className="text-base md:text-lg mb-4">
                                תמונה {currentImageIndex + 1} מתוך {stories.find(s => s.id === activeStory)?.images.length}
                            </div>
                            <div className="text-sm md:text-base text-gray-300">
                                {stories.find(s => s.id === activeStory)?.images[currentImageIndex]}
                            </div>

                            {/* Mobile Navigation Buttons - RTL corrected */}
                            <div className="flex justify-center gap-4 mt-8 md:hidden">
                                <button
                                    onClick={nextImage}
                                    className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                                >
                                    הבאה
                                </button>
                                <button
                                    onClick={prevImage}
                                    disabled={currentImageIndex === 0}
                                    className="bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                                >
                                    הקודמת
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Touch Areas for Mobile - RTL corrected like Instagram */}
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
        </>
    );
};

export default StoriesSection;