import React from "react";
import { cn } from "@/lib/utils";

export default function NeonCard({
                                     className,
                                     children,
                                 }: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={cn("neon-card", className)}>
            <div className="neon-card-inner">{children}</div>
        </div>
    );
}
