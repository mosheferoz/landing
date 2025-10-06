import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CalendarIcon, ClockIcon, TagIcon } from "lucide-react";
import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Icons from "@/components/global/icons";

const BLOG_POSTS = [
    {
        id: 1,
        title: "איך AI משנה את עתיד השיווק הדיגיטלי",
        excerpt: "גלה איך טכנולוגיית הבינה המלאכותית מהפכת את תעשיית השיווק הדיגיטלי ומה זה אומר עבור העסק שלך.",
        image: "/images/dashboard.png",
        category: "בינה מלאכותית",
        date: "5 אוקטובר 2025",
        readTime: "5 דקות קריאה",
        author: "צוות Lift14",
        featured: true,
    },
    {
        id: 2,
        title: "10 טיפים לשיווק ברשתות חברתיות ב-2025",
        excerpt: "מדריך מקיף לשיווק מוצלח ברשתות החברתיות עם האסטרטגיות והכלים העדכניים ביותר.",
        image: "/images/feature-one.svg",
        category: "רשתות חברתיות",
        date: "2 אוקטובר 2025",
        readTime: "7 דקות קריאה",
        author: "צוות Lift14",
    },
    {
        id: 3,
        title: "מדריך למתחילים: יצירת תוכן עם AI",
        excerpt: "למד איך להשתמש בכלי AI ליצירת תוכן שיווקי איכותי שמושך קהל ומגדיל המרות.",
        image: "/images/feature-two.svg",
        category: "יצירת תוכן",
        date: "28 ספטמבר 2025",
        readTime: "6 דקות קריאה",
        author: "צוות Lift14",
    },
    {
        id: 4,
        title: "אופטימיזציה של קמפיינים: מדריך מעשי",
        excerpt: "טכניקות מתקדמות לאופטימיזציה של קמפיינים שיווקיים להגדלת ROI ושיפור ביצועים.",
        image: "/images/feature-three.svg",
        category: "אופטימיזציה",
        date: "25 ספטמבר 2025",
        readTime: "8 דקות קריאה",
        author: "צוות Lift14",
    },
    {
        id: 5,
        title: "אנליטיקה שיווקית: המדריך המלא",
        excerpt: "הבן את הנתונים שלך ותקבל החלטות מושכלות יותר עם המדריך המקיף שלנו לאנליטיקה שיווקית.",
        image: "/images/feature-four.svg",
        category: "אנליטיקה",
        date: "22 ספטמבר 2025",
        readTime: "10 דקות קריאה",
        author: "צוות Lift14",
    },
    {
        id: 6,
        title: "טרנדים בשיווק דיגיטלי לשנת 2025",
        excerpt: "התעדכן בטרנדים החמים ביותר בשיווק הדיגיטלי והיה צעד אחד לפני המתחרים.",
        image: "/images/feature-five.svg",
        category: "טרנדים",
        date: "20 ספטמבר 2025",
        readTime: "6 דקות קריאה",
        author: "צוות Lift14",
    },
];

const CATEGORIES = ["הכל", "בינה מלאכותית", "רשתות חברתיות", "יצירת תוכן", "אופטימיזציה", "אנליטיקה"];

const BlogPage = () => {
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
                        הבלוג של <span className="font-subheading italic">Lift14</span>
                    </h1>
                    <p className="text-base md:text-lg text-center text-muted-foreground mt-6 max-w-2xl">
                        תובנות, טיפים ומדריכים לשיווק דיגיטלי מוצלח. הישאר מעודכן עם הטרנדים והאסטרטגיות האחרונות בתעשייה.
                    </p>
                </div>
            </Container>

            {/* Categories Filter */}
            <Container delay={0.2}>
                <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            className="px-4 py-2 rounded-full border border-border/50 bg-card/30 hover:bg-card/50 hover:border-pink-500/50 transition-all text-sm font-medium"
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </Container>

            {/* Featured Post */}
            {BLOG_POSTS.filter(post => post.featured).map((post) => (
                <Container key={post.id} delay={0.3}>
                    <Link href={`/blog/${post.id}`} className="block group">
                        <div className="relative max-w-5xl mx-auto mt-16 overflow-hidden rounded-3xl border border-border/50 bg-card/30 hover:bg-card/50 transition-all">
                            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
                                <div className="flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 w-fit mb-4">
                                        <span className="text-xs text-pink-500 font-medium">מומלץ</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium !leading-tight mb-4 group-hover:text-pink-500 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-6 text-base md:text-lg">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <ClockIcon className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <TagIcon className="w-4 h-4" />
                                            <span>{post.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-[300px] lg:h-auto rounded-2xl overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </Link>
                </Container>
            ))}

            {/* Blog Grid */}
            <Container delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    {BLOG_POSTS.filter(post => !post.featured).map((post, idx) => (
                        <Link 
                            key={post.id} 
                            href={`/blog/${post.id}`}
                            className="group"
                        >
                            <div className="flex flex-col h-full rounded-2xl border border-border/50 bg-card/30 hover:bg-card/50 hover:border-pink-500/50 transition-all overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 p-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 w-fit mb-3">
                                        <span className="text-xs text-pink-500 font-medium">{post.category}</span>
                                    </div>
                                    <h3 className="text-xl font-heading font-medium mb-3 group-hover:text-pink-500 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/30">
                                        <div className="flex items-center gap-1">
                                            <CalendarIcon className="w-3 h-3" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <ClockIcon className="w-3 h-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>

            {/* Newsletter CTA */}
            <Container delay={0.5}>
                <div className="relative max-w-4xl mx-auto mt-32">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-3xl blur-3xl -z-10"></div>
                    <div className="relative border border-pink-500/30 rounded-3xl p-8 md:p-12 bg-card/30 backdrop-blur-sm text-center">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium mb-4">
                            קבל תובנות חדשות <span className="font-subheading italic">ישירות למייל</span>
                        </h3>
                        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
                            הירשם לניוזלטר שלנו וקבל את המאמרים, הטיפים והעדכונים האחרונים בשיווק דיגיטלי.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="הכנס את המייל שלך"
                                className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border/50 focus:border-pink-500/50 focus:outline-none transition-colors text-right"
                            />
                            <Button size="lg" variant="blue" className="w-full sm:w-auto">
                                הירשם עכשיו
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
                </div>
            </div>
        </Wrapper>
    );
};

export default BlogPage;

