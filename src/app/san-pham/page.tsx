import { CategoryFilter } from "@/components/product/CategoryFilter";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionTitle } from "@/components/common/SectionTitle";
import { getAllProducts } from "@/lib/products";

export const metadata = {
  title: "San pham",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="section page-intro">
      <SectionTitle
        eyebrow="Danh muc"
        title="San pham nuoc giat xa Dunix8"
        description="Loc nhanh theo dong san pham va chuyen den trang chi tiet de xem loi ich, mui huong va thong tin ban hang."
      />
      <CategoryFilter />
      <ProductGrid products={products} />
    </section>
  );
}
