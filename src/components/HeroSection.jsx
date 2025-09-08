// src/components/HeroSection.jsx - נוקה מהסטוריז
import React from "react";

// תמונת הרקע – Cloudinary עם טרנספורמציות לאופטימיזציה
const HERO_IMG =
    "https://res.cloudinary.com/dwsvrbbw5/image/upload/f_auto,q_auto,c_fill,g_auto,w_1920,h_900/v1757244166/DSC_9693_nj30cp.jpg";

export default function HeroSection() {
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

            {/* תוכן על התמונה - רק הטקסט */}
            <div
                className="relative z-10 w-full px-4 sm:px-6 lg:px-8"
                style={{ height: "68vh", maxHeight: 800, minHeight: 420 }}
            >
                <div className="h-full grid place-items-center text-center">
                    <div>
                        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            יניב ישר
                        </h1>
                        <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            מצלמים שמחה
                        </h2>
                    </div>
                </div>
            </div>

            {/* פאנל הסטוריז – באותו HERO, מתחת לתמונה */}
            <div className="relative z-20 w-full -mt-18 sm:-mt-18">
                <div className="mx-auto max-w-5xl px-4 sm:px-6">
                    <div className="bg-white/70 backdrop-blur rounded-2xl shadow-xl p-4 sm:p-6">
                        {/* המקום שבו יוצגו הסטוריז מ-StoriesSection */}
                        <div id="stories-container"></div>
                    </div>
                </div>
            </div>

            {/* מרווח קטן לפני הסקשן הבא */}
            <div className="h-4 sm:h-10" />
        </section>
    );
}