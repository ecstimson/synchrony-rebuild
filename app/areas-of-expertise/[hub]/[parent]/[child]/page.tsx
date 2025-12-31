import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { H1, H2, Paragraph } from "@/components/ui/Typography";
import { getChildPageData, getAllChildSlugs } from "@/lib/content-loader";
import { ChildPageTemplate } from "@/components/templates/ChildPageTemplate";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageProps {
    params: {
        hub: string;
        parent: string;
        child: string;
    };
}

// Generate static params for all children
export async function generateStaticParams() {
    const slugs = await getAllChildSlugs();
    return slugs.map((slug) => ({
        child: slug,
    }));
}

export default async function ChildPage({ params }: PageProps) {
    const data = await getChildPageData(params.child);

    // If no JSON data exists, show a placeholder page instead of 404
    if (!data) {
        const hubTitle = params.hub.replace(/-/g, ' ');
        const parentTitle = params.parent.replace(/-/g, ' ');
        const childTitle = params.child.replace(/-/g, ' ');
        return (
            <div className="flex flex-col">
                {/* Breadcrumb */}
                <div className="bg-navy border-b border-white/10 py-4">
                    <Container>
                        <div className="flex items-center gap-2 text-sm text-gray-400 overflow-x-auto whitespace-nowrap">
                            <Link href="/areas-of-expertise" className="hover:text-teal transition-colors">Areas of Expertise</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href={`/areas-of-expertise/${params.hub}`} className="hover:text-teal transition-colors capitalize">{hubTitle}</Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href={`/areas-of-expertise/${params.hub}/${params.parent}`} className="hover:text-teal transition-colors capitalize">{parentTitle}</Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-white font-medium capitalize">{childTitle}</span>
                        </div>
                    </Container>
                </div>
                <Section className="bg-navy text-white min-h-[40vh] flex items-center">
                    <Container className="text-center">
                        <H1 className="mb-6 capitalize">{childTitle}</H1>
                        <Paragraph className="text-gray-200 max-w-3xl mx-auto mb-8 text-xl">
                            Advanced preclinical models for {childTitle.toLowerCase()} device testing.
                        </Paragraph>
                    </Container>
                </Section>
                <Section background="white">
                    <Container className="text-center">
                        <H2 className="mb-6">Content Coming Soon</H2>
                        <Paragraph className="mb-8 max-w-2xl mx-auto">
                            Detailed information about our {childTitle.toLowerCase()} capabilities will be available soon. Contact our scientific team to discuss your requirements.
                        </Paragraph>
                        <Button size="lg" href="/contact">Contact Us</Button>
                    </Container>
                </Section>
            </div>
        );
    }

    return <ChildPageTemplate data={data} hubSlug={params.hub} parentSlug={params.parent} />;
}
