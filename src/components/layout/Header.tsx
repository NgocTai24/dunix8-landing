import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/san-pham", label: "Sản phẩm", hasDropdown: true },
  { href: "/danh-muc/nuoc-giat", label: "Danh mục", hasDropdown: true },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/lien-he", label: "Liên hệ" },
];

export function Header() {
  return (
    <header className="header-shell">
      <div className="topbar">
        <p>Sạch sâu • Thơm lâu • An toàn cho cả gia đình</p>
        <div>
          <span>Hotline: {site.hotline}</span>
          <span>Thứ 2 - Chủ nhật: 08:00 - 20:00</span>
        </div>
      </div>
      <div className="site-header">
        <Link className="brand" href="/" aria-label="Dunix8 trang chủ">
          <Image
            className="brand-logo"
            src="/images/logo/logo.jpg"
            alt="Logo Dunix8"
            width={200}
            height={150}
            priority
          />
        </Link>
        <nav aria-label="Điều hướng chính">
          {navItems.map((item, index) => (
            <Link
              className={index === 0 ? "active" : ""}
              href={item.href}
              key={item.href}
            >
              {item.label}
              {item.hasDropdown ? <span className="chevron">⌄</span> : null}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button className="search-button" type="button" aria-label="Tìm kiếm">
            <span>⌕</span>
          </button>
          <Link className="header-cta" href="/lien-he">
            Tư vấn ngay
          </Link>
        </div>
      </div>
    </header>
  );
}
