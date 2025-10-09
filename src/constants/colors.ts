/**
 * Brand Colors Configuration
 * שנה את הצבעים כאן והם ישתנו בכל האתר
 */

export const BRAND_COLORS = {
  // הצבע העיקרי של המותג - שנה כאן לשנות את כל האתר!
  primary: {
    light: '#93c5fd',    // blue-300
    DEFAULT: '#3b82f6',  // blue-500
    dark: '#2563eb',     // blue-600
    darker: '#1d4ed8',   // blue-700
  },
  
  // גרדיאנטים
  gradients: {
    main: 'from-blue-400 to-blue-600',
    light: 'from-blue-300 to-blue-500',
    card: 'from-blue-500 to-blue-600',
  },
  
  // צבעים ב-HEX למקומות שצריכים (כמו MagicCard)
  hex: {
    light: '#93c5fd',
    main: '#3b82f6',
    dark: '#2563eb',
  },
  
  // צבעים ב-RGB
  rgb: {
    main: 'rgb(59, 130, 246)',
    rgba: 'rgba(59, 130, 246, 0.1)',
  }
} as const;

// ייצוא מהיר של הצבע העיקרי
export const PRIMARY_COLOR = BRAND_COLORS.primary.DEFAULT;
export const PRIMARY_COLOR_LIGHT = BRAND_COLORS.primary.light;
export const PRIMARY_COLOR_DARK = BRAND_COLORS.primary.dark;

/**
 * דוגמאות לשימוש:
 * 
 * 1. ב-TSX/JSX:
 *    import { BRAND_COLORS } from '@/constants/colors'
 *    <MagicCard gradientFrom={BRAND_COLORS.hex.light} gradientTo={BRAND_COLORS.hex.main} />
 * 
 * 2. ב-Tailwind classes:
 *    השתמש ב-brand-500, brand-600 וכו' במקום pink-500
 *    <div className="bg-brand-500 text-white" />
 * 
 * 3. Inline styles:
 *    <div style={{ background: BRAND_COLORS.rgb.main }} />
 */

