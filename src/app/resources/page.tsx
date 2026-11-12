import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Resources",
};
import { resources } from "@/data/resources";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ResourceCard from "@/components/ui/ResourceCard";

export default function ResourcesPage() {
  return (
    <main>
      <PageHeader
        title="Learning Resources"
        description="Downloadable worksheets, visual supports, activity packs, lesson plans and guides for parents, educators and learners."
      />
      <Container className="py-12">
        {/* Demo Notice */}
        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <strong>Prototype notice:</strong> These resources are demonstration
            items. Real downloadable files will be added after review by
            qualified educators and specialists.
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className="mt-12 rounded-xl border border-dashed border-ink-200 p-8 text-center">
          <h3 className="font-display text-lg font-bold text-ink-900">
            More Resources Coming Soon
          </h3>
          <p className="mt-2 text-sm text-ink-700">
            We are developing interactive learning activities, multilingual
            content and self-paced learning modules. Sign up for updates or{" "}
            <a
              href="/contact"
              className="font-medium text-primary-500 hover:text-primary-600"
            >
              contact us
            </a>{" "}
            to suggest a resource you need.
          </p>
        </div>
      </Container>
    </main>
  );
}