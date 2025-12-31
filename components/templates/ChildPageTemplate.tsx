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
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-navy">
                <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent opacity-50" />

                <Container className="relative z-10 text-center">
                    <H1 className="text-white mb-6 uppercase tracking-wider max-w-4xl mx-auto">{hero.headline}</H1>
                    <Paragraph className="text-gray-200 max-w-3xl mx-auto mb-8 text-xl leading-relaxed">
                        {hero.description}
                    </Paragraph>
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
                            <div className="bg-ghost p-8 rounded-xl shadow-sm border border-navy/5">
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

            {/* Why Choose Section */}
            <Section background="ghost">
                <Container>
                    <div className="text-center mb-16">
                        <H2 className="mb-4">{why_choose.title}</H2>
                        {why_choose.description && (
                            <Paragraph className="max-w-3xl mx-auto">
                                {why_choose.description}
                            </Paragraph>
                        )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {why_choose.cards.map((card, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-navy/5">
                                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mb-6 text-navy">
                                    <DynamicIcon name={card.icon_name} className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
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

