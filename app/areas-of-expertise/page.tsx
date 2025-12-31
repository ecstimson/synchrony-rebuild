import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { H1, H2, Paragraph } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

const hubs = [
    {
        title: "Cardiovascular",
        slug: "cardiovascular",
        description: "Heart failure, structural heart, neurovascular, and more.",
        heroHeadline: "Cardiovascular Research",
        heroDescription: "Advanced models for heart failure, structural heart, and vascular interventions."
    },
    {
        title: "Dermatological",
        slug: "dermatological",
        description: "Wound healing and aesthetics research models.",
        heroHeadline: "Dermatological Studies",
        heroDescription: "Specialized protocols for wound healing and aesthetic device testing."
    },
    {
        title: "Urogenital",
        slug: "urogenital",
        description: "Renal transplantation, stone retrieval, and prosthetic treatments.",
        heroHeadline: "Urogenital Research",
        heroDescription: "Comprehensive solutions for renal and urological device validation."
    },
    {
        title: "Gastrointestinal",
        slug: "gastrointestinal",
        description: "Bariatric therapies, robotics, and sealants.",
        heroHeadline: "Gastrointestinal Devices",
        heroDescription: "Testing platforms for bariatric, endoscopic, and robotic GI procedures."
    },
    {
        title: "Respiratory",
        slug: "respiratory",
        description: "COPD therapies and lung lobe sealants.",
        heroHeadline: "Respiratory Models",
        heroDescription: "Interventional pulmonary protocols including COPD and sealant technologies."
    },
    {
        title: "Neurological",
        slug: "neurological",
        description: "Shunts, dural sealants, and spinal nerve stimulation.",
        heroHeadline: "Neurological Science",
        heroDescription: "CNS safety studies and performance testing for neurosurgical devices."
    },
    {
        title: "Musculoskeletal",
        slug: "musculoskeletal",
        description: "Osteoarthritis models and bone healing studies.",
        heroHeadline: "Musculoskeletal Research",
        heroDescription: "Orthopedic models for bone healing, regeneration, and joint repair."
    }
];

export default function AreasOfExpertisePage() {
    return (
        <div className="bg-ghost">
            {/* Standard Hero Section */}
            <Section className="bg-white">
                <Container className="text-center max-w-4xl">
                    <H1 className="mb-6">Preclinical Services</H1>
                    <Paragraph className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Comprehensive preclinical testing services across cardiovascular, neurovascular, peripheral vascular, and surgical robotics applications.
                    </Paragraph>
                </Container>
            </Section>

            {/* Hubs Grid */}
            <Section className="bg-ghost">
                <Container>
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <H2 className="mb-4">Core Study Areas</H2>
                        <Paragraph className="text-gray-600">
                            Decades of expertise across the full spectrum of medical device innovation.
                        </Paragraph>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hubs.map((hub) => (
                            <Link
                                key={hub.slug}
                                href={`/areas-of-expertise/${hub.slug}`}
                            >
                                <Card className="h-full hover:border-teal transition-all group">
                                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                                        {hub.heroHeadline}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {hub.heroDescription}
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-teal uppercase tracking-widest mt-auto">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Standard CTA Section */}
            <Section className="bg-white">
                <Container className="max-w-4xl text-center">
                    <H2 className="mb-6">Start Your Study</H2>
                    <Paragraph className="text-xl mb-12">
                        Get expert guidance on your study design from the team with decades of specialized testing experience.
                    </Paragraph>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" href="/contact">
                            Schedule Your Pre-Study Consultation
                        </Button>
                        <Button variant="outline" size="lg" href="/facility">
                            Explore Our Facility
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
