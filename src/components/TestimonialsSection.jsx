import React from 'react';
import { CloudinaryImage } from '../utils/cloudinary';
import './TestimonialsSection.css'; // ייבוא קובץ ה-CSS החדש

const testimonials = [
    {
        quote: "התמונות יצאו מעלפות, אתה ממש אומן!",
        name: "משפחת פורקוביץ'",
        event: "חתונה",
        publicId: "DSC_1573_e4tzog"
    },
    {
        quote: "תודה על סבלנות אין קץ, ועל התחושה שאתם מוכנים לעשות הכל בשביל שהשמחה תהיה שלמה!",
        name: "משפחת סבן",
        event: "בר מצווה",
        publicId: "DSC_6389_lvkbcf"
    },
    {
        quote: "התוצאה הסופית עלתה על כל הציפיות! יניב הוא לא רק צלם, הוא אמן אמיתי.",
        name: "משפחת שטיינר",
        event: "בת מצווה",
        publicId: "DSC_9654_j1ntwn"
    }
];

// --- הרכיב הראשי ---
const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-20 testimonials-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        רגעים וסיפורים
                    </h2>
                    <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
                        מאחורי כל תמונה יש סיפור. רחפו מעל התמונות כדי לקרוא כמה מהם.
                    </p>
                </div>

                {/* קיר הפולארוידים */}
                <div className="polaroid-wall">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="polaroid-card">
                            <CloudinaryImage
                                publicId={testimonial.publicId}
                                alt={`תמונה מאירוע של ${testimonial.name}`}
                                className="polaroid-image"
                                size={{ width: 400, height: 400 }}
                            />
                            <div className="polaroid-caption">
                                <p className="polaroid-quote">"{testimonial.quote.trim()}"</p>
                                <p className="polaroid-name">- {testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;