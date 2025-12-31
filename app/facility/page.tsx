"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { H1, H2, Paragraph } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Check, X } from "lucide-react";

const equipment = [
    {
        name: "GE Optima 330 Core Imaging System",
        image: "/images/equipment/GE OPTIMA 330 CORE IMAGING SYSTEM.jpg",
        features: [
            "High-resolution X-ray for orthopedic studies",
            "Fluoroscopic guidance during procedures",
            "Multiple positioning options for complete evaluation",
            "Digital enhancement for better visualization",
        ],
    },
    {
        name: "Siemens Somatom Definition Flash Eco",
        image: "/images/equipment/SIEMENS SOMATOM DEFINITION FLASH ECO.jpg",
        features: [
            "Resolution fine enough to catch submillimeter details",
            "Contrast studies showing blood flow and tissue response",
            "3D data that makes regulatory reviewers happy",
            "Long-term imaging showing integration and healing",
        ],
    },
    {
        name: "Philips CX50 Ultrasound",
        image: "/images/equipment/PHILIPS CX50 ULTRASOUND.jpg",
        features: [
            "Sharp cardiac visualization for structural heart studies",
            "Precise vascular access during complex procedures",
            "Continuous monitoring while devices deploy",
            "Follow-up imaging at scheduled intervals",
        ],
    },
    {
        name: "Stryker Laparoscopic Tower",
        image: "/images/equipment/STRYKER LAPAROSCOPIC TOWER.jpg",
        features: [
            "Ultra-clear imaging for exact device placement",
            "Built-in recording for training and validation",
            "Documentation from multiple angles for submissions",
            "Remote streaming for off-site monitoring",
        ],
    },
    {
        name: "GE Vivid E9 with XDClear Ultrasound",
        image: "/images/equipment/GE VIVID E9 WITH XDCLEAR ULTRASOUND.jpg",
        features: [
            "Doppler studies proving device performance",
            "Vessel analysis supporting biocompatibility studies",
            "Extended protocols showing long-term safety",
            "Quantitative data meeting regulatory requirements",
        ],
    },
    {
        name: "GE Innova 3100 Cardiovascular Imaging System",
        image: "/images/equipment/GE INNOVA 3100 CARDIOVASCULAR IMAGING SYSTEM.jpg",
        features: [
            "Advanced cardiovascular imaging capabilities",
            "High-resolution angiography for interventional procedures",
            "Real-time imaging during device deployment",
            "Comprehensive documentation for regulatory submissions",
        ],
    },
    {
        name: "Volcano S5 Imaging System",
        image: "/images/equipment/VOLCANO S5 IMAGING SYSTEM.jpg",
        features: [
            "Intravascular ultrasound (IVUS) imaging",
            "Precise vessel analysis and measurement",
            "Real-time guidance during procedures",
            "High-resolution imaging for device placement",
        ],
    },
    {
        name: "Stockert S3 Perfusion System",
        image: "/images/equipment/STOCKERT S3 PERFUSION SYSTEM.jpg",
        features: [
            "Cardiopulmonary bypass support",
            "Temperature-controlled perfusion",
            "Precise flow and pressure monitoring",
            "Essential for complex cardiovascular procedures",
        ],
    },
];

export default function FacilityPage() {
    const [selectedEquipment, setSelectedEquipment] = useState<typeof equipment[0] | null>(null);

    return (
        <div className="bg-ghost">
            {/* Standard Hero Section */}
            <Section className="bg-white">
                <Container className="text-center">
                    <H1 className="mb-6">Our Lab</H1>
                    <Paragraph className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
                        Synchrony Labs offers 3 ORs, advanced imaging, and fully equipped support spaces designed for high integrity preclinical research.
                    </Paragraph>
                    <Button size="lg" href="/contact">
                        Schedule Consultation
                    </Button>
                </Container>
            </Section>

            {/* Equipment Grid - Using Standard Cards */}
            <Section className="bg-ghost">
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {equipment.map((item, index) => (
                            <Card
                                key={index}
                                className="cursor-pointer hover:border-teal transition-all group"
                                onClick={() => setSelectedEquipment(item)}
                            >
                                <div className="aspect-[4/3] bg-white mb-6 relative overflow-hidden rounded-md border-b border-gray-100 p-6">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-4 text-navy group-hover:text-teal transition-colors">
                                    {item.name}
                                </h3>
                                <ul className="space-y-2">
                                    {item.features.slice(0, 2).map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-teal"></span>
                                            <span className="text-xs text-gray-600">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto text-center mt-16">
                        <H2 className="mb-6">The Tools Behind the Science</H2>
                        <div className="space-y-6 text-lg text-gray-600">
                            <p>
                                Walk into our facility and you&apos;ll immediately notice something different. Our three dedicated operating rooms provide unmatched versatility for diverse study protocols. Two cath labs handle interventional procedures while our surgical suite manages complex operations.
                            </p>
                            <p>
                                Each room comes equipped with complete GLP compliance. They meet every FDA standard, with monitoring systems for cardiovascular, orthopedic, and neurosurgical procedures.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-white">
                <Container className="max-w-5xl">
                    <div className="border border-gray-100 rounded-lg p-8 shadow-sm">
                        <H2 className="text-2xl md:text-3xl mb-6">Expertise Matched to Your Device Type</H2>
                        <ul className="space-y-4 mb-12 text-gray-700">
                            {[
                                { title: 'Cardiovascular Applications:', text: 'Complete evaluation from initial deployment through extended follow-up' },
                                { title: 'Orthopedic Solutions:', text: 'Imaging protocols supporting integration studies, stability assessment, and biocompatibility evaluation' },
                                { title: 'Neurological Devices:', text: 'Monitoring designed specifically for CNS safety and performance evaluation' },
                                { title: 'Regenerative Medicine:', text: 'Healing protocols for wound care and dermatology applications' },
                                { title: 'Combination Products:', text: 'Analysis capabilities for complex drug-device combinations' }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                                    <span>
                                        <strong>{item.title}</strong> {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <H2 className="text-2xl md:text-3xl mb-6">Standards You Can Count On</H2>
                        <p className="mb-8 leading-relaxed text-lg text-gray-700">
                            AAALAC International accreditation represents our commitment to ethical animal care. GLP compliance under 21 CFR Part 58 ensures every study meets regulatory expectations.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <Button size="lg" href="/contact">
                            Schedule Consultation
                        </Button>
                        <Button variant="outline" size="lg" href="/areas-of-expertise">
                            Explore Our Services
                        </Button>
                    </div>
                </Container>
            </Section>

            {/* Detail Modal */}
            {selectedEquipment && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4">
                    <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-2xl p-8">
                        <button
                            onClick={() => setSelectedEquipment(null)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-navy" />
                        </button>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="aspect-[4/3] bg-gray-100 rounded-md relative overflow-hidden">
                                <Image
                                    src={selectedEquipment.image}
                                    alt={selectedEquipment.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <H2 className="text-2xl mb-6">{selectedEquipment.name}</H2>
                                <ul className="space-y-4">
                                    {selectedEquipment.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-teal"></span>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedEquipment(null)} />
                </div>
            )}
        </div>
    );
}
