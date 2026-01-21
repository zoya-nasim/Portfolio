import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function CertificationsSection() {
    return (
        <section id="certifications">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">Certifications</h2>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <Card className="shadow-none border-border/80">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3">
                            <Award className="size-6 text-primary" />
                            Business for Good
                        </CardTitle>
                        <CardDescription>London Business School (Dec 2025)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Fundamentals of Corporate Responsibility.</p>
                    </CardContent>
                </Card>
                <Card className="shadow-none border-border/80">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3">
                            <Award className="size-6 text-primary" />
                            Corporate Governance
                        </CardTitle>
                        <CardDescription>Coursera (Jan 2026)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Explored principles of corporate governance.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
