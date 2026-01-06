import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { H1, H2, Paragraph } from "@/components/ui/Typography";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Using Legacy Content & Picsum Image */}
      <section className="relative min-h-[80vh] flex items-center justify-start overflow-hidden bg-navy">
        {/* Background - keeping picsum as requested */}
        <Image
          src="https://picsum.photos/1920/1080?random=1"
          alt="Synchrony Labs Hero"
          fill
          className="object-cover opacity-50 mix-blend-overlay"
          priority
        />
        <Container className="relative z-10">
          <H1 className="text-white mb-6 text-5xl md:text-7xl text-left">
            Specialized Cardiovascular <br /> Preclinical Research
          </H1>
          <Paragraph className="text-gray-200 max-w-3xl mb-10 text-xl leading-relaxed text-left">
            Four decades of GLP expertise advancing structural heart, neurovascular, and peripheral vascular innovation. Expert preclinical testing services for medical device development.
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" href="/areas-of-expertise">Explore Services</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-navy" href="/facility">View Facility</Button>
          </div>
        </Container>
      </section>

      {/* Services Section - First 3 Core Study Areas */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <H2 className="mb-4">Our Services</H2>
            <Paragraph className="max-w-2xl mx-auto">
              Comprehensive preclinical testing across multiple disciplines.
            </Paragraph>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Cardiovascular</h3>
              <p className="text-gray-600 mb-6">
                From TAVR valves and structural heart interventions to peripheral stents and novel combination therapies. Our GLP-compliant protocols are designed to accelerate your path.
              </p>
              <Button variant="link" href="/areas-of-expertise/cardiovascular">Cardiovascular Testing &rarr;</Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Dermatological</h3>
              <p className="text-gray-600 mb-6">
                Specialized protocols for wound healing and aesthetic device testing. Comprehensive evaluation of closure devices, injectable fillers, and energy-based platforms.
              </p>
              <Button variant="link" href="/areas-of-expertise/dermatological">Dermatological Testing &rarr;</Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Urogenital</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive solutions for renal and urological device validation. Testing for transplantation devices, prosthetic treatments, and stone retrieval systems.
              </p>
              <Button variant="link" href="/areas-of-expertise/urogenital">Urogenital Testing &rarr;</Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Logos Strip - Full Width Carousel */}
      <Section background="ghost" className="py-12">
        <Paragraph className="text-center text-sm font-bold uppercase tracking-widest text-gray-500 mb-8 px-4">
          Trusted Standards & Accreditations
        </Paragraph>
        <div className="relative h-24 w-full overflow-hidden">
          <div className="animate-logo-carousel flex absolute left-0">
            {[
              { src: "/images/ticker/AAALAC-LOGO grey.png", alt: "AAALAC" },
              { src: "/images/ticker/NIH_2012_logo_arrow.svg.png", alt: "NIH" },
              { src: "/images/ticker/Logo_of_the_United_States_Department_of_Agriculture.svg.png", alt: "USDA" },
              { src: "/images/ticker/NABR-LOGO.png", alt: "NABR" },
              { src: "/images/ticker/AMERICAN-LOGO.png", alt: "American Association" },
            ].map((logo, i) => (
              <div key={i} className="relative h-20 w-56 flex-shrink-0 mx-20">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              { src: "/images/ticker/AAALAC-LOGO grey.png", alt: "AAALAC" },
              { src: "/images/ticker/NIH_2012_logo_arrow.svg.png", alt: "NIH" },
              { src: "/images/ticker/Logo_of_the_United_States_Department_of_Agriculture.svg.png", alt: "USDA" },
              { src: "/images/ticker/NABR-LOGO.png", alt: "NABR" },
              { src: "/images/ticker/AMERICAN-LOGO.png", alt: "American Association" },
            ].map((logo, i) => (
              <div key={`dup-${i}`} className="relative h-20 w-56 flex-shrink-0 mx-20">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section background="white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative min-h-[400px]">
              {/* Image placeholder - user said keep picsum for general images */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://picsum.photos/800/600?random=5"
                  alt="Capabilities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Paragraph className="text-teal font-bold uppercase tracking-widest mb-4 text-sm">
                World-Class Facilities
              </Paragraph>
              <H2 className="mb-6 text-4xl">State-of-the-art <br /> Lab Environments</H2>
              <Paragraph className="mb-8 text-lg">
                Our 20,000 sq. ft. facility is designed to replicate clinical environments, ensuring your device is tested under the most realistic conditions possible.
              </Paragraph>
              <ul className="space-y-4 mb-8">
                {[
                  "Dual Cath Labs with Philips Azurion Systems",
                  "Dedicated Surgical Operating Suites",
                  "Advanced Imaging (CT, Fluoroscopy, ICE)",
                  "AAALAC Accredited & GLP Compliant"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-teal" />
                    <span className="text-navy font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" href="/facility">Tour Our Facility</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="navy" className="text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-teal/10 skew-x-12 transform -translate-x-1/2" />
        <Container className="relative z-10 text-center">
          <H2 className="text-white mb-6">Ready to Start Your Study?</H2>
          <Paragraph className="text-gray-200 mb-10 max-w-2xl mx-auto text-lg">
            Partner with a team that treats your innovation with the precision it deserves.
          </Paragraph>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" href="/contact">Schedule Consultation</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-navy">Download Brochure</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
