"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionTitle } from "@/components/common/SectionTitle";
import { categories } from "@/data/categories";
import type { Product } from "@/types/product";

type ProductCatalogProps = {
  products: Product[];
};

export function ProductCatalog({ products }: ProductCatalogProps) {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category") ?? undefined;
  const selectedCategory = categories.find((category) => category.slug === categorySlug);

  const visibleProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }

    return products.filter((product) => product.categorySlug === selectedCategory.slug);
  }, [products, selectedCategory]);

  return (
    <>
      <SectionTitle
        eyebrow="Sản phẩm Dunix8"
        title={selectedCategory?.name ?? "Tất cả sản phẩm"}
        description={
          selectedCategory?.description ??
          "Lọc nhanh theo dòng sản phẩm và chuyển đến trang chi tiết để xem lợi ích, mùi hương và thông tin sử dụng."
        }
      />
      <CategoryFilter activeSlug={selectedCategory?.slug} />
      <ProductGrid products={visibleProducts} />
    </>
  );
}
