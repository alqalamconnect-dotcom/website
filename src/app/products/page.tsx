import { products } from "@/data/products";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductCatalogue from "@/components/sections/ProductCatalogue";

export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        title="Products"
        description="Research-informed educational, developmental and sensory resources. Each product is designed with evidence, tested with users and documented transparently."
      />
      <Container className="py-12">
        {/* Demo Notice */}
        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <strong>Prototype notice:</strong> All products shown are
            demonstration items. Real products, pricing, availability and
            documentation will be added after research, testing and manufacturing
            partnerships are confirmed.
          </p>
        </div>

        <ProductCatalogue products={products} />
      </Container>
    </main>
  );
}