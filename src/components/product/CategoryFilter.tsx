import Link from "next/link";
import { categories } from "@/data/categories";

type CategoryFilterProps = {
  activeSlug?: string;
};

export function CategoryFilter({ activeSlug }: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <Link className={!activeSlug ? "active" : ""} href="/san-pham">
        Tất cả
      </Link>
      {categories.map((category) => (
        <Link
          className={activeSlug === category.slug ? "active" : ""}
          href={`/san-pham?category=${category.slug}`}
          key={category.slug}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
