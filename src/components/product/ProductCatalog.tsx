"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { ProductGrid } from "@/components/product/ProductGrid";
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
      <div className="product-list-hero">
        <div>
          <p className="eyebrow">Sản phẩm Dunix8</p>
          <h1>{selectedCategory?.name ?? "Sản phẩm Dunix8"}</h1>
          <p>
            {selectedCategory?.description ??
              "Giải pháp làm sạch toàn diện cho mọi gia đình Việt, từ giặt xả đến chăm sóc bếp và sàn nhà."}
          </p>
        </div>
        <div className="product-list-packshots" aria-hidden="true">
          <Image src="/images/products/nuoc_giat_dunix8_hygien_3kg.jpg" alt="" width={220} height={280} />
          <Image src="/images/products/nuoc_giat_dunix8_huong_154_3kg.jpg" alt="" width={210} height={270} />
          <Image src="/images/products/rua_chen_huong_que_3.6kg.jpg" alt="" width={210} height={270} />
        </div>
      </div>
      <CategoryFilter activeSlug={selectedCategory?.slug} />
      <ProductGrid products={visibleProducts} />
    </>
  );
}
