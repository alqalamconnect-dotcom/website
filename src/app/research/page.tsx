import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function ResearchPage() {
  return (
    <main>
      <PageHeader
        title="Research & Innovation"
        description="From real-world needs to evidence-informed, tested solutions."
      />
      <Container className="py-16">
        <p className="text-ink-700">
          Research content coming soon. This page will showcase the
          research-to-product lifecycle, evidence summaries, prototypes and
          academic collaborations.
        </p>
      </Container>
    </main>
  );
}