import React from 'react';
import { Camera, Heart, Smile } from 'lucide-react';
import { CloudinaryImage } from '../utils/cloudinary';

const PHOTOGRAPHER_IMAGE_ID = 'צלם_1_52_mhawl9'; // An image of a photographer in action

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Image Column */}
                    <div className="relative order-last md:order-first">
                        <div className="relative z-10">
                            <CloudinaryImage
                                publicId={PHOTOGRAPHER_IMAGE_ID}
                                alt="יניב ישר, צלם אירועים, בפעולה"
                                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div
                            aria-hidden="true"
                            className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl transform rotate-[-6deg] z-0"
                        />
                    </div>

                    {/* Text Column */}
                    <div className="md:pr-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            קודם כל, אתם
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            ברגעים הכי מרגשים בחיים, בשעות הכי שמחות וטהורות, יש גם לא מעט לחץ וחששות. כדי לעבור את הזמן הגדול הזה בנחת, אתם צריכים לידכם אנשי מקצוע ששמים לב. אנשים ששמים את הלב שלהם כדי שאתם תוכלו להרגיש רגועים ושמחים.
                        </p>

                        <div className="space-y-4 mb-8 text-gray-700">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-2">
                                    <Heart className="w-5 h-5"/>
                                </div>
                                <p>
                                    <strong>לשים לב לאנרגיה ולאווירה.</strong> אני שם כדי לשמח אתכם ולגרום לכם להרגיש הכי טוב שאפשר.
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 bg-orange-100 text-orange-600 rounded-full p-2">
                                    <Smile className="w-5 h-5"/>
                                </div>
                                <p>
                                    <strong>להיות שם בנחת ובסבלנות.</strong> גם אם משהו משתבש או לא צפוי קורה, אני שם אתכם ברוגע ובחיוך.
                                </p>
                            </div>
                        </div>

                        <blockquote className="relative p-4 text-xl italic font-semibold text-center text-gray-800 bg-gray-50 border-r-4 border-orange-400 rounded-lg shadow-sm">
                            <p>
                                "כי כשמרגישים טוב, גם נראים טוב. החיוכים טבעיים יותר, השמחה אמיתית יותר, והתמונות - יוצאות מעולות."
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;