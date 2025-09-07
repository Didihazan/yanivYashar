import React from 'react';

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background with golden/warm lighting effect */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)
          `
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 text-center text-gray-800 px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
                    צילום אירועים ברמה אחרת
                </h1>

                <button
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
                    aria-label="צור איתי קשר"
                >
                    צור איתי קשר
                </button>
            </div>
        </section>
    );
};

export default HeroSection;