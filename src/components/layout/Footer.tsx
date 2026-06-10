import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
        <Link className="brand" href="/">
          <Image
            className="brand-logo"
            src="/images/logo/logo.jpg"
            alt="Logo Dunix8"
            width={178}
            height={76}
          />
        </Link>
          <p>
            Dunix8 mang đến giải pháp giặt giũ hiệu quả với công nghệ hiện đại,
            hương thơm bền lâu và an toàn cho cả gia đình.
          </p>
          <div className="promise-grid">
            <span>Sạch sâu vượt trội</span>
            <span>Thơm lâu mềm mại</span>
            <span>An toàn lành tính</span>
            <span>Tiết kiệm hiệu quả</span>
          </div>
        </div>
        <div className="footer-links">
          <h3>Liên kết nhanh</h3>
          <Link href="/">Trang chủ</Link>
          <Link href="/gioi-thieu">Giới thiệu</Link>
          <Link href="/san-pham">Sản phẩm</Link>
          <Link href="/tin-tuc">Tin tức</Link>
          <Link href="/lien-he">Liên hệ</Link>
        </div>
        <div className="footer-links">
          <h3>Danh mục sản phẩm</h3>
          <Link href="/danh-muc/nuoc-giat">Nước giặt</Link>
          <Link href="/danh-muc/nuoc-xa">Nước xả</Link>
          <Link href="/danh-muc/combo">Combo giặt xả</Link>
          <Link href="/san-pham">Chăm sóc quần áo</Link>
        </div>
        <div className="footer-contact">
          <h3>Liên hệ với chúng tôi</h3>
          <strong>{site.hotline}</strong>
          <p>{site.email}</p>
          <p>{site.address}</p>
          <div className="social-row">
            <span>f</span>
            <span>t</span>
            <span>yt</span>
            <span>z</span>
            <span>ig</span>
          </div>
        </div>
        <div className="footer-product">
          <Image
            src="/images/about/catalogue-cover.webp"
            alt="Bộ sản phẩm Dunix8"
            fill
            sizes="(max-width: 900px) 80vw, 24vw"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Dunix8. All rights reserved.</span>
        <span>Sản phẩm chính hãng - Chất lượng đạt chuẩn - Vì cuộc sống tươi đẹp hơn</span>
      </div>
    </footer>
  );
}
