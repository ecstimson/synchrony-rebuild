import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    className?: string
    padding?: "none" | "sm" | "md" | "lg"
}

export function Card({ children, className, padding = "md", ...props }: CardProps) {
    const paddingStyles = {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8 md:p-10",
    }

    return (
        <div
            className={cn(
                "bg-white rounded-xl luxury-shadow border border-gray-100/50 overflow-hidden",
                paddingStyles[padding],
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
