import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { H1, H2, Paragraph } from "@/components/ui/Typography";
import { getParentPageData, getChildPageData, getAllParentSlugs, getAllChildSlugs, isTwoLevelHub } from "@/lib/content-loader";
import { ParentPageTemplate } from "@/components/templates/ParentPageTemplate";
import { ChildPageTemplate } from "@/components/templates/ChildPageTemplate";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageProps {
    params: {
        hub: string;
        parent: string;
    };
}

// Generate static params for all parents AND 2-level hub children
export async function generateStaticParams() {
    const parentSlugs = await getAllParentSlugs();
    const childSlugs = await getAllChildSlugs();

    // Combine both - the route will determine which type to load based on hub
    const allSlugs = Array.from(new Set([...parentSlugs, ...childSlugs]));

    return allSlugs.map((slug) => ({
        parent: slug,
    }));
}

export default async function ParentOrChildPage({ params }: PageProps) {
    const hubSlug = params.hub;
    const slug = params.parent;

    // For 2-level hubs (dermatological, urogenital, etc.), try to load as child page
    if (isTwoLevelHub(hubSlug)) {
        const childData = await getChildPageData(slug);

        if (childData) {
            return <ChildPageTemplate data={childData} hubSlug={hubSlug} parentSlug={hubSlug} />;
        }
    }

    // For 3-level hubs (cardiovascular) or fallback, try to load as parent page
    const parentData = await getParentPageData(slug);

    if (parentData) {
        return <ParentPageTemplate data={parentData} hubSlug={hubSlug} />;
    }

    // Fallback: Show placeholder page
    const hubTitle = hubSlug.replace(/-/g, ' ');
    const pageTitle = slug.replace(/-/g, ' ');

    return (
        <div className="flex flex-col">
            {/* Breadcrumb */}
            <div className="bg-navy border-b border-white/10 py-4">
                <Container>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Link href="/areas-of-expertise" className="hover:text-teal transition-colors">Areas of Expertise</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href={`/areas-of-expertise/${hubSlug}`} className="hover:text-teal transition-colors capitalize">{hubTitle}</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white font-medium capitalize">{pageTitle}</span>
                    </div>
                </Container>
            </div>
            <Section className="bg-navy text-white min-h-[40vh] flex items-center">
                <Container className="text-center">
                    <H1 className="mb-6 capitalize">{pageTitle}</H1>
                    <Paragraph className="text-gray-200 max-w-3xl mx-auto mb-8 text-xl">
                        Specialized preclinical testing for {pageTitle.toLowerCase()} applications.
                    </Paragraph>
                </Container>
            </Section>
            <Section background="white">
                <Container className="text-center">
                    <H2 className="mb-6">Content Coming Soon</H2>
                    <Paragraph className="mb-8 max-w-2xl mx-auto">
                        We are developing detailed content for our {pageTitle.toLowerCase()} capabilities. Contact us to learn more.
                    </Paragraph>
                    <Button size="lg" href="/contact">Contact Us</Button>
                </Container>
            </Section>
        </div>
    );
}
