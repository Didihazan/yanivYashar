import React from "react";

// חשוב לוודא שהגדרת את המשתנה הזה בקובץ .env.local
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

/**
 * פונקציה ליצירת כתובת URL לתמונה מ-Cloudinary עם טרנספורמציות.
 * @param {string} publicId - מזהה התמונה ב-Cloudinary.
 * @param {number|null} width - רוחב התמונה הרצוי.
 * @param {number|null} height - גובה התמונה הרצוי.
 * @returns {string} - כתובת ה-URL המלאה של התמונה.
 */
export const getImageUrl = (publicId, width = null, height = null) => {
    let url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/`;

    if (width || height) {
        const w = width ? `w_${width}` : '';
        const h = height ? `h_${height}` : '';
        // הוספנו c_fill,g_auto לחיתוך חכם של התמונה ושמירה על פרופורציות
        const transforms = ['c_fill', 'g_auto', w, h].filter(Boolean).join(',');
        url += `${transforms}/`;
    }

    // אופטימיזציות איכות ואוטומטיות
    url += 'q_auto,f_auto/';
    return url + publicId;
};

/**
 * רכיב תמונה משודרג וחסין לשגיאות.
 * יודע לקבל מידות ב-3 דרכים:
 * 1. size="storyMobile" (שם של הגדרה קבועה)
 * 2. size={{ width: 300, height: 300 }} (אובייקט עם מידות)
 * 3. width={300} height={300} (props נפרדים)
 */
export const CloudinaryImage = ({ publicId, width, height, alt, className, size, ...props }) => {
    // הגדרות גדלים קבועים מראש
    const predefinedSizes = {
        storyMobile: { width: 64, height: 64 },
        storyThumb: { width: 96, height: 96 },
        storyFull: { width: 800, height: 600 }
    };

    let dimensions = { width, height }; // ברירת מחדל

    if (typeof size === 'string' && predefinedSizes[size]) {
        // מקרה 1: size="storyMobile"
        dimensions = predefinedSizes[size];
    } else if (typeof size === 'object' && size !== null && size.width && size.height) {
        // מקרה 2: size={{ width: 300, height: 300 }}
        dimensions = size;
    }
    // מקרה 3 (width ו-height נפרדים) מכוסה כבר בברירת המחדל

    const imageUrl = getImageUrl(publicId, dimensions.width, dimensions.height);

    return React.createElement('img', {
        src: imageUrl,
        alt: alt,
        className: className,
        loading: 'lazy', // טעינה עצלה לשיפור ביצועים
        ...props
    });
};

// רכיב תמונה רספונסיבי נשאר כפי שהיה
export const ResponsiveCloudinaryImage = ({ publicId, alt, className, ...props }) => {
    const imageUrl = getImageUrl(publicId);

    return React.createElement('img', {
        src: imageUrl,
        alt: alt,
        className: className,
        loading: 'lazy',
        ...props
    });
};


// הנתונים של הסטוריז עם כל 20 התמונות שלך (נשאר ללא שינוי)
export const cloudinaryStories = [
    // ------------------ חתונות ------------------
    {
        id: "weddings",
        title: "חתונות",
        thumbnail: "DSC_3866_urgd6m",
        images: [
            { publicId: "DSC_3866_urgd6m", alt: "תמונת חתונה", caption: "רגעים מיוחדים" },
            { publicId: "DSC_1537_xpkxwo", alt: "תמונת חתונה", caption: "רגעים מיוחדים" },
            { publicId: "DSC_1573_e4tzog", alt: "תמונת חתונה", caption: "רגעים מיוחדים" },
            { publicId: "DSC_1749_miygwo", alt: "תמונת חתונה", caption: "רגעים מיוחדים" },
            { publicId: "צלם_1_52_mhawl9",  alt: "תמונת חתונה", caption: "רגעים מיוחדים" },
        ],
    },

    // ------------------ בר מצווה ------------------
    {
        id: "bar-mitzvah",
        title: "בר מצווה",
        thumbnail: "DSC_4420_id3np7",
        images: [
            { publicId: "DSC_4420_id3np7", alt: "תמונת בר מצווה", caption: "רגעים שמחים" },
            { publicId: "DSC_6389_lvkbcf", alt: "תמונת בר מצווה", caption: "רגעים שמחים" },
            { publicId: "DSC_6748_bpe6wn", alt: "תמונת בר מצווה", caption: "רגעים שמחים" },
            { publicId: "DSC_8466_qswjjm", alt: "תמונת בר מצווה", caption: "רגעים שמחים" },
            { publicId: "DSC_8480_lcilrb", alt: "תמונת בר מצווה", caption: "רגעים שמחים" },
        ],
    },

    // ------------------ בת מצווה ------------------
    {
        id: "bat-mitzvah",
        title: "בת מצווה",
        thumbnail: "DSC_8525_rvlafa",
        images: [
            { publicId: "DSC_8525_rvlafa", alt: "תמונת בת מצווה", caption: "רגעים מרגשים" },
            { publicId: "DSC_8655_lhbwvp", alt: "תמונת בת מצווה", caption: "רגעים מרגשים" },
            { publicId: "DSC_8718_uvvwit", alt: "תמונת בת מצווה", caption: "רגעים מרגשים" },
            { publicId: "DSC_9654_j1ntwn", alt: "תמונת בת מצווה", caption: "רגעים מרגשים" },
            { publicId: "DSC_9686_tzgm2w", alt: "תמונת בת מצווה", caption: "רגעים מרגשים" },
        ],
    },

    // ------------------ אירועים ------------------
    {
        id: "events",
        title: "אירועים",
        thumbnail: "DSC_9693_nj30cp",
        images: [
            { publicId: "DSC_9693_nj30cp",   alt: "תמונת אירוע", caption: "רגעים מחברים" },
            { publicId: "DSC_1533_wghbkf",   alt: "תמונת אירוע", caption: "רגעים מחברים" },
            { publicId: "צלם_1_199_g0uvak",  alt: "תמונת אירוע", caption: "רגעים מחברים" },
            { publicId: "צלם_1_1291_bfa4pz", alt: "תמונת אירוע", caption: "רגעים מחברים" },
            { publicId: "צלמת_2_316_gdz0ck", alt: "תמונת אירוע", caption: "רגעים מחברים" },
        ],
    },
];

// פונקציית בדיקה נשארה כפי שהייתה
export const testImageUrl = () => {
    return getImageUrl('צלם_1_199_g0uvak', 300, 200);
};