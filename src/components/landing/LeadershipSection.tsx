import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Heart } from "lucide-react";

export default function LeadershipSection() {
    return (
        <section id="leadership-volunteering">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">Leadership & Volunteering</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                <Card className="shadow-none border-border/80">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3">
                            <Award className="size-6 text-primary" />
                            Kronicle (Debating Society)
                        </CardTitle>
                        <CardDescription>Debater</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Participated in debates & adjudication.</li>
                            <li>Organized and supported society events.</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="shadow-none border-border/80">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3">
                            <Heart className="size-6 text-primary" />
                            Khwaab (Social Service Society)
                        </CardTitle>
                        <CardDescription>Volunteer</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ul className="list-disc pl-5 text-muted-foreground">
                            <li>Supported cleanliness drives and donation campaigns.</li>
                            <li>Assisted with logistics and team coordination for community events.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
