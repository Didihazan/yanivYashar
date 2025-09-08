import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { CloudinaryImage } from '../utils/cloudinary';

// Testimonials data remains the same
const testimonials = [
    {
        quote: "\n" +
            "\t\t\t\t\t\tהתמונות יצאו מעלפות\n" +
            "אתה ממש אומן!\n" +
            "היה לנו כיף גדול איתך\n" +
            "והשארת לנו מזכרת מדהימה\n" +
            "של הנצחת הרגעים היפים\n" +
            "של החיים\n" +
            "אז תודה רבה שוב\t\t\t\t\t",
        name: "משפחת פורקוביץ'",
        event: "חתונה",
        publicId: "DSC_1573_e4tzog"
    },
    {
        quote: "\n" +
            "\t\t\t\t\t\tתודה על סבלנות אין קץ, על גמישות מדהימה, ועל התחושה שנתתם שאתם מוכנים לעשות הכל בשביל שהשמחה תהיה שלמה!!\n" +
            "אנחנו מלאי תודה והערכה!\t\t\t\t\t",
        name: "משפחת סבן",
        event: "בר מצווה",
        publicId: "DSC_6389_lvkbcf"
    },
    {
        quote: "התוצאה הסופית עלתה על כל הציפיות! יניב הוא לא רק צלם, הוא אמן. כל תמונה מספרת סיפור. הוא היה קשוב, מקצועי וגרם לבת שלנו להרגיש כמו נסיכה בבת המצווה.",
        name: "משפחת שטיינר",
        event: "בת מצווה",
        publicId: "DSC_9654_j1ntwn"
    }
];

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    מה לקוחות מספרים
                </h2>
                <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    הסיפורים שלכם הם ההשראה שלי. כמה מילים חמות מלקוחות שהפכו לחברים.
                </p>

                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[450px] md:h-[320px]">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                                aria-hidden={index !== currentIndex}
                            >
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                                    <div className="md:flex h-full">
                                        {/* Image Section */}
                                        <div className="md:w-1/3 relative">
                                            <CloudinaryImage
                                                publicId={testimonial.publicId}
                                                alt={`תמונה מאירוע של ${testimonial.name}`}
                                                className="w-full h-48 md:h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                                        </div>

                                        {/* Content Section - Updated Layout */}
                                        <div className="md:w-2/3 p-6 md:p-8 flex flex-col">
                                            {/* Top part: Stars and Name */}
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-bold text-gray-800 text-lg mr-3">{testimonial.name}</p>
                                                        <p className="text-sm text-gray-500 mr-3">{testimonial.event}</p>
                                                    </div>
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current ml-2" />
                                                        ))}
                                                    </div>
                                                </div>
                                                <hr className="my-4" />
                                            </div>

                                            {/* Main quote */}
                                            <div className="flex-grow relative flex items-center">
                                                <Quote className="absolute -left-4 top-0 w-16 h-16 text-gray-300 transform -translate-y-4" />
                                                <blockquote className="text-gray-600 text-lg italic z-10">
                                                    "{testimonial.quote}"
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-10 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label="ההמלצה הקודמת"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-10 bg-white/80 hover:bg-white backdrop-blur-sm p-3 rounded-full shadow-md transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        aria-label="ההמלצה הבאה"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`עבור להמלצה ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;