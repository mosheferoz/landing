"use client";

import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import { Button } from "@/components/ui/button";
import { MailIcon, MessageSquareIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Icons from "@/components/global/icons";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        toast.success("ההודעה נשלחה בהצלחה! נחזור אליך בקרוב.");
        setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            message: "",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Wrapper className="py-20">
            <div className="relative flex flex-col items-center justify-center w-full">
                {/* Background Animation */}
                <div className="absolute flex lg:hidden size-40 rounded-full bg-pink-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>
                <div className="absolute top-40 left-1/2 -z-10 bg-gradient-to-r from-pink-500 to-pink-600 w-1/2 lg:w-2/3 -translate-x-1/2 h-1/4 blur-[4rem] lg:blur-[8rem] opacity-50"></div>
                <div className="hidden lg:block absolute top-20 left-1/2 -z-20 bg-pink-600 w-1/4 -translate-x-1/2 h-1/4 blur-[10rem] opacity-30"></div>
                
                <div className="flex flex-col items-center justify-center gap-y-8 relative w-full">
                    <Container className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 flex-col items-center justify-center w-full h-[600px] -z-10 pointer-events-none">
                        <OrbitingCircles speed={0.5} radius={300}>
                            <Icons.circle1 className="size-4 text-foreground/70" />
                            <Icons.circle2 className="size-1 text-foreground/80" />
                        </OrbitingCircles>
                        <OrbitingCircles speed={0.25} radius={400}>
                            <Icons.circle2 className="size-1 text-foreground/50" />
                            <Icons.circle1 className="size-4 text-foreground/60" />
                            <Icons.circle2 className="size-1 text-foreground/90" />
                        </OrbitingCircles>
                        <OrbitingCircles speed={0.1} radius={500}>
                            <Icons.circle2 className="size-1 text-foreground/50" />
                            <Icons.circle2 className="size-1 text-foreground/90" />
                            <Icons.circle1 className="size-4 text-foreground/60" />
                            <Icons.circle2 className="size-1 text-foreground/90" />
                        </OrbitingCircles>
                    </Container>

                    {/* Hero Section */}
                    <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto pt-20">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium !leading-tight">
                        בוא <span className="font-subheading italic">נדבר</span>
                    </h1>
                    <p className="text-base md:text-lg text-center text-muted-foreground mt-6 max-w-2xl">
                        יש לך שאלות? רעיונות? או סתם רוצה לשוחח? אנחנו כאן בשבילך. צור קשר והצוות שלנו יחזור אליך בהקדם.
                    </p>
                </div>
            </Container>

            {/* Contact Info Cards */}
            <Container delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <MailIcon className="w-7 h-7 text-pink-500" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">אימייל</h3>
                        <p className="text-sm text-muted-foreground mb-2">שלח לנו מייל</p>
                        <a href="mailto:hello@lift14.com" className="text-pink-500 hover:underline text-sm">
                            hello@lift14.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <PhoneIcon className="w-7 h-7 text-pink-500" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">טלפון</h3>
                        <p className="text-sm text-muted-foreground mb-2">התקשר אלינו</p>
                        <a href="tel:+972501234567" className="text-pink-500 hover:underline text-sm">
                            050-123-4567
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <MessageSquareIcon className="w-7 h-7 text-pink-500" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">צ'אט חי</h3>
                        <p className="text-sm text-muted-foreground mb-2">זמינים 24/7</p>
                        <button className="text-pink-500 hover:underline text-sm">
                            התחל שיחה
                        </button>
                    </div>
                </div>
            </Container>

            {/* Main Contact Form */}
            <Container delay={0.3}>
                <div className="max-w-4xl mx-auto mt-20">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div className="order-2 lg:order-1">
                            <div className="rounded-3xl border border-border/50 bg-card/30 p-8">
                                <h2 className="text-2xl md:text-3xl font-heading font-medium mb-6 text-right">
                                    שלח לנו הודעה
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-right">
                                            שם מלא *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-pink-500/50 focus:outline-none transition-colors text-right"
                                            placeholder="הכנס את שמך המלא"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-right">
                                            אימייל *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-pink-500/50 focus:outline-none transition-colors text-right"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium mb-2 text-right">
                                                חברה
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-pink-500/50 focus:outline-none transition-colors text-right"
                                                placeholder="שם החברה"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-right">
                                                טלפון
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-pink-500/50 focus:outline-none transition-colors text-right"
                                                placeholder="050-123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-right">
                                            הודעה *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-pink-500/50 focus:outline-none transition-colors resize-none text-right"
                                            placeholder="ספר לנו על הפרויקט שלך או שאל אותנו כל שאלה..."
                                        />
                                    </div>

                                    <Button type="submit" size="lg" variant="blue" className="w-full">
                                        <SendIcon className="w-4 h-4 ml-2" />
                                        שלח הודעה
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="order-1 lg:order-2 flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-heading font-medium mb-6 text-right">
                                למה <span className="font-subheading italic">ליצור קשר</span>?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4 flex-row-reverse text-right">
                                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">💡</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-1">ייעוץ אישי</h3>
                                        <p className="text-sm text-muted-foreground">
                                            קבל ייעוץ מותאם אישית לצרכי השיווק הספציפיים שלך
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 flex-row-reverse text-right">
                                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">🎯</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-1">הדגמה חיה</h3>
                                        <p className="text-sm text-muted-foreground">
                                            קבע פגישה להדגמה אישית של הפלטפורמה שלנו
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 flex-row-reverse text-right">
                                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">🤝</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-1">שותפויות</h3>
                                        <p className="text-sm text-muted-foreground">
                                            מעוניין לשתף פעולה? נשמח לשמוע על הרעיונות שלך
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 flex-row-reverse text-right">
                                    <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                                        <span className="text-lg">🌟</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-1">תמיכה טכנית</h3>
                                        <p className="text-sm text-muted-foreground">
                                            זקוק לעזרה? הצוות שלנו כאן כדי לסייע לך
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20">
                                <h3 className="text-lg font-medium mb-2 text-right">משרדינו</h3>
                                <div className="flex items-start gap-3 text-sm text-muted-foreground flex-row-reverse text-right">
                                    <MapPinIcon className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                    <p>
                                        רחוב רוטשילד 22<br />
                                        תל אביב-יפו, 6688218<br />
                                        ישראל
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* FAQ Quick Links */}
            <Container delay={0.4}>
                <div className="max-w-4xl mx-auto mt-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-heading font-medium mb-3">
                            שאלות <span className="font-subheading italic">נפוצות</span>
                        </h2>
                        <p className="text-muted-foreground">
                            אולי התשובה שאתה מחפש כבר כאן
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="/pricing#faq" className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-pink-500/50 transition-all text-right group">
                            <h3 className="text-lg font-medium mb-2 group-hover:text-pink-500 transition-colors">איך עובדת יצירת התוכן בעזרת AI?</h3>
                            <p className="text-sm text-muted-foreground">למד על התהליך של יצירת תוכן מותאם אישית</p>
                        </a>
                        <a href="/pricing#faq" className="p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-pink-500/50 transition-all text-right group">
                            <h3 className="text-lg font-medium mb-2 group-hover:text-pink-500 transition-colors">איזה סוג תמיכה אתם מספקים?</h3>
                            <p className="text-sm text-muted-foreground">גלה את אפשרויות התמיכה השונות שלנו</p>
                        </a>
                    </div>
                </div>
            </Container>
                </div>
            </div>
        </Wrapper>
    );
};

export default ContactPage;

