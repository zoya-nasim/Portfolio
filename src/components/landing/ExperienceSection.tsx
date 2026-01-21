import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
    return (
        <section id="experience">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">Experience</h2>
            </div>
            <div className="max-w-2xl mx-auto">
                <Card className="shadow-none border-border/80">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3">
                            <Briefcase className="size-6 text-primary" />
                            Tyche Ventures Pvt Ltd
                        </CardTitle>
                        <CardDescription>Business Operations Intern | June 2021 </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                            <li>Provided support for partner identification and outreach initiatives.</li>
                            <li>Handled documentation and assisted with internal team coordination.</li>
                            <li>Supported social media outreach and content for skill assessments.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
