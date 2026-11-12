import Link from "next/link";
import { Product, categoryLabels } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const statusStyles = {
  available: "bg-green-100 text-green-700",
  "coming-soon": "bg-amber-100 text-amber-700",
  prototype: "bg-blue-100 text-blue-700",
};

const statusLabels = {
  available: "Available",
  "coming-soon": "Coming Soon",
  prototype: "Prototype",
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink-100 bg-white transition-shadow hover:shadow-md"
    >
      {/* Image Placeholder */}
      <div className="flex h-48 items-center justify-center bg-ink-50">
        <span className="text-sm text-ink-700/50">Product Image</span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-600">
            {categoryLabels[product.category]}
          </span>
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[product.stockStatus]}`}
          >
            {statusLabels[product.stockStatus]}
          </span>
          {product.isDemo && (
            <span className="rounded-full bg-ink-100 px-2.5 py-0.5 text-xs font-medium text-ink-700">
              DEMO
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="mt-3 font-display text-lg font-bold text-ink-900 group-hover:text-primary-500">
          {product.name}
        </h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-700">
          {product.tagline}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-ink-50 pt-3">
          <span className="text-sm text-ink-700">{product.ageRange}</span>
          <span className="text-lg font-bold text-primary-500">
            {product.price}
          </span>
        </div>
      </div>
    </Link>
  );
}