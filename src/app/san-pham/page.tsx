import { CategoryFilter } from "@/components/product/CategoryFilter";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionTitle } from "@/components/common/SectionTitle";
import { getAllProducts } from "@/lib/products";

export const metadata = {
  title: "Sản phẩm",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="section page-intro products-page">
      <SectionTitle
        eyebrow="Danh mục"
        title="Sản phẩm Dunix8"
        description="Lọc nhanh theo dòng sản phẩm và chuyển đến trang chi tiết để xem lợi ích, mùi hương và thông tin sử dụng."
      />
      <CategoryFilter />
      <ProductGrid products={products} />
    </section>
  );
}
