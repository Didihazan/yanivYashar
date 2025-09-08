import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {CloudinaryImage, cloudinaryStories, getImageUrl} from '../utils/cloudinary';

const StoriesSection = () => {
    const [activeStory, setActiveStory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [container, setContainer] = useState(null);

    const STORY_DURATION = 3000; // 3 שניות לכל תמונה

    // מצא את הקונטיינר של הסטוריז ב-HeroSection
    useEffect(() => {
        const storiesContainer = document.getElementById('stories-container');
        setContainer(storiesContainer);
    }, []);

    // התקדמות אוטומטית
    useEffect(() => {
        let interval;

        if (activeStory && !isPaused) {
            interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        nextImage();
                        return 0;
                    }
                    return prev + (100 / (STORY_DURATION / 50));
                });
            }, 50);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [activeStory, currentImageIndex, isPaused]);

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
        setProgress(0);
        setIsPaused(false);
    };

    const closeStory = () => {
        setActiveStory(null);
        setCurrentImageIndex(0);
        setProgress(0);
        setIsPaused(false);
    };

    const nextImage = () => {
        const story = cloudinaryStories.find(s => s.id === activeStory);
        if (story && currentImageIndex < story.images.length - 1) {
            setCurrentImageIndex(prev => prev + 1);
            setProgress(0);
        } else {
            const currentStoryIndex = cloudinaryStories.findIndex(s => s.id === activeStory);
            if (currentStoryIndex < cloudinaryStories.length - 1) {
                setActiveStory(cloudinaryStories[currentStoryIndex + 1].id);
                setCurrentImageIndex(0);
                setProgress(0);
            } else {
                closeStory();
            }
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(prev => prev - 1);
            setProgress(0);
        } else {
            const currentStoryIndex = cloudinaryStories.findIndex(s => s.id === activeStory);
            if (currentStoryIndex > 0) {
                const prevStory = cloudinaryStories[currentStoryIndex - 1];
                setActiveStory(prevStory.id);
                setCurrentImageIndex(prevStory.images.length - 1);
                setProgress(0);
            }
        }
    };

    const currentStory = cloudinaryStories.find(s => s.id === activeStory);
    const currentImage = currentStory?.images[currentImageIndex];

    // רכיב הסטוריז שיוצב ב-HeroSection
    const StoriesPanel = () => (
        <>
            {/* כותרת קטנה - קריאה בלבד */}
            <h2 className="sr-only">סטוריז</h2>

            {/* מובייל – גלילה אופקית מתוקנת */}
            <div className="md:hidden -mx-4 sm:-mx-6">
                <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide snap-x px-4 sm:px-6">
                    {cloudinaryStories.map((s, index) => (
                        <button
                            key={s.id}
                            onClick={() => openStory(s.id)}
                            className={`flex-shrink-0 snap-start flex flex-col items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2 ${
                                index === cloudinaryStories.length - 1 ? 'mr-1 sm:mr-1' : ''
                            }`}
                            aria-label={`פתח סטורי ${s.title}`}
                        >
                            <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-0.5">
                                <div className="w-full h-full rounded-full bg-white p-0.5">
                                    <CloudinaryImage
                                        publicId={s.thumbnail}
                                        alt={`תצוגה מקדימה של ${s.title}`}
                                        size="storyMobile"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                            <span className="text-md text-gray-700 font-large text-center max-w-[4rem] truncate">
                                {s.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* דסקטופ – ארבעה/חמישה עיגולים בשורה עם מרכוז מושלם */}
            <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 w-full">
                <div className="flex items-center justify-center gap-6 lg:gap-8">
                    {cloudinaryStories.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => openStory(s.id)}
                            className="flex flex-col items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-3"
                            aria-label={`פתח סטורי ${s.title}`}
                        >
                            <div className="w-24 h-24 lg:w-24 lg:h-24 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-0.5 group-hover:scale-105 transition-transform">
                                <div className="w-full h-full rounded-full bg-white p-0.5">
                                    <CloudinaryImage
                                        publicId={s.thumbnail}
                                        alt={`תצוגה מקדימה של ${s.title}`}
                                        size="storyThumb"
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                            <span className="text-md text-gray-700 font-large text-center">
                                {s.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* מציב את פאנל הסטוריז ב-HeroSection באמצעות Portal */}
            {container && createPortal(<StoriesPanel />, container)}

            {/* מודל סטורי */}
            {activeStory && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    {/* פס התקדמות */}
                    <div className="absolute top-4 left-4 right-4 flex gap-1 z-20">
                        {currentStory?.images.map((_, index) => (
                            <div key={index} className="flex-1 h-0.5 bg-white/30 rounded overflow-hidden">
                                <div
                                    className={`h-full bg-white transition-all duration-100 ${
                                        index === currentImageIndex ? 'transition-none' :
                                            index < currentImageIndex ? 'w-full' : 'w-0'
                                    }`}
                                    style={{
                                        width: index === currentImageIndex ? `${progress}%` :
                                            index < currentImageIndex ? '100%' : '0%'
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* כותרת וסגירה */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                        <div className="flex items-center gap-3 text-white">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-purple-600 p-0.5">
                                <CloudinaryImage
                                    publicId={currentStory?.thumbnail}
                                    alt={currentStory?.title}
                                    size="storyMobile"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                            <span className="font-medium">{currentStory?.title}</span>
                        </div>

                        <button
                            onClick={closeStory}
                            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="סגור סטורי"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* ניווט דסקטופ */}
                    <button
                        onClick={prevImage}
                        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-20 p-3 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="תמונה קודמת"
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

                    {/* תוכן הסטורי */}
                    <div
                        className="w-full h-full flex items-center justify-center relative"
                        onMouseDown={() => setIsPaused(true)}
                        onMouseUp={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {currentImage && (
                            <div className="relative w-full h-full">
                                {/* רקע מטושטש - כמו באינסטגרם */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center filter blur-lg scale-110"
                                    style={{
                                        backgroundImage: `url(${getImageUrl(currentImage.publicId, 400, 600)})`,
                                    }}
                                    aria-hidden="true"
                                />

                                {/* שכבת כהה על הרקע */}
                                <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

                                {/* התמונה הראשית */}
                                <div className="relative w-full h-full flex items-center justify-center p-4">
                                    <img
                                        src={getImageUrl(currentImage.publicId, 800, 600)}
                                        alt={currentImage.alt}
                                        className="max-w-full max-h-full object-contain shadow-2xl"
                                        style={{
                                            maxHeight: 'calc(100vh - 120px)', // מקום לכותרת וכיתוב
                                        }}
                                        loading="lazy"
                                    />
                                </div>

                                {/* כיתוב התמונה */}
                                <div className="absolute bottom-4 left-4 right-4 text-center z-10">
                                    <p className="text-white text-sm md:text-lg font-medium bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                                        {currentImage.caption}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* אזורי מגע למובייל */}
                    <div className="md:hidden absolute right-0 top-0 bottom-0 w-1/3 z-10" onClick={prevImage} />
                    <div className="md:hidden absolute left-0 top-0 bottom-0 w-1/3 z-10" onClick={nextImage} />
                </div>
            )}
        </>
    );
};

export default StoriesSection;