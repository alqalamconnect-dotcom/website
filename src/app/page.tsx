import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
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
            resources, products and opportunities.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Explore Products
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

      {/* Quick Overview */}
      <section className="py-20">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-ink-900">
            What We Do
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Services",
                desc: "Guidance and resources for parents, teachers and learners.",
                href: "/services",
              },
              {
                title: "Products",
                desc: "Research-informed educational and developmental resources.",
                href: "/products",
              },
              {
                title: "Media",
                desc: "Engaging videos and content for curious young minds.",
                href: "/media",
              },
              {
                title: "Research",
                desc: "From real-world needs to tested, practical solutions.",
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
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}