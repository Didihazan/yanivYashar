import React from 'react';
import { Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-lg text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        הדרך הקלה ליצור קשר
                    </h3>
                    <p className="text-gray-600 mb-10">
                        מעדיפים שיחה מהירה או הודעת וואטסאפ?
                    </p>

                    {/* --- כפתורי הפעולה הראשיים --- */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a
                            href="tel:050-1234567"
                            className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl text-lg font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <Phone size={22} />
                            <span>שיחת טלפון</span>
                        </a>
                        <a
                            href="https://wa.me/972501234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl text-lg font-semibold bg-green-50 text-green-600 hover:bg-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <MessageCircle size={22} />
                            <span>שליחת הודעה</span>
                        </a>
                    </div>

                    {/* --- קישורי רשתות חברתיות --- */}
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://instagram.com/yaniv_photography"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="אינסטגרם"
                            className="text-gray-400 hover:text-gray-800 hover:scale-110 transition-all duration-300"
                        >
                            <Instagram size={28} />
                        </a>
                        <a
                            href="https://facebook.com/yaniv.photography"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="פייסבוק"
                            className="text-gray-400 hover:text-gray-800 hover:scale-110 transition-all duration-300"
                        >
                            <Facebook size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;