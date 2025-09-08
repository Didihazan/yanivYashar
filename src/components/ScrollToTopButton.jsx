import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollToTopButton.css'; // ניצור את קובץ ה-CSS הזה בשלב הבא

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // פונקציה לבדיקת מיקום הגלילה
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // הכפתור יופיע אחרי גלילה של 300px
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // פונקציה לגלילה חלקה למעלה
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // האנימציה החלקה
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // ניקוי המאזין כשהקומפוננטה יורדת מהמסך
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button onClick={scrollToTop} className="scroll-btn" aria-label="חזור לראש העמוד">
                    <ArrowUp size={24} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;