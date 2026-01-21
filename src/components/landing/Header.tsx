"use client";

import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, GraduationCap, Briefcase, Lightbulb, Heart, Star, Award, Mail } from "lucide-react";
import { WandSparkles } from "lucide-react";

export default function Header() {
    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#leadership-volunteering", label: "Leadership" },
        { href: "#achievements", label: "Achievements" },
        { href: "#education", label: "Education" },
        { href: "#certifications", label: "Certifications" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
                <Link
                    href="#"
                    className="mr-6 flex items-center space-x-2"
                    prefetch={false}
                >
          <span className="font-headline text-lg font-bold text-foreground">
            Zoya Nasim
          </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
                            prefetch={false}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="grid gap-4 p-4">
                            <Link
                                href="#"
                                className="flex items-center space-x-2"
                                prefetch={false}
                            >
                <span className="font-headline text-lg font-bold text-foreground">
                  Zoya Nasim
                </span>
                            </Link>
                            <nav className="grid gap-2 text-base font-medium">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex w-full items-center py-2 text-muted-foreground hover:text-foreground"
                                        prefetch={false}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
