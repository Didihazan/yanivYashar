import React, { useState } from 'react';

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
            {/* Stories Grid */}
            <div className="flex justify-center gap-6 my-12 px-4">
                {stories.map((story) => (
                    <button
                        key={story.id}
                        onClick={() => openStory(story.id)}
                        className="flex flex-col items-center gap-3 group focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg p-2"
                        aria-label={`פתח סטורי ${story.title}`}
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-orange-500 p-1 group-hover:scale-105 transition-transform">
                            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm font-medium">
                                {story.title}
                            </div>
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{story.title}</span>
                    </button>
                ))}
            </div>

            {/* Story Modal */}
            {activeStory && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    {/* Progress Bar */}
                    <div className="absolute top-4 left-4 right-4 flex gap-1">
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
                        className="absolute top-4 right-4 text-white text-2xl z-10 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white rounded"
                        aria-label="סגור סטורי"
                    >
                        ×
                    </button>

                    {/* Image Area */}
                    <div
                        className="w-full h-full flex items-center justify-center cursor-pointer relative"
                        onClick={nextImage}
                    >
                        <div className="text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">
                                {stories.find(s => s.id === activeStory)?.title}
                            </h3>
                            <div className="text-lg">
                                תמונה {currentImageIndex + 1} מתוך {stories.find(s => s.id === activeStory)?.images.length}
                            </div>
                            <div className="mt-4 text-gray-300">
                                {stories.find(s => s.id === activeStory)?.images[currentImageIndex]}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Areas */}
                    <button
                        onClick={prevImage}
                        className="absolute left-0 top-0 bottom-0 w-1/3 opacity-0 focus:opacity-20 focus:bg-white focus:outline-none"
                        aria-label="תמונה קודמת"
                        disabled={currentImageIndex === 0}
                    />
                    <button
                        onClick={nextImage}
                        className="absolute right-0 top-0 bottom-0 w-1/3 opacity-0 focus:opacity-20 focus:bg-white focus:outline-none"
                        aria-label="תמונה הבאה"
                    />
                </div>
            )}
        </>
    );
};

export default StoriesSection;