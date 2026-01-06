import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { H1, H2, Paragraph } from "@/components/ui/Typography";
import { HubPageData } from "@/lib/content-loader";
import { ArrowRight, CheckCircle, ChevronRight, Activity, Heart, Zap, GitBranch, Microscope, Users, Anchor, Link as LinkIcon } from "lucide-react";

// Helper to render icons dynamically
const IconMap: Record<string, any> = {
    HeartPulse: Activity,
    Heart: Heart,
    Activity: Activity,
    Brain: Activity, // Use generic for now or import distinct
    Zap: Zap,
    GitBranch: GitBranch,
    Microscope: Microscope,
    Users: Users,
    CheckCircle: CheckCircle,
    Paperclip: Anchor,
    Link: LinkIcon,
    Shield: CheckCircle,
    Triangle: Activity, // Fallback
    CircleDot: Activity, // Fallback
};

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const Icon = IconMap[name] || Activity;
    return <Icon className={className} />;
};

export function HubPageTemplate({ data }: { data: HubPageData }) {
    const { hero, subpages_section, why_choose_section, featured_services, related_services, cta_section } = data;

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-navy py-16 md:py-24">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/services/cardiovascular-disease-testing.jpeg" 
                        alt="Cardiovascular testing"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-0" />

                <Container className="relative z-10">
                    <H1 className="text-white mb-6 uppercase tracking-wider">{hero.headline}</H1>
                    <Paragraph className="text-gray-200 max-w-2xl mb-8 text-xl leading-relaxed">
                        {hero.description}
                    </Paragraph>
                    
                    {/* Value Propositions */}
                    {why_choose_section && why_choose_section.cards && why_choose_section.cards.length >= 2 && (
                        <div className="max-w-2xl space-y-4 mt-8">
                            <Paragraph className="text-gray-300 text-base leading-relaxed">
                                {why_choose_section.cards[0].description} {why_choose_section.cards[1].description}
                            </Paragraph>
                            <Paragraph className="text-gray-300 text-base leading-relaxed">
                                {why_choose_section.cards[2]?.description || why_choose_section.description}
                            </Paragraph>
                        </div>
                    )}
                </Container>
            </section>

            {/* Subpages Grid */}
            <Section background="white">
                <Container>
                    <div className="mb-16">
                        <H2 className="mb-4">{subpages_section.title}</H2>
                        <Paragraph className="max-w-2xl">
                            {subpages_section.description}
                        </Paragraph>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subpages_section.cards.map((card, index) => (
                            <Link key={index} href={card.link_url} className="group h-full">
                                <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:border-teal/30 group-hover:-translate-y-1">
                                    <div className="mb-6">
                                        <div className="w-12 h-12 bg-teal/10 rounded-none flex items-center justify-center mb-4 text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                                            <DynamicIcon name={card.icon_name} className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">{card.title}</h3>
                                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto flex items-center text-teal font-bold uppercase tracking-wider text-sm">
                                        Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Schedule Consultation CTA */}
            <Section background="ghost">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8">
                        <div>
                            <H2 className="mb-2">Ready to discuss your project?</H2>
                            <Paragraph className="text-gray-600">
                                Our team is here to help you design the perfect study for your device.
                            </Paragraph>
                        </div>
                        <div className="flex-shrink-0">
                            <Button size="lg" variant="secondary" href="/contact">Schedule Consultation</Button>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Featured Services */}
            <Section background="white">
                <Container>
                    <div className="mb-16">
                        <H2 className="mb-6">{featured_services.title}</H2>
                    </div>

                    <div className="space-y-16">
                        {featured_services.services.map((service, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1 space-y-6">
                                    <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Button variant="outline" href={service.cta_url}>
                                        {service.cta_text}
                                    </Button>
                                </div>
                                <div className="flex-1 w-full bg-ghost rounded-none min-h-[300px] flex items-center justify-center border border-navy/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/10 transition-colors" />
                                    <span className="text-gray-400 font-medium">{service.image_placeholder}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Related Services */}
            {related_services && (
                <Section background="ghost">
                    <Container>
                        <div className="mb-12">
                            <H2 className="mb-4">{related_services.title}</H2>
                            <Paragraph>{related_services.description}</Paragraph>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {related_services.cards.map((card, index) => (
                                <Link key={index} href={card.cta_url} className="block group">
                                    <Card className="h-full hover:border-teal transition-colors p-8">
                                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">{card.title}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                                        <span className="text-teal text-sm font-bold uppercase flex items-center">
                                            {card.cta_text} <ChevronRight className="w-4 h-4 ml-1" />
                                        </span>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </Section>
            )}

            {/* CTA Section */}
            <Section background="navy" className="text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-teal/10 skew-x-12 transform -translate-x-1/2" />
                <Container className="relative z-10 text-center">
                    <H2 className="text-white mb-6 uppercase">{cta_section.title}</H2>
                    <Paragraph className="text-gray-200 mb-10 max-w-2xl mx-auto text-lg">
                        {cta_section.description}
                    </Paragraph>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" variant="secondary" href={cta_section.primary_button_link}>
                            {cta_section.primary_button_text}
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

