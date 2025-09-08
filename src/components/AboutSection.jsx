import React from 'react';
import { Heart, Smile } from 'lucide-react';
import { CloudinaryImage } from '../utils/cloudinary';
import './AboutSection.css'; // ייבוא קובץ ה-CSS החדש

const PHOTOGRAPHER_IMAGE_ID = 'יניב-ישר-684x1024_rpqvka';

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* Image Column - העיצוב החדש */}
                    <div className="order-last lg:order-first about-image-container">
                        <div className="about-image-bg-blob"></div>
                        <CloudinaryImage
                            publicId={PHOTOGRAPHER_IMAGE_ID}
                            alt="יניב ישר, צלם אירועים"
                            className="about-image"
                        />
                    </div>

                    {/* Text Column - ללא שינוי */}
                    <div className="lg:pr-8 space-y-6 lg:space-y-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
                                קודם כל, אתם
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                ברגעים הכי מרגשים בחיים, בשעות הכי שמחות וטהורות, יש גם לא מעט לחץ וחששות. כדי לעבור את הזמן הגדול הזה בנחת, אתם צריכים לידכם אנשי מקצוע ששמים לב. אנשים ששמים את הלב שלהם כדי שאתם תוכלו להרגיש רגועים ושמחים.
                            </p>
                        </div>
                        <div className="space-y-4 lg:space-y-6">
                            <div className="flex items-start gap-3 lg:gap-4">
                                <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2 lg:p-3 mt-1">
                                    <Heart className="w-4 h-4 lg:w-5 lg:h-5"/>
                                </div>
                                <div>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        <strong className="text-gray-800">לשים לב לאנרגיה ולאווירה.</strong> אני שם כדי לשמח אתכם ולגרום לכם להרגיש הכי טוב שאפשר.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 lg:gap-4">
                                <div className="flex-shrink-0 bg-orange-100 text-orange-600 rounded-full p-2 lg:p-3 mt-1">
                                    <Smile className="w-4 h-4 lg:w-5 lg:h-5"/>
                                </div>
                                <div>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        <strong className="text-gray-800">להיות שם בנחת ובסבלנות.</strong> גם אם משהו משתבש או לא צפוי קורה, אני שם אתכם ברוגע ובחיוך.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 lg:pt-6">
                            <blockquote className="relative p-4 sm:p-6 text-lg sm:text-xl italic font-semibold text-center text-gray-800 bg-gradient-to-r from-gray-50 to-blue-50 border-r-4 border-orange-400 rounded-lg shadow-sm">
                                <p className="relative z-10 leading-relaxed">
                                    "כי כשמרגישים טוב, גם נראים טוב. החיוכים טבעיים יותר, השמחה אמיתית יותר, והתמונות - יוצאות מעולות."
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;