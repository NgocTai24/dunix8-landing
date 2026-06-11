"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Trang chủ", match: "exact" },
  { href: "/gioi-thieu", label: "Giới thiệu", match: "prefix" },
  { href: "/san-pham", label: "Sản phẩm", hasDropdown: true, match: "prefix" },
  {
    href: "/danh-muc/nuoc-giat",
    label: "Danh mục",
    hasDropdown: true,
    match: "category",
  },
  { href: "/tin-tuc", label: "Tin tức", match: "prefix" },
  { href: "/lien-he", label: "Liên hệ", match: "prefix" },
];

function isActive(pathname: string, item: (typeof navItems)[number]) {
  if (item.match === "exact") {
    return pathname === item.href;
  }

  if (item.match === "category") {
    return pathname.startsWith("/danh-muc");
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="header-shell">
      <div className="site-header">
        <Link className="brand" href="/" aria-label="Dunix8 trang chủ">
          <Image
            className="brand-logo"
            src="/images/logo/logo.jpg"
            alt="Logo Dunix8"
            width={190}
            height={86}
            priority
          />
        </Link>
        <nav aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <Link
              className={isActive(pathname, item) ? "active" : undefined}
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
