import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', privacyConsent: false, marketingConsent: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.privacyConsent) {
            alert('יש לאשר את מדיניות הפרטיות');
            return;
        }
        // שליחת הטופס
        console.log('Form submitted:', formData);
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    צור קשר
                </h2>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* טופס יצירת קשר */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">שלח הודעה</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="שם מלא"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                            <input
                                type="email"
                                placeholder="כתובת אימייל"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            />
                            <textarea
                                placeholder="הודעה"
                                rows="4"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                            ></textarea>

                            {/* תיבות אישור חובה לפי תיקון 13 */}
                            <div className="space-y-3 text-sm">
                                <label className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        required
                                        checked={formData.privacyConsent}
                                        onChange={(e) => setFormData({...formData, privacyConsent: e.target.checked})}
                                        className="mt-1 accent-orange-500"
                                    />
                                    <span>
                                        אני מסכים למדיניות הפרטיות ולעיבוד הפרטים לצורך מתן מענה לפנייתי *
                                    </span>
                                </label>

                                <label className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.marketingConsent}
                                        onChange={(e) => setFormData({...formData, marketingConsent: e.target.checked})}
                                        className="mt-1 accent-orange-500"
                                    />
                                    <span>
                                        אני מעוניין לקבל עדכונים שיווקיים ומידע על שירותי הצילום (אופציונלי)
                                    </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-4 focus:ring-orange-300"
                            >
                                שלח הודעה
                            </button>
                        </form>
                    </div>

                    {/* דרכי יצירת קשר */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">דרכי התקשרות</h3>

                        <div className="space-y-4 mb-8">
                            <a
                                href="tel:050-1234567"
                                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
                                aria-label="התקשר ליניב ישר"
                            >
                                <Phone className="w-5 h-5" aria-hidden="true" />
                                <span>050-1234567</span>
                            </a>

                            <a
                                href="https://wa.me/972501234567"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
                                aria-label="שלח הודעה ווצאפ ליניב ישר"
                            >
                                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                                <span>WhatsApp</span>
                            </a>

                            <a
                                href="mailto:yaniv@example.com"
                                className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                                aria-label="שלח מייל ליניב ישר"
                            >
                                <Mail className="w-5 h-5" aria-hidden="true" />
                                <span>yaniv@example.com</span>
                            </a>
                        </div>

                        {/* רשתות חברתיות */}
                        <div className="flex gap-4">
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
            </div>
        </section>
    );
};

export default ContactSection;