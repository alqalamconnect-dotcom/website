import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Services"
        description="Educational guidance and resources for parents, teachers and learners."
      />
      <Container className="py-16">
        <p className="text-ink-700">
          Service details coming soon. This page will describe offerings for
          parents, educators and learners including workshops, instructional
          design and learning support.
        </p>
      </Container>
    </main>
  );
}