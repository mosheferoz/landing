import Wrapper from "@/components/global/wrapper";
import Features from "@/components/marketing/features";
import Container from "@/components/global/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SparklesIcon, ZapIcon, TrendingUpIcon, ShieldIcon } from "lucide-react";
import Integration from "@/components/marketing/integration";
import Analysis from "@/components/marketing/analysis";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Icons from "@/components/global/icons";

const FeaturesPage = () => {
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 mb-6">
                        <SparklesIcon className="w-4 h-4 text-pink-500" />
                        <span className="text-sm text-pink-500 font-medium">פלטפורמה מופעלת בינה מלאכותית</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium !leading-tight">
                        כל מה שאתה צריך כדי להצליח ב<span className="font-subheading italic">שיווק דיגיטלי</span>
                    </h1>
                    <p className="text-base md:text-lg text-center text-muted-foreground mt-6 max-w-2xl">
                        כלים מתקדמים, אוטומציה חכמה ותובנות מונעות נתונים - הכל במקום אחד. הפוך את השיווק שלך לחכם יותר, מהיר יותר וטוב יותר.
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Link href="#" className="flex items-center gap-2 group">
                            <Button size="lg" variant="blue">
                                התחל ניסיון חינם
                                <ArrowRightIcon className="size-4 group-hover:-translate-x-1 transition-all duration-300 rotate-180" />
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button size="lg" variant="outline">
                                צפה בתמחור
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>

            {/* Main Features */}
            <div className="mt-20">
                <Features />
            </div>

            {/* Integration Section */}
            <div className="mt-20">
                <Integration />
            </div>

            {/* Analysis Section */}
            <div className="mt-20">
                <Analysis />
            </div>

            {/* Benefits Grid */}
            <Container delay={0.3}>
                <div className="max-w-6xl mx-auto mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                            למה <span className="font-subheading italic">Lift14</span>?
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground mt-4">
                            הפתרון המקיף לכל צרכי השיווק הדיגיטלי שלך
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex flex-col p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all hover:border-pink-500/50 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <SparklesIcon className="w-6 h-6 text-pink-500" />
                            </div>
                            <h3 className="text-lg font-medium mb-2">AI מתקדם</h3>
                            <p className="text-sm text-muted-foreground">
                                טכנולוגיית AI מתקדמת שלומדת ומשתפרת עם הזמן
                            </p>
                        </div>

                        <div className="flex flex-col p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all hover:border-pink-500/50 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <ZapIcon className="w-6 h-6 text-pink-500" />
                            </div>
                            <h3 className="text-lg font-medium mb-2">אוטומציה מלאה</h3>
                            <p className="text-sm text-muted-foreground">
                                חסוך שעות עבודה עם אוטומציה חכמה לכל תהליכי השיווק
                            </p>
                        </div>

                        <div className="flex flex-col p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all hover:border-pink-500/50 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <TrendingUpIcon className="w-6 h-6 text-pink-500" />
                            </div>
                            <h3 className="text-lg font-medium mb-2">תוצאות מוכחות</h3>
                            <p className="text-sm text-muted-foreground">
                                הגדל את ה-ROI שלך עד 300% עם תובנות מונעות נתונים
                            </p>
                        </div>

                        <div className="flex flex-col p-6 rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all hover:border-pink-500/50 group">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <ShieldIcon className="w-6 h-6 text-pink-500" />
                            </div>
                            <h3 className="text-lg font-medium mb-2">אבטחה מלאה</h3>
                            <p className="text-sm text-muted-foreground">
                                הנתונים שלך מוגנים בהצפנה ברמה צבאית
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            {/* CTA Section */}
            <Container delay={0.5}>
                <div className="relative max-w-5xl mx-auto mt-32">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-3xl blur-3xl -z-10"></div>
                    <div className="relative border border-pink-500/30 rounded-3xl p-8 md:p-12 lg:p-16 bg-card/30 backdrop-blur-sm text-center">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium mb-6">
                            מוכן לשדרג את <span className="font-subheading italic">השיווק</span> שלך?
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
                            הצטרף לאלפי עסקים שכבר משתמשים ב-Lift14 כדי להגדיל את המכירות והנוכחות הדיגיטלית שלהם.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="#" className="flex items-center gap-2 group">
                                <Button size="lg" variant="blue">
                                    התחל ניסיון חינם
                                    <ArrowRightIcon className="size-4 group-hover:-translate-x-1 transition-all duration-300 rotate-180" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="white">
                                    דבר עם מומחה
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
                </div>
            </div>
        </Wrapper>
    );
};

export default FeaturesPage;

