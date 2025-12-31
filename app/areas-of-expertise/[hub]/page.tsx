import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { H1, H2, Paragraph } from "@/components/ui/Typography";
import { getHubPageData, getAllHubSlugs } from "@/lib/content-loader";
import { HubPageTemplate } from "@/components/templates/HubPageTemplate";

interface PageProps {
    params: {
        hub: string;
    };
}

// Generate static params for all hubs
export async function generateStaticParams() {
    const slugs = await getAllHubSlugs();
    return slugs.map((slug) => ({
        hub: slug,
    }));
}

export default async function HubPage({ params }: PageProps) {
    const data = await getHubPageData(params.hub);

    // If no JSON data exists, show a placeholder page instead of 404
    if (!data) {
        const hubTitle = params.hub.replace(/-/g, ' ');
        return (
            <div className="flex flex-col">
                <Section className="bg-navy text-white min-h-[50vh] flex items-center">
                    <Container className="text-center">
                        <H1 className="mb-6 capitalize">{hubTitle}</H1>
                        <Paragraph className="text-gray-200 max-w-3xl mx-auto mb-8 text-xl">
                            Discover our specialized preclinical expertise in {hubTitle.toLowerCase()}.
                        </Paragraph>
                    </Container>
                </Section>
                <Section background="white">
                    <Container className="text-center">
                        <H2 className="mb-6">Content Coming Soon</H2>
                        <Paragraph className="mb-8 max-w-2xl mx-auto">
                            We are currently building out our {hubTitle.toLowerCase()} capabilities page. Contact us to discuss your project requirements.
                        </Paragraph>
                        <Button size="lg" href="/contact">Contact Us</Button>
                    </Container>
                </Section>
            </div>
        );
    }

    return <HubPageTemplate data={data} />;
}
