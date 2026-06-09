import Link from "next/link";
import { site } from "@/data/site";

const navItems = [
  { href: "/", label: "Trang chu" },
  { href: "/gioi-thieu", label: "Gioi thieu" },
  { href: "/san-pham", label: "San pham" },
  { href: "/tin-tuc", label: "Tin tuc" },
  { href: "/lien-he", label: "Lien he" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Dunix8 trang chu">
        <span className="brand-mark">D8</span>
        <span>{site.name}</span>
      </Link>
      <nav aria-label="Dieu huong chinh">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/lien-he">
        Tu van
      </Link>
    </header>
  );
}
