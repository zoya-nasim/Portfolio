import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
    return (
        <section id="education">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">Education</h2>
            </div>
            <div className="max-w-4xl mx-auto grid gap-8">
                <Card className="shadow-none border-border/80">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3">
                            <GraduationCap className="size-6 text-primary" />
                            Kalinga Institute of Technology
                        </CardTitle>
                        <CardDescription>July 2023 – Present</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Current CGPA: <span className="font-bold text-foreground">8.06</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-none border-border/80">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl flex items-center gap-3">
                            <GraduationCap className="size-6 text-primary" />
                            St. Xavier’s School, Bokaro
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>View academic details</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                        <li>ISC (Class 12): <span className="font-semibold text-foreground">87.5%</span></li>
                                        <li>ICSE (Class 10): <span className="font-semibold text-foreground">92.2%</span></li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
