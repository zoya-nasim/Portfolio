import { Badge } from "@/components/ui/badge";
import { Code2, Library, Wrench, Puzzle } from "lucide-react";
import NeonCard from "@/components/shared/NeonCard";

const skillsData = {
    Programming: {
        icon: <Code2 className="size-6 text-primary" />,
        skills: ["Python", "C"],
    },
    Libraries: {
        icon: <Library className="size-6 text-primary" />,
        skills: ["NumPy", "Pandas", "Matplotlib"],
    },
    Tools: {
        icon: <Wrench className="size-6 text-primary" />,
        skills: ["Excel (functions, pivot tables)", "Power BI (learning)"],
    },
    Other: {
        icon: <Puzzle className="size-6 text-primary" />,
        skills: ["SQL", "Git/GitHub", "Jupyter Notebook"],
    },
};

export default function SkillsSection() {
    return (
        <section id="skills">
            <div className="text-center mb-12">
                <h2 className="font-headline text-4xl font-bold">Skills</h2>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {Object.entries(skillsData).map(([category, { icon, skills }]) => (
                    <div
                        key={category}
                        className="
              group relative
              h-[240px]
              rounded-[10px]
            "
                    >
                        {/* ✅ BACK conic gradient border card */}
                        <div
                            className="
                absolute inset-0 rounded-[10px]
                overflow-hidden
              "
                        >
                            <div
                                className="
                  absolute -inset-[300px]
                  bg-[conic-gradient(from_0deg,#5b21b6,#7c3aed,#a855f7,#d946ef,#a855f7,#7c3aed,#5b21b6)]
                  opacity-100
                  group-hover:animate-[spin_2.5s_linear_infinite]
                "
                            />
                        </div>

                        {/* ✅ FRONT main card (slightly smaller so border ring shows) */}
                        <NeonCard
                            className="
    absolute inset-[2px]
    h-[calc(100%-4px)]
    w-[calc(100%-4px)]
    rounded-[10px]
    z-10
  "
                        >
                            {/* Title Row */}
                            <div className="flex items-center gap-3">
                                {icon}
                                <h3 className="font-headline text-xl font-semibold">{category}</h3>
                            </div>

                            {/* Divider */}
                            <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />

                            {/* Skills list */}
                            <div className="mt-6 flex flex-col gap-3 items-start">
                                {skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="outline"
                                        className="
          rounded-md cursor-pointer
          border-primary/60 bg-transparent
          px-3 py-1 text-sm font-medium
          text-primary-foreground/90
          transition-all duration-200
          hover:-translate-y-0.5
          hover:border-primary
          hover:bg-primary/10
          hover:shadow-[0_0_15px_-3px_hsl(var(--primary))]
        "
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </NeonCard>

                    </div>
                ))}
            </div>
        </section>
    );
}
