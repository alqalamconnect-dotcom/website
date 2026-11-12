import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { categoryLabels } from "@/types/product";
import Container from "@/components/ui/Container";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const statusLabels = {
    available: "Available",
    "coming-soon": "Coming Soon",
    prototype: "Prototype",
  };

  const statusStyles = {
    available: "bg-green-100 text-green-700",
    "coming-soon": "bg-amber-100 text-amber-700",
    prototype: "bg-blue-100 text-blue-700",
  };

  return (
    <main>
      <Container className="py-8">
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 transition-colors hover:text-primary-600"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </Container>

      <Container className="pb-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Image Placeholder */}
          <div className="flex h-80 items-center justify-center rounded-xl border border-ink-100 bg-ink-50 lg:h-[480px]">
            <span className="text-ink-700/50">Product Image</span>
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                {categoryLabels[product.category]}
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[product.stockStatus]}`}
              >
                {statusLabels[product.stockStatus]}
              </span>
              {product.isDemo && (
                <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-700">
                  DEMO
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-ink-700">{product.tagline}</p>

            {/* Price & Age */}
            <div className="mt-6 flex items-baseline gap-4">
              <span className="text-3xl font-bold text-primary-500">
                {product.price}
              </span>
              <span className="text-sm text-ink-700">
                Ages {product.ageRange}
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 leading-relaxed text-ink-700">
              {product.description}
            </p>

            {/* Skills */}
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
                Skills Supported
              </h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.skillsSupported.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              {product.stockStatus === "available" ? (
                <button className="rounded-lg bg-primary-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600">
                  Add to Cart
                </button>
              ) : (
                <button
                  disabled
                  className="cursor-not-allowed rounded-lg bg-ink-100 px-8 py-3 text-sm font-semibold text-ink-700"
                >
                  {product.stockStatus === "prototype"
                    ? "In Prototype Stage"
                    : "Coming Soon"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Information Sections */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Intended Users */}
          <section className="rounded-xl border border-ink-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">
              Intended Users
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              {product.intendedUsers}
            </p>
          </section>

          {/* Materials & Contents */}
          <section className="rounded-xl border border-ink-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">
              Materials & Contents
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              <strong>Materials:</strong> {product.materials}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              <strong>Contents:</strong> {product.contents}
            </p>
          </section>

          {/* Design Rationale */}
          <section className="rounded-xl border border-ink-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">
              Design Rationale
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              {product.designRationale}
            </p>
          </section>

          {/* Accessibility */}
          <section className="rounded-xl border border-ink-100 bg-white p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">
              Accessibility
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              {product.accessibilityNotes}
            </p>
          </section>

          {/* Safety */}
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="font-display text-lg font-bold text-amber-800">
              Safety Information
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-amber-700">
              {product.safetyNotes}
            </p>
          </section>

          {/* Limitations */}
          <section className="rounded-xl border border-ink-100 bg-ink-50 p-6">
            <h2 className="font-display text-lg font-bold text-ink-900">
              Limitations
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              {product.limitations}
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}