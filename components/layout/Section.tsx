import { cn } from "@/lib/utils";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: "white" | "ghost" | "navy";
}

export function Section({ children, className, background = "white" }: SectionProps) {
    return (
        <section
            className={cn(
                "py-24", // Luxury vertical padding
                background === "ghost" ? "bg-ghost" :
                    background === "navy" ? "bg-navy" : "bg-white",
                className
            )}
        >
            {children}
        </section>
    );
}
