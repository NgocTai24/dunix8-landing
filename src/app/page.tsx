import Image from "next/image";
import Link from "next/link";
import { NewsGrid } from "@/components/news/NewsGrid";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionTitle } from "@/components/common/SectionTitle";
import { site } from "@/data/site";
import { getLatestNews } from "@/lib/news";
import { getFeaturedProducts } from "@/lib/products";

const strengths = [
  "Làm sạch hiệu quả, dễ sử dụng mỗi ngày",
  "Hương thơm dịu nhẹ, phù hợp gia đình Việt",
  "Bao bì rõ ràng, thuận tiện cho đại lý tư vấn",
];

const catalogueItems = [
  {
    src: "/images/about/catalogue-giat-xa.webp",
    title: "Giặt xả",
    description: "Nước giặt, nước xả và combo chăm sóc quần áo.",
  },
  {
    src: "/images/about/catalogue-lau-san.webp",
    title: "Lau sàn",
    description: "Giải pháp làm sạch sàn nhà, giữ không gian thơm mát.",
  },
  {
    src: "/images/about/catalogue-rua-chen.webp",
    title: "Rửa chén",
    description: "Sản phẩm làm sạch gian bếp với hương thơm tự nhiên.",
  },
];

const heroStats = [
  { value: "6X", label: "Sức mạnh làm sạch" },
  { value: "08h", label: "Tư vấn mỗi ngày" },
  { value: "3+", label: "Nhóm sản phẩm chính" },
];

export default function Home() {
  const products = getFeaturedProducts().slice(0, 3);
  const news = getLatestNews(3);

  return (
    <>
      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Dunix8 chăm sóc nhà cửa</p>
          <h1>{site.name}</h1>
          <p>
            Giải pháp giặt xả và vệ sinh gia dụng với hình ảnh tươi sáng, sạch
            sẽ, phù hợp cho gia đình Việt và hệ thống đại lý.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/san-pham">
              Xem sản phẩm
            </Link>
            <Link className="button ghost" href="/lien-he">
              Nhận tư vấn
            </Link>
          </div>
          <div className="hero-stats">
            {heroStats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-media home-hero-media" aria-label="Sản phẩm nổi bật Dunix8">
          <div className="hero-product-stage">
            <span className="floating-badge">Sạch sâu • Thơm lâu</span>
            <Image
              className="hero-product hero-product-main"
              src="/images/products/nuoc_giat_dunix8_hygien_3kg.jpg"
              alt="Nước giặt Dunix8 Hygien 3kg"
              width={360}
              height={430}
              priority
            />
            <Image
              className="hero-product hero-product-left"
              src="/images/products/rua_chen_huong_que_3.6kg.jpg"
              alt="Nước rửa chén Dunix8 hương Quế"
              width={240}
              height={280}
            />
            <Image
              className="hero-product hero-product-right"
              src="/images/products/lau_san_sa_chanh_dunix8_3_6kg.jpg"
              alt="Nước lau sàn Dunix8 sả chanh"
              width={240}
              height={280}
            />
          </div>
        </div>
      </section>

      <section className="section home-products">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="Sản phẩm nổi bật"
            title="Một vài lựa chọn đang được quan tâm"
            description="Trang chủ chỉ hiển thị một số sản phẩm tiêu biểu. Bạn có thể vào trang sản phẩm để xem đầy đủ danh mục Dunix8."
          />
          <Link className="section-link" href="/san-pham">
            Xem tất cả sản phẩm
          </Link>
        </div>
        <ProductGrid products={products} />
      </section>

      <section className="section catalogue-section">
        <SectionTitle
          eyebrow="Danh mục chính"
          title="Hệ sản phẩm chăm sóc nhà cửa Dunix8"
          description="Các nhóm sản phẩm được trình bày bằng hình ảnh catalogue rõ ràng để khách hàng dễ nhận diện."
        />
        <div className="catalogue-grid home-catalogue-grid">
          {catalogueItems.map((item) => (
            <article className="catalogue-card" key={item.src}>
              <Image
                src={item.src}
                alt={`Catalogue ${item.title} Dunix8`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
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
          eyebrow="Góc chăm sóc nhà cửa"
          title="Mẹo nhỏ giúp giặt xả và vệ sinh hiệu quả hơn"
        />
        <NewsGrid articles={news} />
      </section>
    </>
  );
}
