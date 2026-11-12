import Link from "next/link";
import {
  BookOpen,
  Lightbulb,
  Users,
  Heart,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
} from "lucide-react";
import Container from "@/components/ui/Container";
import ValueCard from "@/components/ui/ValueCard";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-ink-50 py-24 sm:py-32">
        <Container className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
            Research. Create. Empower. Transform.
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold text-ink-900 sm:text-6xl lg:text-7xl">
            Writing Lives,
            <br />
            <span className="text-primary-500">Shaping Humanity.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
            Al-Qalam is an inclusive education, research, innovation and
            social-enterprise initiative transforming knowledge into accessible
            resources, products and meaningful opportunities for individuals and
            communities.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-800 transition-colors hover:bg-ink-50"
            >
              Learn More
            </Link>
          </div>
        </Container>
      </section>

      {/* ── What We Do ── */}
      <section className="py-20">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-ink-900">
            What We Do
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink-700">
            A connected ecosystem of services, products, media and research —
            not just a school, shop or platform.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Services",
                desc: "Guidance, workshops and instructional design for parents, teachers and learners.",
                href: "/services",
              },
              {
                title: "Products",
                desc: "Research-informed educational, developmental and sensory resources.",
                href: "/products",
              },
              {
                title: "Media",
                desc: "Engaging videos and content that encourage curiosity and creativity.",
                href: "/media",
              },
              {
                title: "Research",
                desc: "Moving from real-world needs and evidence to tested, practical solutions.",
                href: "/research",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-ink-100 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-xl font-bold text-primary-500 group-hover:text-primary-600">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-500">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-ink-50 py-20">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-ink-900">
            Our Core Values
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink-700">
            Every decision we make is guided by these principles.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </Container>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-ink-900">
                From Beneficiaries to Contributors
              </h2>
              <p className="mt-4 leading-relaxed text-ink-700">
                A central principle of Al-Qalam is that people who experience a
                challenge should not be treated only as recipients of support.
                They should also have opportunities to participate as
                co-designers, testers, creators, contributors and
                decision-makers.
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">
                We connect educators, researchers, parents, learners, technology
                professionals, artists, craftspeople and manufacturers to close
                the gap between research, lived experience and practical
                solutions.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-500 transition-colors hover:text-primary-600"
              >
                Read our full story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <Sparkles size={20} />,
                  label: "Co-design",
                  text: "Users shape the products and services from the start.",
                },
                {
                  icon: <ShieldCheck size={20} />,
                  label: "Evidence-based",
                  text: "Grounded in research, not assumptions or hype.",
                },
                {
                  icon: <Globe size={20} />,
                  label: "Accessible",
                  text: "Designed for diverse abilities, languages and contexts.",
                },
                {
                  icon: <Heart size={20} />,
                  label: "Sustainable",
                  text: "Built to create lasting social value, InshaAllah.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-ink-100 bg-ink-50 p-4"
                >
                  <div className="text-primary-500">{item.icon}</div>
                  <h3 className="mt-2 text-sm font-bold text-ink-900">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary-500 py-16">
        <Container className="text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Be Part of the Journey
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-primary-100">
            Whether you are a parent, educator, researcher, creator or
            organisation — there is a place for you at Al-Qalam.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 transition-colors hover:bg-primary-50"
            >
              Partner With Us
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-primary-300 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Explore Services
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}