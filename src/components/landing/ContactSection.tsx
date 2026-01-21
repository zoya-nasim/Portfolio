"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/mbddpyjo", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">Contact</h2>
                <p className="text-muted-foreground mt-2">Get in touch with me.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {/* Email Card */}
                <Card className="shadow-none border-border/80">
                    <CardHeader className="flex-row items-center gap-4">
                        <Mail className="size-8 text-primary" />
                        <div>
                            <CardTitle>Email</CardTitle>
                            <CardDescription>zoya24n@gmail.com</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Button asChild variant="outline">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=zoya24n@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Send Email
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                {/* LinkedIn Card */}
                <Card className="shadow-none border-border/80">
                    <CardHeader className="flex-row items-center gap-4">
                        <Linkedin className="size-8 text-primary" />
                        <div>
                            <CardTitle>LinkedIn</CardTitle>
                            <CardDescription>zoya-nasim-233943312</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Button asChild variant="outline">
                            <a
                                href="https://www.linkedin.com/in/zoya-nasim-233943312/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Profile
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                {/* ✅ Message Form Card (Formspree AJAX) */}
                <Card className="shadow-none border-border/80 md:col-span-2">
                    <CardHeader className="flex-row items-center gap-4">
                        <Send className="size-8 text-primary" />
                        <div>
                            <CardTitle>Message</CardTitle>
                            <CardDescription>Send a quick message directly from here.</CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
                            <Input
                                name="name"
                                placeholder="Your name"
                                required
                            />

                            {/* Email */}
                            <Input
                                name="email"
                                type="email"
                                placeholder="Your email"
                                required
                            />

                            {/* Message */}
                            <Textarea
                                name="message"
                                placeholder="Your message..."
                                required
                                className="min-h-[120px]"
                            />

                            <Button type="submit" disabled={status === "sending"} className="w-full">
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </Button>

                            {/* ✅ Status message */}
                            {status === "success" && (
                                <p className="text-sm text-green-500 text-center">
                                    Sent successfully ✅
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-sm text-red-500 text-center">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
