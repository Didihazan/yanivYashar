// src/components/HeroSection.jsx
import React from "react";
import { cloudinaryStories, CloudinaryImage } from "../utils/cloudinary";

// תמונת הרקע – Cloudinary עם טרנספורמציות לאופטימיזציה
const HERO_IMG =
    "https://res.cloudinary.com/dwsvrbbw5/image/upload/f_auto,q_auto,c_fill,g_auto,w_1920,h_900/v1757244166/DSC_9693_nj30cp.jpg";

export default function HeroSection() {
    const handleStoryClick = (id) => {
        // פותח את המודל של הסטוריז (ב- StoriesSection נוסיף מאזין לאירוע הזה)
        window.dispatchEvent(new CustomEvent("openStory", { detail: id }));
    };

    return (
        <section
            id="home"
            dir="rtl"
            aria-label="צילום אירועים ברמה אחרת"
            className="relative flex flex-col items-center justify-start overflow-visible"
        >
            {/* רקע – לא מסך מלא: בערך 65–70vh */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 bg-center bg-cover"
                style={{
                    backgroundImage: `url(${HERO_IMG})`,
                    height: "68vh",            // מובייל + דסקטופ (נראה כמו במוקאפ)
                    maxHeight: 800,
                    minHeight: 420,
                }}
            />
            {/* שכבת כהה לשיפור ניגודיות טקסט */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0"
                style={{
                    height: "68vh",
                    maxHeight: 800,
                    minHeight: 420,
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.35) 35%, rgba(0,0,0,.55))",
                }}
            />

            {/* תוכן על התמונה */}
            <div
                className="relative z-10 w-full px-4 sm:px-6 lg:px-8"
                style={{ height: "68vh", maxHeight: 800, minHeight: 420 }}
            >
                <div className="h-full grid place-items-center text-center">
                    <div>
                        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            צילום אירועים ברמה אחרת
                        </h1>


                    </div>
                </div>
            </div>

            {/* פאנל הסטוריז – באותו HERO, מתחת לתמונה */}
            <div className="relative z-20 w-full -mt-10 sm:-mt-14">
                <div className="mx-auto max-w-5xl px-4 sm:px-6">
                    <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4 sm:p-6">
                        {/* כותרת קטנה (אופציונלי) */}
                        <h2 className="sr-only">סטוריז</h2>

                        {/* מובייל – גלילה אופקית */}
                        <div className="md:hidden">
                            <div className="flex gap-4 overflow-x-auto pb-1 scrollbar-hide snap-x">
                                {cloudinaryStories.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => handleStoryClick(s.id)}
                                        className="flex-shrink-0 snap-start flex flex-col items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2"
                                        aria-label={`פתח סטורי ${s.title}`}
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-0.5">
                                            <div className="w-full h-full rounded-full bg-white p-0.5">
                                                <CloudinaryImage
                                                    publicId={s.thumbnail}
                                                    alt={`תצוגה מקדימה של ${s.title}`}
                                                    size="storyMobile"
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-700 font-medium text-center max-w-[4rem] truncate">
                      {s.title}
                    </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* דסקטופ – ארבעה/חמישה עיגולים בשורה */}
                        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
                            {cloudinaryStories.map((s) => (
                                <button
                                    key={s.id}
                                    onClick={() => handleStoryClick(s.id)}
                                    className="flex flex-col items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-3"
                                    aria-label={`פתח סטורי ${s.title}`}
                                >
                                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 p-0.5 group-hover:scale-105 transition-transform">
                                        <div className="w-full h-full rounded-full bg-white p-0.5">
                                            <CloudinaryImage
                                                publicId={s.thumbnail}
                                                alt={`תצוגה מקדימה של ${s.title}`}
                                                size="storyThumb"
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-700 font-medium text-center">
                    {s.title}
                  </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* מרווח קטן לפני הסקשן הבא */}
            <div className="h-8 sm:h-10" />

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
}
