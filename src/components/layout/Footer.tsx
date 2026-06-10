import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const quickLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
];

const productLinks = [
  { href: "/danh-muc/nuoc-giat", label: "Nước giặt" },
  { href: "/danh-muc/nuoc-xa", label: "Nước xả" },
  { href: "/danh-muc/combo", label: "Combo giặt xả" },
  { href: "/san-pham", label: "Chăm sóc quần áo" },
];

const promises = [
  "Sạch sâu vượt trội",
  "Thơm lâu mềm mại",
  "An toàn lành tính",
  "Tiết kiệm hiệu quả",
];

const socialItems = ["F", "T", "YT", "Z", "IG"];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <section className="footer-brand" aria-label="Thông tin Dunix8">
          <Link className="footer-logo-link" href="/" aria-label="Dunix8 trang chủ">
            <Image
              className="footer-logo"
              src="/images/logo/logo.jpg"
              alt="Logo Dunix8"
              width={260}
              height={120}
            />
          </Link>
          <p>
            Dunix8 mang đến giải pháp giặt giũ hiệu quả với công nghệ hiện đại,
            hương thơm bền lâu và an toàn cho cả gia đình.
          </p>
          <div className="promise-grid">
            {promises.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="footer-links" aria-label="Liên kết nhanh">
          <h3>Liên kết nhanh</h3>
          {quickLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </section>

        <section className="footer-links footer-categories" aria-label="Danh mục sản phẩm">
          <h3>Danh mục sản phẩm</h3>
          {productLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </section>

        <section className="footer-contact" aria-label="Liên hệ với chúng tôi">
          <h3>Liên hệ với chúng tôi</h3>
          <strong>{site.hotline}</strong>
          <p>{site.email}</p>
          <p>Tân Luật, Cồng Chính, Thanh Hóa, Việt Nam</p>
          <div className="social-row" aria-label="Mạng xã hội">
            {socialItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="footer-showcase" aria-label="Catalogue sản phẩm Dunix8">
          <div className="footer-product">
            <Image
              src="/images/about/catalogue-cover.webp"
              alt="Catalogue sản phẩm Dunix8"
              fill
              sizes="(max-width: 900px) 80vw, 24vw"
            />
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dunix8. All rights reserved.</span>
        <span>
          Sản phẩm chính hãng - Chất lượng đạt chuẩn - Vì cuộc sống tươi đẹp hơn
        </span>
      </div>
    </footer>
  );
}
