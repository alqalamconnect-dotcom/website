import Container from "@/components/ui/Container";

interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-ink-50 py-16" aria-labelledby="page-title">
      <Container>
        <h1
          id="page-title"
          className="font-display text-4xl font-bold text-ink-900 sm:text-5xl"
        >
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-700">{description}</p>
      </Container>
    </section>
  );
}