import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProducts, getProductWithHtml } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

const featureBadges = ["Công nghệ 6X", "Lưu hương 24h", "Dịu nhẹ da tay", "Thân thiện môi trường"];

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
      <div className="breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>›</span>
        <Link href="/san-pham">Sản phẩm</Link>
        <span>›</span>
        <span>{product.title}</span>
      </div>

      <div className="detail-hero product-detail-hero">
        <div className="detail-product-media">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="product-meta large">
            <span>{product.volume}</span>
            <span>{product.fragrance}</span>
          </div>
          <Link className="button primary" href="/lien-he">
            Tư vấn ngay
          </Link>
        </div>
      </div>

      <section className="detail-feature-strip">
        {featureBadges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </section>

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
