import Image from "next/image";
import Link from "next/link";
import { NewsGrid } from "@/components/news/NewsGrid";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionTitle } from "@/components/common/SectionTitle";
import { getLatestNews } from "@/lib/news";
import { getFeaturedProducts } from "@/lib/products";

const features = [
  { icon: "6X", title: "Công nghệ 6X", text: "Sạch sâu vượt trội" },
  { icon: "24H", title: "Lưu hương 24h", text: "Thơm lâu bền" },
  { icon: "✦", title: "Dịu nhẹ da tay", text: "An toàn cho da" },
  { icon: "♻", title: "Tiết kiệm chi phí", text: "Hiệu quả tối ưu" },
];

const categories = [
  { href: "/san-pham?category=nuoc-giat", image: "/images/products/nuoc_giat_dunix8_hygien_3kg.jpg", title: "Nước giặt" },
  { href: "/san-pham?category=nuoc-xa", image: "/images/products/nuoc_giat_dunix8_huong_154_3kg.jpg", title: "Nước xả" },
  { href: "/san-pham?category=nuoc-rua-chen", image: "/images/products/rua_chen_huong_que_3.6kg.jpg", title: "Rửa chén" },
  { href: "/san-pham?category=nuoc-lau-san", image: "/images/products/lau_san_sa_chanh_dunix8_3_6kg.jpg", title: "Lau sàn" },
  { href: "/san-pham?category=nuoc-tay-toilet", image: "/images/products/tay_toilet_karabi_1kg.jpg", title: "Tẩy toilet" },
];

export default function Home() {
  const products = getFeaturedProducts().slice(0, 4);
  const news = getLatestNews(3);

  return (
    <>
      <section className="template-hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Dunix8 Laundry Care</p>
          <h1>Cách mạng giặt xả mới.</h1>
          <p>
            Sức mạnh 6X, lưu hương 24h. Cho quần áo và không gian sống luôn sạch thơm, tươi sáng mỗi ngày.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/san-pham">
              Khám phá sản phẩm
            </Link>
            <Link className="button ghost" href="/lien-he">
              Tư vấn miễn phí
            </Link>
          </div>
        </div>

        <div className="template-hero-stage" aria-label="Sản phẩm nổi bật Dunix8">
          <Image
            className="hero-product hero-product-main"
            src="/images/products/nuoc_giat_dunix8_hygien_3kg.jpg"
            alt="Nước giặt Dunix8"
            width={420}
            height={520}
            priority
          />
          <Image
            className="hero-product hero-product-left"
            src="/images/products/nuoc_giat_dunix8_huong_154_3kg.jpg"
            alt="Nước xả Dunix8"
            width={260}
            height={340}
          />
          <Image
            className="hero-product hero-product-right"
            src="/images/products/rua_chen_huong_que_3.6kg.jpg"
            alt="Nước rửa chén Dunix8"
            width={260}
            height={340}
          />
        </div>
      </section>

      <section className="section feature-section">
        <div className="feature-card-grid">
          {features.map((item) => (
            <article className="feature-card" key={item.title}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section category-showcase">
        <SectionTitle eyebrow="Danh mục sản phẩm" title="Giải pháp chăm sóc nhà cửa toàn diện" />
        <div className="category-tile-grid">
          {categories.map((item) => (
            <Link className="category-tile" href={item.href} key={item.title}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 900px) 45vw, 18vw" />
              <strong>{item.title}</strong>
              <span>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section home-products">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="Sản phẩm nổi bật"
            title="Một vài lựa chọn được quan tâm"
            description="Trang chủ chỉ hiển thị một số sản phẩm tiêu biểu. Bạn có thể vào trang sản phẩm để xem đầy đủ danh mục Dunix8."
          />
          <Link className="section-link" href="/san-pham">
            Xem tất cả sản phẩm
          </Link>
        </div>
        <ProductGrid products={products} />
      </section>

      <section className="section news-preview-section">
        <SectionTitle
          eyebrow="Tin tức Dunix8"
          title="Cập nhật hoạt động và mẹo chăm sóc nhà cửa"
        />
        <NewsGrid articles={news} />
      </section>
    </>
  );
}
