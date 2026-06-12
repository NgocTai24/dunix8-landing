import { Suspense } from "react";
import { ProductCatalog } from "@/components/product/ProductCatalog";
import { getAllProducts } from "@/lib/products";

export const metadata = {
  title: "Sản phẩm",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="section page-intro products-page">
      <Suspense fallback={null}>
        <ProductCatalog products={products} />
      </Suspense>
    </section>
  );
}
