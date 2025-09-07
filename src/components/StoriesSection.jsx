import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import {CloudinaryImage, ResponsiveCloudinaryImage, cloudinaryStories, getImageUrl} from '../utils/cloudinary';

const StoriesSection = () => {
    const [activeStory, setActiveStory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);

    const STORY_DURATION = 3000; // 3 שניות לכל תמונה

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

    // האזן לאירוע חיצוני שנשלח מה-HeroSection
    useEffect(() => {
        const onOpenStory = (e) => {
            const id = e.detail;
            if (!id) return;
            setActiveStory(id);
            setCurrentImageIndex(0);
            setProgress(0);
            setIsPaused(false);
        };
        window.addEventListener("openStory", onOpenStory);
        return () => window.removeEventListener("openStory", onOpenStory);
    }, []);

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

    return (
        <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    הסטוריז שלי
                </h2>

                <div className="max-w-md mx-auto">
                    {/* במובייל - שורה אחת עם גלילה */}
                    <div className="md:hidden">
                        <div className="flex gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide">
                            {cloudinaryStories.map((story) => (
                                <button
                                    key={story.id}
                                    onClick={() => openStory(story.id)}
                                    className="flex-shrink-0 flex flex-col items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2"
                                    aria-label={`פתח סטורי ${story.title}`}
                                >
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-0.5 group-active:scale-95 transition-transform">
                                        <div className="w-full h-full rounded-full bg-white p-0.5">
                                            <CloudinaryImage
                                                publicId={story.thumbnail}
                                                alt={`תצוגה מקדימה של ${story.title}`}
                                                size="storyMobile"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-700 font-medium text-center max-w-[4rem] truncate">
                                        {story.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* בדסקטופ - שורה אחת עם רווחים */}
                    <div className="hidden md:flex md:justify-center md:gap-6 lg:gap-8">
                        {cloudinaryStories.map((story) => (
                            <button
                                key={story.id}
                                onClick={() => openStory(story.id)}
                                className="flex flex-col items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-3"
                                aria-label={`פתח סטורי ${story.title}`}
                            >
                                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-0.5 group-hover:scale-105 transition-transform">
                                    <div className="w-full h-full rounded-full bg-white p-0.5">
                                        <CloudinaryImage
                                            publicId={story.thumbnail}
                                            alt={`תצוגה מקדימה של ${story.title}`}
                                            size="storyThumb"
                                            className="w-full h-full rounded-full object-cover"
                                        />
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
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img
                                    src={getImageUrl(currentImage.publicId, 800, 600)}
                                    alt={currentImage.alt}
                                    className="max-w-full max-h-full object-contain"
                                    loading="lazy"
                                />

                                {/* כיתוב התמונה */}
                                <div className="absolute bottom-20 left-4 right-4 text-center">
                                    <p className="text-white text-lg font-medium bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
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