import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function AchievementsSection() {
    return (
        <section id="achievements">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">Achievements & Highlights</h2>
            </div>
            <div className="max-w-2xl mx-auto">
                <Card className="shadow-none border-border/80">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3">
                            <Star className="size-6 text-primary" />
                            Smart India Hackathon (SIH) 2025
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Secured <span className="font-bold text-foreground">5th Rank</span> in the college round out of 522 participating teams.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
