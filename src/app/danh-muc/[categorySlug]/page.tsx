import { notFound } from "next/navigation";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionTitle } from "@/components/common/SectionTitle";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/products";
import { categories } from "@/data/categories";

type CategoryPageProps = {
  params: Promise<{ categorySlug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ categorySlug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  return {
    title: category?.name ?? "Danh muc",
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(categorySlug);

  return (
    <section className="section page-intro">
      <SectionTitle
        eyebrow="Danh muc san pham"
        title={category.name}
        description={category.description}
      />
      <CategoryFilter activeSlug={category.slug} />
      <ProductGrid products={products} />
    </section>
  );
}
