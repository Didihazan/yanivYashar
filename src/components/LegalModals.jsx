import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LegalModals = () => {
    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setActiveModal(null);
            }
        };

        if (activeModal) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [activeModal]);

    const PrivacyContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">מדיניות פרטיות</h1>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. מידע שאנו אוספים</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>מידע אישי:</strong> שם, טלפון, אימייל, פרטי האירוע</li>
                    <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, עוגיות</li>
                    <li><strong>תמונות:</strong> תמונות שצולמו באירועים (עם הסכמה)</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. מטרות עיבוד המידע</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>תיאום ומתן שירותי צילום</li>
                    <li>שיפור חוויית המשתמש באתר</li>
                    <li>שיווק שירותים (רק בהסכמה מפורשת)</li>
                    <li>עמידה בחובות חוקיים</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. עוגיות (Cookies)</h2>
                <div className="text-gray-600">
                    <p className="mb-2">האתר משתמש בעוגיות:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>עוגיות הכרחיות:</strong> לתפקוד בסיסי של האתר</li>
                        <li><strong>Google Analytics:</strong> לניתוח תנועה באתר</li>
                        <li><strong>עוגיות שיווק:</strong> רק בהסכמה מפורשת</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. זכויותיך לפי תיקון 13</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>זכות עיון:</strong> לקבל עותק מהמידע השמור עליך</li>
                    <li><strong>זכות תיקון:</strong> לתקן מידע שגוי</li>
                    <li><strong>זכות למחיקה:</strong> להישכח ולמחוק את כל הפרטים</li>
                    <li><strong>זכות להתנגדות:</strong> להתנגד לעיבוד מידע שיווקי</li>
                    <li><strong>זכות להעברה:</strong> לקבל המידע בפורמט מובנה</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. אבטחת מידע</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>הצפנת SSL לכל תקשורת האתר</li>
                    <li>שמירת מידע על שרתים מאובטחים בישראל</li>
                    <li>גישה מוגבלת למידע רק לעובדים מורשים</li>
                    <li>גיבויים מוצפנים יומיים</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. שיתוף מידע עם צדדים שלישיים</h2>
                <div className="text-gray-600">
                    <p className="mb-2">אנו משתפים מידע עם:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>ספקי שירותי תשלום (לעיבוד תשלומים)</li>
                        <li>חברות אחסון ענן (Google Drive, Dropbox)</li>
                        <li>ספקי שירותי אימייל (Gmail, Outlook)</li>
                        <li>רק כנדרש על פי חוק או עם הסכמתך</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. יצירת קשר וממש זכויות</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium mb-2">ממונה הגנת פרטיות:</p>
                    <p className="text-gray-600">יניב ישר</p>
                    <p className="text-gray-600">אימייל: privacy@yaniv-photography.com</p>
                    <p className="text-gray-600">טלפון:  050-7973104</p>
                    <p className="text-gray-600 mt-2">מענה תוך 30 יום לכל בקשה</p>
                </div>
            </section>

            <div className="border-t pt-4 text-sm text-gray-500">
                <p>עדכון אחרון: ספטמבר 2025 | תואם לתיקון 13 לחוק הגנת הפרטיות</p>
            </div>
        </div>
    );

    const AccessibilityContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">הצהרת נגישות</h1>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">מחויבות לנגישות</h2>
                <p className="text-gray-600 leading-relaxed">
                    יניב ישר מחויב להבטיח שהאתר נגיש לכלל האוכלוסייה.
                    אנו פועלים בהתאם לתקן הישראלי 5568 ולהנחיות WCAG 2.0 ברמה AA.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">הסדרי נגישות באתר</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>ניווט מקלדת מלא</li>
                    <li>תמיכה בקוראי מסך</li>
                    <li>ניגודיות צבעים תקינה</li>
                    <li>תיאורים חלופיים לתמונות</li>
                    <li>כותרות מובנות</li>
                    <li>תמיכה בהגדלת טקסט עד 200%</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">הסדרי נגישות בעסק</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>פגישות בלקוחות במקומות נגישים</li>
                    <li>תקשורת בווידאו קול או מייל</li>
                    <li>התאמת שירותים לצרכים מיוחדים</li>
                    <li>אפשרות לליווי בצילומים</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">דרכי פנייה</h2>
                <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium mb-2">רכז נגישות:</p>
                    <p className="text-gray-600">יניב ישר</p>
                    <p className="text-gray-600">אימייל: accessibility@yaniv-photography.com</p>
                    <p className="text-gray-600">טלפון:  050-7973104</p>
                    <p className="text-gray-600">מענה: ראשון-חמישי, 9:00-17:00</p>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">משוב על נגישות</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 mb-3">נתקלת בבעיית נגישות? אנא ספר לנו:</p>
                    <textarea
                        placeholder="תאר את הבעיה שנתקלת בה"
                        className="w-full p-3 border rounded-lg"
                        rows="3"
                    ></textarea>
                    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
                        שלח משוב
                    </button>
                </div>
            </section>

            <div className="border-t pt-4 text-sm text-gray-500">
                <p>עדכון אחרון: ספטמבר 2025 | בהתאם לתקן הישראלי 5568</p>
            </div>
        </div>
    );

    const TermsContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">תנאי שימוש</h1>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. שירותי צילום</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>השירותים כוללים צילום אירועים: חתונות, בר/בת מצווה ואירועים פרטיים</li>
                    <li>מחירים לפי מחירון קיים במועד ההזמנה</li>
                    <li>ביטול עד 30 יום - החזר מלא. פחות מכך - דמי ביטול</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. זכויות יוצרים</h2>
                <p className="text-gray-600">
                    כל התמונות שייכות ליניב ישר. הלקוח מקבל רישיון שימוש אישי בלבד.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. אחריות</h2>
                <p className="text-gray-600">
                    מתחייבים לשירות מקצועי. באירועים בלתי צפויים - צלם חלופי או החזר כספי.
                </p>
            </section>

            <div className="border-t pt-4 text-sm text-gray-500">
                <p>עדכון אחרון: ספטמבר 2025</p>
            </div>
        </div>
    );

    const renderModal = () => {
        if (!activeModal) return null;

        let content, title;
        switch (activeModal) {
            case 'terms': content = <TermsContent />; title = 'תנאי שימוש'; break;
            case 'privacy': content = <PrivacyContent />; title = 'מדיניות פרטיות'; break;
            case 'accessibility': content = <AccessibilityContent />; title = 'הצהרת נגישות'; break;
            default: return null;
        }

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between p-6 border-b">
                        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                        <button
                            onClick={() => setActiveModal(null)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="סגור חלון"
                        >
                            <X className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-6">
                        {content}
                    </div>
                    <div className="border-t p-6 flex justify-end">
                        <button
                            onClick={() => setActiveModal(null)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            סגור
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="legal-links">
                <button
                    onClick={() => setActiveModal('terms')}
                    data-modal="terms"
                    className="hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                    תנאי שימוש
                </button>
                <span className="mx-2">|</span>
                <button
                    onClick={() => setActiveModal('privacy')}
                    data-modal="privacy"
                    className="hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                    מדיניות פרטיות
                </button>
                <span className="mx-2">|</span>
                <button
                    onClick={() => setActiveModal('accessibility')}
                    data-modal="accessibility"
                    className="hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                    הצהרת נגישות
                </button>
            </div>
            {renderModal()}
        </>
    );
};

export default LegalModals;