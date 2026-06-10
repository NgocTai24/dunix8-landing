import Image from "next/image";
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
    title: product?.title ?? "Sản phẩm",
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
    <article className="detail-page product-detail-page">
      <div className="detail-hero product-detail-hero">
        <div className="detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="product-meta large">
            <span>{product.volume}</span>
            <span>{product.fragrance}</span>
          </div>
        </div>
        <div className="detail-product-media">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
          />
        </div>
      </div>
      <section className="detail-content-grid">
        <aside className="detail-benefits">
          <h2>Lợi ích nổi bật</h2>
          <ul className="benefit-list">
            {product.benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </aside>
        <div className="prose" dangerouslySetInnerHTML={{ __html: product.content }} />
      </section>
    </article>
  );
}
