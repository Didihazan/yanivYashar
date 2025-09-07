// src/utils/cloudinary.js

// קבלת שם הענן מהמשתנה
import React from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

/**
 * פונקציה ליצירת URL של תמונה
 */
export const getImageUrl = (publicId, width = null, height = null) => {
    let url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/`;

    if (width || height) {
        const w = width ? `w_${width}` : '';
        const h = height ? `h_${height}` : '';
        const transforms = [w, h].filter(Boolean).join(',');
        url += `${transforms}/`;
    }

    url += 'q_auto,f_auto/';
    return url + publicId;
};

/**
 * רכיב תמונה מ-Cloudinary
 */
export const CloudImage = ({ publicId, width, height, alt, className, ...props }) => {
    const imageUrl = getImageUrl(publicId, width, height);

    return React.createElement('img', {
        src: imageUrl,
        alt: alt,
        className: className,
        loading: 'lazy',
        ...props
    });
};

// הגדרות הסטוריז שלך - עם הPublic IDs האמיתיים!
export const storiesData = [
    {
        id: 'weddings',
        title: 'חתונות',
        thumbnail: 'צלם_1_199_g0uvak', // התמונה שראינו
        images: [
            {
                publicId: 'צלם_1_199_g0uvak',
                alt: 'צילום חתונה מקצועי',
                caption: 'רגעים מיוחדים שנשמרים לנצח'
            }
            // הוסף עוד תמונות כשתעלה אותן
        ]
    },
    {
        id: 'events',
        title: 'אירועים',
        thumbnail: 'צלם_1_199_g0uvak', // זמנית אותה תמונה
        images: [
            {
                publicId: 'צלם_1_199_g0uvak',
                alt: 'אירוע מיוחד',
                caption: 'כל אירוע הוא סיפור'
            }
        ]
    }
];

// פונקציה לבדיקה - מחזירה את הURL המלא
export const testImageUrl = () => {
    return getImageUrl('צלם_1_199_g0uvak', 300, 200);
};