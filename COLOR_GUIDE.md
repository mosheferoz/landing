# מדריך שינוי צבעי המותג 🎨

## איך לשנות את הצבע העיקרי באתר?

כל הצבעים באתר מנוהלים ממקום מרוכז אחד. כדי לשנות את הצבע העיקרי של כל האתר, צריך לעדכן **שני קבצים בלבד**:

---

## 1️⃣ עדכון קובץ הקונסטנטים

📁 **מיקום:** `/src/constants/colors.ts`

```typescript
export const BRAND_COLORS = {
  primary: {
    light: '#f9a8d4',    // 👈 שנה כאן לצבע בהיר
    DEFAULT: '#ec4899',  // 👈 שנה כאן לצבע עיקרי
    dark: '#db2777',     // 👈 שנה כאן לצבע כהה
    darker: '#be185d',
  },
  
  hex: {
    light: '#f9a8d4',    // 👈 שנה כאן גם
    main: '#ec4899',     // 👈 שנה כאן גם
    dark: '#db2777',     // 👈 שנה כאן גם
  },
  
  rgb: {
    main: 'rgb(236, 72, 153)',        // 👈 שנה כאן גם בפורמט RGB
    rgba: 'rgba(236, 72, 153, 0.1)',  // 👈 שנה כאן גם עם שקיפות
  }
}
```

---

## 2️⃣ עדכון Tailwind Config

📁 **מיקום:** `/tailwind.config.ts`

```typescript
colors: {
  brand: {
    300: '#f9a8d4',  // 👈 שנה כאן
    400: '#f472b6',  // 👈 שנה כאן
    500: '#ec4899',  // 👈 שנה כאן (הצבע העיקרי)
    600: '#db2777',  // 👈 שנה כאן
    700: '#be185d',  // 👈 שנה כאן
  },
  // ...
}
```

---

## 3️⃣ עדכון משתני CSS (אופציונלי)

📁 **מיקום:** `/src/styles/globals.css`

```css
:root {
  /* Brand Colors - שנה כאן לשנות את הצבעים בכל האתר */
  --brand-light: #f9a8d4;     /* 👈 שנה כאן */
  --brand-main: #ec4899;      /* 👈 שנה כאן */
  --brand-dark: #db2777;      /* 👈 שנה כאן */
  --brand-glow-light: rgba(249, 168, 212, 0.5);
  --brand-glow-main: rgba(236, 72, 153, 0.3);
}
```

---

## 📖 דוגמאות שימוש

### שימוש ב-Tailwind Classes:
```tsx
<div className="bg-brand-500 hover:bg-brand-600 text-white">
  כפתור
</div>
```

### שימוש בקונסטנטים:
```tsx
import { BRAND_COLORS } from '@/constants/colors'

<MagicCard
  gradientFrom={BRAND_COLORS.hex.light}
  gradientTo={BRAND_COLORS.hex.main}
/>
```

### שימוש במשתני CSS:
```css
.my-element {
  background: var(--brand-main);
  color: white;
}
```

---

## 🎨 המלצות לבחירת צבעים

1. **אחידות:** השתמש באותה משפחת צבעים (הוא, רוויה דומה)
2. **ניגודיות:** וודא שיש ניגודיות טובה עם טקסט לבן/שחור
3. **גוונים:** צור 5 גוונים (300-700) עם הבדלים הדרגתיים
4. **בדיקה:** בדוק גם במצב light וגם במצב dark

### כלים מומלצים:
- [Coolors.co](https://coolors.co/) - לבחירת פלטת צבעים
- [Tailwind Color Generator](https://uicolors.app/create) - ליצירת גוונים
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - לבדיקת נגישות

---

## ✅ אחרי שינוי הצבעים

1. שמור את כל הקבצים
2. הפעל מחדש את שרת הפיתוח:
   ```bash
   npm run dev
   ```
3. בדוק את האתר ב-dark mode וב-light mode
4. וודא שכל הצבעים השתנו כמצופה

---

## 🔍 איפה משתמשים בצבעים?

הצבעים שהגדרנו משמשים ב:
- ✅ כפתורים וקישורים
- ✅ גרדיאנטים ברקעים
- ✅ אפקטי hover ו-focus
- ✅ אייקונים ובאדג'ים
- ✅ בורדרים והדגשות
- ✅ אפקטי טשטוש (blur) וזוהר (glow)

---

**זהו! כל שינוי בשני הקבצים הראשונים ישתקף באופן אוטומטי בכל האתר 🎉**

