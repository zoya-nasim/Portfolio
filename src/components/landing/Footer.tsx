import Link from "next/link";
import { Instagram, Github } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-secondary/50 border-t">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {year} Vivid Portfolio. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        aria-label="Twitter"
                        className="text-muted-foreground hover:text-foreground"
                        prefetch={false}
                    >
                        <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://github.com/zoya-nasim"
                        aria-label="GitHub"
                        className="text-muted-foreground hover:text-foreground"
                        prefetch={false}
                    >
                        <Github className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
