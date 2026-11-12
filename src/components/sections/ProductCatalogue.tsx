"use client";

import { useState } from "react";
import { Product, ProductCategory, categoryLabels } from "@/types/product";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

interface ProductCatalogueProps {
  products: Product[];
}

const allCategories: ProductCategory[] = [
  "social-emotional",
  "cognitive-language",
  "sensory",
  "gross-motor",
  "fine-motor",
  "communication",
  "stem-creative",
];

export default function ProductCatalogue({ products }: ProductCatalogueProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(
    "all"
  );

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "bg-primary-500 text-white"
              : "bg-ink-50 text-ink-700 hover:bg-ink-100"
          )}
        >
          All ({products.length})
        </button>
        {allCategories.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === cat
                  ? "bg-primary-500 text-white"
                  : "bg-ink-50 text-ink-700 hover:bg-ink-100"
              )}
            >
              {categoryLabels[cat]} ({count})
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-xl border border-dashed border-ink-200 py-16 text-center">
          <p className="text-ink-700">
            No products in this category yet. Check back soon.
          </p>
        </div>
      )}
    </div>
  );
}