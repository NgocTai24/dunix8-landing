import Link from "next/link";
import { NewsGrid } from "@/components/news/NewsGrid";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionTitle } from "@/components/common/SectionTitle";
import { site } from "@/data/site";
import { getLatestNews } from "@/lib/news";
import { getFeaturedProducts } from "@/lib/products";

const strengths = [
  "Cong nghe lam sach bot it, xa nhanh",
  "Huong thom diu cho khong gian song hien dai",
  "Bao bi lon, toi uu chi phi cho gia dinh",
];

export default function Home() {
  const products = getFeaturedProducts();
  const news = getLatestNews(3);

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Dunix8 laundry care</p>
          <h1>{site.name}</h1>
          <p>{site.tagline}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/san-pham">
              Xem san pham
            </Link>
            <Link className="button ghost" href="/lien-he">
              Nhan bao gia
            </Link>
          </div>
        </div>
        <div className="hero-product" aria-label="Minh hoa san pham Dunix8">
          <div className="bottle">
            <span>D8</span>
            <strong>3.8L</strong>
          </div>
          <div className="bubble one" />
          <div className="bubble two" />
        </div>
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="San pham noi bat"
          title="Giat sach, xa mem trong mot he sinh thai cham soc vai"
          description="Danh muc Dunix8 duoc viet san bang markdown, de cap nhat hinh anh, gia va noi dung SEO."
        />
        <ProductGrid products={products} />
      </section>

      <section className="feature-band">
        {strengths.map((item, index) => (
          <div key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionTitle
          eyebrow="Meo cham soc quan ao"
          title="Noi dung huu ich de tang niem tin va SEO"
        />
        <NewsGrid articles={news} />
      </section>
    </>
  );
}
