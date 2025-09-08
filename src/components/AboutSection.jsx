import React from 'react';
import { Camera, Heart, Smile } from 'lucide-react';
import { CloudinaryImage } from '../utils/cloudinary';

const PHOTOGRAPHER_IMAGE_ID = 'יניב-ישר-684x1024_rpqvka'; // An image of a photographer in action

const AboutSection = () => {
    return (
        <section id="about" className="py-16 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

                    {/* Image Column - משופר לרספונסיביות */}
                    <div className="relative order-last lg:order-first">
                        <div className="relative z-10">
                            <CloudinaryImage
                                publicId={PHOTOGRAPHER_IMAGE_ID}
                                alt="יניב ישר, צלם אירועים, בפעולה"
                                className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[500px] lg:max-h-[600px]"
                            />
                        </div>
                        {/* Decorative background element - מותאם למובייל */}
                        <div
                            aria-hidden="true"
                            className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-full h-full bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl transform rotate-[-3deg] lg:rotate-[-6deg] z-0"
                        />
                    </div>

                    {/* Text Column - משופר עם spacing טוב יותר */}
                    <div className="lg:pr-8 space-y-6 lg:space-y-8">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 lg:mb-6">
                                קודם כל, אתם
                            </h2>

                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                ברגעים הכי מרגשים בחיים, בשעות הכי שמחות וטהורות, יש גם לא מעט לחץ וחששות. כדי לעבור את הזמן הגדול הזה בנחת, אתם צריכים לידכם אנשי מקצוע ששמים לב. אנשים ששמים את הלב שלהם כדי שאתם תוכלו להרגיש רגועים ושמחים.
                            </p>
                        </div>

                        {/* Feature points - משופר למובייל */}
                        <div className="space-y-4 lg:space-y-6">
                            <div className="flex items-start gap-3 lg:gap-4">
                                <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2 lg:p-3 mt-1">
                                    <Heart className="w-4 h-4 lg:w-5 lg:h-5"/>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        <strong className="text-gray-800">לשים לב לאנרגיה ולאווירה.</strong> אני שם כדי לשמח אתכם ולגרום לכם להרגיש הכי טוב שאפשר.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 lg:gap-4">
                                <div className="flex-shrink-0 bg-orange-100 text-orange-600 rounded-full p-2 lg:p-3 mt-1">
                                    <Smile className="w-4 h-4 lg:w-5 lg:h-5"/>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        <strong className="text-gray-800">להיות שם בנחת ובסבלנות.</strong> גם אם משהו משתבש או לא צפוי קורה, אני שם אתכם ברוגע ובחיוך.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quote section - משופר למובייל */}
                        <div className="pt-4 lg:pt-6">
                            <blockquote className="relative p-4 sm:p-6 text-lg sm:text-xl italic font-semibold text-center text-gray-800 bg-gradient-to-r from-gray-50 to-blue-50 border-r-4 border-orange-400 rounded-lg shadow-sm">
                                <div className="absolute top-2 right-2 text-orange-300 opacity-50">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                                    </svg>
                                </div>
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