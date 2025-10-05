import Wrapper from "@/components/global/wrapper";
import Pricing from "@/components/marketing/pricing";
import Container from "@/components/global/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { PLANS_FAQ } from "@/constants/plans";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Icons from "@/components/global/icons";

const PricingPage = () => {
    return (
        <Wrapper className="py-20">
            <div className="relative flex flex-col items-center justify-center w-full">
                {/* Background Animation */}
                <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>
                <div className="absolute top-40 left-1/2 -z-10 bg-gradient-to-r from-sky-500 to-blue-600 w-1/2 lg:w-2/3 -translate-x-1/2 h-1/4 blur-[4rem] lg:blur-[8rem] opacity-50"></div>
                <div className="hidden lg:block absolute top-20 left-1/2 -z-20 bg-blue-600 w-1/4 -translate-x-1/2 h-1/4 blur-[10rem] opacity-30"></div>
                
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
                        תמחור <span className="font-subheading italic">שקוף</span> ופשוט
                    </h1>
                    <p className="text-base md:text-lg text-center text-muted-foreground mt-6 max-w-2xl">
                        בחר את החבילה המושלמת עבורך. התחל בחינם, שדרג כשתהיה מוכן. ללא חוזים ארוכי טווח, ביטול בכל עת.
                    </p>
                </div>
            </Container>

            {/* Pricing Cards */}
            <Pricing />

            {/* FAQ Section */}
            <Container delay={0.4}>
                <div className="max-w-3xl mx-auto mt-32">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                            שאלות <span className="font-subheading italic">נפוצות</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground mt-4">
                            כל מה שאתה צריך לדעת על התמחור והתכונות שלנו
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {PLANS_FAQ.map((faq) => (
                            <AccordionItem 
                                key={faq.id} 
                                value={`item-${faq.id}`}
                                className="border border-border/50 rounded-xl px-6 bg-card/30 hover:bg-card/50 transition-colors"
                            >
                                <AccordionTrigger className="text-right hover:no-underline">
                                    <span className="text-base md:text-lg font-medium">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-right text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>

            {/* CTA Section */}
            <Container delay={0.5}>
                <div className="relative max-w-5xl mx-auto mt-32">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl -z-10"></div>
                    <div className="relative border border-border/50 rounded-3xl p-8 md:p-12 bg-card/30 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-right flex-1">
                                <h3 className="text-2xl md:text-3xl font-heading font-medium mb-4">
                                    מוכן להתחיל?
                                </h3>
                                <p className="text-muted-foreground text-base md:text-lg">
                                    התחל את הניסיון החינמי שלך היום. לא נדרש כרטיס אשראי.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#">
                                    <Button size="lg" variant="blue">
                                        התחל ניסיון חינם
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button size="lg" variant="outline">
                                        צור קשר עם מכירות
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Trust Badges */}
            <Container delay={0.6}>
                <div className="max-w-4xl mx-auto mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/30 bg-card/20">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                                <CheckIcon className="w-6 h-6 text-blue-500" />
                            </div>
                            <h4 className="text-lg font-medium mb-2">ביטול בכל עת</h4>
                            <p className="text-sm text-muted-foreground">
                                ללא התחייבות. בטל את המינוי שלך בכל זמן.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/30 bg-card/20">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                                <CheckIcon className="w-6 h-6 text-blue-500" />
                            </div>
                            <h4 className="text-lg font-medium mb-2">תמיכה 24/7</h4>
                            <p className="text-sm text-muted-foreground">
                                הצוות שלנו כאן לעזור לך בכל שעה.
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/30 bg-card/20">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                                <CheckIcon className="w-6 h-6 text-blue-500" />
                            </div>
                            <h4 className="text-lg font-medium mb-2">תשלום מאובטח</h4>
                            <p className="text-sm text-muted-foreground">
                                כל העסקאות מוצפנות ומאובטחות 100%.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
                </div>
            </div>
        </Wrapper>
    );
};

export default PricingPage;

