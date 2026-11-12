import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function ResourcesPage() {
  return (
    <main>
      <PageHeader
        title="Learning Resources"
        description="Downloadable worksheets, guides, activity packs and educational materials."
      />
      <Container className="py-16">
        <p className="text-ink-700">
          Resource library coming soon. This page will host downloadable
          worksheets, visual supports, lesson plans and parent/educator guides.
        </p>
      </Container>
    </main>
  );
}