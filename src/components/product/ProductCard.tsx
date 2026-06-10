import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link className="product-visual" href={`/san-pham/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 900px) 100vw, 33vw"
        />
        <span>{product.volume}</span>
      </Link>
      <div className="product-card-body">
        <p className="eyebrow">{product.category}</p>
        <h3>
          <Link href={`/san-pham/${product.slug}`}>{product.title}</Link>
        </h3>
        <p>{product.description}</p>
      </div>
      <div className="product-card-footer">
        <div className="product-meta">
          <span>{product.volume}</span>
          <span>{product.fragrance}</span>
        </div>
        <Link className="product-more" href={`/san-pham/${product.slug}`}>
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}
