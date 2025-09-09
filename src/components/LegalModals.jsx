import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const BUTTON_CLS =
    "hover:text-white underline transition-colors outline-none focus:ring-2 focus:ring-white rounded cursor-pointer";
const OVERLAY_CLS =
    "fixed inset-0 bg-black/50 backdrop-blur-[1px] z-[1000] flex items-center justify-center p-4";
const MODAL_CLS =
    "relative w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-8 text-right";
const CLOSE_BTN_CLS =
    "absolute -top-3 -left-3 bg-gray-800 text-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-gray-300";
const H1_CLS = "text-2xl md:text-3xl font-bold text-gray-900 mb-4";
const H2_CLS = "text-xl font-semibold text-gray-800 mb-3";
const P_CLS = "text-gray-700 leading-relaxed mb-3";
const LI_CLS = "text-gray-700 leading-relaxed list-inside list-disc mb-1";

function useFocusTrap(isOpen, ref) {
    useEffect(() => {
        if (!isOpen || !ref.current) return;
        const el = ref.current;
        const focusable = el.querySelectorAll(
            'a[href],button:not([disabled]),textarea,input,select,[tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        first && first.focus();

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                el.dispatchEvent(new CustomEvent("modal:close", { bubbles: true }));
            }
            if (e.key === "Tab") {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        el.addEventListener("keydown", handleKeyDown);
        return () => el.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, ref]);
}

const Section = ({ title, children, id }) => (
    <section aria-labelledby={id} className="mb-5">
        <h2 id={id} className={H2_CLS}>
            {title}
        </h2>
        <div>{children}</div>
    </section>
);

const LegalModals = () => {
    const [active, setActive] = useState(null); // 'privacy' | 'accessibility' | 'terms' | null
    const modalRef = useRef(null);

    // ESC + גלילת-רקע
    useEffect(() => {
        const onEsc = (e) => e.key === "Escape" && setActive(null);
        if (active) {
            document.addEventListener("keydown", onEsc);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => document.removeEventListener("keydown", onEsc);
    }, [active]);

    // Focus trap
    useFocusTrap(Boolean(active), modalRef);

    // Custom close from focus trap
    useEffect(() => {
        const handler = () => setActive(null);
        const el = modalRef.current;
        if (!el) return;
        el.addEventListener("modal:close", handler);
        return () => el.removeEventListener("modal:close", handler);
    }, [modalRef, active]);

    const close = () => setActive(null);

    const ModalFrame = ({ title, children }) => (
        <div className={OVERLAY_CLS} role="dialog" aria-modal="true" dir="rtl">
            <div ref={modalRef} className={MODAL_CLS}>
                <button
                    onClick={close}
                    aria-label="סגירת חלון"
                    className={CLOSE_BTN_CLS}
                >
                    <X size={18} />
                </button>
                <h1 className={H1_CLS}>{title}</h1>
                <div className="max-h-[70vh] overflow-y-auto pr-1">{children}</div>
                <div className="mt-6 flex justify-start gap-3">
                    <button onClick={close} className="btn btn-primary px-4 py-2 rounded bg-gray-900 text-white">
                        סגור
                    </button>
                </div>
            </div>
            <button
                className="absolute inset-0 -z-10"
                aria-label="סגירת החלון"
                onClick={close}
            />
        </div>
    );

    const PrivacyContent = () => (
        <ModalFrame title="הצהרת פרטיות">
            <p className={P_CLS}>
                אתר זה נועד להצגת תיק עבודות, תמונות, מידע על השירות וקישורים לרשתות חברתיות.
                האתר אינו מפעיל טפסי יצירת קשר ואינו מבצע איסוף יזום של מידע אישי מזוהה.
            </p>

            <Section title="איזה מידע איננו אוספים" id="no-collect">
                <ul className="list-disc pl-5">
                    <li className={LI_CLS}>אין רישום משתמשים, אין טפסים, ואין ניוזלטר.</li>
                    <li className={LI_CLS}>אין Google Analytics, Meta Pixel או כלי ניטור/שיווק דומים.</li>
                </ul>
            </Section>

            <Section title="מידע טכני ותכונות דפדפן" id="tech">
                <p className={P_CLS}>
                    לצורך שיפור נגישות וחוויה, האתר עשוי לשמור העדפות לא־מזוהות בדפדפן
                    (למשל: הגדלת גופן, ניגודיות גבוהה, גווני אפור, היפוך צבעים, מדריך קריאה, הפחתת אנימציות),
                    באמצעות מנגנון ה־localStorage המקומי של הדפדפן. מידע זה נשמר מקומית במכשירך בלבד ואינו
                    נשלח אלינו.
                </p>
                <p className={P_CLS}>
                    יצירת קשר דרך קישורי טלפון/WhatsApp/Instagram/Facebook מתבצעת ישירות בפלטפורמות אלה,
                    וכפופה למדיניות הפרטיות שלהן.
                </p>
            </Section>

            <Section title="פנייה בנושאי פרטיות" id="contact">
                <p className={P_CLS}>
                    לשאלות בנושא פרטיות ניתן ליצור קשר בטלפון <a className="underline" href="tel:050-7973104">050-7973104</a>
                    {" "}או ב־WhatsApp בכתובת{" "}
                    <a className="underline" href="https://wa.me/972507973104" target="_blank" rel="noreferrer">
                        wa.me/972507973104
                    </a>.
                </p>
            </Section>

            <Section title="שינויים בהצהרה" id="changes">
                <p className={P_CLS}>
                    נעדכן הצהרה זו מעת לעת. המשך שימוש באתר לאחר עדכון מהווה הסכמה לנוסח המעודכן.
                </p>
            </Section>
        </ModalFrame>
    );

    const AccessibilityContent = () => (
        <ModalFrame title="הצהרת נגישות">
            <p className={P_CLS}>
                אנו שואפים להנגיש את האתר לכלל המשתמשים, כולל אנשים עם מוגבלויות, בהתאם לעקרונות
                <span className="whitespace-nowrap"> WCAG 2.1 ברמת AA</span> במידת האפשר.
                באתר מיושמות התאמות נגישות, ואנו פועלים לשיפור מתמיד.
            </p>

            <Section title="התאמות נגישות שקיימות באתר" id="features">
                <ul className="list-disc pl-5">
                    <li className={LI_CLS}>וידג׳ט נגישות הכולל: הגדלת/הקטנת גופן, ניגודיות גבוהה, גווני אפור, היפוך צבעים, מדריך קריאה והפחתת אנימציות.</li>
                    <li className={LI_CLS}>תמונות נטענות עם מאפיין <code>alt</code> ותיאורים רלוונטיים בתיקי העבודות.</li>
                    <li className={LI_CLS}>תמיכה ב־RTL, מבנה כותרות סמנטי, ותיאורי ARIA סלקטיביים לרכיבים מרכזיים.</li>
                    <li className={LI_CLS}>כפתורי סגירה בחלונות וקיצורי מקלדת (למשל Escape) לסגירת מודלים.</li>
                    <li className={LI_CLS}>טעינה מדורגת של גלריות ותמונות ב־<code>loading="lazy"</code> לשיפור ביצועים.</li>
                </ul>
            </Section>

            <Section title="מגבלות ידועות ושיפור מתמשך" id="limits">
                <ul className="list-disc pl-5">
                    <li className={LI_CLS}>
                        רכיבי גלריה דינמיים עשויים לדרוש ניווט במקלדת בתשומת לב (Next/Prev/Escape). נשפר בהתאם למשוב.
                    </li>
                </ul>
                <p className={P_CLS}>
                    אם נתקלתם בקושי נגישות, נשמח לדעת כדי שנוכל לתקן. פנו אלינו ונעשה מאמץ סביר להסרת החסמים.
                </p>
            </Section>

            <Section title="ערוצי פנייה לנגישות" id="acc-contact">
                <p className={P_CLS}>
                    מוקד נגישות: טלפון{" "}
                    <a className="underline" href="tel:050-7973104">050-7973104</a>,{" "}
                    WhatsApp{" "}
                    <a className="underline" href="https://wa.me/972507973104" target="_blank" rel="noreferrer">
                        wa.me/972507973104
                    </a>.
                </p>
            </Section>

            <Section title="תאריך עדכון" id="date">
                <p className={P_CLS}>עודכן לאחרונה: ספטמבר 2025.</p>
            </Section>
        </ModalFrame>
    );

    const TermsContent = () => (
        <ModalFrame title="תנאי שימוש">
            <p className={P_CLS}>
                בגלישתך באתר זה, אתה מאשר וקובע כי קראת, הבנת והסכמת לתנאי שימוש אלה. אם אינך מסכים –
                אנא הימנע מגלישה באתר.
            </p>

            <Section title="שימוש מותר" id="use">
                <ul className="list-disc pl-5">
                    <li className={LI_CLS}>השימוש באתר הוא אישי ולא-מסחרי. אין להעתיק, לשכפל, לפרסם, להפיץ או לבצע יצירות נגזרות ללא הרשאה מראש ובכתב.</li>
                    <li className={LI_CLS}>חל איסור על שימוש אוטומטי (Scraping, Bots) ללא אישור.</li>
                </ul>
            </Section>

            <Section title="קניין רוחני" id="ip">
                <p className={P_CLS}>
                    כל הזכויות בתכני האתר, לרבות התמונות, הטקסטים, הלוגו והעיצוב – שמורות ליניב ישר ולבעלי הזכויות.
                    אין להשתמש בתכנים ללא רשות מפורשת מראש ובכתב.
                </p>
            </Section>

            <Section title="קישורים וצדדים שלישיים" id="links">
                <p className={P_CLS}>
                    באתר מופנים קישורים לפלטפורמות חיצוניות (לרבות WhatsApp, Instagram, Facebook).
                    אין לנו שליטה על אתרים אלה ואיננו אחראים למדיניותם או לתוכנם.
                </p>
            </Section>

            <Section title="הגבלת אחריות" id="liability">
                <p className={P_CLS}>
                    האתר וכל תכניו מסופקים &quot;כפי שהם&quot; (AS IS). ייתכנו טעויות, חוסרים או שינויים. לא נהיה אחראים לכל נזק עקיף/תוצאתי הנובע מהשימוש באתר.
                </p>
            </Section>

            <Section title="שינויים בתנאים" id="changes-terms">
                <p className={P_CLS}>
                    אנו רשאים לעדכן את תנאי השימוש מעת לעת. המשך גלישה מהווה הסכמה לנוסח המעודכן.
                </p>
            </Section>

            <Section title="דין ושיפוט" id="law">
                <p className={P_CLS}>
                    על תנאים אלה יחולו דיני מדינת ישראל, וסמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים בישראל.
                </p>
            </Section>
        </ModalFrame>
    );

    return (
        <>
            {/* טריגרים בפוטר */}
            <button onClick={() => setActive("privacy")} className={BUTTON_CLS}>
                הצהרת פרטיות
            </button>
            <span className="mx-2 text-gray-400">|</span>
            <button onClick={() => setActive("accessibility")} className={BUTTON_CLS}>
                הצהרת נגישות
            </button>
            <span className="mx-2 text-gray-400">|</span>
            <button onClick={() => setActive("terms")} className={BUTTON_CLS}>
                תנאי שימוש
            </button>

            {/* מודלים */}
            {active === "privacy" && <PrivacyContent />}
            {active === "accessibility" && <AccessibilityContent />}
            {active === "terms" && <TermsContent />}
        </>
    );
};

export default LegalModals;
