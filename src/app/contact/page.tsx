import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="Get in touch for enquiries, feedback or partnership opportunities."
      />
      <Container className="py-16">
        <p className="text-ink-700">
          Contact form coming soon. This page will include an enquiry form,
          partnership information and response times.
        </p>
      </Container>
    </main>
  );
}