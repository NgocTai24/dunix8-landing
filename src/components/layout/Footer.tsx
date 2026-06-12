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
  { href: "/san-pham?category=nuoc-giat", label: "Nước giặt" },
  { href: "/san-pham?category=nuoc-xa", label: "Nước xả" },
  { href: "/san-pham?category=nuoc-rua-chen", label: "Nước rửa chén" },
  { href: "/san-pham?category=nuoc-lau-san", label: "Nước lau sàn" },
];

const aboutImages = [
  { src: "/images/about/catalogue-cover.webp", label: "Catalogue" },
  { src: "/images/about/catalogue-giat-xa.webp", label: "Giặt xả" },
  { src: "/images/about/catalogue-lau-san.webp", label: "Lau sàn" },
  { src: "/images/about/catalogue-rua-chen.webp", label: "Rửa chén" },
];

const socialItems = ["F", "T", "YT", "Z"];

const trustItems = [
  "Sản phẩm chính hãng",
  "Chất lượng đạt chuẩn",
  "An toàn cho gia đình",
];

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
              width={220}
              height={92}
            />
          </Link>
          <p>
            Dunix8 mang đến giải pháp giặt giũ và chăm sóc nhà cửa hiện đại,
            thơm sạch, tiện dụng cho gia đình Việt.
          </p>
          <div className="social-row" aria-label="Mạng xã hội">
            {socialItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="footer-links" aria-label="Liên kết nhanh">
          <h3>
            <span className="footer-title-icon">L</span>
            Liên kết
          </h3>
          {quickLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </section>

        <section className="footer-links footer-categories" aria-label="Danh mục sản phẩm">
          <h3>
            <span className="footer-title-icon">D</span>
            Danh mục
          </h3>
          {productLinks.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </section>

        <section className="footer-contact" aria-label="Liên hệ với chúng tôi">
          <h3>
            <span className="footer-title-icon">C</span>
            Liên hệ
          </h3>
          <strong>{site.hotline}</strong>
          <p>{site.email}</p>
          <p>Tân Luật, Cồng Chính, Thanh Hóa, Việt Nam</p>
        </section>

        <section className="footer-showcase" aria-label="Hình ảnh sản phẩm nổi bật">
          <h3>
            <span className="footer-title-icon">A</span>
            Hình ảnh sản phẩm nổi bật
          </h3>
          <div className="footer-about-grid">
            {aboutImages.map((item) => (
              <Link className="footer-about-card" href="/gioi-thieu" key={item.src}>
                <Image
                  src={item.src}
                  alt={`${item.label} Dunix8`}
                  fill
                  sizes="(max-width: 900px) 45vw, 11vw"
                />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="footer-wave" aria-hidden="true">
        <span />
      </div>

      <div className="footer-trust">
        {trustItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dunix8. All rights reserved.</span>
        <span>Sản phẩm chính hãng - Chất lượng đạt chuẩn</span>
      </div>
    </footer>
  );
}
