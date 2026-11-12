import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Innovation",
};
import { researchThemes } from "@/data/research";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import LifecycleTimeline from "@/components/sections/LifecycleTimeline";
import DocumentationStandard from "@/components/sections/DocumentationStandard";

const statusStyles = {
  active: "bg-green-100 text-green-700",
  planned: "bg-blue-100 text-blue-700",
  completed: "bg-ink-100 text-ink-700",
};

const statusLabels = {
  active: "Active",
  planned: "Planned",
  completed: "Completed",
};

export default function ResearchPage() {
  return (
    <main>
      <PageHeader
        title="Research & Innovation"
        description="How we move from real-world needs and academic evidence to tested, practical solutions — and why every product we make is documented transparently."
      />

      {/* ── Our Commitment ── */}
      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink-900">
            Evidence Over Hype
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink-700">
            <p>
              Al-Qalam distinguishes between established evidence, emerging
              research, design hypotheses and untested ideas. We do not claim
              that our products diagnose, treat or cure any condition.
            </p>
            <p>
              Every product is grounded in a review of relevant literature,
              professional guidance and real-world input from the people who will
              use it. Where evidence is limited, we say so clearly.
            </p>
            <p>
              Intended users — including neurodivergent individuals, people with
              disabilities and families from underserved communities — are
              involved throughout the development lifecycle, not only at the
              final testing stage.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Lifecycle ── */}
      <section className="bg-ink-50 py-16">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-ink-900">
            The Research-to-Product Lifecycle
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-700">
            From identifying a real need to gathering feedback after launch,
            every step is documented, participatory and iterative.
          </p>
          <div className="mt-12">
            <LifecycleTimeline />
          </div>
        </Container>
      </section>

      {/* ── Documentation Standard ── */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <h2 className="text-center font-display text-3xl font-bold text-ink-900">
            Transparency by Design
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-ink-700">
            We believe parents, educators and professionals deserve to know
            exactly what a product is designed to do, what evidence supports it,
            and what its limitations are.
          </p>
          <div className="mt-10">
            <DocumentationStandard />
          </div>
        </Container>
      </section>

      {/* ── Current Research Themes ── */}
      <section className="bg-ink-50 py-16">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-ink-900">
            Current Research Themes
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink-700">
            These are the areas we are actively exploring. Each theme connects
            directly to product development and user needs.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {researchThemes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-xl border border-ink-100 bg-white p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {theme.title}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[theme.status]}`}
                  >
                    {statusLabels[theme.status]}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  {theme.description}
                </p>
                <p className="mt-3 text-xs text-ink-700/60">
                  <strong>Collaborators:</strong> {theme.collaborators}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Co-Design Principles ── */}
      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink-900">
            Co-Design, Not Assumption
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink-700">
            <p>
              Al-Qalam involves intended users and families meaningfully in
              product development. This is not tokenistic consultation — it is
              genuine shared decision-making.
            </p>
            <p>
              Contributors with diverse abilities and from underserved
              backgrounds participate in identifying needs, shaping ideas,
              testing prototypes, creating content and providing quality
              feedback. Their contributions are recognised, accessible
              participation arrangements are provided, and compensation is
              agreed where appropriate.
            </p>
            <p>
              We use respectful language and represent people as individuals, not
              diagnoses. Accessibility is considered across physical, sensory,
              communication, cognitive and digital dimensions from the earliest
              design stage.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary-500 py-16">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Collaborate With Us
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-primary-100">
            Are you a researcher, educator, therapist, designer or community
            organisation? We would love to explore how we can work together.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50"
          >
            Get in Touch
          </a>
        </Container>
      </section>
    </main>
  );
}