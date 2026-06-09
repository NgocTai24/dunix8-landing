import { categories } from "@/data/categories";
import { getMarkdownFiles, markdownToHtml, readMarkdownFile } from "@/lib/markdown";
import type { Product } from "@/types/product";

const productDirectory = "products";

type ProductFrontmatter = Omit<Product, "slug" | "content">;

export function getAllProducts() {
  return getMarkdownFiles(productDirectory)
    .map((file) => readMarkdownFile<ProductFrontmatter>(productDirectory, file))
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getFeaturedProducts() {
  return getAllProducts().filter((product) => product.featured);
}

export function getProductsByCategory(categorySlug: string) {
  return getAllProducts().filter((product) => product.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string) {
  return getAllProducts().find((product) => product.slug === slug);
}

export async function getProductWithHtml(slug: string) {
  const product = getProductBySlug(slug);

  if (!product) {
    return undefined;
  }

  return {
    ...product,
    content: await markdownToHtml(product.content),
  };
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
