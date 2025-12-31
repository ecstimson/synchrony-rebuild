import Link from "next/link";
import { Container } from "./Container";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy text-white py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter">SYNCHRONY</h3>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            State-of-the-art medical facilities designed for the future of healthcare.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors cursor-pointer">
                                <Linkedin className="w-4 h-4" />
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors cursor-pointer">
                                <Twitter className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><Link href="/" className="hover:text-teal transition-colors">Home</Link></li>
                            <li><Link href="/areas-of-expertise" className="hover:text-teal transition-colors">Areas of Expertise</Link></li>
                            <li><Link href="/facility" className="hover:text-teal transition-colors">Facility</Link></li>
                            <li><Link href="/contact" className="hover:text-teal transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Research Areas */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Key Areas</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><Link href="/areas-of-expertise/cardiovascular" className="hover:text-teal transition-colors">Cardiovascular</Link></li>
                            <li><Link href="/areas-of-expertise/neurovascular" className="hover:text-teal transition-colors">Neurovascular</Link></li>
                            <li><Link href="/areas-of-expertise/gastrointestinal" className="hover:text-teal transition-colors">Gastrointestinal</Link></li>
                            <li><Link href="/areas-of-expertise/robotics" className="hover:text-teal transition-colors">Robotics</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li>123 Medical Plaza</li>
                            <li>New York, NY 10001</li>
                            <li className="pt-2">contact@synchronylabs.com</li>
                            <li>(555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {currentYear} Synchrony Labs. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
