import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `Vetra - אוטומציית שיווק AI ושיתוף פעולה צוותי`,
    description = `Vetra היא פלטפורמה חכמה לניהול שיווק שמשנה את הדרך שבה צוותים עובדים יחד. נצל AI כדי להפוך תהליכי עבודה לאוטומטיים, לשפר שיתוף פעולה ולהגביר פרודוקטיביות. חווה ניהול שיווק חכם יותר היום.`,
    icons = [
        {
            rel: "icon",
            url: "/icons/icon-dark.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/icons/icon.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    noIndex = false,
    keywords = [
        "אוטומציית שיווק AI",
        "שיווק ברשתות חברתיות",
        "יצירת תוכן",
        "אנליטיקת שיווק",
        "ניהול קמפיינים",
        "שיווק רב-שפתי",
        "כתיבת AI",
        "תהליכי עבודה שיווקיים",
        "מעקב ביצועים",
        "כלי שיווק דיגיטלי"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://vertra-ai.vercel.app");

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
    };
};