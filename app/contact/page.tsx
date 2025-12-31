import { Container } from "@/components/layout/Container";
import { H1, Paragraph } from "@/components/ui/Typography";

export default function ContactPage() {
    return (
        <Container className="py-20">
            <H1>Contact Us</H1>
            <Paragraph>
                Get in touch with our team to discuss your study.
            </Paragraph>
        </Container>
    );
}
