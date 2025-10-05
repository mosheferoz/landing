"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="lg:hidden relative overflow-hidden group hover:bg-muted/50 transition-all duration-300"
                >
                    <Menu className="h-6 w-6 transition-transform group-hover:scale-110" />
                </Button>
            </SheetTrigger>
            <SheetContent 
                side="right" 
                className="w-full sm:w-[320px] pt-16 bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl"
            >
                <SheetHeader className="mb-10">
                    <SheetTitle className="text-right text-2xl font-bold bg-gradient-to-l from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        תפריט
                    </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="group relative text-base font-medium transition-all duration-300 text-right p-3 rounded-lg hover:bg-muted/50 hover:shadow-md"
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
                                {link.name}
                            </span>
                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-full" />
                        </Link>
                    ))}
                    <div className="pt-6 mt-6 border-t border-border/50">
                        <Link href="#" className="w-full" onClick={handleLinkClick}>
                            <Button 
                                className="w-full relative overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300" 
                                variant="blue"
                            >
                                <span className="relative z-10">התחל עכשיו</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Button>
                        </Link>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenu
