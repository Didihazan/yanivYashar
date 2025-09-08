import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook, Send } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventDate: '', // Added event date field
        message: '',
        privacyConsent: false,
        marketingConsent: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.privacyConsent) {
            alert('יש לאשר את מדיניות הפרטיות כדי להמשיך.');
            return;
        }
        // Logic to send the form data
        console.log('Form submitted:', formData);
        alert('הפנייה נשלחה בהצלחה! ניצור קשר בהקדם.');
        // Optionally reset form
        setFormData({
            name: '',
            email: '',
            eventDate: '',
            message: '',
            privacyConsent: false,
            marketingConsent: false
        });
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        מוכנים ליצור זיכרונות?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        אשמח לשמוע על האירוע שלכם ולבדוק אם התאריך פנוי. השאירו פרטים ואחזור אליכם בהקדם.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">

                    {/* Column 1: The Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl order-last md:order-first">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">בדיקת פניות ותאריך</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="sr-only">שם מלא</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="שם מלא"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">כתובת אימייל</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="כתובת אימייל"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="eventDate" className="sr-only">תאריך האירוע</label>
                                <input
                                    type="date"
                                    id="eventDate"
                                    name="eventDate"
                                    required
                                    value={formData.eventDate}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">הודעה</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="ספרו לי קצת על האירוע..."
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                ></textarea>
                            </div>

                            <div className="space-y-4 text-sm text-gray-600">
                                <label className="flex items-start gap-2 cursor-pointer">
                                    <input type="checkbox" name="privacyConsent" required checked={formData.privacyConsent} onChange={handleInputChange} className="mt-1 accent-orange-500" />
                                    <span>אני מסכים/ה <a href="#" onClick={(e) => { e.preventDefault(); document.querySelector('[data-modal="privacy"]').click(); }} className="underline hover:text-blue-600">למדיניות הפרטיות</a> ולעיבוד הפרטים לצורך מענה לפנייה. *</span>
                                </label>
                                <label className="flex items-start gap-2 cursor-pointer">
                                    <input type="checkbox" name="marketingConsent" checked={formData.marketingConsent} onChange={handleInputChange} className="mt-1 accent-orange-500" />
                                    <span>אני רוצה לקבל עדכונים ומבצעים (אופציונלי).</span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
                            >
                                <Send className="w-5 h-5" />
                                שלח פנייה
                            </button>
                        </form>
                    </div>

                    {/* Column 2: Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">דרכי התקשרות נוספות</h3>
                            <div className="space-y-4">
                                <a href="tel: 050-7973104" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">טלפון</p>
                                        <p className="text-gray-600 group-hover:text-blue-600 transition-colors">050-7973104</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/972507973104" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="bg-green-100 text-green-600 rounded-full p-3">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800">WhatsApp</p>
                                        <p className="text-gray-600 group-hover:text-green-600 transition-colors">שלח הודעה מהירה</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">עקבו אחרי ברשתות</h3>
                            <div className="flex gap-4">
                                <a href="https://instagram.com/yaniv_photography" target="_blank" rel="noopener noreferrer" aria-label="אינסטגרם" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all transform hover:scale-110">
                                    <Instagram className="w-7 h-7 text-pink-600" />
                                </a>
                                <a href="https://facebook.com/yaniv.photography" target="_blank" rel="noopener noreferrer" aria-label="פייסבוק" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all transform hover:scale-110">
                                    <Facebook className="w-7 h-7 text-blue-600" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;