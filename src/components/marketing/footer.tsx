import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-foreground/5 pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
                <Container>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-center gap-2">
                            <Icons.icon className="w-auto h-5" />
                            <span className="text-base md:text-lg font-medium text-foreground">
                                lift14
                            </span>
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-right">
                            פלטפורמה מופעלת על ידי AI שמשנה את תהליך השיווק שלך תוך שניות.
                        </p>
                    </div>
                </Container>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.1} className="h-auto">
                            <h3 className="text-base font-medium text-foreground text-right">
                                מוצר
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4 text-right">
                                <li className="mt-2">
                                    <Link href="/features" className="link hover:text-foreground transition-all duration-300">
                                        תכונות
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/pricing" className="link hover:text-foreground transition-all duration-300">
                                        תמחור
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/#testimonials" className="link hover:text-foreground transition-all duration-300">
                                        המלצות
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/#languages" className="link hover:text-foreground transition-all duration-300">
                                        שפות נתמכות
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.2} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground text-right">
                                    פתרונות
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4 text-right">
                                    <li>
                                        <Link href="/features" className="link hover:text-foreground transition-all duration-300">
                                            יוצרי תוכן
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/features" className="link hover:text-foreground transition-all duration-300">
                                            עסקים
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/features" className="link hover:text-foreground transition-all duration-300">
                                            חינוך
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/features" className="link hover:text-foreground transition-all duration-300">
                                            ארגוני
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <Container delay={0.3} className="h-auto">
                            <h3 className="text-base font-medium text-foreground text-right">
                                משאבים
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground space-y-4 text-right">
                                <li className="mt-2">
                                    <Link href="/blog" className="link hover:text-foreground transition-all duration-300">
                                        בלוג
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/blog" className="link hover:text-foreground transition-all duration-300">
                                        מדריכי תרגום
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="/contact" className="link hover:text-foreground transition-all duration-300">
                                        תמיכה
                                    </Link>
                                </li>
                            </ul>
                        </Container>
                        <Container delay={0.4} className="h-auto">
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-foreground text-right">
                                    חברה
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground space-y-4 text-right">
                                    <li>
                                        <Link href="/#about" className="link hover:text-foreground transition-all duration-300">
                                            אודות
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="link hover:text-foreground transition-all duration-300">
                                            מדיניות פרטיות
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="link hover:text-foreground transition-all duration-300">
                                            תנאים והגבלות
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            <Container delay={0.5} className="w-full relative mt-12 lg:mt-20">
                <div className="mt-8 md:flex md:items-center justify-center footer w-full">
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} Vetra. כל הזכויות שמורות.
                    </p>
                </div>
            </Container>
        </footer>
    )
};

export default Footer
