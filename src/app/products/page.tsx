import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        title="Products"
        description="Research-informed educational, developmental and sensory resources."
      />
      <Container className="py-16">
        <p className="text-ink-700">
          Product catalogue coming soon. This page will feature browsable
          categories including social-emotional learning, sensory exploration,
          fine-motor skills, STEM kits and more.
        </p>
      </Container>
    </main>
  );
}