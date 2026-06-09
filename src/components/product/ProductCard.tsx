import Link from "next/link";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link className="product-visual" href={`/san-pham/${product.slug}`}>
        <span>{product.volume}</span>
      </Link>
      <div>
        <p className="eyebrow">{product.category}</p>
        <h3>
          <Link href={`/san-pham/${product.slug}`}>{product.title}</Link>
        </h3>
        <p>{product.description}</p>
      </div>
      <div className="product-meta">
        <span>{product.fragrance}</span>
        <strong>{product.price}</strong>
      </div>
    </article>
  );
}
