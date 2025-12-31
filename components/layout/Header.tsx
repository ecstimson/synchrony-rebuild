import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Menu } from "lucide-react";

export function Header() {
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/areas-of-expertise", label: "Areas of Expertise" },
        { href: "/facility", label: "Facility" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <Container className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 relative h-14 w-72">
                    <Image
                        src="/logos/synchrony-primary-navy-small.png"
                        alt="Synchrony Labs"
                        fill
                        className="object-contain object-left"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-base font-medium text-navy/80 hover:text-navy transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA & Mobile Menu */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-navy rounded-full hover:bg-navy/90 transition-colors"
                    >
                        Partner With Us
                    </Link>

                    <button className="md:hidden p-2 text-navy">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </Container>
        </header>
    );
}
