import { cn } from "@/lib/utils"

interface TypographyProps {
    children: React.ReactNode
    className?: string
}

export function H1({ children, className }: TypographyProps) {
    return (
        <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-navy uppercase", className)}>
            {children}
        </h1>
    )
}

export function H2({ children, className }: TypographyProps) {
    return (
        <h2 className={cn("text-3xl md:text-4xl font-bold tracking-tight text-navy uppercase", className)}>
            {children}
        </h2>
    )
}

export function H3({ children, className }: TypographyProps) {
    return (
        <h3 className={cn("text-2xl font-bold tracking-tight text-navy uppercase", className)}>
            {children}
        </h3>
    )
}

export function Paragraph({ children, className }: TypographyProps) {
    return (
        <p className={cn("leading-7 text-navy/80 [&:not(:first-child)]:mt-6", className)}>
            {children}
        </p>
    )
}

export function Label({ children, className }: TypographyProps) {
    return (
        <label className={cn("text-sm font-medium leading-none text-navy peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}>
            {children}
        </label>
    )
}

export function Caption({ children, className }: TypographyProps) {
    return (
        <p className={cn("text-sm text-navy/60", className)}>
            {children}
        </p>
    )
}
