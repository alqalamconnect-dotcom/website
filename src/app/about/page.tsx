import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

import Link from "next/link";
import {
  BookOpen,
  Lightbulb,
  Users,
  Heart,
  ShieldCheck,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ValueCard from "@/components/ui/ValueCard";
import AudienceCard from "@/components/ui/AudienceCard";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Al-Qalam"
        description="Our vision, mission, values and the need we seek to address."
      />

      {/* ── Vision & Mission ── */}
      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-500">
                Vision
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-800">
                To create an inclusive world where every individual,
                irrespective of ability, background or circumstance, has the
                opportunity to learn, create, contribute and flourish.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-500">
                Mission
              </h2>
              <p className="mt-3 leading-relaxed text-ink-800">
                To transform interdisciplinary research into accessible
                educational innovations, products and services that promote
                holistic development, empower underserved communities and create
                meaningful opportunities for learning, participation,
                independence and social inclusion.
              </p>
            </div>
          </div>
          <div className="mt-12 rounded-xl bg-accent-500/10 p-6 text-center">
            <p className="font-display text-xl font-bold text-accent-600">
              Knowledge into action. Innovation into opportunity. Service into
              lasting impact.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-ink-50 py-16">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-ink-900">
            Core Values
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<BookOpen size={24} />}
              title="Knowledge"
              description="Respect evidence, research, professional expertise and continuous learning."
            />
            <ValueCard
              icon={<Lightbulb size={24} />}
              title="Creativity"
              description="Encourage imagination, experimentation, making and expression."
            />
            <ValueCard
              icon={<Users size={24} />}
              title="Inclusion"
              description="Design with people, recognise individual differences and reduce barriers."
            />
            <ValueCard
              icon={<Heart size={24} />}
              title="Humanity"
              description="Protect dignity, agency, participation and meaningful contribution."
            />
            <ValueCard
              icon={<ShieldCheck size={24} />}
              title="Responsibility"
              description="Be transparent about evidence, safety, limitations and impact."
            />
            <ValueCard
              icon={<Leaf size={24} />}
              title="Sustainability"
              description="Develop financially and operationally viable work that can continue to benefit people."
            />
          </div>
        </Container>
      </section>

      {/* ── The Need ── */}
      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink-900">
            The Need We Seek to Address
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-ink-700">
            <p>
              People do not all learn, communicate, move, experience or
              participate in the same way. Some learners benefit from changes to
              teaching methods or classroom environments; others may need
              additional specialised instruction, assistive resources or more
              intensive support.
            </p>
            <p>
              Families and educators may struggle to find suitable, accessible
              and affordable resources. Educational products can be disconnected
              from real user needs, while useful ideas may never progress from
              research or a handmade prototype into a tested, well-documented
              product.
            </p>
            <p>
              People with disabilities and individuals from underserved
              communities may also have limited opportunities to participate in
              design, production and paid work.
            </p>
            <p className="font-semibold text-ink-900">
              Al-Qalam seeks to help close these gaps by connecting research,
              lived experience, educational practice, product development and
              inclusive opportunity.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Who We Serve ── */}
      <section className="bg-ink-50 py-16">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-ink-900">
            Who We Aim to Serve and Involve
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <AudienceCard
              number="1"
              title="Parents & Caregivers"
              description="Families seeking guidance, resources and practical support for children's learning and development."
            />
            <AudienceCard
              number="2"
              title="Teachers & Educators"
              description="Mainstream teachers, special educators and learning-support professionals."
            />
            <AudienceCard
              number="3"
              title="Children & Learners"
              description="Young people with varied abilities, interests, learning preferences and support needs."
            />
            <AudienceCard
              number="4"
              title="Neurodivergent Individuals & People with Disabilities"
              description="As users, collaborators, co-designers, testers and contributors — not only as recipients."
            />
            <AudienceCard
              number="5"
              title="Researchers & Specialists"
              description="Across education, psychology, cognitive science, occupational therapy, speech and language, design and technology."
            />
            <AudienceCard
              number="6"
              title="Artists, Craftspeople & Manufacturers"
              description="Who help create, assemble, test and produce educational and developmental products."
            />
            <AudienceCard
              number="7"
              title="Educational Institutions"
              description="Schools, learning centres, colleges and organisations seeking inclusive resources and partnerships."
            />
            <AudienceCard
              number="8"
              title="Underserved Communities"
              description="People with talent and interest but limited access to platforms, training or opportunities."
            />
          </div>
        </Container>
      </section>

      {/* ── Educational Philosophy ── */}
      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-ink-900">
            Educational Philosophy
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Al-Qalam&apos;s approach is person-centred, adaptive and inclusive.
            We consider the interaction between an individual&apos;s strengths
            and needs and their physical, social, cultural and instructional
            environment.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Medical",
                text: "Recognises health conditions and the role of appropriate assessment and specialist intervention.",
              },
              {
                title: "Social",
                text: "Recognises that inaccessible environments, stigma and rigid systems create disabling barriers.",
              },
              {
                title: "Ecological",
                text: "Examines how the learner interacts with family, peers, teaching methods and wider systems.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-ink-100 bg-white p-5"
              >
                <h3 className="font-display text-lg font-bold text-primary-500">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink-700">
            These are not rigid labels or a ranking of learners. A person&apos;s
            support needs may change over time. Decisions should be
            individualised, informed by families and learners, and made with
            qualified professionals where necessary.
          </p>
        </Container>
      </section>

      {/* ── Sadaqah Jariyah ── */}
      <section className="bg-primary-50 py-16">
        <Container className="max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-primary-600">
            A Lasting Contribution
          </h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            The deeper purpose of Al-Qalam is not limited to commercial success.
            It seeks to create knowledge, resources, products and opportunities
            that continue to benefit people over time — a form of{" "}
            <strong className="text-ink-900">Sadaqah Jariyah</strong>, an
            ongoing contribution whose benefits endure, InshaAllah.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Join the Journey <ArrowRight size={16} />
          </Link>
        </Container>
      </section>
    </main>
  );
}