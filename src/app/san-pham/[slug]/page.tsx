import { notFound } from "next/navigation";
import { getAllProducts, getProductWithHtml } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductWithHtml(slug);

  return {
    title: product?.title ?? "San pham",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductWithHtml(slug);

  if (!product) {
    notFound();
  }

  return (
    <article className="detail-page">
      <div className="detail-hero">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="product-meta large">
            <span>{product.volume}</span>
            <strong>{product.price}</strong>
          </div>
        </div>
        <div className="hero-product compact" aria-hidden="true">
          <div className="bottle">
            <span>D8</span>
            <strong>{product.volume}</strong>
          </div>
        </div>
      </div>
      <ul className="benefit-list">
        {product.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <div className="prose" dangerouslySetInnerHTML={{ __html: product.content }} />
    </article>
  );
}
