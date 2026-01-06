import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { H1, H2, Paragraph } from "@/components/ui/Typography";
import { ChildPageData } from "@/lib/content-loader";
import { ChevronRight, CheckCircle, Activity, Heart, Zap, GitBranch, Microscope, Users, Anchor, Link as LinkIcon } from "lucide-react";

// Helper to render icons dynamically (reused for consistency)
const IconMap: Record<string, any> = {
    HeartPulse: Activity,
    Heart: Heart,
    Activity: Activity,
    Brain: Activity,
    Zap: Zap,
    GitBranch: GitBranch,
    Microscope: Microscope,
    Users: Users,
    CheckCircle: CheckCircle,
    Paperclip: Anchor,
    Link: LinkIcon,
    Shield: CheckCircle,
    Triangle: Activity,
    CircleDot: Activity,
};

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
    const Icon = IconMap[name] || Activity;
    return <Icon className={className} />;
};

export function ChildPageTemplate({ data, hubSlug, parentSlug }: { data: ChildPageData; hubSlug: string; parentSlug: string }) {
    const { hero, primary_content, why_choose, cta_section } = data;

    // Determine if this is a 2-level hub (hubSlug === parentSlug means direct child under hub)
    const isTwoLevel = hubSlug === parentSlug;

    return (
        <div className="flex flex-col">
            {/* Breadcrumb */}
            <div className="bg-navy border-b border-white/10 py-4">
                <Container>
                    <div className="flex items-center gap-2 text-sm text-gray-400 overflow-x-auto whitespace-nowrap">
                        <Link href="/areas-of-expertise" className="hover:text-teal transition-colors">Areas of Expertise</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href={`/areas-of-expertise/${hubSlug}`} className="hover:text-teal transition-colors capitalize">{hubSlug.replace(/-/g, ' ')}</Link>
                        {!isTwoLevel && (
                            <>
                                <ChevronRight className="w-4 h-4" />
                                <Link href={`/areas-of-expertise/${hubSlug}/${parentSlug}`} className="hover:text-teal transition-colors capitalize">{data.parent_page.name}</Link>
                            </>
                        )}
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium">{data.page_title.split('|')[0].trim()}</span>
                    </div>
                </Container>
            </div>

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-navy py-16 md:py-24">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/images/services/medical-device-testing.jpg" 
                        alt="Medical device testing"
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
                    {why_choose && why_choose.cards && why_choose.cards.length >= 2 && (
                        <div className="max-w-2xl space-y-4 mt-8 mb-8">
                            <Paragraph className="text-gray-300 text-base leading-relaxed">
                                {why_choose.cards[0].description} {why_choose.cards[1].description}
                            </Paragraph>
                            <Paragraph className="text-gray-300 text-base leading-relaxed">
                                {why_choose.cards[2]?.description || why_choose.description}
                            </Paragraph>
                        </div>
                    )}
                    
                    <Button href="/contact" size="lg" variant="secondary">Request Study Info</Button>
                </Container>
            </section>

            {/* Primary Content (What We Test) */}
            <Section background="white">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <H2 className="mb-6">{primary_content.title}</H2>
                            <div className="text-gray-600 space-y-4 text-lg leading-relaxed whitespace-pre-line">
                                {primary_content.description}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-ghost p-8 rounded-none shadow-sm border border-navy/5">
                                <h3 className="text-2xl font-bold text-navy mb-6">{primary_content.key_capabilities.title}</h3>
                                <div className="space-y-6">
                                    {primary_content.key_capabilities.capabilities.map((cap, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="mt-1">
                                                <CheckCircle className="w-5 h-5 text-teal flex-shrink-0" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-navy mb-1">{cap.title}</h4>
                                                <p className="text-sm text-gray-600">{cap.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* CTA Section */}
            <Section background="navy" className="text-center">
                <Container>
                    <H2 className="mb-6 text-white uppercase">{cta_section.title}</H2>
                    <Paragraph className="mb-8 max-w-2xl mx-auto text-gray-200">
                        {cta_section.description}
                    </Paragraph>
                    <Button size="lg" variant="secondary" href={cta_section.primary_button_link}>
                        {cta_section.primary_button_text}
                    </Button>
                </Container>
            </Section>
        </div>
    );
}

