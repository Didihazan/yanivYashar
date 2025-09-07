import React from 'react';
import LegalModals from './LegalModals';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-8 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full p-0.5">
                                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="text-xl font-bold">יניב ישר</span>
                    </div>
                    <p className="text-gray-400 mb-6">צילום אירועים ברמה אחרת</p>

                    {/* Legal Links */}
                    <div className="border-t border-gray-700 pt-6">
                        {/* Legal Modals Component */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-4">
                            <LegalModals />
                        </div>

                        {/* Accessibility Coordinator - Legal Requirement */}
                        <p className="text-sm text-gray-400 mb-2">
                            רכז נגישות: יניב ישר |
                            <a href="mailto:accessibility@yaniv-photography.com" className="hover:text-white underline">
                                accessibility@yaniv-photography.com
                            </a>
                            | טל: 050-1234567
                        </p>

                        {/* Business Registration */}
                        <p className="text-xs text-gray-500 mb-2">
                            עוסק מורשה: 123456789 | רישוי עסק: תל אביב
                        </p>

                        <p className="text-xs text-gray-500 mt-4">
                            © 2025 יניב ישר - צילום אירועים. כל הזכויות שמורות.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;