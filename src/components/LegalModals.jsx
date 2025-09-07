import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const LegalModals = () => {
    const [activeModal, setActiveModal] = useState(null);

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setActiveModal(null);
            }
        };

        if (activeModal) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [activeModal]);

    const openModal = (modalType) => {
        setActiveModal(modalType);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    // Modal Content Components
    const TermsContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">תנאי שימוש</h1>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. כללי</h2>
                <p className="text-gray-600 leading-relaxed">
                    ברוכים הבאים לאתר הצילום של יניב ישר. השימוש באתר זה כפוף לתנאים המפורטים להלן.
                    המשך השימוש באתר מהווה הסכמה מלאה לתנאים אלה.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. שירותי צילום</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>השירותים כוללים צילום אירועים: חתונות, בר/בת מצווה ואירועים פרטיים</li>
                    <li>מחירי השירותים יקבעו בהתאם למחירון הקיים במועד ההזמנה</li>
                    <li>לביטול עד 30 יום מהאירוע - החזר מלא. פחות מכך - תחויב דמי ביטול</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. זכויות יוצרים</h2>
                <p className="text-gray-600 leading-relaxed">
                    כל התמונות שצולמו שייכות ליניב ישר. הלקוח מקבל רישיון שימוש אישי בלבד.
                    אסור להעביר או למכור את התמונות ללא הסכמה בכתב.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. אחריות</h2>
                <p className="text-gray-600 leading-relaxed">
                    יניב ישר מתחייב לספק שירות מקצועי ואיכותי. באירועים בלתי צפויים (מחלה, כוח עליון),
                    יושב צלם חלופי או יוחזר התשלום במלואו.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. פרטיות</h2>
                <p className="text-gray-600 leading-relaxed">
                    השימוש באתר כפוף למדיניות הפרטיות. אנו מתחייבים לשמור על פרטיות הלקוחות
                    ולא לחשוף מידע אישי לגורמים חיצוניים.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. תקופת תוקף</h2>
                <p className="text-gray-600 leading-relaxed">
                    תנאים אלה בתוקף מהתאריך: 1 בספטמבר 2025.
                    שינויים יפורסמו באתר ויכנסו לתוקף לאחר 30 יום.
                </p>
            </section>

            <div className="border-t pt-4 text-sm text-gray-500">
                <p>עדכון אחרון: ספטמבר 2025 | יניב ישר - צילום אירועים</p>
            </div>
        </div>
    );

    const PrivacyContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">מדיניות פרטיות</h1>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. איסוף מידע</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                    אנו אוספים מידע בדרכים הבאות:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>מידע שאתה מספק:</strong> שם, טלפון, אימייל, פרטי האירוע</li>
                    <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, עוגיות (cookies)</li>
                    <li><strong>תמונות:</strong> תמונות שצולמו באירועים</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. שימוש במידע</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>תיאום ומתן שירותי צילום</li>
                    <li>שיפור חוויית המשתמש באתר</li>
                    <li>שיווק שירותים (רק בהסכמה מפורשת)</li>
                    <li>עמידה בחובות חוקיים</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. עוגיות (Cookies)</h2>
                <p className="text-gray-600 leading-relaxed">
                    האתר משתמש בעוגיות לשיפור הפונקציונליות וחוויית המשתמש.
                    ניתן לחסום עוגיות בהגדרות הדפדפן, אך זה עלול להשפיע על פעולת האתר.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. אבטחת מידע</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>הצפנת SSL לכל תקשורת האתר</li>
                    <li>שמירת מידע על שרתים מאובטחים בישראל</li>
                    <li>גישה מוגבלת למידע רק לעובדים מורשים</li>
                    <li>גיבויים יומיים ומוצפנים</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. זכויותיך</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                    בהתאם לחוק הגנת הפרטיות הישראלי, זכותך:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>לקבל עותק של המידע השמור עליך</li>
                    <li>לבקש תיקון מידע שגוי</li>
                    <li>לבקש מחיקת מידע (בכפוף למגבלות חוקיות)</li>
                    <li>להתנגד לעיבוד מידע לצרכי שיווק</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. העברת מידע</h2>
                <p className="text-gray-600 leading-relaxed">
                    המידע נשמר בישראל. העברת מידע לחו"ל תתבצע רק למדינות מאושרות
                    או עם הגנות מתאימות בהתאם לחוק.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. יצירת קשר</h2>
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium mb-2">קצין הגנת פרטיות:</p>
                    <p className="text-gray-600">יניב ישר</p>
                    <p className="text-gray-600">אימייל: privacy@yaniv-photography.com</p>
                    <p className="text-gray-600">טלפון: 050-1234567</p>
                </div>
            </section>

            <div className="border-t pt-4 text-sm text-gray-500">
                <p>עדכון אחרון: ספטמבר 2025 | בהתאם לתיקון 13 לחוק הגנת הפרטיות</p>
            </div>
        </div>
    );

    const AccessibilityContent = () => (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">הצהרת נגישות</h1>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">מחויבות לנגישות</h2>
                <p className="text-gray-600 leading-relaxed">
                    יניב ישר מחויב להבטיח שהאתר שלו נגיש לכלל האוכלוסייה, כולל אנשים עם מוגבלויות.
                    אנו פועלים בהתאם לתקן הישראלי 5568 ולהנחיות WCAG 2.0 ברמה AA.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">רמת הנגישות</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li><strong>תקן:</strong> WCAG 2.0 Level AA (התקן הישראלי 5568)</li>
                    <li><strong>בדיקה:</strong> האתר נבדק באופן שוטף על ידי כלים אוטומטיים וידניים</li>
                    <li><strong>עדכון אחרון:</strong> ספטמבר 2025</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">הסדרי נגישות באתר</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>ניווט מקלדת מלא לכל חלקי האתר</li>
                    <li>תמיכה בקוראי מסך</li>
                    <li>ניגודיות צבעים בהתאם לתקן</li>
                    <li>תיאורים חלופיים לכל התמונות</li>
                    <li>כותרות מובנות היטב</li>
                    <li>תמיכה בהגדלת טקסט עד 200%</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">בעיות נגישות ידועות</h2>
                <p className="text-gray-600 leading-relaxed">
                    אנו פועלים ברציפות לשיפור הנגישות. נכון להיום, לא ידועות לנו בעיות נגישות משמעותיות.
                    אם נתקלת בבעיה, אנא צור קשר עמנו.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">דרכי פנייה</h2>
                <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium mb-2">רכז נגישות:</p>
                    <p className="text-gray-600">יניב ישר</p>
                    <p className="text-gray-600">אימייל: accessibility@yaniv-photography.com</p>
                    <p className="text-gray-600">טלפון: 050-1234567</p>
                    <p className="text-gray-600">זמני מענה: ראשון-חמישי, 9:00-17:00</p>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">תהליך טיפול בפניות</h2>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                    <li>פנייתך תתקבל תוך 24 שעות</li>
                    <li>נבצע בדיקה של הבעיה שדווחה</li>
                    <li>נעדכן אותך על לוח הזמנים לפתרון</li>
                    <li>נתקן בעיות קריטיות תוך 7 ימי עבודה</li>
                    <li>בעיות פחות חשובות - תוך 30 יום</li>
                </ol>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">טכנולוגיות מסייעות</h2>
                <p className="text-gray-600 leading-relaxed">
                    האתר תואם לקוראי מסך פופולריים כמו NVDA, JAWS, VoiceOver ו-TalkBack.
                    עבור מקלדת וירטואלית או עכבר מסייע, האתר תומך בכל הפונקציות הבסיסיות.
                </p>
            </section>

            <div className="border-t pt-4 text-sm text-gray-500">
                <p>עדכון אחרון: ספטמבר 2025 | בהתאם לתקן הישראלי 5568</p>
            </div>
        </div>
    );

    // Render Modal
    const renderModal = () => {
        if (!activeModal) return null;

        let content;
        let title;

        switch (activeModal) {
            case 'terms':
                content = <TermsContent />;
                title = 'תנאי שימוש';
                break;
            case 'privacy':
                content = <PrivacyContent />;
                title = 'מדיניות פרטיות';
                break;
            case 'accessibility':
                content = <AccessibilityContent />;
                title = 'הצהרת נגישות';
                break;
            default:
                return null;
        }

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
                        <button
                            onClick={closeModal}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="סגור חלון"
                        >
                            <X className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Modal Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        {content}
                    </div>

                    {/* Modal Footer */}
                    <div className="border-t p-6 flex justify-end">
                        <button
                            onClick={closeModal}
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
            {/* Links that trigger modals */}
            <div className="legal-links">
                <button
                    onClick={() => openModal('terms')}
                    className="hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                    תנאי שימוש
                </button>
                <span className="mx-2">|</span>
                <button
                    onClick={() => openModal('privacy')}
                    className="hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                    מדיניות פרטיות
                </button>
                <span className="mx-2">|</span>
                <button
                    onClick={() => openModal('accessibility')}
                    className="hover:text-white underline transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                >
                    הצהרת נגישות
                </button>
            </div>

            {/* Modal */}
            {renderModal()}
        </>
    );
};

export default LegalModals;