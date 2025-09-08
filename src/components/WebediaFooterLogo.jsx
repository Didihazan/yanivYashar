import React from 'react';
import { Link } from 'react-router-dom';

const WebediaFooterLogo = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-4">
            <p className="text-slate-400 text-sm mb-2 max-w-[160px]">
                אתר זה נבנה על ידי
            </p>

            <Link to="https://webedia.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                  aria-label="Webedia - פיתוח אתרים מקצועי"
            >
                <div className="flex items-center bg-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
                    <span className="text-white text-xl font-bold">ebedia</span>
                    <span className="text-amber-400 text-xl font-bold" style={{ marginRight: '-1px' }}>W</span>
                </div>
            </Link>
        </div>
    );
};

export default WebediaFooterLogo;