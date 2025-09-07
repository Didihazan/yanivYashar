import React from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    צור קשר
                </h2>

                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-lg text-gray-600 mb-8">
                        מעוניינים לקבוע פגישה? בואו נדבר!
                    </p>

                    {/* Contact Methods */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <a
                            href="tel:050-1234567"
                            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
                            aria-label="התקשר ליניב ישר"
                        >
                            <Phone className="w-5 h-5" aria-hidden="true" />
                            <span>התקשר</span>
                        </a>

                        <a
                            href="https://wa.me/972501234567"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
                            aria-label="שלח הודעה ווצאפ ליניב ישר"
                        >
                            <MessageCircle className="w-5 h-5" aria-hidden="true" />
                            <span>WhatsApp</span>
                        </a>

                        <a
                            href="mailto:yaniv@example.com"
                            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                            aria-label="שלח מייל ליניב ישר"
                        >
                            <Mail className="w-5 h-5" aria-hidden="true" />
                            <span>מייל</span>
                        </a>
                    </div>

                    {/* Social Media */}
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://instagram.com/yaniv_photography"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 rounded p-2"
                            aria-label="עקוב אחרי יניב באינסטגרם"
                        >
                            <Instagram className="w-8 h-8" aria-hidden="true" />
                        </a>

                        <a
                            href="https://facebook.com/yaniv.photography"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2"
                            aria-label="עקוב אחרי יניב בפייסבוק"
                        >
                            <Facebook className="w-8 h-8" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;