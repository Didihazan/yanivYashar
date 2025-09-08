// צבעים מהלוגו החדש
export const COLORS = {
    // צבעים עיקריים מהלוגו
    primary: '#3B82F6', // כחול עיקרי
    secondary: '#F59E0B', // כתום/זהב
    accent: '#8B5CF6', // סגול

    // גרדיאנטים מהלוגו
    gradients: {
        main: 'from-blue-500 via-purple-500 to-orange-500',
        camera: 'from-blue-500 to-orange-500',
        story: 'from-blue-400 via-purple-500 to-orange-500'
    },

    // צבעי עזר
    gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827'
    },

    // צבעי מצב
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6'
};

// פרטי יצירת קשר
export const CONTACT_INFO = {
    phone: ' 050-7973104',
    email: 'yaniv@example.com',
    whatsapp: '972507973104',
    social: {
        instagram: 'https://instagram.com/yaniv_photography',
        facebook: 'https://facebook.com/yaniv.photography'
    }
};

// טקסטים קבועים
export const TEXTS = {
    hero: {
        title: 'צילום אירועים ברמה אחרת',
        cta: 'צור איתי קשר'
    },
    navigation: {
        home: 'בית',
        testimonials: 'המלצות',
        about: 'אודות',
        gallery: 'גלריה',
        contact: 'צור קשר'
    },
    stories: {
        categories: [
            { id: 'weddings', title: 'חתונות' },
            { id: 'bar-mitzvah', title: 'בר מצווה' },
            { id: 'bat-mitzvah', title: 'בת מצווה' },
            { id: 'events', title: 'אירועים' }
        ]
    }
};