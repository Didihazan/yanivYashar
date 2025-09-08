import React, { useState } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 border-t-4 border-orange-500">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    האתר משתמש בעוגיות לשיפור החוויה ולניתוח תנועה.
                    <button
                        onClick={() => {
                            setIsVisible(false);
                            const privacyButton = document.querySelector('[data-modal="privacy"]');
                            if (privacyButton) privacyButton.click();
                        }}
                        className="underline mr-1 hover:text-orange-300 cursor-pointer"
                    >
                        קרא עוד במדיניות הפרטיות
                    </button>
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-sm font-medium transition-colors cursor-pointer"
                    >
                        אני מסכים
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="border border-gray-400 hover:border-white px-4 py-2 rounded text-sm transition-colors cursor-pointer"
                    >
                        דחה
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;