export type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    annuallyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "standard",
        title: "רגיל",
        desc: "מושלם ליזמים עצמאיים וצוותים קטנים המעוניינים להפוך את יצירת התוכן והרשתות החברתיות לאוטומטיות עם כלי AI.",
        monthlyPrice: 29,
        annuallyPrice: 306,
        buttonText: "שדרג לחבילה רגילה",
        features: [
            "תוכן AI (1,000 מילים/חודש)",
            "3 ערוצי רשתות חברתיות",
            "תזמון פוסטים בסיסי",
            "לוח תוכן",
            "דאשבורד אנליטיקה בסיסי",
            "2 חברי צוות",
            "תמיכה באימייל"
        ],
        link: "#"
    },
    {
        id: "mastermind",
        title: "מאסטרמיינד",
        desc: "אידיאלי לעסקים צומחים וסוכנויות הזקוקים ליכולות AI מתקדמות ואוטומציה כדי להגדיל את השיווק שלהם.",
        monthlyPrice: 79,
        annuallyPrice: 834,
        badge: "הפופולרי ביותר",
        buttonText: "שדרג למאסטרמיינד",
        features: [
            "תוכן AI (10,000 מילים/חודש)",
            "כתיבת AI מתקדמת",
            "יצירת תוכן רב-שפתי",
            "אימון קול מותג מותאם אישית",
            "אוטומציית תהליכי עבודה מותאמת",
            "תמיכה עדיפה 24/7",
            "עד 10 חברי צוות"
        ],
        link: "#"
    },
    // {
    //     id: "enterprise",
    //     title: "Enterprise",
    //     desc: "Full-scale AI marketing solution for large organizations",
    //     monthlyPrice: 199,
    //     annuallyPrice: 2101,
    //     badge: "Custom AI Solutions",
    //     buttonText: "Contact Sales",
    //     features: [
    //         "Unlimited AI content",
    //         "Custom AI model training",
    //         "Advanced automation workflows",
    //         "Multi-brand management",
    //         "API access",
    //         "Unlimited team members",
    //         "24/7 priority support",
    //         "Dedicated success manager",
    //     ],
    //     link: "https://stripe.com/enterprise-plan-link"
    // }
];

export const PLANS_FAQ = [
    {
        id: 1,
        question: "איך עובדת יצירת התוכן בעזרת AI?",
        answer: "ה-AI שלנו יוצר תוכן שיווקי באיכות גבוהה בפורמטים שונים כולל פוסטים לרשתות חברתיות, קמפיינים באימייל ומאמרי בלוג, תוך שמירה על קול המותג שלך."
    },
    {
        id: 2,
        question: "האם אני יכול לנהל מותגים או לקוחות מרובים?",
        answer: "כן! חבילת Scale Pro תומכת בעד 5 מותגים, בעוד Enterprise מציעה יכולות ניהול מותגים ללא הגבלה."
    },
    {
        id: 3,
        question: "האם יש הנחה לחיוב שנתי?",
        answer: "כן, אתה יכול לחסוך 15% בבחירת חיוב שנתי במקום חיוב חודשי עבור כל אחת מהחבילות שלנו."
    },
    {
        id: 4,
        question: "האם אתם מציעים תמחור מיוחד לקבלנים?",
        answer: "כן, אנו מציעים תעריפים מיוחדים לקבלנים עצמאיים וחברות בניה קטנות. צור קשר עם צוות המכירות שלנו למידע נוסף."
    },
    {
        id: 5,
        question: "איך עובדת האינטגרציה של BIM?",
        answer: "חבילת Enterprise שלנו כוללת אינטגרציית BIM מלאה, המאפשרת לך לצפות ולנהל מודלים תלת-ממדיים, לתאם עם חברי צוות ולעקוב אחר שינויים בזמן אמת."
    },
    {
        id: 6,
        question: "איזה סוג תמיכה אתם מספקים?",
        answer: "אנו מציעים תמיכה באימייל לחבילות Starter, תמיכה עדיפה לחבילות Professional, ותמיכה ייעודית 24/7 עם מנהל חשבון אישי לחבילות Enterprise."
    },
    {
        id: 7,
        question: "האם אני יכול לשדרג או להוריד את החבילה שלי?",
        answer: "כן, אתה יכול לשנות את החבילה שלך בכל עת. אם אתה משדרג, תחויב באופן יחסי ליתרת תקופת החיוב שלך. הורדות נכנסות לתוקף במחזור החיוב הבא."
    },
    {
        id: 8,
        question: "האם יש גישה ממכשיר נייד?",
        answer: "כן, כל החבילות כוללות גישה לאפליקציה הנייד שלנו ל-iOS ו-Android, המאפשרת לך לנהל פרויקטים בדרכים."
    },
    {
        id: 9,
        question: "אילו אמצעי אבטחה יש לכם?",
        answer: "אנו מציעים אבטחה בתקן התעשייה לכל החבילות, עם תכונות נוספות כמו SSO, לוגי ביקורת ומדיניות אבטחה מותאמת אישית זמינים בחבילת Enterprise."
    }
];

export const PLANS_TABLE = [
    {
        id: 1,
        title: 'צמיחה מתחילים',
        priceMonthly: '$29',
        priceYearly: "$290",
        buttonText: 'התחל ניסיון חינם',
        usage: {
            members: '2 חברים',
            contentGeneration: '1,000 מילים/חודש',
            socialChannels: '3 ערוצים',
            brands: 'מותג אחד',
        },
        features: [
            'יצירת תוכן AI בסיסית',
            'תזמון רשתות חברתיות',
            'לוח תוכן',
            'אנליטיקה בסיסית',
            'תבניות שיווק באימייל',
            'אוטומציה בסיסית',
            'גישה לאפליקציה נייד',
            'תמיכת קהילה',
        ],
    },
    {
        id: 2,
        title: 'מקצועי מתקדם',
        priceMonthly: '$79',
        priceYearly: "$790",
        buttonText: 'הרחב עכשיו',
        usage: {
            members: '5 חברים',
            contentGeneration: '10,000 מילים/חודש',
            socialChannels: 'כל הפלטפורמות',
            brands: '5 מותגים',
        },
        features: [
            'יצירת תוכן AI מתקדמת',
            'אימון AI מותאם אישית',
            'אוטומציה מתקדמת',
            'מעקב אחר קמפיינים',
            'אנליטיקת ביצועים',
            'בדיקות A/B',
            'תמיכה עדיפה',
            'גישת API',
            'דיווח מתקדם',
        ],
    },
    {
        id: 3,
        title: 'ארגוני AI',
        priceMonthly: '$199',
        priceYearly: "$1990",
        buttonText: 'צור קשר עם מכירות',
        usage: {
            members: 'ללא הגבלה',
            contentGeneration: 'ללא הגבלה',
            socialChannels: 'ללא הגבלה',
            brands: 'ללא הגבלה',
        },
        features: [
            'פתרונות AI מותאמים אישית',
            'אוטומציה ארגונית',
            'ניהול רב-מותגי',
            'אבטחה מתקדמת',
            'אינטגרציות מותאמות אישית',
            'תמיכה ייעודית',
            'אימון מותאם אישית',
            'אנליטיקה ארגונית',
            'תהליכי עבודה מותאמים',
        ],
    },
];
