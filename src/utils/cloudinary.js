import React from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

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

// רכיב תמונה רגיל
export const CloudinaryImage = ({ publicId, width, height, alt, className, size, ...props }) => {
    // הגדרות גדלים קבועים
    const sizes = {
        storyMobile: { width: 64, height: 64 },
        storyThumb: { width: 96, height: 96 },
        storyFull: { width: 800, height: 600 }
    };

    const dimensions = size ? sizes[size] : { width, height };
    const imageUrl = getImageUrl(publicId, dimensions.width, dimensions.height);

    return React.createElement('img', {
        src: imageUrl,
        alt: alt,
        className: className,
        loading: 'lazy',
        ...props
    });
};

// רכיב תמונה רספונסיבי
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

// הנתונים של הסטוריז עם כל 20 התמונות שלך
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

export const testImageUrl = () => {
    return getImageUrl('צלם_1_199_g0uvak', 300, 200);
};