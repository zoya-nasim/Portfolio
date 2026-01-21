import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
    const heroBg = PlaceHolderImages.find(img => img.id === 'constellation-background');

    return (
        <section id="hero" className="relative py-20 md:py-32 overflow-hidden">

            <div className="absolute inset-0 bg-background/0 z-[-1]" />
            <div className="container relative z-10 mx-auto text-center px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="font-headline text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl">
                        Zoya Nasim
                    </h1>
                    <h2 className="mt-4 font-body text-lg font-medium tracking-tight text-muted-foreground sm:text-xl">
                        Business Operations Intern | Data Analytics Learner
                    </h2>
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <Button asChild size="lg">
                            <a href="/docs/Zoya_Nasim_Resume.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </a>
                        </Button>


                    </div>
                </div>
            </div>
        </section>
    );
}
