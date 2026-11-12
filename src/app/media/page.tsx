import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function MediaPage() {
  return (
    <main>
      <PageHeader
        title="Al-Qalam Media"
        description="Engaging videos and content for curious young minds."
      />
      <Container className="py-16">
        <p className="text-ink-700">
          Media content coming soon. This page will feature video categories
          including science, storytelling, art, technology and emotional
          development.
        </p>
      </Container>
    </main>
  );
}