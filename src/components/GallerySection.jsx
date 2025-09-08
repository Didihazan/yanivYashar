import React from 'react';
import PhotoAlbum from './Album/PhotoAlbum';

const GallerySection = () => {
    return (
        <section id="gallery" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            {/* רקע דקורטיבי */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* כותרת משופרת */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                        רגעים מהאלבומים
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">
                        כל תמונה היא סיפור, כל אלבום הוא חיים שלמים. דפדפו כדי לחוות את הקסם.
                    </p>

                    {/* אינדיקטור אינטראקטיביות */}
                    <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500">
                        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                        <span>אלבום אינטראקטיבי - לחצו או החליקו לדפדוף</span>
                    </div>
                </div>

                {/* האלבום */}
                <PhotoAlbum />

                {/* הודעה נוספת למובייל */}
                <div className="md:hidden text-center mt-6">
                    <p className="text-xs text-gray-500 bg-white/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                        💡 טיפ: החליקו במהירות לדפדוף מהיר
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;