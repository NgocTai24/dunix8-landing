import Link from "next/link";
import Image from "next/image";
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

const catalogueItems = [
  {
    src: "/images/about/catalogue-giat-xa.webp",
    title: "Giat xa",
  },
  {
    src: "/images/about/catalogue-lau-san.webp",
    title: "Lau san",
  },
  {
    src: "/images/about/catalogue-rua-chen.webp",
    title: "Rua chen",
  },
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
          <p>
            Giai phap giat xa va cham soc nha cua voi hinh anh tuoi sang, sach
            se, phu hop cho gia dinh va dai ly.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/san-pham">
              Xem san pham
            </Link>
            <Link className="button ghost" href="/lien-he">
              Nhan bao gia
            </Link>
          </div>
        </div>
        <div className="hero-media" aria-label="Catalogue san pham Dunix8">
          <Image
            src="/images/about/catalogue-cover.webp"
            alt="Catalogue gioi thieu san pham Dunix8"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
      </section>

      <section className="section catalogue-section">
        <SectionTitle
          eyebrow="Bo san pham"
          title="Hinh anh gioi thieu da san sang de dung cho landing page"
          description="Cac anh trong thu muc about duoc dat vao nhung vung noi bat de nguoi xem thay ngay nhom san pham Dunix8."
        />
        <div className="catalogue-grid">
          {catalogueItems.map((item) => (
            <article className="catalogue-card" key={item.src}>
              <Image
                src={item.src}
                alt={`Catalogue ${item.title} Dunix8`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <strong>{item.title}</strong>
            </article>
          ))}
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
