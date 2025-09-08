import React from "react";
import './HeroSection.css'; // ייבוא קובץ ה-CSS החדש

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
            {/* רקע – ללא שינוי */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 bg-center bg-cover"
                style={{
                    backgroundImage: `url(${HERO_IMG})`,
                    height: "68vh",
                    maxHeight: 800,
                    minHeight: 420,
                }}
            />
            {/* שכבת כהה – ללא שינוי */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0"
                style={{
                    height: "68vh",
                    maxHeight: 800,
                    minHeight: 420,
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,.65), rgba(0,0,0,.55) 35%, rgba(0,0,0,.75))",
                }}
            />

            {/* תוכן על התמונה - המבנה המעודכן */}
            <div
                className="relative z-10 w-full px-4 sm:px-6 lg:px-8"
                style={{ height: "68vh", maxHeight: 800, minHeight: 420 }}
            >
                <div className="h-full grid place-items-center text-center">
                    {/* עטיפה חדשה להחלת האנימציה */}
                    <div className="hero-content">
                        <h1 className="text-white hero-title-name drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            יניב ישר
                        </h1>

                        {/* הקו המפריד החדש */}
                        <hr className="separator-line" />

                        <h2 className="text-white font-light hero-tagline drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                            מצלמים שמחה
                        </h2>
                    </div>
                </div>
            </div>

            {/* פאנל הסטוריז – ללא שינוי */}
            <div className="relative z-20 w-full -mt-18 sm:-mt-18">
                <div className="mx-auto max-w-5xl px-4 sm:px-6">
                    <div className="bg-white/70 backdrop-blur rounded-2xl shadow-xl p-4 sm:p-6">
                        <div id="stories-container"></div>
                    </div>
                </div>
            </div>

            <div className="h-4 sm:h-10" />
        </section>
    );
}