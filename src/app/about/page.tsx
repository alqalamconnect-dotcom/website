import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Al-Qalam"
        description="Our story, values, approach and the team behind the initiative."
      />
      <Container className="py-16">
        <p className="text-ink-700">
          Detailed content coming soon. This page will cover the founding story,
          core values (Knowledge, Creativity, Inclusion, Humanity), educational
          philosophy and team information.
        </p>
      </Container>
    </main>
  );
}