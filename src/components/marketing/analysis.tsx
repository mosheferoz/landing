import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        <span className="font-subheading italic">דאשבורד</span> שיווק <br />חכם
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        קבל תובנות מפורטות על ביצועי השיווק ומדדי הקמפיין שלך עם כלי האנליטיקה המתקדמים שלנו.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    תובנות קמפיין
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    עקוב אחר ביצועי הקמפיין שלך עם תובנות מבוססות נתונים.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">
                                                $12,834
                                            </div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +25% מהחודש שעבר
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2 text-right">
                                            <div>ROI</div>
                                            <div>הגעה</div>
                                            <div>סטטוס</div>
                                            <div>קמפיין</div>
                                        </div>
                                        {[
                                            { name: "מכירות", status: "פעיל", reach: "45K", roi: "+32%" },
                                            { name: "אימיילים", status: "הושלם", reach: "28K", roi: "+18%" },
                                            { name: "פרסומות", status: "פעיל", reach: "62K", roi: "+45%" },
                                        ].map((campaign) => (
                                            <div key={campaign.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50 text-right">
                                                <div className="font-semibold">{campaign.roi}</div>
                                                <div>{campaign.reach}</div>
                                                <div>{campaign.status}</div>
                                                <div>{campaign.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    מדדי קהל
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    הבן את התנהגות הקהל שלך ודפוסי המעורבות.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">84,392</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +12% שיעור מעורבות
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Audience Table */}
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2 text-right">
                                            <div>שיעור המרה</div>
                                            <div>סשנים</div>
                                            <div>משתמשים</div>
                                            <div>ערוץ</div>
                                        </div>
                                        {[
                                            { channel: "חברתי", users: "32K", sessions: "45K", rate: "3.2%" },
                                            { channel: "אימייל", users: "28K", sessions: "36K", rate: "4.5%" },
                                            { channel: "ישיר", users: "15K", sessions: "22K", rate: "5.1%" },
                                        ].map((metric) => (
                                            <div key={metric.channel} className="grid grid-cols-4 text-sm py-2 border-t border-border/50 text-right">
                                                <div className="font-semibold">{metric.rate}</div>
                                                <div>{metric.sessions}</div>
                                                <div>{metric.users}</div>
                                                <div>{metric.channel}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
